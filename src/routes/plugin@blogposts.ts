// src/routes/plugin@blogposts.ts
import { routeLoader$ } from '@builder.io/qwik-city';
import { tursoClient } from '~/components/utils/turso';

// Utility to generate slugs from titles
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/(^-|-$)/g, ''); // Remove leading/trailing hyphens
}

export const useBlogPostsLoader = routeLoader$(async (event) => {
  const client = tursoClient(event);
  const result = await client.execute('SELECT * FROM newsletter ORDER BY date DESC');
  return result.rows.map((row: any) => ({
    id: row.id,
    title: row.title,
    excerpt: row.excerpt || (row.content ? row.content.slice(0, 100) + '...' : 'Read more about this blog post.'),
    content: row.content,
    date: row.date,
    author: row.author || 'Anonymous',
    image: row.image || 'https://images.unsplash.com/photo-1516321310762-479437144403?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: row.category as 'News' | 'Tutorial' | 'Opinion' | 'Other',
    slug: generateSlug(row.title), // Add slug
  })) as Array<{
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    image: string;
    category: 'News' | 'Tutorial' | 'Opinion' | 'Other';
    slug: string; // Include slug in type
  }>;
});