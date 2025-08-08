import { component$, useSignal, $, useTask$, JSXChildren, JSXNode, Signal } from "@builder.io/qwik";
import { useReviewsLoader } from "~/routes/plugin@reviews";

export default component$(() => {
  const currentIndex = useSignal(0);
  const isAutoPlaying = useSignal(true);
  const reviews = useReviewsLoader();

  // Number of reviews per slide (desktop)
  const REVIEWS_PER_SLIDE = 3;

  // Defensive: always treat reviews.value as an array
  const safeReviews = Array.isArray(reviews.value) ? reviews.value : [];

  // Precompute number of slides and slides array (Qwik-friendly)
  const numSlides = Math.max(0, Math.ceil((Number.isFinite(safeReviews.length) ? safeReviews.length : 0) / Math.max(1, REVIEWS_PER_SLIDE)));
  // const slides = Array.from({ length: numSlides }, (_, i) => i);

  const nextSlide = $(() => {
    currentIndex.value = (currentIndex.value + 1) % numSlides;
  });



  // Auto-advance slides - only run on client
  useTask$(({ track, cleanup }) => {
    track(() => isAutoPlaying.value);
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        if (isAutoPlaying.value && safeReviews.length > 0) {
          nextSlide();
        }
      }, 4000);
      cleanup(() => clearInterval(interval));
    }
  });

  // Helper to format date as relative time (e.g., '3 days ago')
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        class={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      {/* Background with pottery texture */}
      <div class="absolute inset-0 bg-pottery-texture opacity-20" aria-hidden="true"></div>
      
      {/* Gradient background */}
      <div class="absolute inset-0 bg-gradient-to-br from-clay-50/50 via-white to-sage-50/50" aria-hidden="true"></div>
      
      {/* Floating decorative elements */}
      <div class="absolute top-20 right-10 w-24 h-24 bg-clay-300/20 rounded-full blur-xl animate-float"></div>
      <div class="absolute bottom-20 left-10 w-20 h-20 bg-sage-300/20 rounded-full blur-xl animate-float" style="animation-delay: -2s;"></div>
      <div class="absolute top-1/3 right-1/4 w-16 h-16 bg-earth-300/20 rounded-full blur-xl animate-float" style="animation-delay: -4s;"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-sage-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p class="text-xl text-sage-700 dark:text-sage-300 max-w-3xl mx-auto">
            Here's what our pottery lovers have to say about their earthen vessels experience.
          </p>
        </div>

        {/* Carousel Container */}
        <div class="relative max-w-6xl mx-auto">
          {(safeReviews.length === 0) ? (
            <div class="text-center py-12 text-sage-600 text-lg">
              No reviews available yet.
            </div>
          ) : (
            <>
              {/* Unified Card Carousel: One card per review, scrollable on all breakpoints */}
              <div class="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                <div class="flex gap-6">
                  {safeReviews.map((review: { id: string | number | null | undefined; rating: number; review: string | number | boolean | Function | RegExp | JSXChildren[] | Promise<JSXChildren> | Signal<JSXChildren> | JSXNode<unknown> | null | undefined; name: string | number | boolean | Function | RegExp | JSXChildren[] | Promise<JSXChildren> | Signal<JSXChildren> | JSXNode<unknown> | null | undefined; role: string | number | boolean | Function | RegExp | JSXChildren[] | Promise<JSXChildren> | Signal<JSXChildren> | JSXNode<unknown> | null | undefined; date: string; }) => (
                    <div key={review.id} class="flex-shrink-0 w-80 snap-center">
                      <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-earth-200/50 flex flex-col h-full">
                        {/* Stars */}
                        <div class="flex justify-center mb-4">
                          <div class="flex space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        {/* Review Text */}
                        <blockquote class="text-lg font-serif text-clay-900 dark:text-clay-100 mb-6 leading-relaxed">
                          "{review.review}"
                        </blockquote>
                        {/* Customer Info */}
                        <div class="flex items-center space-x-3 mb-4">
                          <div class="text-left">
                            <h4 class="text-base font-bold text-clay-900 dark:text-clay-100 font-serif">
                              {review.name}
                            </h4>
                            {review.role && <p class="text-sage-600 dark:text-sage-400 text-xs">{review.role}</p>}
                          </div>
                        </div>
                        {/* Date */}
                        <p class="text-sage-500 dark:text-sage-400 text-xs mt-3">
                          {formatRelativeDate(review.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* CTA Section */}
      
      </div>
    </section>
  );
}); 