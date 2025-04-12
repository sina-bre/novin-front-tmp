import { cn } from '@/lib/utils';
import stepsAmico from '@public/stepsAmico.png';
import Image from 'next/image';
import { FaqItems } from '@/constants';
import { Accordion } from '../ui';
import AppContainer from '../appContainer';

const FaqSection = () => {
  return (
    <section className={cn('mb-20 w-full')}>
      <AppContainer className={cn('h-full')}>
        <div className={cn('flex w-full justify-center gap-40')}>
          <div
            className={cn(
              'flex w-full basis-[300px] flex-col items-center gap-13',
            )}
          >
            <h1 className={cn('text-primary-main heading-3 font-bold')}>
              سولات متداول
            </h1>
            <Image
              alt="stepsAmico"
              width={300}
              height={300}
              src={stepsAmico}
              title="stepsAmico"
            />
          </div>
          <div className={cn('flex w-full basis-[810px] flex-col gap-2')}>
            {FaqItems.map((faq, index) => (
              <Accordion
                key={faq.id}
                defaultOpen={index === 0}
                title={faq.title}
              >
                <p className="text-lg">{faq.content}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default FaqSection;
