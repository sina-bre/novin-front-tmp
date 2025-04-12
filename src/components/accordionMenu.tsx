'use client';

import { ReactNode, useState } from 'react';
import { cn } from '@/lib';
import { AltArrowDown, AltArrowLeft, MentionSquare } from 'solar-icon-set';
import Link from 'next/link';

interface AccordionMenuitem {
  label: string;
  href: string;
}

interface AccordionMenuProps {
  title: string;
  icon?: ReactNode;
  items: AccordionMenuitem[];
  className?: string;
}

const AccordionMenu = ({
  title,
  icon,
  items,
  className,
}: AccordionMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className={cn('flex flex-col', className)}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn('flex cursor-pointer items-center gap-4')}
      >
        <div className="flex items-center justify-center">
          {icon || (
            <MentionSquare
              size={35}
              className={cn('text-primary-main!')}
              iconStyle="BoldDuotone"
            />
          )}
        </div>
        <div className={cn('flex gap-0.5')}>
          <h2
            className={cn(
              'text-primary-main flex items-center justify-center text-xl font-bold',
            )}
          >
            {title}
          </h2>
          {isOpen ? (
            <AltArrowDown
              size={35}
              className={cn(
                'text-primary-main! flex items-center justify-center',
              )}
              iconStyle="BoldDuotone"
            />
          ) : (
            <AltArrowLeft
              size={35}
              className={cn('text-primary-main!')}
              iconStyle="BoldDuotone"
            />
          )}
        </div>

        <div className={cn('flex cursor-pointer gap-0.5')}></div>
      </div>
      {isOpen && (
        <ul
          className={cn('ms-18 mt-4 flex w-full flex-col justify-center gap-6')}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                'text-custom-gray-600 hover:text-secondary-main text-lg',
              )}
            >
              <Link title={item.label} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default AccordionMenu;
