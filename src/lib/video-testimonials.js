// Real client video testimonials only.
//
// Same rule as src/lib/testimonials.js: nothing invented. While this list is
// empty, /testimonials renders a short placeholder, stays out of the sitemap,
// is not linked from the footer, and carries noindex -- an empty testimonials
// page indexed is a thin page telling prospects we have no clients.
//
// Adding one entry here flips all four of those at once. Nothing else to edit.
//
// Shape:
//   {
//     id:        "dana-ridgeline",       // URL-safe; used for the anchor
//     name:      "First Last",           // the person on camera
//     business:  "Business Name",
//     location:  "City, ST",
//     industry:  "HVAC",
//     headline:  "One line summarising what they said.",
//     embedUrl:  "https://www.youtube.com/embed/VIDEO_ID",  // privacy-enhanced
//                                                           // youtube-nocookie
//                                                           // is fine too
//     contentUrl:   "https://www.youtube.com/watch?v=VIDEO_ID", // optional
//     thumbnailUrl: "https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
//     uploadDate:   "2026-10-14",        // ISO date the video was published
//     duration:     "PT2M14S",           // ISO 8601 duration; omit if unknown
//     description:  "Two sentences of what the video covers.",
//     transcript: [                      // full spoken transcript, paragraph
//       "First paragraph of what they said.",   // per entry. This is the part
//       "Second paragraph.",                    // search engines can read.
//     ],
//   }
//
// Note on schema: each entry emits a VideoObject. It does NOT emit Review or
// AggregateRating. Google's structured-data policy disallows review markup a
// site writes about itself, and a testimonials page is exactly that case.
export const videoTestimonials = [];
