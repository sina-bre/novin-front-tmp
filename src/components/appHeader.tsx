'use client';
import { cn } from '@/lib';
import SplitButton from './splitButton';
import Sidebar from './sideBar';
import { useModalStore } from '@/store/modalStore';
import { memo } from 'react';
import HeaderNavigation from './headerNavigation';
import { FlexBetween } from './ui/flexBox';
import Logo from './logo';

const AppHeader = () => {
  const { openModal, closeModal, setOpenModal } = useModalStore();
  const isSideBarOpen = openModal === 'sidebar';
  const handleOpenSideBar = () => {
    setOpenModal('sidebar');
  };
  return (
    <header
      className={cn('flex items-center justify-between overflow-hidden py-10')}
    >
      <FlexBetween onClick={handleOpenSideBar}>
        <Logo width={70} height={70} />
        <h1 className="heading-4 text-white">سامانه استعلام نوین</h1>
      </FlexBetween>
      <HeaderNavigation />
      <SplitButton />
      {isSideBarOpen && <Sidebar isOpen={isSideBarOpen} onClose={closeModal} />}
    </header>
  );
};

export default memo(AppHeader);
