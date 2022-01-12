import * as React from 'react';
import { BiDonateHeart } from 'react-icons/bi';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Team from '../components/Team';
import Section from '../components/Section';
import Reviews from '../components/Reviews';
import Quote from '../components/Quote';
import Waves from '../components/Waves';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

export default function IndexPage() {
  return (
    <>
      <SEO title="Kostenlos für den Führerschein lernen!" />

      <div className="bg-gradient-to-r from-fonline-600 via-fonline-700 to-fonline-500 ">
        <Section containerClassName="flex flex-col lg:flex-row">
          <div className="w-full pr-10 text-white text-left font-bold order-2 lg:order-1">
            <img src="https://d33wubrfki0l68.cloudfront.net/a33b57a4be108ccdf2a32e3702272ed5c4904952/7e28f/img/bg-mac.png" alt="Example Mockup on Macbook and Phone" />
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

              <div className="flex">
                <input type="submit" value="Anmelden" className="w-full cursor-pointer py-4 px-10 bg-fonline-500 hover:bg-fonline-700 text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 no-underline hover:text-white" />
                <a
                  className="bg-teal-600 text-white hover:bg-teal-800 hover:text-white ml-2 py-4 px-10 inline-flex items-center rounded-r-xl rounded-t-xl no-underline"
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RL9PYUBA3MJ2S&source=url"
                >
                  <BiDonateHeart className="mr-2" />
                  Spenden
                </a>
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

            <p className="flex gap-4 justify-center">
              <a href="https://apps.apple.com/at/app/f-online/id1119605799">
                <img src="/download-app-store.svg" alt="Download on App Store" className="h-16" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=at.f_online.android">
                <img src="/download-play-store.svg" alt="Download on Play Store" className="h-16" />
              </a>
            </p>
          </div>
        </Section>

        <Waves />
      </div>

      <Section className="bg-fonline-50">
        <SectionHeader
          title="Warum F-Online?"
          subtitle="F-Online bietet dir kostenlos eine vollumfängliche Lernapplikation mit allen offiziellen Fragen zur Führerscheinprüfung. Überzeuge dich am besten selbst!"
        />

        <Features />
      </Section>

      <Section>
        <SectionHeader
          title="Reviews"
          subtitle="Das sagen andere Nutzer über F-Online"
        />

        <Reviews limit={6} />
      </Section>

      <Quote
        author="Otto Fürst von Bismarck"
        year={2018}
        qoute="Die erste Generation schafft Vermögen, die zweite verwaltet Vermögen, die dritte studiert Kunstgeschichte, und die vierte verkommt."
      />

      <Section className="bg-fonline-50">
        <SectionHeader
          title="Unser Team"
          subtitle="Das Team hinter F-Online steht mit Leidenschaft hinter der Idee, eine kostenfreie Führerscheinbildung für alle anzubieten."
        />

        <Team />
      </Section>

      <Section>
        <SectionHeader
          title="Frequently Asked Questions (FAQ)"
          subtitle="Hast du Fragen oder funktioniert etwas nicht? Nachfolgend findest du die meist gestellten Fragen - vielleicht ist deine Antwort bereits dabei!"
        />

        <FAQ limit={5} />
      </Section>
    </>
  );
}
