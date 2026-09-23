import { useEffect } from "react";
import { SITE_INDEXABLE } from "../lib/seo-config";

// Sets a <meta> tag by name, creating it if needed.
function setMetaByName(name, content) {
    if (!content) return;
    let meta = document.querySelector(`meta[name='${name}']`);
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
}

// Sets a <meta property="..."> (Open Graph) tag, creating it if needed.
function setMetaByProperty(property, content) {
    if (!content) return;
    let meta = document.querySelector(`meta[property='${property}']`);
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
}

export default function useSeo({
    title,
    description,
    canonical,
    image,
    type = "website",
    jsonLd,
}) {
    useEffect(() => {
        // Must match what scripts/prerender.mjs baked in. If the static HTML
        // says noindex and the hydrated page quietly drops it, Google indexes
        // the rendered version and the tag was wasted — the same failure that
        // made the prerendered titles pointless before seo-config existed.
        if (!SITE_INDEXABLE) setMetaByName("robots", "noindex, follow");

        if (title) {
            document.title = title;
            setMetaByProperty("og:title", title);
            setMetaByName("twitter:title", title);
        }

        if (description) {
            setMetaByName("description", description);
            setMetaByProperty("og:description", description);
            setMetaByName("twitter:description", description);
        }

        if (canonical) {
            let link = document.querySelector("link[rel='canonical']");
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "canonical");
                document.head.appendChild(link);
            }
            link.setAttribute("href", canonical);
            setMetaByProperty("og:url", canonical);
        }

        setMetaByProperty("og:type", type);

        if (image) {
            const absolute = image.startsWith("http")
                ? image
                : `https://www.skyliftllc.com${image}`;
            setMetaByProperty("og:image", absolute);
            setMetaByName("twitter:image", absolute);
            setMetaByName("twitter:card", "summary_large_image");
        }

        // The prerenderer already baked this route's JSON-LD into the HTML and
        // tagged it data-seo-jsonld. Only clear it when there is a replacement
        // graph to put in its place: a page that passes no jsonLd must keep the
        // prerendered block, or hydration would strip the schema out of the DOM
        // that Google's renderer sees.
        const blocks = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean);
        const injected = [];

        if (blocks.length) {
            document
                .querySelectorAll("script[data-seo-jsonld]")
                .forEach((el) => el.remove());
            for (const block of blocks) {
                const script = document.createElement("script");
                script.type = "application/ld+json";
                script.setAttribute("data-seo-jsonld", "true");
                script.textContent = JSON.stringify(block);
                document.head.appendChild(script);
                injected.push(script);
            }
        }

        return () => {
            injected.forEach((s) => s.remove());
        };
    }, [title, description, canonical, image, type, jsonLd]);
}
