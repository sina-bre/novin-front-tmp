'use client';

import { cn } from '@/lib';
import AppContainer from '../appContainer';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { AltArrowLeft, AltArrowRight } from 'solar-icon-set';
import { TeamMemberCard } from './TeamMemberCard';
import { teamMembers } from '@/constants';

interface AboutUsCarouselSectionProps {
  className?: string;
}
const AboutUsCarouselSection = ({ className }: AboutUsCarouselSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={cn('w-full', className)}>
      <AppContainer className={'relative h-full'}>
        <div
          dir="ltr"
          className={cn('m-auto flex w-full items-center justify-center px-6')}
        >
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className={cn('flex w-full')}>
              {teamMembers.map((member, index) => (
                <div key={index} className="w-1/3 min-w-0 flex-none p-6">
                  <TeamMemberCard
                    image={member.image}
                    name={member.name}
                    role={member.role}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={cn('absolute top-1/3 flex w-full justify-between')}>
            <button
              className={cn('cursor-pointer')}
              onClick={onPrevButtonClick}
            >
              <AltArrowLeft
                size={50}
                className={cn('text-primary-main!')}
                iconStyle="BoldDuotone"
              />
            </button>
            <button
              className={cn('cursor-pointer')}
              onClick={onNextButtonClick}
            >
              <AltArrowRight
                size={50}
                className={cn('text-primary-main!')}
                iconStyle="BoldDuotone"
              />
            </button>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default AboutUsCarouselSection;
