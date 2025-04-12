'use client';
import { cn } from '@/lib';
import React, { FC, PropsWithChildren } from 'react';
import { TAuthModalContainer } from '@/interfaces/auth.interfaces';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { useAppStore } from '@/store/general';
import { useRouter } from 'next/navigation';
import AuthModalHeader from './authModalHeader';
import { FlexCenter } from '@/components/ui/flexBox';

interface IAuthModalContainer
  extends FC<PropsWithChildren<TAuthModalContainer>> {
  Skeleton: FC<PropsWithChildren>;
}

const AuthModalContainer: IAuthModalContainer = ({
  children,
  formMode,
  ...props
}) => {
  const { previousPath } = useAppStore();
  const router = useRouter();

  useLockBodyScroll();
  const handleClose = () => {
    const confirmClose = window.confirm(
      'آیا می‌خواهید عملیات را متوقف کنید و فرم را ببندید؟',
    );
    if (confirmClose) {
      router.push(previousPath || '/');
    }
  };

  return (
    <FlexCenter
      {...props}
      onClick={handleClose}
      className={cn('fixed inset-0 z-50 bg-black/25', props.className)}
    >
      <div
        className={cn(
          'bg-surface flex min-h-max w-full max-w-md flex-col rounded-lg p-8 shadow-lg',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <AuthModalHeader formMode={formMode} handleClose={handleClose} />
        {children}
      </div>
    </FlexCenter>
  );
};

AuthModalContainer.Skeleton = ({ children }) => (
  <FlexCenter className={cn('fixed inset-0 z-20 bg-black/25')}>
    <div
      className={cn(
        'bg-surface flex min-h-[500px] w-full max-w-md animate-pulse flex-col rounded-lg p-8 shadow-lg',
      )}
    >
      <AuthModalHeader.Skeleton /> {children}
    </div>
  </FlexCenter>
);

export default AuthModalContainer;
