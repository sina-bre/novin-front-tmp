'use client';
import { useEffect, useState, ElementType } from 'react';
import Portal from './globalPortal';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { cn } from '@/lib';
import { IBaseModalProps } from '@/interfaces';
import { CloseCircle, Banknote2 } from 'solar-icon-set';
import { FlexBetween } from './ui';
import AccordionMenu from './accordionMenu';
import { menuSections } from '@/constants';

const Sidebar = ({ isOpen, onClose }: IBaseModalProps) => {
  const [visible, setVisible] = useState(false);
  useLockBodyScroll();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const closeSidebar = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <Portal>
      <div
        className={cn(
          'fixed inset-0 z-40 ms-auto transition-all duration-300',
          visible
            ? 'visible w-[calc(100%-400px)] bg-black/30'
            : 'invisible w-full bg-black/0',
        )}
        onClick={closeSidebar}
      />
      <div
        className={cn(
          'p- fixed top-0 right-0 z-50 h-full w-[400px] overflow-auto border-l border-white/18 bg-white p-8 backdrop-blur-md transition-transform duration-300',
          visible ? 'translate-x-0' : 'translate-x-full',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={'flex flex-col items-center justify-center gap-8'}>
          <FlexBetween className={'w-full'}>
            <h1 className={cn('text-primary-main text-2xl font-bold')}>
              خدمات سامانه نوین
            </h1>
            <button
              className={cn('flex cursor-pointer items-center justify-center')}
              onClick={closeSidebar}
            >
              <CloseCircle size={44} className={cn('text-primary-main!')} />
            </button>
          </FlexBetween>

          <hr className={cn('border-primary-main w-full border-t-2')} />
        </header>

        <div className={cn('flex flex-col gap-6')}>
          {menuSections.map((section, index) => (
            <AccordionMenu
              key={`${section.title}-${index}`}
              className={cn(section.className)}
              icon={section.icon}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </Portal>
  );
};

export default Sidebar;
