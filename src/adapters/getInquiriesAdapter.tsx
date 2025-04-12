import { TVariantType } from '@/interfaces';
import { IService, IServiceCard } from '@/models/client';
import {
  IRawInquiriesResData,
  IRawInquiryItem,
  TInquiriesKey,
} from '@/models/server';
import { IconProps } from 'node_modules/solar-icon-set/dist/types';
import {
  CardTransfer,
  Glasses,
  CardSend,
  CardRecive,
  CardSearch,
  Card,
  BillCross,
  Health,
  GasStation,
  ClipboardList,
  WheelAngle,
  MenuDots,
  MenuDotsSquare,
  ListCheckMinimalistic,
  Buildings,
  ClipboardCheck,
} from 'solar-icon-set';

const CATEGORY_MAP: Record<
  TInquiriesKey,
  { category: string; variant: TVariantType }
> = {
  '1': { category: 'خدمات بانکی', variant: 'emerald-mint' },
  '2': { category: 'خدمات خودرو', variant: 'sky-bliss' },
  '3': { category: 'خدمات دولت', variant: 'teal-ocean' },
  '4': { category: 'خدمات حقوقی', variant: 'sunset-gold' },
};
const baseIconStyles: IconProps = {
  size: 35,
  iconStyle: 'BoldDuotone',
};
const ICON_MAP: Record<string, JSX.Element> = {
  cards: <Card {...baseIconStyles} />,
  ibans: <CardSearch {...baseIconStyles} />,
  cards_deposit: <CardRecive {...baseIconStyles} />,
  cards_iban: <CardSend {...baseIconStyles} />,
  deposits_iban: <CardTransfer {...baseIconStyles} />,
  returned_check: <BillCross {...baseIconStyles} />,
  validate: <ClipboardCheck {...baseIconStyles} />,
  tpi: <Health {...baseIconStyles} />,
  toll_paid: <GasStation {...baseIconStyles} />,
  traffic_fines: <ClipboardList {...baseIconStyles} />,
  toll: <WheelAngle {...baseIconStyles} />,
  plate: <MenuDotsSquare {...baseIconStyles} />,
  military_service: <ListCheckMinimalistic {...baseIconStyles} />,
  company: <Buildings {...baseIconStyles} />,
};
export const getInquiriesAdapter = (
  data: IRawInquiriesResData,
): IServiceCard[] => {
  return Object.entries<IRawInquiryItem[]>(data).map(([categoryId, items]) => {
    console.log(items);
    const { category, variant } = CATEGORY_MAP[categoryId as TInquiriesKey];
    const services: IService[] = items.map((item): IService => {
      return {
        id: item.id,
        label: item.name,
        icon: ICON_MAP[item.flag] || <Glasses />,
        disabled: item.status !== 'active',
        href: `/services/${item.flag}`,
      };
    });
    return {
      category,
      services,
      variant,
    };
  });
};
