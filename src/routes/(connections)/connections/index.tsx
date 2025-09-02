import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

interface Partner {
  name: string;
  description: string;
  image: string;
  website: string;
}

const COMMUNITY_PARTNERS: Partner[] = [
  {
    name: "Hintonburg Pottery",
    description: "Hintonburg Pottery is a vibrant clay studio where the community comes together to create, fostering wellness and artistic expression through hands-on pottery experiences. Extra line to test fifth line of height.",
    image: "/images/hp2.png",
    website: "https://www.hintonburgpottery.ca/",
  },
  {
    name: "Wellington West BIA",
    description: "Wellington West BIA cultivates cultural connections, enriching the area with diverse arts and music programs that celebrate local heritage.",
    image: "/images/wellington.jpeg",
    website: "https://www.wellingtonwest.ca/",
  },
  {
    name: "Somerset Health & Wellness",
    description: "The Ottawa Rape Crisis Centre champions environmental sustainability and local green initiatives, promoting a healthier planet and community.",
    image: "/images/somerset.webp",
    website: "https://somersethealth.ca/",
  },
  {
    name: "PLEO",
    description: "PLEO empowers local youth through dynamic programs and creative projects, nurturing talent and innovation within the community.",
    image: "/images/pleo.png",
    website: "https://pleo.on.ca/",
  },
  {
    name: "Soul Space",
    description: "Soul Space offers mentorship and skill-building opportunities, rooting local youth in growth and development through supportive programs.",
    image: "/images/soulspace.png",
    website: "https://www.soulspaceottawa.ca/",
  },
  {
    name: "Parkdale Food Centre",
    description: "Parkdale Food Centre builds strong community bonds by organizing gatherings and offering educational workshops on nutrition and sustainability.",
    image: "/images/parkdale.png",
    website: "https://parkdalefoodcentre.ca/",
  },
  {
    name: "Ottawa Rape Crisis Centre",
    description: "The Ottawa Rape Crisis Centre champions environmental sustainability and local green initiatives, promoting a healthier planet and community.",
    image: "/images/orc.png",
    website: "https://orcc.net/",
  },
];

// Helper function to extract domain from URL
const getDomain = (url: string) => {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, ""); // Remove 'www.' if present
  } catch (e) {
    return url; // Fallback to raw URL if parsing fails
  }
};

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
    <section class="relative overflow-hidden py-12 md:py-16">
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header and Subtitle */}
        <div class="text-center mb-12">
          <h1 class="!text-4xl md:!text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r xdxd from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
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
              style={{ minWidth: "0" }} // Prevents flex items from overflowing
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
                    <div
                      class="relative w-full flex items-center justify-center mb-2 group/link"
                      style={{
                        transitionProperty: "all",
                        transitionDuration: "200ms",
                      }}
                    >
                      <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-200 underline  decoration-2 underline-offset-4 group-hover/link:text-secondary-800 dark:group-hover/link:text-secondary-800 transition-colors duration-200 ease-in-out">
                        {partner.name}
                      </h3>
                      <a
                        href={partner.website}
                        class="relative pl-2 text-primary-600 dark:text-primary-400 underline decoration-secondary-800 decoration-2 underline-offset-4 group-hover/link:text-secondary-800 dark:group-hover/link:text-secondary-800 group-hover/link:scale-110 transition-all duration-200 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${partner.name} website`}
                      >
                        <svg
                          class="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover/link:block text-sm text-primary-800 dark:text-primary-200 bg-white dark:bg-gray-800 border border-secondary-800 rounded px-2 py-1 shadow-md z-10 max-w-[200px] truncate">
                          {getDomain(partner.website)}
                        </span>
                      </a>
                    </div>
                    <div class="relative flex flex-col items-center">
                      {/* Description (commented out as in original) */}
                      {/* <p
                        class={[
                          "text-primary-700 dark:text-primary-300 text-sm sm:text-base leading-relaxed text-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                          expandedPartner.value !== partner.name && "line-clamp-3",
                        ]}
                        style={{
                          maxHeight: expandedPartner.value === partner.name ? "600px" : "4.5em",
                          overflow: "hidden",
                          transitionProperty: "max-height, opacity",
                          opacity: expandedPartner.value === partner.name ? 1 : 0.9,
                        }}
                      >
                        {partner.description}
                      </p> */}
                    </div>
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