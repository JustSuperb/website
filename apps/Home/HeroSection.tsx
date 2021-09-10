import Button from "@components/Button";
import urls from "@constants/urls";

const HeroSection = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <main className="w-full pt-16 pb-10 mx-auto px-4 sm:pt-24 sm:px-6 sm:pb-8  md:pr-0 lg:pt-36 lg:pl-8 lg:pb-40 xl:pt-40">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-snug md:text-5xl md:leading-snug">
              <span className="block">Need a</span>
              <span className="text-primary-600">Superb</span> Chinese Name?
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We handcraft superb Chinese names for you.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <Button
                className="mb-4 px-8 py-3 text-lg font-medium sm:mb-0 sm:mr-4 md:text-lg md:px-10"
                component="a"
                href={urls.startNow}
              >
                Get started
              </Button>

              <Button
                variant="text"
                className="bg-primary-100 hover:bg-primary-200 px-8 py-3 text-lg font-medium md:text-lg md:px-10"
                component="a"
                href={urls.whyChooseUs}
              >
                Why choose us?
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="/static/img/hero.jpg"
        alt=""
      />
    </div>
  </div>
);

export default HeroSection;
