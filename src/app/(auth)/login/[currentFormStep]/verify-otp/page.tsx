import { AuthPageContainer, FlexCenter, FlexCol, HeadLine } from '@/components';
import AuthModalHeader from '@/components/auth/modal/authModalHeader';
import AuthPageToggleForm from '@/components/auth/page/authPageToggleForm';
import VerifySendOtpForm from '@/components/auth/verifyOtpForm';
import { TCurrentFormStep } from '@/interfaces';
import { cn } from '@/lib';

export default function page({
  params,
}: {
  params: { currentFormStep: TCurrentFormStep };
}) {
  const navigateMap: Record<TCurrentFormStep, string> = {
    'send-otp': '/dashboard',
    'forgot-password': '/login/create-password',
  };

  return (
    <FlexCenter className={cn('bg-primary-main h-screen')}>
      <AuthPageContainer>
        <AuthPageToggleForm formMode="login" />
        <FlexCol className="w-1/2 px-14 py-8">
          <AuthModalHeader formMode={'otp'} />
          <HeadLine> برای ورود اطلاعات زیر را تکمیل کنید</HeadLine>
          <VerifySendOtpForm navigateTo={navigateMap[params.currentFormStep]} />
        </FlexCol>
      </AuthPageContainer>
    </FlexCenter>
  );
}
