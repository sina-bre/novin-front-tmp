import { CustomButton, FlexCenter, FlexCol } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

const content = {
  login: {
    heading: 'حساب کاربری ندارید ؟',
    text: 'برای ثبت نام کلیک کنید',
    href: '/signup',
    button: 'ثبت نام',
  },
  signup: {
    heading: 'دوباره وارد شوید',
    text: 'برای ورود کلیک کنید',
    href: '/login',
    button: 'ورود',
  },
};
const AuthPageToggleForm = ({ formMode }: { formMode: 'signup' | 'login' }) => {
  const { heading, text, href, button } = content[formMode];

  return (
    <FlexCenter className="relative w-1/2 bg-[url(/auth-bg.jpg)] bg-cover text-center">
      <FlexCol gap={4}>
        <h1 className="heading-2 text-secondary-main">{heading}</h1>
        <p className="text-xl text-white">{text}</p>
        <CustomButton variant="secondary" className="mt-4 w-max">
          <Link href={href}>{button}</Link>
        </CustomButton>
      </FlexCol>
    </FlexCenter>
  );
};

export default AuthPageToggleForm;
