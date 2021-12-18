import * as React from 'react';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Team from '../components/Team';

export default function IndexPage() {
  return (
    <>
      <Features className="bg-fonline-50" />
      <Team />
      <FAQ className="bg-fonline-50" limit={5} />
    </>
  );
}
