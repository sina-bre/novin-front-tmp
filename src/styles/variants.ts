import { cva } from 'class-variance-authority';

export const cardWrapper = cva(
  'shadow-main grow basis-1/4 rounded-xl border-2 bg-white px-4 pt-6 pb-10',
  {
    variants: {
      variant: {
        'emerald-mint': 'border-emerald-mint',
        'sky-bliss': 'border-sky-bliss',
        'teal-ocean': 'border-teal-ocean',
        'sunset-gold': 'border-sunset-gold',
      },
    },
  },
);

export const cardTitle = cva('mb-6 text-center text-lg font-semibold', {
  variants: {
    variant: {
      'emerald-mint': 'text-emerald-mint',
      'sky-bliss': 'text-sky-bliss',
      'teal-ocean': 'text-teal-ocean',
      'sunset-gold': 'text-sunset-gold',
    },
  },
});

export const iconWrapper = cva(
  'shadow-main flex h-20 w-20 items-center justify-center rounded-full bg-white transition',
  {
    variants: {
      variant: {
        'emerald-mint': 'hover:shadow-emerald-mint!',
        'sky-bliss': 'hover:shadow-sky-bliss!',
        'teal-ocean': 'hover:shadow-teal-ocean!',
        'sunset-gold': 'hover:shadow-sunset-gold!',
      },
    },
  },
);

export const iconClass = cva('size-30', {
  variants: {
    variant: {
      'emerald-mint': 'text-emerald-mint!',
      'sky-bliss': 'text-sky-bliss!',
      'teal-ocean': 'text-teal-ocean!',
      'sunset-gold': 'text-sunset-gold!',
    },
  },
});
