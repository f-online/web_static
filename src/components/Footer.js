import { Link } from 'gatsby';
import React from 'react';

export default function Footer() {
  return (
    <footer className="px-40 py-10 text-white bg-fonline-500 flex flex-col text-center md:text-left md:flex-row md:justify-between">
      <div>
        Made with ♥ by F-Online.
      </div>
      <div>
        <Link to="/impressum" className="pr-4">Impressum</Link>
        <Link to="/agb">AGB</Link>
      </div>

    </footer>
  );
}
