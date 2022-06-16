import { Link } from 'gatsby';
import React from 'react';

export default function ButtonLink({ to, text }) {
  return (
    <Link to={to} className="block sm:inline py-4 px-10 bg-fonline-500 hover:bg-fonline-700 text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 no-underline hover:text-white">
      {text}
    </Link>
  );
}
