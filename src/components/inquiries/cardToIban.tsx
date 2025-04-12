'use client';
import { FlexBetween, FlexBetweenCol } from '../ui/flexBox';
import { cn } from '@/lib';
import CreditCard from './creditCard';
import CustomButton from '../ui/customButton';
import { useForm } from 'react-hook-form';
import {
  IBaseVoidProps,
  IInquiriesComponentProps,
  TCreditCard,
} from '@/interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { creditCardSchema } from '@/validations';
import Image from 'next/image';

const CardToIban = ({
  openPaymentModal,
  isLoggedIn,
  navigateToLogin,
}: IInquiriesComponentProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors: formError },
  } = useForm<TCreditCard>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: { input1: '', input2: '', input3: '', input4: '' },
  });

  const onSubmit = (data: any) => {
    if (!isLoggedIn) {
      navigateToLogin();
      return;
    }
    openPaymentModal();
  };
  return (
    <FlexBetween className="items-stretch gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('flex-center basis-1/2')}
      >
        <FlexBetweenCol gap={8} className={cn('w-full')}>
          <div>
            <CreditCard
              variant="credit"
              formError={formError}
              control={control}
            />
            {Object.keys(formError).length > 0 && (
              <p className="text-error-main mt-4 w-full text-xs">
                شماره کارت وارد شده اشتباه است
              </p>
            )}
          </div>
          <CustomButton
            type="submit"
            className="mt-4 w-max"
            onClick={handleSubmit(onSubmit)}
          >
            استعلام
          </CustomButton>
        </FlexBetweenCol>
      </form>
      <div className={cn('basis-1/2')}>
        <Image
          src="/svg/Credit-Card-Amico.svg"
          width={0}
          height={0}
          sizes="100vw"
          className={cn('size-full h-80 object-contain')}
          alt="Bank"
        />
      </div>
    </FlexBetween>
  );
};

export default CardToIban;
