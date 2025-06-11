import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import { qwikSerialized } from "~/utils/qwikSerialized";
import { Card } from "../ui/Card";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Tabs } from "../ui/Tabs";

// Dynamically import IconRocket
const IconRocket = qwikSerialized(() => import("~/components/icons/IconRocket"));

// Service data from ServiceTabsX
const serviceData = [
  {
    title: "Design",
    subtitle: "Creative and Functional Design",
    icon: IconRocket,
    description: "Our innovative design services use Figma, Adobe XD, and Sketch to craft custom UI/UX, interactive prototypes, and branding assets tailored to your vision.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-3.png",
    features: [
      "Custom UI/UX Design",
      "Interactive Prototyping",
      "Branding Asset Creation"
    ],
    projectDetails: {
      startingPrice: "$3,500",
      timeline: "4-6 weeks"
    },
    ctaText: "Begin Design"
  },
  {
    title: "Develop",
    subtitle: "Robust Web and Software Solutions",
    icon: IconRocket,
    description: "We provide scalable development with React, Qwik, and Next.js, building secure APIs, integrating cloud solutions, and delivering custom software.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png",
    features: [
      "Full-Stack Development",
      "Secure API Integration",
      "Cloud-Based Solutions"
    ],
    projectDetails: {
      startingPrice: "$4,000",
      timeline: "6-8 weeks"
    },
    ctaText: "Begin Development"
  },
  {
    title: "Market",
    subtitle: "Memorable Brand Identities",
    icon: IconRocket,
    description: "We create cohesive branding with logos, color palettes, and style guides, ensuring consistency across platforms and a strong audience connection.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png",
    features: [
      "Logo and Identity Design",
      "Brand Style Guides",
      "Platform Consistency"
    ],
    projectDetails: {
      startingPrice: "$2,500",
      timeline: "3-5 weeks"
    },
    ctaText: "Begin Branding"
  }
];

export default component$(() => {
  const currentSlide = useSignal(0);
  const carouselRef = useSignal<HTMLElement>();

  // Function to handle tab changes
  const handleTabChange = $((index: number) => {
    currentSlide.value = index;
    // Find the carousel slide and scroll to it
    const slides = carouselRef.value?.querySelectorAll('.carousel-slide');
    if (slides && slides[index]) {
      slides[index].scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Watch for carousel changes
  useVisibleTask$(({ cleanup }) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slideIndex = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
            if (slideIndex !== -1) {
              currentSlide.value = slideIndex;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const slides = carouselRef.value?.querySelectorAll('.carousel-slide');
    slides?.forEach((slide) => observer.observe(slide));

    cleanup(() => observer.disconnect());
  });

  return (
    <div class="max-w-6xl mx-auto">
      {/* Tabs - shown above on mobile, below on desktop */}
      <div class="md:mt-8 mt-0 md:order-2 order-1">
        <Tabs.Root 
          class="w-full" 
          selectedIndex={currentSlide.value}
          onSelectedIndexChange$={(index) => handleTabChange(index)}
        >
          <Tabs.List class="grid w-full text-md grid-cols-3">
            {serviceData.map((service) => (
              <Tabs.Tab
                key={service.title}
                class="flex md:flex-row flex-col items-center md:whitespace-normal">
                {service.icon && (
                  <span class="inline-block md:w-1/4 w-8 h-8 flex-shrink-0">
                    <service.icon class="w-full h-full" />
                  </span>
                )}
                <div class="flex flex-col md:w-3/4 w-full text-center md:text-left overflow-hidden">
                  <span class="font-semibold">{service.title}</span>
                  <span class="text-sm text-muted-foreground md:block hidden">
                    {service.subtitle}
                  </span>
                </div>
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {serviceData.map((service, index) => (
            <Tabs.Panel key={index} class="w-full">
              {/* Panel content is handled by the carousel above */}
            </Tabs.Panel>
          ))}
        </Tabs.Root>
      </div>

      {/* Carousel - shown below on mobile, above on desktop */}
      <div class="md:order-1 order-2">
        <Carousel.Root class="carousel-root" slidesPerView={2} gap={30}>
          <Carousel.Scroller class="carousel-scroller" ref={carouselRef}>
            {serviceData.map((service, index) => (
              <Carousel.Slide key={index} class="carousel-slide">
                <div class="pb-8 h-full">
                  <Card.Header>
                    <Card.Title class="text-2xl md:text-3xl md:pt-4 font-bold text-gray-900 dark:text-white">
                      {service.title} Services
                    </Card.Title>
                    <Card.Description class="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </Card.Description>
                  </Card.Header>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
                    {/* Left Column: Image */}
                    <div class="w-full h-24 md:h-64">
                      <img
                        src={service.image}
                        alt={`${service.title} illustration`}
                        class="w-full h-full rounded-none shadow-md object-cover"
                      />
                    </div>
                    {/* Right Column: Features, Project Details, CTA */}
                    <div class="w-full space-y-6">
                      <div class="space-y-2">
                        <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          Key Features
                        </Label>
                        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                          {service.features.map((feature, idx) => (
                            <li key={idx} class="flex items-center gap-2">
                              <span class="text-green-500">✓</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div class="space-y-2">
                        <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          Project Details
                        </Label>
                        <div class="grid grid-cols-2 gap-2">
                          <Input
                            value={service.projectDetails.startingPrice}
                            readOnly
                            class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                            placeholder="Starting Price"
                          />
                          <Input
                            value={service.projectDetails.timeline}
                            readOnly
                            class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                            placeholder="Timeline"
                          />
                        </div>
                      </div>
                      <Button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
                        {service.ctaText}
                      </Button>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
        </Carousel.Root>
      </div>
    </div>
  );
});
// internal

