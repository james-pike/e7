// src/components/widgets/Team.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ReviewsCarousel from "~/components/widgets/ReviewsCarousel";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
   <>
  <ReviewsCarousel/>
    
        </>
  );
});

export const head: DocumentHead = {
  title: `${SITE.title} - Reviews`,
  meta: [
    {
      name: "description",
      content: "Reviews and Testimonials",
    },
  ],
};