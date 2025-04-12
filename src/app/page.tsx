import { CoreServicesSection, FaqSection, FlexCol } from '@/components';
import { HeroSection } from '@/components';
import FooterSection from '@/components/sections/footerSection';
import MoreAboutUsSection from '@/components/sections/moreAboutUsSection';
import StatsSection from '@/components/sections/statsSection';
import StepsSection from '@/components/sections/stepsSection';
import { coreClient } from '@/services';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
const queryClient = new QueryClient();
export default async function Landing() {
  await queryClient.prefetchQuery({
    queryKey: ['services'],
    queryFn: coreClient.getInquiries,
  });
  return (
    <FlexCol>
      <HeroSection />
      <>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CoreServicesSection />
        </HydrationBoundary>
      </>
      <StatsSection />
      <StepsSection />

      <MoreAboutUsSection />
      <FaqSection />

      <FooterSection className="mt-20" />
    </FlexCol>
  );
}
