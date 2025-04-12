'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import TextField from '../ui/textField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { cn } from '@/lib';
import CustomButton from '../ui/customButton';
import { TLoginMain, TLoginPayload } from '@/interfaces';
import { loginMainSchema } from '@/validations';
import { useLoginMutation } from '@/hooks/useAuth';
import ErrorMessage from '../ui/errorMessage';
import { useAppStore } from '@/store/general';

const LoginMainForm = () => {
  const router = useRouter();
  const { previousPath } = useAppStore();
  const {
    isPending: isLogging,
    mutate: loginFn,
    error: loginError,
  } = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors: formError },
    watch,
  } = useForm<TLoginMain>({
    resolver: zodResolver(loginMainSchema),
  });

  const onSubmit = (loginData: TLoginMain) => {
    const payload: TLoginPayload = {
      mobile: loginData.phoneNumber,
      password: loginData.password,
    };
    loginFn(payload, {
      onSuccess: () => {
        router.push(previousPath ?? '/dashboard');
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
          inputClassName="dir-ltr text-end shadow-main"
          autoFocus
          maxLength={13}
          value={watch('phoneNumber')}
          error={formError.phoneNumber?.message}
        />
      </fieldset>

      <fieldset>
        <TextField
          {...register('password')}
          placeholder="رمزعبور"
          type="password"
          value={watch('password')}
          error={formError.password?.message}
          className="mb-2"
          inputClassName="shadow-main"
        />
        <p className={cn('text-primary-main text-end text-sm')}>
          <Link href={'/login/forgot-password'}>
            رمز عبور خود را فراموش کردید؟
          </Link>
        </p>
      </fieldset>
      {loginError && <ErrorMessage message={loginError.message} />}
      <CustomButton type="submit" className="mt-12 w-max" isLoading={isLogging}>
        تایید
      </CustomButton>
    </form>
  );
};

export default LoginMainForm;
