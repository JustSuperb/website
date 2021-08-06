import "../styles/global.css";

/* https://nextjs.org/docs/advanced-features/custom-app */
const MyApp =  ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp;
