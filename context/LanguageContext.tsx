"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Translations } from '../locales/types';
import en from '../locales/en';
import th from '../locales/th';

type Language = 'en' | 'th';

interface LanguageContextValue {
    lang: Language;
    t: Translations;
    toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<Language>('en');

    const toggle = useCallback(() => {
        setLang(prev => (prev === 'en' ? 'th' : 'en'));
    }, []);

    const t = lang === 'en' ? en : th;

    return (
        <LanguageContext.Provider value={{ lang, t, toggle }}>
            {children}
        </LanguageContext.Provider>
    );
};

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
