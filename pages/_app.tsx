import { useEffect } from "react";
import { useRouter } from 'next/router';

import * as ga from '@utils/ga';

import "../styles/global.css";

/* https://nextjs.org/docs/advanced-features/custom-app */
const MyApp = ({ Component, pageProps }) => {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);


  return <Component {...pageProps} />;
}

export default MyApp;
