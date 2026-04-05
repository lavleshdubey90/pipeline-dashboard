import { create } from 'zustand';
import { THEMES } from '@/constants';

export type Theme = typeof THEMES[number]['id'];

interface ThemeStore {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: 'hirehub-dark',
    setTheme: (newTheme: Theme) => set({ theme: newTheme }),
}));
