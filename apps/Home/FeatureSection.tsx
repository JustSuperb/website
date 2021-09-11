const FeatureItem = ({ title, content, icon }) => (
  <div className="relative">
    <dt>
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
        {icon}
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
        {title}
      </p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-500">{content}</dd>
  </div>
);

const FeatureSection = () => (
  <div className="mt-10 py-12 bg-white lg:mt-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Why choose us?
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <FeatureItem
            title="Fully customized"
            content="Your Chinese name must be born entirely for you. We will utilize information obtained from the consultation as the ground-up foundation for your Chinese name development."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />

          <FeatureItem
            title="Detailed documents"
            content="We will provide detailed documents of your Chinese name. Including simplified and traditional characters, English spelling, detailed meanings, pronunciation tutorials, and writing tutorials."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            }
          />

          <FeatureItem
            title="Modern and unique"
            content="We focus on modernization and uniqueness. Make sure your name is not too dull or too generic, just like you randomly picked it from the street."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
          />

          <FeatureItem
            title="Fast and precise"
            content="We ensure that our customers have the best consumer experience. We will develop the product for you and deliver in 48 hours after the payment is completed."
            icon={
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />
        </dl>
      </div>
    </div>
  </div>
);

export default FeatureSection;
