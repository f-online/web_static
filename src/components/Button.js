import { Link } from 'gatsby';
import React from 'react';

export default function Button({ to, text }) {
  return (
    <Link to={to} className=" py-4 px-10 bg-fonline-500 hover:bg-fonline-300 text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 no-underline hover:text-white">
      {text}
    </Link>
  );
}
