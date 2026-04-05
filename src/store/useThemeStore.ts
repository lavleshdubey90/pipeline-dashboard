import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { ThemeId } from "@/constants";

interface ThemeStore {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  _hasHydrated: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "hirehub-dark",
      setTheme: (newTheme: ThemeId) => set({ theme: newTheme }),
      _hasHydrated: false,
      setHasHydrated: (hasHydrated: boolean) =>
        set({ _hasHydrated: hasHydrated }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
      skipHydration: true,
    },
  ),
);

export type { ThemeId };
