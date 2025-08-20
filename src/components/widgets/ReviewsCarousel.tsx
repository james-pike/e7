import { component$, useSignal, $, useTask$, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { useReviewsLoader } from "~/routes/plugin@reviews";

interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
  date: string;
  role: string;
}

export default component$(() => {
  const currentIndex = useSignal(0);
  const isAutoPlaying = useSignal(true);
  const reviews = useReviewsLoader();
  const carouselRef = useSignal<HTMLElement | undefined>();
  const location = useLocation();
  const isHomePage = location.url.pathname === "/";

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
    .review-card {
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

  const REVIEWS_PER_SLIDE = 3;
  const safeReviews = Array.isArray(reviews.value) ? reviews.value : [];
  const numSlides = Math.max(0, Math.ceil((Number.isFinite(safeReviews.length) ? safeReviews.length : 0) / Math.max(1, REVIEWS_PER_SLIDE)));

  const nextSlide = $(() => {
    if (carouselRef.value) {
      const cardWidth = 320; // w-80 = 320px
      const newScrollLeft = carouselRef.value.scrollLeft + cardWidth;
      carouselRef.value.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      currentIndex.value = Math.min(currentIndex.value + 1, numSlides - 1);
    }
  });

  const prevSlide = $(() => {
    if (carouselRef.value) {
      const cardWidth = 320; // w-80 = 320px
      const newScrollLeft = carouselRef.value.scrollLeft - cardWidth;
      carouselRef.value.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      currentIndex.value = Math.max(currentIndex.value - 1, 0);
    }
  });

  useTask$(({ track, cleanup }) => {
    track(() => isAutoPlaying.value);
    if (typeof window !== "undefined" && isHomePage) {
      const interval = setInterval(() => {
        if (isAutoPlaying.value && safeReviews.length > 0) {
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
    if (diffMonth > 0) return `${diffMonth} month${diffMonth > 1 ? "s" : ""} ago`;
    if (diffWeek > 0) return `${diffWeek} week${diffWeek > 1 ? "s" : ""} ago`;
    if (diffDay > 0) return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
    if (diffHour > 0) return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`;
    if (diffMin > 0) return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
    return "just now";
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        class={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      <div class="absolute inset-0 " aria-hidden="true"></div>
      <div class="absolute top-20 right-10 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
      <div class="absolute bottom-20 left-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-float" style="animation-delay: -2s;"></div>
      <div class="absolute top-1/3 right-1/4 w-16 h-16 bg-tertiary-300/20 rounded-full blur-xl animate-float" style="animation-delay: -4s;"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="!text-5xl md:text-6xl xdxd  font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              What Participants are saying
            </span>
          </h2>
          {/* <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            Here's what our pottery lovers have to say about their earthen vessels experience.
          </p> */}
        </div>

        <div class="relative max-w-6xl mx-auto">
          {safeReviews.length === 0 ? (
            <div class="text-center py-12 text-primary-600 text-lg">
              No reviews available yet.
            </div>
          ) : isHomePage ? (
            <>
              <div
                class="overflow-x-auto snap-x snap-mandatory -mx-4 px-4 scrollbar-invisible"
                ref={carouselRef}
              >
                <div class="flex gap-6">
                  {safeReviews.map((review: Review) => (
                    <div key={review.id} class="flex-shrink-0 w-80 snap-center">
                      <div class="bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-tertiary-200/50 flex flex-col h-full">
                        <div class="flex justify-center mb-4">
                          <div class="flex space-x-1">{renderStars(review.rating)}</div>
                        </div>
                        <blockquote class="text-lg font-serif text-secondary-900 dark:text-secondary-100 mb-6 leading-relaxed">
                          "{review.review}"
                        </blockquote>
                        <div class="flex items-center space-x-3 mb-4">
                          <div class="text-left">
                            <h4 class="text-base font-bold text-secondary-900 dark:text-secondary-100 font-serif">
                              {review.name}
                            </h4>
                            {review.role && (
                              <p class="text-primary-600 dark:text-primary-400 text-xs">{review.role}</p>
                            )}
                          </div>
                        </div>
                        <p class="text-primary-500 dark:text-primary-400 text-xs mt-3">
                          {formatRelativeDate(review.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {safeReviews.length > 1 && (
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
              {safeReviews.map((review: Review) => (
                <div key={review.id} class="review-card">
                  <div class="bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-tertiary-200/50 flex flex-col h-full">
                    <div class="flex justify-center mb-4">
                      <div class="flex space-x-1">{renderStars(review.rating)}</div>
                    </div>
                    <blockquote class="text-lg font-serif text-secondary-900 dark:text-secondary-100 mb-6 leading-relaxed">
                      "{review.review}"
                    </blockquote>
                    <div class="flex items-center space-x-3 mb-4">
                      <div class="text-left">
                        <h4 class="text-base font-bold text-secondary-900 dark:text-secondary-100 font-serif">
                          {review.name}
                        </h4>
                        {review.role && (
                          <p class="text-primary-600 dark:text-primary-400 text-xs">{review.role}</p>
                        )}
                      </div>
                    </div>
                    <p class="text-primary-500 dark:text-primary-400 text-xs mt-3">
                      {formatRelativeDate(review.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div class="text-center mt-12 mb-0 px-4">
          <div class="bg-gradient-to-r max-w-2xl mx-auto from-secondary-50 to-primary-50 rounded-3xl p-8 md:p-12 border-2 border-secondary-100 dark:border-secondary-700">
            <h3 class="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-secondary-100 font-serif mb-4">
              Join Us!
            </h3>
            {/* <p class="text-primary-700 dark:text-primary-300 mb-6 max-w-2xl mx-auto">
              Experience the quality and craftsmanship that our customers love. 
              Start your pottery journey today!
            </p> */}
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-secondary-600 via-tertiary-600 to-secondary-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span class="relative z-10">Book Now</span>
                <div class="absolute inset-0 bg-gradient-to-r from-secondary-700 via-tertiary-700 to-secondary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});