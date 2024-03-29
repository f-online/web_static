import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Logo from './Logo';

export default function Nav({ countryCode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function openMenu() {
    setMenuOpen(true);
  }

  const { headerLinksNodes, drivingSchools } = useStaticQuery(graphql`
    query {
      headerLinksNodes: allSanityCountry {
        nodes {
          staticPageHeaderLinks {
            _id
            title
            slug {
              current
            }
            country {
              countryCode
            }
          }
          links: _rawStaticPageHeaderLinks(resolveReferences: {maxDepth: 4})
          countryCode
        }
      }
      drivingSchools: allSanityDrivingSchool {
        countries: distinct(field: {country: {countryCode: SELECT}})
      }
    }
  `);

  let headerLinks = [];
  headerLinksNodes.nodes.forEach((node) => {
    if (node.countryCode === countryCode) {
      headerLinks = node.links;
    }
  });

  // check if there is at least on driving school for this country
  let hydrateDrivingSchools = false;
  if (Array.isArray(drivingSchools.countries) && drivingSchools.countries.includes(countryCode)) {
    hydrateDrivingSchools = true;
  }

  return (
    <div>
      <nav className="relative px-6 py-6 flex justify-between items-center bg-white">
        <Link className="text-3xl font-bold leading-none flex items-center" to={`/${countryCode}`}>
          <Logo className="w-14 h-14 pr-4" />
          {' '}
          F-Online
        </Link>

        <div className="lg:hidden">
          <button className="navbar-burger flex items-center p-3" onClick={() => openMenu()}>
            <svg viewBox="0 0 100 80" width="40" height="40" className="fill-fonline-500">
              <rect width="100" height="10" fill="fill-fonline-500" />
              <rect y="30" width="100" height="10" />
              <rect y="60" width="100" height="10" />
            </svg>
          </button>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link
              className="text-sm"
              activeClassName="text-sm text-fonline-500 font-bold"
              to={`/${countryCode}`}
            >
              Start
            </Link>
          </li>
          {hydrateDrivingSchools && (
            <li>
              <Link
                className="text-sm"
                activeClassName="text-sm text-fonline-500 font-bold"
                to={`/${countryCode}/fahrschulen`}
              >
                Fahrschulen
              </Link>
            </li>
          )}
          {headerLinks.map((headerLink) => (
            <li key={`desktop-${headerLink._id}`}>
              <Link
                className="text-sm"
                activeClassName="text-sm text-fonline-500 font-bold"
                to={`/${headerLink.country.countryCode}/${headerLink.slug.current}`}
              >
                {headerLink.title}
              </Link>
            </li>
          ))}
          <li className="pl-8 flex">
            <a
              className="text-sm inline-flex items-center text-gray-500 hover:text-fonline-500"
              href="https://instagram.com/fonline.app"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="w-8 h-8" title="Instagram" />
            </a>
            <a
              className="text-sm inline-flex items-center text-gray-500 hover:text-fonline-500"
              href="https://facebook.com/fonline.at"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="ml-2 w-7 h-7" title="Facebook" />
            </a>
          </li>
        </ul>
        <div className="hidden lg:inline-block">
          <a
            className="hidden lg:inline-block py-2 px-6 border-2 border-fonline-500 bg-fonline-500 hover:border-fonline-700 hover:bg-fonline-700 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href="https://app.f-online.at/#login"
          >
            Anmelden
          </a>
          <a
            className="hidden lg:inline-block py-2 px-6 border-2 border-fonline-500 text-fonline-500 hover:bg-fonline-500 hover:text-white text-sm font-bold rounded-r-xl rounded-t-xl transition duration-200 ml-2"
            href="https://app.f-online.at/#register"
          >
            Registrieren
          </a>
        </div>
      </nav>

      <div className={`navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 ${menuOpen ? '' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={() => closeMenu()} />
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
          <div className="flex justify-between pb-8">
            <Link className="text-3xl font-bold leading-none flex items-center" to={`/${countryCode}`}>
              <Logo className="w-14 h-14 pr-4" />
              {' '}
              F-Online
            </Link>
            <button className="navbar-close" onClick={() => closeMenu()}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block text-fonline-400 p-3 hover:bg-fonline-50 hover:font-semibold hover:text-fonline-500 rounded"
                  to={`/${countryCode}`}
                >
                  Startseite
                </Link>
              </li>
              {hydrateDrivingSchools && (
                <li className="mb-1">
                  <Link
                    className="block text-fonline-400 p-3 hover:bg-fonline-50 hover:font-semibold hover:text-fonline-500 rounded"
                    to={`/${countryCode}/fahrschulen`}
                  >
                    Fahrschulen
                  </Link>
                </li>
              )}
              {headerLinks.map((headerLink) => (
                <li
                  className="mb-1"
                  key={`mobile-${headerLink._id}`}
                >
                  <Link
                    className="block text-fonline-400 p-3 hover:bg-fonline-50 hover:font-semibold hover:text-fonline-500 rounded"
                    to={`/${headerLink.country.countryCode}/${headerLink.slug.current}`}
                  >
                    {headerLink.title}
                  </Link>
                </li>
              ))}
              <li className="ml-2 flex">
                <a
                  className="text-sm inline-flex items-center text-gray-500 hover:text-fonline-500"
                  href="https://instagram.com/fonline.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="w-8 h-8" title="Instagram" />
                </a>
                <a
                  className="text-sm inline-flex items-center text-gray-500 hover:text-fonline-500"
                  href="https://facebook.com/fonline.at"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="ml-4 w-7 h-7" title="Facebook" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold border-2 border-fonline-500 text-fonline-500 hover:bg-fonline-500 hover:text-white rounded-l-xl rounded-t-xl" href="https://app.f-online.at/#register">Registrieren</a>
              <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center border-2 border-fonline-500 hover:border-fonline-700 text-white font-semibold bg-fonline-600 hover:bg-fonline-700 rounded-l-xl rounded-t-xl" href="https://app.f-online.at/">Anmelden</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
