import { component$ } from "@builder.io/qwik";
import {  type DocumentHead } from "@builder.io/qwik-city";

import FAQ from "~/components/widgets/FAQ";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
    <FAQ
    
      title="Frequently Asked Questionss"
      subtitle="Find answers to common inquiries below."
      highlight="FAQs"
     
    />

     

    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};