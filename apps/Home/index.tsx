import Head from "next/head";

import Layout from "@components/Layout";
import FunDraw from "@components/draw/Fun";
import Aircraft from "@components/draw/Aircraft";

import Section from "./Section";
import Pricing from "./Pricing";
import HeroSection from "./HeroSection";
import WhyNeedUsSection from "./WhyNeedUsSection";

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

      <Section
        title={
          <>
            {" "}
            We make your Chinese name{" "}
            <span className="text-purple-500">Superb</span>!
          </>
        }
        content={
          <>
            We make sure that the Chinese name{" "}
            <span className="text-green-500 font-medium">sounds good</span>,{" "}
            <span className="text-green-500 font-medium">
              easy to recognize
            </span>
            ,{" "}
            <span className="text-green-500 font-medium">
              easy to pronounce
            </span>
            , and{" "}
            <span className="text-green-500 font-medium">easy to write</span>.
            <br />
            <br />
            The name should also be{" "}
            <span className="text-green-500">robust</span>, which means it will
            be loved by most people and has no bad connotations.
          </>
        }
        img={<FunDraw />}
      />

      <Section
        title={<>Precise and fast.</>}
        content={
          <>
            We clarify your needs in detail. Then customize a perfect name that
            you love and suits you. And{" "}
            <span className="fw-400">delivery within 48 hours</span>.
          </>
        }
        img={<Aircraft />}
      />

      <Pricing />
    </Layout>
  </>
);

export default Home;
