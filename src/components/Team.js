import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';

export default function Team({ className }) {
  const teamMembers = [
    {
      id: 0,
      name: 'Wolfgang Gassler',
      imgLink: 'https://cdn.shopify.com/s/files/1/0505/5453/6095/files/wolfgang_160x160@2x.jpg?v=1615599780',
      function: 'Founder',
    },
    {
      id: 1,
      name: 'Tim Hannemann',
      imgLink: 'https://ca.slack-edge.com/T3S9LFUCW-U3SE79M39-g56d4a4aa5c5-512',
      function: 'Founder',
    },
    {
      id: 2,
      name: 'Wolfgang Gassler',
      imgLink: 'https://cdn.shopify.com/s/files/1/0505/5453/6095/files/wolfgang_160x160@2x.jpg?v=1615599780',
      function: 'Founder',
    },
    {
      id: 3,
      name: 'Tim Hannemann',
      imgLink: 'https://ca.slack-edge.com/T3S9LFUCW-U3SE79M39-g56d4a4aa5c5-512',
      function: 'Founder',
    },
    {
      id: 4,
      name: 'Wolfgang Gassler',
      imgLink: 'https://cdn.shopify.com/s/files/1/0505/5453/6095/files/wolfgang_160x160@2x.jpg?v=1615599780',
      function: 'Founder',
    },
    {
      id: 5,
      name: 'Tim Hannemann',
      imgLink: 'https://ca.slack-edge.com/T3S9LFUCW-U3SE79M39-g56d4a4aa5c5-512',
      function: 'Founder',
    },
  ];

  return (
    <Section className={className}>
      <SectionHeader
        title="Unser Team"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((teammember) => (
          <div className="flex flex-col align-items-center text-center p-5" key={`team${teammember.id}`}>
            <div className="mx-auto mb-5 relative">
              <img src={teammember.imgLink} alt={`Foto von ${teammember.name}`} className="h-40 w-40 rounded-full" />
              <a href="#" className="absolute h-6 w-6 right-0 bottom-2 p-5 bg-fonline-500 rounded-l-xl rounded-t-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white absolute top-2 left-[0.5rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

            </div>
            <p className="text-xl text-fonline-500 p-0">{teammember.name}</p>
            <p className="text-gray-500 p-0">{teammember.function}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
