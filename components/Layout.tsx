import Link from "next/link";

import HeaderBar from "./HeaderBar";

const Layout = ({ children }) => (
  <>
    <HeaderBar />
    <div className="pt-16">
      {children}
      <div className="text-center text-gray-500 text-xs py-3">
        <Link href="/cookie-policy">
          <a>Cookie policy</a>
        </Link>
        <br />
        <span>
          Copyright © {new Date().getFullYear()} JustSuperb. All Rights
          Reserved.
        </span>
      </div>
    </div>
  </>
);

export default Layout;
