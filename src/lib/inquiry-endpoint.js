// Where a native inquiry submission is POSTed.
//
// EMPTY ON PURPOSE. Nothing is guessed here.
//
// The site already has a working inquiry capability: the LeadConnector form
// widget J6Gtz1pzBFNFDvoMGV05, embedded on /contact and on all 18 service
// pages, plus the LeadConnector chat widget and the booking calendar. Those
// deliver into LeadConnector. Where inside LeadConnector they land -- which
// sub-account, pipeline, and notification -- is configured in LeadConnector and
// is not readable from this codebase.
//
// So there is no verified endpoint a native form could post to. Inventing one
// would silently drop every inquiry, which is worse than not having the form.
//
// While this is empty, <InquiryForm> renders nothing and the verified
// LeadConnector embed stays the live path. Set it and the form becomes active
// with no other change.
//
// What belongs here: a URL that accepts a POST of
//   { name, email, phone, message, page_path, referrer }
// and returns 2xx on acceptance. In LeadConnector that is usually an
// Inbound Webhook trigger URL on a workflow. It must be a URL that is safe to
// expose in client-side code -- a webhook endpoint, never an API key.
export const INQUIRY_ENDPOINT = "";

export const hasInquiryEndpoint = () =>
  typeof INQUIRY_ENDPOINT === "string" && INQUIRY_ENDPOINT.startsWith("https://");
