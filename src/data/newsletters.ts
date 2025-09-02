// src/data/newsletters.ts
import type { Post } from "~/components/types";

export const newsletters: Post[] = [
  {
    id: "newsletter-1",
    slug: "newsletter-1",
    title: "First Newsletter",
    image: "/images/newsletter1.jpg",
    excerpt: "A brief summary of our first newsletter.",
    publishDate: new Date("2025-01-01"),
    tags: ["newsletter", "update"],
    content: `
# Welcome to Our First Newsletter

This is the **first** newsletter content. Here's what's included:

- Exciting updates about our project.
- Tips and tricks for getting started.
- A sneak peek at what's coming next.

[Learn more](#)!
    `,
    draft: false,
    metadata: {
      description: "A brief summary of our first newsletter.",
    },
  },
  {
    id: "newsletter-2",
    slug: "newsletter-2",
    title: "Second Newsletter",
    image: "/images/newsletter2.jpg",
    excerpt: "Highlights from our second newsletter.",
    publishDate: new Date("2025-02-01"),
    tags: ["newsletter", "news"],
    content: `
# Second Newsletter Highlights

We're back with more news!

- New features released this month.
- Community spotlight and contributions.
- Upcoming events to watch for.

Join us for the journey!
    `,
    draft: false,
    metadata: {
      description: "Highlights from our second newsletter.",
    },
  },
];