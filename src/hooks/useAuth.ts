import {
  TCreatePasswordPayload,
  TLoginMain,
  TLoginPayload,
  TSendOtpForm,
  TSendOtpPayload,
  TVerifyOtpPayload,
} from '@/interfaces';
import { authClient } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (payload: TLoginPayload) => {
      return await authClient.login(payload);
    },
  });
};
export const useSendOtpMutation = () => {
  return useMutation({
    mutationFn: async (payload: TSendOtpPayload) => {
      return await authClient.sendOtp(payload);
    },
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: async (payload: TVerifyOtpPayload) => {
      return await authClient.verifyOtp(payload);
    },
  });
};

export const useCreatePasswordMutation = () => {
  return useMutation({
    mutationFn: async (payload: TCreatePasswordPayload) => {
      return await authClient.createPassword(payload);
    },
  });
};
