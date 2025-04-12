import { Record } from 'solar-icon-set';

export interface IRawInquiryItem {
  id: number;
  name: string;
  image: string | null;
  price_provider: string;
  price_user: string;
  status: string;
  description: string;
  created_by: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  flag: string;
  category_id: number;
}

export interface IRawPaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}
export type TInquiriesKey = '1' | '2' | '3' | '4';

export interface IRawInquiriesResData
  extends Record<TInquiriesKey, IRawInquiryItem[]> {}
