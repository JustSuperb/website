import Button from "@components/Button";
import BalloonsDraw from '@components/draw/Balloons';
import urls from '@constants/urls';

import HeaderBar from "./HeaderBar";

const TopCover = () => (
  <>
    <HeaderBar />
    <div className="root">
      <h1 className="fw-500">
        Need a
        <br />
        <span className="superb"> Superb </span>
        <br className="br2" />
        Chinese name?
      </h1>
      <p className="text fw-300">
        We provide the best Chinese naming service.
        <br />
        We handcraft superb and fully customized Chinese
        names for you.
      </p>
      <div className="btn flex">
        <Button href={urls.startNow} size="large">Start Now</Button>
      </div>

      <div className="draw">
        <BalloonsDraw />
      </div>
      <style jsx>{`
        .root {
          min-height: 100vh;
          padding: 150px 0 100px 50px;
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
        .draw {
          max-width: 500px;
          margin-left: auto;
          margin-right: 30px;
        }
        @media (max-width: 1440px) {
          h1 {
            font-size: 80px;
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
            font-size: 18px;
          }
          .draw {
            max-width: 400px;
          }
        }
        @media (max-width: 900px) {
          h1 {
            font-size: 50px;
          }
        }
        @media (max-width: 767px) {
          .root {
            padding: 200px 0 100px 20px;
          }
          .br2 {
            display: block;
          }
        }
        @media (max-width: 540px) {
          h1 {
            font-size: 40px;
          }
          .draw {
            padding-top: 20px;
            max-width: 300px;
          }
        }
        @media(max-height: 700px) {
          .root {
            padding: 100px 0 100px 20px;
          }
        }
      `}</style>
    </div>
  </>
);

export default TopCover;
