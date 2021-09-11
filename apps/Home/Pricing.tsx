import Link from "next/link";

import Button from "@components/Button";
import urls from "@constants/urls";

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
        <div className="text-center text-lg">
          $ <span className="text-5xl">69</span> USD
        </div>

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
