import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync, globSync } from "node:fs";
import { join, extname } from "node:path";
const [dist, port, label] = process.argv.slice(2);
const mime={".html":"text/html",".js":"text/javascript",".css":"text/css",".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml",".ico":"image/x-icon",".avif":"image/avif",".woff2":"font/woff2"};
const server=createServer((q,s)=>{const u=decodeURIComponent(q.url.split("?")[0]);
for(const c of [join(dist,u),join(dist,u,"index.html"),join(dist,u+".html")]){
  if(existsSync(c)&&statSync(c).isFile()){s.writeHead(200,{"Content-Type":mime[extname(c)]||"application/octet-stream"});return s.end(readFileSync(c));}}
s.writeHead(404);s.end("nf");});
await new Promise(r=>server.listen(Number(port),r));
const ROUTES=["/services/seo","/services/ai-workflows","/services/one-click-campaigns","/services/reviews","/work"];
const exe=globSync("/opt/pw-browsers/chromium-*/chrome-linux/chrome")[0];
const b=await chromium.launch(exe?{executablePath:exe}:{});
for(const route of ROUTES){
  const lcps=[];
  for(let i=0;i<5;i++){
    const ctx=await b.newContext({viewport:{width:390,height:844}});
    const p=await ctx.newPage();
    const cdp=await ctx.newCDPSession(p); await cdp.send("Network.enable");
    await cdp.send("Network.emulateNetworkConditions",{offline:false,latency:150,downloadThroughput:1.6*1024*1024/8,uploadThroughput:750*1024/8});
    await cdp.send("Emulation.setCPUThrottlingRate",{rate:4});
    await p.addInitScript(()=>{window.__l=0;new PerformanceObserver(l=>{for(const e of l.getEntries())window.__l=e.startTime;}).observe({type:"largest-contentful-paint",buffered:true});});
    await p.goto(`http://localhost:${port}${route}`,{waitUntil:"load",timeout:60000});
    await p.waitForTimeout(3500);
    lcps.push(await p.evaluate(()=>window.__l));
    await ctx.close();
  }
  const med=lcps.slice().sort((x,y)=>x-y)[2];
  console.log(`${label}|${route}|${med.toFixed(0)}|${Math.min(...lcps).toFixed(0)}-${Math.max(...lcps).toFixed(0)}`);
}
await b.close();server.close();
