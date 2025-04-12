'use client';
import React from 'react';
import ServiceCard from '../cards/serviceCard';
import { cn } from '@/lib';
import { useGetInquiries } from '@/hooks';
import { getInquiriesAdapter } from '@/adapters/getInquiriesAdapter';
import AppContainer from '../appContainer';
import { FlexBetween } from '../ui';

const CoreServicesSection = () => {
  const { data: services, isFetching } = useGetInquiries({});
  if (!services) {
    return <p>در حال بارگذاری...</p>;
  }
  const coreServicesData = getInquiriesAdapter(services.data);
  return (
    <section className={cn('mb-20 flex gap-12')}>
      <AppContainer className={cn('h-auto')}>
        <FlexBetween gap={12} className={cn('items-stretch')}>
          {coreServicesData.map((item, idx) => {
            return (
              <ServiceCard
                key={idx}
                category={item.category}
                services={item.services}
                variant={item.variant}
              />
            );
          })}
        </FlexBetween>
      </AppContainer>
    </section>
  );
};

export default CoreServicesSection;
