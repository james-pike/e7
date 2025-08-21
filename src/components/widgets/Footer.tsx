import { $, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuMail, LuClock, LuMapPin } from "@qwikest/icons/lucide";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
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
      ],
    },
    {
      title: "About",
      items: [
        { title: "Our Space", href: "#" },
        { title: "What To Expect", href: "#" },
        { title: "Benefits Of Clay", href: "#" },
        { title: "FAQs", href: "#" },
      ],
    },
    {
      title: "Community",
      items: [
        { title: "Partners", href: "#" },
        { title: "Gallery", href: "#" },
        { title: "Newsletter", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      items: [
        {
          title: "hello@earthenvessels.ca",
          href: "mailto:hello@earthenvessels.ca",
          icon: LuMail,
        },
        {
          title: "Hours: By appointment only",
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
  ];

  const social = [
    { label: "Instagram", icon: IconInstagram, href: "https://www.instagram.com/earthenvesselsgathering/" },
    { label: "Facebook", icon: IconFacebook, href: "https://www.facebook.com/p/earthen-vessels-61562702795370/" },
  ];

  const email = useSignal("");
  const handleSubmit = $(async () => {
    console.log("Subscribing:", email.value);
    // Placeholder for API call (e.g., Mailchimp)
    // await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email: email.value }) });
    email.value = "";
  });

  return (
    <footer class="relative border-t border-half border-primary-200 dark:border-secondary-700 overflow-hidden">
      {/* Background with pottery textures */}
      <div class="absolute inset-0 bg-pottery-texture opacity-10" aria-hidden="true"></div>
      {/* Gradient background */}
      <div class="absolute inset-0 bg-gradient-to-br from-primary-100/10 via-tertiary-50/15 to-secondary-50/50" aria-hidden="true"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:pt-12 md:pb-6">
          {/* First Column: Logo, Description, Newsletter */}
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-4">
              <Link class="inline-block font-bold text-2xl -mt-2 font-serif" href={"/"}>
                <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-secondary-600 xdxd bg-clip-text text-transparent">
                  earthen vessels
                </span>
              </Link>
            </div>
            <div class="text-sm text-primary-700 dark:text-primary-300 leading-relaxed">
              Handcrafted pottery that brings the warmth of terracotta and the serenity of clay into your home. Each piece tells a story of earth, fire, and human creativity.
            </div>
            {/* Newsletter Signup */}
            <div class="mt-6">
              <h4 class="text-sm font-semibold text-secondary-800 dark:text-secondary-200 mb-3 flex items-center gap-2">
                <LuMail class="w-4 h-4" /> Join our newsletter
              </h4>
              <form onSubmit$={handleSubmit} class="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Enter email for newsletter"
                  class="flex-1 px-4 py-2 text-sm border border-primary-200 dark:border-secondary-600 rounded-l-full bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm text-primary-900 dark:text-primary-100 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                col-span-6 md:col-span-3 
                ${index === 3 ? "lg:col-span-3 -ml-4 md:ml-0" : index === 2 ? "lg:col-span-1 md:-ml-6" : index === 1 ? "lg:col-span-2 md:-ml-4" : "lg:col-span-2"}
              `}
            >
              <div class={`text-secondary-800 dark:text-secondary-200 xdxd font-semibold mb-4 ${index === 3 ? "-ml-4 md:ml-0" : ""}`}>
                {title}
              </div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm space-y-2">
                  {items.map(({ title, href, icon: Icon }, index2) => (
                    <li key={index2} class="flex items-center gap-2">
                      {Icon && <Icon class="w-4 h-4" />}
                      {href ? (
                        <Link
                          class="text-primary-700 hover:text-secondary-600 dark:text-primary-300 dark:hover:text-secondary-300 transition-colors duration-200 ease-in-out"
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
        <div class="flex flex-col md:flex-row md:items-center md:justify-between pb-6 pt-0 md:py-8 border-t border-half border-secondary-200/50 dark:border-secondary-700/50">
          <ul class="flex mb-4 md:mb-0 md:ml-4 -ml-2 order-1 md:order-2">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-primary-600 dark:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:outline-none focus:ring-4 focus:ring-secondary-200 dark:focus:ring-secondary-700 rounded-lg text-sm p-2.5 inline-flex items-center transition-all duration-200"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
          </ul>
          <div class="inline-flex items-center text-sm text-primary-700 dark:text-primary-300 order-2 md:order-1">
            <img
              src="/images/logo2.svg"
              alt="Earthen Vessels Logo"
              class="w-12 h-12 md:w-16 md:h-16 mr-2 rounded-sm"
              width={64}
              height={64}
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