import { component$, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "~/components/common/RouterHead";
import styles from "~/assets/styles/global.css?inline";
import Header from "./components/widgets/Header";

export default component$(() => {
  useStyles$(styles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preload Dancing Script font to prioritize loading */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=optional"
          as="style"
        />
        {/* Load Dancing Script as stylesheet to ensure availability */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=optional"
          rel="stylesheet"
        />
        {/* Apply font-display: optional for Dancing Script */}
        <style>
          {`
            @font-face {
              font-family: 'Dancing Script';
              font-style: normal;
              font-weight: 400;
              src: url('https://fonts.gstatic.com/s/dancingscript/v24/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup5.ttf') format('truetype');
              font-display: optional;
            }
            @font-face {
              font-family: 'Dancing Script';
              font-style: normal;
              font-weight: 500;
              src: url('https://fonts.gstatic.com/s/dancingscript/v24/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSw3Sup5.ttf') format('truetype');
              font-display: optional;
            }
            @font-face {
              font-family: 'Dancing Script';
              font-style: normal;
              font-weight: 700;
              src: url('https://fonts.gstatic.com/s/dancingscript/v24/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMTI3Sup5.ttf') format('truetype');
              font-display: optional;
            }
          `}
        </style>
        {/* Load Della Respira normally */}
        <link href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap" rel="stylesheet" />
        <RouterHead />
        <ServiceWorkerRegister />
        {/* Image preloads with correct types */}
        <link rel="preload" href="/images/logo22.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/bowls.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/turtle.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/lantern.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/hero.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/mug.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/logo2-cropped.svg" as="image" type="image/svg+xml" />
      </head>
      <body class="bg-white antialiased -mt-20">
        <Header />
        <div class="relative md:border-x mx-auto max-w-7xl overflow-x-hidden">
          <div class="absolute inset-0 bg-watercolor-texture opacity-50 bg-secondary-100/50" aria-hidden="true"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-primary-100/95 via-primary-200/80 to-tertiary-200/85" aria-hidden="true"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-tertiary-300/40 via-primary-200/50 to-primary-100/60" aria-hidden="true"></div>
          <div class="absolute top-0 left-5 w-[700px] h-[800px] bg-tertiary-100/30 rounded-full blur-xl animate-float" aria-hidden="true"></div>
          <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-xl animate-float" aria-hidden="true"></div>
          <div class="absolute top-5 md:left-[650px] w-[490px] h-[80px] bg-primary-200/30 rounded-full blur-xl animate-float" aria-hidden="true"></div>
          <RouterOutlet />
        </div>
      </body>
    </QwikCityProvider>
  );
});