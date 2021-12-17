import React from 'react';

export default function Section({ className, children }) {
  return (
    <section className={`px-10 md:px-20 lg:px-40 py-20 ${className}`}>
      {children}
    </section>
  );
}
