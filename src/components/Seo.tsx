import { Helmet } from "react-helmet-async";
import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE_PATH, DEFAULT_TITLE, SITE_NAME, canonicalUrl, absoluteUrl } from "@/lib/seo";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
};

const Seo = ({ title, description, path = "/", image = DEFAULT_IMAGE_PATH, noindex = false }: SeoProps) => {
  const pageTitle = title
    ? title.includes("BZMT")
      ? title
      : `${title} | BZMT`
    : DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
  const pageCanonical = canonicalUrl(path);
  const pageImage = absoluteUrl(image);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageCanonical} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
    </Helmet>
  );
};

export default Seo;
