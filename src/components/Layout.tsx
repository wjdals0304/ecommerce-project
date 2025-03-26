// components/Layout.tsx
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
  ogImage = '/default-og-image.jpg',
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

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
