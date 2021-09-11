import { useState, useEffect } from "react";
import clsx from "clsx";

const CharBlock = ({ charList }) => {
  const [index, setIndex] = useState(0);

  const max = charList.length;

  useEffect(() => {
    const randomIndex = () => {
      const newIndex = Math.floor(Math.random() * max);
      console.log(newIndex);
      setIndex(newIndex);
    };

    const timer = setInterval(randomIndex, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="root px-1 overflow-hidden text-white">
      <div className={`bar a${index}`}>
        {charList.map((char, i) => (
          <div
            key={i}
            className="item flex items-center font-bold text-2xl sm:text-4xl lg:text-6xl"
          >
            {char}
          </div>
        ))}
      </div>
      <style jsx>{`
        .root {
          height: 60px;
        }
        .bar {
          transition: 0.4s;
          transition-timing-function: ease-out;
        }
        .item {
          height: 60px;
        }
        .a0 {
          margin-top: 0;
        }
        .a1 {
          margin-top: -60px;
        }
        .a2 {
          margin-top: -120px;
        }
        .a3 {
          margin-top: -180px;
        }
        .a4 {
          margin-top: -240px;
        }
        .a5 {
          margin-top: -300px;
        }
        .a6 {
          margin-top: -360px;
        }
        .a7 {
          margin-top: -420px;
        }
        .a8 {
          margin-top: -480px;
        }
        .a9 {
          margin-top: -540px;
        }
      `}</style>
    </div>
  );
};

const CharBubble = ({ className, charList }) => {
  return (
    <div
      className={clsx(
        "w-20 h-20 rounded-full bg-primary-600 shadow-sm flex justify-center items-center",
        className
      )}
    >
      <CharBlock charList={charList} />
    </div>
  );
};

export default CharBubble;
