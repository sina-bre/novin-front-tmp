'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Portal from './globalPortal';
import { IBaseModalProps } from '@/interfaces';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { CloseCircle, GasStation, Wallet2 } from 'solar-icon-set';
import { CheckBox, CustomButton, FlexBetween, FlexCol } from './ui';
import PaymentMethodToggle from './paymentMethodToggle';
import { useGetInquiries, useGetInquiry, useGetWalletBalance } from '@/hooks';
interface Props extends IBaseModalProps {
  serviceType: string;
}
export default function PaymentMethodModal({
  isOpen,
  onClose,
  serviceType,
}: Props) {
  const { data: walletBalanceData } = useGetWalletBalance();
  const { data: inquiryData } = useGetInquiry({ inquiry: 'cards' });
  const [saveCard, setSaveCard] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'wallet' | 'gateway'>(
    'gateway',
  );
  useLockBodyScroll();
  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className={cn('fixed inset-0 z-50 flex items-center justify-center')}
      >
        {/* Overlay */}
        <div
          className={cn(
            'fixed inset-0 bg-black/50 transition-opacity duration-300',
          )}
          onClick={onClose}
        />
        {/* Content */}
        <div
          className={cn(
            'relative z-50 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-xl',
          )}
        >
          {/* Header */}
          <FlexBetween
            className={cn('bg-primary-main border-b px-6 py-3 text-white')}
          >
            <h2 className={cn('text-primary text-lg font-bold')}>
              تایید و پرداخت
            </h2>
            <CloseCircle
              onClick={onClose}
              size={25}
              className={cn('cursor-pointer text-white!')}
            />
          </FlexBetween>
          <div className={cn('my-4 space-y-4 p-6')}>
            {/* Save card */}
            <FlexBetween
              onClick={() => setSaveCard(!saveCard)}
              className="hover:text-primary-main cursor-pointer border-b border-gray-300 pb-6 transition-colors"
            >
              <p className={cn('')}>
                شماره کارت شما برای استفاده‌های بعدی ذخیره شود؟
              </p>
              <CheckBox isChecked={saveCard} />
            </FlexBetween>
            {/* Payment method */}
            <div className="">
              <h3 className={cn('mb-6 font-bold text-gray-700')}>روش پرداخت</h3>
              <FlexCol gap={4}>
                <PaymentMethodToggle
                  isSelected={selectedMethod === 'wallet'}
                  setSelected={() => setSelectedMethod('wallet')}
                  icon={
                    <Wallet2
                      size={20}
                      iconStyle="BoldDuotone"
                      className="text-primary-main!"
                    />
                  }
                >
                  <FlexCol gap={1}>
                    <p className="">کیف پول</p>
                    <FlexBetween gap={1} className="text-gray-400">
                      <p>اعتبار کیف پول :</p>
                      {!walletBalanceData?.success ? (
                        <p>0 تومان</p>
                      ) : (
                        <p>100,000 تومان</p>
                      )}
                    </FlexBetween>
                  </FlexCol>
                </PaymentMethodToggle>
                <PaymentMethodToggle
                  isSelected={selectedMethod === 'gateway'}
                  setSelected={() => setSelectedMethod('gateway')}
                  icon={
                    <GasStation
                      size={20}
                      iconStyle="BoldDuotone"
                      className="text-primary-main!"
                    />
                  }
                >
                  <FlexCol gap={1}>
                    <p className="">پرداخت آنلاین</p>
                    <FlexBetween gap={1} className="text-gray-400">
                      <p>درگاه پرداخت زیبال</p>
                    </FlexBetween>
                  </FlexCol>
                </PaymentMethodToggle>
              </FlexCol>
            </div>
            {/* Details */}
            <div className={cn('mt-8 border-t border-gray-300 pt-6')}>
              <h3 className={cn('mb-6 font-bold text-gray-700')}>
                جزئیات پرداخت
              </h3>
              <FlexCol gap={4} className="text-sm">
                <FlexBetween className={cn('text-gray-600')}>
                  <p>نوع سرویس</p>
                  <p>{serviceType}</p>
                </FlexBetween>
                <FlexBetween className={cn('text-gray-600')}>
                  <p className="font-bold">حداقل مبلغ قابل پرداخت</p>
                  <p className="text-primary-main">
                    {inquiryData?.data?.price_user}0 تومان
                  </p>
                </FlexBetween>
              </FlexCol>
            </div>
          </div>
          <CustomButton className={cn('mb-10 w-max')}>
            پرداخت و مشاهده
          </CustomButton>
        </div>
      </div>
    </Portal>
  );
}
