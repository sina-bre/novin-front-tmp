import { z } from 'zod';

const phoneNumberValidation = z
  .string()
  .min(11, 'شماره تلفن باید حداقل 11 رقم باشد')
  .max(13, 'شماره تلفن باید حداکثر 13 رقم باشد')
  .regex(/^(09\d{9}|\+98\d{10})$/, 'شماره تلفن معتبر نیست');

const passwordValidation = z
  .string()
  .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد');

export const loginMainSchema = z.object({
  phoneNumber: phoneNumberValidation,
  password: passwordValidation,
});

export const phoneNumberSchema = z.object({
  phoneNumber: phoneNumberValidation,
});

export const verifyOtpSchema = z.object({
  code: z
    .string()
    .length(5, 'کد باید 5 رقم باشد')
    .regex(/^\d{5}$/, 'کد باید عددی باشد'),
});

export const createPasswordSchema = z
  .object({
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'رمز عبور وارد شده یکسان نیستند',
    path: ['confirmPassword'],
  });
