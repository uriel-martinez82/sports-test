import { unstable_cache } from 'next/cache';

const WP_API = 'https://sportsolutions.com.mx/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_image_src: {
    full: [string, number, number, boolean];
    list: [string, number, number, boolean];
    landsacpe: [string, number, number, boolean];
  };
  categories: number[];
  yoast_head_json: {
    title: string;
    description: string;
    og_image?: { url: string }[];
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export const getPosts = unstable_cache(
  async (page = 1, perPage = 9, category?: number): Promise<WPPost[]> => {
    const params = new URLSearchParams({
      per_page: String(perPage),
      page: String(page),
      _fields: 'id,slug,title,excerpt,date,featured_image_src,categories,yoast_head_json',
    });
    if (category) params.append('categories', String(category));
    const res = await fetch(`${WP_API}/posts?${params}`);
    if (!res.ok) return [];
    return res.json();
  },
  ['wp-posts'],
  { revalidate: 3600 }
);

export const getPost = unstable_cache(
  async (slug: string): Promise<WPPost | null> => {
    const res = await fetch(
      `${WP_API}/posts?slug=${slug}&_fields=id,slug,title,content,excerpt,date,featured_image_src,categories,yoast_head_json`
    );
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] ?? null;
  },
  ['wp-post'],
  { revalidate: 3600 }
);

export const getCategories = unstable_cache(
  async (): Promise<WPCategory[]> => {
    const res = await fetch(`${WP_API}/categories?per_page=100&hide_empty=true`);
    if (!res.ok) return [];
    return res.json();
  },
  ['wp-categories'],
  { revalidate: 86400 }
);

export const getTotalPages = async (perPage = 9, category?: number): Promise<number> => {
  const params = new URLSearchParams({ per_page: String(perPage) });
  if (category) params.append('categories', String(category));
  const res = await fetch(`${WP_API}/posts?${params}`, { method: 'HEAD' });
  return Number(res.headers.get('X-WP-TotalPages') ?? 1);
};
