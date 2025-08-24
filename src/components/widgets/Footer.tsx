// src/components/Footer.tsx
import { $, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuMail, LuClock, LuMapPin, LuFacebook, LuInstagram } from "@qwikest/icons/lucide";
import type { JSXNode } from "@builder.io/qwik";
import type { SVGProps } from "@builder.io/qwik";

interface Item {
  title: string;
  href: string | null;
  icon?: (props: SVGProps<SVGSVGElement>) => JSXNode<unknown>;
}

interface LinkSection {
  title: string;
  items: Item[];
}

export default component$(() => {
  const links: LinkSection[] = [
    {
      title: "About",
      items: [
        { title: "About Us", href: "#" },
        { title: "Classes", href: "#" },
        { title: "Facilitators", href: "#" },
        { title: "Testimonials", href: "#" },
        { title: "Newsletter", href: "#" },
      ],
    },
    {
      title: "Community",
      items: [
        { title: "Our Space", href: "#" },
        { title: "Benefits Of Clay", href: "#" },
        { title: "Community", href: "#" },
        { title: "Gallery", href: "#" },
        { title: "FAQs", href: "#" },
      ],
    },

    {
      title: "Contact",
      items: [
        {
          title: "hello@earthenvessels.ca",
          href: "mailto:hello@earthenvessels.ca",
          icon: LuMail,
        },
        {
          title: "Hours: By appointment",
          href: null,
          icon: LuClock,
        },
        {
          title: "36 Rosemount Ave, K1Y 1P4, Ottawa, ON",
          href: "https://www.google.com/maps/search/?api=1&query=36+Rosemount+Ave,+K1Y+1P4,+Ottawa,+ON",
          icon: LuMapPin,
        },
      ],
    },

    {
      title: "Connect",
      items: [
        {
          title: "Instagram",
          href: "https://www.instagram.com/earthenvesselsgathering/",
          icon: LuInstagram,
        },
        {
          title: "Facebook",
          href: "https://www.facebook.com/p/earthen-vessels-61562702795370/",
          icon: LuFacebook,
        },
      ],
    },
  ];

  const email = useSignal("");
  const handleSubmit = $(async () => {
    console.log("Subscribing:", email.value);
    // Placeholder for API call (e.g., Mailchimp)
    // await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email: email.value }) });
    email.value = "";
  });

  return (
    <footer class="relative border-t pl-1 border-half border-primary-200 dark:border-secondary-700 overflow-hidden">
      {/* Background with pottery textures */}
      <div class="absolute inset-0 bg-pottery-texture opacity-10" aria-hidden="true"></div>
      {/* Gradient background */}
      <div class="absolute inset-0 bg-gradient-to-br from-primary-100/10 via-tertiary-50/15 to-secondary-50/50" aria-hidden="true"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="grid grid-cols-12 gap-4 gap-y-4 sm:gap-4 py-8 md:pt-12 md:pb-2">
          {/* First Column: Logo, Description, Newsletter */}
          <div class="col-span-12 lg:col-span-5 md:pr-8">
            <div class="mb-4">
              <Link class="inline-block font-bold text-2xl -mt-2" href={"/"}>
                <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
                  earthen vessels
                </span>
              </Link>
            </div>
            <div class="text-sm text-primary-700 dark:text-primary-300 leading-relaxed">
              At earthen vessels, we begin with a pause — creating space to listen inwardly and reconnect with ourselves. Clay becomes more than a craft; it’s a way to ground, reflect, and express gratitude. Our workshops are about nurturing authenticity and connection, as much as shaping clay.
            </div>
            {/* Newsletter Signup */}
            <div class="mt-6">
              <div class="text-sm font-semibold mb-3 ml-1">
                <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent flex items-center gap-2">
                  {/* <LuMail class="w-4 h-4" /> */}
                  Join Our Newsletter
                </span>
              </div>
              <form onSubmit$={handleSubmit} class="flex ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Enter email for newsletter"
                  class="flex-1 px-4 py-2 text-sm border border-primary-200 dark:border-secondary-800 rounded-l-xl bg-white/50 dark:bg-secondary-800/80 backdrop-blur-sm text-primary-900 dark:text-primary-100 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  bind:value={email}
                />
                <button
                  type="submit"
                  class="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-medium rounded-r-full hover:from-primary-700 hover:to-primary-800 transition-all duration-200"
                  role="button"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* Sitemap Columns */}
          {links.map(({ title, items }, index) => (
            <div
              key={index}
              class={`
      col-span-6 sm:col-span-6 md:col-span-3 mt-1
      ${index === 0 ? 'lg:col-span-2'
                  : index === 1 ? 'lg:col-span-2'
                    : index === 2 ? 'lg:col-span-2'   // Connect full width
                      : 'lg:col-span-1'}                 // Social half width
    `}
            >
              <div class="text-sm font-semibold mb-4 mt-3">
                <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
                  {title}
                </span>
              </div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm space-y-2">
                  {items.map(({ title, href, icon: Icon }, index2) => (
                    <li key={index2} class="flex items-center gap-2">
                      {Icon && <Icon class="w-4 h-4" />}
                      {href ? (
                        <Link
                          class="text-primary-700 hover:text-secondary-800 dark:text-primary-300 dark:hover:text-secondary-300 transition-colors duration-200 ease-in-out"
                          href={href}
                          target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : undefined}
                          rel={href.startsWith("http") || href.startsWith("mailto") ? "noopener noreferrer" : undefined}
                        >
                          {title}
                        </Link>
                      ) : (
                        <span class="text-primary-700 dark:text-primary-300">{title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        </div>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between pb-4 pt-0 -mt-3 md:-mt-0 md:py-4 border-t border-half border-secondary-200/50 dark:border-secondary-700/50">
          <div class="inline-flex items-center text-sm pb-2 text-primary-700 mt-1 dark:text-primary-300 order-2 md:order-1">
            <img
              src="/images/logo2.svg"
              alt="Earthen Vessels Logo"
              class="w-16 h-16 md:w-120 md:h-20 mr-2 rounded-sm"
              width={80}
              height={80}
            />
            <span>
              © 2025 earthen vessels · All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
});