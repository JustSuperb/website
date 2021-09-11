import Head from "next/head";

import Layout from "@components/Layout";

import Pricing from "./Pricing";
import HeroSection from "./HeroSection";
import WhyNeedUsSection from "./WhyNeedUsSection";
import BestForYouSection from './BestForYouSection';
import FeatureSection  from "./FeatureSection";

const Home = () => (
  <>
    <Head>
      <title>JustSuperb - The Best Chinese naming service.</title>
      <meta
        name="description"
        content=" We are the best Chinese naming service. We handcraft superb Chinese names for you."
      ></meta>
    </Head>
    <Layout>
      <HeroSection />

      <WhyNeedUsSection />

      <BestForYouSection />

      <FeatureSection />

      <Pricing />

    </Layout>
  </>
);

export default Home;
