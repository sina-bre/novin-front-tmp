import { AuthModalContainer, HeadLine } from '@/components';
import { SendOtpForm } from '@/components';
import { TCurrentFormStep } from '@/interfaces';
import { cn } from '@/lib';
import React from 'react';

const Page = ({
  params: { currentFormStep },
}: {
  params: { currentFormStep: TCurrentFormStep };
}) => {
  if (currentFormStep === 'send-otp') {
    return (
      <AuthModalContainer formMode="otp">
        <HeadLine>برای ورود اطلاعات زیر را تکمیل کنید</HeadLine>
        <SendOtpForm navigateTo="/login/send-otp/verify-otp" />
      </AuthModalContainer>
    );
  }

  if (currentFormStep === 'forgot-password') {
    return (
      <AuthModalContainer>
        <HeadLine>برای تغییر رمز اطلاعات زیر را تکمیل کنید</HeadLine>
        <SendOtpForm navigateTo="/login/forgot-password/verify-otp" />
      </AuthModalContainer>
    );
  }

  return null;
};

export default Page;
