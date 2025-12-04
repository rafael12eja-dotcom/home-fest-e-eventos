import React from "react";
import { Helmet } from "react-helmet-async";

export type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
};

const DEFAULT_OG_IMAGE = "https://homefesteeventos.com.br/og-cover.webp";

export default function SEO({
  title,
  description,
  canonical,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
}: SeoProps) {
  const metaKeywords = keywords.length ? keywords.join(", ") : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}

      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
