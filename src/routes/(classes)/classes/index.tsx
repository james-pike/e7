import { component$, useSignal } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

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
  // Removed workshops prop since we're hardcoding now
}

export default component$<WorkshopsGridProps>(() => {
  const expandedWorkshop = useSignal<number | null>(null);

  // Combined hardcoded and dummy inactive workshops into a single array
  const allWorkshops: Workshop[] = [
    {
      id: 1,
      title: "Open Like a Bowl - To Be Filled",
      description:
        "A bowl gracefully embodies openness and sustenance. A welcoming vessel ready to receive what we pour in it.",
      date: "2025-09-15T14:00:00Z", // Future date: Mid-September 2025
      duration: "2.5 hours",
      price: "$55",
      image: "/images/bowls.jpeg", // Replace with actual image path
      instructor: "Ginger",
      spots: 15,
      isActive: true,
    },
    {
      id: 2,
      title: "Lanterns - Tending To My Fire",
      description:
        "Create a clay lantern in this community-focused workshop and explore how to tend to your own fire and rekindle the joy from within.",
      date: "2025-10-05T18:30:00Z", // Future date: Early October 2025
      duration: "3 hours",
      price: "$65",
      image: "/images/lantern.jpeg", // Replace with actual image path
      instructor: "Michelle",
      spots: 12,
      isActive: true,
    },
    {
      id: 3,
      title: "Like The Turtle",
      description:
        "Explore the symbols of the turtle and what this creature can teach us about our inner world and how we show up in our day-to-day lives.",
      date: "2025-10-20T13:00:00Z", // Future date: Late October 2025
      duration: "2 hours",
      price: "$45",
      image: "/images/turtle.jpeg", // Replace with actual image path
      instructor: "Natalie",
      spots: 10,
      isActive: true,
    },
    {
      id: 4,
      title: "Hug In A Mug",
      description:
        "Create a mug to hold your favourite drink. Join us for a unique workshop where you will hand-craft your very own mug.",
      date: "2025-11-10T16:00:00Z", // Future date: Mid-November 2025
      duration: "2.5 hours",
      price: "$50",
      image: "/images/mug.jpg", // Replace with actual image path
      instructor: "Mary",
      spots: 14,
      isActive: true,
    },
    {
      id: 9991,
      title: "Summer On The Table",
      description:
        "Dive into a reflective journey with this workshop, where crafting clay bowls becomes a meditative exploration of openness and receptivity. Participants immerse themselves in the tactile art of shaping clay, fostering mindfulness, creativity, and a deep sense of connection.",
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
        "Unleash your creativity in this animal inspired workshop. Through hands-on clay work, participants build community, reflect personally, and create colourful keepsakes filled with meaning.",
      date: "2025-02-10",
      duration: "3 hours",
      price: "$60",
      image: "/images/lamma.jpg",
      instructor: "Michelle",
      spots: 10,
      isActive: false,
    },
    // {
    //   id: 9993,
    //   title: "Clay Labyrinth",
    //   description:
    //     "This workshop focused on patience and resilience, guiding participants to create turtle-inspired clay pieces. A meditative experience combining clay work with themes of growth and perseverance.",
    //   date: "2024-11-20",
    //   duration: "2.5 hours",
    //   price: "$50",
    //   image: "/images/labyrinth.jpeg",
    //   instructor: "Natalie",
    //   spots: 8,
    //   isActive: false,
    // },
  ];

  return (
    <section class="relative overflow-hidden py-12 md:py-16">
      <div class="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header and Subtitle */}
        <div class="text-center mb-12">
          <h1 class="!text-5xl md:!text-5xl xdxd font-bold mb-6">
            <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-primary-700 bg-clip-text text-transparent">
              Our Offerings
            </span>
          </h1>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            Explore our workshops and courses designed to foster creativity and connection. From beginner sessions to advanced techniques, we offer a range of experiences tailored to all levels.
            Join us for guided sessions where you’ll learn new skills, connect with others, and find joy in the creative process.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allWorkshops.map((workshop) => (
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
              <div class="flex flex-col p-4">
                <div class="flex flex-row items-center justify-center gap-4 mb-3">
                  <h3 class="text-base font-bold text-secondary-900 dark:text-secondary-100 line-clamp-1">
                    {workshop.title}
                  </h3>
                  {workshop.isActive ? (
                    <a
                      href="https://bookeo.com/earthenvessels"
                      class="px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200"
                      role="button"
                      aria-label={`Book ${workshop.title}`}
                    >
                      Book
                    </a>
                  ) : (
                    <button
                      class="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-400 text-white text-sm font-medium rounded-xl  transition-all duration-200"
                      aria-label={`Archived ${workshop.title}`}
                      disabled
                    >
                      Archived
                    </button>
                  )}
                </div>

                {/* Description */}
                <p
                  class={[
                    "text-primary-700 dark:text-primary-300 text-sm text-center transition-all duration-300 ease-in-out",
                    expandedWorkshop.value !== workshop.id && "line-clamp-4",
                  ]}
                  style={{
                    maxHeight: expandedWorkshop.value === workshop.id ? "1000px" : "6em",
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
});

export const head: DocumentHead = {
  title: `${SITE.title} - Classes`,
  meta: [
    {
      name: "description",
      content:
        "Discover our community partners and learn about their role in fostering connection and creativity.",
    },
  ],
};