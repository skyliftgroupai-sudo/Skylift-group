// Client video testimonials.
//
// Empty on purpose. Nothing goes in here without the client's name, business,
// city/state, industry, the specific result they are describing, and their
// permission to publish it.
//
// Shape for each entry:
//   {
//     name: "Jane Doe",
//     business: "Doe Plumbing",
//     location: "Bozeman, MT",
//     industry: "Plumbing",
//     result: "One line, in their words, about what changed",
//     poster: "/assets/testimonials/doe-plumbing.webp",   // WebP still frame
//     videoUrl: "https://www.youtube.com/watch?v=..."     // or a hosted MP4
//   }
export const videoTestimonials = [];

// While the list is empty the section shows neutral placeholder cards so the
// layout is visible and ready. Flip this to false to hide the section entirely
// until the first real video lands. The placeholders carry no name, no quote
// and no claim — there is nothing here for a reader to mistake for a review.
export const SHOW_PLACEHOLDERS = true;
