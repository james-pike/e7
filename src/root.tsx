import { component$, useContextProvider, useStore, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "~/components/common/RouterHead";
import styles from "~/assets/styles/global.css?inline";
import { ObserverProvider } from "./components/common/ObserverProvider";
import { APP_STATE_CONTEXT_ID } from "./components/widgets/AppStateContext";
import { AppState } from "./components/widgets/AppStateType";
import Header from "./components/widgets/Header";

export default component$(() => {
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
        <link href="https://fonts.googleapis.com/css2?family=Della+Respira&family=Syne:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body class="bg-white antialiased -mt-20">
        <Header /> {/* Render header directly in body */}
        <div class="relative md:border-x mx-auto max-w-7xl overflow-x-hidden"> {/* Added overflow-x-hidden */}
          {/* Watercolor background with lighter green gradients and clay texture */}
          <div class="absolute inset-0 bg-watercolor-texture opacity-50 bg-secondary-100/50" aria-hidden="true"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-primary-100/95 via-primary-200/80 to-tertiary-200/85" aria-hidden="true"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-tertiary-300/40 via-primary-200/50 to-primary-100/60" aria-hidden="true"></div>
          {/* Floating blurry balls with increased clay emphasis */}
          <div class="absolute top-20 left-10 w-32 h-32 bg-tertiary-300/30 rounded-full blur-xl animate-float" aria-hidden="true"></div>
          <div class="absolute top-80 left-80 w-20 h-20 bg-tertiary-300/30 rounded-full blur-xl animate-float" aria-hidden="true"></div>
          <div class="absolute bottom-20 right-10 w-24 h-24 bg-secondary-200/20 rounded-full blur-xl animate-float" style="animation-delay: -2s;" aria-hidden="true"></div>
          <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-200/30 rounded-full blur-lg animate-float" style="animation-delay: -4s;" aria-hidden="true"></div>
          <div class="absolute top-1/3 right-1/4 w-20 h-20 bg-secondary-400/25 rounded-full blur-lg animate-float" style="animation-delay: -1s;" aria-hidden="true"></div>
          <div class="absolute bottom-1/4 left-1/3 w-28 h-28 bg-tertiary-300/25 rounded-full blur-xl animate-float" style="animation-delay: -3s;" aria-hidden="true"></div>
          <div class="absolute top-1/4 right-1/3 w-18 h-18 bg-secondary-300/20 rounded-full blur-lg animate-float" style="animation-delay: -5s;" aria-hidden="true"></div>
          <div class="absolute bottom-1/3 left-1/2 w-22 h-22 bg-primary-100/25 rounded-full blur-xl animate-float" style="animation-delay: -0.5s;" aria-hidden="true"></div>
          <div class="absolute top-10 right-20 w-26 h-26 bg-secondary-200/20 rounded-full blur-xl animate-float" style="animation-delay: -6s;" aria-hidden="true"></div>
          <div class="absolute bottom-10 left-20 w-20 h-20 bg-secondary-300/20 rounded-full blur-lg animate-float" style="animation-delay: -7s;" aria-hidden="true"></div>
          {/* New Secondary Bubbles (4x original, smaller, less visible) */}
          <div class="absolute top-5 left-5 w-12 h-12 bg-secondary-200/15 rounded-full blur-lg animate-float" style="animation-delay: -0.2s;" aria-hidden="true"></div>
          <div class="absolute top-15 right-5 w-10 h-10 bg-secondary-300/15 rounded-full blur-lg animate-float" style="animation-delay: -0.4s;" aria-hidden="true"></div>
          <div class="absolute bottom-5 left-15 w-12 h-12 bg-secondary-200/15 rounded-full blur-lg animate-float" style="animation-delay: -0.6s;" aria-hidden="true"></div>
          <div class="absolute bottom-15 right-15 w-10 h-10 bg-secondary-300/15 rounded-full blur-lg animate-float" style="animation-delay: -0.8s;" aria-hidden="true"></div>
          <div class="absolute top-30 left-20 w-14 h-14 bg-secondary-200/15 rounded-full blur-lg animate-float" style="animation-delay: -1.0s;" aria-hidden="true"></div>
          <div class="absolute top-50 right-20 w-12 h-12 bg-secondary-300/15 rounded-full blur-lg animate-float" style="animation-delay: -1.2s;" aria-hidden="true"></div>
          <div class="absolute bottom-30 left-25 w-10 h-10 bg-secondary-200/15 rounded-full blur-lg animate-float" style="animation-delay: -1.4s;" aria-hidden="true"></div>
          <div class="absolute bottom-50 right-25 w-14 h-14 bg-secondary-300/15 rounded-full blur-lg animate-float" style="animation-delay: -1.6s;" aria-hidden="true"></div>
          <div class="absolute top-70 left-30 w-12 h-12 bg-secondary-200/15 rounded-full blur-lg animate-float" style="animation-delay: -1.8s;" aria-hidden="true"></div>
          <div class="absolute top-40 right-30 w-10 h-10 bg-secondary-300/15 rounded-full blur-lg animate-float" style="animation-delay: -2.0s;" aria-hidden="true"></div>
          <div class="absolute bottom-40 left-35 w-12 h-12 bg-secondary-200/15 rounded-full blur-lg animate-float" style="animation-delay: -2.2s;" aria-hidden="true"></div>
          <div class="absolute bottom-60 right-35 w-14 h-14 bg-secondary-300/15 rounded-full blur-lg animate-float" style="animation-delay: -2.4s;" aria-hidden="true"></div>

          <ObserverProvider>
            <RouterOutlet />
          </ObserverProvider>
        </div>
      </body>
    </QwikCityProvider>
  );
});