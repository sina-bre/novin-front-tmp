'use client';
import { FlexBetween, FlexBetweenCol } from '../ui/flexBox';
import { cn } from '@/lib';
import CustomButton from '../ui/customButton';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { IInquiriesComponentProps, TDigit } from '@/interfaces';
import { digitSchema } from '@/validations';
import TextField from '../ui/textField';
const NationalIdInquiry = ({
  openPaymentModal,
  isLoggedIn,
  navigateToLogin,
}: IInquiriesComponentProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors: formError },
  } = useForm<TDigit>({
    resolver: zodResolver(digitSchema),
    defaultValues: {
      digit: '',
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
        className={cn('flex-center basis-1/2')}
      >
        <FlexBetweenCol gap={8} className={cn('w-full')}>
          <p className={cn('text-primary-main')}>
            شناسه ملی موسسه یا شرکت مورد نظر را در کادر زیر بنویسید
          </p>
          <Controller
            name={'digit'}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                maxLength={16}
                numeric
                placeholder="شناسه ملی شرکت"
                inputClassName={cn('tracking-widest')}
                error={formError.digit?.message}
              />
            )}
          />
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
          src="/svg/Extraction-Amico.svg"
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

export default NationalIdInquiry;
