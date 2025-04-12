import { AuthModalContainer, HeadLine } from '@/components';
import VerifySendOtpForm from '@/components/auth/verifyOtpForm';

export default async function page() {
  return (
    <AuthModalContainer formMode="otp">
      <HeadLine>برای ورود اطلاعات زیر را تکمیل کنید</HeadLine>
      <VerifySendOtpForm />
    </AuthModalContainer>
  );
}
