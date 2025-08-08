import { component$, Slot } from "@builder.io/qwik";
import { ThemeBaseColors, ThemeBorderRadiuses, ThemeFonts, ThemeModes, ThemePrimaryColors, ThemeStyles } from "@qwik-ui/utils";

import Footer2 from "~/components/widgets/Footer2";
import Header from "~/components/widgets/Header";
import { ThemeProvider } from "~/lib/provider";

export default component$(() => {
  return (
    <>
    <ThemeProvider        attribute="class"
              enableSystem={false}
              themes={[
                ...Object.values(ThemeFonts),
                ...Object.values(ThemeModes),
                ...Object.values(ThemeStyles),
                ...Object.values(ThemeBaseColors),
                ...Object.values(ThemePrimaryColors),
                ...Object.values(ThemeBorderRadiuses),
              ]}>
      <Header />
      <main class="">
        <Slot />
      </main>
      <Footer2 />
      </ThemeProvider>
    </>
  );
});
