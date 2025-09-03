import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
//

export default component$(() => {
  return (
    <>
      <main class="mt-20">
        <Slot />
      </main>
      <Footer />
      
    </>
  );
});
