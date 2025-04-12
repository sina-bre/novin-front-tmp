import {
  AuthPageContainer,
  CustomButton,
  FlexCenter,
  FlexCol,
  HeadLine,
  LoginMainForm,
} from '@/components';
import AuthModalHeader from '@/components/auth/modal/authModalHeader';
import AuthPageToggleForm from '@/components/auth/page/authPageToggleForm';
import { cn } from '@/lib';

const page = () => {
  return (
    <FlexCenter className={cn('bg-primary-main h-screen')}>
      <AuthPageContainer>
        <AuthPageToggleForm formMode="login" />
        <FlexCol className="w-1/2 px-14 py-8">
          <AuthModalHeader formMode={'password'} />
          <HeadLine> برای ورود اطلاعات زیر را تکمیل کنید</HeadLine>
          <LoginMainForm />
        </FlexCol>
      </AuthPageContainer>
    </FlexCenter>
  );
};

export default page;
