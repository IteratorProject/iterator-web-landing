"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Keyboard } from 'lucide-react';

const sectionMeta = [
    { id: 'hero', emoji: '🏠', key: 'h' },
    { id: 'story', emoji: '📖', key: 's' },
    { id: 'loop', emoji: '🔄', key: 'l' },
    { id: 'inspiration', emoji: '✨', key: 'i' },
    { id: 'journey', emoji: '🚀', key: 'j' },
    { id: 'contact', emoji: '🤝', key: 'c' }
];

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const sections = [
        { id: 'hero', label: t.nav.home, emoji: '🏠', key: 'h' },
        { id: 'story', label: t.nav.story, emoji: '📖', key: 's' },
        { id: 'loop', label: t.nav.loop, emoji: '🔄', key: 'l' },
        { id: 'inspiration', label: t.nav.inspiration, emoji: '✨', key: 'i' },
        { id: 'journey', label: t.nav.journey, emoji: '🚀', key: 'j' },
        { id: 'contact', label: t.nav.connect, emoji: '🤝', key: 'c' }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.code === 'Space' && !isOpen) {
                e.preventDefault();
                setIsOpen(true);
                return;
            }

            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                return;
            }

            if (isOpen) {
                const section = sections.find(s => s.key === e.key.toLowerCase());
                if (section) {
                    e.preventDefault();
                    scrollToSection(section.id);
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isOpen, t]);

    return (
        <>
            <button
                onClick={toggleMenu}
                className="fixed bottom-32 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-[#181818] text-white border-2 border-[#181818] rounded-full shadow-[4px_4px_0px_0px_rgba(24,24,24,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(24,24,24,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none group"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
                <span className="font-bold uppercase tracking-wider text-sm">
                    {isOpen ? t.nav.close : t.nav.menu}
                </span>

                {!isOpen && (
                    <span className="ml-2 px-2 py-1 bg-[#fbf8f6] text-[#181818] text-xs font-mono rounded border border-white group-hover:bg-[#38b868] group-hover:text-white transition-colors">
                        {t.nav.space}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="fixed bottom-48 right-8 z-40 bg-[#fbf8f6] border-2 border-[#181818] rounded-lg shadow-[8px_8px_0px_0px_rgba(24,24,24,1)] p-4 min-w-[280px] animate-[slideIn_0.3s_ease-out]">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-dashed border-gray-300">
                        <div className="flex items-center gap-2">
                            <Keyboard size={16} className="text-gray-500" />
                            <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                                {t.nav.vimMode}
                            </span>
                        </div>
                        <span className="font-mono text-xs text-gray-400">
                            {t.nav.press} <kbd className="px-1 py-0.5 bg-gray-100 border border-gray-300 rounded text-[10px]">Esc</kbd> {t.nav.toClose}
                        </span>
                    </div>

                    <div className="space-y-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="w-full text-left px-4 py-3 border-2 border-[#181818] rounded hover:bg-[#38b868] hover:text-white transition-colors font-bold flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl group-hover:scale-125 transition-transform">
                                        {section.emoji}
                                    </span>
                                    <span className="uppercase tracking-wide text-sm">
                                        {section.label}
                                    </span>
                                </div>

                                <kbd className="px-2 py-1 bg-[#181818] text-white font-mono text-xs rounded border-2 border-[#181818] group-hover:bg-[#fbf8f6] group-hover:text-[#181818] transition-colors min-w-[28px] text-center">
                                    {section.key}
                                </kbd>
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 pt-3 border-t-2 border-dashed border-gray-300 text-center">
                        <p className="text-xs font-mono text-gray-500">
                            {t.nav.pressAnyKey}
                        </p>
                    </div>
                </div>
            )}

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
                />
            )}
        </>
    );
};
