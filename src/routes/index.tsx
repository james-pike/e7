import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Hero from "~/components/widgets/Hero";
import Connections from "./(connections)/connections";
import Team from "./(team)/team";
import Classes from "./(classes)/classes";
import LandingCards from "~/components/LandingCards";


export default component$(() => {
  return (
    <>
      <Hero />
      <Classes/>
      <Team/>
      <Connections/>
      <LandingCards/>
      
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