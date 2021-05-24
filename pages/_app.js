import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [activePath, setActivePath] = useState('');
  useEffect(() => {
    setActivePath(router.pathname);
  }, [router]);
  return (
    <div>
      <Header activePath={activePath} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
