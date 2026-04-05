export type ThemeId = 'hirehub-dark' | 'hirehub-light' | 'cyberpunk' | 'glacier' | 'arcade' | 'neon-noir';

interface Theme {
    id: ThemeId;
    label: string;
}

export const THEMES: Theme[] = [
    { id: 'hirehub-dark', label: 'HireHub Dark' },
    { id: 'hirehub-light', label: 'HireHub Light' },
    { id: 'cyberpunk', label: 'Cyberpunk' },
    { id: 'glacier', label: 'Glacier' },
    { id: 'arcade', label: 'Arcade' },
    { id: 'neon-noir', label: 'Neon Noir' },
];

export type { Theme };