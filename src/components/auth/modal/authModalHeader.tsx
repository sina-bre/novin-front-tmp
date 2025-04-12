import Link from 'next/link';
import { CloseCircle } from 'solar-icon-set';
import Logo from '../../logo';
import { cn } from '@/lib';
import { TFormMode } from '@/interfaces/auth.interfaces';
import { FlexBetween, FlexCenter } from '@/components/ui/flexBox';

const AuthModalHeader = ({
  formMode,
  handleClose,
}: {
  formMode?: TFormMode;
  handleClose?: () => void;
}) => {
  const switchModeLink = (formMode: TFormMode) => {
    switch (formMode) {
      case 'otp':
        return <Link href={'/login'}>ورود با رمز عبور</Link>;
      case 'password':
        return <Link href={'/login/send-otp'}>ورود با رمز یکبار مصرف</Link>;
    }
  };

  return (
    <div>
      <FlexBetween>
        {!!handleClose && (
          <CloseCircle
            className="text-primary-main! cursor-pointer"
            size={20}
            onClick={handleClose}
          />
        )}
        {formMode && (
          <p className={cn('text-primary-main mr-auto text-end text-sm')}>
            {switchModeLink(formMode)}
          </p>
        )}
      </FlexBetween>
      <FlexCenter className={cn('mb-2')}>
        <Logo />
      </FlexCenter>
      <h1 className={cn('text-primary-main heading-4 mb-4 text-center')}>
        سامانه گنجینه‌ی نوین ایرانیان
      </h1>
    </div>
  );
};
AuthModalHeader.Skeleton = () => (
  <div>
    <FlexBetween>
      {/* آیکون بستن فیک */}
      <div className="h-5 w-5 rounded-full bg-gray-300"></div>
      {/* لینک تغییر حالت ورود فیک */}
      <div className="h-4 w-24 rounded bg-gray-300"></div>
    </FlexBetween>
    <FlexCenter className="mb-2">
      {/* لوگوی فیک */}
      <div className="h-12 w-32 rounded bg-gray-300"></div>
    </FlexCenter>
    <h1 className="heading-4 mb-4 text-center">
      {/* عنوان فیک */}
      <div className="mx-auto h-6 w-3/4 rounded bg-gray-300"></div>
    </h1>
  </div>
);

export default AuthModalHeader;
