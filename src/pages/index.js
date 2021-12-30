import * as React from 'react';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Team from '../components/Team';
import Section from '../components/Section';
import Reviews from '../components/Reviews';
import Quote from '../components/Quote';

export default function IndexPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-fonline-600 via-fonline-700 to-fonline-500 ">
        <Section containerClassName="flex flex-col lg:flex-row">
          <div className="w-full pr-10 text-white text-left font-bold order-2 lg:order-1">
            <img src="https://d33wubrfki0l68.cloudfront.net/a33b57a4be108ccdf2a32e3702272ed5c4904952/7e28f/img/bg-mac.png" />
          </div>
          <div className="bg-white p-6 rounded text-center order-1 lg:order-2">
            <h1 className="text-4xl font-semibold">Kostenlos für den Führerschein lernen</h1>
            <h2 className="text-gray-500 mt-3">mit den offiziellen Fragen (Stand: 14.12.2021) für die österreichische Fahrprüfung. Wir sind und bleiben gratis!</h2>

            <form action="//app.f-online.at/auth" method="post" className="mt-10 mb-8 text-left">
              <div className="mb-5">
                <label htmlFor="mail" className="font-semibold">E-Mail:</label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="username"
                    placeholder="max@mustermann.de"
                    id="mail"
                    className="w-full border-gray-500 rounded py-2 focus:border-fonline-500 focus:ring-fonline-500"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="font-semibold">Passwort:</label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border-gray-500 rounded py-2 focus:border-fonline-500 focus:ring-fonline-500"
                  />
                </div>
              </div>

              <div>
                <input type="submit" value="Anmelden" className="w-full cursor-pointer py-4 px-10 bg-fonline-500 hover:bg-fonline-700 text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 no-underline hover:text-white" />
              </div>
            </form>

            <hr />

            <p className="text-gray-700 pb-0">
              Du hast keinen Account?
              {' '}
              <br />
              Erstelle
              {' '}
              <a href="https://app.f-online.at/#register">hier</a>
              {' '}
              dein gratis Lernkonto!
            </p>
          </div>
        </Section>
      </div>

      <Features className="bg-fonline-50" />

      <Reviews limit={6} />

      <Quote
        author="Otto Fürst von Bismarck"
        year={2018}
        qoute="Die erste Generation schafft Vermögen, die zweite verwaltet Vermögen, die dritte studiert Kunstgeschichte, und die vierte verkommt."
      />

      <Team className="bg-fonline-50" />

      <FAQ limit={5} />
    </>
  );
}
