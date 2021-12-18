import React from 'react';
import { Helmet } from 'react-helmet';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Nav() {
  const internalLinks = [
    {
      to: '/',
      text: 'Start',
    },
    {
      to: '/about',
      text: 'About Us',
    },
    {
      to: '/fahrschulen',
      text: 'Fahrschulen',
    },
    {
      to: '/faq',
      text: 'FAQ',
    },
    {
      to: '/kontakt',
      text: 'Kontakt',
    },
  ];

  return (
    <div>
      <Helmet>
        <script src="/scripts/burger.js" />
      </Helmet>

      <DesktopNav internalLinks={internalLinks} />
      <MobileNav internalLinks={internalLinks} />
    </div>
  );
}
