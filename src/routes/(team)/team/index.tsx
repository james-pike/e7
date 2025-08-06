import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export default component$(() => {
  const teamMembers: TeamMember[] = [
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

  return (
    <section class="container mx-auto px-4 py-16 sm:py-24 bg-gray-50">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">Meet Our Team</h1>
        <p class="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
          Our dedicated professionals bring expertise and passion to every lock and key challenge.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            class="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{ backgroundColor: "#f3f4f6" }} // Fallback for bg-gray-100
          >
            <div class="relative">
              <img
                src={member.image}
                alt={member.name}
                class="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto mt-6 border-4 border-white"
                width={160}
                height={160}
              />
            </div>
            <div class="p-6 sm:p-8 text-center">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p class="text-blue-600 font-medium text-sm sm:text-base mb-3">{member.role}</p>
              <p class="text-gray-500 text-sm sm:text-base leading-relaxed">{member.description}</p>
            </div>
            <div class="bg-gray-200 py-3 text-center">
              <a
                href="#"
                class="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
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