import CheckIcon from '@components/CheckIcon';
import Button from '@components/Button';
import urls from '@constants/urls';

const Pricing = () => (
    <div className="root">
        <h2 id="contact">Any question?</h2>
        <p className="subtitle fw-300">
            Do you have any questions about our naming service? 
            <br />
            Please feel free to contact us at <a className="email" href="mailto:justsuperbname@gmail.com">justsuperbname@gmail.com</a>
        </p>

        <style jsx>{`
      .root {
        padding-bottom: 500px;
      }
      h2 {
        font-size: 80px;
        text-align: center;
        padding-top: 100px
      }
      .subtitle {
        text-align: center;
        font-size: 24px;
        color: var(--text-color-light);
        padding-top: 20px;
        line-height: 2rem;
      }
      .email {
          color: var(--primary-color);
          font-weight: 400;
      }
      @media(max-width: 767px) {
        h2 {
          font-size: 50px;
        }
      }
    `}</style>
    </div>
);

export default Pricing;
