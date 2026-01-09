import 'server-only';
import type { Locale } from '@/i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also use an import function to lazy load dictionaries
const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    zh: () => import('@/dictionaries/zh.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    const key = locale as keyof typeof dictionaries;
    if (key && dictionaries[key]) {
        return dictionaries[key]();
    }
    return dictionaries.en();
};
