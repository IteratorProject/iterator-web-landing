"use client";

import React, { useRef, useEffect } from 'react';
import { CodeReveal } from './CodeReveal';
import { useLanguage } from '../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JOURNEY_CODE = `
const milestones = [
  {
    year: "Late 2025",
    title: "The Spark",
    description: "The ideas for The Iterator Project began to take shape. A vision to build something meaningful started here.",
    tags: ["Planning", "Ideas"]
  },
  {
    year: "2026",
    title: "Full Launch",
    description: "The first product is ready. The Iterator Project goes live. This is just the beginning.",
    tags: ["Launch", "Product"]
  },
  {
    year: "...",
    title: "Coming Soon",
    description: "The journey continues. More iterations, more learning, more building.",
    tags: ["Future", "Stay Tuned"]
  }
];
`;

export const TheJourney = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const milestones = t.journey.milestones.map((m, i) => ({
        ...m,
        side: i % 2 === 0 ? 'left' as const : 'right' as const
    }));

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (progressRef.current) {
                gsap.fromTo(progressRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 60%",
                            end: "bottom 40%",
                            scrub: 0.5,
                        }
                    }
                );
            }

            const dots = gsap.utils.toArray('.timeline-dot');
            dots.forEach((dot: any, index) => {
                gsap.fromTo(dot,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: dot,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                gsap.to(dot, {
                    boxShadow: "0 0 0 8px rgba(56, 184, 104, 0.3)",
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5,
                    ease: "sine.inOut",
                    delay: index * 0.2
                });
            });

            const cards = gsap.utils.toArray('.journey-card');
            cards.forEach((card: any, index) => {
                const isLeft = index % 2 === 0;
                gsap.fromTo(card,
                    {
                        x: isLeft ? -50 : 50,
                        opacity: 0
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            const connectors = gsap.utils.toArray('.timeline-connector');
            connectors.forEach((connector: any) => {
                gsap.fromTo(connector,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: connector,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <CodeReveal codeString={JOURNEY_CODE} className="w-full bg-[#fbf8f6] relative overflow-hidden" title="TheJourney">
            <section ref={containerRef} className="py-24 px-4 max-w-5xl mx-auto relative">

                <h2 className="text-5xl font-black text-center mb-24 relative z-10">
                    {t.journey.heading.split(' ')[0]}{' '}
                    <span className="bg-[#38b868] px-2 transform -skew-x-12 inline-block text-white">{t.journey.heading.split(' ').slice(1).join(' ') || t.journey.heading}</span>
                </h2>

                <div className="absolute left-1/2 top-[180px] bottom-[100px] w-1 -translate-x-1/2 hidden md:block z-0">
                    <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                    <div
                        ref={progressRef}
                        className="absolute inset-0 bg-[#181818] rounded-full origin-top"
                        style={{ transformOrigin: 'top' }}
                    ></div>
                </div>

                <div className="space-y-16 md:space-y-24 relative z-10">
                    {milestones.map((item, index) => (
                        <div key={index}
                            className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''
                                }`}>

                            <div className="md:hidden text-4xl font-black">{item.year}</div>

                            <div className={`journey-card bg-[#fbf8f6] border-2 border-[#181818] p-6 w-full md:w-[42%] relative shadow-[8px_8px_0px_0px_rgba(24,24,24,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(24,24,24,1)] transition-all`}>
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/50 rotate-2"></div>

                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono font-bold text-xl hidden md:block">{item.year}</span>
                                    <div className="flex gap-2 flex-wrap justify-end">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-xs border border-[#181818] px-2 py-0.5 rounded-full font-mono bg-[#fbf8f6]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                                <p className="text-[#787878] font-mono text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className={`timeline-connector hidden md:block w-[6%] h-0.5 bg-[#181818] ${item.side === 'left' ? 'origin-left' : 'origin-right'}`}></div>

                            <div className="timeline-dot hidden md:flex w-6 h-6 bg-[#38b868] border-4 border-[#181818] rounded-full items-center justify-center z-10 flex-shrink-0">
                                <div className="w-2 h-2 bg-[#fbf8f6] rounded-full"></div>
                            </div>

                            <div className="hidden md:block w-[42%]"></div>
                        </div>
                    ))}
                </div>
            </section>
        </CodeReveal>
    );
};
