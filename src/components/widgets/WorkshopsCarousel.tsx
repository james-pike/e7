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
  isActive?: boolean; // Optional to match original interface compatibility
}

interface WorkshopsGridProps {
  workshops: Workshop[];
}

export default component$<WorkshopsGridProps>(({ workshops }) => {
  const expandedWorkshop = useSignal<number | null>(null);

  // Hardcoded dummy inactive workshops
  const dummyInactiveWorkshops: Workshop[] = [
    {
      id: 9991,
      title: "Clay Bowls: Open Like a Bowl",
      description:
        "A reflective workshop exploring openness and receptivity through crafting clay bowls. Participants connected with the tactile process of shaping clay to foster mindfulness and creativity.",
      date: "2025-03-15",
      duration: "2 hours",
      price: "$45",
      image: "/images/bowl-workshop.webp",
      instructor: "Ginger",
      spots: 12,
      isActive: false,
    },
    {
      id: 9992,
      title: "Lanterns for the Journey",
      description:
        "In this workshop, participants crafted clay lanterns to symbolize guidance and hope. The session emphasized creativity, community, and personal reflection through hands-on clay work.",
      date: "2025-02-10",
      duration: "3 hours",
      price: "$60",
      image: "/images/lantern-workshop.webp",
      instructor: "Michelle",
      spots: 10,
      isActive: false,
    },
    {
      id: 9993,
      title: "Like the Turtle: Patience in Clay",
      description:
        "This workshop focused on patience and resilience, guiding participants to create turtle-inspired clay pieces. A meditative experience combining clay work with themes of growth and perseverance.",
      date: "2024-11-20",
      duration: "2.5 hours",
      price: "$50",
      image: "/images/turtle-workshop.webp",
      instructor: "Natalie",
      spots: 8,
      isActive: false,
    },
  ];

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
        {/* Past Workshops (dummy workshops only) */}
        <div class="mt-12">
          <h2 class="text-3xl font-bold font-serif mb-8 text-secondary-900 dark:text-primary-100 text-center">
            <span class="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-clip-text text-transparent">
              Past Workshops
            </span>
          </h2>
          <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {dummyInactiveWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                class={[
                  "break-inside-avoid group backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl hover:border-gray-200 hover:bg-gray-50/45",
                  expandedWorkshop.value === workshop.id
                    ? "bg-gray-50/40 border-gray-200"
                    : "bg-gray-50/35 border-gray-200 dark:border-gray-600",
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
                    class="h-40 w-full bg-center bg-cover rounded-t-2xl opacity-70"
                    style={{ backgroundImage: `url('${workshop.image}')` }}
                  />
                )}

                {/* Info */}
                <div class="flex flex-col p-4 items-center">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 text-center line-clamp-2">
                    {workshop.title}
                  </h3>

                  {/* Icons line above description */}
                  <div class="flex flex-wrap gap-3 text-xs text-gray-700 dark:text-gray-300 mt-2 justify-center">
                    {workshop.duration && (
                      <span class="flex items-center gap-1">
                        <LuClock class="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        {workshop.duration}
                      </span>
                    )}
                    {workshop.instructor && (
                      <span class="flex items-center gap-1">
                        <LuUser class="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        {workshop.instructor}
                      </span>
                    )}
                    {workshop.price && (
                      <span class="flex items-center gap-1">{workshop.price}</span>
                    )}
                    {workshop.spots && <span>{workshop.spots} spots</span>}
                    {workshop.date && (
                      <span class="flex items-center gap-1">
                        <LuCalendar class="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        {new Date(workshop.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    class={[
                      "text-gray-700 dark:text-gray-300 text-sm text-center mt-3 transition-all duration-300 ease-in-out",
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section class="relative overflow-hidden py-12 md:py-16">
      <div class="relative max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header and Subtitle */}
        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl !xdxd font-bold mb-6">
            <span class="bg-gradient-to-r xdxd from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Our Offerings
            </span>
          </h1>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            Our offerings are unique and evolving. We currently offer themed workshops from our 'Touch The Clay' series: Open Like a Bowl - ready to be filled, Lanterns for the Journey, and Like the Turtle - practising patience and resilience. Labyrinth and clay. Upcoming 4 and 6 week courses will be posted soon. We also create customized workshops for private groups. Stay tuned for more.
          </p>
        </div>

        {/* Upcoming Workshops */}
        <h2 class="text-3xl font-bold mb-8 text-secondary-900 dark:text-primary-100 text-center">
          Upcoming Classes
        </h2>
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
                />
              )}

              {/* Info */}
              <div class="flex flex-col p-4 items-center">
                <h3 class="text-lg font-bold text-secondary-900 dark:text-secondary-100 text-center line-clamp-2">
                  {workshop.title}
                </h3>

                {/* Icons line above description */}
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
                    <span class="flex items-center gap-1">{workshop.price}</span>
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
              </div>
            </div>
          ))}
        </div>

        {/* Past Workshops (dummy workshops only) */}
        <div class="mt-12">
          <h2 class="text-3xl font-bold mb-8 text-secondary-900 dark:text-primary-100 text-center">
            <span class="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-clip-text text-transparent">
              Past Workshops
            </span>
          </h2>
          <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {dummyInactiveWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                class={[
                  "break-inside-avoid group backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl hover:border-gray-200 hover:bg-gray-50/45",
                  expandedWorkshop.value === workshop.id
                    ? "bg-gray-50/40 border-gray-200"
                    : "bg-gray-50/35 border-gray-200 dark:border-gray-600",
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
                    class="h-40 w-full bg-center bg-cover rounded-t-2xl opacity-70"
                    style={{ backgroundImage: `url('${workshop.image}')` }}
                  />
                )}

                {/* Info */}
                <div class="flex flex-col p-4 items-center">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 text-center line-clamp-2">
                    {workshop.title}
                  </h3>

                  {/* Icons line above description */}
                  <div class="flex flex-wrap gap-3 text-xs text-gray-700 dark:text-gray-300 mt-2 justify-center">
                    {workshop.duration && (
                      <span class="flex items-center gap-1">
                        <LuClock class="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        {workshop.duration}
                      </span>
                    )}
                    {workshop.instructor && (
                      <span class="flex items-center gap-1">
                        <LuUser class="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        {workshop.instructor}
                      </span>
                    )}
                    {workshop.price && (
                      <span class="flex items-center gap-1">{workshop.price}</span>
                    )}
                    {workshop.spots && <span>{workshop.spots} spots</span>}
                    {workshop.date && (
                      <span class="flex items-center gap-1">
                        <LuCalendar class="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        {new Date(workshop.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    class={[
                      "text-gray-700 dark:text-gray-300 text-sm text-center mt-3 transition-all duration-300 ease-in-out",
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});