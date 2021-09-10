import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from 'clsx';

import Button from "@components/Button";
import urls from "@constants/urls";

const HeaderBar = () => {
  const [down, setDown] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset < 50) setDown(false);
      else setDown(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={clsx("z-20 fixed w-full bg-white px-3 transition", down && "shadow-md")}>
      <div className="max-w-screen-xl mx-auto py-3 flex justify-between items-center">
        <Link href="/">
          <a className="block text-primary-600 font-bold p-2 text-sm sm:text-base">JustSuperb</a>
        </Link>
        <nav className="flex">
          <Button
            className="mr-4"
            href="/#pricing"
            variant="text"
            component="a"
          >
            Pricing
          </Button>
          <Button href={urls.startNow} component="a">
            Get Started
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBar;
