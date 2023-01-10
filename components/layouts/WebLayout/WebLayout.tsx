import { Footer } from '@components/common/Footer';
import { Navbar } from '@components/ui/Navbar';
import Head from 'next/head';
import { FC } from 'react';
import { IWebLayoutProps } from './interfaces';

export const WebLayout: FC<IWebLayoutProps> = ({
  children,
  title,
  pageDescription,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main className="px-8 ">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
