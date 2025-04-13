import { HeroSection } from '@/components';
import AboutUsStatsSection from '@/components/about-us/AboutUsStatsSection';
import InfoSection from '@/components/about-us/InfoSection';
import ValuesSection from '@/components/about-us/ValuesSection';
import { cn } from '@/lib';

export default function AboutUsPage() {
  return (
    <main>
      <HeroSection />
      <InfoSection className={cn('my-10')} />
      <ValuesSection className={cn('mt-40 mb-[340px]')} />
      <AboutUsStatsSection />
    </main>
  );
}
