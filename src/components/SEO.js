import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  children, title, description, siteTitleTemplate,
}) {
  return (
    <Helmet titleTemplate={siteTitleTemplate || '%s - F-Online'}>
      <html lang="de" />
      <title>{title}</title>

      {/* Fav icons */}
      <link rel="icon" type="image/jpg" href="/logo.svg" />

      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={description || ''}
      />

      {/* Themecolor */}
      <meta
        name="theme-color"
        content="#275BB2"
      />

      {children}
    </Helmet>
  );
}
