"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

export const LanguageToggle = () => {
    const { lang, toggle, t } = useLanguage();

    return (
        <button
            onClick={toggle}
            className="fixed bottom-32 left-8 z-50 flex items-center gap-2 px-4 py-3 bg-[#fbf8f6] text-[#181818] border-2 border-[#181818] rounded-full shadow-[4px_4px_0px_0px_rgba(24,24,24,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(24,24,24,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none group"
            title={lang === 'en' ? 'Switch to Thai' : 'เปลี่ยนเป็นภาษาอังกฤษ'}
        >
            <Languages size={18} className="group-hover:text-[#38b868] transition-colors" />
            <span className="font-bold text-sm uppercase tracking-wider">{t.toggle}</span>
        </button>
    );
};
