"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();
    const year = new Date().getFullYear();
    const text = t.footer.replace('{year}', String(year));

    return (
        <footer className="py-12 text-center font-mono text-sm text-[#787878]">
            <p>{text}</p>
        </footer>
    );
};
