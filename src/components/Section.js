import React from 'react';

export default function Section({
  className, children, py = 20, containerClassName,
}) {
  return (
    <section className={`px-10 md:px-20 lg:px-40 py-${py} ${className}`}>
      <div className={`max-w-screen-2xl m-auto ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
