'use client';
import React, { useTransition } from 'react';
import TextField from '../ui/textField';
import { TCreatePassword, TCreatePasswordPayload } from '@/interfaces';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPasswordSchema } from '@/validations';
import { cn } from '@/lib';
import CustomButton from '../ui/customButton';
import { useRouter } from 'next/navigation';
import { useCreatePasswordMutation } from '@/hooks';
import ErrorMessage from '../ui/errorMessage';
import { useAppStore } from '@/store/general';

const CreatePasswordForm = () => {
  const { previousPath } = useAppStore();
  const router = useRouter();
  const {
    isPending: isSending,
    mutate: createPasswordFn,
    error: createPasswordError,
  } = useCreatePasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TCreatePassword>({
    resolver: zodResolver(createPasswordSchema),
  });
  const onSubmit = (data: TCreatePassword) => {
    const payload: Readonly<TCreatePasswordPayload> = {
      new_password: data.password,
      new_password_confirmation: data.confirmPassword,
    };
    createPasswordFn(payload, {
      onSuccess: () => {
        router.push(previousPath ?? '/dashboard');
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('mb-4 w-full')}>
      <fieldset>
        <TextField
          {...register('password')}
          placeholder="رمز عبور"
          type="password"
          inputClassName="shadow-main"
          className={cn('mb-4')}
          value={watch('password')}
          error={errors.password?.message}
        />
      </fieldset>
      <fieldset>
        <TextField
          {...register('confirmPassword')}
          placeholder="تکرار رمز عبور"
          type="password"
          inputClassName="shadow-main"
          value={watch('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
      </fieldset>
      {createPasswordError && (
        <ErrorMessage message={createPasswordError.message} />
      )}
      <CustomButton
        type="submit"
        className={cn('mt-12 w-max')}
        isLoading={isSending}
      >
        ورود
      </CustomButton>
    </form>
  );
};

CreatePasswordForm.Skeleton = function Skeleton() {
  return (
    <form className={cn('mb-4 w-full')}>
      <fieldset>
        <div
          className={cn('mb-4 h-10 w-full animate-pulse rounded bg-gray-200')}
        ></div>
      </fieldset>
      <fieldset>
        <div
          className={cn('h-10 w-full animate-pulse rounded bg-gray-200')}
        ></div>
      </fieldset>
      <div className={cn('mt-12 w-max')}>
        <div
          className={cn('h-10 w-24 animate-pulse rounded bg-gray-200')}
        ></div>
      </div>
    </form>
  );
};

export default CreatePasswordForm;
