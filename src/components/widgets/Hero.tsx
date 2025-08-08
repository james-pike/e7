import { component$ } from "@builder.io/qwik";



export default component$(() => {
  return (
    <section class="relative overflow-hidden">

      <div class="grid texture-fixed grid-cols-1 md:grid-cols-2 ">
<img  src="/images/logo.svg" class="px-4 pt-4 mt-2 h-56 mx-auto "/>
        {/* Text Content */}
        <div class="relative z-10 order-1 md:order-1 flex items-center justify-center px-4 pt-4 pb-10 md:px-8 md:py-0">
          <div class="md:text-left px-2">
            <h1 class="text-5xl font-bold tracking-tighter text-balance text-center sm:text-6xl md:text-6xl lg:text-7xl mb-4  ">
              earthen vessels
             

            </h1>
            <p class="text-xl sm:text-xl md:text-2xl text-muted-foreground text-center  mb-6 max-w-2xl mx-auto md:mx-0  ">
              Here, we gather around clay, to listen deeply to one another, to ourselves, and to the earth as we shape earthen vessels.            </p>

             <div class="flex flex-col items-center justify-center w-full gap-4 sm:flex-row sm:gap-4 max-w-xs sm:max-w-md lg:max-w-7xl mx-auto">
                <a
                  class="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold font-serif text-white bg-gradient-to-r from-clay-600 to-clay-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden focus:outline-none focus:ring-2 focus:ring-clay-400"
                  href="#collection"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    Book a Workshop
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-clay-700 to-clay-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <button class="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold font-serif text-sage-700 bg-white/80 backdrop-blur-sm border border-sage-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-sage-50 focus:outline-none focus:ring-2 focus:ring-sage-300">
                  <span class="relative z-10 flex items-center gap-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h9"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m0 0H3"></path></svg>
                    Learn About Our Story
                  </span>
                </button>
              </div>
          </div>
        </div>

      {/* Carousel */}
        {/* <div class="relative order-2 px-4 z-20 md:z-0 md:order-2 h-52 sm:h-80 md:h-full opacity-0 animate-[fadeSlideRight_1s_ease-out_0.8s_forwards]">
          <div class="bg-green-500 h-20"></div>
        </div> */}
      </div>

    </section>
  );
});





