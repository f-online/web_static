import React from 'react';

export default function Row({ children, columns, className }) {
  return (
    <div className={`mx-20 grid grid-cols-${columns} ${className}`}>
      {children}
    </div>
  );
}
