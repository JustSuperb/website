import CheckIcon from '@components/CheckIcon';
import Button from '@components/Button';
import urls from '@constants/urls';

const Pricing = () => (
  <div className="root">
    <h2 id="pricing">Pricing</h2>
    <p className="subtitle fw-300">One price. Fully customized.</p>

    <div className="card">
      <div className="price">
        ${" "}
        <span className="number">59</span>{" "}
        USD
      </div>
      <div className="item"><div className="check"><CheckIcon /></div>2 Name suggestions.</div>
      <div className="item"><div className="check"><CheckIcon /></div>Fully customized naming report.</div>
      <div className="item"><div className="check"><CheckIcon /></div>Pronunciation and writing tutorial.</div>
      <div className="item"><div className="check"><CheckIcon /></div>Results in 48 hours.</div>
      <div className="item"><div className="check"><CheckIcon /></div>Both Simplified Chinese and Traditional Chinese.</div>

      <div className="btn flex justify-center">
        <Button href={urls.startNow}>Start Now</Button>
      </div>
    </div>

    <style jsx>{`
      .root {
        padding-bottom: 200px;
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
        padding-top: 10px;
      }
      .card {
        max-width: 530px;
        font-size: 24px;
        padding: 30px 20px;
        margin: 50px auto 0 auto;
        box-shadow: 2px 2px 12px -3px rgb(0 0 0 / 20%);
      }
      .price {
        text-align: center;
      }
      .number {
        font-size: 60px;
      }
      .item {
        font-size: 21px;
        font-weight: 300;
        display: flex;
        align-items: flex-start;
        margin: 15px 0;
      }
      .check {
        padding: 0 4px 0 0;
      }
      .btn {
        margin-top: 20px;
      }
      @media(max-width: 767px) {
        h2 {
          font-size: 50px;
        }
        .item {
          font-size: 18px;
        }
      }
    `}</style>
  </div>
);

export default Pricing;
