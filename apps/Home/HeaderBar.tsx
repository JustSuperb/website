import { useState, useEffect } from "react";

import Button from "@components/Button";
import urls from "@constants/urls";

const HeaderBar = () => {
  const [down, setDown] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      console.log(window.pageYOffset);
      if (window.pageYOffset < 50) setDown(false);
      else setDown(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex items-center ${down ? "down" : ""}`}>
      <div className="content mx-auto flex justify-between items-center">
        <div>Just Superb</div>
        <nav className="flex items-center">
          <a className="link" href="/#pricing">
            Pricing
          </a>
          <Button href={urls.startNow}>Start Now</Button>
        </nav>
      </div>
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          transition: 0.2s;
        }
        .down {
          background: #fefefe;
          box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
        }
        .content {
          width: 100%;
          max-width: 1440px;
          padding: 0 20px;
        }
        .link {
          display: block;
          padding: 12px 16px;
          cursor: pointer;
          margin-right: 20px;
          border-radius: 4px;
          transition: 0.2s;
        }
        .link:hover {
          box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
        }
      `}</style>
    </header>
  );
};

export default HeaderBar;
