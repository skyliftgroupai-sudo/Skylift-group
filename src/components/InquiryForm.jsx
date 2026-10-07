import { useRef, useState } from "react";
import { Mail, PhoneCall, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { trackFormSubmit } from "../lib/analytics";
import { INQUIRY_ENDPOINT, hasInquiryEndpoint } from "../lib/inquiry-endpoint";

// A short native inquiry form.
//
// NOT LIVE YET. hasInquiryEndpoint() is false until src/lib/inquiry-endpoint.js
// is given a verified destination, and this component renders null until then.
// Nothing here guesses where submissions should go.
//
// Why it exists: the live inquiry path is a cross-origin LeadConnector iframe.
// That works, but its fields, labels, validation and error handling belong to
// LeadConnector, so none of them can be made accessible from here. This is the
// version we control -- four fields, real labels, inline validation, and a
// success state that only appears once the destination has accepted the post.
//
// Analytics: the submit event carries the form's location only. No name, email,
// phone or message text is ever passed to analytics.

const FIELDS = [
  { name: "name",  label: "Your name",      type: "text",  required: true,  autoComplete: "name" },
  { name: "email", label: "Email",          type: "email", required: true,  autoComplete: "email" },
  { name: "phone", label: "Phone (optional)", type: "tel", required: false, autoComplete: "tel" },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "That email address does not look right. Please check it.";
  if (!values.message.trim()) errors.message = "Please tell us what you need.";
  else if (values.message.trim().length < 10)
    errors.message = "A little more detail helps us give you a useful answer.";
  return errors;
}

export default function InquiryForm({ formLocation = "contact" }) {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "", company: "" });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const formRef = useRef(null);

  if (!hasInquiryEndpoint()) return null;

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first field that needs attention.
      const first = formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      return;
    }
    // Honeypot: a real person leaves this empty. Report success without sending.
    if (values.company.trim()) { setState("sent"); return; }

    setState("sending");
    try {
      const res = await fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
          // Attribution, no personal data: which page the inquiry came from and
          // what sent the visitor there.
          page_path: typeof window !== "undefined" ? window.location.pathname : "",
          referrer: typeof document !== "undefined" ? document.referrer : "",
        }),
      });
      if (!res.ok) throw new Error(`Destination returned ${res.status}`);
      // Success only after the destination accepted it.
      setState("sent");
      trackFormSubmit(formLocation);
    } catch (err) {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div
        role="status"
        className="rounded-xl border border-[#00A693]/40 bg-[#00A693]/[0.08] p-7 text-center"
      >
        <CheckCircle2 className="mx-auto h-9 w-9 text-[#00A693]" />
        <h3 className="mt-3 text-xl font-bold text-white">Thanks — that reached us.</h3>
        <p className="mt-2 text-gray-300 leading-relaxed">
          We read every message ourselves. If it is urgent, call{" "}
          <a href="tel:+17252631475" className="text-[#00A693] underline underline-offset-2">
            +1 (725) 263-1475
          </a>{" "}
          rather than waiting on a reply.
        </p>
      </div>
    );
  }

  const invalid = (n) => (errors[n] ? "true" : undefined);
  const describe = (n) => (errors[n] ? `${n}-error` : undefined);
  const inputCls = (n) =>
    `w-full rounded-lg border bg-[#0f0f0f] px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:ring-2 focus:ring-[#00A693] ${
      errors[n] ? "border-red-500/70" : "border-white/15"
    }`;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      {FIELDS.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className="block text-sm font-semibold text-white mb-1.5">
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            autoComplete={f.autoComplete}
            required={f.required}
            value={values[f.name]}
            onChange={set(f.name)}
            aria-invalid={invalid(f.name)}
            aria-describedby={describe(f.name)}
            className={inputCls(f.name)}
          />
          {errors[f.name] && (
            <p id={`${f.name}-error`} className="mt-1.5 text-sm text-red-400">
              {errors[f.name]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-1.5">
          What do you need help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={set("message")}
          aria-invalid={invalid("message")}
          aria-describedby={describe("message")}
          className={inputCls("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Spam honeypot. Hidden from everyone, including screen readers, and
          skipped by the keyboard -- so only a bot fills it in. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company (leave this blank)</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off"
          value={values.company} onChange={set("company")} />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00A693] px-6 py-3.5 font-semibold text-white transition hover:bg-[#00947F] disabled:opacity-60"
      >
        {state === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Send"
        )}
      </button>

      {/* Announced to screen readers when it appears, without stealing focus. */}
      <div aria-live="polite">
        {state === "error" && (
          <div className="flex gap-3 rounded-lg border border-red-500/40 bg-red-500/[0.08] p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
            <div className="text-sm text-gray-200">
              <p className="font-semibold text-white">That did not go through.</p>
              <p className="mt-1 leading-relaxed">
                Nothing was lost — your message is still in the box above, so you can try again.
                Or reach us directly at{" "}
                <a href="mailto:hello@skyliftgroup.com" className="text-[#00A693] underline underline-offset-2">
                  hello@skyliftgroup.com
                </a>{" "}
                or{" "}
                <a href="tel:+17252631475" className="text-[#00A693] underline underline-offset-2">
                  +1 (725) 263-1475
                </a>.
              </p>
            </div>
          </div>
        )}
      </div>

      <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-1 text-sm text-gray-400">
        <span>Prefer not to use a form?</span>
        <a href="mailto:hello@skyliftgroup.com" className="inline-flex items-center gap-1.5 text-[#00A693] hover:underline">
          <Mail className="h-4 w-4" /> hello@skyliftgroup.com
        </a>
        <a href="tel:+17252631475" className="inline-flex items-center gap-1.5 text-[#00A693] hover:underline">
          <PhoneCall className="h-4 w-4" /> +1 (725) 263-1475
        </a>
      </p>
    </form>
  );
}
