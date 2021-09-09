import Document, { Html, Head, Main, NextScript } from "next/document";

import { gaId } from "@utils/ga";

const GATrackingCode = () => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { page_path: window.location.pathname });
`,
      }}
    />
  </>
);

const FacebookMessengerCode = () => (
  <>
    <div id="fb-root"></div>
    <div id="fb-customer-chat" className="fb-customerchat"></div>
    <script
      dangerouslySetInnerHTML={{
        __html: `
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "109218551464328");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v11.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
      `,
      }}
    />
  </>
);

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/*<script src="https://cmp.osano.com/16CVviSfPZBHq42xz/fb793d75-cde1-4054-b45e-a64c322a1741/osano.js"></script>*/}
          <GATrackingCode />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <FacebookMessengerCode />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
