import Link from "next/link";

import HeaderBar from "./HeaderBar";

const Layout = ({ children }) => (
  <>
    <HeaderBar />
    <div className="pt-20 px-3">
      <div className="max-w-screen-xl mx-auto">{children}</div>
      <div className="text-center text-gray-500 text-xs py-3">
        <Link href="/cookie-policy">
          <a>Cookie policy</a>
        </Link>
        <div >
          Copyright © {new Date().getFullYear()} JustSuperb. All Rights
          Reserved.
        </div>
      </div>
    </div>
  </>
);

export default Layout;
