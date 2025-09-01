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
    name: "Ottawa Rape Crisis Centre",
    description: "The Ottawa Rape Crisis Centre champions environmental sustainability and local green initiatives, promoting a healthier planet and community.",
    image: "/images/somerset.webp",
  },
  {
    name: "PLEO",
    description: "PLEO empowers local youth through dynamic programs and creative projects, nurturing talent and innovation within the community.",
    image: "/images/pleo.png",
  },
  {
    name: "Soul Space",
    description: "Soul Space offers mentorship and skill-building opportunities, rooting local youth in growth and development through supportive programs.",
    image: "/images/soulspace.png",
  },
  {
    name: "Parkdale Food Centre",
    description: "Parkdale Food Centre builds strong community bonds by organizing gatherings and offering educational workshops on nutrition and sustainability.",
    image: "/images/parkdale.png",
  },
  {
    name: "Ottawa Rape Crisis Centre",
    description: "The Ottawa Rape Crisis Centre champions environmental sustainability and local green initiatives, promoting a healthier planet and community.",
    image: "/images/orc.png",
  },
];

export default component$(() => {
  const expandedPartner = useSignal<string | null>(COMMUNITY_PARTNERS[0].name); // Default to first partner

  // Function to distribute partners in row-major order
  const distributePartners = (partners: typeof COMMUNITY_PARTNERS, columns: number) => {
    const result = Array.from({ length: columns }, () => [] as typeof COMMUNITY_PARTNERS);
    partners.forEach((partner, index) => {
      const columnIndex = index % columns; // Distribute across columns for each row
      result[columnIndex].push(partner);
    });
    return result;
  };

  // Responsive column counts
  const lgColumns = 3; // 3 columns for lg (≥1024px)
  const columns = distributePartners(COMMUNITY_PARTNERS, lgColumns);

  return (
    <section class="relative overflow-hidden py-20 md:py-28">
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header and Subtitle */}
        <div class="text-center mb-12">
          <h1 class="!text-4xl md:!text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Our Community Connections
            </span>
          </h1>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            We collaborate with a diverse network of community groups to bring creativity, wellness, and connection to one another. Our workshops create a space for reflection, creativity, and team-building, welcoming groups who are committed to making a positive impact in their communities.
          </p>
        </div>

        {/* Flexbox Layout for Columns */}
        <div class="flex flex-col sm:flex-row sm:[&>*:nth-child(n+3)]:hidden lg:[&>*:nth-child(n+3)]:flex gap-5">
          {columns.map((columnPartners, index) => (
            <div
              key={index}
              class="flex-1 flex flex-col gap-5"
              style={{ minWidth: '0' }} // Prevents flex items from overflowing
            >
              {columnPartners.map((partner) => (
                <div
                  key={partner.name}
                  class={[
                    "group backdrop-blur-sm border-2 pt-4 rounded-2xl transition-all duration-500 ease-in-out",
                    "hover:shadow-xl hover:border-secondary-200 hover:bg-white/45",
                    expandedPartner.value === partner.name
                      ? "bg-white/40 border-secondary-200 z-10"
                      : "bg-white/35 border-primary-200 dark:border-secondary-700",
                  ]}
                  style={{
                    transitionProperty: "transform, box-shadow, background-color, border-color",
                    transform: expandedPartner.value === partner.name ? "scale(1.02)" : "scale(1)",
                    minHeight: "200px",
                    // Removed opacity from transition to avoid flicker
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
                    <p
                      class={[
                        "text-primary-700 dark:text-primary-300 text-sm sm:text-base leading-relaxed text-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                        expandedPartner.value !== partner.name && "line-clamp-2",
                      ]}
                      style={{
                        maxHeight: expandedPartner.value === partner.name ? "600px" : "3em", // Adjusted max-height
                        overflow: "hidden",
                        transitionProperty: "max-height, opacity",
                        opacity: expandedPartner.value === partner.name ? 1 : 0.9, // Subtle opacity transition
                      }}
                    >
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
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