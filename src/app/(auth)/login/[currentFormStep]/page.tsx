import { AuthPageContainer, FlexCenter, FlexCol, HeadLine } from '@/components';
import { SendOtpForm } from '@/components';
import AuthModalHeader from '@/components/auth/modal/authModalHeader';
import AuthPageToggleForm from '@/components/auth/page/authPageToggleForm';
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
      <FlexCenter className={cn('bg-primary-main h-screen')}>
        <AuthPageContainer>
          <AuthPageToggleForm formMode="login" />
          <FlexCol className="w-1/2 px-14 py-8">
            <AuthModalHeader formMode={'otp'} />
            <HeadLine> برای ورود اطلاعات زیر را تکمیل کنید</HeadLine>
            <SendOtpForm navigateTo="/login/send-otp/verify-otp" />
          </FlexCol>
        </AuthPageContainer>
      </FlexCenter>
    );
  }

  if (currentFormStep === 'forgot-password') {
    return (
      <FlexCenter className={cn('bg-primary-main h-screen')}>
        <AuthPageContainer>
          <AuthPageToggleForm formMode="login" />
          <FlexCol className="w-1/2 px-14 py-8">
            <AuthModalHeader />
            <HeadLine>برای تغییر رمز اطلاعات زیر را تکمیل کنید</HeadLine>
            <SendOtpForm navigateTo="/login/forgot-password/verify-otp" />
          </FlexCol>
        </AuthPageContainer>
      </FlexCenter>
    );
  }

  return null;
};

export default Page;
