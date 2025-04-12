'use client';
import TextField from '../ui/textField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { verifyOtpSchema } from '@/validations';
import { cn } from '@/lib';
import CustomButton from '../ui/customButton';
import { useRouter } from 'next/navigation';
import { TSendOtpPayload, TVerifyOtp, TVerifyOtpPayload } from '@/interfaces';
import ResendTimer from './resendTimer';
import { useAppStore } from '@/store/general';
import { useSendOtpMutation, useVerifyOtpMutation } from '@/hooks';
import ErrorMessage from '../ui/errorMessage';
import { FlexCenter } from '../ui/flexBox';

const VerifySendOtpForm = ({ navigateTo }: { navigateTo?: string }) => {
  const { phoneNumber: storedPhoneNumber, previousPath } = useAppStore();
  const router = useRouter();
  const {
    isPending: isVerifying,
    mutate: verifyOtpFn,
    error: verifyOtpError,
  } = useVerifyOtpMutation();
  const {
    mutate: sendOtpFn,
    error: sendOtpError,
    isError: isSendOtpError,
  } = useSendOtpMutation();

  const isError: Error | null = sendOtpError ?? verifyOtpError;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TVerifyOtp>({
    resolver: zodResolver(verifyOtpSchema),
  });

  const onSubmit = (data: TVerifyOtp) => {
    const payload: Readonly<TVerifyOtpPayload> = {
      mobile: storedPhoneNumber,
      otp: data.code,
    };
    verifyOtpFn(payload, {
      onSuccess: () => {
        if (navigateTo) {
          router.push(navigateTo);
          return;
        }
        router.push(previousPath ?? '/dashboard');
      },
    });
  };

  const handleResendOtpCode = () => {
    const payload: Readonly<TSendOtpPayload> = {
      mobile: storedPhoneNumber,
    };
    sendOtpFn(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('mb-4 w-full')}>
      <FlexCenter className={cn('mb-4 gap-2 text-sm')}>
        <p>شماره همراه فعلی</p>
        <p>{storedPhoneNumber}</p>
      </FlexCenter>
      <fieldset>
        <TextField
          {...register('code')}
          placeholder="کد ارسالی"
          numeric
          className="mb-2"
          autoFocus
          maxLength={5}
          value={watch('code')}
          inputClassName="shadow-main"
          error={errors.code?.message}
        />
        <ResendTimer onResend={handleResendOtpCode} isError={isSendOtpError} />
      </fieldset>
      {isError && <ErrorMessage message={isError.message} />}
      <CustomButton
        type="submit"
        className="mt-12 w-max"
        isLoading={isVerifying}
      >
        ورود
      </CustomButton>
    </form>
  );
};

export default VerifySendOtpForm;
