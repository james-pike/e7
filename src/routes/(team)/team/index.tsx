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

// Updated Team Members with New Descriptions
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ginger",
    role: "Facilitator",
    description:
      "Ginger took her first pottery lesson 40 years ago. She was instantly drawn to the tactile connection between earth, self, creativity and community. In 1990, while visiting a pottery community in Venezuela, Ginger discovered the deeper qualities of clay, and its connection to life and community. The vision for earthen vessels began there in a small pottery community. Returning back to Canada she wanted to create a clay space that was more about this process of connection and she began teaching the first 'Touch the Earth' workshops in 2012. Ginger now trains facilitators to teach this deep side of the clay. 'Earthen Vessels is a studio that emphasizes the power of shared creative experiences, where hands in clay become a means of reflection, connection, and renewal.'",
    image: "/images/ginger.webp",
  },
  {
    name: "Mary",
    role: "Facilitator",
    description:
      "Mary's journey with clay began in the embrace of family, surrounded by mountains, forests, and lakes. Over the years, this practice deepened into a passion—not just for creativity, but for sharing it with others. She is driven by a desire to connect hearts and nurture community well-being. At Earthen Vessels, she has found both a creative home and a space to pour her love for community. As she shapes clay, she draws inspiration from the wonder of the natural world and the earth’s generous gifts. Mary's enthusiasm and strong skills bring added energy to Earthen Vessels where participants feel inspired, supported and empowered in their creative exploration.",
    image: "/images/mary.webp",
  },
  {
    name: "Kandis",
    role: "Facilitator",
    description:
      "Kandis is a Naturopathic Doctor and Embodiment Coach with over 15 years of experience guiding patients on their health journeys. Her approach goes beyond treating symptoms or prescribing supplements—she helps individuals uncover the deeper connections between their health and their life patterns, empowering them to create lasting transformations. As a recent addition to the Earthen Vessels facilitator team, Kandis is excited to bring her expertise in embodiment awareness into the clay workshops. By integrating her knowledge as a naturopathic doctor with her skills in embodiment coaching, she offers a unique and holistic approach to the creative process. Her ability to connect the wisdom of the body with hands-on exploration makes her a strong and insightful facilitator.",
    image: "/images/kandis.webp",
  },
  {
    name: "Michelle",
    role: "Facilitator",
    description:
      "Michelle’s journey with ceramics began in 2002, and since then, she has immersed herself in the craft—taking countless courses, working as a studio potter, and teaching at Hintonburg Pottery. Now, she brings her passion for clay to Earthen Vessels as a facilitator. With over 30 years in education as a teacher, guidance counselor, and school principal, Michelle has dedicated her career to supporting growth and well-being. She holds a Master’s Degree in Counselling from the University of Ottawa and a Certificate in Positive Psychology from Wilfrid Laurier University. Her experience leading wellness initiatives in schools, combined with her love of pottery, has led her to Earthen Vessels, where she shares the joy of clay as a source of grounding, meditation, renewal, and fun.",
    image: "/images/michelle.webp",
  },
  {
    name: "Natalie",
    role: "Facilitator",
    description:
      "Natalie has been working with clay for over ten years. She was first drawn to pottery as a way to find tranquility and reconnect with herself amidst the busyness of raising a family. Through her journey with clay, she has discovered not only a creative outlet but also a deep sense of presence and grounding. Natalie spent 20 years working in the field of mental health. Her work took her beyond Canada, as she lived and served in communities in East Africa and Haiti, providing individual and group support, teaching, and fostering connection. Natalie is excited to bring together her love of pottery and facilitation experience to Earthen Vessels.",
    image: "/images/natalie.webp",
  },
  {
    name: "Diane",
    role: "Facilitator",
    description:
      "Diane Black is a Kingston artist who began her training in the field of book illustration and spent many years in the commercial art world. She now has a full time studio practice with a focus on figurative clay sculpture, painting, drawing and teaching. Diane’s work is exhibited in Galleries and shows throughout Ontario and can be found in private collections both in Canada and internationally. She teaches workshops in drawing, painting and sculpture and has coordinated art workshops which attract participants internationally. In addition to her regular studio practice, Diane runs an art program for adults with disabilities.",
    image: "/images/diane.webp",
  },
  {
    name: "Jojo",
    role: "Facilitator",
    description:
      "Jojo offers clay and creative making as invitations to slow down, listen inward and discover the self - while also fostering meaningful connections with others. Jojo has been expressing emotion through art since childhood, when creativity became her first language. They are a mixed media artist with a Fine Arts Diploma with many years of experience in facilitation. Jojo brings their clay experience and gently weaves mindfulness, peer support and creative exploration into Earthen Vessels. Whether guiding playful children's programs or reflective adult sessions, Jojo invites connection with our inner voice through making - offering art as a path toward self discovery and community.",
    image: "/images/jojo.webp",
  },

];

// Centralized gradient mapping for roles (aligned with FAQ categories)
const ROLE_GRADIENTS: Record<string, string> = {
  Facilitator: 'bg-gradient-to-r from-sage-100 to-sage-200 text-sage-700 border-sage-300 shadow-sage-200/50',
  Default: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 shadow-gray-200/50',
};

const getRoleColor = (role: string) => {
  return ROLE_GRADIENTS[role] || ROLE_GRADIENTS.Default;
};

export default component$(() => {
  const expandedMember = useSignal<string | null>(null);

  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      {/* Background with pottery texture */}
      <div class="absolute inset-0 bg-pottery-texture opacity-20" aria-hidden="true"></div>

      {/* Floating decorative elements */}
      <div class="absolute top-20 right-10 w-24 h-24 bg-clay-300/20 rounded-full blur-xl animate-float"></div>
      <div class="absolute bottom-20 left-10 w-20 h-20 bg-sage-300/20 rounded-full blur-xl animate-float" style="animation-delay: -3s;"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-earth-300/20 rounded-full blur-xl animate-float" style="animation-delay: -1s;"></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with Logo */}
        <div class="text-center mb-12">
         
          <h1 class="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-clay-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h1>
          <p class="text-xl text-sage-700 dark:text-sage-300 max-w-3xl mx-auto">
            Our dedicated professionals bring expertise and passion to every pottery and community challenge.
          </p>
        </div>

        {/* Team Members Grid */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              class="group bg-gradient-to-br from-sage-50 via-clay-50 to-earth-50 backdrop-blur-sm border-2 border-sage-100 dark:border-clay-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-clay-200 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-expanded={expandedMember.value === member.name}
              onClick$={() => {
                if (expandedMember.value === member.name) {
                  expandedMember.value = null;
                } else {
                  expandedMember.value = member.name;
                }
              }}
            >
              <div class="flex flex-col items-center p-6">
                {/* Team Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  class="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-clay-200 mb-4 group-hover:scale-105 transition-transform duration-300"
                  width={160}
                  height={160}
                />

                {/* Name and Role */}
                <h3 class="text-xl sm:text-2xl font-semibold text-clay-900 dark:text-clay-100 font-serif mb-1">
                  {member.name}
                </h3>
                <span
                  class={`px-3 py-1 rounded-full text-xs font-semibold border-2 shadow-lg ${getRoleColor(
                    member.role
                  )}`}
                >
                  {member.role}
                </span>

                {/* Description */}
                <p
                  class={[
                    "text-sage-700 dark:text-sage-300 text-sm sm:text-base leading-relaxed text-center mt-4",
                    expandedMember.value !== member.name && "line-clamp-3",
                  ]}
                >
                  {member.description}
                </p>

                {/* Chevron Indicator */}
                <div class="flex justify-center mt-2">
                  <svg
                    class={[
                      "w-4 h-4 text-sage-600 transition-transform duration-300",
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

        {/* Contact CTA */}
        <div class="text-center mt-12">
          <div class="bg-gradient-to-r from-sage-50 via-clay-50 to-earth-50 rounded-3xl p-8 md:p-12 border-2 border-clay-100 dark:border-clay-700 shadow-xl">
            <h3 class="text-2xl md:text-3xl font-bold text-clay-900 dark:text-clay-100 font-serif mb-4">
              Want to Work With Us?
            </h3>
            <p class="text-sage-700 dark:text-sage-300 mb-6 max-w-2xl mx-auto">
              Our team is passionate about pottery and community. Contact us to learn about opportunities or workshops!
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-clay-600 via-earth-600 to-clay-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span class="relative z-10">Contact Us</span>
                <div class="absolute inset-0 bg-gradient-to-r from-clay-700 via-earth-700 to-clay-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="mailto:hello@earthen-vessels.com"
                class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-sage-700 bg-gradient-to-r from-white/80 via-sage-50/80 to-clay-50/80 backdrop-blur-sm border-2 border-sage-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-sage-50"
              >
                <span class="relative z-10">Send Email</span>
              </a>
            </div>
          </div>
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