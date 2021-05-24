import Head from 'next/head';
import { SeoProps } from './Seo.model';
export const Seo = (props: SeoProps) => {
  const { title, desc, canonical, image } = props;
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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9CC2CA" />
      <meta name="msapplication-TileColor" content="#9CC2CA" />
      <meta name="theme-color" content="#ffffff" />
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};
