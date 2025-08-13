// src/routes/(newsletter)/newsletter/[slug]/index.tsx
import { component$, Resource } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead, type StaticGenerateHandler } from '@builder.io/qwik-city';
import { tursoClient } from '~/components/utils/turso';
import md from 'markdown-it';

// Utility to generate slugs from titles
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/(^-|-$)/g, ''); // Remove leading/trailing hyphens
}



export const useGetPostBySlug = routeLoader$(async (event) => {
  const { params, status } = event;
  const client = tursoClient(event);
  const result = await client.execute({
    sql: 'SELECT * FROM newsletter WHERE title = ?',
    args: [params.slug.replace(/-/g, ' ')], // Convert slug back to title
  });
  console.log('Post by slug:', JSON.stringify(result.rows, null, 2)); // Log for debugging
  event.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate'); // Prevent caching

  if (result.rows.length === 0) {
    status(404);
    return null;
  }

  const post = result.rows[0];
  return {
    id: Number(post.id),
    title: String(post.title),
    excerpt: String(post.excerpt || (typeof post.content === 'string' && post.content ? post.content.slice(0, 100) + '...' : 'Read more about this blog post.')),
    content: String(post.content),
    date: String(post.date),
    author: String(post.author || 'Anonymous'),
    image: String(post.image || 'https://images.unsplash.com/photo-1516321310762-479437144403?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
    category: String(post.category) as 'News' | 'Tutorial' | 'Opinion' | 'Other',
    slug: generateSlug(String(post.title)),
  };
});

export default component$(() => {
  const signal = useGetPostBySlug();
  console.log('Post in component:', JSON.stringify(signal.value, null, 2)); // Log for debugging

  return (
    <section class="mx-auto py-8 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-3xl">
      {/* Breadcrumbs */}
      <nav class="mb-8">
        <ul class="flex items-center space-x-2 text-sm text-sage-600 dark:text-sage-400">
          <li>
            <a href="/" class="hover:text-sage-800 dark:hover:text-sage-200">Home</a>
          </li>
          <li>&gt;</li>
          <li>
            <a href="/blog" class="hover:text-sage-800 dark:hover:text-sage-200">Blog</a>
          </li>
          <li>&gt;</li>
          <li class="text-sage-900 dark:text-sage-100">
            {signal.value ? signal.value.title : 'Loading...'}
          </li>
        </ul>
      </nav>

      <Resource
        value={signal}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Post not found</div>}
        onResolved={(post) =>
          post ? (
            <article>
              <header class={post.image ? 'text-center' : ''}>
                <p class="mx-auto max-w-3xl px-4 sm:px-6">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      timeZone: 'UTC',
                    })}
                  </time>
                </p>
                <h1 class="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
                  {post.title}
                </h1>
                <p class="mx-auto max-w-3xl px-4 sm:px-6 text-sage-600 dark:text-sage-400 text-sm">
                  By {post.author} • {post.category}
                </p>
                {post.image ? (
                  <img
                    src={post.image}
                    class="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
                    sizes="(max-width: 900px) 400px, 900px"
                    alt={post.excerpt}
                    loading="eager"
                    width={900}
                    height={480}
                  />
                ) : (
                  <div class="mx-auto max-w-3xl px-4 sm:px-6">
                    <div class="border-t dark:border-slate-700" />
                  </div>
                )}
              </header>
              <div
                class="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
                dangerouslySetInnerHTML={md({ html: true }).render(post.content)}
              />
            </article>
          ) : (
            <div>Post not found</div>
          )
        }
      />
    </section>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  const client = tursoClient({ env });
  const result = await client.execute('SELECT title FROM newsletter');
  console.log('Slugs for SSG:', JSON.stringify(result.rows, null, 2)); // Log for debugging
  return {
    params: result.rows.map(row => ({ slug: generateSlug(String(row.title)) })),
  };
};

export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(useGetPostBySlug);
  return {
    title: post ? `${post.title} — Blog` : 'Blog Post',
    meta: [
      {
        name: 'description',
        content: post ? post.excerpt : 'Read the latest blog post',
      },
    ],
  };
};