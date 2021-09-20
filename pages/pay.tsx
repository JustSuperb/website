import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

import urls from "@constants/urls";
import price from '@constants/price';
import Layout from "@components/Layout";
import Button from "@components/Button";

const Pay = () => {
  const [paid, setPaid] = useState(false);
  const [payer, setPayer] = useState<any>();

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
                  amount: { currency_code: "USD", value: price },
                },
              ],
            });
          },

          onApprove: function (data, actions) {
            return actions.order.capture().then(function (orderData) {
              // Full available details
              console.log("Capture result", orderData);

              // Show a success message within this page, e.g.
              const element = document.getElementById(
                "paypal-button-container"
              );
              element.innerHTML = "";

              setPaid(true);
              setPayer(orderData?.payer);
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
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&enable-funding=venmo&currency=USD`}
        strategy="beforeInteractive"
        data-sdk-integration-source="button-factory"
      />
      <div className="pt-16 px-4 pb-20 isolate min-h-screen">
        {paid ? (
          <div className="px-3">
            <h3 className="text-center text-2xl md:text-3xl">
              Thank you for your payment!
            </h3>
            <p className="text-center mx-auto mt-8 text-gray-600 sm:text-lg sm:max-w-md">
              We will start your Chinese name development immediately. And
              deliver the product to your mailbox{" "}
              {payer?.email_address && (
                <span className="text-primary-600">
                  ({payer?.email_address})
                </span>
              )}{" "}
              within 48 hours.
            </p>

            <Link href={urls.home}>
              <Button className="mx-auto mt-8">Back to Home</Button>
            </Link>
          </div>
        ) : (
          <div className="px-2">
            <h3 className="text-center text-2xl">
              Please use PayPal to complete your purchase!
            </h3>
            <p className="mt-4 mx-auto text-center text-base text-gray-600 sm:max-w-lg">
              Thank you for using our service! We have received your request!
              <br className="hidden sm:block" /> We will deliver the product
              within 48 hours after your payment is completed.
            </p>

            <div className="text-center mt-12 mb-6">
              Total <span className="text-4xl">${price}</span> USD
            </div>
          </div>
        )}

        <div className="max-w-xs mx-auto" id="smart-button-container">
          <div style={{ textAlign: "center" }}>
            <div id="paypal-button-container"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pay;
