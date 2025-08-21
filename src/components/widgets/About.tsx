import { component$, useTask$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { LuHeart, LuBrain, LuLeaf, LuPalette, LuUsers, LuActivity } from "@qwikest/icons/lucide";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {

    const loc = useLocation();

  useTask$(({ track }) => {
    track(() => loc.url.pathname + loc.url.hash);
    
    const hash = loc.url.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // give the page time to render
      }
    }
  });
  // Array of benefits with icons, titles, and descriptions
  const benefits = [
    {
      icon: LuHeart,
      title: "Reduce Stress and Anxiety",
      description: "Engaging with clay requires focus and mindfulness, naturally shifting attention from stressors to a place of relaxation.",
    },
    {
      icon: LuBrain,
      title: "Promote Mindfulness and Presence",
      description: "The slow, deliberate nature of clay encourages presence and self-awareness, creating lasting moments of awe.",
    },
    {
      icon: LuLeaf,
      title: "Foster Patience and Resilience",
      description: "Moving beyond perfection, clay teaches patience and resilience, embracing the joy of wholeness.",
    },
    {
      icon: LuPalette,
      title: "Promote Self-Expression",
      description: "Clay offers a medium to express emotions and experiences, helping find words for self-expression.",
    },
    {
      icon: LuUsers,
      title: "Reduce Isolation & Loneliness",
      description: "Coming together around the creative table builds social connections and fosters community.",
    },
    {
      icon: LuActivity,
      title: "Find Your Flow State",
      description: "The flow of working with clay enhances mental well-being, improving mood and satisfaction.",
    },
  ];

  return (
    <div class="">
      <main class="isolate">
        {/* Hero Section: About Us - Our Space */}
        <section class="relative overflow-hidden py-20">
          <div
            class="absolute inset-0 "
            aria-hidden="true"
          ></div>
          <div class="absolute top-20 right-10 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
          <div
            class="absolute bottom-20 left-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-float"
            style="animation-delay: -2s;"
            aria-hidden="true"
          ></div>
          <div
            class="absolute top-1/3 right-1/4 w-16 h-16 bg-tertiary-300/20 rounded-full blur-xl animate-float"
            style="animation-delay: -4s;"
            aria-hidden="true"
          ></div>

          <div id="space" class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
              <div class="lg:order-1">
                <h1 class="text-4xl md:text-5xl font-bold font-serif tracking-tight text-balance">
                  <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-secondary-600 bg-clip-text text-transparent">
                    Our Space
                  </span>
                </h1>
                <div class="mt-6 max-w-xl">
                  <div class="bg-gradient-to-br from-white/90 via-primary-50/30 to-secondary-50/30 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-secondary-200/50 dark:border-secondary-700/50">
                    <p class="text-lg leading-7 text-primary-700 dark:text-primary-300">
                      earthen vessels Studio is a grounding space where working with clay becomes a pathway to a deeper connection—with ourselves, the earth, and each other—through reflections, mindful creativity, play, and listening to the voice within.
                    </p>
                    <p class="mt-4 text-lg leading-7 text-primary-700 dark:text-primary-300">
                      In this nurturing space, creativity and exploration thrive, welcoming all, even those without clay experience. With our facilitators' gentle guidance, each participant can engage with the clay and set aside fears or anxieties about "not being able to do it right"—it's truly freeing!
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-10 lg:mt-0">
                <Image
                  src="/images/a1.webp"
                  alt="earthen vessels Studio"
                  class="w-full max-w-lg lg:max-w-none rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section class="relative overflow-hidden py-20">
          <div
            class="absolute inset-0 "
            aria-hidden="true"
          ></div>
          <div class="absolute top-20 right-10 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
          <div
            class="absolute bottom-20 left-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-float"
            style="animation-delay: -2s;"
            aria-hidden="true"
          ></div>
          <div
            class="absolute top-1/3 right-1/4 w-16 h-16 bg-tertiary-300/20 rounded-full blur-xl animate-float"
            style="animation-delay: -4s;"
            aria-hidden="true"
          ></div>

          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
              <div class="lg:order-2">
                <h2 class="text-4xl md:text-5xl font-bold font-serif tracking-tight text-balance">
                  <span class="bg-gradient-to-r from-secondary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
                    Our Offerings
                  </span>
                </h2>
                <div class="mt-6 max-w-xl">
                  <div class="bg-gradient-to-br from-white/90 via-primary-50/30 to-secondary-50/30 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-secondary-200/50 dark:border-secondary-700/50">
                    <p class="text-lg leading-7 text-primary-700 dark:text-primary-300">
                      Explore our workshops and courses designed to foster creativity and connection through clay. From beginner sessions to advanced techniques, we offer a range of experiences tailored to all levels.
                    </p>
                    <p class="mt-4 text-lg leading-7 text-primary-700 dark:text-primary-300">
                      Join us for guided sessions where you’ll learn new skills, connect with others, and find joy in the creative process—all in a supportive environment.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-10 lg:mt-0 lg:order-1">
                <Image
                  src="/images/a2.webp"
                  alt="Workshops"
                  class="w-full max-w-lg lg:max-w-none rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What To Expect Section */}
        <section id="what-to-expect" class="relative overflow-hidden py-20">
          <div
            class="absolute inset-0 "
            aria-hidden="true"
          ></div>
          <div class="absolute top-20 right-10 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
          <div
            class="absolute bottom-20 left-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-float"
            style="animation-delay: -2s;"
            aria-hidden="true"
          ></div>
          <div
            class="absolute top-1/3 right-1/4 w-16 h-16 bg-tertiary-300/20 rounded-full blur-xl animate-float"
            style="animation-delay: -4s;"
            aria-hidden="true"
          ></div>

          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
              <div class="lg:order-1">
                <h2 class="text-4xl md:text-5xl font-bold font-serif tracking-tight text-balance">
                  <span class="bg-gradient-to-r from-secondary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
                    What To Expect
                  </span>
                </h2>
                <div class="mt-6 max-w-xl">
                  <div class="bg-gradient-to-br from-white/90 via-primary-50/30 to-secondary-50/30 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-secondary-200/50 dark:border-secondary-700/50">
                    <p class="text-lg leading-7 text-primary-700 dark:text-primary-300">
                      Our clay and personal transformation workshops begin with guided meditations and reflections, leading a small group into a deeper self-awareness, followed by a hands-on, mindful clay experience.
                    </p>
                    <p class="mt-4 text-lg leading-7 text-primary-700 dark:text-primary-300">
                      No clay experience is necessary. Our facilitators gently guide the process, allowing each participant to engage with the clay without worrying about "doing it right."
                    </p>
                    <p class="mt-4 text-lg leading-7 text-primary-700 dark:text-primary-300">
                      Whether you're a beginner or experienced, working with clay offers a valuable, enriching experience for your body, mind, and heart. Our classes are designed to focus on the process, letting the clay teach you about yourself.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-10 lg:mt-0 lg:order-2">
                <Image
                  src="/images/a3.jpg"
                  alt="Clay Experience"
                  class="w-full max-w-lg lg:max-w-none rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section class="relative overflow-hidden py-20">
          <div
            class="absolute inset-0 bg-gradient-to-r from-secondary-50/50 to-primary-50/50 dark:from-secondary-900/50 dark:to-primary-900/50"
            aria-hidden="true"
          ></div>
          <div class="absolute top-20 right-10 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
          <div
            class="absolute bottom-20 left-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-float"
            style="animation-delay: -2s;"
            aria-hidden="true"
          ></div>
          <div
            class="absolute top-1/3 right-1/4 w-16 h-16 bg-tertiary-300/20 rounded-full blur-xl animate-float"
            style="animation-delay: -4s;"
            aria-hidden="true"
          ></div>

          <div id="clay" class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl md:text-5xl font-bold font-serif tracking-tight text-center">
              <span class="bg-gradient-to-r from-secondary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
                The Calming Benefits of Clay
              </span>
            </h2>
            <div class="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  class="bg-gradient-to-br from-white/90 via-primary-50/30 to-secondary-50/30 dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-secondary-200/50 dark:border-secondary-700/50"
                >
                  <benefit.icon class="w-6 h-6 text-secondary-600 dark:text-secondary-300 mb-2 " />
                  <p class="text-lg font-semibold tracking-tight text-secondary-900 dark:text-secondary-100">
                    {benefit.title}
                  </p>
                  <p class="mt-2 text-lg leading-7 text-primary-700 dark:text-primary-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
});