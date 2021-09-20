import Link from "next/link";

import Button from "@components/Button";
import urls from "@constants/urls";
import price from '@constants/price';

const CheckIcon = () => (
  <div className="w-7 h-7 bg-green-200 rounded-full flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
);

const features = [
  "2 Name suggestions",
  "Fully customized",
  "Detailed documentation",
  "Pronunciation and writing tutorial",
  "Both Simplified & Traditional Chinese",
  "Uniqueness Check",
  "Results in 48 hours",
];

const Pricing = () => (
  <section className="pb-60">
    <h2 id="pricing" className="pt-24 font-bold text-4xl text-center md:pt-40">
      Pricing
    </h2>
    <p className="mt-4 mb-8 text-2xl text-center text-gray-400">
      One price. Fully customized.
    </p>

    <div className="flex justify-center">
      <div className="rounded-lg shadow-xl border-t-8 py-5 px-4 border-primary-600 sm:px-6 sm:py-8">
        <div className="origin-price relative text-center text-lg text-gray-400" aria-hidden="true">
          $ <span className="text-5xl">69</span> USD
          <style jsx>{`
            .origin-price:after {
              content: "";
              position: absolute;
              left: calc(50% - 70px);
              top: 20px;
              transform: rotate(8deg);
              width: 140px;
              height: 6px;
              background: #DC2626;
            }
          `}</style>
        </div>
        <div className="text-center text-lg mt-4">
          $ <span className="text-5xl">{price}</span> USD
        </div>

        <p className="mt-2 text-center text-green-600 text-lg">60% OFF before 10/1 !</p>

        {features.map((item, i) => (
          <div className="mt-6 text-lg flex">
            <CheckIcon />
            <span className="pl-2">{item}</span>
          </div>
        ))}

          <Button className="mx-auto mt-9 mb-3 text-xl" href={urls.startNow}>
            Start Now
          </Button>
      </div>
    </div>
  </section>
);

export default Pricing;
