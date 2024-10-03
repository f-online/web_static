import { Link } from 'gatsby';
import React from 'react';

export default function ButtonLink({
  to, text = '', type = 'primary', className, children, ...props
}) {
  let cssClass;
  switch (type) {
    case 'primary':
      cssClass = 'bg-fonline-500 hover:bg-fonline-700 text-white hover:text-white';
      break;
    case 'secondary':
      cssClass = 'bg-white border-2 border-fonline-500 text-fonline-500 hover:bg-fonline-500 hover:text-white';
      break;
    default:
      cssClass = '';
      break;
  }

  // Why `{children || text}`: Stupid hack to support old "text" prop until usages are refactored
  return (
    <Link to={to} className={`${className} ${cssClass} block sm:inline py-4 px-10 font-bold rounded-l-xl rounded-t-xl transition duration-200 no-underline`} {...props}>
      {children || text}
    </Link>
  );
}
