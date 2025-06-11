// src/data.ts

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconRocket = qwikSerialized(() => import("~/components/icons/IconRocket"));

export const brandData = {
  site: {
    title: "Your Agency Name",
    description:
      "We are a premier web design, development, and branding agency crafting digital experiences that captivate, perform, and convert.",
  },
  hero: {
    id: "hero",
    titleParts: {
      before: "Custom",
      after: "Solutions",
    },
    subtitle:
      "Transform your online presence with custom web design and development services—stunning, fast, and secure websites for your business.",
    buttons: [
      {
        text: "Get A Quote",
        href: "/contact",
      },
      {
        text: "Book A Free Consultation",
        href: "/contact",
      },
    ],
    background: {
      image: "/images/hb1.svg",
      class: "relative overflow-hidden -mt-[75px]",
    },
  },
  servicesX: {
    id: "services",
    highlight: "Our Services",
    title: "What We Deliver",
    subtitle:
      "Crafting captivating designs, robust development, and impactful branding — we create digital experiences that resonate and perform.",
    items: [
      {
        title: "Design",
        subtitle: "Creative and Functional Design",
        icon: IconRocket,
        description:
          "Our innovative design services use Figma, Adobe XD, and Sketch to craft custom UI/UX, interactive prototypes, and branding assets tailored to your vision.",
        image:
          "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-3.png",
        features: [
          "Custom UI/UX Design",
          "Interactive Prototyping",
          "Branding Asset Creation",
        ],
        projectDetails: {
          startingPrice: "$3,500",
          timeline: "4-6 weeks",
        },
        ctaText: "Begin Design",
      },
      {
        title: "Development",
        subtitle: "Robust Web and Software Solutions",
        icon: IconRocket,
        description:
          "We provide scalable development with React, Qwik, and Next.js, building secure APIs, integrating cloud solutions, and delivering custom software.",
        image:
          "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png",
        features: [
          "Full-Stack Development",
          "Secure API Integration",
          "Cloud-Based Solutions",
        ],
        projectDetails: {
          startingPrice: "$4,000",
          timeline: "6-8 weeks",
        },
        ctaText: "Begin Development",
      },
      {
        title: "Branding",
        subtitle: "Memorable Brand Identities",
        icon: IconRocket,
        description:
          "We create cohesive branding with logos, color palettes, and style guides, ensuring consistency across platforms and a strong audience connection.",
        image:
          "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png",
        features: [
          "Logo and Identity Design",
          "Brand Style Guides",
          "Platform Consistency",
        ],
        projectDetails: {
          startingPrice: "$2,500",
          timeline: "3-5 weeks",
        },
        ctaText: "Begin Branding",
      },
    ],
  },
  features: {
    id: "features-grid",
    highlight: "Our Expertise",
    title: "Design, Development, and Branding — Unified Excellence",
    subtitle:
      "We transform visions into reality with bespoke design, cutting-edge development, and strategic branding that captivate and convert.",
    items: [
      {
        title: "Bespoke Web Design",
        description:
          "Custom-crafted designs that blend beauty with functionality, ensuring your brand shines and engages effectively.",
        icon: IconRocket,
      },
      {
        title: "Robust Web Development",
        description:
          "Scalable, high-speed websites built with modern tools like Qwik, React, and Next.js, engineered for growth and performance.",
        icon: IconRocket,
      },
      {
        title: "Strategic Branding",
        description:
          "We shape your brand’s identity with compelling visuals, cohesive messaging, and strategic positioning that connect with your audience.",
        icon: IconRocket,
      },
      {
        title: "Inclusive & Responsive Design",
        description:
          "Seamless, accessible designs optimized for all devices, ensuring an exceptional experience for every user, everywhere.",
        icon: IconRocket,
      },
      {
        title: "UX for Maximum Conversions",
        description:
          "Intuitive user journeys designed to drive results — from clicks to conversions, we make every interaction count.",
        icon: IconRocket,
      },
      {
        title: "SEO & Speed Optimization",
        description:
          "Boost visibility and performance with optimized code, fast load times, and SEO strategies that get you noticed.",
        icon: IconRocket,
      },
    ],
  },
  pricing: {
    id: "pricing",
    isDark: true,
    highlight: "Pricing",
    title: "Tailored Pricing Plans",
    subtitle:
      "Select a one-time payment or a flexible monthly subscription to suit your needs.",
    items: [],
  },
  reviews: {
    highlight: "Client Feedback",
    title: "What Our Clients Love About Us",
    subtitle:
      "Real reviews from Google, showcasing our 4- and 5-star client experiences.",
    items: [
      {
        quote:
          "This agency transformed our online presence with a stunning, high-performing website!",
        author: "John, Small Business Owner",
      },
      {
        quote:
          "Their team was professional, creative, and delivered beyond our expectations.",
        author: "Lisa, Marketing Director",
      },
    ],
  },
  steps: {
    isDark: true,
    id: "steps",
    highlight: "Our Approach",
    title: "How We Build Your Digital Presence",
    subtitle:
      "From initial consultation to launch, our process delivers strategic, stunning, and high-performing websites.",
    items: [
      {
        title: "Step 1: Get in Touch",
        description:
          "Reach out with your idea, whether it’s a brand refresh or a full custom website. We’ll schedule a discovery call to understand your goals and vision.",
        icon: IconRocket,
      },
      {
        title: "Step 2: Strategy & Proposal",
        description:
          "We dive into research, define your project scope, and craft a clear, customized proposal—no fluff, just a roadmap built around results.",
        icon: IconRocket,
      },
      {
        title: "Step 3: Design & Development",
        description:
          "Our team handles everything from branding and UX to responsive development—building you a modern, high-performing website tailored to your audience.",
        icon: IconRocket,
      },
      {
        title: "Step 4: Launch & Support",
        description:
          "After testing and final revisions, we launch your site with confidence. Need help post-launch? We’re here for ongoing support and future updates.",
        icon: IconRocket,
      },
    ],
    image: {
      src: "/images/steps.webp",
      alt: "Web design and development process",
    },
  },
  faq: {
    title: "Common Questions Answered",
    subtitle:
      "Explore answers to frequently asked questions about our services.",
    highlight: "FAQs",
    items: [
      {
        title: "Design FAQs",
        items: [
          {
            icon: IconRocket,
            title: "What tools do you use for web design?",
            description:
              "We use industry-leading tools like Figma, Adobe XD, and Sketch to create custom UI/UX designs and interactive prototypes tailored to your brand.",
          },
          {
            icon: IconRocket,
            title: "How long does a design project take?",
            description:
              "A typical design project takes 4-6 weeks, depending on the complexity and scope, with regular updates to keep you in the loop.",
          },
          {
            icon: IconRocket,
            title: "Can you redesign an existing website?",
            description:
              "Yes, we specialize in refreshing outdated websites with modern, user-friendly designs that enhance performance and engagement.",
          },
        ],
      },
      {
        title: "Development FAQs",
        items: [
          {
            icon: IconRocket,
            title: "What technologies do you use for development?",
            description:
              "We build with modern frameworks like React, Qwik, and Next.js, ensuring scalable, high-performance websites with secure APIs.",
          },
          {
            icon: IconRocket,
            title: "Do you offer e-commerce solutions?",
            description:
              "Absolutely, we develop custom e-commerce platforms with seamless payment integrations and optimized user experiences.",
          },
          {
            icon: IconRocket,
            title: "What is your support process post-launch?",
            description:
              "We provide ongoing support, including updates, bug fixes, and performance optimizations, tailored to your needs.",
          },
        ],
      },
      {
        title: "Branding FAQs",
        items: [
          {
            icon: IconRocket,
            title: "What does your branding process include?",
            description:
              "Our branding services include logo design, color palettes, typography, and style guides to ensure a cohesive brand identity.",
          },
          {
            icon: IconRocket,
            title: "How do you ensure brand consistency?",
            description:
              "We create detailed style guides and work closely with you to apply your brand across all platforms, from web to print.",
          },
          {
            icon: IconRocket,
            title: "Can you help with rebranding?",
            description:
              "Yes, we guide you through the rebranding process, from strategy to execution, to refresh your brand effectively.",
          },
        ],
      },
      {
        title: "General FAQs",
        items: [
          {
            icon: IconRocket,
            title: "What is the cost of a typical project?",
            description:
              "Costs vary based on scope, but our projects start at $2,500 for branding, $3,500 for design, and $4,000 for development.",
          },
          {
            icon: IconRocket,
            title: "How do I get started?",
            description:
              "Contact us for a free consultation. We’ll discuss your goals and provide a tailored proposal to kick off your project.",
          },
          {
            icon: IconRocket,
            title: "Do you offer ongoing maintenance?",
            description:
              "Yes, we offer flexible maintenance plans to keep your website secure, updated, and performing at its best.",
          },
        ],
      },
    ],
  },
  stats: {
    id: "stats",
    highlight: "Performance",
    title: "Unmatched Website Performance",
    subtitle:
      "Our websites achieve top Google PageSpeed scores, ensuring lightning-fast load times and higher conversions.",
    image: {
      src: "/images/contact.jpg",
      alt: "High-performance website illustration",
      classes: "w-full h-full object-cover md:max-h-60",
    },
    items: [
      {
        value: "100%",
        label: "PageSpeed Scores",
        description: "Faster load times drive more conversions",
      },
      {
        value: "24.8K",
        label: "Stars",
      },
      {
        value: "10.3K",
        label: "Forks",
      },
      {
        value: "100%",
        label: "Satisfaction Guaranteed",
      },
    ],
  },
  contact: {
    id: "contact",
    highlight: "Let’s Connect",
    title: "Start Your Project Today",
    subtitle:
      "Request a quote or schedule a free consultation to bring your vision to life.",
    items: [],
  },
};