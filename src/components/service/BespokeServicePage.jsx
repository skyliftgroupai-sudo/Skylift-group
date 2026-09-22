import PageHero from "../PageHero";
import ServiceIntro from "./ServiceIntro";
import ServiceFeatureGrid from "./ServiceFeatureGrid";
import ServiceFaq from "./ServiceFaq";
import FinalCta from "../home/FinalCta";
import { DirectAnswer, ServiceSections, RelatedServices } from "./ServiceBody";
import useSeo from "../../hooks/useSeo";
import { seoFor } from "../../lib/schema";
import { routeFaqs } from "../../lib/service-faqs";

/**
 * The shape the sixteen hand-built service pages all shared: photo hero,
 * two-column intro, icon-card grid, an optional long-form block, an FAQ
 * accordion, a CTA.
 *
 * They were sixteen near-identical copies of that skeleton, each with its own
 * spacing, its own accordion and its own bugs — which is how the collapsed-FAQ
 * defect managed to live on all sixteen at once. One template now, sixteen
 * files of content.
 *
 * Nothing here invents copy: `h1`, `heroSub`, the intro, the cards and the
 * long-form block are all passed in from the page, unchanged, and the FAQs
 * still come from src/lib/service-faqs.js, which is the same source the
 * FAQPage schema reads.
 */
export default function BespokeServicePage({
  route,
  h1,
  heroSub,
  heroImage,
  intro,
  features,
  longform,
}) {
  const faqs = routeFaqs[route] || [];

  useSeo(seoFor(route, heroImage ? { image: heroImage } : undefined));

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Service"
        title={h1}
        subtitle={heroSub}
        primaryCta={{ to: "/book", label: "Book a Free Strategy Call" }}
        secondaryCta={{ to: "/services", label: "All Services" }}
      />

      {intro && <ServiceIntro {...intro} />}
      {features && <ServiceFeatureGrid {...features} />}

      {longform && (
        <>
          <DirectAnswer text={longform.directAnswer} />
          <ServiceSections sections={longform.sections} />
          <RelatedServices related={longform.related} />
        </>
      )}

      <ServiceFaq faqs={faqs} />

      <FinalCta />
    </div>
  );
}
