import {
  AuthModalHeader,
  AuthPageContainer,
  FlexCenter,
  FlexCol,
  HeadLine,
} from '@/components';
import AuthPageToggleForm from '@/components/auth/page/authPageToggleForm';
import VerifySendOtpForm from '@/components/auth/verifyOtpForm';
import { cn } from '@/lib';

const page = () => {
  return (
    <FlexCenter className={cn('bg-primary-main h-screen')}>
      <AuthPageContainer>
        <FlexCol className="w-1/2 px-14 py-8">
          <AuthModalHeader />
          <HeadLine>برای ثبت نام اطلاعات زیر را تکمیل کنید </HeadLine>
          <VerifySendOtpForm />
        </FlexCol>
        <AuthPageToggleForm formMode="signup" />
      </AuthPageContainer>
    </FlexCenter>
  );
};

export default page;
