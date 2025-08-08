// src/components/widgets/Hero.tsx
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="relative overflow-hidden">
      {/* Background with pottery texture */}
      <div class="absolute inset-0 bg-pottery-texture opacity-20" aria-hidden="true"></div>

      {/* Floating decorative elements */}
      <div class="absolute top-20 right-10 w-24 h-24 bg-clay-300/20 rounded-full blur-xl animate-float"></div>
      <div
        class="absolute bottom-20 left-10 w-20 h-20 bg-sage-300/20 rounded-full blur-xl animate-float"
        style="animation-delay: -2s;"
      ></div>
      <div
        class="absolute top-1/3 right-1/4 w-16 h-16 bg-earth-300/20 rounded-full blur-xl animate-float"
        style="animation-delay: -4s;"
      ></div>

      <div class="grid texture-fixed grid-cols-1 md:grid-cols-2 items-center">
        {/* Mobile Logo */}
        <img
          src="/images/logo.svg"
          alt="Earthen Vessels Logo"
          class="px-4 pt-4 mt-2 h-56 mx-auto pl-14 md:hidden"
        />

        {/* Left Column (Desktop) / Text Content (Mobile) */}
        <div class="relative z-10 order-1 flex items-center justify-center px-4 pt-4 pb-10 md:px-8 md:py-0 md:order-1">
          <div class="text-center md:text-left px-2">
            {/* Desktop Logo */}
            <img
              src="/images/logo.svg"
              alt="Earthen Vessels Logo"
              class="hidden md:block h-56 mx-0 mb-6"
            />
            {/* Subtitle */}
            <p class="text-xl sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto md:mx-0">
              Here, we gather around clay, to listen deeply to one another, to ourselves, and to the earth as we shape earthen vessels.
            </p>
            {/* Buttons */}
            <div class="flex flex-col items-center justify-center w-full gap-4 sm:flex-row sm:gap-4 max-w-xs sm:max-w-md lg:max-w-lg mx-auto md:mx-0">
              <a
                class="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold font-serif text-white bg-gradient-to-r from-clay-600 to-clay-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden focus:outline-none focus:ring-2 focus:ring-clay-400"
                href="#collection"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Book a Workshop
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-clay-700 to-clay-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <button class="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold font-serif text-sage-700 bg-white/80 backdrop-blur-sm border border-sage-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-sage-50 focus:outline-none focus:ring-2 focus:ring-sage-300">
                <span class="relative z-10 flex items-center gap-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h9"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m0 0H3"></path>
                  </svg>
                  Learn About Our Story
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Image (Below Buttons) */}
        <div class="md:hidden px-4 pb-10 order-2">
          <img
            src="/images/hero.webp"
            alt="Earthen Vessels Pottery"
            class="w-full h-64 object-cover rounded-lg shadow-xl border-2 border-sage-100"
          />
        </div>

        {/* Desktop Right Column: Image */}
        <div class="hidden md:block relative order-3 md:order-2">
          <img
            src="/images/hero.webp"
            alt="Earthen Vessels Pottery"
            class="w-full h-96 object-cover rounded-lg shadow-xl border-2 border-sage-100"
          />
        </div>
      </div>
    </section>
  );
});