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
      <body class=" tracking-tight border-x mx-auto bg-background dark:bg-muted max-w-7xl   antialiased">
      <ObserverProvider>
          <RouterOutlet />
      
   
       
        </ObserverProvider>
      </body>
    </QwikCityProvider>
  );
});
