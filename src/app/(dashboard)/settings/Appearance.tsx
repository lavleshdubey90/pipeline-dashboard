"use client";

import { THEMES } from '@/constants';
import { useThemeStore } from '@/store/useThemeStore';
import React from 'react';
import { Moon, Sun, Zap, Snowflake, Gamepad2, Sparkles, Check } from 'lucide-react';

const themeIcons: Record<string, React.ReactNode> = {
    'hirehub-dark': <Moon className="size-5 sm:size-6" />,
    'hirehub-light': <Sun className="size-5 sm:size-6" />,
    'cyberpunk': <Zap className="size-5 sm:size-6" />,
    'glacier': <Snowflake className="size-5 sm:size-6" />,
    'arcade': <Gamepad2 className="size-5 sm:size-6" />,
    'neon-noir': <Sparkles className="size-5 sm:size-6" />,
};

const themePreviews: Record<string, string> = {
    'hirehub-dark': 'bg-neutral text-neutral-content',
    'hirehub-light': 'bg-base-100 text-base-content border-2 border-base-300',
    'cyberpunk': 'bg-primary text-primary-content',
    'glacier': 'bg-primary/80 text-primary-content',
    'arcade': 'bg-secondary text-secondary-content',
    'neon-noir': 'bg-accent text-accent-content',
};

const Appearance: React.FC = () => {
    const { theme, setTheme } = useThemeStore();

    return (
        <div className="space-y-4">
            <div className="bg-base-200 rounded-box p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-primary rounded-full"></span>
                    Theme
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
                    {THEMES.map((t) => {
                        const isActive = theme === t.id;
                        return (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id)}
                                className={`group relative p-2 sm:p-3 rounded-box border-2 cursor-pointer transition-all h-24 sm:h-28 ${
                                    isActive
                                        ? 'border-primary bg-primary/10'
                                        : 'border-base-300 hover:border-primary/50 hover:bg-base-100'
                                }`}
                            >
                                {/* Checkbox at top right */}
                                <div className={`absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-all ${
                                    isActive
                                        ? 'border-primary bg-primary text-primary-content'
                                        : 'border-base-300 bg-base-100'
                                }`}>
                                    {isActive && <Check className="size-3" />}
                                </div>

                                <div className="flex flex-col items-center justify-center gap-2 h-full">
                                    {/* Theme Preview Circle */}
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md ${themePreviews[t.id]}`}>
                                        {themeIcons[t.id]}
                                    </div>
                                    <span className="font-medium text-xs sm:text-sm">{t.label}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="bg-base-200 rounded-box p-4 sm:p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-secondary rounded-full"></span>
                    Accent Color
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {['primary', 'secondary', 'accent', 'success', 'warning', 'error'].map((color) => (
                        <button
                            key={color}
                            className={`shrink-0 size-8 sm:size-10 rounded-full bg-${color} hover:scale-105 transition-transform`}
                            title={color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Appearance;
