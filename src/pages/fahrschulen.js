import React from 'react';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

export default function DrivingSchoolsPage() {
  const drivingSchoolsAreas = [
    {
      state: 'Niederösterreich',
      schools: [{
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      {
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      {
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      {
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      {
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      {
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      {
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      {
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      ],
    },
    {
      state: 'Salzburg',
      schools: [{
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      {
        name: 'Fahrschule POLIVKA',
        street: 'Kremser Landstr.76',
        city: '3100 St. Pölten',
        web: 'www.polivka.at',
      },
      ],
    },
  ];

  return (
    <Section className="bg-fonline-50">
      <SectionHeader
        title="Fahrschulen"
        subtitle="Die folgenden Fahrschulen wollen nicht nur an euch verdienen, sondern empfehlen die kostenlose Lernplattform F-Online als Alternative. Vielen Dank. Lernen könnt ihr natürlich immer mit F-Online, egal bei welcher Fahrschule in Österreich ihr die Fahrprüfung macht."
      />

      <div>
        {drivingSchoolsAreas.map((area) => (
          <div className="my-10">
            <h3 className="text-2xl text-center font-bold mb-2 text-gray-800">{area.state}</h3>
            <div className="w-10 h-0.5 bg-fonline-500 mx-auto mb-3" />
            <h4 className="text-center text-gray-500 max-w-md mx-auto mb-5">{`${area.schools.length} Fahrschulen sind in ${area.state} zu finden`}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {area.schools.map((school) => (
                <div className="p-5 rounded-lg text-center border-b-4 hover:bg-white border-transparent hover:border-fonline-500 hover:shadow-2xl transition-shadow duration-300">
                  <strong>{school.name}</strong>
                  <br />
                  {school.street}
                  <br />
                  {school.city}
                  <br />
                  <a href={school.web}>{school.web}</a>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
}
