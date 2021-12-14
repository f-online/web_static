import { Link } from 'gatsby';
import React from 'react';
import Row from './Row';

export default function Nav() {
  return (
    <header className="bg-blue-500 text-white py-5">
      <Row columns={2}>
        <div>
          Logo
        </div>
        <nav className="grid grid-cols-4 text-center">
          <Link to="/">Home</Link>
          <Link to="/faq">Hilfe</Link>
          <Link to="/fahrschulen">Fahrschulen</Link>
          <Link to="/about">About</Link>
        </nav>
      </Row>
    </header>
  );
}
