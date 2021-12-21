import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';

export default function Features({ className }) {
  const features = [
    {
      id: 0,
      headline: 'Mobilität',
      content: 'Uns ist egal, wo du lernst, hauptsache du tust es! Wir bieten eine Webseite und Apps für die gängigen Anbieter, sodass du stets da weiter machen kannst, wo du aufgehört hast..',
    },
    {
      id: 1,
      headline: 'Daten - Analyse',
      content: 'Durch die vielfache Nutzung von F-Online lernen wir deine Problemstellen kennen und versuchen diese gezielt zu verbessern.',
    },
    {
      id: 2,
      headline: 'Spaced Repetition',
      content: 'Mit unserem Lernalgorithmus auf der Spaced Repetition Basis, lernst nach und nach weitere Frage bei gleichzeitiger Wiederholung und Festigung bereits gelernter Inhalte.',
    },
    {
      id: 3,
      headline: 'Erinnerungen',
      content: 'Lass dich regelmäßig ans Lernen erinnern und komme deinem Ziel Schritt für Schritt näher.',
    },
    {
      id: 4,
      headline: 'Kosten? Keine!',
      content: 'F-Online ist und war stets kostenlos und wird es auch bleiben, versprochen! Natürlich kannst du uns mit einer Spende oder dem Kauf der werbefreien Version unterstützen.',
    },
    {
      id: 5,
      headline: 'Zahlen, Zahlen, Zahlen',
      content: 'Du magst Statistiken? Wir auch. Mit unserem System kannst du deinen Fortschritt visualisieren und nachverfolgen.',
    },
  ];

  return (
    <Section className={className}>
      <SectionHeader
        title="Warum F-Online?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature) => (
          <div className="text-center p-5 border-b-4 border-transparent hover:border-fonline-700 hover:shadow-2xl transition-shadow" key={`feature${feature.id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto stroke-fonline-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <h5 className="text-2xl mt-3 mb-4">{feature.headline}</h5>
            <p className="text-gray-500">{feature.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
