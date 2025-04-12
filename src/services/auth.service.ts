import {
  IGeneralData,
  TCreatePasswordPayload,
  TLoginMain,
  TLoginPayload,
  TLoginResponse,
  TLoginResponseData,
  TSendOtpPayload,
  TVerifyOtpPayload,
} from '@/interfaces';
import { fetcher } from '@/lib';
import { signIn, SignInResponse } from 'next-auth/react';

class AuthClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async login({
    mobile,
    password,
  }: TLoginPayload): Promise<SignInResponse | undefined> {
    const res = await signIn('credentials', {
      redirect: false,
      mobile,
      password,
    });
    if (res && res.error) {
      throw new Error(res.error);
    }
    return res;
  }

  async sendOtp(payload: TSendOtpPayload): Promise<IGeneralData> {
    const url = '/api/send-otp';
    const otpData = await fetcher<IGeneralData, TSendOtpPayload>({
      url,
      method: 'POST',
      payload,
    });
    return otpData;
  }

  async verifyOtp(
    payload: TVerifyOtpPayload,
  ): Promise<IGeneralData<TLoginResponseData>> {
    const url = '/api/verify-otp';
    const verifyOtpData = await fetcher<
      IGeneralData<TLoginResponseData>,
      TVerifyOtpPayload
    >({
      url,
      method: 'POST',
      payload,
    });
    return verifyOtpData;
  }

  async createPassword(payload: TCreatePasswordPayload): Promise<IGeneralData> {
    const url = '/api/change-password';
    const changePasswordData = await fetcher<
      IGeneralData,
      TCreatePasswordPayload
    >({
      url,
      method: 'POST',
      payload,
    });
    return changePasswordData;
  }
}

export const authClient = new AuthClient(process.env.NEXT_PUBLIC_API_BASE_URL!);
