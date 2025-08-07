import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

// Interface for gallery images
interface GalleryImage {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

// Hardcoded gallery images (replace with your own images)
const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    title: "Handcrafted Vase",
    category: "Vase",
    src: "/images/pottery/vase-1.webp",
    alt: "Handcrafted clay vase",
  },
  {
    id: "2",
    title: "Ceramic Bowl",
    category: "Bowl",
    src: "/images/pottery/bowl-1.webp",
    alt: "Glazed ceramic bowl",
  },
  {
    id: "3",
    title: "Textured Mug",
    category: "Mug",
    src: "/images/pottery/mug-1.webp",
    alt: "Textured pottery mug",
  },
  {
    id: "4",
    title: "Sculpted Planter",
    category: "Planter",
    src: "/images/pottery/planter-1.webp",
    alt: "Sculpted pottery planter",
  },
  {
    id: "5",
    title: "Rustic Pitcher",
    category: "Pitcher",
    src: "/images/pottery/pitcher-1.webp",
    alt: "Rustic clay pitcher",
  },
  {
    id: "6",
    title: "Decorative Plate",
    category: "Plate",
    src: "/images/pottery/plate-1.webp",
    alt: "Hand-painted ceramic plate",
  },
  {
    id: "7",
    title: "Minimalist Cup",
    category: "Cup",
    src: "/images/pottery/cup-1.webp",
    alt: "Minimalist pottery cup",
  },
  {
    id: "8",
    title: "Artisan Teapot",
    category: "Teapot",
    src: "/images/pottery/teapot-1.webp",
    alt: "Artisan ceramic teapot",
  },
];

// Gradient mapping for image categories (aligned with ROLE_GRADIENTS)
const CATEGORY_GRADIENTS: Record<string, string> = {
  Vase: 'bg-gradient-to-r from-clay-100 to-clay-200 text-clay-700 border-clay-300 shadow-clay-200/50',
  Bowl: 'bg-gradient-to-r from-sage-100 to-sage-200 text-sage-700 border-sage-300 shadow-sage-200/50',
  Mug: 'bg-gradient-to-r from-earth-100 to-earth-200 text-earth-700 border-earth-300 shadow-earth-200/50',
  Planter: 'bg-gradient-to-r from-clay-200 to-clay-300 text-clay-800 border-clay-400 shadow-clay-300/50',
  Pitcher: 'bg-gradient-to-r from-sage-200 to-sage-300 text-sage-800 border-sage-400 shadow-sage-300/50',
  Plate: 'bg-gradient-to-r from-earth-200 to-earth-300 text-earth-800 border-earth-400 shadow-earth-300/50',
  Cup: 'bg-gradient-to-r from-clay-100 to-clay-200 text-clay-700 border-clay-300 shadow-clay-200/50',
  Teapot: 'bg-gradient-to-r from-sage-100 to-sage-200 text-sage-700 border-sage-300 shadow-sage-200/50',
  Default: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 shadow-gray-200/50',
};

const getCategoryColor = (category: string) => {
  return CATEGORY_GRADIENTS[category] || CATEGORY_GRADIENTS.Default;
};

export default component$(() => {
  // Signal for lightbox/modal
  const selectedImage = useSignal<GalleryImage | null>(null);

  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      {/* Background with pottery texture */}
      <div
        class="absolute inset-0 bg-pottery-texture opacity-20"
        aria-hidden="true"
      ></div>

      {/* Gradient background */}
      <div
        class="absolute inset-0 bg-gradient-to-br from-clay-50/50 via-sage-50/50 to-earth-50/50 dark:from-clay-900/50 dark:via-sage-900/50 dark:to-earth-900/50"
        aria-hidden="true"
      ></div>

      {/* Floating decorative elements */}
      <div
        class="absolute top-20 right-10 w-24 h-24 bg-clay-300/20 rounded-full blur-xl animate-float"
        aria-hidden="true"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-20 h-20 bg-sage-300/20 rounded-full blur-xl animate-float"
        style="animation-delay: -3s;"
        aria-hidden="true"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-16 h-16 bg-earth-300/20 rounded-full blur-xl animate-float"
        style="animation-delay: -1s;"
        aria-hidden="true"
      ></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-clay-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
              Pottery Gallery
            </span>
          </h1>
          <p class="text-xl text-sage-700 dark:text-sage-300 max-w-3xl mx-auto">
            Discover our handcrafted pottery collection, where each piece tells a story of clay and creativity.
          </p>
        </div>

        {/* Image Gallery Grid */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              class="group bg-gradient-to-br from-white/90 via-sage-50/30 to-clay-50/30 backdrop-blur-sm border-2 border-clay-100 dark:border-clay-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-clay-200 cursor-pointer"
              onClick$={() => (selectedImage.value = image)}
            >
              <div class="flex flex-col p-6">
                {/* Gallery Image */}
                <div class="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden mb-4">
                  <img
                    src={image.src}
                    alt={image.alt}
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                </div>

                {/* Title and Category */}
                <h3 class="text-xl sm:text-2xl font-semibold text-clay-900 dark:text-clay-100 font-serif mb-2 text-center">
                  {image.title}
                </h3>
                <span
                  class={`px-3 py-1 rounded-full text-xs font-semibold border-2 shadow-lg mx-auto ${getCategoryColor(
                    image.category
                  )}`}
                >
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox/Modal */}
        {selectedImage.value && (
          <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div class="relative max-w-4xl w-full bg-white dark:bg-clay-800 rounded-2xl overflow-hidden">
              <button
                class="absolute top-4 right-4 text-white hover:text-sage-300 transition-colors"
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
              <img
                src={selectedImage.value.src}
                alt={selectedImage.value.alt}
                class="w-full h-auto max-h-[80vh] object-contain"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-semibold text-clay-900 dark:text-clay-100 font-serif">
                  {selectedImage.value.title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div class="text-center mt-12">
          <div class="bg-gradient-to-r from-clay-50 via-earth-50 to-sage-50 rounded-3xl p-8 md:p-12 border-2 border-clay-100 dark:border-clay-700 shadow-xl">
            <h3 class="text-2xl md:text-3xl font-bold text-clay-900 dark:text-clay-100 font-serif mb-4">
              Inspired by Our Pottery?
            </h3>
            <p class="text-sage-700 dark:text-sage-300 mb-6 max-w-2xl mx-auto">
              Join a pottery class to create your own masterpieces or contact us for custom orders!
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/classes"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-clay-600 via-earth-600 to-clay-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span class="relative z-10">Book a Class</span>
                <div class="absolute inset-0 bg-gradient-to-r from-clay-700 via-earth-700 to-clay-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/contact"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-sage-700 bg-gradient-to-r from-white/80 via-sage-50/80 to-clay-50/80 backdrop-blur-sm border-2 border-sage-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-sage-50"
              >
                <span class="relative z-10">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: `${SITE.title} - Image Gallerys`,
  meta: [
    {
      name: "description",
      content: "Browse our stunning collection of handcrafted pottery images, showcasing the beauty of clay and craftsmanship.",
    },
  ],
};