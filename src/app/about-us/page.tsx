import { HeroSection } from '@/components';
import InfoSection from '@/components/about-us/InfoSection';
import ValuesSection from '@/components/about-us/ValuesSection';
import { cn } from '@/lib';

export default function AboutUsPage() {
  return (
    <main>
      <HeroSection />
      <InfoSection className={cn('my-10')} />
      <ValuesSection className={cn('my-40')} />
    </main>
  );
}
