import { component$, useSignal, useVisibleTask$, $, } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "@qwikest/icons/lucide";
import { SITE } from "~/config.mjs";
import confetti from 'canvas-confetti';


// Interface for gallery images
interface GalleryImage {
  id: string;
  title: string;
  src: string;
  alt: string;
}

// Hardcoded gallery images
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
    src: "/images/g1.jpeg",
    alt: "Sculpted pottery planter",
  },
  {
    id: "5",
    title: "Rustic Pitcher",
    src: "/images/g2.jpeg",
    alt: "Rustic secondary pitcher",
  },
  {
    id: "6",
    title: "Decorative Plate",
    src: "/images/g3.jpeg",
    alt: "Hand-painted ceramic plate",
  },
  {
    id: "7",
    title: "Minimalist Cup",
    src: "/images/g4.jpeg",
    alt: "Minimalist pottery cup",
  },
  {
    id: "8",
    title: "Artisan Teapot",
    src: "/images/g5.jpeg",
    alt: "Artisan ceramic teapot",
  },
];

export default component$(() => {
  const currentIndex = useSignal(0);
  const selectedImage = useSignal<GalleryImage | null>(null);
  const autoPlay = useSignal(true);
  const isFullscreen = useSignal(false);
    const bookButtonRef = useSignal<HTMLAnchorElement>(); // Signal for the Book a Class button
  const didClickSig = useSignal(false);

  // Auto-play logic with reactive pause/play support
  useVisibleTask$(({ cleanup, track }) => {
    // Track changes to autoPlay.value
    track(() => autoPlay.value);

    let interval: NodeJS.Timeout | null = null;

    // Start or stop interval based on autoPlay.value
    if (autoPlay.value) {
      interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % GALLERY_IMAGES.length;
      }, 5000); // Change image every 5 seconds
    }

    // Cleanup interval on component unmount or when autoPlay changes
    cleanup(() => {
      if (interval) clearInterval(interval);
    });
  });

  // Toggle auto-play
  const toggleAutoPlay = $(() => {
    autoPlay.value = !autoPlay.value;
  });

  // Navigation functions as QRLs
  const goToPrev = $(() => {
    currentIndex.value = (currentIndex.value - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
  });

  const goToNext = $(() => {
    currentIndex.value = (currentIndex.value + 1) % GALLERY_IMAGES.length;
  });

  // Select image from carousel
  const selectImage = $((index: number) => {
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
    <section class="relative overflow-hidden py-12 md:py-16">
      {/* Background with pottery texture */}
      <div
        class="absolute inset-0 bg-pottery-texture opacity-20"
        aria-hidden="true"
      ></div>

      {/* Gradient background */}
      <div
        class="absolute inset-0"
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
          <h1 class="!text-5xl md:!text-6xl font-bold font-serif mb-6">
            <span class="bg-gradient-to-r xdxd from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              earthen vessels gallery
            </span>
          </h1>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            Discover us gathering, listening, connecting, and creating
          </p>
        </div>

        {/* Image Player */}
        <div class="gallery-player relative w-full max-w-4xl mx-auto">
          <div class="image-container relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
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
          <div class="flex gap-2 mt-4 justify-end"> {/* Changed to justify-end for far-right alignment */}
      <button
        class="px-4 py-2 bg-white/80 dark:bg-secondary-800/80 text-secondary-900 dark:text-secondary-100 rounded-full shadow-sm hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all duration-200"
        onClick$={goToPrev}
        aria-label="Previous slide"
      >
        <LuChevronLeft class="w-5 h-5" />
      </button>
      <button
        class="px-4 py-2 bg-white/80 dark:bg-secondary-800/80 text-secondary-900 dark:text-secondary-100 rounded-full shadow-sm hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all duration-200"
        onClick$={toggleAutoPlay}
        aria-label={autoPlay.value ? "Pause carousel" : "Play carousel"}
      >
        {autoPlay.value ? <LuPause class="w-5 h-5" /> : <LuPlay class="w-5 h-5" />}
      </button>
      <button
        class="px-4 py-2 bg-white/80 dark:bg-secondary-800/80 text-secondary-900 dark:text-secondary-100 rounded-full shadow-sm hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all duration-200"
        onClick$={goToNext}
        aria-label="Next slide"
      >
        <LuChevronRight class="w-5 h-5" />
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
        <div class="bg-gradient-to-r max-w-4xl mx-auto from-secondary-50/40 via-tertiary-50/40 to-primary-50/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border-2 border-primary-200 dark:border-secondary-700 shadow-2xl">
          <h3 class="!text-3xl xdxd md:!text-4xl font-bold text-secondary-900 dark:text-secondary-100 font-serif mb-4">
            Come Join Us
          </h3>
          <p class="text-primary-700 dark:text-primary-300 mb-6 max-w-2xl mx-auto">
            Experience the joy of pottery with us!
          </p>
          <a
            ref={bookButtonRef}
            onClick$={async () => {
              didClickSig.value = true;
              if (!bookButtonRef.value) return;
              const rect = bookButtonRef.value.getBoundingClientRect();

              if (!rect) return;

              // Calculate confetti origin relative to the button
              const x = (rect.left + rect.width / 2) / window.innerWidth;
              const y = rect.top / window.innerHeight;

              // Trigger confetti effect
              await confetti({
                colors: ['#02B9FC', '#B57DFC'], // Use the non-intro colors from ConfettiButton
                origin: { x, y },
              });
            }}
            class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-secondary-800 via-tertiary-600 to-secondary-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span class="relative z-10">Book a Class</span>
              <div class="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-500 group-hover:opacity-100 transition-opacity duration-300"></div>
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