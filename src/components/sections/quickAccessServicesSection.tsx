'use client';
import React, { useState, Suspense, ReactElement } from 'react';
import { FlexCol } from '../ui/flexBox';
import { cn } from '@/lib';
import { quickAccessServicesNavigation } from '@/constants';
import PaymentMethodModal from '../paymentMethodModal';
import { useModalStore } from '@/store/modalStore';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppStore } from '@/store/general';

const IbanInquiry = React.lazy(() => import('../inquiries/ibanInquiry'));
const CardToIban = React.lazy(() => import('../inquiries/cardToIban'));
const BouncedCheckInquiry = React.lazy(
  () => import('../inquiries/bouncedCheckInquiry'),
);
const MilitaryServiceInquiry = React.lazy(
  () => import('../inquiries/militaryServiceInquiry'),
);
const NationalIdInquiry = React.lazy(
  () => import('../inquiries/nationalIdInquiry'),
);

const QuickAccessServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { openModal, closeModal, setOpenModal } = useModalStore();
  const { status, data } = useSession();
  console.log(data);

  const router = useRouter();
  const pathname = usePathname();
  const { setPreviousPath } = useAppStore();
  const navigateToLogin = () => {
    setPreviousPath(pathname);
    router.push('/login');
  };
  const isLoggedIn: boolean = status === 'authenticated';
  const handleNavigationClick = (index: number) => {
    setActiveIndex(index);
  };
  const isPaymentMethodModalOpen = openModal === 'payment-method';
  const handleOpenPaymentMethodModal = () => {
    //get user data
    setOpenModal('payment-method');
  };
  const componentMap: Record<
    (typeof quickAccessServicesNavigation)[number]['key'],
    ReactElement
  > = {
    ibanInquiry: (
      <IbanInquiry
        openPaymentModal={handleOpenPaymentMethodModal}
        navigateToLogin={navigateToLogin}
        isLoggedIn={isLoggedIn}
      />
    ),
    cardToIban: (
      <CardToIban
        openPaymentModal={handleOpenPaymentMethodModal}
        navigateToLogin={navigateToLogin}
        isLoggedIn={isLoggedIn}
      />
    ),
    bouncedCheckInquiry: (
      <BouncedCheckInquiry
        openPaymentModal={handleOpenPaymentMethodModal}
        navigateToLogin={navigateToLogin}
        isLoggedIn={isLoggedIn}
      />
    ),
    militaryServiceInquiry: (
      <MilitaryServiceInquiry
        openPaymentModal={handleOpenPaymentMethodModal}
        navigateToLogin={navigateToLogin}
        isLoggedIn={isLoggedIn}
      />
    ),
    nationalIdInquiry: (
      <NationalIdInquiry
        openPaymentModal={handleOpenPaymentMethodModal}
        navigateToLogin={navigateToLogin}
        isLoggedIn={isLoggedIn}
      />
    ),
  } as const;

  const renderContent = () => {
    const activeKey = quickAccessServicesNavigation[activeIndex].key;
    return componentMap[activeKey] || <div>Select a service</div>;
  };

  return (
    <FlexCol className={'gap-6'}>
      <nav className={cn('overflow-hidden rounded-xl bg-white p-4 shadow')}>
        <ul className={cn('mx-auto flex w-max flex-wrap')}>
          {quickAccessServicesNavigation.map((item, index) => (
            <li
              key={index}
              className={cn(
                'hover:text-secondary-main cursor-pointer rounded-lg px-8 py-2 text-black transition-colors',
                activeIndex == index && 'bg-primary-main text-white',
              )}
              onClick={() => handleNavigationClick(index)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
      <section
        className={cn('overflow-hidden rounded-xl bg-gray-100 p-12 shadow')}
      >
        <Suspense fallback={<QuickAccessServicesSection.Skeleton />}>
          {renderContent()}
        </Suspense>
      </section>
      {isPaymentMethodModalOpen && (
        <PaymentMethodModal
          isOpen={isPaymentMethodModalOpen}
          onClose={closeModal}
          serviceType={quickAccessServicesNavigation[activeIndex].label}
        />
      )}
    </FlexCol>
  );
};
QuickAccessServicesSection.Skeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 w-1/3 rounded bg-gray-200"></div>
      <div className="h-4 w-2/3 rounded bg-gray-200"></div>
      <div className="h-4 w-1/2 rounded bg-gray-200"></div>
      <div className="h-8 w-full rounded bg-gray-200"></div>
    </div>
  );
};
export default QuickAccessServicesSection;
