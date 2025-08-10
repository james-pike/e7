import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Post } from "~/types";
import { SITE } from "~/config.mjs";
import { fetchPosts } from "~/utils/posts";

export default component$(() => {
  const store = useStore<{ posts: Post[] }>({
    posts: [],
  });

  useTask$(async () => {
    if (isServer) {
      try {
        const posts = await fetchPosts();
        store.posts = posts.filter((post): post is Post => post !== null).map((post: Post) => ({ ...post }));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
  });

  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      {/* Background with pottery texture */}
      <div class="absolute inset-0 bg-pottery-texture opacity-20" aria-hidden="true"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-sage-50/50 via-white to-clay-50/50 dark:from-clay-900/50 dark:via-sage-900/50 dark:to-earth-900/50" aria-hidden="true"></div>
      <div class="absolute top-20 left-10 w-24 h-24 bg-sage-300/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
      <div class="absolute bottom-20 right-10 w-20 h-20 bg-sage-300/20 rounded-full blur-xl animate-float" style="animation-delay: -2s;" aria-hidden="true"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-earth-300/20 rounded-full blur-xl animate-float" style="animation-delay: -4s;" aria-hidden="true"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-sage-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
              Earthen Newsletter
            </span>
          </h1>
          <p class="text-xl text-sage-700 dark:text-sage-300 max-w-3xl mx-auto">
            Explore our latest articles on pottery techniques, creative inspiration, and workshop experiences.
          </p>
        </div>

        {/* Blog Posts */}
        {store.posts.length === 0 ? (
          <div class="text-center py-12 text-sage-600 text-lg">
            No blog posts available yet. Check back soon for new content!
          </div>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {store.posts.map((post) => (
              <div
                key={post.slug}
                class="group flex flex-col h-full rounded-lg shadow transition-transform hover:scale-105 relative overflow-hidden"
                style={
                  post.image
                    ? {
                        backgroundImage: `url('${post.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
              >
                <div class="absolute inset-0 bg-black/20" />
                <div class="relative z-10 flex flex-col h-full p-6">
                  <h2 class="text-xl sm:text-2xl font-bold text-white drop-shadow-lg mb-2 line-clamp-2">
                    <a
                      href={`/blog/${post.slug}`}
                      class="hover:text-sage-300 transition ease-in duration-200"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <p
                    class="mb-4 px-2 py-2 rounded bg-black/40 text-white backdrop-blur-sm shadow text-sm line-clamp-3"
                    style={{ wordBreak: "break-word" }}
                  >
                    {post.excerpt || "Read more to discover the full content of this article."}
                  </p>
                  <div class="space-y-1 mb-4">
                    <div class="flex items-center text-xs text-white/90">
                      <svg
                        class="w-4 h-4 mr-1 text-white/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span>
                        {post.publishDate.toLocaleDateString("en-us", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC",
                        })}
                      </span>
                    </div>
                    {post.author && (
                      <div class="flex items-center text-xs text-white/90">
                        <svg
                          class="w-4 h-4 mr-1 text-white/80"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                        <span>{post.author}</span>
                      </div>
                    )}
                    {post.category && (
                      <div class="flex items-center text-xs text-white/90">
                        <svg
                          class="w-4 h-4 mr-1 text-white/80"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 7h18M3 12h18m-7 5h7"
                          ></path>
                        </svg>
                        <span>{post.category}</span>
                      </div>
                    )}
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div class="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          class="px-2 py-1 text-xs font-semibold text-sage-700 bg-sage-200/50 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div class="mt-auto">
                    <a
                      href={`/newsletter/${post.slug}`}
                      class="w-full group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-clay-600 via-earth-600 to-clay-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                      role="button"
                      aria-label={`Read more about ${post.title}`}
                    >
                      <span class="relative z-10">Read More</span>
                      <div class="absolute inset-0 bg-gradient-to-r from-clay-700 via-earth-700 to-clay-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: `${SITE.title} - Blog`,
  meta: [
    {
      name: "description",
      content: "Explore our latest articles on pottery techniques, creative inspiration, and workshop experiences.",
    },
  ],
};