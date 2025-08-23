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
    <div class="border-t border-primary-200">
      {items.map((item, index) => (
        <div
          key={index}
          class={cn(
            index > 0 && "border-t border-primary-200",
            index === items.length - 1 && "border-b-0"
          )}
        >
          {item.hasSubmenu ? (
            <>
              <button
                class={cn(
                  "!text-xl font-medium text-gray-700 dark:text-gray-200 flex items-center justify-between w-full p-3 px-5 hover:bg-background transition-all duration-200",
                  location.url.pathname.startsWith(item.href) && "bg-background"
                )}
                onClick$={() => (openIndex.value = openIndex.value === index ? null : index)}
              >
                <span>{item.title}</span>
                <LuChevronDown
                  class={cn(
                    "h-6 w-6 text-gray-500 transition-transform duration-200",
                    openIndex.value === index && "rotate-180"
                  )}
                />
              </button>
              <div
                class={cn(
                  "text-xl text-muted-foreground transition-all duration-500 ease-in-out max-h-0 overflow-hidden",
                  openIndex.value === index && "max-h-96"
                )}
              >
                <ul class="flex flex-col gap-0 pl-5">
                  {item.subitems!.map((subitem: any) => (
                    <li key={subitem.title} class="flex items-center">
                      <span class="text-primary-400 text-xs mr-3">✦</span>
                      <a
                        href={subitem.href}
                        class={cn(
                          "block text-gray-700 dark:text-gray-200 p-3 pl-1 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200",
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
                "block !text-xl text-gray-700 dark:text-gray-200 p-3 px-5 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200",
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
    // { title: "Home", href: "/", badge: null },
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
        { title: "FAQ", href: "/faq" },

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
        { title: "Community", href: "/community/", badge: null },
                { title: "Testimonials", href: "/testimonials/", badge: null },


    // {
    //   title: "More Info",
    //   href: "",
    //   hasSubmenu: true,
    //   subitems: [
    //     { title: "Testimonials", href: "/testimonials" },
    //     { title: "FAQs", href: "/faq" },
    //     { title: "Benefits Of Clay", href: "/about" },
    //     { title: "Community Connections", href: "/community" },
    //   ],
    // },
  ];

  return (
    <>
      <Modal.Root bind:show={show}>
        <div class="flex items-center hover:bg-secondary dark:hover:bg-gray-700">
          <Modal.Trigger class="rounded-lg p-2 bg-secondary border border-primary-200">
            <IconHamburger class="w-9 h-9 md:w-6 md:h-6 md:inline-block text-primary-600" />
          </Modal.Trigger>
        </div>
        <Modal.Panel position="left" class="dark:bg-gray-950 border-r border-primary-200">
          <div class="rounded-t-2xl border-primary-200 bg-white/30 dark:bg-gray-900 p-2">
            <Modal.Title class="pt-2 pl-2.5">
              <a href="/" class="focus:outline-none">
                <div style="width: 120px; height: 48px;">
                  <img src="/images/logo2.svg" alt="Logo" />
                </div>
              </a>
            </Modal.Title>
            <Modal.Description class="!text-lg xdxd !font-bold text-secondary-900 px-2.5 py-1 dark:text-gray-200">
              Listening, Connecting & Creating
            </Modal.Description>
          </div>
          <nav class="mt-0 space-y-4 bg-white/40 dark:bg-gray-800">
            <CustomAccordion items={menuItems} show={show} />
          </nav>
          <div class="rounded-b-2xl border-t border-primary-200 bg-white/30 dark:bg-gray-900 pb-5">
            <div class="sm:max-w-md px-4 pt-5 flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:max-w-7xl">
              <div class="flex w-2/3 sm:w-auto">
                <a
                  href="https://www-1562q.bookeo.com/bookeo/b_earthenvessels_start.html?ctlsrc2=0YjXAZVEzFFiBwNg%2BkaZkhbBjCBr4M%2B3Y%2BDUqCz9SnQ%3D&src=02b&type=41562UHUKUC196793426E6"
                  class="w-full sm:w-auto group relative inline-flex items-center justify-center px-5 py-4 text-xl font-medium text-white bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300"
                  role="button"
                  aria-label="Book a workshop"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    Book A Class
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-primary-300/40 via-primary-200/30 to-primary-300/40 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
          <Modal.Close
            class={cn(
              buttonVariants({ size: "icon", look: "link" }),
              "absolute right-5 top-5 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900"
            )}
            type="submit"
          >
            <LuX class="h-7 w-7" />
          </Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});