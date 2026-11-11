import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { useInView } from './useInView';
import { useCountUp } from './useCountUp';

const outcomes = [
  { value: 40, label: 'fewer app crashes' },
  { value: 20, label: 'less development time' },
  { value: 30, label: 'fewer post-release bugs' },
];

const CountStat: React.FC<{ end: number; label: string; active: boolean; large?: boolean }> = ({
  end,
  label,
  active,
  large = false,
}) => {
  const count = useCountUp(end, active, 2000);

  if (large) {
    return (
      <div className="flex items-center gap-5 sm:gap-7">
        <p
          className="font-display text-6xl font-semibold leading-none tracking-[-.06em] text-accent sm:text-7xl"
          aria-label={`${end} percent`}
        >
          {count}
          <span className="text-4xl sm:text-5xl">%</span>
        </p>
        <div>
          <p className="text-sm font-semibold text-white">Walmart Global Tech</p>
          <h2
            id="impact-title"
            className="mt-1 max-w-xs font-display text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl"
          >
            Fewer app crashes in production.
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-baseline gap-3">
      <dt className="font-display text-3xl font-semibold leading-none tracking-[-.05em] text-white">
        {count}%
      </dt>
      <dd className="max-w-32 text-sm leading-snug text-muted">{label}</dd>
    </div>
  );
};

const ImpactStrip: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} aria-labelledby="impact-title" className="border-y border-white/10 bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-9 md:grid-cols-[1fr_1.5fr] md:items-center lg:px-8 lg:py-12">
        <CountStat end={outcomes[0].value} label={outcomes[0].label} active={isInView} large />

        <div className="flex flex-col gap-5 border-t border-white/15 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <dl className="grid grid-cols-2 gap-4">
            {outcomes.slice(1).map(({ value, label }) => (
              <CountStat key={label} end={value} label={label} active={isInView} />
            ))}
          </dl>
          <a
            href="#experience"
            className="w-fit border-b border-accent/60 pb-1 text-sm font-semibold text-accent transition-colors hover:border-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            How the work changed the app <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactStrip;
