// Real client testimonials only.
//
// This file was created to replace six invented reviews ("Oliver Bennett —
// Great experience...") that shipped on the homepage and every service page.
// Fabricated reviews are a Google structured-data policy violation the moment
// Review schema is attached to them, and they are worth nothing to a contractor
// deciding whether to trust the agency.
//
// The testimonial section renders nothing while this list is empty, so the site
// simply does not claim social proof it does not have. Add entries here as real
// ones come in and the section reappears everywhere at once.
//
// Shape:
//   {
//     name: "First Last",           // the person who said it
//     business: "Business Name",    // their company
//     location: "City, ST",
//     industry: "HVAC",
//     quote: "What they actually said.",
//     rating: 5,                    // only if they actually gave one
//   }
export const testimonials = [];
