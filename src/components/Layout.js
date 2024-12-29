import React from 'react';
import { Link } from 'gatsby';
import Footer from './Footer';
import '../styles/tailwind.css';
import Nav from './Nav';

export default function Layout({ children, countryCode }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      {/* Banner for updates */}
      <section className="bg-emerald-500 text-white text-center py-4">
        <strong className="text-white">Neues Fragenupdate!</strong>
        {' '}
        <span className="hidden sm:inline">Updates der offiziellen Fragen vom 01.01.25 -</span>
        <Link to="/at/fragenupdate-01-01-2025" className=" text-white px-2 py-1 underline hover:text-white hover:underline rounded-l-xl rounded-t-xl">Mehr erfahren</Link>
      </section>
      <Nav countryCode={countryCode} />

      <main className="mb-auto">
        {children}
      </main>

      <Footer countryCode={countryCode} />
    </div>
  );
}
