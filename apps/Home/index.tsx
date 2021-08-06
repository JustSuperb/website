import TopCover from "./TopCover";
import Pricing from "./Pricing";

const Home = () => (
  <>
    <div className="root">
      <div className="content mx-auto">
        <TopCover />
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

        <h2>Precise and fast.</h2>
        <p className="text">
          We clarify your needs in detail. Then customize a perfect name that
          you love and suits you. And{" "}
          <span className="fw-400">delivery within 48 hours</span>.
        </p>

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
        h2 {
          font-size: 70px;
          font-weight: 400;
        }
        .text {
          font-size: 30px;
          font-weight: 300;
          max-width: 780px;
          color: var(--text-color-light);
          margin: 20px 0 200px 0;
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
            font-size: 40px;
          }
          .text {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  </>
);

export default Home;
