"use client";

import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { X } from 'lucide-react';

interface ArticleModalProps {
    title: string;
    body: string;
    image: string;
    onClose: () => void;
}

export const ArticleModal = ({ title, body, image, onClose }: ArticleModalProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#fbf8f6] border-2 border-[#181818] rounded-lg shadow-[12px_12px_0px_0px_rgba(24,24,24,1)] animate-[slideIn_0.3s_ease-out]">
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 border-b-2 border-[#181818] bg-[#fbf8f6]">
                    <h2 className="text-2xl font-black pr-8">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 border-2 border-[#181818] rounded-full hover:bg-[#38b868] hover:text-white transition-colors shrink-0"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6 prose prose-lg max-w-none prose-headings:font-black prose-headings:text-[#181818] prose-p:text-[#484848] prose-p:leading-relaxed prose-a:text-[#38b868] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#181818] prose-code:bg-[#e8e4de] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-pre:bg-[#181818] prose-pre:text-[#e8e4de] prose-pre:border-2 prose-pre:border-[#181818] prose-pre:rounded-lg prose-li:text-[#484848] prose-table:text-sm prose-th:bg-[#e8e4de] prose-th:border-2 prose-th:border-[#181818] prose-td:border-2 prose-td:border-[#181818] prose-img:rounded-lg prose-img:border-2 prose-img:border-[#181818] prose-img:mx-auto">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            img: ({ src, alt }) => {
                                const imgSrc = typeof src === 'string' ? src : '';
                                const webSrc = imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`;
                                return (
                                    <img
                                        src={webSrc}
                                        alt={alt ?? ''}
                                        className="rounded-lg border-2 border-[#181818] mx-auto my-6 max-h-64 w-auto object-contain"
                                    />
                                );
                            },
                        }}
                    >
                        {body}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};
