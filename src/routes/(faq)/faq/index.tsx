import { component$ } from "@builder.io/qwik";
import {  routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { tursoClient } from "~/components/utils/turso";
import FAQ2 from "~/components/widgets/FAQ2";

import { SITE } from "~/config.mjs";

export const useFaqsLoader = routeLoader$(async (event) => {
  const client = tursoClient(event);
  const result = await client.execute('SELECT * FROM faqs ORDER BY id ASC');
  return result.rows.map(row => ({
    id: (row as any).id,
    question: (row as any).question,
    answer: (row as any).answer,
    category: (row as any).category || 'General', // Default to 'General' if no category
  })) as Array<{ id: number; question: string; answer: string; category: string }>;
});

export default component$(() => {
  return (
    <>
     <FAQ2/>

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