import { component$, useSignal, useTask$, useStyles$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

interface Workshop {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  price: string;
  image: string;
  instructor: string;
  spots: number;
}

interface WorkshopsGridProps {
  workshops: Workshop[];
  isHomePage?: boolean;
}

export default component$<WorkshopsGridProps>(({ workshops, isHomePage = false }) => {
  const location = useLocation();
  const isHome = isHomePage || location.url.pathname === "/";
  const currentIndex = useSignal(0);
  const isAutoPlaying = useSignal(true);
  const carouselRef = useSignal<HTMLElement | undefined>();

  // Add styles for snap scrolling and hiding scrollbar
  useStyles$(`
    .scrollbar-invisible::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-invisible {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `);

  const WORKSHOPS_PER_SLIDE = 3;
  const safeWorkshops = Array.isArray(workshops) ? workshops : [];
  const numSlides = Math.max(0, Math.ceil((Number.isFinite(safeWorkshops.length) ? safeWorkshops.length : 0) / Math.max(1, WORKSHOPS_PER_SLIDE)));

  // Navigation functions
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

  // Auto-scroll for homepage
  useTask$(({ track, cleanup }) => {
    if (!isHome) return;
    track(() => isAutoPlaying.value);
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        if (isAutoPlaying.value && safeWorkshops.length > 0) {
          nextSlide();
        }
      }, 5000);
      cleanup(() => clearInterval(interval));
    }
  });

  // Get today's date (without time for comparison)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter and sort workshops
  const sortedWorkshops = [...safeWorkshops]
    .filter((workshop) => {
      const workshopDate = new Date(workshop.date);
      return workshopDate >= today;
    })
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  // Empty state
  if (!sortedWorkshops || sortedWorkshops.length === 0) {
    return (
      <section class="relative overflow-hidden py-16 md:py-16">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div class="text-center">
            <h2 class="text-4xl md:text-5xl font-bold font-serif mb-6 text-secondary-900 dark:text-primary-100">
              <span class="bg-gradient-to-r xdxd from-secondary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
                Our Offerings
              </span>
            </h2>
            <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
              No upcoming workshops available at the moment. Check back soon for new pottery classes!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      {/* Background with pottery texture */}
      <div class="absolute inset-0 bg-pottery-texture opacity-20" aria-hidden="true"></div>
      <div class="absolute inset-0" aria-hidden="true"></div>
      <div class="absolute top-20 left-10 w-24 h-24 bg-primary-300/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
      <div class="absolute bottom-20 right-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-float" style="animation-delay: -2s;" aria-hidden="true"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-tertiary-300/20 rounded-full blur-xl animate-float" style="animation-delay: -4s;" aria-hidden="true"></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-8">
          <h2 class="!text-5xl md:text-6xl xdxd font-bold font-serif mb-6">
            <span class="bg-gradient-to-r xdxd from-primary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Our Offerings
            </span>
          </h2>
        </div>

        <div class="mt-6 max-w-4xl text-center mx-auto pb-10">
          <div class="bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 dark:from-gray-800 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-secondary-200/50 dark:border-secondary-700/50">
            <p class="text-base/7 text-primary-700 dark:text-primary-300">
              Our offerings are unique and evolving. We currently offer themed workshops from our 'Touch The tertiary' series: Open Like a Bowl - ready to be filled, Lanterns for the Journey, and Like the Turtle - practising patience and resilience. Labyrinth and secondary. Upcoming 4 and 6 week courses will be posted soon.
            </p>
            <p class="mt-4 text-base/7 text-primary-700 dark:text-primary-300">
              We also create customized workshops for private groups. Stay tuned for more.
            </p>
          </div>
        </div>

        {isHome ? (
          // Carousel for Homepage
          <>
            <div
              class="overflow-x-auto snap-x snap-mandatory -mx-4 px-4 scrollbar-invisible"
              ref={carouselRef}
            >
              <div class="flex gap-6">
                {sortedWorkshops.map((workshop) => (
                  <div key={workshop.id} class="flex-shrink-0 w-80 snap-center">
                    <div
                      class="group flex flex-col h-full bg-gradient-to-br from-white/50 via-primary-50/30 to-secondary-50/30 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-secondary-200 border-2 border-tertiary-100 dark:border-secondary-700 overflow-hidden"
                      style={
                        workshop.image
                          ? {
                              backgroundImage: `url('${workshop.image}')`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }
                          : {}
                      }
                    >
                      <div class="relative z-10 flex flex-col h-full p-6">
                        <h3 class="text-lg font-bold text-secondary-900 dark:text-secondary-100 drop-shadow-lg mb-2 line-clamp-2">
                          {workshop.title}
                        </h3>
                        <p
                          class="mb-4 px-2 py-2 rounded bg-white/20 dark:bg-secondary-900/20 backdrop-blur-sm shadow text-sm text-primary-700 dark:text-primary-300 line-clamp-3"
                          style={{ wordBreak: "break-word" }}
                        >
                          {workshop.description}
                        </p>
                        <div class="space-y-1 mb-4">
                          {workshop.duration && (
                            <div class="flex items-center text-xs text-primary-700 dark:text-primary-300">
                              <svg
                                class="w-4 h-4 mr-1 text-primary-600 dark:text-primary-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span>{workshop.duration}</span>
                            </div>
                          )}
                          {workshop.instructor && (
                            <div class="flex items-center text-xs text-primary-700 dark:text-primary-300">
                              <svg
                                class="w-4 h-4 mr-1 text-primary-600 dark:text-primary-400"
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
                              <span>{workshop.instructor}</span>
                            </div>
                          )}
                          {workshop.price && (
                            <div class="flex items-center text-xs text-primary-700 dark:text-primary-300">
                              <svg
                                class="w-4 h-4 mr-1 text-primary-600 dark:text-primary-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                ></path>
                              </svg>
                              <span>{workshop.price}</span>
                            </div>
                          )}
                          {workshop.spots && (
                            <div class="flex items-center text-xs text-primary-700 dark:text-primary-300">
                              <svg
                                class="w-4 h-4 mr-1 text-primary-600 dark:text-primary-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                ></path>
                              </svg>
                              <span>{workshop.spots} spots</span>
                            </div>
                          )}
                        </div>
                        <div class="mt-auto">
                          <span class="text-sm text-primary-700 dark:text-primary-300 drop-shadow">
                            {workshop.date
                              ? new Date(workshop.date).toLocaleDateString()
                              : ""}
                          </span>
                        </div>
                        <a
                          href="https://bookeo.com/earthenvessels?type=41562UHUKUC196793426E6"
                          class="w-full group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden mt-4"
                          role="button"
                          aria-label="Book a workshop"
                        >
                          <span class="relative z-10">Book Workshop</span>
                          <div class="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {sortedWorkshops.length > 1 && (
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
          // Grid for Non-Homepage
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                class="group flex flex-col h-full bg-gradient-to-br from-white/50 via-primary-50/30 to-secondary-50/30 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-secondary-200 border-2 border-tertiary-100 dark:border-secondary-700 overflow-hidden"
                style={
                  workshop.image
                    ? {
                        backgroundImage: `url('${workshop.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
              >
                <div class="relative z-10 flex flex-col h-full p-6">
                  <h3 class="text-lg font-bold text-secondary-900 dark:text-secondary-100 drop-shadow-lg mb-2 line-clamp-2">
                    {workshop.title}
                  </h3>
                  <p
                    class="mb-4 px-2 py-2 rounded bg-white/20 dark:bg-secondary-900/20 backdrop-blur-sm shadow text-sm text-primary-700 dark:text-primary-300 line-clamp-3"
                    style={{ wordBreak: "break-word" }}
                  >
                    {workshop.description}
                  </p>
                  <div class="space-y-1 mb-4">
                    {workshop.duration && (
                      <div class="flex items-center text-xs text-primary-700 dark:text-primary-300">
                        <svg
                          class="w-4 h-4 mr-1 text-primary-600 dark:text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>{workshop.duration}</span>
                      </div>
                    )}
                    {workshop.instructor && (
                      <div class="flex items-center text-xs text-primary-700 dark:text-primary-300">
                        <svg
                          class="w-4 h-4 mr-1 text-primary-600 dark:text-primary-400"
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
                        <span>{workshop.instructor}</span>
                      </div>
                    )}
                    {workshop.price && (
                      <div class="flex items-center text-xs text-primary-700 dark:text-primary-300">
                        <svg
                          class="w-4 h-4 mr-1 text-primary-600 dark:text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          ></path>
                        </svg>
                        <span>{workshop.price}</span>
                      </div>
                    )}
                    {workshop.spots && (
                      <div class="flex items-center text-xs text-primary-700 dark:text-primary-300">
                        <svg
                          class="w-4 h-4 mr-1 text-primary-600 dark:text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                        <span>{workshop.spots} spots</span>
                      </div>
                    )}
                  </div>
                  <div class="mt-auto">
                    <span class="text-sm text-primary-700 dark:text-primary-300 drop-shadow">
                      {workshop.date
                        ? new Date(workshop.date).toLocaleDateString()
                        : ""}
                    </span>
                  </div>
                  <a
                    href="https://bookeo.com/earthenvessels?type=41562UHUKUC196793426E6"
                    class="w-full group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden mt-4"
                    role="button"
                    aria-label="Book a workshop"
                  >
                    <span class="relative z-10">Book Workshop</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
});