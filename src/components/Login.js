import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { BiDonateHeart } from 'react-icons/bi';
import Section from './Section';
import Waves from './Waves';

export default function Login({ title, subTitle, screenshot }) {
  return (
    <div className="bg-gradient-to-r from-fonline-600 via-fonline-700 to-fonline-500 ">
      <Section containerClassName="flex flex-col lg:flex-row" className="px-5 py-5">
        <div className="w-full pr-10 text-white text-left font-bold order-2 lg:order-1">
          <GatsbyImage image={screenshot} alt="Screenshot" />
        </div>
        <div className="bg-white p-6 rounded text-center order-1 lg:order-2">
          <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
          <h2 className="font-bold mt-3">{subTitle}</h2>

          <form action="//app.f-online.at/auth" method="post" className="mt-5 md:mt-10 mb-8 text-left">
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

            <div className="flex flex-col md:flex-row">
              <input type="submit" value="Anmelden" className="w-full cursor-pointer py-4 px-10 bg-fonline-500 hover:bg-fonline-700 text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 no-underline hover:text-white" />
              <a
                className="bg-teal-600 text-white hover:bg-teal-800 hover:text-white md:ml-2 py-4 px-10 inline-flex items-center rounded-l-xl md:rounded-tl-xl md:rounded-bl-none md:rounded-r-xl rounded-t-xl no-underline mt-4 md:mt-0"
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
  );
}
