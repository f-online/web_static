import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  children, title, description, socialImageUrl, siteTitleTemplate,
}) {
  const currentURL = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet titleTemplate={siteTitleTemplate || '%s - F-Online'}>
      <html lang="de" />
      <title>{title}</title>

      {/* Fav icons */}
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <link rel="icon" type="image/png" href="/logo.png" />

      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={description}
      />

      {/* Themecolor */}
      <meta
        name="theme-color"
        content="#275BB2"
      />

      {/* Social Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentURL} />
      <meta property="og:image" content={socialImageUrl} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />

      {children}
    </Helmet>
  );
}
