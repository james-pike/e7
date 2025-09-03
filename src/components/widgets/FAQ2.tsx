import { component$, useSignal, $ } from "@builder.io/qwik";
import { useFaqsLoader } from "~/routes/plugin@faqs";

export default component$(() => {
  // Fetch FAQs using the loader
  const faqs = useFaqsLoader();

  // Initialize with first FAQ item open (id: 1)
  const openItems = useSignal<number | null>(1);

  // Toggle FAQ item
  const toggleItem = $((id: number) => {
    if (openItems.value === id) {
      openItems.value = null; // Close if already open
    } else {
      openItems.value = id; // Open this one, close others
    }
  });

  // Defensive: always treat faqs.value as an array
  const safeFaqs = Array.isArray(faqs.value) ? faqs.value : [];

  // Split FAQ items into two columns for independent expansion
  const leftColumn = safeFaqs.filter((_, i) => i % 2 === 0);
  const rightColumn = safeFaqs.filter((_, i) => i % 2 === 1);


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

      <div class="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h2 class="!text-5xl md:text-6xl xdxd font-bold mb-6">
            <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-secondary-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        
        </div>

        {/* FAQ Accordion - Two-column layout */}
        {safeFaqs.length === 0 ? (
          <div class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-secondary-800"></div>
            <p class="mt-4 text-primary-600">Loading FAQs...</p>
          </div>
        ) : (
          <div class="flex flex-col md:flex-row md:gap-8">
            {/* Left Column */}
           <div class="flex-1 flex flex-col gap-4">
  {leftColumn.map((item) => (
    <div key={item.id} class="group mb-0 break-inside-avoid">
      <div class="bg-gradient-to-br from-white/50 via-primary-50/30 to-secondary-50/30 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm border-2 border-tertiary-100 dark:border-secondary-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-secondary-200">
        {/* Question Header */}
        <button
          onClick$={() => toggleItem(item.id)}
          class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-secondary-50/50 hover:to-primary-50/50 dark:hover:bg-secondary-800/50 transition-all duration-200"
          aria-expanded={openItems.value === item.id}
          aria-controls={`faq-answer-${item.id}`}
        >
          <div class="flex items-center gap-3">
            <img src="/images/logo2-cropped.svg" alt="FAQ Icon" class="w-5 h-5"/>
            <h3 class="!text-xl md:!text-xl font-semibold text-secondary-900 dark:text-secondary-100 pr-4">
              {item.question}
            </h3>
          </div>
          {/* Expand/Collapse Icon */}
          <div class="flex-shrink-0">
            <div
              class={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                openItems.value === item.id
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                  : "bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-800"
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
            openItems.value === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={openItems.value !== item.id}
        >
          <div class="px-6 pb-5">
            <div class="border-t-2 border-gradient-to-r from-secondary-100 to-primary-100 pt-4">
              <p class="text-primary-700 dark:text-primary-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
            {/* Right Column */}
            <div class="flex-1 flex flex-col gap-4 mt-4 md:mt-0">
              {rightColumn.map((item) => (
                <div key={item.id} class="group mb-0 break-inside-avoid">
                  <div class="bg-gradient-to-br from-white/50 via-primary-50/30 to-secondary-50/30 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm border-2 border-primary-100 dark:border-secondary-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-secondary-200">
                    {/* Question Header */}
                    <button
                      onClick$={() => toggleItem(item.id)}
                      class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-secondary-50/40 hover:to-primary-50/40 dark:hover:bg-secondary-800/40 transition-all duration-200"
                      aria-expanded={openItems.value === item.id}
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <div class="flex items-center gap-3">
            <img src="/images/logo2-cropped.svg" alt="FAQ Icon" class="w-5 h-5 md:w-[25px] md:h-[25px]" />

                        <h3 class="!text-xl md:!text-xl font-bold text-secondary-900 dark:text-secondary-100 pr-4">
                          {item.question}
                        </h3>
                      </div>
                      {/* Expand/Collapse Icon */}
                      <div class="flex-shrink-0">
                        <div
                          class={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            openItems.value === item.id
                              ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                              : "bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-800"
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
                        <div class="border-t-2 border-gradient-to-r from-secondary-100 to-primary-100 pt-4">
                          <p class="text-primary-700 dark:text-primary-300 leading-relaxed">
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
          <div class="bg-gradient-to-r from-secondary-50/50 via-tertiary-50/50 to-primary-50/50 dark:from-secondary-900 dark:via-tertiary-900 dark:to-primary-900 rounded-3xl p-8 md:p-12 border-2 border-secondary-100 dark:border-secondary-700 shadow-xl">
            <h3 class="text-2xl md:!text-3xl font-bold text-secondary-900 dark:text-secondary-100  mb-4">
              Still Have Questions?
            </h3>
           
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                aria-label="Contact us for more information"
              >
                <span class="relative z-10">Contact Us</span>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});