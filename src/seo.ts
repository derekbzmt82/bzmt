export const BUSINESS = {
  name: "BodyZen Muscular Therapy",
  phone: "(617) 906-7557",
  address: "20 Hardwick Street, Cambridge, MA 02141",
  city: "Cambridge",
  region: "MA",
  postalCode: "02141",
  country: "US",
  // Replace with your deployed URL
  siteUrl: "https://example.com",
  bookingUrl: "https://www.bodyzenmusculartherapy.clinicsense.com/book"
};

export function pageTitle(title: string) {
  const base = "BodyZen Muscular Therapy";
  return title ? `${title} | ${base}` : base;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS.name,
    "telephone": BUSINESS.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20 Hardwick Street",
      "addressLocality": BUSINESS.city,
      "addressRegion": BUSINESS.region,
      "postalCode": BUSINESS.postalCode,
      "addressCountry": BUSINESS.country
    },
    "areaServed": ["Cambridge, MA", "Somerville, MA", "Boston, MA"],
    "url": BUSINESS.siteUrl
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(i => ({
      "@type": "Question",
      "name": i.q,
      "acceptedAnswer": { "@type": "Answer", "text": i.a }
    }))
  };
}
