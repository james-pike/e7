import { component$, useContextProvider, useStore, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";

import { RouterHead } from "~/components/common/RouterHead";


// import "@fontsource-variable/inter";
import styles from  "~/assets/styles/global.css?inline";
import { ObserverProvider } from "./components/common/ObserverProvider";
import { APP_STATE_CONTEXT_ID } from "./components/widgets/AppStateContext";
import { AppState } from "./components/widgets/AppStateType";


export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  useStyles$(styles);

  const appState = useStore<AppState>({
    featureFlags: {
      showStyled: true,
      showNeumorphic: import.meta.env.DEV,
    },
  });

  useContextProvider(APP_STATE_CONTEXT_ID, appState);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        /> */}
        <RouterHead />
        {/* <DarkThemeLauncher /> */}
        <ServiceWorkerRegister />
                <script
          dangerouslySetInnerHTML={`
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "283b7c7f-4f69-4725-ba15-f11822e24856";
            (function() {
              var d = document;
              var s = d.createElement("script");
              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        />
        <link rel="preload" href="/images/hero1.png" as="image" />
        <link rel="preload" href="/images/contact.jpg" as="image" />
 
      </head>
       <body class="relative tracking-tight border-x border-clay-200 mx-auto max-w-7xl bg-background dark:bg-muted antialiased">
        {/* Background with pottery texture */}
        <div class="absolute inset-0 bg-pottery-texture opacity-30 !important" aria-hidden="true"></div>

        {/* Gradient overlays */}
        <div class="absolute inset-0 bg-gradient-to-br from-clay-50/80 via-sage-50/60 to-earth-50/70 !important dark:from-clay-900/80 dark:via-sage-900/60 dark:to-earth-900/70 !important" aria-hidden="true"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-clay-100/20 via-transparent to-sage-100/30 !important dark:from-clay-900/20 dark:via-transparent dark:to-sage-900/30 !important" aria-hidden="true"></div>

        {/* Floating decorative elements */}
        <div class="absolute top-20 left-10 w-32 h-32 bg-clay-200/20 rounded-full blur-xl animate-float" aria-hidden="true"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-sage-300/20 rounded-full blur-xl animate-float" style="animation-delay: -2s;" aria-hidden="true"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-earth-300/30 rounded-full blur-lg animate-float" style="animation-delay: -4s;" aria-hidden="true"></div>

        <ObserverProvider>
          <RouterOutlet />
        </ObserverProvider>
      </body>
    </QwikCityProvider>
  );
});
