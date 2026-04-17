"use client";

import React, { useRef, useEffect, useState } from 'react';
import { CodeReveal } from './CodeReveal';
import gsap from 'gsap';

const HERO_CODE = `
export const Hero = () => {
  const titleRef = useRef(null);
  const [showIterating, setShowIterating] = useState(false);
  const projectText1 = "THE ITERATOR";
  const projectText2 = "PROJECT";
  const iteratingText = "ITERATING";

  const handleToggle = () => {
    gsap.to(titleRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => setShowIterating(!showIterating)
    });
  };

  return (
    <section className="...">
      <h1 ref={titleRef} onClick={handleToggle} className="...">
        {showIterating ? (
          <>
            I AM <br />
            <span>ITERATING</span>
          </>
        ) : (
          <>
            THE ITERATOR <br />
            <span>PROJECT</span>
          </>
        )}
      </h1>
    </section>
  );
};
`;

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showIterating, setShowIterating] = useState(false);
  const isFirstRender = useRef(true);
  const projectText1 = "THE ITERATOR";
  const projectText2 = "PROJECT";
  const iteratingText = "ITERATING";

  const handleToggle = () => {
    gsap.to(titleRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => setShowIterating(!showIterating)
    });
  };

  // Initial Animation for "THE ITERATOR PROJECT"
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Initial fade in
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Typewriter effect for project title
      tl.to(".project-char", {
        opacity: 1,
        duration: 0.08,
        stagger: 0.05,
        ease: "none"
      }, "-=0.5");

      // Highlighter swipe
      tl.to(".project-highlighter", {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3");

      // Fade in the subtitle
      tl.to(".hero-footer", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.2");

      // Simple mouse move effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 30;
        const y = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(titleRef.current, {
          x: x,
          y: y,
          duration: 1,
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Toggle Animation
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset visibility
      tl.set(titleRef.current, { opacity: 1, y: 0 });

      if (showIterating) {
        // Animate "I AM ITERATING"
        tl.to(".char", {
          opacity: 1,
          duration: 0.1,
          stagger: 0.1,
          ease: "none"
        });

        tl.to(".highlighter", {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.3");
      } else {
        // Animate "THE ITERATOR PROJECT"
        tl.to(".project-char", {
          opacity: 1,
          duration: 0.08,
          stagger: 0.05,
          ease: "none"
        });

        tl.to(".project-highlighter", {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.3");
      }
    }, containerRef);

    return () => ctx.revert();
  }, [showIterating]);

  return (
    <CodeReveal codeString={HERO_CODE} className="w-full h-screen" title="Hero">
      <section ref={containerRef} className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
        <h1
          ref={titleRef}
          onClick={handleToggle}
          className="relative z-10 text-7xl md:text-9xl font-black tracking-tighter text-center leading-[0.9] select-none text-black cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          {showIterating ? (
            <>
              I AM <br />
              <span className="relative inline-block px-4">
                {iteratingText.split("").map((char, i) => (
                  <span key={i} className="char inline-block opacity-0">{char}</span>
                ))}
                <div className="highlighter absolute bottom-2 left-0 w-full h-6 md:h-8 bg-[#ccff00] -z-10 transform -rotate-2 skew-x-12 mix-blend-multiply rounded-sm scale-x-0 origin-left"></div>
              </span>
            </>
          ) : (
            <span>
              <span className="inline-block">
                {projectText1.split("").map((char, i) => (
                  <span key={`l1-${i}`} className="project-char inline-block opacity-0">{char === " " ? "\u00A0" : char}</span>
                ))}
              </span>
              <br />
              <span className="relative inline-block px-4">
                {projectText2.split("").map((char, i) => (
                  <span key={`l2-${i}`} className="project-char inline-block opacity-0">{char}</span>
                ))}
                <div className="project-highlighter absolute bottom-2 left-0 w-full h-6 md:h-8 bg-[#ccff00] -z-10 transform -rotate-2 skew-x-12 mix-blend-multiply rounded-sm scale-x-0 origin-left"></div>
              </span>
            </span>
          )}
        </h1>

        <div className="hero-footer mt-12 flex flex-col items-center gap-4 z-10 opacity-0 translate-y-4">
          <p className="text-lg md:text-xl font-mono text-gray-500 tracking-widest uppercase">Try &rarr; Fail &rarr; Learn &rarr; Repeat</p>
        </div>
      </section>
    </CodeReveal>
  );
};
