import { StepCardProps } from '@/interfaces';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowLeft } from 'solar-icon-set';

const StepCard = ({
  title,
  description,
  link,
  index,
  className,
}: StepCardProps) => {
  return (
    <article className={cn('relative w-full basis-[289px]', className)}>
      <div>
        <span
          className={cn(
            'absolute -top-[75px] right-9',
            'text-custom-gray-500 text-[110px] font-bold',
          )}
          aria-hidden="true"
        >
          {index + 1}
        </span>
      </div>

      <div className="relative z-10 text-lg">
        <h2 className={cn('text-xl font-bold')}>{title}</h2>
        <p className="text-custom-gray-200 mt-4">{description}</p>

        <Link
          href={link.href}
          className="text-primary text-primary-main hover:text-secondary-main mt-4 flex items-center gap-2"
        >
          <p>{link.label}</p>
          <ArrowLeft size={22} />
        </Link>
      </div>
    </article>
  );
};

export default StepCard;
