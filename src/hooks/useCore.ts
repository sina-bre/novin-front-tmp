import { coreClient } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export const useGetInquiries = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: coreClient.getInquiries,
  });
};
export const useGetInquiry = ({ inquiry }: { inquiry: string }) => {
  return useQuery({
    queryKey: ['inquiry'],
    queryFn: () => {
      return coreClient.getInquiry({ inquiry });
    },
  });
};
export const useGetWalletBalance = () => {
  const { data: session } = useSession();
  console.log('session', session);

  return useQuery({
    queryKey: ['wallet-balance'],
    queryFn: () => {
      return coreClient.getWalletBalance({ token: session?.userToken });
    },
    enabled: !!session?.userToken,
  });
};
