import { component$ } from "@builder.io/qwik";
import {  routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { tursoClient } from "~/components/utils/turso";
import FAQ2 from "~/components/widgets/FAQ2";
import WorkshopsCarousel from "~/components/widgets/WorkshopsCarousel";

import { SITE } from "~/config.mjs";
import { useWorkshopsLoader } from "~/routes/plugin@workshops";


export default component$(() => {
    const workshops = useWorkshopsLoader();
  return (
    <>
     <WorkshopsCarousel workshops={workshops.value}/>
 

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