"use client";

import React, { useState } from 'react';
import { CodeReveal } from './CodeReveal';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const INSPIRATION_CODE = `
export const TheInspiration = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % inspirationData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + inspirationData.length) % inspirationData.length);
  };

  return (
    <section>
      <h2>MY INSPIRATION</h2>
      {inspirationData.map((item, index) => (
        <div key={item.id}>
          <img src={\`https://img.youtube.com/vi/\${item.videoId}/maxresdefault.jpg\`} />
          <blockquote>{item.quote}</blockquote>
          <cite>{item.author}</cite>
        </div>
      ))}
    </section>
  );
};
`;

const VideoCard = ({ item, isActive }: { item: { videoId: string; quote: string; author: string }; isActive: boolean }) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`;
    const videoUrl = `https://www.youtube.com/watch?v=${item.videoId}`;

    return (
        <div
            className={`
                relative bg-[#fbf8f6] border-2 border-[#181818] rounded-lg transition-all duration-500 ease-in-out overflow-hidden
                ${isActive
                    ? 'w-[400px] md:w-[500px] shadow-[8px_8px_0px_0px_rgba(24,24,24,1)] scale-100 opacity-100 z-20'
                    : 'w-[200px] md:w-[250px] shadow-none scale-90 opacity-75 grayscale-[0.5] z-10'
                }
            `}
        >
            <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
            >
                <img
                    src={thumbnailUrl}
                    alt={`Video thumbnail`}
                    className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </a>

            <div className={`transition-all duration-300 overflow-hidden ${isActive ? 'opacity-100 max-h-[300px] p-6' : 'opacity-0 max-h-0 p-0'}`}>
                <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-[#38b868] opacity-50" size={32} />
                    <blockquote className="font-serif italic text-lg text-[#181818] leading-relaxed pl-6">
                        &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <cite className="block mt-4 text-right font-mono text-sm text-[#787878] not-italic">
                        &mdash; {item.author}
                    </cite>
                </div>
            </div>
        </div>
    );
};

export const TheInspiration = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useLanguage();
    const items = t.inspiration.items.map((item, i) => ({
        videoId: ['53iujxhGRsE', 'tsTeEkzO9xc', 'jvqFAi7vkBc', 'DA3mOTcFCIc'][i] || '',
        quote: item.quote,
        author: item.author,
    }));

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const getVisibleIndices = () => {
        const prevIndex = (activeIndex - 1 + items.length) % items.length;
        const nextIndex = (activeIndex + 1) % items.length;
        return [prevIndex, activeIndex, nextIndex];
    };

    const visibleIndices = getVisibleIndices();

    return (
        <CodeReveal codeString={INSPIRATION_CODE} className="w-full bg-[#fbf8f6] py-20 border-t-2 border-[#181818]" title="TheInspiration">
            <section className="px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="mb-12 text-center">
                    <h2 className="text-5xl md:text-7xl font-black relative inline-block z-10">
                        {t.inspiration.heading}
                        <svg className="absolute -bottom-4 left-0 w-full h-6 -z-10 text-[#38b868]" viewBox="0 0 200 20" preserveAspectRatio="none">
                            <path d="M0,10 Q100,20 200,5" stroke="currentColor" strokeWidth="15" fill="none" />
                        </svg>
                    </h2>
                    <p className="mt-4 font-mono text-[#787878]">{t.inspiration.subtitle}</p>
                </div>

                <div className="relative flex items-center justify-center gap-4 md:gap-12 min-h-[500px]">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:left-4 z-30 p-3 bg-[#fbf8f6] border-2 border-[#181818] rounded-full hover:bg-[#38b868] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(24,24,24,1)] active:translate-y-1 active:shadow-none"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    {visibleIndices.map((index, i) => {
                        const isCenter = i === 1;
                        return (
                            <div
                                key={`${index}-${i}`}
                                onClick={() => {
                                    if (i === 0) prevSlide();
                                    if (i === 2) nextSlide();
                                }}
                                className={`cursor-pointer ${isCenter ? 'cursor-default' : ''}`}
                            >
                                <VideoCard item={items[index]} isActive={isCenter} />
                            </div>
                        );
                    })}

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:right-4 z-30 p-3 bg-[#fbf8f6] border-2 border-[#181818] rounded-full hover:bg-[#38b868] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(24,24,24,1)] active:translate-y-1 active:shadow-none"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-3 h-3 rounded-full border border-[#181818] transition-all ${idx === activeIndex ? 'bg-[#181818] w-8' : 'bg-transparent hover:bg-[#38b868]'
                                }`}
                        />
                    ))}
                </div>

            </section>
        </CodeReveal>
    );
};
