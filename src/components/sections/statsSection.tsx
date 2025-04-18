'use client';

import { FC } from 'react';
import AppContainer from '../appContainer';
import { cn } from '@/lib';
import { FlexBetween } from '../ui/flexBox';

const stats = [
  { label: 'هزار نفر', value: '55', description: 'کاربر فعال' },
  { label: 'تراکنش', value: '250', description: 'موفق در ماه' },
  { label: 'سال', value: '5', description: 'تجربه کاری' },
  { label: 'شرکت', value: '30', description: 'تجربه کاری' },
];

const StatsSection: FC = () => {
  return (
    <section className="bg-primary-main mb-60 w-full overflow-hidden bg-[url(/wavy-pattern.png)] bg-cover py-10 text-white">
      <AppContainer className={cn('h-auto px-10')}>
        <FlexBetween>
          {stats.map((stat, idx) => (
            <FlexBetween gap={4} key={idx}>
              <FlexBetween gap={2} className="font-extrabold">
                <span className="text-secondary-main text-5xl">+</span>
                <span className="text-6xl">{stat.value}</span>
              </FlexBetween>
              <div>
                <div className="text-secondary-main text-xl font-bold">
                  {stat.label}
                </div>
                <div className="text-white/80">{stat.description}</div>
              </div>
            </FlexBetween>
          ))}
        </FlexBetween>
      </AppContainer>
    </section>
  );
};

export default StatsSection;
