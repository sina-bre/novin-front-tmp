import {
  loginMainSchema,
  verifyOtpSchema,
  phoneNumberSchema,
  createPasswordSchema,
} from '@/validations';
import { SignInResponse } from 'next-auth/react';
import { ComponentProps } from 'react';
import { z } from 'zod';

// Schema-based types
export type TLoginMain = z.infer<typeof loginMainSchema>;
export type TSendOtpForm = z.infer<typeof phoneNumberSchema>;
export type TVerifyOtp = z.infer<typeof verifyOtpSchema>;
export type TCreatePassword = z.infer<typeof createPasswordSchema>;

// Component-related types
export type TFormMode = 'otp' | 'password';
export type TAuthModalContainer = {
  formMode?: TFormMode;
  className?: string;
} & ComponentProps<'div'>;
export type TCurrentFormStep = 'send-otp' | 'forgot-password';
// API response types
export type TLoginResponse = SignInResponse | undefined;
export type TLoginResponseData = {
  _id: string;
  token: string;
};

// Payload types
export type TLoginPayload = {
  mobile: string;
  password: string;
};
export type TSendOtpPayload = {
  mobile: string;
};
export type TVerifyOtpPayload = {
  mobile: string;
  otp: string;
};
export type TCreatePasswordPayload = {
  old_password?: string;
  new_password: string;
  new_password_confirmation: string;
};
