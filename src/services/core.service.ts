import { IGeneralData, ITokenBase } from '@/interfaces';
import { fetcher } from '@/lib';
import { IRawInquiriesResData, IRawInquiryItem } from '@/models/server';

class CoreClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getInquiry({
    inquiry,
  }: {
    inquiry: string;
  }): Promise<IGeneralData<IRawInquiryItem>> {
    const url = `/api/inqueries/${inquiry}`;

    const data = await fetcher<IGeneralData<IRawInquiryItem>>({
      url,
    });

    return data;
  }
  async getInquiries(): Promise<IGeneralData<IRawInquiriesResData>> {
    const url = '/api/inqueries';

    const data = await fetcher<IGeneralData<IRawInquiriesResData>>({
      url,
    });

    return data;
  }
  async getWalletBalance({ token }: ITokenBase): Promise<IGeneralData> {
    const url = '/api/wallet/balance';
    const data = await fetcher({
      url,
      token,
    });

    return data;
  }
}

export const coreClient = new CoreClient(process.env.NEXT_PUBLIC_API_BASE_URL!);
