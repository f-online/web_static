import React from 'react';

export default function Section({
  className, children, containerClassName,
}) {
  return (
    <section className={`px-10 md:px-20 lg:px-40 py-20 ${className}`}>
      <div className={`container m-auto ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
