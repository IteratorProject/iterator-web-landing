"use client";

import React, { useRef, useEffect, useState } from 'react';
import { CodeReveal } from './CodeReveal';
import { ArticleModal } from './ArticleModal';
import { useLanguage } from '../context/LanguageContext';
import type { ArticleData } from '../lib/articles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const THE_LOOP_CODE = `
export const TheLoop = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black mb-12 relative inline-block">
        THE LOOP
        <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#38b868] -z-10 transform -rotate-1"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};
`;

const ArticleCard = ({ article, onClick }: { article: ArticleData; onClick: () => void }) => {
    const imgSrc = `/${article.image}`;
    const { t } = useLanguage();

    return (
        <div
            onClick={onClick}
            className="break-inside-avoid group relative bg-[#fbf8f6] border-2 border-[#181818] rounded-lg shadow-[4px_4px_0px_0px_rgba(24,24,24,1)] hover:shadow-[8px_8px_0px_0px_rgba(24,24,24,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
        >
            <div className="relative h-40 overflow-hidden bg-[#e8e4de]">
                <img
                    src={imgSrc}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-mono text-white/80 uppercase tracking-wider bg-black/40 px-2 py-1 rounded">{t.loop.article}</span>
                </div>
            </div>

            <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-lg leading-tight group-hover:underline decoration-2 underline-offset-2 decoration-[#38b868]">
                    {article.title}
                </h3>

                <p className="mt-2 text-sm text-[#787878] font-mono leading-snug line-clamp-2 flex-1">
                    {article.description}
                </p>

                <div className="mt-3 flex items-center gap-3 text-xs font-mono text-[#787878]">
                    <span className="flex items-center gap-1"><Calendar size={12} />{article.date}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                    {article.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono border border-[#181818] px-2 py-1 rounded-full uppercase tracking-wider hover:bg-[#38b868] hover:text-white transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-3 pt-3 border-t border-[#181818]/20">
                    <span className="text-xs font-mono text-[#38b868] font-bold uppercase tracking-wider group-hover:underline">
                        {t.loop.readFull}
                    </span>
                </div>
            </div>
        </div>
    );
};

export const LoopWrapper = ({ articles }: { articles: ArticleData[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
    const { t, lang } = useLanguage();
    const filteredArticles = articles.filter(a => a.lang === lang);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.loop-card');

            gsap.from(cards, {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <CodeReveal codeString={THE_LOOP_CODE} className="w-full bg-[#fbf8f6] py-20 border-t-2 border-[#181818]" title="TheLoop">
                <section ref={containerRef} className="px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-5xl md:text-7xl font-black relative inline-block z-10">
                            {t.loop.heading}
                            <svg className="absolute -bottom-4 left-0 w-full h-6 -z-10 text-[#38b868]" viewBox="0 0 200 20" preserveAspectRatio="none">
                                <path d="M0,10 Q100,20 200,5" stroke="currentColor" strokeWidth="15" fill="none" />
                            </svg>
                        </h2>
                        <p className="mt-4 font-mono text-[#787878]">{t.loop.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article) => (
                            <div key={article.id} className="loop-card">
                                <ArticleCard
                                    article={article}
                                    onClick={() => setSelectedArticle(article)}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </CodeReveal>

            {selectedArticle && (
                <ArticleModal
                    title={selectedArticle.title}
                    body={selectedArticle.body}
                    image={selectedArticle.image}
                    onClose={() => setSelectedArticle(null)}
                />
            )}
        </>
    );
};
