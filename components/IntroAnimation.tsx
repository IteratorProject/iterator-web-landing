"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import gsap from "gsap";

export default function IntroAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisitedIterator");

        if (hasVisited) {
            setIsVisible(false);
            return;
        }

        const tl = gsap.timeline({
            onComplete: () => {
                sessionStorage.setItem("hasVisitedIterator", "true");
                setIsVisible(false);
            }
        });

        const textElement = textRef.current;
        const words = t.intro.words;

        gsap.set(containerRef.current, { opacity: 1 });
        gsap.set(textElement, { opacity: 0, y: 20 });

        for (let i = 0; i < 1; i++) {
            words.forEach((word) => {
                tl.to(textElement, {
                    opacity: 0,
                    y: -20,
                    duration: 0.2,
                    ease: "power2.in",
                    onComplete: () => {
                        if (textElement) {
                            textElement.innerText = word;
                            gsap.set(textElement, { y: 20 });
                        }
                    }
                })
                    .to(textElement, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    })
                    .to(textElement, {
                        opacity: 1,
                        duration: 0.4
                    });
            });
        }

        tl.to(textElement, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                if (textElement) {
                    textElement.innerText = t.intro.final;
                    textElement.className = "text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[#787878] text-center";
                    gsap.set(textElement, { y: 20, scale: 0.9 });
                }
            }
        })
            .to(textElement, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out"
            })
            .to(textElement, {
                opacity: 1,
                duration: 1.5
            })
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut"
            });

        return () => {
            tl.kill();
        };
    }, [t]);

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
        >
            <div
                ref={textRef}
                className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
                {t.intro.initial}
            </div>
        </div>
    );
}
