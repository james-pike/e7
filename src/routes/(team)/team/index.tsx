// src/components/widgets/Team.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

// Hardcoded Team Members
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ginger",
    role: "Facilitator",
    description: "25+ years of experience in residential and commercial lock systems",
    image: "/images/ginger.webp",
  },
  {
    name: "Mary",
    role: "Facilitator",
    description: "Expert in car key programming and vehicle security systems",
    image: "/images/mary.webp",
  },
  {
    name: "Kandis",
    role: "Facilitator",
    description: "Specializes in smart home integration and security solutions",
    image: "/images/kandis.webp",
  },
  {
    name: "Michelle",
    role: "Facilitator",
    description: "Manages 24/7 emergency lockout services with rapid response",
    image: "/images/michelle.webp",
  },
  {
    name: "Natalie",
    role: "Facilitator",
    description: "Specialist in high-security safe installations and openings",
    image: "/images/natalie.webp",
  },
  {
    name: "Diane",
    role: "Facilitator",
    description: "Designs comprehensive security solutions for businesses",
    image: "/images/diane.webp",
  },
  {
    name: "Jojo",
    role: "Facilitator",
    description: "Oversees key duplication and master key systems",
    image: "/images/jojo.webp",
  },
  {
    name: "Amanda Brown",
    role: "Facilitator",
    description: "Ensures top-notch client satisfaction and service coordination",
    image: "/images/ginger.webp",
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
  return (
    <section class="relative overflow-hidden py-16 md:py-20">
      {/* Background with pottery texture */}
      <div class="absolute inset-0 bg-pottery-texture opacity-20" aria-hidden="true"></div>

      {/* Gradient background */}

      {/* Floating decorative elements */}
      <div class="absolute top-20 right-10 w-24 h-24 bg-clay-300/20 rounded-full blur-xl animate-float"></div>
      <div class="absolute bottom-20 left-10 w-20 h-20 bg-sage-300/20 rounded-full blur-xl animate-float" style="animation-delay: -3s;"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-earth-300/20 rounded-full blur-xl animate-float" style="animation-delay: -1s;"></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span class="bg-gradient-to-r from-clay-600 via-earth-600 to-sage-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h1>
          <p class="text-xl text-sage-700 dark:text-sage-300 max-w-3xl mx-auto">
            Our dedicated professionals bring expertise and passion to every lock and key challenge.
          </p>
        </div>

        {/* Team Members Grid */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              class="group bg-gradient-to-br from-white/90 via-sage-50/30 to-clay-50/30 backdrop-blur-sm border-2 border-clay-100 dark:border-clay-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-clay-200"
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
                <p class="text-sage-700 dark:text-sage-300 text-sm sm:text-base leading-relaxed text-center mt-4">
                  {member.description}
                </p>
              </div>
           
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div class="text-center mt-12">
          <div class="bg-gradient-to-r from-clay-50 via-earth-50 to-sage-50 rounded-3xl p-8 md:p-12 border-2 border-clay-100 dark:border-clay-700 shadow-xl">
            <h3 class="text-2xl md:text-3xl font-bold text-clay-900 dark:text-clay-100 font-serif mb-4">
              Want to Work With Us?
            </h3>
            <p class="text-sage-700 dark:text-sage-300 mb-6 max-w-2xl mx-auto">
              Our team is passionate about security and craftsmanship. Contact us to learn about opportunities or services!
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
                href="mailto:hello@terrapottery.com"
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
      content: "Meet our expert team of locksmiths and security professionals dedicated to your safety and security.",
    },
  ],
};