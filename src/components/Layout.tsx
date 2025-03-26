import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  title?: string;
  description?: string;
  ogImage?: string;
  children: ReactNode;
}

const cloudFrontUrl = 'https://pub-5221b532a77b468a92745546bdc85a27.r2.dev';

export default function Layout({
  title = '이커머스',
  description = '이커머스입니다',
  ogImage = `${cloudFrontUrl}/ogImage/ogImage_default.png`,
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
          href={`${cloudFrontUrl}/favicon/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href={`${cloudFrontUrl}/favicon/favicon-32x32.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${cloudFrontUrl}/favicon/apple-touch-icon.png`}
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
