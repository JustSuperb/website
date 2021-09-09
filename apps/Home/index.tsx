import Head from "next/head";
import Link from "next/link";

import Layout from "@components/Layout";
import AnalysisDraw from "@components/draw/Analysis";
import FunDraw from "@components/draw/Fun";
import Aircraft from "@components/draw/Aircraft";
import BalloonsDraw from "@components/draw/Balloons";
import Button from "@components/Button";
import urls from "@constants/urls";

import Section from "./Section";
import Pricing from "./Pricing";
import Contact from "./Contact";

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
      <section className="pt-20 lg:flex">
        <div className="pl-4 lg:pt-20 md:pl-20">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Need a
            <br className="lg:hidden" />
            <span className="text-primary-600"> Superb </span>
            Chinese name?
          </h1>
          <p className="text-2xl mt-5 text-gray-500">
            We handcraft superb Chinese names for you.
          </p>

          <Button
            component="a"
            className="inline-block mt-8 text-lg"
            href={urls.startNow}
          >
            Get Started
          </Button>
        </div>

        <div className="w-44 mx-auto mt-20 md:w-full max-w-xs lg:mt-10">
          <BalloonsDraw />
        </div>
      </section>

      <Section
        title={
          <>
            Naming a good Chinese name is{" "}
            <span className="text-red-600">hard</span>.
          </>
        }
        content={
          <>
            There are <span className="font-medium">6000+ characters</span> in
            Mandarin Chinese. Most of the characters have more than one meaning.
            <br />
            This is why{" "}
            <span className="font-medium">
              even native Chinese speakers will seek help from professional
              Chinese naming services.
            </span>
          </>
        }
        img={<AnalysisDraw />}
      />

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
