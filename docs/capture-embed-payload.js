// Capture the real LeadConnector postMessage payload — paste into the browser
// console on https://www.skyliftgroup.com/contact or /book, then submit.
//
// Listens on ALL origins deliberately, so the true origin is revealed even if it
// is not one we currently allow-list. Redacts anything that looks like personal
// data before printing, because the reported inquiry payload carries email, full
// name and phone — we need the SHAPE, never the contact's details.
(() => {
  const seen = [];
  const SENSITIVE = /name|email|phone|address|first|last|contact|full/i;
  const redact = (v) => {
    if (typeof v === "string") {
      if (v.includes("@")) return "<email>";
      if (/^\+?[\d\s()\-]{7,}$/.test(v)) return "<phone>";
      return v.length > 80 ? v.slice(0, 80) + "…" : v;
    }
    if (Array.isArray(v)) return v.map(redact);
    if (v && typeof v === "object") {
      const out = {};
      for (const k of Object.keys(v)) out[k] = SENSITIVE.test(k) ? "<redacted>" : redact(v[k]);
      return out;
    }
    return v;
  };
  addEventListener("message", (e) => {
    if (typeof e.data === "string" && e.data.includes("iFrameSizer")) return; // resize chatter
    const row = { origin: e.origin, type: Array.isArray(e.data) ? "array" : typeof e.data, data: redact(e.data) };
    seen.push(row);
    console.log("[CAPTURED]", row.origin, row.data);
  });
  window.__slgDump = () => console.log(JSON.stringify(seen, null, 2));
  console.log("%cCapture armed.", "color:#00A693;font-weight:bold");
  console.log("Now submit the form (or complete a booking). Then run:  __slgDump()");
})();
