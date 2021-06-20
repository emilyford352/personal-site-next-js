/* eslint-disable react/jsx-props-no-spreading */

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Footer from '../components/footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [activePath, setActivePath] = useState('');
  useEffect(() => {
    setActivePath(router.pathname);
  }, [router]);
  return (
    <div>
        <Head>
            <title>Emily Mame Ford</title>
        </Head>
      <Header activePath={activePath} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </div>
  );
}

export default MyApp;
