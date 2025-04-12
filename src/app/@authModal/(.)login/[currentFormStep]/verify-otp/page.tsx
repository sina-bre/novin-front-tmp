import { AuthModalContainer, HeadLine } from '@/components';
import VerifySendOtpForm from '@/components/auth/verifyOtpForm';
import { TCurrentFormStep } from '@/interfaces';

export default async function page({
  params,
}: {
  params: { currentFormStep: TCurrentFormStep };
}) {
  const navigateMap: Record<TCurrentFormStep, string> = {
    'send-otp': '/dashboard',
    'forgot-password': '/login/create-password',
  };

  return (
    <AuthModalContainer formMode="otp">
      <HeadLine>برای ورود اطلاعات زیر را تکمیل کنید</HeadLine>
      <VerifySendOtpForm navigateTo={navigateMap[params.currentFormStep]} />
    </AuthModalContainer>
  );
}
