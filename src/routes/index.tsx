import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Hero from "~/components/widgets/Hero";
import Connections from "./(connections)/connections";
import Classes from "./(classes)/classes";
import LandingCards from "~/components/LandingCards";
import FAQ2 from "~/components/widgets/FAQ2";


export default component$(() => {
  return (
    <>
      <Hero />
      <Classes/>
      <Connections/>
      <FAQ2/>
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