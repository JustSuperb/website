import { useEffect } from "react";
import Script from "next/script";

import Layout from "@components/Layout";

const Pay = () => {
  useEffect(() => {
    function initPayPalButton() {
      const paypal = global.paypal;
      paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "blue",
            layout: "vertical",
            label: "paypal",
          },

          createOrder: function (data, actions) {
              console.log("create", data);
            return actions.order.create({
              purchase_units: [
                {
                  description: "Chinese Naming Service",
                  amount: { currency_code: "USD", value: 69 },
                },
              ],
            });
          },

          onApprove: function (data, actions) {
            return actions.order.capture().then(function (orderData) {
              // Full available details
              console.log(
                "Capture result",
                data,
                orderData,
                JSON.stringify(orderData, null, 2)
              );

              // Show a success message within this page, e.g.
              const element = document.getElementById(
                "paypal-button-container"
              );
              element.innerHTML = "";
              element.innerHTML = "<h3>Thank you for your payment!</h3>";

              // Or go to another URL:  actions.redirect('thank_you.html');
            });
          },

          onError: function (err) {
            console.log(err);
          },
        })
        .render("#paypal-button-container");
    }
    initPayPalButton();
  }, []);

  return (
    <Layout>
      <div className="max-w-xs mx-auto pt-20 px-4 pb-40">
        <div id="smart-button-container">
          <div style={{ textAlign: "center" }}>
            <div id="paypal-button-container"></div>
          </div>
        </div>
      </div>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&enable-funding=venmo&currency=USD`}
        strategy="beforeInteractive"
        data-sdk-integration-source="button-factory"
      />
    </Layout>
  );
};

export default Pay;
