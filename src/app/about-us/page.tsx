import { HeroSection } from '@/components';
import AboutUsStatsSection from '@/components/about-us/AboutUsStatsSection';
import InfoSection from '@/components/about-us/InfoSection';
import ValuesSection from '@/components/about-us/ValuesSection';
import { cn } from '@/lib';
import AboutUsCarouselSection from '@/components/about-us/AboutUsCarouselSection';

export default function AboutUsPage() {
  return (
    <main>
      <HeroSection />
      <InfoSection className={cn('mt-[5rem] mb-[10rem]')} />
      <ValuesSection className={cn('mt-[40px] mb-[250px]')} />
      <AboutUsStatsSection className={cn('my-[10rem]')} />
      <AboutUsCarouselSection className={cn('mb-[10rem]')} />
    </main>
  );
}
