import { component$, Slot } from "@builder.io/qwik";

import Footer2 from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

export default component$(() => {
  return (
    <>

      <Header />
      <main class="">
        <Slot />
      </main>
      <Footer2 />
      
    </>
  );
});
