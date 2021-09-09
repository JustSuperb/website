import Head from "next/head";

import Layout from "@components/Layout";
import AnalysisDraw from "@components/draw/Analysis";
import FunDraw from "@components/draw/Fun";
import Aircraft from "@components/draw/Aircraft";
import BalloonsDraw from "@components/draw/Balloons";

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
      <section className="pt-20">
        <h1 className="text-3xl font-bold ml-3 sm:text-4xl">
          Need a
          <br />
          <span className="text-purple-600"> Superb </span>
          Chinese name?
        </h1>
        <p className="text-md mt-4 ml-3 text-gray-700">
          We handcraft superb and fully customized Chinese names for you.
        </p>

        <div className="max-w-xs">
          <BalloonsDraw />
        </div>
      </section>

      <section>
        <h2>
          Naming a good Chinese name is <span className="red">hard</span>.
        </h2>
        <p className="text">
          There are <span className="fw-400">6000+ characters</span> in the
          Mandarin Chinese. Most of the characters have more than one meaning.
          The combination of characters can even give rise to new meanings.
          <br />
          <br />
          This is why{" "}
          <span className="fw-400">
            even native Chinese speakers will seek help from professional
            Chinese naming services.
          </span>
        </p>
        <div className="draw">
          <AnalysisDraw />
        </div>
      </section>

      <section>
        <h2>
          We make your Chinese name <span className="superb">Superb</span>!
        </h2>
        <p className="text">
          We make sure that the Chinese name{" "}
          <span className="easy">sounds good</span>,{" "}
          <span className="easy">easy to recognize</span>,{" "}
          <span className="easy">easy to pronounce</span>, and{" "}
          <span className="easy">easy to write</span>.
          <br />
          <br />
          The name should also be <span className="robust">robust</span>, which
          means it will be loved by most people and has no bad connotations.
          Most importantly, it is completely tailored for you.
        </p>
        <div className="draw">
          <FunDraw />
        </div>
      </section>

      <section>
        <h2>Precise and fast.</h2>
        <p className="text">
          We clarify your needs in detail. Then customize a perfect name that
          you love and suits you. And{" "}
          <span className="fw-400">delivery within 48 hours</span>.
        </p>
        <div className="draw">
          <Aircraft />
        </div>
      </section>

      <Pricing />

      <Contact />
      <style jsx>{`
        section {
          padding: 100px 0 200px 0;
        }
        h2 {
          font-size: 70px;
          font-weight: 400;
        }
        .text {
          font-size: 30px;
          font-weight: 300;
          max-width: 780px;
          color: var(--text-color-light);
          margin: 20px 0 0 0;
        }
        .red {
          color: #ec407a;
        }
        .superb {
          color: var(--primary-color);
        }
        .easy {
          color: #039be5;
          font-weight: 400;
        }
        .robust {
          font-weight: 400;
          color: #43a047;
        }
        .draw {
          margin-left: auto;
          max-width: 600px;
          padding: 50px 30px 0 0;
        }
        @media (max-width: 1440px) {
          h2 {
            font-size: 50px;
          }
          .text {
            font-size: 24px;
          }
        }
        @media (max-width: 767px) {
          h2 {
            font-size: 30px;
          }
          .text {
            font-size: 18px;
          }
          .draw {
            display: flex;
            justify-content: center;
            padding: 30px;
          }
          section {
            padding: 50px 0 100px 0;
          }
        }
        @media (max-width: 365px) {
          h2 {
            font-size: 20px;
          }
          .text {
            font-size: 14px;
          }
        }
      `}</style>
    </Layout>
  </>
);

export default Home;
