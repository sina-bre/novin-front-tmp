'use client';
import { FlexBetween, FlexBetweenCol } from '../ui/flexBox';
import { cn } from '@/lib';
import CustomButton from '../ui/customButton';
import { useForm } from 'react-hook-form';
import { IInquiriesComponentProps, TIbanCard } from '@/interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { ibanCardSchema } from '@/validations';
import Image from 'next/image';
import CreditCard from './creditCard';

const IbanInquiry = ({
  openPaymentModal,
  isLoggedIn,
  navigateToLogin,
}: IInquiriesComponentProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors: formError },
  } = useForm<TIbanCard>({
    resolver: zodResolver(ibanCardSchema),
    defaultValues: {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
    },
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
        className={cn('flex-center basis-3/4')}
      >
        <FlexBetweenCol gap={8} className={cn('w-full')}>
          <div>
            <CreditCard
              variant="iban"
              formError={formError}
              control={control}
            />
            {Object.keys(formError).length > 0 && (
              <p className="text-error-main mt-4 w-full text-xs">
                شماره شبا وارد شده اشتباه است
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
      <div className={cn('grow')}>
        <Image
          src="/svg/Wallet-bro.svg"
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

export default IbanInquiry;
