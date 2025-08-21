import { component$, useSignal, $, Signal, useVisibleTask$ } from "@builder.io/qwik";
import { LuX, LuChevronDown } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { useLocation } from "@builder.io/qwik-city";
import { Modal } from "../ui/Modal";
import IconHamburger from "../icons/IconHamburger";
import { buttonVariants } from "../ui/Button";

const CustomAccordion = component$(({ items, show }: { items: any[], show: Signal<boolean> }) => {
  const openIndex = useSignal<number | null>(null);
  const location = useLocation();

  useVisibleTask$(({ track }) => {
    track(() => show.value);
    if (!show.value) {
      openIndex.value = null;
    }
  });

  const closeModal = $(() => (show.value = false));

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} class="border-b border-half border-primary-200 last:border-none last:rounded-b-base">
          {item.hasSubmenu ? (
            <>
              <button
                class={cn(
                  "text-xl font-medium text-gray-700 dark:text-gray-200 flex items-center justify-between w-full p-2 px-4 hover:bg-background transition-all duration-200",
                  location.url.pathname.startsWith(item.href) && "bg-background"
                )}
                onClick$={() => (openIndex.value = openIndex.value === index ? null : index)}
              >
                <span>{item.title}</span>
                <LuChevronDown
                  class={cn(
                    "h-5 w-5 text-gray-500 transition-transform duration-200",
                    openIndex.value === index && "rotate-180"
                  )}
                />
              </button>
              <div
                class={cn(
                  "text-lg text-muted-foreground transition-all duration-500 ease-in-out max-h-0 overflow-hidden",
                  openIndex.value === index && "max-h-96"
                )}
              >
                <ul class="flex flex-col gap-0 pl-6">
                  {item.subitems!.map((subitem: any) => (
                    <li key={subitem.title}>
                      <a
                        href={subitem.href}
                        class={cn(
                          "block text-gray-700 dark:text-gray-200 p-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200",
                          location.url.pathname === subitem.href && "bg-background"
                        )}
                        onClick$={closeModal}
                      >
                        {subitem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <a
              href={item.href}
              class={cn(
                "block text-xl text-gray-700 dark:text-gray-200 p-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200",
                location.url.pathname === item.href && "bg-background"
              )}
              onClick$={closeModal}
            >
              <span>{item.title}</span>
              {item.badge}
            </a>
          )}
        </div>
      ))}
    </div>
  );
});

export default component$(() => {
  const show = useSignal(false);

  const menuItems = [
    { title: "Home", href: "/", badge: null },
    { title: "This Is Us", href: "/team/", hasSubmenu: false },
    {
      title: "About",
      href: "/about/",
      hasSubmenu: true,
      subitems: [
        { title: "Our Space", href: "/about" },
        { title: "What To Expect", href: "/about" },
        { title: "Benefits Of Clay", href: "/about" },
        { title: "Newsletter", href: "/newsletter" },
      ],
    },
    {
      title: "Classes",
      href: "/classes/",
      hasSubmenu: false,
      subitems: [
        { title: "Web Design", href: "/services/web-design" },
        { title: "Web Development", href: "/services/web-development" },
        { title: "Branding", href: "/services/branding" },
        { title: "Marketing", href: "/services/marketing" },
      ],
    },
    { title: "Gallery", href: "/gallery/", badge: null },
    {
      title: "More Info",
      href: "",
      hasSubmenu: true,
      subitems: [
        { title: "Testimonials", href: "/testimonials" },
        { title: "FAQs", href: "/faq" },
        { title: "Benefits Of Clay", href: "/about" },
        { title: "Community Connections", href: "/community" },
      ],
    },
  ];

  return (
    <>
      <Modal.Root bind:show={show}>
        <div class="flex items-center hover:bg-primary-100 dark:hover:bg-gray-700">
          <Modal.Trigger class="rounded-sm p-2 bg-primary-100 border-half border-primary-200">
            <IconHamburger class="w-8 h-8 md:w-5 md:h-5 md:inline-block text-primary-600" />
          </Modal.Trigger>
        </div>
        <Modal.Panel position="left" class="dark:bg-gray-950 border-half border-primary-200">
          <div class="border-half border-primary-200 bg-white/50 dark:bg-gray-900 p-1">
            <Modal.Title class="pt-1 pl-2">
              <a href="/" class="focus:outline-none">
                <div style="width: 100px; height: 40px;">
                  <img src="/images/logo2.svg" alt="Logo" />
                </div>
              </a>
            </Modal.Title>
            <Modal.Description class="!text-xl xdxd font-medium text-secondary-800 px-2 py-1  dark:text-gray-200">
              Listening, Connecting & Creating
            </Modal.Description>
          </div>
          <nav class="mt-0 space-y-4 border-half border-primary-200 border-t-0 bg-white/40 dark:bg-gray-800">
            <CustomAccordion items={menuItems} show={show} />
          </nav>
          <div class="border-half border-primary-200 border-t-0 pb-4 bg-white/30 dark:bg-gray-900">
            <div class="sm:max-w-md  px-6 pt-4 flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-3 lg:justify-start lg:max-w-7xl">
              <div class="flex w-full sm:w-auto">
                <a
                  href="https://www-1562q.bookeo.com/bookeo/b_earthenvessels_start.html?ctlsrc2=0YjXAZVEzFFiBwNg%2BkaZkhbBjCBr4M%2B3Y%2BDUqCz9SnQ%3D&src=02b&type=41562UHUKUC196793426E6"
                  class="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold font-serif text-white bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300"
                  role="button"
                  aria-label="Book a workshop"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    Book Now
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
          <Modal.Close
            class={cn(
              buttonVariants({ size: "icon", look: "link" }),
              "absolute right-4 top-4 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900"
            )}
            type="submit"
          >
            <LuX class="h-6 w-6" />
          </Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});