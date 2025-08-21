import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

// Interface for gallery images (removed category)
interface GalleryImage {
  id: string;
  title: string;
  src: string;
  alt: string;
}

// Hardcoded gallery images (removed category)
const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    title: "Handcrafted Vase",
    src: "/images/a1.webp",
    alt: "Handcrafted secondary vase",
  },
  {
    id: "2",
    title: "Ceramic Bowl",
    src: "/images/a2.webp",
    alt: "Glazed ceramic bowl",
  },
  {
    id: "3",
    title: "Textured Mug",
    src: "/images/a3.jpg",
    alt: "Textured pottery mug",
  },
  {
    id: "4",
    title: "Sculpted Planter",
    src: "/images/pottery/planter-1.webp",
    alt: "Sculpted pottery planter",
  },
  {
    id: "5",
    title: "Rustic Pitcher",
    src: "/images/pottery/pitcher-1.webp",
    alt: "Rustic secondary pitcher",
  },
  {
    id: "6",
    title: "Decorative Plate",
    src: "/images/pottery/plate-1.webp",
    alt: "Hand-painted ceramic plate",
  },
  {
    id: "7",
    title: "Minimalist Cup",
    src: "/images/pottery/cup-1.webp",
    alt: "Minimalist pottery cup",
  },
  {
    id: "8",
    title: "Artisan Teapot",
    src: "/images/pottery/teapot-1.webp",
    alt: "Artisan ceramic teapot",
  },
];

export default component$(() => {
  const currentIndex = useSignal(0);
  const selectedImage = useSignal<GalleryImage | null>(null);
  const autoPlay = useSignal(true);
  const isFullscreen = useSignal(false);

  // Auto-play logic
  useVisibleTask$(({ cleanup }) => {
    if (autoPlay.value) {
      const interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % GALLERY_IMAGES.length;
      }, 5000); // Change image every 5 seconds
      cleanup(() => clearInterval(interval));
    }

    // Pause auto-play on hover
    const gallery = document.querySelector(".gallery-player");
    if (gallery) {
      gallery.addEventListener("mouseenter", () => (autoPlay.value = false));
      gallery.addEventListener("mouseleave", () => (autoPlay.value = true));
      cleanup(() => {
        gallery.removeEventListener("mouseenter", () => (autoPlay.value = false));
        gallery.removeEventListener("mouseleave", () => (autoPlay.value = true));
      });
    }
  });

  // Navigation functions as QRLs
  const goToPrev = $(() => {
    currentIndex.value = (currentIndex.value - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
  });

  const goToNext = $(() => {
    currentIndex.value = (currentIndex.value + 1) % GALLERY_IMAGES.length;
  });

  // Select image from carousel
  const selectImage = $( (index: number) => {
    currentIndex.value = index;
  });

  // Toggle fullscreen
  const toggleFullscreen = $(async () => {
    const elem = document.querySelector(".lightbox-content") as HTMLElement;
    if (!isFullscreen.value) {
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
        isFullscreen.value = true;
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        isFullscreen.value = false;
      }
    }
  });

  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      {/* Background with pottery texture */}
      <div
        class="absolute inset-0 bg-pottery-texture opacity-20"
        aria-hidden="true"
      ></div>

      {/* Gradient background */}
      <div
        class="absolute inset-0 "
        aria-hidden="true"
      ></div>

      {/* Floating decorative elements */}
      <div
        class="absolute top-20 right-10 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float"
        aria-hidden="true"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-float"
        style="animation-delay: -3s;"
        aria-hidden="true"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-16 h-16 bg-tertiary-300/20 rounded-full blur-xl animate-float"
        style="animation-delay: -1s;"
        aria-hidden="true"
      ></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h1 class="!text-6xl md:text-7xl xdxd  font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-secondary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              earthen vessels gallery
            </span>
          </h1>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            Discover us gathering, listening, connecting, and creating
          </p>
        </div>

        {/* Image Player */}
        <div class="gallery-player relative w-full max-w-4xl mx-auto">
          <div class="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={GALLERY_IMAGES[currentIndex.value].src}
              alt={GALLERY_IMAGES[currentIndex.value].alt}
              class="w-full h-full object-cover transition-opacity duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <h3 class="absolute bottom-4 left-4 text-xl font-semibold text-white font-serif">
              {GALLERY_IMAGES[currentIndex.value].title}
            </h3>
          </div>
          <div class="flex justify-between mt-4">
            <button
              class="px-4 py-2 bg-white/80 dark:bg-secondary-800/80 text-secondary-900 dark:text-secondary-100 rounded-full shadow-md hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all duration-200"
              onClick$={goToPrev}
            >
              Previous
            </button>
            <button
              class="px-4 py-2 bg-white/80 dark:bg-secondary-800/80 text-secondary-900 dark:text-secondary-100 rounded-full shadow-md hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all duration-200"
              onClick$={goToNext}
            >
              Next
            </button>
          </div>
        </div>

        {/* Lightbox/Modal */}
        {selectedImage.value && (
          <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div class="relative max-w-4xl w-full bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden lightbox-content">
              <button
                class="absolute top-4 right-4 text-white hover:text-primary-300 transition-colors"
                onClick$={() => (selectedImage.value = null)}
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                class="absolute top-4 left-4 text-white hover:text-primary-300 transition-colors"
                onClick$={toggleFullscreen}
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5m11 11v-4m0 0h-4m4 0l-5-5m-6 6v4m0 0h4m-4 0l5-5"
                  />
                </svg>
              </button>
              <img
                src={selectedImage.value.src}
                alt={selectedImage.value.alt}
                class="w-full h-auto max-h-[80vh] object-contain"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-semibold text-secondary-900 dark:text-secondary-100 font-serif">
                  {selectedImage.value.title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Image Carousel - Hidden on mobile */}
        <div class="mt-8 hidden md:block">
          <div class="relative w-full max-w-4xl mx-auto overflow-hidden">
            <div class="flex space-x-4 pb-4" style="transition: transform 0.3s ease;">
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={image.id}
                  class={`flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${index === currentIndex.value ? "border-4 border-secondary-500" : "border-2 border-transparent"}`}
                  onClick$={() => selectImage(index)}
                  style={`transform: translateX(-${currentIndex.value * 128}px);`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    class="w-full h-full object-cover"
                    width={128}
                    height={128}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Come Join Us CTA */}
        <div class="text-center mt-12">
          <div class="bg-gradient-to-r from-secondary-50 via-tertiary-50 to-primary-50 rounded-3xl p-8 md:p-12 border-2 border-secondary-100 dark:border-secondary-700 shadow-xl">
            <h3 class="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-secondary-100 font-serif mb-4">
              Come Join Us
            </h3>
            <p class="text-primary-700 dark:text-primary-300 mb-6 max-w-2xl mx-auto">
              Experience the joy of pottery with us!
            </p>
            <a
              href="/classes"
              class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-secondary-600 via-tertiary-600 to-secondary-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span class="relative z-10">Book a Class</span>
              <div class="absolute inset-0 bg-gradient-to-r from-secondary-700 via-tertiary-700 to-secondary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: `${SITE.title} - earthen vessels gallery`,
  meta: [
    {
      name: "description",
      content: "Discover our stunning collection of handcrafted pottery images, showcasing the beauty of gathering, listening, connecting, and creating.",
    },
  ],
};