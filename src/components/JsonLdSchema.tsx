import { useLocation } from "react-router-dom";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MassageTherapy",
  name: "BodyZen Muscular Therapy",
  image: absoluteUrl("/logo-square.png"),
  url: SITE_URL,
  telephone: "+16179067557",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Hardwick Street",
    addressLocality: "Cambridge",
    addressRegion: "MA",
    postalCode: "02141",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.3736,
    longitude: -71.0886,
  },
  areaServed: [
    { "@type": "City", name: "Cambridge" },
    { "@type": "Place", name: "Greater Boston" },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: [],
  description:
    "Premier sports massage, deep tissue, myofascial release, and neuromuscular therapy in Cambridge, MA. Serving athletes and active individuals in Greater Boston.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is sports massage in Cambridge MA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sports massage at BodyZen Muscular Therapy in Cambridge, MA is a targeted, evidence-based approach to treating athletic injuries, improving mobility, and speeding recovery. We combine deep tissue, myofascial release, and neuromuscular techniques.",
      },
    },
    {
      "@type": "Question",
      name: "What does deep tissue massage in Cambridge help with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep tissue massage at BodyZen in Cambridge targets chronic muscle tension, adhesions, and restricted fascia. It's highly effective for back pain, neck stiffness, and repetitive strain injuries common among athletes and desk workers.",
      },
    },
    {
      "@type": "Question",
      name: "Is myofascial release available in Cambridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BodyZen Muscular Therapy in Cambridge, MA offers advanced myofascial release therapy to restore mobility, reduce pain, and improve posture by addressing fascial restrictions throughout the body.",
      },
    },
    {
      "@type": "Question",
      name: "What is cupping therapy in Cambridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cupping therapy at BodyZen in Cambridge uses suction cups to increase blood flow, reduce inflammation, and relieve deep muscular tension. It's popular among athletes for recovery and pain management.",
      },
    },
    {
      "@type": "Question",
      name: "How does neuromuscular therapy in Cambridge work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neuromuscular therapy at BodyZen Muscular Therapy in Cambridge addresses trigger points, nerve compression, and postural distortions using precise, targeted pressure to restore proper muscle function and reduce chronic pain.",
      },
    },
  ],
};

const JsonLdSchema = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {isHome && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
};

export default JsonLdSchema;
