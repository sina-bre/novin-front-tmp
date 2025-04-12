import { cn } from '@/lib';
import React from 'react';
import { CheckBox, FlexBetween, FlexCenter } from './ui';
import { CheckCircle, Unread } from 'solar-icon-set';

interface PaymentMethodToggleProps {
  isSelected: boolean;
  setSelected: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const PaymentMethodToggle: React.FC<PaymentMethodToggleProps> = ({
  isSelected,
  setSelected,
  children,
  icon,
}) => {
  return (
    <FlexBetween
      gap={4}
      onClick={setSelected}
      className={cn(
        'shadow-main cursor-pointer rounded-xl border border-transparent p-4',
        isSelected && 'border-primary-main shadow-primary-main!',
      )}
    >
      <div className={cn('flex grow gap-2')}>
        <div className={cn('')}>{icon}</div>
        {children}
      </div>
      <CheckBox isChecked={isSelected} />
    </FlexBetween>
  );
};

export default PaymentMethodToggle;
