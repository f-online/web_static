import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { BiHeart, BiCheckCircle, BiXCircle } from 'react-icons/bi';
import Section from '../components/Section';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

export default function UpgradePage({ location }) {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [paymentCanceled, setPaymentCanceled] = useState(false);

  const params = new URLSearchParams(location.search);
  let accountMail = '';
  if (params.get('account') !== null) {
    accountMail = params.get('account');
  }

  const paypalOptions = {
    'client-id': 'Ad8dd58EhUXHIa-6hqrtvgkvdH7flIoFYcs6JKF5ExhcirOnbXAbFOna-TDknQamOs6pJGV592Xdfy52',
    currency: 'EUR',
  };

  return (
    <Layout countryCode="at">
      <SEO title="Upgrade zur werbefreien Version" />

      <Section className="bg-fonline-50">
        <SectionHeader
          title="Werbefreie F-Online Version"
        />

        <div className="bg-white px-10 py-4 rounded-xl max-w-2xl mx-auto">
          {!paymentSuccessful && (
            <p>
              Für nur 4.99 EUR kannst du dein F-Online Lernkonto von der Werbung befreien.
              Egal ob du am Handy, Tablet oder am Computer lernst, du siehst keine Werbung
              mehr und unterstützt F-Online mit deinem werbefreien Konto.
            </p>
          )}

          {/* Account not given */}
          {accountMail.length === 0 && (
            <div>
              <div className="mt-2 mb-4">
                Um die vollen Vorteile der werbefreien Version auszuschöpfen,
                melde dich bitte zuerst in deinem F-Online Konto an
                und klicke auf "Unterstütze uns mit der werbefreien F-Online Version.".
              </div>
              <a
                className="block text-center w-full cursor-pointer py-4 px-10 bg-fonline-500 hover:bg-fonline-700 text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 no-underline hover:text-white"
                href="https://app.f-online.at/"
              >
                Anmelden
              </a>
            </div>
          )}

          {/* Account given, but not payed yet */}
          {!paymentSuccessful && accountMail && accountMail.length > 0 && (
            <div>
              <div className="mb-5">

                <div className="mt-1 text-center font-bold border border-gray-500 rounded py-2 bg-gray-100">
                  <div
                    className="inline-flex items-center"
                    readOnly
                  >
                    {accountMail}
                    {paymentFailed && (<BiXCircle className="ml-2 text-red-500 text-2xl" />)}
                  </div>
                </div>

                <div className="text-gray-500 font-light text-xs text-center mt-1">
                  Werbefreies Lernkonto
                  {' '}
                  {accountMail}
                  {' '}
                  für 4,99 EUR (inkl. Mwst.)
                </div>

              </div>

              {paymentFailed && (
                <div className="text-center mb-2 text-red-500">
                  Ein Problem ist aufgetreten.
                  <br />
                  {' '}
                  Bitte versuche es erneut oder kontaktiere uns via Mail:
                  {' '}
                  <a href="mailto:info@f-online.at">info@f-online.at</a>
                </div>
              )}

              {paymentCanceled && (
              <div className="text-center mb-2 text-fonline-500">
                Nicht sicher?
                <br />
                {' '}
                Probiere die App gerne weiter kostenfrei aus und entscheide dich später!
              </div>
              )}

              <PayPalScriptProvider options={paypalOptions}>
                <PayPalButtons
                  style={{ color: 'blue' }}
                  createOrder={(data, actions) => actions.order.create({
                    payer: {
                      email_address: accountMail,
                      address: {
                        country_code: 'AT',
                      },
                    },
                    application_context: {
                      brand_name: 'F-Online',
                      locale: 'de-AT',
                      shipping_preference: 'NO_SHIPPING',
                    },
                    purchase_units: [{
                      reference_id: `werbefrei-${accountMail}`,
                      description: `Werbefrei F-Online ${accountMail}`,
                      soft_descriptor: 'werbefrei',
                      amount: {
                        currency_code: 'EUR',
                        value: '4.99',
                      },
                    }],
                  })}
                  onApprove={(data, actions) => actions.order.capture().then((details) => {
                    setPaymentSuccessful(true);
                  })}
                  onCancel={() => {
                    setPaymentCanceled(true);
                  }}
                  onError={() => {
                    setPaymentFailed(true);
                  }}
                />
              </PayPalScriptProvider>
            </div>
          )}

          {/* Payment successful */}
          {paymentSuccessful && (
            <div>
              <div className="text-center">
                <div className="text-fonline-500 p-4 font-bold text-4xl rounded-l-xl rounded-t-xl inline-flex items-center">
                  <BiHeart className="mr-2" />
                  Vielen Dank!
                </div>
                <div className="mt-2 mb-4 text-center font-bold border border-gray-500 rounded py-2 bg-gray-100">
                  <div
                    className="inline-flex items-center"
                    readOnly
                  >
                    {accountMail}
                    <BiCheckCircle className="ml-2 text-green-500 text-2xl" />
                  </div>
                </div>
                <div className="text">
                  Dein Lernkonto wird innerhalb weniger Minuten von der Werbung freigeschaltet.
                </div>
              </div>
              <div className="mt-4 mb-4">
                <a
                  className="block text-center w-full cursor-pointer py-4 px-10 bg-fonline-500 hover:bg-fonline-700 text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 no-underline hover:text-white"
                  href="https://app.f-online.at/"
                >
                  Zurück zur Lernapp
                </a>
              </div>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-xl text-center font-bold">30-Tage Geld zurück!</h2>
            <p>
              Solltest du mit der werbefreien Version nicht zufrieden sein, erhältst du innerhalb 30 Tagen, auch ohne Angabe von Gründen, dein Geld zurück. Sende dazu einfach ein Email an
              {' '}
              <a href="mailto:info@f-online.at">info@f-online.at</a>
              .
            </p>
          </div>

        </div>
      </Section>
    </Layout>
  );
}
