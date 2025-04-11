import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  title?: string;
  description?: string;
  ogImage?: string;
  children: ReactNode;
}

export default function Layout({
  title = '이커머스',
  description = '이커머스입니다',
  ogImage = `${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}/ogImage/ogImage_default.png`,
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />

        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}/favicon/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}/favicon/favicon-32x32.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}/favicon/apple-touch-icon.png`}
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
