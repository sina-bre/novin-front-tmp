import { HeroSection } from '@/components';
import InfoSection from '@/components/about-us/InfoSection';

export default function AboutUsPage() {
  return (
    <main>
      <HeroSection />
      <InfoSection className="my-8" />
    </main>
  );
}
