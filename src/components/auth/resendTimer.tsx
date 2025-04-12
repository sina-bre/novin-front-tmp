'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

const RESEND_TIME = 90;

export default function ResendTimer({
  onResend,
  isError,
}: {
  onResend: () => void;
  isError: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState(RESEND_TIME);

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }
    if (isError) {
      setTimeLeft(RESEND_TIME);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isError]);

  const handleResend = () => {
    onResend();
    setTimeLeft(RESEND_TIME);
  };

  return (
    <div className={cn('text-end text-sm text-gray-700')}>
      {isError || timeLeft <= 0 ? (
        <button
          onClick={handleResend}
          className="text-primary-main hover:text-secondary-main cursor-pointer"
        >
          ارسال دوباره کد
        </button>
      ) : (
        <>
          زمان باقی مانده {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
          {String(timeLeft % 60).padStart(2, '0')}
        </>
      )}
    </div>
  );
}
