import '@fontsource/arvo/400.css';
import '@fontsource/arvo/700.css';
import '@fontsource/roboto-mono/700.css';
import { SimplePaletteColorOptions } from '@material-ui/core/styles';
import { baseTheme } from '@styles/themes/baseTheme';
import Head from 'next/head';
import { SEO_CONFIG } from './Seo.config';
export const Seo = () => {
  const { title, desc, canonical } = SEO_CONFIG;
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Pep Locanto" />
      <meta name="description" content={desc} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={desc} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:site" content="@peplocanto" />
      <meta name="twitter:creator" content="@peplocanto" />
      <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
      <link rel="manifest" href="/fav/site.webmanifest" />
      <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#9CC2CA" />
      <meta name="msapplication-TileColor" content="#9CC2CA" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:image" content="https://imgur.com/3jiviWb.png" />
      <meta name="twitter:image" content="https://imgur.com/MHqJKZw.png" />
      <meta
        name="theme-color"
        content={(baseTheme.palette.primary as SimplePaletteColorOptions).main}
      />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};
