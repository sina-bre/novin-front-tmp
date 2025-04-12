'use client';
import TextField from '../ui/textField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { phoneNumberSchema } from '@/validations';
import { cn } from '@/lib';
import CustomButton from '../ui/customButton';
import { useRouter } from 'next/navigation';
import { TSendOtpForm, TSendOtpPayload } from '@/interfaces';
import { useSendOtpMutation } from '@/hooks';
import ErrorMessage from '../ui/errorMessage';
import { useAppStore } from '@/store/general';

const SendOtpForm = ({ navigateTo }: { navigateTo: string }) => {
  const storePhoneNumber = useAppStore((state) => state.setPhoneNumber);
  const router = useRouter();
  const {
    isPending: isSending,
    mutate: sendOtpFn,
    error: sendOtpError,
  } = useSendOtpMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TSendOtpForm>({
    resolver: zodResolver(phoneNumberSchema),
  });

  const onSubmit = (data: TSendOtpForm) => {
    const payload: Readonly<TSendOtpPayload> = {
      mobile: data.phoneNumber,
    };
    sendOtpFn(payload, {
      onSuccess: () => {
        storePhoneNumber(data.phoneNumber);
        router.push(navigateTo);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('mb-4 w-full')}>
      <fieldset>
        <TextField
          {...register('phoneNumber')}
          placeholder="شماره تلفن همراه"
          numeric
          className="mb-4"
          autoFocus
          maxLength={13}
          inputClassName="shadow-main dir-ltr text-end"
          value={watch('phoneNumber')}
          error={errors.phoneNumber?.message}
        />
      </fieldset>
      {sendOtpError && <ErrorMessage message={sendOtpError.message} />}
      <CustomButton type="submit" className="mt-12 w-max" isLoading={isSending}>
        ورود
      </CustomButton>
    </form>
  );
};

export default SendOtpForm;
