import { AuthPageContainer, FlexCenter, FlexCol, HeadLine } from '@/components';
import CreatePasswordForm from '@/components/auth/createPasswordForm';
import AuthModalHeader from '@/components/auth/modal/authModalHeader';
import { cn } from '@/lib';
import React from 'react';

const page = () => {
  return (
    <FlexCenter className={cn('bg-primary-main h-screen')}>
      <AuthPageContainer>
        <div className="w-1/2">انیمیشن</div>
        <FlexCol className="w-1/2 bg-amber-200 px-14 py-8">
          <AuthModalHeader />
          <HeadLine>برای تغییر رمز عبور اطلاعات زیر را تکمیل کنید </HeadLine>
          <CreatePasswordForm />
        </FlexCol>
      </AuthPageContainer>
    </FlexCenter>
  );
};

export default page;
