import React from 'react';
import { FlexCenter } from './flexBox';
import { cn } from '@/lib';
import { Unread } from 'solar-icon-set';

const CheckBox = ({ isChecked }: { isChecked: boolean }) => {
  return (
    <FlexCenter
      className={cn(
        'border-primary-main h-5 w-5 break-before-avoid-page overflow-hidden rounded border',
        isChecked && 'bg-primary-main',
      )}
    >
      {isChecked && <Unread size={30} className={cn('text-white!')} />}
    </FlexCenter>
  );
};

export default CheckBox;
