import Button from "@components/Button";
import urls from '@constants/urls';

import HeaderBar from "./HeaderBar";

const TopCover = () => (
  <>
    <HeaderBar />
    <div className="root">
      <h1 className="fw-500">
        Need a
        <br className="br1" />
        <span className="superb"> Superb </span>
        <br className="br2" />
        Chinese name?
      </h1>
      <p className="text fw-300">
        We handcraft superb <br className="br3" /> and fully customized Chinese
        names for you.
      </p>
      <div className="btn flex">
        <Button href={urls.startNow}>Start Now</Button>
      </div>
      <style jsx>{`
        .root {
          min-height: 100vh;
          padding: 250px 0 0 50px;
        }
        h1 {
          font-size: 90px;
        }
        .superb {
          color: var(--primary-color);
        }
        .text {
          font-size: 40px;
          color: var(--text-color-light);
          margin: 8px 0 24px 0;
        }
        .br1, .br2, .br3 {
          display: none;
        }
        @media (max-width: 1440px) {
          h1 {
            font-size: 80px;
          }
          .br1 {
            display: block;
          }
          .text {
            font-size: 32px;
          }
        }
        @media (max-width: 1080px) {
          h1 {
            font-size: 70px;
          }
          .text {
            font-size: 24px;
          }
        }
        @media (max-width: 900px) {
          h1 {
            font-size: 50px;
          }
          .br3 {
            display: block;
          }
        }
        @media (max-width: 767px) {
          .root {
            padding: 200px 0 0 20px;
          }
          .br2 {
            display: block;
          }
        }
        @media (max-width: 540px) {
          h1 {
            font-size: 40px;
          }
        }
      `}</style>
    </div>
  </>
);

export default TopCover;
