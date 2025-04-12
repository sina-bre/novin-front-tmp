import { create } from 'zustand';

type ModalType = 'sidebar' | 'payment-method' | 'custom-modal' | null;

interface ModalState {
  openModal: ModalType;
  setOpenModal: (modal: ModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  openModal: null,
  setOpenModal: (modal) => set({ openModal: modal }),
  closeModal: () => set({ openModal: null }),
}));
