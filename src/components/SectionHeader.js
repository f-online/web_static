import React from 'react';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl text-center font-bold mb-2">{title}</h2>
      <div className="w-10 h-0.5 bg-fonline-500 mx-auto mb-3" />
      <h4 className="text-center text-gray-500 max-w-md mx-auto">{subtitle}</h4>
    </div>
  );
}
