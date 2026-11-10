import React from 'react';

const outcomes = [
  { value: '40%', label: 'fewer app crashes' },
  { value: '20%', label: 'less development time' },
  { value: '30%', label: 'fewer post-release bugs' },
];

const ImpactStrip: React.FC = () => (
  <section aria-labelledby="impact-title" className="bg-accent text-primary">
    <div className="mx-auto grid max-w-6xl gap-7 px-6 py-10 lg:grid-cols-[.9fr_2fr_auto] lg:items-center lg:px-8 lg:py-12">
      <div>
        <p className="text-sm font-semibold">Walmart Global Tech</p>
        <h2 id="impact-title" className="mt-1 font-display text-2xl font-semibold tracking-tight">
          Results in production
        </h2>
      </div>

      <dl className="grid grid-cols-3 gap-3 sm:gap-4">
        {outcomes.map(({ value, label }) => (
          <div key={label} className="border-l border-primary/25 pl-3 sm:pl-4">
            <dt className="font-display text-3xl font-semibold leading-none tracking-[-.06em] sm:text-4xl">{value}</dt>
            <dd className="mt-2 max-w-32 text-xs leading-snug sm:text-sm">{label}</dd>
          </div>
        ))}
      </dl>

      <a
        href="#experience"
        className="w-fit border-b border-primary/50 pb-1 text-sm font-semibold transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        See the work
      </a>
    </div>
  </section>
);

export default ImpactStrip;
