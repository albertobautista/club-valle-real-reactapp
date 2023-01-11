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
        <link rel="shortcut icon" href="/logos/icono_cvr_verde.png" />
        <meta name="og:image" content="/logos/icono_cvr_verde.png" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
