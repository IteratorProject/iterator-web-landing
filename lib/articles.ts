import fs from 'fs';
import path from 'path';

export interface ArticleData {
    id: string;
    slug: string;
    lang: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    image: string;
    body: string;
}

interface Frontmatter {
    title: string;
    description: string;
    date: string;
    tags: string[];
    image: string;
}

const FILE_PATTERN = /^(.+)\.(en|th)\.md$/;

function parseFilename(filename: string): { slug: string; lang: string } | null {
    const match = filename.match(FILE_PATTERN);
    if (!match) return null;
    return { slug: match[1], lang: match[2] };
}

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } | null {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return null;

    const fmBlock = match[1];
    const body = match[2].trim();

    const fm: Record<string, string> = {};
    for (const line of fmBlock.split('\n')) {
        const sep = line.indexOf(':');
        if (sep === -1) continue;
        const key = line.slice(0, sep).trim();
        const value = line.slice(sep + 1).trim();
        fm[key] = value;
    }

    const tags = (fm.tags ?? '')
        .replace(/^\[|\]$/g, '')
        .split(',')
        .map(t => t.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);

    return {
        frontmatter: {
            title: fm.title ?? 'Untitled',
            description: fm.description ?? '',
            date: fm.date ?? '',
            tags,
            image: fm.image ?? '',
        },
        body,
    };
}

function loadArticlesFromDir(dirPath: string): ArticleData[] {
    const filenames = fs.readdirSync(dirPath).filter(f => FILE_PATTERN.test(f));

    const articles: ArticleData[] = [];

    for (const filename of filenames) {
        const parsed = parseFilename(filename);
        if (!parsed) continue;

        const raw = fs.readFileSync(path.join(dirPath, filename), 'utf-8');
        const parsedFm = parseFrontmatter(raw);
        if (!parsedFm) continue;

        const id = filename.replace(/\.md$/, '');
        articles.push({
            id,
            slug: parsed.slug,
            lang: parsed.lang,
            ...parsedFm.frontmatter,
            body: parsedFm.body,
        });
    }

    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return articles;
}

export function getAllArticles(): ArticleData[] {
    return loadArticlesFromDir(path.join(process.cwd(), 'articles'));
}

export function getAllJourneys(): ArticleData[] {
    return loadArticlesFromDir(path.join(process.cwd(), 'content', 'journeys'));
}
