// Renders a full service page from a content object in src/content/services/.
//
// Phase 3 pages are long-form (1,200+ words) and share a fixed shape: a direct
// answer block first for answer engines, then how-it-works, benefits,
// compliance or detail notes, industries served, FAQs and a CTA. Keeping that
// shape in one component means every page gets the same structure, the same
// heading hierarchy and the same schema wiring — and a fix to any of it applies
// everywhere at once.
//
// The h1, the hero subline, every section body and every FAQ still come from
// the content object and src/lib/service-faqs.js untouched. The redesign
// changed how they are presented, not a word of what they say.

import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { routeFaqs } from "../lib/service-faqs";
import PageHero from "../components/PageHero";
import FinalCta from "../components/home/FinalCta";
import ServiceFaq from "../components/service/ServiceFaq";
import {
  DirectAnswer,
  ServiceSections,
  RelatedServices,
} from "../components/service/ServiceBody";

export default function ServicePage({ content }) {
  const faqs = routeFaqs[content.route] || [];

  useSeo(seoFor(content.route, { image: content.heroImage }));

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Service"
        title={content.h1}
        subtitle={content.heroSub}
        primaryCta={{ to: "/book", label: "Book a Free Strategy Call" }}
        secondaryCta={{ to: "/services", label: "All Services" }}
      />

      <DirectAnswer text={content.directAnswer} />
      <ServiceSections sections={content.sections} />
      <ServiceFaq faqs={faqs} />
      <RelatedServices related={content.related} />

      <FinalCta />
    </div>
  );
}
