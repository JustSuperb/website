import FunDraw from "@components/draw/Fun";

const WhyNeedUsSection = () => (
  <section className="overflow-hidden lg:pt-20">
    <div className="py-24 max-w-screen-xl mx-auto md:flex md:flex-row-reverse">

      <div className="px-5 md:pt-10 md:pl-8 xl:pt-24">
        <h2 className="text-2xl text-center mb-4 sm:text-4xl md:text-left">
          We deliver the best for you!
        </h2>
        <p className="text-gray-600 text-center text-lg sm:max-w-lg sm:mx-auto md:text-left">
          We make sure that the Chinese name{" "}
          <span className="text-green-500 font-medium">sounds good</span>,{" "}
          <span className="text-green-500 font-medium">easy to recognize</span>,{" "}
          <span className="text-green-500 font-medium">easy to pronounce</span>,
          and <span className="text-green-500 font-medium">easy to write</span>.
          <br />
          The name should be superb and <span className="text-green-500 font-medium">robust</span>
          , which means it will be loved by most people and has no bad
          connotations.
        </p>
      </div>

      <div className="relative rounded-xl w-64 mx-auto mt-10 sm:w-full sm:max-w-sm md:mt-0 md:ml-8 lg:max-w-md lg:ml-20 xl:ml-32">
        <FunDraw />
      </div>
    </div>
  </section>
);

export default WhyNeedUsSection;
