import React from 'react';
import Footer from './Footer';
import '../styles/tailwind.css';
import Nav from './nav/Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />

      {children}

      <Footer />
    </>
  );
}
