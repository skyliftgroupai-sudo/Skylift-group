// Regression test for the 2026-10-09 blank-page failure on /contact.
//
// Run it after any change to an embedded third-party iframe.
//
// Every previous test aborted link.msgsndr.com, so form_embed.js never ran and
// the bug was invisible. This serves a stand-in that does what a resizer does to
// an adopted iframe -- rewrite its attributes and replace the node -- then
// drives a React re-render and checks the app is still on screen.
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";
const ROOT="/home/user/seo/dist";
const T={".html":"text/html",".js":"text/javascript",".css":"text/css",".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml",".woff2":"font/woff2",".ico":"image/x-icon"};
const s=createServer((q,r)=>{let f=join(ROOT,decodeURIComponent(q.url.split("?")[0]));if(!existsSync(f)||statSync(f).isDirectory())f=join(f,"index.html");if(!existsSync(f)){r.writeHead(404);return r.end("");}r.writeHead(200,{"content-type":T[extname(f)]||"application/octet-stream"});r.end(readFileSync(f));});
await new Promise(r=>s.listen(0,r));
const BASE=`http://127.0.0.1:${s.address().port}`;

// What a resizer does to a frame it has adopted.
const SIM = `
(function () {
  function adopt() {
    document.querySelectorAll('iframe[data-form-id], iframe[data-layout]').forEach(function (f) {
      f.setAttribute('scrolling','no');
      f.style.height = f.getAttribute('data-height') + 'px';
      // Resizers commonly re-insert the node. This is the step React cannot survive.
      var clone = f.cloneNode(true);
      f.parentNode.replaceChild(clone, f);
      window.__simAdopted = (window.__simAdopted || 0) + 1;
    });
  }
  setTimeout(adopt, 1200);
  setTimeout(adopt, 2600);
})();
`;

const b=await chromium.launch({executablePath:"/opt/pw-browsers/chromium"});
let pass=0, fail=0;
const ok=(c,m)=>{console.log(`   ${c?"PASS":"FAIL"}  ${m}`);c?pass++:fail++;};

// probe "ok"      -- the no-cors reachability probe resolves: the embed must stay.
// probe "blocked"  -- it rejects, as an ad blocker makes it: the fallback must show.
//
// The iframe's own request is aborted either way (this container has no egress to
// leadconnectorhq.com), so "the embed stays" is asserted on the element being in
// the DOM, not on the form inside it having rendered.
for (const probe of ["ok", "blocked"]) {
for (const route of ["/contact", "/services/missed-call-text-back"]) {
  const ctx=await b.newContext({viewport:{width:1280,height:900}});
  const p=await ctx.newPage();
  const errors=[];
  p.on("pageerror", e => errors.push(e.message.slice(0,120)));
  await ctx.route("**://www.googletagmanager.com/**", r=>r.abort());
  // Serve the stand-in instead of aborting it -- the whole point.
  await ctx.route("**://link.msgsndr.com/js/form_embed.js", r=>
    r.fulfill({status:200, contentType:"text/javascript", body:SIM}));
  await ctx.route("**://*.leadconnectorhq.com/**", r=>
    r.request().resourceType()!=="fetch" ? r.abort()
      : probe==="ok" ? r.fulfill({status:200,body:""}) : r.abort());

  await p.goto(BASE+route, {waitUntil:"load"});
  await p.waitForTimeout(1200);
  if (route !== "/contact") await p.locator("#service-inquiry-heading").scrollIntoViewIfNeeded();
  await p.waitForTimeout(3000);
  // Force the React re-render that previously killed the tree.
  await p.evaluate(()=>window.dispatchEvent(new Event("resize")));
  // Past the 6s backstop: a timer that is not cancelled on success fires in here.
  await p.waitForTimeout(4000);
  const adopted = await p.evaluate(()=>window.__simAdopted || 0);
  const rootText = (await p.evaluate(()=>document.getElementById("root")?.innerText || "")).trim();
  const tag = `${probe.padEnd(7)} ${route.padEnd(34)}`;
  ok(rootText.length > 200, `${tag} app still rendered after the resizer ran (${rootText.length} chars, ${adopted} frame(s) adopted)`);
  ok(errors.length === 0, `${tag} no uncaught page errors ${errors.length?JSON.stringify(errors):""}`);

  const frames = await p.locator('iframe[src*="leadconnectorhq.com/widget/form"]').count();
  const fellBack = /could not load/i.test(rootText);
  if (probe === "ok") {
    ok(frames === 1, `${tag} embed still mounted past the backstop (${frames} iframe)`);
    ok(!fellBack, `${tag} fallback not shown while the probe is reachable`);
  } else {
    ok(frames === 0 && fellBack, `${tag} fallback shown when the probe is blocked (${frames} iframe, fellBack=${fellBack})`);
  }
  await ctx.close();
}
}
await b.close(); s.close();
console.log(`\n  ${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
