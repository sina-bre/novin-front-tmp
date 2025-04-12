'use client';
import { cn } from '@/lib';
import { useAppStore } from '@/store/general';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const SplitButton = () => {
  const pathname = usePathname();
  const { setPreviousPath } = useAppStore();
  const handleLinkClick = () => {
    if (pathname) {
      setPreviousPath(pathname);
    }
  };

  return (
    <div
      className={cn(
        'h-max w-max overflow-hidden rounded-xl border border-white text-white',
      )}
    >
      <Link href="/login" onClick={handleLinkClick}>
        <button
          className={cn(
            'hover:text-secondary-main cursor-pointer border-l border-l-white p-1 px-4 transition-colors',
          )}
        >
          ورود
        </button>
      </Link>
      <Link href="/signup" onClick={handleLinkClick}>
        <button
          className={cn(
            'hover:text-secondary-main cursor-pointer p-1 px-4 transition-colors',
          )}
        >
          ثبت نام
        </button>
      </Link>
    </div>
  );
};

export default SplitButton;
