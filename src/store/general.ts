import { create } from 'zustand';

interface IGeneralStore {
  previousPath: string | null;
  setPreviousPath: (path: string | null) => void;
  phoneNumber: string;
  setPhoneNumber: (number: string) => void;
}

export const useAppStore = create<IGeneralStore>((set) => ({
  previousPath: '/',
  setPreviousPath: (path) => set({ previousPath: path }),
  phoneNumber: '',
  setPhoneNumber: (number) => set({ phoneNumber: number }),
}));
