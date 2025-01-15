import { create } from 'zustand'


interface State {
  isFullMenuOpen: boolean;

  openFullMenu: () => void;
  closeFullMenu: () => void;
}

export const useUIStore = create<State>((set) => ({
    isFullMenuOpen: false,
  

    openFullMenu: () => set({ isFullMenuOpen: true }),
    closeFullMenu: () => set({ isFullMenuOpen: false }),
}))