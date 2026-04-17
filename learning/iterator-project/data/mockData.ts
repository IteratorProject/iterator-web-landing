export type MediaType = 'youtube' | 'tiktok' | 'article';

export interface FeedItem {
    id: string;
    type: MediaType;
    title: string;
    thumbnail: string; // URL or placeholder color
    url: string;
    date: string;
    tags: string[];
}

export const feedData: FeedItem[] = [
    {
        id: '1',
        type: 'youtube',
        title: 'My First Month Experience after switch Windows to Linux',
        thumbnail: 'bg-red-100', // Placeholder
        url: '#',
        date: '2025-11-01',
        tags: ['Windows', 'Linux', 'Productivity']
    }
];

export interface TimelineItem {
    id: string;
    title: string;
    description: string;
    status: 'fail' | 'success' | 'learning';
    date: string;
}

export const timelineData: TimelineItem[] = [
    {
        id: '1',
        title: 'First React App',
        description: 'Tried to build a clone of Facebook. Got overwhelmed by state management.',
        status: 'fail',
        date: '2020'
    },
    {
        id: '2',
        title: 'Learned Redux',
        description: 'Finally understood global state. Built a Todo app that actually works.',
        status: 'learning',
        date: '2020'
    },
    {
        id: '3',
        title: 'Freelance Gig',
        description: 'Landed my first paid client for a restaurant website.',
        status: 'success',
        date: '2021'
    },
    {
        id: '4',
        title: 'SaaS Startup',
        description: 'Spent 6 months building a tool nobody wanted. Zero users.',
        status: 'fail',
        date: '2022'
    },
    {
        id: '5',
        title: 'Senior Engineer',
        description: 'Promoted to Senior Frontend Engineer at Tech Corp.',
        status: 'success',
        date: '2023'
    }
];

export interface InspirationItem {
    id: string;
    videoId: string; // YouTube Video ID
    quote: string;
    author: string;
}

export const inspirationData: InspirationItem[] = [
    {
        id: '9',
        videoId: '53iujxhGRsE',
        quote: "I hope you will see setbacks as new opportunities. Your pain and suffering will strengthen your character, your resilience and agility, and they are the ultimate superpowers.",
        author: "Jensen Huang (Caltech 2024)"
    },
    {
        id: '10',
        videoId: 'tsTeEkzO9xc',
        quote: "You should feel a lot of agency over what you want the future to be like because you're going to build it.",
        author: "Andrej Karpathy (UC Berkeley 2024)"
    },
    {
        id: '12',
        videoId: 'jvqFAi7vkBc',
        quote: "The most important thing is to just start. The rate of iteration is the most important thing.",
        author: "Sam Altman (Lex Fridman 2024)"
    },
    {
        id: '13',
        videoId: 'DA3mOTcFCIc',
        quote: "If at the end of 3 months I made even a step forward of progress, then it means that I can do this and I can keep doing this.",
        author: "Thor (PirateSoftware)"
    }
];
