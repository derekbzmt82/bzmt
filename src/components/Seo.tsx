import React from "react";
import { Helmet } from "react-helmet-async";
import { BUSINESS, pageTitle } from "../seo";

type Props = {
  title: string;
  description: string;
  path: string;
  jsonLd?: any[];
};

export default function Seo({ title, description, path, jsonLd = [] }: Props) {
  const url = `${BUSINESS.siteUrl}${path}`;
  return (
    <Helmet>
      <title>{pageTitle(title)}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle(title)} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle(title)} />
      <meta name="twitter:description" content={description} />

      {jsonLd.map((obj, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
