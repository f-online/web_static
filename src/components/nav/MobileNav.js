import { Link } from 'gatsby';
import React from 'react';
import Logo from '../Logo';

export default function MobileNav({ internalLinks }) {
  return (
    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
      <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
        <div className="flex justify-between pb-8">
          <Link className="text-3xl font-bold leading-none flex items-center" to="/">
            <Logo className="w-14 h-14 pr-4" />
            {' '}
            F-Online
          </Link>
          <button className="navbar-close">
            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            {internalLinks.map((link) => (
              <li className="mb-1">
                <Link
                  to={link.to}
                  className="block text-fonline-400 p-3 hover:bg-fonline-50 hover:font-semibold hover:text-fonline-500 rounded"
                >
                  {link.text}
                </Link>
              </li>

            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign in</a>
            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-fonline-600 hover:bg-fonline-700 rounded-l-xl rounded-t-xl" href="#">Sign Up</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
