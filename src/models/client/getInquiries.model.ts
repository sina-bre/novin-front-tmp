import { TVariantType } from '@/interfaces';

export interface IService {
  id: number;
  label: string;
  icon: JSX.Element;
  disabled: boolean;
  href: string;
}

export interface IServiceCard {
  category: string;
  services: IService[];
  variant: TVariantType;
}
