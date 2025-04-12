import React from 'react';
import Link from 'next/link';
import { headerMenuItems } from '@/constants';
import { cn } from '@/lib';

const HeaderNavigation = () => {
  return (
    <nav className="">
      <ul className="flex gap-12">
        {headerMenuItems.map((item, index) => (
          <li
            key={index}
            className={cn(
              'hover:text-secondary-main hover:border-secondary-main cursor-pointer border-b border-transparent pb-2 text-white transition-colors',
            )}
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
