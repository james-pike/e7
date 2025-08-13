import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
    
 <h1> Community Connections</h1>
     
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