import React, { FC } from 'react';
import Head from 'next/head';
import { config } from 'config';

export interface MetaProps {
  title: string;
  path: string;
  description?: string;
  siteName?: string;
  image?: {
    src: string;
    alt: string;
  };
  type?: string;
  updatedAt?: string;
  locale?: string;
  twitter?: string;
}

/**
 * Add meta tags to the document head.
 */
export const Meta: FC<MetaProps> = ({
  title,
  description,
  path,
  siteName = config.appName,
  type = 'website',
  image,
  updatedAt,
  locale = config.appLocale,
  twitter = 'alexandrubrg',
  children,
}) => {
  const canonicalUrl = `${config.appBaseUrl}${path}`;

  return (
    <Head>
      {/* SEO */}
      <title>{`${title} · ${siteName}`}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={locale} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image.src} />}
      {image && <meta property="og:image:alt" content={image.alt} />}
      {updatedAt && <meta property="og:updated" content={updatedAt} />}

      {/* Twitter */}
      <meta name="twitter:site" content={`@${twitter}`} />
      {image && <meta name="twitter:image:alt" content={image.alt} />}
      <meta
        name="twitter:card"
        content={image ? 'summary_large_image' : 'summary'}
      />

      {children}
    </Head>
  );
};
