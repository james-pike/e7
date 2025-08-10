// src/components/Home.tsx
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";


export default component$(() => {
  return (
    <div class="bg-white dark:bg-gray-900">
      <main class="isolate">
        {/* Hero Section: About Us - Our Space */}
        <section class="relative overflow-hidden py-16 md:py-20">
          {/* Background with pottery texture */}
          <div class="absolute inset-0 bg-pottery-texture opacity-20" aria-hidden="true"></div>

          {/* Gradient background */}
          <div
            class="absolute inset-0 bg-gradient-to-br from-clay-50/50 via-white to-sage-50/50 dark:from-clay-900/50 dark:via-gray-900 dark:to-sage-900/50"
            aria-hidden="true"
          ></div>

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

          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
              <div>
                <h1 class="max-w-2xl text-4xl md:text-5xl font-bold font-serif tracking-tight text-balance">
                  <span class="bg-gradient-to-r from-sage-600 via-earth-600 to-clay-600 bg-clip-text text-transparent">
                    About Us - Our Space
                  </span>
                </h1>
                <div class="mt-6 max-w-xl">
                  <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 dark:from-gray-800 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-clay-200/50 dark:border-clay-700/50">
                    <p class="text-lg font-medium text-pretty text-sage-700 dark:text-sage-300 sm:text-xl/8">
                      Earthen Vessels Studio is a grounding space where working with clay becomes a pathway to a deeper connection - with ourselves, the Earth, and each other - through reflections, mindful creativity, we play and we listen to the voice within.
                    </p>
                    <p class="mt-4 text-lg font-medium text-pretty text-sage-700 dark:text-sage-300 sm:text-xl/8">
                      In this nurturing space creativity and exploration thrive, welcoming all even those without clay experience. With our facilitators' gentle guidance each participant can meet the clay and put away fears or anxieties about "not being able to do it right" - It's very freeing!
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-10 sm:mt-16 lg:mt-6">
               <Image
    src="/images/a1.webp"
    alt="Earthen Vessels Studio"
    layout="constrained"
    width={800} // Replace with the actual intrinsic width of the image
    height={600} // Replace with the actual intrinsic height of the image
    class="w-full max-w-lg lg:max-w-none rounded-2xl object-cover"
    breakpoints={[320, 480, 640, 1024]}
/>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section class="relative overflow-hidden py-16 md:py-20">
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
              <div class="mt-10 sm:mt-16 lg:mt-6 lg:order-1">
               <Image
    src="/images/a1.webp"
    alt="Earthen Vessels Studio"
    layout="constrained"
    width={800} // Replace with the actual intrinsic width of the image
    height={600} // Replace with the actual intrinsic height of the image
    class="w-full max-w-lg lg:max-w-none rounded-2xl object-cover"
    breakpoints={[320, 480, 640, 1024]}
/>
              </div>
              <div class="lg:order-2">
                <h2 class="text-4xl md:text-5xl font-bold font-serif tracking-tight text-pretty">
                  <span class="bg-gradient-to-r from-clay-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
                    Our Offerings
                  </span>
                </h2>
                <div class="mt-6 max-w-xl">
                  <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 dark:from-gray-800 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-clay-200/50 dark:border-clay-700/50">
                    <p class="text-base/7 text-sage-700 dark:text-sage-300">
                      Our offerings are unique and evolving. We currently offer themed workshops from our 'Touch The Earth' series: Open Like a Bowl - ready to be filled, Lanterns for the Journey, and Like the Turtle - practising patience and resilience. Labyrinth and Clay. Upcoming 4 and 6 week courses will be posted soon.
                    </p>
                    <p class="mt-4 text-base/7 text-sage-700 dark:text-sage-300">
                      We also create customized workshops for private groups. Stay tuned for more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What To Expect Section */}
        <section class="relative overflow-hidden py-16 md:py-20">
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
              <div class="lg:order-1">
                <h2 class="text-4xl md:text-5xl font-bold font-serif tracking-tight text-pretty">
                  <span class="bg-gradient-to-r from-clay-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
                    What To Expect
                  </span>
                </h2>
                <div class="mt-6 max-w-xl">
                  <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 dark:from-gray-800 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-clay-200/50 dark:border-clay-700/50">
                    <p class="text-base/7 text-sage-700 dark:text-sage-300">
                      Our clay and personal transformation workshops and courses begin with guided meditations and reflections, leading a small group into a deeper awareness of self, followed by a hands-on, mindful experience with clay.
                    </p>
                    <p class="mt-4 text-base/7 text-sage-700 dark:text-sage-300">
                      In the camaraderie of the Earthen Vessels clay studio, clay experience is not necessary. Our facilitators gently guide the unfolding process so that each participant can meet the clay without concerns about "being able to do it right."
                    </p>
                    <p class="mt-4 text-base/7 text-sage-700 dark:text-sage-300">
                      Whether you are experienced or just starting out, working with clay can be a valuable and enriching experience for both your body, mind and heart. At Earthen Vessels, our classes are mindfully designed to encourage focusing on the process of working with the clay in a way that the clay also teaches us something about ourselves.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-10 sm:mt-16 lg:mt-6 lg:order-2">
                <Image
                  src="/images/a3.jpg"
                  alt="Clay Experience"
                  class="w-full max-w-lg lg:max-w-none rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section class="relative overflow-hidden py-16 md:py-20">
          <div class="relative isolate overflow-hidden bg-gradient-to-r from-clay-50 to-sage-50 dark:from-clay-900 dark:to-sage-900 px-6 py-24 text-center sm:rounded-3xl sm:px-16 border-2 border-clay-100 dark:border-clay-700">
            <h2 class="mx-auto max-w-2xl text-3xl md:text-4xl font-bold font-serif tracking-tight">
              <span class="bg-gradient-to-r from-clay-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
                Discover The Calming Benefits of Clay In Your Hands
              </span>
            </h2>
            <div class="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 dark:from-gray-800 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-clay-200/50 dark:border-clay-700/50">
                <p class="text-lg/8 font-semibold tracking-tight text-clay-900 dark:text-clay-100">Reduce Stress and Anxiety</p>
                <p class="mt-2 text-base/7 text-sage-700 dark:text-sage-300">
                  Engaging with clay requires focus and mindfulness. It naturally moves our attention from stressors into a place of relaxation.
                </p>
              </div>
              <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 dark:from-gray-800 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-clay-200/50 dark:border-clay-700/50">
                <p class="text-lg/8 font-semibold tracking-tight text-clay-900 dark:text-clay-100">Promote Mindfulness and Presence</p>
                <p class="mt-2 text-base/7 text-sage-700 dark:text-sage-300">
                  The slow, deliberate nature of clay encourages presence, focus and listening to ourselves. These wonderful aww moments are everlasting.
                </p>
              </div>
              <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 dark:from-gray-800 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-clay-200/50 dark:border-clay-700/50">
                <p class="text-lg/8 font-semibold tracking-tight text-clay-900 dark:text-clay-100">Foster Patience and Resilience</p>
                <p class="mt-2 text-base/7 text-sage-700 dark:text-sage-300">
                  Moving away from perfection, we are better able to listen to the clay. This experience teaches us about patience and resilience, so we can embrace the joy of our wholeness.
                </p>
              </div>
              <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 dark:from-gray-800 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-clay-200/50 dark:border-clay-700/50">
                <p class="text-lg/8 font-semibold tracking-tight text-clay-900 dark:text-clay-100">Promote Self-Expression</p>
                <p class="mt-2 text-base/7 text-sage-700 dark:text-sage-300">
                  Clay provides a medium for expressing emotions and experiences helping us to find the words to express ourselves.
                </p>
              </div>
              <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 dark:from-gray-800 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-clay-200/50 dark:border-clay-700/50">
                <p class="text-lg/8 font-semibold tracking-tight text-clay-900 dark:text-clay-100">Reduce Isolation & Loneliness</p>
                <p class="mt-2 text-base/7 text-sage-700 dark:text-sage-300">
                  Coming together around the creative table creates social connections and encourages community.
                </p>
              </div>
              <div class="bg-gradient-to-br from-white via-sage-50/30 to-clay-50/30 dark:from-gray-800 dark:via-sage-900/30 dark:to-clay-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-clay-200/50 dark:border-clay-700/50">
                <p class="text-lg/8 font-semibold tracking-tight text-clay-900 dark:text-clay-100">Find Your Flow State</p>
                <p class="mt-2 text-base/7 text-sage-700 dark:text-sage-300">
                  The flow of working with clay promotes mental well-being and can lead to improved mood and satisfaction.
                </p>
              </div>
            </div>
            {/* Floating decorative element */}
            <div
              class="absolute top-0 right-0 w-24 h-24 bg-clay-300/20 rounded-full blur-xl animate-float"
              aria-hidden="true"
            ></div>
          </div>
        </section>
      </main>
    </div>
  );
});