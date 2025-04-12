import { ComponentProps } from 'react';

export interface IAppContainer extends ComponentProps<'div'> {}
export interface IGeneralData<T = undefined> {
  success: boolean;
  message: string;
  data?: T;
}
export interface IBaseLink {
  label: string;
  href: string;
}
export interface StepCardProps {
  title: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  index: number;
  className?: string;
}
export interface IBaseVoidProps {
  [key: string]: () => void;
}
export interface IBaseIsLoggedInProps {
  isLoggedIn: boolean;
}
export interface IBaseNavigateToLoggedInProps {
  navigateToLogin: () => void;
}
export interface IBaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface ITokenBase {
  token: string;
}
export interface IInquiriesComponentProps
  extends IBaseIsLoggedInProps,
    IBaseNavigateToLoggedInProps {
  openPaymentModal: () => void;
}
