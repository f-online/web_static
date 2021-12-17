import React from 'react';
import { Link } from 'gatsby';
import Logo from '../Logo';

export default function DesktopNav({ internalLinks }) {
  return (
    <nav className="relative px-6 py-6 flex justify-between items-center bg-white">
      <Link className="text-3xl font-bold leading-none flex items-center" to="/">
        <Logo className="w-14 h-14 pr-4" />
        {' '}
        F-Online
      </Link>

      <div className="lg:hidden">
        <button className="navbar-burger flex items-center p-3">
          <svg viewBox="0 0 100 80" width="40" height="40" className="fill-fonline-500">
            <rect width="100" height="10" fill="fill-fonline-500" />
            <rect y="30" width="100" height="10" />
            <rect y="60" width="100" height="10" />
          </svg>
        </button>
      </div>

      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        {internalLinks.map((link) => (
          <li>
            <Link
              className="text-sm"
              activeClassName="text-sm text-fonline-500 font-bold"
              to={link.to}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <a
        className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200"
        href="#"
      >
        Sign In
      </a>
      <a
        className="hidden lg:inline-block py-2 px-6 bg-fonline-500 hover:bg-fonline-300 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
        href="app.f-online.at"
      >
        Sign up
      </a>
    </nav>
  );
}
