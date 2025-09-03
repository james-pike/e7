import { component$, useSignal } from "@builder.io/qwik";

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
  isActive?: boolean;
}

interface WorkshopsGridProps {
  workshops: Workshop[];
}

export default component$<WorkshopsGridProps>(({ workshops }) => {
  const expandedWorkshop = useSignal<number | null>(null);

  const dummyInactiveWorkshops: Workshop[] = [
    {
      id: 9991,
      title: "Summer On The Table",
      description:
        "A reflective workshop exploring openness and receptivity through crafting clay bowls. Participants connected with the tactile process of shaping clay to foster mindfulness and creativity.",
      date: "2025-03-15",
      duration: "2 hours",
      price: "$45",
      image: "/images/summer.jpg",
      instructor: "Ginger",
      spots: 12,
      isActive: false,
    },
    {
      id: 9992,
      title: "Whimsy Summer Animals",
      description:
        "In this workshop, participants crafted clay lanterns to symbolize guidance and hope. The session emphasized creativity, community, and personal reflection through hands-on clay work.",
      date: "2025-02-10",
      duration: "3 hours",
      price: "$60",
      image: "/images/lamma.jpg",
      instructor: "Michelle",
      spots: 10,
      isActive: false,
    },
    {
      id: 9993,
      title: "Clay Labyrinth",
      description:
        "This workshop focused on patience and resilience, guiding participants to create turtle-inspired clay pieces. A meditative experience combining clay work with themes of growth and perseverance.",
      date: "2024-11-20",
      duration: "2.5 hours",
      price: "$50",
      image: "/images/labyrinth.jpeg",
      instructor: "Natalie",
      spots: 8,
      isActive: false,
    },
  ];

  if (!workshops || workshops.length === 0) {
    return (
      <section class="relative overflow-hidden py-16 text-center">
        <h2 class="text-4xl md:text-5xl xdxd font-bold font-serif mb-6 text-secondary-900 dark:text-primary-100">
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
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div class="h-40 w-full rounded-t-2xl bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      class="h-full w-full object-cover"
                      style={{
                        objectPosition: workshop.id === 9991 ? "50% 20%" : "50% 50%",
                      }}
                    />
                  </div>
                )}

                {/* Info */}
                <div class="flex flex-col p-4 items-center">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 text-center line-clamp-2">
                    {workshop.title}
                  </h3>

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
      <div class="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header and Subtitle */}
        <div class="text-center mb-12">
          <h1 class="!text-5xl md:!text-5xl xdxd font-bold mb-6">
            <span class="bg-gradient-to-r from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Our Offerings
            </span>
          </h1>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            Explore our workshops and courses designed to foster creativity and connection. From beginner sessions to advanced techniques, we offer a range of experiences tailored to all levels.
            Join us for guided sessions where you’ll learn new skills, connect with others, and find joy in the creative process.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div class="h-40 w-full rounded-t-2xl bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    class="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Info */}
              <div class="flex flex-col p-4 items-center">
                <h3 class="text-lg font-bold text-secondary-900 dark:text-secondary-100 text-center line-clamp-2">
                  {workshop.title}
                </h3>

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
          <h2 class="!text-3xl xdxd font-bold mb-8 text-secondary-900 dark:text-primary-100 text-center">
            <span class="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-clip-text text-transparent">
              Previous Offerings
            </span>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div class="h-40 w-full rounded-t-2xl bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      class="h-full w-full object-cover"
                      style={{
                        objectPosition: workshop.id === 9991 ? "50% 85%" : "50% 50%",
                      }}
                    />
                  </div>
                )}

                {/* Info */}
                <div class="flex flex-col p-4 items-center">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 text-center line-clamp-2">
                    {workshop.title}
                  </h3>

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