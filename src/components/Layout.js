import React from 'react';
import Footer from './Footer';
import '../styles/tailwind.css';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav />

      <main className="mb-auto">
        {children}
      </main>

      <Footer />
    </div>
  );
}
