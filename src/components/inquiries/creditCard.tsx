'use client';
import { ChangeEvent, FC, KeyboardEvent, useRef } from 'react';
import TextField from '../ui/textField';
import { TCreditCard, TIbanCard } from '@/interfaces';
import { FlexBetween, FlexBetweenCol } from '../ui/flexBox';
import { Controller } from 'react-hook-form';
import { cn } from '@/lib';
import Image from 'next/image';
import { Buildings2, Card2 } from 'solar-icon-set';

interface CreditCardProps {
  formError: any;
  control: any;
  variant: 'credit' | 'iban';
}

const fieldNamesCredit: (keyof TCreditCard)[] = [
  'input1',
  'input2',
  'input3',
  'input4',
];

const fieldNamesIban: (keyof TIbanCard)[] = [
  'input1',
  'input2',
  'input3',
  'input4',
  'input5',
  'input6',
];

const CreditCard: FC<CreditCardProps> = ({ formError, control, variant }) => {
  const isIban = variant === 'iban';
  const fieldNames = isIban ? fieldNamesIban : fieldNamesCredit;

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (value.length === 4 && index < fieldNames.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === 'Backspace' && !value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <FlexBetweenCol
      className={cn('shadow-main w-full rounded-lg bg-white py-6')}
    >
      <header
        className={cn(
          'mb-24 flex h-10 w-full items-center justify-between overflow-hidden bg-gray-200 px-8',
        )}
      >
        <FlexBetween gap={2}>
          <Buildings2
            size={25}
            iconStyle="BoldDuotone"
            className="text-primary-main!"
          />
          {/* <Image
            src="/bsiLogo.png"
            width={35}
            height={35}
            alt="Bank Logo"
          /> */}
          <h3 className={cn('text-primary-main')}>بانک</h3>
        </FlexBetween>
        <Card2 iconStyle="BoldDuotone" size={30} className="text-gray-500!" />
      </header>

      <FlexBetween className={cn('mb-4 flex-row-reverse gap-4 px-8')}>
        {isIban && <p className={cn('text-lg')}>IR</p>}
        {fieldNames.map((name, index) => (
          <Controller
            key={index}
            name={name as string}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleChange(e as ChangeEvent<HTMLInputElement>, index);
                }}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                onKeyDown={(e) => handleBackspace(e, index)}
                maxLength={4}
                numeric
                inputClassName={cn('dir-rtl text-center text-xl p-0')}
                error={!!formError[name]}
              />
            )}
          />
        ))}
      </FlexBetween>
    </FlexBetweenCol>
  );
};

export default CreditCard;
