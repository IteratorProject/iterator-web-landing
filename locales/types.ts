export interface Translations {
    nav: {
        home: string;
        story: string;
        loop: string;
        inspiration: string;
        journey: string;
        connect: string;
        close: string;
        menu: string;
        space: string;
        vimMode: string;
        press: string;
        toClose: string;
        pressAnyKey: string;
    };
    hero: {
        title1: string;
        title2: string;
        iterating: string;
        iAm: string;
        subtitle: string;
    };
    story: {
        heading: string;
        quote: string;
        p1a: string;
        p1b: string;
        p2: string;
        sticky: string;
    };
    loop: {
        heading: string;
        subtitle: string;
        article: string;
        readFull: string;
    };
    journey: {
        heading: string;
        milestones: Array<{
            year: string;
            title: string;
            description: string;
            tags: string[];
        }>;
    };
    inspiration: {
        heading: string;
        subtitle: string;
        items: Array<{
            quote: string;
            author: string;
        }>;
    };
    contact: {
        heading: string;
        subtitle: string;
        preferEmail: string;
        links: Array<{
            name: string;
            handle: string;
        }>;
    };
    intro: {
        words: string[];
        final: string;
        initial: string;
    };
    footer: string;
    toggle: string;
}
