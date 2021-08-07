import AnalysisDraw from '@components/draw/Analysis';
import FunDraw from '@components/draw/Fun';
import Aircraft from '@components/draw/Aircraft';

import TopCover from "./TopCover";
import Pricing from "./Pricing";

const Home = () => (
  <>
    <div className="root">
      <div className="content mx-auto">
        <TopCover />

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
      </div>
      <style jsx>{`
        .root {
          background: var(--bg-color);
          color: var(--text-color);
          padding: 0 20px 1000px 20px;
        }
        .content {
          max-width: 1440px;
        }
        section {
          padding: 100px 0 250px 0;
          min-height: 100vh;
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
    </div>
  </>
);

export default Home;
