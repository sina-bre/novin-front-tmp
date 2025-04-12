import { ComponentProps, FC } from 'react';
import AppContainer from '../appContainer';
import StepCard from '../cards/stepCard';
import { cn } from '@/lib';
import { steps } from '@/constants';

const StepsSection: FC = () => {
  return (
    <section className={cn('mb-40 w-full')}>
      <AppContainer className={cn('h-full')}>
        <div className={cn('relative flex w-full justify-center gap-20')}>
          {steps.map((step, index) => (
            <StepCard key={step.title} {...step} index={index} />
          ))}
        </div>
      </AppContainer>
    </section>
  );
};

export default StepsSection;
