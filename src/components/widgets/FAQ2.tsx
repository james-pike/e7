import { component$, useSignal, $ } from "@builder.io/qwik";

const HARDCODED_FAQS = [
  {
    id: 1,
    question: "What materials are used in your pottery?",
    answer:
      "Our pottery is crafted from high-quality stoneware and porcelain, sourced sustainably. Each piece is hand-glazed with non-toxic, food-safe glazes.",
  },
  {
    id: 2,
    question: "How do I care for my pottery pieces?",
    answer:
      "Hand-wash your pottery with mild soap and warm water. Avoid extreme temperature changes to prevent cracking. Most pieces are dishwasher-safe, but we recommend hand-washing for longevity.",
  },
  {
    id: 3,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries! Shipping costs and times vary based on location. Please check our shipping page for details or contact us for a quote.",
  },
  {
    id: 4,
    question: "Can I request a custom pottery design?",
    answer:
      "Absolutely! We offer custom orders for special occasions or unique designs. Contact us to discuss your vision and timeline.",
  },
  {
    id: 5,
    question: "What types of workshops do you offer?",
    answer:
      "We offer beginner and advanced pottery workshops, including wheel-throwing, hand-building, and glazing techniques. Check our workshop schedule for upcoming sessions.",
  },
  {
    id: 6,
    question: "Are your pottery pieces microwave-safe?",
    answer:
      "Most of our pottery is microwave-safe, but we recommend checking the product description for specific care instructions.",
  },
  {
    id: 7,
    question: "How long does shipping take within the US?",
    answer:
      "Standard shipping within the US typically takes 3-7 business days, depending on your location. Expedited options are available at checkout.",
  },
  {
    id: 8,
    question: "Can I visit your studio?",
    answer:
      "Yes, our studio is open to visitors by appointment. Contact us to schedule a visit or join one of our open studio events.",
  },
  {
    id: 9,
    question: "Do you offer gift wrapping for pottery purchases?",
    answer:
      "We provide eco-friendly gift wrapping options for a small fee. Select the gift wrap option at checkout to add this service.",
  },
  {
    id: 10,
    question: "What is the cost of your pottery workshops?",
    answer:
      "Workshop prices vary based on duration and materials. Beginner classes start at $50, while advanced sessions may cost up to $150. Visit our website for details.",
  },
];

export default component$(() => {
  // Initialize with first FAQ item open (id: 1)
  const openItems = useSignal<number | null>(1);

  const toggleItem = $((id: number) => {
    if (openItems.value === id) {
      openItems.value = null; // Close if already open
    } else {
      openItems.value = id; // Open this one, close others
    }
  });

  // Split FAQ items into two columns for independent expansion
  const leftColumn = HARDCODED_FAQS.filter((_, i) => i % 2 === 0);
  const rightColumn = HARDCODED_FAQS.filter((_, i) => i % 2 === 1);

  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      {/* Background with pottery texture */}
      <div
        class="absolute inset-0 bg-pottery-texture opacity-20"
        aria-hidden="true"
      ></div>

      {/* Gradient background */}
      <div
        class="absolute inset-0 bg-gradient-to-br from-clay-50/50 via-white to-sage-50/50 dark:from-clay-900/50 dark:via-gray-900 dark:to-sage-900/50"
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

      <div class="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-clay-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p class="text-xl text-sage-700 dark:text-sage-300 max-w-3xl mx-auto">
            Find answers to common questions about our pottery, workshops, and
            studio.
          </p>
        </div>

        {/* FAQ Accordion - Two-column layout */}
        {HARDCODED_FAQS.length === 0 ? (
          <div class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-clay-600"></div>
            <p class="mt-4 text-sage-600">Loading FAQs...</p>
          </div>
        ) : (
          <div class="flex flex-col md:flex-row md:gap-8">
            <div class="flex-1 flex flex-col gap-4">
              {leftColumn.map((item) => (
                <div key={item.id} class="group mb-0 break-inside-avoid">
                  <div class="bg-gradient-to-br from-white/90 via-sage-50/30 to-clay-50/30 dark:from-gray-800/90 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm border-2 border-earth-100 dark:border-clay-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-clay-200">
                    {/* Question Header */}
                    <button
                      onClick$={() => toggleItem(item.id)}
                      class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-clay-50/50 hover:to-sage-50/50 dark:hover:bg-clay-800/50 transition-all duration-200"
                      aria-expanded={openItems.value === item.id}
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <h3 class="text-lg font-semibold text-clay-900 dark:text-clay-100 font-serif pr-4">
                        {item.question}
                      </h3>
                      {/* Expand/Collapse Icon */}
                      <div class="flex-shrink-0">
                        <div
                          class={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            openItems.value === item.id
                              ? "bg-gradient-to-r from-sage-500 to-sage-600 text-white shadow-lg"
                              : "bg-gradient-to-r from-clay-100 to-sage-100 text-clay-600"
                          }`}
                        >
                          <svg
                            class={`w-5 h-5 transition-transform duration-300 ${
                              openItems.value === item.id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                    {/* Answer */}
                    <div
                      id={`faq-answer-${item.id}`}
                      class={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openItems.value === item.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                      aria-hidden={openItems.value !== item.id}
                    >
                      <div class="px-6 pb-5">
                        <div class="border-t-2 border-gradient-to-r from-clay-100 to-sage-100 pt-4">
                          <p class="text-sage-700 dark:text-sage-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="flex-1 flex flex-col gap-4 mt-4 md:mt-0">
              {rightColumn.map((item) => (
                <div key={item.id} class="group mb-0 break-inside-avoid">
                  <div class="bg-gradient-to-br from-white/90 via-sage-50/30 to-clay-50/30 dark:from-gray-800/90 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm border-2 border-sage-100 dark:border-clay-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-clay-200">
                    {/* Question Header */}
                    <button
                      onClick$={() => toggleItem(item.id)}
                      class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-clay-50/50 hover:to-sage-50/50 dark:hover:bg-clay-800/50 transition-all duration-200"
                      aria-expanded={openItems.value === item.id}
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <h3 class="text-lg font-semibold text-clay-900 dark:text-clay-100 font-serif pr-4">
                        {item.question}
                      </h3>
                      {/* Expand/Collapse Icon */}
                      <div class="flex-shrink-0">
                        <div
                          class={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            openItems.value === item.id
                              ? "bg-gradient-to-r from-sage-500 to-sage-600 text-white shadow-lg"
                              : "bg-gradient-to-r from-clay-100 to-sage-100 text-clay-600"
                          }`}
                        >
                          <svg
                            class={`w-5 h-5 transition-transform duration-300 ${
                              openItems.value === item.id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                    {/* Answer */}
                    <div
                      id={`faq-answer-${item.id}`}
                      class={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openItems.value === item.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                      aria-hidden={openItems.value !== item.id}
                    >
                      <div class="px-6 pb-5">
                        <div class="border-t-2 border-gradient-to-r from-clay-100 to-sage-100 pt-4">
                          <p class="text-sage-700 dark:text-sage-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div class="text-center mt-12">
          <div class="bg-gradient-to-r from-clay-50 via-earth-50 to-sage-50 dark:from-clay-900 dark:via-earth-900 dark:to-sage-900 rounded-3xl p-8 md:p-12 border-2 border-clay-100 dark:border-clay-700 shadow-xl">
            <h3 class="text-2xl md:text-3xl font-bold text-clay-900 dark:text-clay-100 font-serif mb-4">
              Still Have Questions?
            </h3>
            <p class="text-sage-700 dark:text-sage-300 mb-6 max-w-2xl mx-auto">
              Our pottery experts are here to help! Reach out to us for
              personalized assistance with your pottery needs.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-sage-600 via-sage-700 to-sage-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                aria-label="Contact us for more information"
              >
                <span class="relative z-10">Contact Us</span>
                <div class="absolute inset-0 bg-gradient-to-r from-sage-700 via-sage-800 to-sage-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="mailto:hello@terrapottery.com"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-sage-600 via-sage-700 to-sage-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                aria-label="Send an email to Earthen Vessels"
              >
                <span class="relative z-10">Send Email</span>
                <div class="absolute inset-0 bg-gradient-to-r from-sage-700 via-sage-800 to-sage-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});



// ## Workshops 

// - [About Us](/about)
// - [FAQ](/faq)
// - [Reviews](/reviews)