import React from 'react';
import { Link } from 'gatsby';
import Footer from './Footer';
import '../styles/tailwind.css';
import Nav from './Nav';

export default function Layout({ children, countryCode }) {
  return (
    <div className="flex flex-col h-screen justify-
      <Nav countryCode={countryCode} />

      <main className="mb-auto">
        {children}
      </main>

      <Footer countryCode={countryCode} />
    </div>
  );
}
