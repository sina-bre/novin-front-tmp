import { IBaseLink, MakeOptional, StepCardProps } from '@/interfaces';
import { cn } from '@/lib';
import { ElementType, ReactNode } from 'react';
import {
  Banknote2,
  Bus,
  DiplomaVerified,
  Mailbox,
  CardSearch,
  ClockCircle,
  MapPointWave,
  Phone,
  Plain,
  Layers,
  UsersGroupRounded,
  Hourglass,
} from 'solar-icon-set';
import Image01 from '@public/image01.jpg';
import Image02 from '@public/image02.jpg';
import Image03 from '@public/image03.jpg';
import { StaticImageData } from 'next/image';

export type HeaderMenuItem = Readonly<{
  label: string;
  href: string;
}>;

export type QuickAccessServiceNavigationItem = Readonly<{
  label: string;
  key:
    | 'ibanInquiry'
    | 'cardToIban'
    | 'bouncedCheckInquiry'
    | 'militaryServiceInquiry'
    | 'nationalIdInquiry';
}>;
export interface FaqItem {
  id: string;
  title: string;
  content: string;
}

export interface IBaseIconLabel {
  label: string;
  icon?: ReactNode;
  href?: string;
}

export interface FooterLinkSection {
  title: string;
  items: IBaseIconLabel[];
}

export const headerMenuItems: IBaseLink[] = [
  { label: 'خدمات', href: '/#' },
  { label: 'تاریخچه استعلام', href: '/#' },
  { label: 'نسخه شرکتی', href: '/#' },
  { label: 'درباره ما', href: '/#' },
];

export const headerFeatures: string[] = [
  'کیفیت بالا',
  'کارمزد مناسب',
  'پشتیبانی 24 ساعته',
];

interface MenuItem {
  href: string;
  label: string;
}
interface MenuSection {
  title: string;
  icon: ReactNode;
  className?: string;
  items: MenuItem[];
}

interface ValueItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TeamMember {
  image: StaticImageData;
  name: string;
  role: string;
}

export const quickAccessServicesNavigation: QuickAccessServiceNavigationItem[] =
  [
    { label: 'استعلام شبا', key: 'ibanInquiry' },
    { label: 'تبدیل کارت به شبا', key: 'cardToIban' },
    { label: 'استعلام چک برگشتی', key: 'bouncedCheckInquiry' },
    { label: 'استعلام نظام وظیفه', key: 'militaryServiceInquiry' },
    { label: 'استعلام شناسه ملی', key: 'nationalIdInquiry' },
  ];

export const quickLinks: IBaseLink[] = [
  { label: 'درباره ما', href: '#' },
  { label: 'نسخه شرکتی', href: '#' },
  { label: 'تاریخچه استعلام', href: '#' },
  { label: 'کیف پول', href: '#' },
  { label: 'ورود و ثبت نام', href: '#' },
];

export const categories: IBaseLink[] = [
  { label: 'خدمات بانکی', href: '#' },
  { label: 'خدمات خودرو', href: '#' },
  { label: 'خدمات دولتی', href: '#' },
  { label: 'خدمات حقوقی', href: '#' },
];

export const footerLinks: FooterLinkSection[] = [
  {
    title: 'تماس با ما',
    items: [
      {
        label: '+989151564276',
        icon: (
          <Phone
            iconStyle="Outline"
            size={24}
            className={cn('text-secondary-main!')}
          />
        ),
      },
      {
        label: 'میدان جانباز، مجتمع یار، طبقه ۷',
        icon: (
          <MapPointWave
            iconStyle="Outline"
            size={24}
            className={cn('text-secondary-main!')}
          />
        ),
      },
      {
        label: 'شنبه تا پنجشنبه، از ساعت ۹ الی ۱۷',
        icon: (
          <ClockCircle
            iconStyle="Outline"
            size={24}
            className={cn('text-secondary-main!')}
          />
        ),
      },
      {
        label: 't.me/arashnksdesign',
        icon: (
          <Plain
            iconStyle="Outline"
            size={24}
            className={cn('text-secondary-main!')}
          />
        ),
        href: '#',
      },
    ],
  },
  {
    title: 'لینک های سریع',
    items: [
      { label: 'درباره ما', href: '#' },
      { label: 'نسخه شرکتی', href: '#' },
      { label: 'تاریخچه استعلام', href: '#' },
      { label: 'کیف پول', href: '#' },
      { label: 'ورود و ثبت نام', href: '#' },
    ],
  },
  {
    title: 'دسته بندی ها',
    items: [
      { label: 'خدمات بانکی', href: '#' },
      { label: 'خدمات خودرو', href: '#' },
      { label: 'خدمات دولتی', href: '#' },
      { label: 'خدمات حقوقی', href: '#' },
    ],
  },
];
export const steps: Omit<StepCardProps, 'index'>[] = [
  {
    title: 'ثبت نام یا ورود به سایت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
    link: {
      href: '#',
      label: 'اطلاعات بیشتر',
    },
  },
  {
    title: 'انتخاب از دسته بندی ها',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
    link: {
      href: '#',
      label: 'اطلاعات بیشتر',
    },
  },
  {
    title: 'پرداخت و دیدن نتایج ',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
    link: {
      href: '#',
      label: 'اطلاعات بیشتر',
    },
  },
];
export const coreServicesData = [
  {
    title: 'خدمات بانکی',
    variant: 'green',
    services: [
      {
        title: 'استعلام شبا',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
      },
      {
        title: 'حساب به شبا',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
      },
      {
        title: 'استعلام کارت',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
      },
      {
        title: 'کارت به شبا',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
      },
      {
        title: 'کارت به حساب',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
      },
      {
        title: 'چک برگشتی',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
      },
      {
        title: 'اعتبار سنجی',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
    ],
  },
  {
    title: 'خدمات خودرو',
    variant: 'blue',
    services: [
      {
        title: 'بیمه ثالث',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'پرداخت عوارض',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'خلافی',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'استعلام عوارض',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'استعلام پلاک',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'نمره منفی',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'استعلام کارت',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
    ],
  },
  {
    title: 'خدمات دولت',
    variant: 'red',
    services: [
      {
        title: 'استعلام نظام وظیفه',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
      },
      {
        title: 'استعلام کدپستی',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
      },
      {
        title: 'استعلام ثنا',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'وضعیت گذرنامه',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'استعلام ممنوع الخروجی',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
    ],
  },
  {
    title: 'خدمات حقوقی',
    variant: 'yellow',
    services: [
      {
        title: 'استعلام اطلاعات شرکت',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
      },
      {
        title: 'استعلام اعضا',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'استعلام روزنامه رسمی',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
      {
        title: 'استعلام صاحبین اعضا',
        icon: <CardSearch size={35} iconStyle="BoldDuotone" />,
        disabled: true,
      },
    ],
  },
];
export const FaqItems: FaqItem[] = [
  {
    id: '1',
    title: 'هزینه ها به چه صورت هستند؟',
    content:
      'محتوای دوره از همان ابتدا در اختیار تمام کارآموزان قرار می‌گیرد ولی برای گذراندن هر مرحله، برنامه‌ای فشرده داریم و معمولاً کارآموزان با سرعتی که ما پیش‌بینی می‌کنیم دوره را می‌گذرانند. البته برای عزیزانی که زودتر از موعد مقرر به هدف یک مرحله برسند، محتوای جانبی و امتیازی قرار داده‌ایم تا مطمئن شویم تمام کارآموزان تی که ما پیش‌بینی می‌کنیم دوره را می‌گذرانند.',
  },
  {
    id: '2',
    title: 'هزینه ها به چه صورت هستند؟',
    content:
      'محتوای دوره از همان ابتدا در اختیار تمام کارآموزان قرار می‌گیرد ولی برای گذراندن هر مرحله، برنامه‌ای فشرده داریم و معمولاً کارآموزان با سرعتی که ما پیش‌بینی می‌کنیم دوره را می‌گذرانند. البته برای عزیزانی که زودتر از موعد مقرر به هدف یک مرحله برسند،',
  },
  {
    id: '3',
    title: 'هزینه ها به چه صورت هستند؟',
    content:
      'محتوای دوره از همان ابتدا در اختیار تمام کارآموزان قرار می‌گیرد ولی برای گذراندن هر مرحله، برنامه‌ای فشرده داریم و معمولاً کارآموزان با سرعتی که ما پیش‌بینی می‌کنیم دوره را می‌گذرانند. البته برای عزیزانی که زودتر از موعد مقرر به هدف یک مرحله برسند،',
  },
  {
    id: '4',
    title: 'هزینه ها به چه صورت هستند؟',
    content:
      'محتوای دوره از همان ابتدا در اختیار تمام کارآموزان قرار می‌گیرد ولی برای گذراندن هر مرحله، برنامه‌ای فشرده داریم و معمولاً کارآموزان با سرعتی که ما پیش‌بینی می‌کنیم دوره را می‌گذرانند. البته برای عزیزانی که زودتر از موعد مقرر به هدف یک مرحله برسند،',
  },
];

export const menuSections: MenuSection[] = [
  {
    title: 'خدمات بانکی',
    icon: (
      <Banknote2
        iconStyle="BoldDuotone"
        size={35}
        className={cn('text-primary-main!')}
      />
    ),
    className: 'mt-12',
    items: [
      { href: '#', label: 'استعلام شبا' },
      { href: '#', label: 'استعلام کارت ' },
      { href: '#', label: 'تبدیل حساب به شبا' },
      { href: '#', label: ' تبدیل کارت به حساب' },
      { href: '#', label: 'تبدیل کارت به شبا' },
      { href: '#', label: 'تعداد چک برگشتی' },
      { href: '#', label: 'اعتبار سنجی' },
    ],
  },
  {
    title: 'خدمات خودرو',
    icon: (
      <Bus
        iconStyle="BoldDuotone"
        size={35}
        className={cn('text-primary-main!')}
      />
    ),
    items: [
      { href: '#', label: 'استعلام شبا' },
      { href: '#', label: 'استعلام کارت ' },
      { href: '#', label: 'تبدیل حساب به شبا' },
      { href: '#', label: ' تبدیل کارت به حساب' },
      { href: '#', label: 'تبدیل کارت به شبا' },
      { href: '#', label: 'تعداد چک برگشتی' },
      { href: '#', label: 'اعتبار سنجی' },
    ],
  },
  {
    title: 'خدمات دولت',
    icon: (
      <DiplomaVerified
        iconStyle="BoldDuotone"
        size={35}
        className={cn('text-primary-main!')}
      />
    ),
    items: [
      { href: '#', label: 'استعلام شبا' },
      { href: '#', label: 'استعلام کارت ' },
      { href: '#', label: 'تبدیل حساب به شبا' },
      { href: '#', label: ' تبدیل کارت به حساب' },
      { href: '#', label: 'تبدیل کارت به شبا' },
      { href: '#', label: 'تعداد چک برگشتی' },
      { href: '#', label: 'اعتبار سنجی' },
    ],
  },
  {
    title: 'خدمات حقوقی',
    icon: (
      <Mailbox
        iconStyle="BoldDuotone"
        size={35}
        className={cn('text-primary-main!')}
      />
    ),
    items: [
      { href: '#', label: 'استعلام شبا' },
      { href: '#', label: 'استعلام کارت ' },
      { href: '#', label: 'تبدیل حساب به شبا' },
      { href: '#', label: ' تبدیل کارت به حساب' },
      { href: '#', label: 'تبدیل کارت به شبا' },
      { href: '#', label: 'تعداد چک برگشتی' },
      { href: '#', label: 'اعتبار سنجی' },
    ],
  },
];

export const values: ValueItem[] = [
  {
    title: 'ارزش های ما لورم',
    description:
      'ارزش های ما لورم اپسیونلورم ایپسوم متن ساختگی ب ا لورم ایپسوم متن ساختگی با تولید',
    icon: (
      <Layers
        iconStyle="Outline"
        size={60}
        className={cn('text-main-light!')}
      />
    ),
  },
  {
    title: 'ارزش های ما لورم',
    description:
      'ارزش های ما لورم اپسیونلورم ایپسوم متن ساختگی ب ا لورم ایپسوم متن ساختگی با تولید',
    icon: (
      <UsersGroupRounded
        iconStyle="Outline"
        size={60}
        className={cn('text-main-light!')}
      />
    ),
  },
  {
    title: 'ارزش های ما لورم',
    description:
      'ارزش های ما لورم اپسیونلورم ایپسوم متن ساختگی ب ا لورم ایپسوم متن ساختگی با تولید',
    icon: (
      <Hourglass
        iconStyle="Outline"
        size={60}
        className={cn('text-main-light!')}
      />
    ),
  },
];

export const teamMembers: TeamMember[] = [
  {
    image: Image01,
    name: 'آرش نیکسیر',
    role: 'طراح و دیزاینر UIUX ، لیسانس کامپیوتر گرایش هوش مصنوعی',
  },
  {
    image: Image02,
    name: 'لیام پاک نیا',
    role: 'طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی',
  },
  {
    image: Image03,
    name: 'سینا برادران',
    role: 'طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی',
  },
  {
    image: Image01,
    name: 'آرش نیکسیر',
    role: 'طراح و دیزاینر UIUX ، لیسانس کامپیوتر گرایش هوش مصنوعی',
  },
  {
    image: Image02,
    name: 'لیام پاک نیا',
    role: 'طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی',
  },
  {
    image: Image03,
    name: 'سینا برادران',
    role: 'طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی',
  },
];
