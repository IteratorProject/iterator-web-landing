"use client";

import React, { useRef, useEffect } from 'react';
import { CodeReveal } from './CodeReveal';
import { useLanguage } from '../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STORY_CODE = `
export const TheStory = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-black">
          WHY <span className="doodle-underline decoration-[#38b868]">ITERATE?</span>
        </h2>
        <p className="text-xl leading-relaxed text-gray-700 font-serif italic">
          "Progress is a loop, not a straight line."
        </p>
        <p className="text-gray-600 leading-relaxed">
          The Iterator Project is more than a portfolio—it is an open-source learning platform.
          I am documenting my entire journey into REAL Development, sharing the knowledge I gain
          and the failures I encounter.
        </p>
      </div>
      
      <div className="relative h-64 md:h-96 rotate-2 border-2 border-black shadow-brutalist">
         <div className="sticky-note">BUILD. BREAK. SHARE.</div>
      </div>
    </section>
  );
};
`;

export const TheStory = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const planeRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".story-text > *", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });

            if (pathRef.current && planeRef.current) {
                const pathLength = pathRef.current.getTotalLength();

                gsap.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1
                    }
                });

                tl.to(pathRef.current, {
                    strokeDashoffset: 0,
                    ease: "none",
                    duration: 1
                })
                    .to(planeRef.current, {
                        motionPath: {
                            path: pathRef.current,
                            align: pathRef.current,
                            autoRotate: true,
                            alignOrigin: [0.5, 0.5]
                        },
                        duration: 1,
                        ease: "none"
                    }, "<");
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const stickyLines = t.story.sticky.split('\n');

    return (
        <CodeReveal codeString={STORY_CODE} className="w-full bg-[#fbf8f6]" title="TheStory">
            <section ref={containerRef} className="py-24 px-4 md:px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <div className="story-text space-y-8 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                        {t.story.heading.split(' ')[0]}{' '}
                        <span className="relative inline-block">
                            {t.story.heading.split(' ').slice(1).join(' ') || t.story.heading}
                            <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#38b868] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>

                    <div className="relative pl-6 border-l-4 border-black">
                        <p className="text-2xl md:text-3xl font-serif italic text-[#181818] leading-snug">
                            {t.story.quote}
                        </p>
                    </div>

                    <div className="text-lg text-[#787878] leading-relaxed font-mono space-y-4">
                        <p>
                            {t.story.p1a} <span className="bg-black text-white px-1">open-source learning log.</span>
                            {t.story.p1b}
                        </p>
                        <p>
                            {t.story.p2}
                        </p>
                    </div>
                </div>

                <div className="relative h-80 md:h-96 w-full perspective-1000">
                    <div className="absolute inset-0 bg-[#fbf8f6] border-2 border-[#181818] shadow-[12px_12px_0px_0px_rgba(24,24,24,1)] rotate-2 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 400 300">
                            <path
                                ref={pathRef}
                                d="M 50 250 Q 150 250 200 150 T 350 50"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                            />
                        </svg>

                        <div ref={planeRef} className="absolute w-12 h-12 text-black">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 2L11 13" />
                                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                            </svg>
                        </div>

                        <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#38b868] shadow-md transform -rotate-6 p-4 flex items-center justify-center text-center font-black text-sm border border-black/10">
                            {stickyLines.map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </CodeReveal>
    );
};
