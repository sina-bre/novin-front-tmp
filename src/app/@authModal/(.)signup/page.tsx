import { AuthModalContainer, HeadLine, SendOtpForm } from '@/components';
import { cn } from '@/lib';

export default function Page() {
  return (
    <AuthModalContainer>
      <HeadLine>برای ثبت نام اطلاعات زیر را تکمیل کنید </HeadLine>
      <SendOtpForm navigateTo="/signup/verify-otp" />
    </AuthModalContainer>
  );
}
