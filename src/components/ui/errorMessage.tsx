import React from 'react';
import { Danger } from 'solar-icon-set';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="text-error-main bg-error-light border-error-main mt-4 flex gap-2 overflow-hidden rounded-lg border p-4 text-sm">
      <div>
        <Danger className="text-error-main!" size={20} iconStyle="Outline" />
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
