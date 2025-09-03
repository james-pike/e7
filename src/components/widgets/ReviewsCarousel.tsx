// src/components/Testimonials.tsx
import { component$, useSignal, $, useTask$, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

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
  const carouselRef = useSignal<HTMLElement | undefined>();
  const location = useLocation();
  const isHomePage = location.url.pathname === "/";

  // Hardcoded reviews
  const hardcodedReviews: Review[] = [
      {
      id: 2,
      name: "anna ferrabee",
      review: "A Friendship Mugs of Love workshop was organized to bring nine friends together to celebrate one of the women's completion of cancer treatment. It was joyous and meaningful way to recognize this great accomplishment and very happy occasion. The space itself is bring, calming and inspiring. Michelle, who facilitated the workshop, did a skillful job leading the participants, all with varying experience working with clay, to successfully complete a beautiful mug. I would love to do other workshops offered by earthen vessels. I highly recommend!",
      rating: 5,
      date: "2025-08-05T10:00:00Z",
      role: "Craft Enthusiast",
    },
    {
      id: 1,
      name: "Chantal Hospodar",
      review: "The studio is calming and thoughtfully organized to inspire creativity. The instructors are patient and approachable, making it easy for us beginner hand-building potters to feel at home. The experience didn't just teach me how to work with clay, it gave me a space for self reflection, connection and expression. This naturally showed up in the piece I made. Great time!",
      rating: 5,
      date: "2025-05-02T14:30:00Z",
      role: "Beginner Potter",
    },
  
    {
      id: 3,
      name: "Emily Rodriguez",
      review: "A fantastic way to spend a weekend! The team’s passion for teaching shines through, though I wish we had more time to practice.",
      rating: 4,
      date: "2025-06-10T16:45:00Z",
      role: "Hobbyist",
    },
    {
      id: 4,
      name: "David Patel",
      review: "Absolutely loved the open house event! The ceramics class was both fun and educational, perfect for all skill levels.",
      rating: 5,
      date: "2025-05-25T12:15:00Z",
      role: "Art Student",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      review: "The workshop environment was so welcoming. I created something unique and can’t wait to come back for more!",
      rating: 5,
      date: "2025-04-18T09:20:00Z",
      role: "Creative Explorer",
    },
    {
      id: 6,
      name: "James Carter",
      review: "Great instructors and a well-organized session. My only critique is the class size could be smaller for more personal attention.",
      rating: 4,
      date: "2025-03-30T13:50:00Z",
      role: "Pottery Novice",
    },
  ];

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
  const safeReviews = hardcodedReviews; // Use hardcoded reviews directly
  const numSlides = Math.max(0, Math.ceil(safeReviews.length / REVIEWS_PER_SLIDE));

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
    <section class="relative overflow-hidden py-12 md:py-16">
      <div class="relative max-w-7xl mx-auto px-1 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="!text-5xl md:text-6xl px-4 font-bold font-serif mb-6">
            <span class="bg-gradient-to-r xdxd from-primary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Reviews & Testimonials
            </span>
          </h2>
        </div>

        <div class="relative max-w-6xl mx-auto">
          {safeReviews.length === 0 ? (
            <div class="text-center py-12 text-primary-600 text-lg">
              No reviews available yet.
            </div>
          ) : isHomePage ? (
            <>
              <div
                class="overflow-x-auto snap-x snap-mandatory md:px-6 scrollbar-invisible"
                ref={carouselRef}
              >
                <div class="flex gap-6">
                  {safeReviews.map((review: Review) => (
                    <div key={review.id} class="flex-shrink-0 w-80 snap-center">
                      <div class="bg-gradient-to-br from-white/70 via-primary-50/70 to-secondary-50/70 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-secondary-200 border-2 border-primary-100 dark:border-secondary-700">
                        <div class="flex justify-center mb-4 pt-6">
                          <div class="flex space-x-1">{renderStars(review.rating)}</div>
                        </div>
                        <blockquote class="text-lg font-serif text-secondary-900 dark:text-secondary-100 mb-6 leading-relaxed px-6">
                          "{review.review}"
                        </blockquote>
                        <div class="flex items-center space-x-3 mb-4 px-6">
                          <div class="text-left">
                            <h4 class="text-base font-bold text-secondary-900 dark:text-secondary-100 font-serif">
                              {review.name}
                            </h4>
                            {review.role && (
                              <p class="text-primary-600 dark:text-primary-400 text-xs">{review.role}</p>
                            )}
                          </div>
                        </div>
                        <p class="text-primary-500 dark:text-primary-400 text-xs mt-3 pb-6 px-6">
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
                  <div class="bg-gradient-to-br from-white/50 via-primary-50/30 to-secondary-50/30 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-secondary-200 border-2 border-primary-100 dark:border-secondary-700">
                    <div class="flex justify-center mb-4 pt-6">
                      <div class="flex space-x-1">{renderStars(review.rating)}</div>
                    </div>
                    <blockquote class="text-lg font-serif text-secondary-900 dark:text-secondary-100 mb-6 leading-relaxed px-6">
                      "{review.review}"
                    </blockquote>
                    <div class="flex items-center space-x-3 mb-4 px-6">
                      <div class="text-left">
                        <h4 class="text-base font-bold text-secondary-900 dark:text-secondary-100 font-serif">
                          {review.name}
                        </h4>
                        {/* {review.role && (
                          <p class="text-primary-600 dark:text-primary-400 text-xs">{review.role}</p>
                        )} */}
                      </div>
                    </div>
                    <p class="text-primary-500 dark:text-primary-400 text-xs mt-3 pb-6 px-6">
                      {formatRelativeDate(review.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      
      </div>
    </section>
  );
});