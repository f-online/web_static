import React from 'react';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
import ButtonLink from './ButtonLink';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Stars from './Stars';

export default function Reviews({ className, limit }) {
  const reviews = [
    {
      username: 'Melanie',
      date: '20. Februar 2021',
      platform: 'Android',
      rating: 5,
      content: 'Top!! Lasst euch bloß keine überteuerten Apps von den Fahrschulen einreden. Diese App beinhaltet alle aktuellen Fragen! Ich habe die Theorieprüfung beim ersten Mal bestanden. Danke für die tolle App!!! Ich empfehle sie jeden weiter!:)',
    },
    {
      username: 'Rupert',
      date: '13. Juni 2020',
      platform: 'Android',
      rating: 5,
      content: 'Super App, sehr hilfreich, perfekt für die Prüfungsvorbereitung. Da kann man gerne ein paar € freiwillig spenden, damit das so bleibt',
    },
    {
      username: 'Violet',
      date: '29. November 2020',
      platform: 'Android',
      rating: 5,
      content: 'Super App! Auch die verlinkten Videos sind große Klasse und eine tolle Hilfe, danke für dieses fantastische GRATIS Angebot. Man kann Euch nicht genug empfehlen :D',
    },
    {
      username: 'Stefan',
      date: 'August 30, 2020',
      platform: 'Android',
      rating: 5,
      content: 'Ich habe ausschließlich mit F-Online gelernt (Grundwissen, B-Modul) und 98% bei der Theorieprüfung erhalten. Top App, danke dafür :)',
    },
    {
      username: 'Kaja',
      date: '22. Mai 2019',
      platform: 'iOS',
      rating: 5,
      content: 'Ohne die App wäre ich warscheinlich 40€ und viele Stunden meines Lebens ärmer, also Danke. Hat sicher vielen Schülern geholfen!',
    },
  ];

  return (
    <Section className={className}>
      <SectionHeader
        title="Reviews"
        subtitle="Das sagen andere Nutzer über F-Online"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review) => (
          <div className="bg-fonline-50 rounded-l-xl rounded-t-xl p-4">
            <Stars value={review.rating} />
            <div className="my-2 italic">{review.content}</div>
            <div className="flex place-content-between text-gray-500">
              <div>{`- ${review.username}`}</div>
              <div className="text-xs inline-flex items-center ml-2 ">
                {review.platform === 'iOS'
                && (
                <>
                  <AiFillApple className="inline mr-1" />
                  App Store
                </>
                )}
                {review.platform === 'Android'
                && (
                <>
                  <AiFillAndroid className="inline mr-1" />
                  Play Store
                </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {limit > 0
        && (
          <div className="text-center mt-10">
            <ButtonLink to="/reviews" text="Mehr Reviews anzeigen" />
          </div>
        )}
    </Section>
  );
}
