import { component$, useSignal } from "@builder.io/qwik";
import { LuCalendar, LuClock, LuUser } from "@qwikest/icons/lucide";

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
}

export default component$<WorkshopsGridProps>(({ workshops }) => {
  const expandedWorkshop = useSignal<number | null>(null);

  if (!workshops || workshops.length === 0) {
    return (
      <section class="relative overflow-hidden py-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold font-serif mb-6 text-secondary-900 dark:text-primary-100">
          <span class="bg-gradient-to-r from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
            Our Workshops
          </span>
        </h2>
        <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
          No upcoming workshops available at the moment. Check back soon!
        </p>
      </section>
    );
  }

  return (
    <section class="relative overflow-hidden py-6 md:py-10 md:pb-16">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
       

           <div class="mt-0 max-w-4xl text-center mx-auto pb-10">
          <div class="bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 dark:from-gray-800 dark:via-primary-900/30 dark:to-secondary-900/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-secondary-200/50 dark:border-secondary-700/50">
            <div class="text-center mb-12">
          <h1 class="!text-5xl md:text-6xl font-bold xdxd mb-6">
            <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Our Workshops
            </span>
          </h1>
        </div>
        <div class="-mt-2">
            <p class="text-base/7 text-primary-700 dark:text-primary-300">
              Our offerings are unique and evolving. We currently offer themed workshops from our 'Touch The Tertiary' series: Open Like a Bowl - ready to be filled, Lanterns for the Journey, and Like the Turtle - practising patience and resilience. Labyrinth and secondary. Upcoming 4 and 6 week courses will be posted soon.
            </p>
            <p class="mt-4 text-base/7 text-primary-700 dark:text-primary-300">
              We also create customized workshops for private groups. Stay tuned for more.
            </p>
            </div>
          </div>
        </div>

        <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              class={[
                "break-inside-avoid group backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl hover:border-secondary-200 hover:bg-white/45",
                expandedWorkshop.value === workshop.id
                  ? "bg-white/40 border-secondary-200"
                  : "bg-white/35 border-primary-200 dark:border-secondary-700",
              ]}
              style={{
                minHeight: "280px",
                transitionProperty:
                  "transform, opacity, margin, box-shadow, background-color, border-color",
                transform: expandedWorkshop.value === workshop.id ? "scale(1.02)" : "scale(1)",
              }}
              role="button"
              tabIndex={0}
              aria-expanded={expandedWorkshop.value === workshop.id}
              onClick$={() => {
                expandedWorkshop.value =
                  expandedWorkshop.value === workshop.id ? null : workshop.id;
              }}
            >
              {/* Image */}
              {workshop.image && (
                <div
                  class="h-40 w-full bg-center bg-cover rounded-t-2xl"
                  style={{ backgroundImage: `url('${workshop.image}')` }}
                ></div>
              )}

              {/* Info */}
              <div class="flex flex-col p-4 items-center">
                <h3 class="text-lg font-bold text-secondary-900 dark:text-secondary-100 text-center line-clamp-2">
                  {workshop.title}
                </h3>

                {/* 🛠 Icons line above description */}
                <div class="flex flex-wrap gap-3 text-xs text-primary-700 dark:text-primary-300 mt-2 justify-center">
                  {workshop.duration && (
                    <span class="flex items-center gap-1">
                      <LuClock class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      {workshop.duration}
                    </span>
                  )}
                  {workshop.instructor && (
                    <span class="flex items-center gap-1">
                      <LuUser class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      {workshop.instructor}
                    </span>
                  )}
                  {workshop.price && (
                    <span class="flex items-center gap-1">
                      {/* <LuDollarSign class="w-4 h-4 text-primary-600 dark:text-primary-400" /> */}
                      {workshop.price}
                    </span>
                  )}
                  {workshop.spots && <span>{workshop.spots} spots</span>}
                  {workshop.date && (
                    <span class="flex items-center gap-1">
                      <LuCalendar class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      {new Date(workshop.date).toLocaleDateString()}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  class={[
                    "text-primary-700 dark:text-primary-300 text-sm text-center mt-3 transition-all duration-300 ease-in-out",
                    expandedWorkshop.value !== workshop.id && "line-clamp-2",
                  ]}
                  style={{
                    maxHeight: expandedWorkshop.value === workshop.id ? "1000px" : "4.5em",
                    overflow: "hidden",
                    transitionProperty: "max-height",
                  }}
                >
                  {workshop.description}
                </p>
{/* 
                <div class="flex justify-center mt-2">
                  <svg
                    class={[
                      "w-4 h-4 text-primary-600 transition-transform duration-300",
                      expandedWorkshop.value === workshop.id && "transform rotate-180",
                    ]}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
