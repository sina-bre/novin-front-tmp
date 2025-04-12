import { cn } from '@/lib';
import React, { ComponentProps, FC } from 'react';

const HeadLine: FC<ComponentProps<'h2'>> = ({ children, ...rest }) => {
  return (
    <h2
      {...rest}
      className={cn('mb-8 w-full text-center text-sm', rest.className)}
    >
      {children}
    </h2>
  );
};

export default HeadLine;
