import { component$, useSignal, useTask$, $ } from "@builder.io/qwik";
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
  const currentSlide = useSignal(0);
  const touchStartX = useSignal(0);
  const touchEndX = useSignal(0);

  // Auto-scroll carousel on homepage
  useTask$(({ track, cleanup }) => {
    if (!isHome) return;
    track(() => currentSlide.value);
    const interval = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % (workshops.length || 1);
    }, 5000);
    cleanup(() => clearInterval(interval));
  });

  // Handle swipe start
  const handleTouchStart$ = $((e: TouchEvent) => {
    touchStartX.value = e.touches[0].clientX;
  });

  // Handle swipe move
  const handleTouchMove$ = $((e: TouchEvent) => {
    touchEndX.value = e.touches[0].clientX;
  });

  // Handle swipe end
  const handleTouchEnd$ = $(() => {
    const swipeDistance = touchStartX.value - touchEndX.value;
    const minSwipeDistance = 50; // Minimum distance to consider it a swipe

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe left: go to next slide
        currentSlide.value = (currentSlide.value + 1) % (workshops.length || 1);
      } else {
        // Swipe right: go to previous slide
        currentSlide.value =
          (currentSlide.value - 1 + (workshops.length || 1)) % (workshops.length || 1);
      }
    }
  });

  // Get today's date (without time for comparison)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter and sort workshops
  const sortedWorkshops = [...workshops]
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
      <section class="relative overflow-hidden py-16 md:py-20">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div class="text-center">
            <h2 class="text-4xl md:text-5xl font-bold font-serif mb-6 text-clay-900 dark:text-sage-100">
              <span class="bg-gradient-to-r from-clay-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
                Classes & Workshops
              </span>
            </h2>
            <p class="text-xl text-sage-700 dark:text-sage-300 max-w-3xl mx-auto">
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
      <div class="absolute inset-0 bg-gradient-to-br from-sage-50/50 via-white to-clay-50/50 dark:from-clay-900/50 dark:via-sage-900/50 dark:to-earth-900/50" aria-hidden="true"></div>
      <div class="absolute top-20 left-10 w-24 h-24 bg-sage-300/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
      <div class="absolute bottom-20 right-10 w-20 h-20 bg-sage-300/20 rounded-full blur-xl animate-float" style="animation-delay: -2s;" aria-hidden="true"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-earth-300/20 rounded-full blur-xl animate-float" style="animation-delay: -4s;" aria-hidden="true"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-sage-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
              Classes & Workshops
            </span>
          </h2>
          <p class="text-xl text-sage-700 dark:text-sage-300 max-w-3xl mx-auto">
            Join our expert facilitators for hands-on pottery workshops. Learn traditional techniques,
            unleash your creativity, and take home your own handcrafted pieces.
          </p>
        </div>

        {isHome ? (
          // Carousel for Homepage
          <div
            class="relative overflow-hidden"
            onTouchStart$={handleTouchStart$}
            onTouchMove$={handleTouchMove$}
            onTouchEnd$={handleTouchEnd$}
          >
            <div
              class="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide.value * 100}%)`,
              }}
            >
              {sortedWorkshops.map((workshop) => (
                <div
                  key={workshop.id}
                  class="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2"
                >
                  <div
                    class="group flex flex-col h-full rounded-lg shadow transition-transform hover:scale-105 relative overflow-hidden"
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
                    <div class="absolute inset-0 bg-black/20" />
                    <div class="relative z-10 flex flex-col h-full p-6">
                      <h3 class="text-lg font-bold text-white drop-shadow-lg mb-2 line-clamp-2">
                        {workshop.title}
                      </h3>
                      <p
                        class="mb-4 px-2 py-2 rounded bg-black/40 text-white backdrop-blur-sm shadow text-sm line-clamp-3"
                        style={{ wordBreak: "break-word" }}
                      >
                        {workshop.description}
                      </p>
                      <div class="space-y-1 mb-4">
                        {workshop.duration && (
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
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <span>{workshop.duration}</span>
                          </div>
                        )}
                        {workshop.instructor && (
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
                            <span>{workshop.instructor}</span>
                          </div>
                        )}
                        {workshop.price && (
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
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                              ></path>
                            </svg>
                            <span>{workshop.price}</span>
                          </div>
                        )}
                        {workshop.spots && (
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
                                d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              ></path>
                            </svg>
                            <span>{workshop.spots} spots</span>
                          </div>
                        )}
                      </div>
                      <div class="mt-auto">
                        <span class="text-sm text-gray-100 drop-shadow">
                          {workshop.date
                            ? new Date(workshop.date).toLocaleDateString()
                            : ""}
                        </span>
                      </div>
                      <a
                        href="https://bookeo.com/earthenvessels?type=41562UHUKUC196793426E6"
                        class="w-full group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sage-500 via-sage-600 to-sage-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden mt-4"
                        role="button"
                        aria-label="Book a workshop"
                      >
                        <span class="relative z-10">Book Workshop</span>
                        <div class="absolute inset-0 bg-gradient-to-r from-sage-600 via-sage-700 to-sage-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Navigation */}
            {sortedWorkshops.length > 1 && (
              <div class="flex justify-center mt-4 space-x-2">
                <button
                  onClick$={() => {
                    currentSlide.value =
                      (currentSlide.value - 1 + sortedWorkshops.length) %
                      sortedWorkshops.length;
                  }}
                  class="p-2 rounded-full bg-sage-600 text-white hover:bg-sage-700"
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
                  onClick$={() => {
                    currentSlide.value =
                      (currentSlide.value + 1) % sortedWorkshops.length;
                  }}
                  class="p-2 rounded-full bg-sage-600 text-white hover:bg-sage-700"
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
          </div>
        ) : (
          // Grid for Non-Homepage
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                class="group flex flex-col h-full rounded-lg shadow transition-transform hover:scale-105 relative overflow-hidden"
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
                <div class="absolute inset-0 bg-black/20" />
                <div class="relative z-10 flex flex-col h-full p-6">
                  <h3 class="text-lg font-bold text-white drop-shadow-lg mb-2 line-clamp-2">
                    {workshop.title}
                  </h3>
                  <p
                    class="mb-4 px-2 py-2 rounded bg-black/40 text-white backdrop-blur-sm shadow text-sm line-clamp-3"
                    style={{ wordBreak: "break-word" }}
                  >
                    {workshop.description}
                  </p>
                  <div class="space-y-1 mb-4">
                    {workshop.duration && (
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>{workshop.duration}</span>
                      </div>
                    )}
                    {workshop.instructor && (
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
                        <span>{workshop.instructor}</span>
                      </div>
                    )}
                    {workshop.price && (
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
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          ></path>
                        </svg>
                        <span>{workshop.price}</span>
                      </div>
                    )}
                    {workshop.spots && (
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
                            d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                        <span>{workshop.spots} spots</span>
                      </div>
                    )}
                  </div>
                  <div class="mt-auto">
                    <span class="text-sm text-gray-100 drop-shadow">
                      {workshop.date
                        ? new Date(workshop.date).toLocaleDateString()
                        : ""}
                    </span>
                  </div>
                  <a
                    href="https://bookeo.com/earthenvessels?type=41562UHUKUC196793426E6"
                    class="w-full group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sage-500 via-sage-600 to-sage-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden mt-4"
                    role="button"
                    aria-label="Book a workshop"
                  >
                    <span class="relative z-10">Book Workshop</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-sage-600 via-sage-700 to-sage-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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