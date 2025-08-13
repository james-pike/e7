import { component$, useResource$, Resource } from '@builder.io/qwik';
import { routeLoader$, useLocation, type DocumentHead, type StaticGenerateHandler } from '@builder.io/qwik-city';
import { useBlogPostsLoader } from '~/routes/plugin@blogposts';
import md from 'markdown-it';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: 'News' | 'Tutorial' | 'Opinion' | 'Other';
  slug: string;
}

export const useGetPostBySlug = routeLoader$(async ({ params, status }) => {
  const blogPosts = await useBlogPostsLoader().value; // Fetch posts from Turso
  const post = blogPosts.find((p: BlogPost) => p.slug === params.slug);
  if (!post) {
    status(404);
    return null;
  }
  return post;
});

export default component$(() => {
  const signal = useGetPostBySlug();
  const location = useLocation();

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

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const posts = await useBlogPostsLoader().value;
  return {
    params: posts.map((post: BlogPost) => ({ slug: post.slug })),
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