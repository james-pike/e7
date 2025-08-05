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
      name: "John Smiths",
      role: "Master Locksmith",
      description: "25+ years of experience in residential and commercial lock systems",
      image: "/images/team/john-smith.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Automotive Lock Specialist",
      description: "Expert in car key programming and vehicle security systems",
      image: "/images/team/sarah-johnson.jpg",
    },
    {
      name: "Michael Chen",
      role: "Smart Lock Technician",
      description: "Specializes in smart home integration and security solutions",
      image: "/images/team/michael-chen.jpg",
    },
    {
      name: "Emily Davis",
      role: "Emergency Response Lead",
      description: "Manages 24/7 emergency lockout services with rapid response",
      image: "/images/team/emily-davis.jpg",
    },
    {
      name: "Robert Wilson",
      role: "Safe & Vault Expert",
      description: "Specialist in high-security safe installations and openings",
      image: "/images/team/robert-wilson.jpg",
    },
    {
      name: "Lisa Anderson",
      role: "Security Consultant",
      description: "Designs comprehensive security solutions for businesses",
      image: "/images/team/lisa-anderson.jpg",
    },
    {
      name: "David Martinez",
      role: "Key Systems Manager",
      description: "Oversees key duplication and master key systems",
      image: "/images/team/david-martinez.jpg",
    },
    {
      name: "Amanda Brown",
      role: "Customer Service Lead",
      description: "Ensures top-notch client satisfaction and service coordination",
      image: "/images/team/amanda-brown.jpg",
    },
  ];

  return (
    <section class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Meet Our Team</h1>
        <p class="text-lg text-gray-600">
          Our dedicated professionals bring expertise and passion to every lock and key challenge
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              class="w-full h-48 object-cover"
              width={300}
              height={200}
            />
            <div class="p-6">
              <div class="flex items-center mb-4">
                {/* <IconUser class="w-6 h-6 mr-2 text-primary" /> */}
                <h3 class="text-xl font-semibold">{member.name}</h3>
              </div>
              <p class="text-primary font-medium mb-2">{member.role}</p>
              <p class="text-gray-600 text-sm">{member.description}</p>
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