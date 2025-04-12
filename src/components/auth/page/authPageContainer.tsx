import { FlexCol } from '@/components/ui/flexBox';
import { cn } from '@/lib';
import React, { FC, HTMLAttributes } from 'react';

interface AuthPageContainerProps extends HTMLAttributes<HTMLDivElement> {}

const AuthPageContainer: FC<AuthPageContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <FlexCol
      {...props}
      className={cn(
        'min-h-[600px] w-[1200px] overflow-hidden rounded-xl bg-white p-2',
        className,
      )}
    >
      <div className={cn('flex grow overflow-hidden rounded-lg bg-gray-100')}>
        {children}
      </div>
    </FlexCol>
  );
};

export default AuthPageContainer;
