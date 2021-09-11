import CharBubble from "./CharBubble";
import IdeaDraw from "./IdeaDraw";

const charList1 = ["蕭", "孫", "戴", "高", "周", "陸", "王", "文", "林", "劉"];
const charList2 = ["敬", "盛", "資", "爾", "冬", "子", "昀", "姿", "俊", "亦"];
const charList3 = ["騰", "熙", "穎", "宣", "雨", "徵", "儒", "云", "傑", "菲"];

const WhyNeedUsSection = () => (
  <section className="overflow-hidden lg:pt-20">
    <div className="py-24 max-w-screen-xl mx-auto md:flex">
      <div className="px-5 md:pt-10 md:pl-8 lg:pl-20 xl:pl-40 xl:pt-24">
        <h2 className="text-2xl text-center mb-4 sm:text-4xl md:text-left">
          <span className="block">Why do you need</span>
          Chinese naming service?
        </h2>
        <p className="text-gray-600 text-center text-lg sm:max-w-lg sm:mx-auto md:text-left">
          Naming a good Chinese name is{" "}
          <span className="text-red-600">hard</span>! There are{" "}
          <span className="font-medium">6000+ characters</span> in Mandarin
          Chinese. Most of the characters have more than one meaning.
          <br />
          This is why even native Chinese speakers will seek help from
          professional Chinese naming services.
        </p>
      </div>

      <div className="relative rounded-xl w-64 mx-auto mt-20 sm:mt-24 sm:w-full sm:max-w-sm md:mt-0 lg:max-w-md">
        <CharBubble
          className="absolute -top-10 left-12 sm:-top-8 sm:w-32 sm:h-32 sm:left-24"
          charList={charList1}
        />
        <CharBubble
          className="absolute w-12 h-12 bottom-10 left-8 sm:w-16 sm:h-16 sm:bottom-14 lg:w-28 lg:h-28"
          charList={charList2}
        />
        <CharBubble
          className="absolute w-14 h-14 bottom-10 -right-6 sm:w-20 sm:h-20 sm:bottom-20 md:-right-3 lg:-right-5 xl:-right-16 lg:w-32 lg:h-32"
          charList={charList3}
        />

        <IdeaDraw />
      </div>
    </div>
  </section>
);

export default WhyNeedUsSection;
