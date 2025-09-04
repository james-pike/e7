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
    id: 1,
    name: "Jennifer Truchon",
    review: "The Friendship Mugs of Love workshop at Earthen Vessels was such a special experience. Michelle beautifully wove together creativity, reflection, and laughter, turning a pottery class into something truly meaningful. We left with more than just mugs — we left with deeper connections and lasting memories. Can’t wait to go back!",
    rating: 5,
    date: "2025-09-03T19:05:00Z", // 8 hours ago from 11:05 PM EDT
    role: "Community Member",
  },
  {
    id: 2,
    name: "Patricia Fiorino",
    review: "A Celebration of Life, Friendship, and Love\n\nOur group of friends came to “Friendship Mugs of Love” at Earthen Vessels to celebrate something truly special. What we found was so much more than a pottery class.\n\nMichelle led us through an experience that was meaningful, inspiring, fun, and deeply connecting. She created a sacred space where creativity and emotion flowed freely. Every part of the experience felt infused with love and intention — from the storytelling, to the silence, to the laughter, to the clay.\n\nMaking our mugs became a beautiful symbol of healing, friendship, and resilience. We came to celebrate and left feeling more bonded, more grateful, and deeply touched.\n\nIf you're looking for more than just a workshop. If you want an experience that fills your heart and soul — this is it!",
    rating: 5,
    date: "2025-09-03T18:05:00Z", // 9 hours ago from 11:05 PM EDT
    role: "Community Member",
  }
,
  {
    id: 3,
    name: "Wendy",
    review: "Thank you for creating such a warm and inviting atmosphere for us to tap into the power of community, connection and play! It was super fun, calming and inspiring. I look forward to taking part in future offerings and am excited to see my finished product in a few weeks!!",
    rating: 5,
    date: "2025-08-25T19:00:00Z", // Late August 2025
    role: "Community Member",
  },
  {
    id: 2,
    name: "Patricia",
    review: "Loved the whole experience! From the warm welcome into the space, to the grounding and connecting to others and self, to immersing myself into the process of exploring and experimenting with the clay to make a beautiful lantern. Thank you for such a grounding workshop and evening.",
    rating: 5,
    date: "2025-08-20T18:30:00Z", // Late August 2025
    role: "Workshop Participant",
  },
  {
    id: 1,
    name: "Chris",
    review: "It was a beautiful, calming and restorative experience; my first time playing with clay in nearly 50 years! I loved it all. Looking forward to having my finished lantern at the centre of my altar or dinner table. Many thanks for your finely crafted and mindfully presented workshop!",
    rating: 5,
    date: "2025-08-15T14:00:00Z", // Mid-August 2025
    role: "First-Time Potter",
  },
  {
    id: 7,
    name: "anna ferrabee",
    review: "A Friendship Mugs of Love workshop was organized to bring nine friends together to celebrate one of the women's completion of cancer treatment. It was joyous and meaningful way to recognize this great accomplishment and very happy occasion. The space itself is bring, calming and inspiring. Michelle, who facilitated the workshop, did a skillful job leading the participants, all with varying experience working with clay, to successfully complete a beautiful mug. I would love to do other workshops offered by earthen vessels. I highly recommend!",
    rating: 5,
    date: "2025-08-05T10:00:00Z", // Early August 2025
    role: "Craft Enthusiast",
  },
  {
    id: 5,
    name: "Kimia",
    review: "I recently attended a workshop at Earthen Vessels, and it was such a meaningful and calming experience. The workshop focused on mindfulness and how we can metaphorically present ourselves through creating a pottery bowl. The atmosphere was incredibly relaxing, and the instructor provided clear and thoughtful guidance, making it easy to focus on the process rather than just the outcome. As someone with prior experience working with clay, I found this workshop especially soothing because it allowed me to step away from perfectionism and truly enjoy the act of creating. Surprisingly, the final bowl turned out beautifully, but what stayed with me most was the sense of calm and presence I felt during those three hours. I highly recommend earthen vessels to anyone looking for a mindful, hands-on experience with clay. Whether you’re a beginner or have experience, this workshop will leave you feeling refreshed and inspired!",
    rating: 5,
    date: "2025-07-20T13:00:00Z", // Late July 2025
    role: "Experienced Potter",
  },
  {
    id: 4,
    name: "Laura",
    review: "I can't say enough about the ‘Open Like a Bowl’ workshop at earthen vessels. Using clay as a vehicle for meditation, setting intention and mindfulness was amazing. The energy in the space was so conducive to this goal. Mary and Ginger were wonderful, caring and supportive facilitators. The workshop really opened my creative channels and left me with a feeling of peace and restoration that lingered long after, I walked out the door. Loved it, highly recommend.",
    rating: 5,
    date: "2025-07-10T15:45:00Z", // Mid-July 2025
    role: "Mindfulness Seeker",
  },
  {
    id: 6,
    name: "Chantal Hospodar",
    review: "The studio is calming and thoughtfully organized to inspire creativity. The instructors are patient and approachable, making it easy for us beginner hand-building potters to feel at home. The experience didn't just teach me how to work with clay, it gave me a space for self reflection, connection and expression. This naturally showed up in the piece I made. Great time!",
    rating: 5,
    date: "2025-05-02T14:30:00Z", // Early May 2025
    role: "Beginner Potter",
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
              Participant Reviews
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