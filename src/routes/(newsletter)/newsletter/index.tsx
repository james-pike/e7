import { component$, useSignal, $, useTask$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useBlogPostsLoader } from '~/routes/plugin@blogposts';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: 'News' | 'Tutorial' | 'Opinion' | 'Other';
  slug: string; // Added slug field
}

export default component$(() => {
  const currentIndex = useSignal(0);
  const isAutoPlaying = useSignal(true);
  const blogPosts = useBlogPostsLoader();
  const carouselRef = useSignal<HTMLElement | undefined>();
  const location = useLocation();
  const isHomePage = location.url.pathname === '/';

  useStyles$(`
    .multi-column-grid {
      column-count: 1;
      column-gap: 1.5rem;
      padding: 0 1rem;
    }
    @media (min-width: 640px) {
      .multi-column-grid {
        column-count: 2;
      }
    }
    @media (min-width: 1024px) {
      .multi-column-grid {
        column-count: 3;
      }
    }
    .blog-card {
      break-inside: avoid;
      margin-bottom: 1.5rem;
    }
    .scrollbar-invisible::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-invisible {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  `);

  const POSTS_PER_SLIDE = 3;
  const safePosts = Array.isArray(blogPosts.value) ? blogPosts.value : [];
  const numSlides = Math.max(0, Math.ceil((Number.isFinite(safePosts.length) ? safePosts.length : 0) / Math.max(1, POSTS_PER_SLIDE)));

  const nextSlide = $(() => {
    if (carouselRef.value) {
      const cardWidth = 320; // w-80 = 320px
      const newScrollLeft = carouselRef.value.scrollLeft + cardWidth;
      carouselRef.value.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      currentIndex.value = Math.min(currentIndex.value + 1, numSlides - 1);
    }
  });

  const prevSlide = $(() => {
    if (carouselRef.value) {
      const cardWidth = 320; // w-80 = 320px
      const newScrollLeft = carouselRef.value.scrollLeft - cardWidth;
      carouselRef.value.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      currentIndex.value = Math.max(currentIndex.value - 1, 0);
    }
  });

  useTask$(({ track, cleanup }) => {
    track(() => isAutoPlaying.value);
    if (typeof window !== 'undefined' && isHomePage) {
      const interval = setInterval(() => {
        if (isAutoPlaying.value && safePosts.length > 0) {
          nextSlide();
        }
      }, 4000);
      cleanup(() => clearInterval(interval));
    }
  });

  function formatRelativeDate(dateString: string) {
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    if (diffMonth > 0) return `${diffMonth} month${diffMonth > 1 ? 's' : ''} ago`;
    if (diffWeek > 0) return `${diffWeek} week${diffWeek > 1 ? 's' : ''} ago`;
    if (diffDay > 0) return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
    if (diffHour > 0) return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
    if (diffMin > 0) return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;
    return 'just now';
  }

  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      <div class="absolute top-20 right-10 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
      <div class="absolute bottom-20 left-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-float" style="animation-delay: -2s;"></div>
      <div class="absolute top-1/3 right-1/4 w-16 h-16 bg-tertiary-300/20 rounded-full blur-xl animate-float" style="animation-delay: -4s;"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h2>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            Explore our latest articles and insights from the pottery community.
          </p>
        </div>

        <div class="relative max-w-6xl mx-auto">
          {safePosts.length === 0 ? (
            <div class="text-center py-12 text-primary-600 text-lg">
              No blog posts available yet.
            </div>
          ) : isHomePage ? (
            <>
              <div
                class="overflow-x-auto snap-x snap-mandatory -mx-4 px-4 scrollbar-invisible"
                ref={carouselRef}
              >
                <div class="flex gap-6">
                  {safePosts.map((post: BlogPost) => (
                    <div key={post.id} class="flex-shrink-0 w-80 snap-center">
                      <a href={`/blog/${post.slug}`} class="block">
                        <div class="bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-tertiary-200/50 flex flex-col h-full">
                          <img
                            src={post.image}
                            alt={post.title}
                            class="w-full h-40 object-cover rounded-lg mb-4"
                          />
                          <h3 class="text-lg font-bold text-secondary-900 dark:text-secondary-100 font-serif mb-2">
                            {post.title}
                          </h3>
                          <p class="text-primary-600 dark:text-primary-400 text-sm mb-4">
                            {post.excerpt}
                          </p>
                          <div class="flex items-center space-x-3 mb-4">
                            <div class="text-left">
                              <h4 class="text-base font-bold text-secondary-900 dark:text-secondary-100 font-serif">
                                {post.author}
                              </h4>
                              <p class="text-primary-600 dark:text-primary-400 text-xs">{post.category}</p>
                            </div>
                          </div>
                          <p class="text-primary-500 dark:text-primary-400 text-xs mt-3">
                            {formatRelativeDate(post.date)}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {safePosts.length > 1 && (
                <div class="flex justify-center mt-4 space-x-2">
                  <button
                    onClick$={prevSlide}
                    class="p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700"
                    aria-label="Previous slide"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick$={nextSlide}
                    class="p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700"
                    aria-label="Next slide"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div class="multi-column-grid">
              {safePosts.map((post: BlogPost) => (
                <div key={post.id} class="blog-card">
                  <a href={`/blog/${post.slug}`} class="block">
                    <div class="bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-tertiary-200/50 flex flex-col h-full">
                      <img
                        src={post.image}
                        alt={post.title}
                        class="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h3 class="text-lg font-bold text-secondary-900 dark:text-secondary-100 font-serif mb-2">
                        {post.title}
                      </h3>
                      <p class="text-primary-600 dark:text-primary-400 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div class="flex items-center space-x-3 mb-4">
                        <div class="text-left">
                          <h4 class="text-base font-bold text-secondary-900 dark:text-secondary-100 font-serif">
                            {post.author}
                          </h4>
                          <p class="text-primary-600 dark:text-primary-400 text-xs">{post.category}</p>
                        </div>
                      </div>
                      <p class="text-primary-500 dark:text-primary-400 text-xs mt-3">
                        {formatRelativeDate(post.date)}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
});