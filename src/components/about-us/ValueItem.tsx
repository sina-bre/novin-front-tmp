import { cn } from '@/lib';
import { ReactNode } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const ValueCard = ({ title, description, icon, className }: ValueCardProps) => {
  return (
    <article className={cn('flex items-center gap-5', className)}>
      {icon}
      <div className={cn('flex flex-col gap-2')}>
        <h2 className={cn('text-primary-main font-bold')}>{title}</h2>
        <p className={cn('text-custom-gray-200 text-sm')}>{description}</p>
      </div>
    </article>
  );
};

export default ValueCard;
