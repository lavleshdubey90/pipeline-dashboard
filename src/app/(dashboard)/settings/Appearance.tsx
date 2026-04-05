"use client";

import {
  Check,
  Gamepad2,
  Moon,
  Snowflake,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";
import type React from "react";
import { THEMES, type ThemeId } from "@/constants";
import { useThemeStore } from "@/store/useThemeStore";

const themeIcons: Record<ThemeId, React.ReactNode> = {
  "hirehub-dark": <Moon className="size-4 sm:size-5" />,
  "hirehub-light": <Sun className="size-4 sm:size-5" />,
  cyberpunk: <Zap className="size-4 sm:size-5" />,
  glacier: <Snowflake className="size-4 sm:size-5" />,
  arcade: <Gamepad2 className="size-4 sm:size-5" />,
  "neon-noir": <Sparkles className="size-4 sm:size-5" />,
};

const Appearance: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="space-y-6">
      <div className="bg-base-200 rounded-box p-4 sm:p-6">
        <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-primary rounded-full" />
          Themes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-3">
          {THEMES.map((t) => {
            const isActive = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`group relative p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-200 text-left ${
                  isActive
                    ? "bg-primary/10 shadow-sm ring-2 ring-primary"
                    : "bg-base-100 border border-base-300 hover:bg-base-100/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-primary text-primary-content"
                        : "bg-base-300/50 text-base-content/70"
                    }`}
                  >
                    {themeIcons[t.id]}
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <span
                      className={`block text-sm font-medium truncate ${isActive ? "text-base-content" : "text-base-content/80"}`}
                    >
                      {t.label}
                    </span>
                    {isActive && (
                      <span className="text-xs text-primary font-medium">
                        Active
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <Check className="shrink-0 size-4 text-primary mt-1" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-base-200 rounded-box p-4 sm:p-6">
        <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-secondary rounded-full" />
          Accent Color
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "primary",
            "secondary",
            "accent",
            "success",
            "warning",
            "error",
          ].map((color) => (
            <button
              key={color}
              className={`size-9 sm:size-10 rounded-full bg-${color} transition-transform hover:scale-110 active:scale-95`}
              title={color}
              aria-label={`Select ${color} accent`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appearance;
