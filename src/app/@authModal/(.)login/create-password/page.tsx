import { AuthModalContainer } from '@/components';
import CreatePasswordForm from '@/components/auth/createPasswordForm';
import { cn } from '@/lib';

export default function Page() {
  return (
    <AuthModalContainer>
      <h2 className={cn('mb-8 w-full text-center text-sm')}>
        برای تغییر رمز عبور اطلاعات زیر را تکمیل کنید
      </h2>

      <CreatePasswordForm />
    </AuthModalContainer>
  );
}
