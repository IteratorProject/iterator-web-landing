import type { Translations } from './types';

const en: Translations = {
    nav: {
        home: 'Home',
        story: 'The Story',
        loop: 'The Loop',
        inspiration: 'Inspiration',
        journey: 'The Journey',
        connect: 'Connect',
        close: 'Close',
        menu: 'Menu',
        space: 'Space',
        vimMode: 'Vim Mode',
        press: 'Press',
        toClose: 'to close',
        pressAnyKey: 'Press any key to navigate',
    },
    hero: {
        title1: 'THE ITERATOR',
        title2: 'PROJECT',
        iterating: 'ITERATING',
        iAm: 'I AM',
        subtitle: 'Try \u2192 Fail \u2192 Learn \u2192 Repeat',
    },
    story: {
        heading: 'WHY ITERATE?',
        quote: '"Progress is a loop, not a straight line."',
        p1a: 'The Iterator Project is my',
        p1b: "This isn't just a place to show finished work; it is a platform where I document the raw reality of becoming a REAL Developer.",
        p2: 'I share the process behind every line of code\u2014the algorithms that failed, the math that finally clicked, and the knowledge I have gathered along the way. My goal is to turn my individual iterations into shared lessons for us all.',
        sticky: 'BUILD.\nBREAK.\nSHARE.',
    },
    loop: {
        heading: 'THE LOOP',
        subtitle: 'Consuming, Creating, iterating.',
        article: 'Article',
        readFull: 'Read full article \u2192',
    },
    journey: {
        heading: 'THE JOURNEY',
        milestones: [
            {
                year: 'Late 2025',
                title: 'The Spark',
                description: 'The ideas for The Iterator Project began to take shape. A vision to build something meaningful started here.',
                tags: ['Planning', 'Ideas'],
            },
            {
                year: '2026',
                title: 'Full Launch',
                description: 'The first product is ready. The Iterator Project goes live. This is just the beginning.',
                tags: ['Launch', 'Product'],
            },
            {
                year: '...',
                title: 'Coming Soon',
                description: 'The journey continues. More iterations, more learning, more building.',
                tags: ['Future', 'Stay Tuned'],
            },
        ],
    },
    inspiration: {
        heading: 'MY INSPIRATION',
        subtitle: 'Videos and quotes that fuel my journey',
        items: [
            {
                quote: 'I hope you will see setbacks as new opportunities. Your pain and suffering will strengthen your character, your resilience and agility, and they are the ultimate superpowers.',
                author: 'Jensen Huang (Caltech 2024)',
            },
            {
                quote: "You should feel a lot of agency over what you want the future to be like because you're going to build it.",
                author: 'Andrej Karpathy (UC Berkeley 2024)',
            },
            {
                quote: 'The most important thing is to just start. The rate of iteration is the most important thing.',
                author: 'Sam Altman (Lex Fridman 2024)',
            },
            {
                quote: 'If at the end of 3 months I made even a step forward of progress, then it means that I can do this and I can keep doing this.',
                author: 'Thor (PirateSoftware)',
            },
        ],
    },
    contact: {
        heading: 'Connect',
        subtitle: 'Initialize handshake. Choose your protocol.',
        preferEmail: 'Prefer email?',
        links: [
            { name: 'LinkedIn', handle: 'My LinkedIn Profile' },
            { name: 'GitHub', handle: '@Tan1pawat' },
            { name: 'YouTube', handle: 'My YouTube Channel' },
            { name: 'X / Twitter', handle: '@IteratorProject' },
            { name: 'Facebook', handle: 'My Facebook Page' },
            { name: 'Medium', handle: 'Tech Blog' },
        ],
    },
    intro: {
        words: ['Try', 'Fail', 'Learn', 'Repeat'],
        final: 'The Iterator Project',
        initial: 'Try',
    },
    footer: '\u00A9 {year} The Iterator Project. Built with failure.',
    toggle: 'TH',
};

export default en;
