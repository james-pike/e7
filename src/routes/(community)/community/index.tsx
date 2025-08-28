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
    description: "Hintonburg Pottery is a vibrant clay studio where the community comes together to create, fostering wellness and artistic expression through hands-on pottery experiences.",
    image: "/images/hp2.png",
  },
    {
    name: "Wellington West BIA",
    description: "Wellington West BIA cultivates cultural connections, enriching the area with diverse arts and music programs that celebrate local heritage.",
    image: "/images/wellington.jpeg",
  },
  {
    name: "PLEO",
    description: "PLEO empowers local youth through dynamic programs and creative projects, nurturing talent and innovation within the community.",
    image: "/images/pleo.png",
  },
 
  {
    name: "Parkdale Food Centre",
    description: "Parkdale Food Centre builds strong community bonds by organizing gatherings and offering educational workshops on nutrition and sustainability.",
    image: "/images/parkdale.png",
  },
  {
    name: "Soul Space",
    description: "Soul Space offers mentorship and skill-building opportunities, rooting local youth in growth and development through supportive programs.",
    image: "/images/soulspace.png",
  },

   {
    name: "Ottawa Rape Crisis Centre",
    description: "The Ottawa Rape Crisis Centre champions environmental sustainability and local green initiatives, promoting a healthier planet and community.",
    image: "/images/orc.png",
  },
];

export default component$(() => {
  const expandedPartner = useSignal<string | null>(COMMUNITY_PARTNERS[0].name); // Default to first partner

  return (
    <section class="relative overflow-hidden py-12 md:py-12">
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header and Subtitle */}
        <div class="text-center mb-12">
          <h1 class="!text-4xl md:!text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Community Connections
            </span>
          </h1>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            We collaborate with a diverse network of community partners to bring creativity, wellness, and connection to everyone. Whether it’s a team-building retreat, a space for reflection, or a chance to reconnect with creativity, our workshops provide a welcoming environment for groups dedicated to making a difference in our communities.
          </p>
        </div>

        {/* Masonry Column Layout */}
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {COMMUNITY_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              class={[
                "break-inside-avoid group backdrop-blur-sm border-2 pt-4 rounded-2xl transition-all duration-300 ease-in-out",
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
              <div class="flex flex-col items-center p-3 pt-2">
                {/* <h3 class="text-xl sm:text-2xl font-semibold text-secondary-900 dark:text-secondary-100 mb-1">
                  {partner.name}
                </h3> */}
                <p
                  class={[
                    "text-primary-700 dark:text-primary-300 text-sm sm:text-base leading-relaxed text-center transition-all duration-300 ease-in-out",
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