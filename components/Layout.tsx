import Link from 'next/link';

import HeaderBar from './HeaderBar';

const Layout = ({ children }) => (

  <>
    <HeaderBar />
    <div className="root">
      <div className="content mx-auto">

        {children}

        <div className="copyright flex items-center">
          <Link href="/cookie-policy">
            <a>Cookie policy</a>
          </Link>
          <div>Copyright © {(new Date()).getFullYear()} JustSuperb. All Rights Reserved.</div>
        </div>
      </div>
      <style jsx>{`
        .root {
          background: var(--bg-color);
          color: var(--text-color);
          padding: 0 20px 0 20px;
        }
        .content {
          max-width: 1440px;
        }
        .copyright {
          flex-direction: column;
          font-size: 12px;
          padding: 10px 0;
        }
        .copyright a {
          padding: 10px;
        }
      `}</style>
    </div>
  </>
);

export default Layout;
