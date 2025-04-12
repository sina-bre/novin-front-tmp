import { cn } from '@/lib';
import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'div'> {
  gap?: number;
}

export const FlexCenter: FC<Props> = ({ children, gap, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn('flex-center', gap && `gap-${gap}`, rest.className)}
    >
      {children}
    </div>
  );
};

export const FlexBetween: FC<Props> = ({ children, gap, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn('flex-between', gap && `gap-${gap}`, rest.className)}
    >
      {children}
    </div>
  );
};

export const FlexCol: FC<Props> = ({ children, gap, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn('flex-column', gap && `gap-${gap}`, rest.className)}
    >
      {children}
    </div>
  );
};

export const FlexCenterCol: FC<Props> = ({ children, gap, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn('flex-center-col', gap && `gap-${gap}`, rest.className)}
    >
      {children}
    </div>
  );
};

export const FlexBetweenCol: FC<Props> = ({ children, gap, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn('flex-between-col', gap && `gap-${gap}`, rest.className)}
    >
      {children}
    </div>
  );
};
