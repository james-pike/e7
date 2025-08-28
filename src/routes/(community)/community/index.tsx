import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

interface Partner {
  name: string;
  description: string;
  image: string;
}

const COMMUNITY_PARTNERS: Partner[] = [
  {
    name: "Hintonburg Pottery",
    description:
      "This is a short description of Partner 1. They are involved in community wellness and arts. This is a short description of Partner 1. They are involved in community wellness and arts.",
    image: "/images/hp2.png",
  },
  {
    name: "PLEO",
    description: "Partner 2 supports youth programs and creative projects in our area.",
    image: "/images/pleo.jpg",
  },
  {
    name: "ORCC",
    description: "Partner 3 is dedicated to environmental sustainability and local green initiatives.",
    image: "/images/orc.png",
  },
  {
    name: "Parkdale Food Centre",
    description: "Partner 4 organizes community gatherings and educational workshops.",
    image: "/images/parkdale.webp",
  },
  {
    name: "Soul Space",
    description: "Partner 5 provides mentorship and skill-building opportunities for local youth.",
    image: "/images/soulspace.png",
  },
  {
    name: "Wellington West BIA",
    description: "Partner 6 fosters cultural connections through arts and music programs.",
    image: "/images/wellington.jpeg",
  },

];

export default component$(() => {
  const expandedPartner = useSignal<string | null>(null);

  return (
    <section class="relative overflow-hidden py-12 md:py-16">
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header and Subtitle */}
        <div class="text-center mb-12">
          <h1 class="!text-4xl md:!text-5xl font-bold xdxd mb-6">
            <span class="bg-gradient-to-r from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Community Connections
            </span>
          </h1>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            We collaborate with a diverse network of community partners to bring creativity, wellness, and connection to everyone. Whether it’s a team-building retreat, a space for reflection, or a chance to reconnect with creativity, our workshops provide a welcoming environment for groups dedicated to making a difference in our communities.
          </p>
        </div>

        {/* Masonry Column Layout */}
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-4">
          {COMMUNITY_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              class={[
                "break-inside-avoid group backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 ease-in-out",
                "hover:shadow-xl hover:border-secondary-200 hover:bg-white/45",
                expandedPartner.value === partner.name
                  ? "bg-white/40 border-secondary-200"
                  : "bg-white/35 border-primary-200 dark:border-secondary-700",
              ]}
              style={{
                minHeight: "260px",
                transitionProperty: "transform, opacity, margin, box-shadow, background-color, border-color",
                transform: expandedPartner.value === partner.name ? "scale(1.02)" : "scale(1)",
              }}
              role="button"
              tabIndex={0}
              aria-expanded={expandedPartner.value === partner.name}
              onClick$={() => {
                expandedPartner.value = expandedPartner.value === partner.name ? null : partner.name;
              }}
            >
              {/* Image */}
              {partner.image && (
                <div
                  class="h-32 sm:h-40 w-full bg-center bg-contain bg-no-repeat rounded-t-2xl"
                  style={{ backgroundImage: `url('${partner.image}')` }}
                />
              )}

              {/* Info */}
              <div class="flex flex-col items-center p-3 pt-6">
                <h3 class="text-xl sm:text-2xl font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                  {partner.name}
                </h3>
                <p
                  class={[
                    "text-primary-700 dark:text-primary-300 text-sm sm:text-base leading-relaxed text-center mt-2 transition-all duration-300 ease-in-out",
                    expandedPartner.value !== partner.name && "line-clamp-2",
                  ]}
                  style={{
                    maxHeight: expandedPartner.value === partner.name ? "1000px" : "4.5em",
                    overflow: "hidden",
                    transitionProperty: "max-height",
                  }}
                >
                  {partner.description}
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
  title: `${SITE.title} - Community Connections`,
  meta: [
    {
      name: "description",
      content: "Discover our community partners and learn about their role in fostering connection and creativity.",
    },
  ],
};