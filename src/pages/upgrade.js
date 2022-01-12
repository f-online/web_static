import React from 'react';
import { Helmet } from 'react-helmet';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

export default function UpgradePage() {
  return (
    <>
      <SEO title="Upgrade zur werbefreien Version" />

      <Helmet>
        <script src="https://www.paypal.com/sdk/js?client-id=Ad8dd58EhUXHIa-6hqrtvgkvdH7flIoFYcs6JKF5ExhcirOnbXAbFOna-TDknQamOs6pJGV592Xdfy52&currency=EUR" />
        <script src="/scripts/upgrade.js" />
      </Helmet>
      <Section className="bg-fonline-50">
        <SectionHeader
          title="Werbefreie F-Online Version"
        />

        <div className="bg-white px-10 py-4 rounded-xl max-w-2xl mx-auto">
          <p>
            Für nur 4.99 EUR kannst du dein F-Online Lernkonto von der Werbung befreien.
            Egal ob du am Handy, Tablet oder am Computer lernst, du siehst keine Werbung
            mehr und unterstützt F-Online mit deinem werbefreien Konto.
          </p>

          <div id="email-provided">
            <p>
              Werbefreies Lernkonto
              {' '}
              <span className="email">email</span>
              {' '}
              für 4,99 EUR (inkl. Mwst.)
            </p>
          </div>
          <div id="payment-done">
            <p>
              Vielen Dank! Dein Lernkonto
              {' '}
              <span className="email">email</span>
              {' '}
              wird innerhalb weniger Minuten von der Werbung freigeschalten. Zurück zur Lernapp
              {' '}
              <a href="https://app.f-online.at/#logout">app.f-online.at</a>
              .
            </p>
          </div>
          <div id="paypal-button-container" />
          <div id="no-email-provided">
            <p>
              Um die Werbefreie Version zu kaufen, melde dich bitte zuerst in der App unter
              {' '}
              <a href="https://app.f-online.at">app.f-online.at</a>
              {' '}
              an und klicke dann auf den Kaufbutton.
            </p>
          </div>

          <p>
            <b>30-Tage Geld zurück!</b>
            {' '}
            Solltest du mit der werbefreien Version nicht zufrieden sein,
            erhältst du innerhalb 30 Tagen,
            auch ohne Angabe von Gründen, dein Geld zurück.
            Sende dazu einfach ein Email an info@f-online.at.
          </p>
        </div>
      </Section>
    </>
  );
}
