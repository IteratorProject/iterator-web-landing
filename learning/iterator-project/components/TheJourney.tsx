"use client";

import React, { useRef, useEffect } from 'react';
import { CodeReveal } from './CodeReveal';
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

const milestones = [
    {
        year: "Late 2025",
        title: "The Spark",
        description: "The ideas for The Iterator Project began to take shape. A vision to build something meaningful started here.",
        tags: ["Planning", "Ideas"],
        side: "left"
    },
    {
        year: "2026",
        title: "Full Launch",
        description: "The first product is ready. The Iterator Project goes live. This is just the beginning.",
        tags: ["Launch", "Product"],
        side: "right"
    },
    {
        year: "...",
        title: "Coming Soon",
        description: "The journey continues. More iterations, more learning, more building.",
        tags: ["Future", "Stay Tuned"],
        side: "left"
    }
];

export const TheJourney = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the progress bar filling
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

            // Animate the timeline dots
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

                // Pulse animation after appearing
                gsap.to(dot, {
                    boxShadow: "0 0 0 8px rgba(204, 255, 0, 0.3)",
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5,
                    ease: "sine.inOut",
                    delay: index * 0.2
                });
            });

            // Animate the cards popping in
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

            // Animate connecting lines
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
        <CodeReveal codeString={JOURNEY_CODE} className="w-full bg-[#f5f5f5] relative overflow-hidden" title="TheJourney">
            <section ref={containerRef} className="py-24 px-4 max-w-5xl mx-auto relative">

                <h2 className="text-5xl font-black text-center mb-24 relative z-10">
                    THE <span className="doodle-highlight bg-[#ccff00] px-2 transform -skew-x-12 inline-block">JOURNEY</span>
                </h2>

                {/* Animated Timeline Line */}
                <div className="absolute left-1/2 top-[180px] bottom-[100px] w-1 -translate-x-1/2 hidden md:block z-0">
                    {/* Background track */}
                    <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                    {/* Animated progress */}
                    <div
                        ref={progressRef}
                        className="absolute inset-0 bg-black rounded-full origin-top"
                        style={{ transformOrigin: 'top' }}
                    ></div>
                </div>

                {/* Timeline Items */}
                <div className="space-y-16 md:space-y-24 relative z-10">
                    {milestones.map((item, index) => (
                        <div key={item.year}
                            className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''
                                }`}>

                            {/* Year Marker (Mobile Only) */}
                            <div className="md:hidden text-4xl font-black">{item.year}</div>

                            {/* Content Card */}
                            <div className={`journey-card bg-white border-2 border-black p-6 w-full md:w-[42%] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                                {/* Sticky Tape Effect */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/50 rotate-2"></div>

                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono font-bold text-xl hidden md:block">{item.year}</span>
                                    <div className="flex gap-2 flex-wrap justify-end">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-xs border border-black px-2 py-0.5 rounded-full font-mono bg-white">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                                <p className="text-gray-600 font-mono text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Connector Line */}
                            <div className={`timeline-connector hidden md:block w-[6%] h-0.5 bg-black ${item.side === 'left' ? 'origin-left' : 'origin-right'}`}></div>

                            {/* Timeline Dot */}
                            <div className="timeline-dot hidden md:flex w-6 h-6 bg-[#ccff00] border-4 border-black rounded-full items-center justify-center z-10 flex-shrink-0">
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                            </div>

                            {/* Spacer for the other side of the timeline */}
                            <div className="hidden md:block w-[42%]"></div>
                        </div>
                    ))}
                </div>
            </section>
        </CodeReveal>
    );
};