"use client";

import React, { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/useThemeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, _hasHydrated } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // Hydrating store on mount
  useEffect(() => {
    useThemeStore.persist.rehydrate();
    setMounted(true);
  }, []);

  // Applying theme when hydrated or changed
  useEffect(() => {
    if (_hasHydrated && theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, _hasHydrated]);

  // Show nothing until hydrated to prevent flash
  if (!mounted || !_hasHydrated) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
};