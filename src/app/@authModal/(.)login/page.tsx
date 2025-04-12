import { AuthModalContainer, HeadLine, LoginMainForm } from '@/components';
import { cn } from '@/lib';

export default function Page() {
  return (
    <AuthModalContainer formMode="password" className={cn('')}>
      <HeadLine>برای ورود اطلاعات زیر را تکمیل کنید</HeadLine>

      <LoginMainForm />
    </AuthModalContainer>
  );
}
