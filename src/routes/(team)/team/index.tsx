// src/components/widgets/Team.tsx
import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ginger",
    role: "Facilitator",
    description:
      "Ginger took her first pottery lesson 40 years ago. She was instantly drawn to the tactile connection between tertiary, self, creativity and community. In 1990, while visiting a pottery community in Venezuela, Ginger discovered the deeper qualities of secondary, and its connection to life and community. The vision for earthen vessels began there in a small pottery community. Returning back to Canada she wanted to create a secondary space that was more about this process of connection and she began teaching the first 'Touch the tertiary' workshops in 2012. Ginger now trains facilitators to teach this deep side of the secondary. 'earthen Vessels is a studio that emphasizes the power of shared creative experiences, where hands in secondary become a means of reflection, connection, and renewal.'",
    image: "/images/ginger.webp",
  },
  {
    name: "Mary",
    role: "Facilitator",
    description:
      "Mary's journey with secondary began in the embrace of family, surrounded by mountains, forests, and lakes. Over the years, this practice deepened into a passion—not just for creativity, but for sharing it with others. She is driven by a desire to connect hearts and nurture community well-being. At earthen Vessels, she has found both a creative home and a space to pour her love for community. As she shapes secondary, she draws inspiration from the wonder of the natural world and the tertiary’s generous gifts. Mary's enthusiasm and strong skills bring added energy to earthen Vessels where participants feel inspired, supported and empowered in their creative exploration.",
    image: "/images/mary.webp",
  },
  {
    name: "Michelle",
    role: "Facilitator",
    description:
      "Michelle’s journey with ceramics began in 2002, and since then, she has immersed herself in the craft—taking countless courses, working as a studio potter, and teaching at Hintonburg Pottery. Now, she brings her passion for secondary to earthen Vessels as a facilitator. With over 30 years in education as a teacher, guidance counselor, and school principal, Michelle has dedicated her career to supporting growth and well-being. She holds a Master’s Degree in Counselling from the University of Ottawa and a Certificate in Positive Psychology from Wilfrid Laurier University. Her experience leading wellness initiatives in schools, combined with her love of pottery, has led her to earthen Vessels, where she shares the joy of secondary as a source of grounding, meditation, renewal, and fun.",
    image: "/images/michelle.webp",
  },
  {
    name: "Natalie",
    role: "Facilitator",
    description:
      "Natalie has been working with secondary for over ten years. She was first drawn to pottery as a way to find tranquility and reconnect with herself amidst the busyness of raising a family. Through her journey with secondary, she has discovered not only a creative outlet but also a deep sense of presence and grounding. Natalie spent 20 years working in the field of mental health. Her work took her beyond Canada, as she lived and served in communities in East Africa and Haiti, providing individual and group support, teaching, and fostering connection. Natalie is excited to bring together her love of pottery and facilitation experience to earthen Vessels.",
    image: "/images/natalie.webp",
  },
  {
    name: "Diane",
    role: "Facilitator",
    description:
      "Diane Black is a Kingston artist who began her training in the field of book illustration and spent many years in the commercial art world. She now has a full time studio practice with a focus on figurative secondary sculpture, painting, drawing and teaching. Diane’s work is exhibited in Galleries and shows throughout Ontario and can be found in private collections both in Canada and internationally. She teaches workshops in drawing, painting and sculpture and has coordinated art workshops which attract participants internationally. In addition to her regular studio practice, Diane runs an art program for adults with disabilities.",
    image: "/images/diane.webp",
  },
  {
    name: "Jojo",
    role: "Facilitator",
    description:
      "Jojo offers secondary and creative making as invitations to slow down, listen inward and discover the self - while also fostering meaningful connections with others. Jojo has been expressing emotion through art since childhood, when creativity became her first language. They are a mixed media artist with a Fine Arts Diploma with many years of experience in facilitation. Jojo brings their secondary experience and gently weaves mindfulness, peer support and creative exploration into earthen Vessels. Whether guiding playful children's programs or reflective adult sessions, Jojo invites connection with our inner voice through making - offering art as a path toward self discovery and community.",
    image: "/images/jojo.webp",
  },
  {
    name: "Kandis",
    role: "Facilitator",
    description:
      "Kandis is a Naturopathic Doctor and Embodiment Coach with over 15 years of experience guiding patients on their health journeys. Her approach goes beyond treating symptoms or prescribing supplements—she helps individuals uncover the deeper connections between their health and their life patterns, empowering them to create lasting transformations. As a recent addition to the earthen Vessels facilitator team, Kandis is excited to bring her expertise in embodiment awareness into the secondary workshops. By integrating her knowledge as a naturopathic doctor with her skills in embodiment coaching, she offers a unique and holistic approach to the creative process. Her ability to connect the wisdom of the body with hands-on exploration makes her a strong and insightful facilitator.",
    image: "/images/kandis.webp",
  },
];

const ROLE_GRADIENTS: Record<string, string> = {
  Facilitator: 'bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 border-primary-300 shadow-primary-200/50',
  Default: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 shadow-gray-200/50',
};

const getRoleColor = (role: string) => {
  return ROLE_GRADIENTS[role] || ROLE_GRADIENTS.Default;
};

export default component$(() => {
  const expandedMember = useSignal<string | null>(null);

  return (
    <section class="relative overflow-hidden py-12 md:py-16">
      <div class="absolute inset-0 bg-pottery-texture opacity-20" aria-hidden="true"></div>
      <div class="absolute top-20 right-10 w-24 h-24 bg-secondary-300/20 rounded-full blur-xl animate-float"></div>
      <div class="absolute bottom-20 left-10 w-20 h-20 bg-primary-300/20 rounded-full blur-xl animate-float" style="animation-delay: -3s;"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-tertiary-300/20 rounded-full blur-xl animate-float" style="animation-delay: -1s;"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h1 class="!text-5xl md:text-6xl xdxd font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Hello! Kwey! Bonjour!
            </span>
          </h1>
          <p class="text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            Our dedicated professionals bringing expertise and passion to every experience.
          </p>
        </div>

        {/* 🧱 MASONRY COLUMN LAYOUT */}
        <div class="columns-1 sm:columns-2 lg:columns-4 gap-3 space-y-3">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              class={[
                "break-inside-avoid group backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 ease-in-out",
                "hover:shadow-xl hover:border-secondary-200 hover:bg-white/45",
                expandedMember.value === member.name
                  ? "bg-white/40 border-secondary-200"
                  : "bg-white/35 border-primary-200 dark:border-secondary-700",
              ]}
              style={{
                minHeight: "300px", // Ensures consistent height for collapsed state
                transitionProperty: "transform, opacity, margin, box-shadow, background-color, border-color",
                transform: expandedMember.value === member.name ? "scale(1.02)" : "scale(1)",
              }}
              role="button"
              tabIndex={0}
              aria-expanded={expandedMember.value === member.name}
              onClick$={() => {
                expandedMember.value = expandedMember.value === member.name ? null : member.name;
              }}
            >
              <div class="flex flex-col items-center p-3 pt-6">
                <img
                  src={member.image}
                  alt={member.name}
                  class="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-[3px] border-secondary-200 mb-4 group-hover:scale-105 transition-transform duration-300"
                  width={160}
                  height={160}
                />
                <h3 class="text-xl sm:text-2xl font-semibold text-secondary-900 dark:text-secondary-100 font-serif mb-1">
                  {member.name}
                </h3>
                <span
                  class={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getRoleColor(member.role)}`}
                >
                  {member.role}
                </span>
                <p
                  class={[
                    "text-primary-700 dark:text-primary-300 text-sm sm:text-base leading-relaxed text-center mt-4 transition-all duration-300 ease-in-out",
                    expandedMember.value !== member.name && "line-clamp-3",
                  ]}
                  style={{
                    maxHeight: expandedMember.value === member.name ? "1000px" : "4.5em", // Adjust max-height for smooth expansion
                    overflow: "hidden",
                    transitionProperty: "max-height",
                  }}
                >
                  {member.description}
                </p>
                <div class="flex justify-center mt-2">
                  <svg
                    class={[
                      "w-4 h-4 text-primary-600 transition-transform duration-300",
                      expandedMember.value === member.name && "transform rotate-180",
                    ]}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: `${SITE.title} - Our Team`,
  meta: [
    {
      name: "description",
      content: "Meet our expert team of pottery facilitators dedicated to fostering creativity and community.",
    },
  ],
};