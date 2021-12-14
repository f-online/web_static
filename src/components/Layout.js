import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import '../styles/tailwind.css';

export default function Layout({ children }) {
  return (
    <>
      <Nav />

      {children}

      <Footer />
    </>
  );
}
