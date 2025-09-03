import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import { inject } from "@vercel/analytics";


import Footer from "~/components/widgets/Footer";
//

export default component$(() => {
   useVisibleTask$(() => {
    inject(); // Runs only on client side
  });
  return (
    <>
      <main class="mt-20">
        <Slot />
      </main>
      <Footer />
      
    </>
  );
});
