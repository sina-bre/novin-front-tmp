'use client';
import { useState, forwardRef, ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { RoundAltArrowDown, RoundAltArrowUp } from 'solar-icon-set';
import { cva, VariantProps } from 'class-variance-authority';

type AccordionContentProps = {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
};

export interface AccordionProps
  extends ComponentProps<'article'>,
    VariantProps<typeof accordionVariants> {
  title: string;
  items?: ReactNode[];
  children?: ReactNode;
  defaultOpen?: boolean;
}
const accordionVariants = cva('rounded-t-2xl px-[24px] py-[12px] shadow', {
  variants: {
    open: {
      true: 'bg-primary-main border-2 border-transparent text-white',
      false: 'border-primary-main rounded-b-2xl border-2',
    },
  },
  defaultVariants: {
    open: false,
  },
});

const accordionContentVariants = cva(
  'shadow-main overflow-hidden rounded-b-2xl',
  {
    variants: {
      open: {
        true: 'max-h-[1000px]',
        false: 'max-h-0',
      },
    },
    defaultVariants: {
      open: false,
    },
  },
);
const AccordionContent = ({
  isOpen,
  children,
  className,
}: AccordionContentProps) => (
  <div className={cn(accordionContentVariants({ open: isOpen }), className)}>
    <div className="p-4 pt-2">{children}</div>
  </div>
);

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      title,
      items,
      children,
      defaultOpen = false,
      open: openVariant,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div>
        <article
          ref={ref}
          className={cn(accordionVariants({ open: isOpen }), openVariant)}
          {...props}
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={cn('flex cursor-pointer items-center justify-between')}
          >
            <h2>{title}</h2>
            {isOpen ? (
              <RoundAltArrowUp iconStyle="Outline" size={30} />
            ) : (
              <RoundAltArrowDown
                iconStyle="Outline"
                className="text-primary-main!"
                size={30}
              />
            )}
          </div>
        </article>
        <AccordionContent
          isOpen={isOpen}
          className={cn('text-custom-black-100 my-[8px] bg-white text-sm')}
        >
          {items ? (
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            children
          )}
        </AccordionContent>
      </div>
    );
  },
);

Accordion.displayName = 'Accordion';

export default Accordion;
