const Section = ({ title, content, img }) => (
  <section className="max-w-screen-xl mx-auto pt-36 px-3 lg:flex lg:pt-36">
    <div className="lg:pt-28">
      <h2 className="text-xl font-medium mb-3 sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="text-gray-500 leading-relaxed max-w-md sm:text-lg lg:text-xl lg:max-w-lg lg:leading-7">
        {content}
      </p>
    </div>
    <div className="w-full max-w-xs mx-auto mt-10 sm:pl-4 lg:max-w-md">{img}</div>
  </section>
);

export default Section;
