import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuMail, LuClock, LuMapPin } from "@qwikest/icons/lucide";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";

export default component$(() => {
  const links = [
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
      title: "Connect",
      items: [
        { title: "Instagram", href: "#" },
        { title: "Facebook", href: "#" },
      ],
    },
  ];

  const social = [
    { label: "Instagram", icon: IconInstagram, href: "https://www.instagram.com/earthenvesselsgathering/" },
    { label: "Facebook", icon: IconFacebook, href: "https://www.facebook.com/p/earthen-vessels-61562702795370/" },
  ];

  return (
    <footer class="relative border-t border-primary-200 dark:border-secondary-700 overflow-hidden">
      {/* Background with pottery textures */}
      {/* Gradient background */}
      <div class="absolute inset-0 bg-gradient-to-br from-primary-100/10 via-tertiary-50/15 to-secondary-50/50" aria-hidden="true"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:pt-10 md:pb-0">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-0">
              <Link class="inline-block font-bold text-2xl -mt-2 font-serif" href={"/"}>
                <span class="bg-gradient-to-r from-primary-600 via-tertiary-600 to-secondary-600 xdxd bg-clip-text text-transparent">
                  earthen vessels
                </span>
              </Link>
            </div>
            <div class="text-sm text-primary-600 mb-4 font-bold xdxd dark:text-primary-300 leading-relaxed">
              Listening, Connecting, Creating
            </div>
            <div class="text-sm text-primary-700 dark:text-primary-300 leading-relaxed flex items-center gap-2">
              <LuMail class="w-4 h-4" />
              <Link
                href="mailto:hello@earthenvessels.ca"
                class="hover:text-secondary-600 dark:hover:text-secondary-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                hello@earthenvessels.ca
              </Link>
            </div>
            <div class="text-sm text-primary-700 dark:text-primary-300 leading-relaxed flex items-center gap-2">
              <LuClock class="w-4 h-4" />
              Hours: By appointment only
            </div>
            <div class="text-sm text-primary-700 dark:text-primary-300 leading-relaxed flex items-center gap-2">
              <LuMapPin class="w-4 h-4" />
              <Link
                href="https://www.google.com/maps/search/?api=1&query=36+Rosemount+Ave,+K1Y+1P4,+Ottawa,+ON"
                class="hover:text-secondary-600 dark:hover:text-secondary-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                36 Rosemount Ave, K1Y 1P4, Ottawa, ON
              </Link>
            </div>
            {/* Social icons remain here for mobile */}
            <ul class="flex mb-0 mt-4 md:hidden -ml-2">
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
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2 ">
              <div class="text-secondary-800 dark:text-secondary-200 xdxd font-semibold mb-4">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm space-y-2">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2}>
                      <Link
                        class="text-primary-700 hover:text-secondary-600 dark:text-primary-300 dark:hover:text-secondary-300 transition-colors duration-200 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-secondary-200/50 dark:border-secondary-700/50">
          <div class="text-sm text-primary-700 dark:text-primary-300 xdxd">
            <div style="width: 100px; height: 40px;" class="mb-4">
              <img src="/images/logo2.svg" alt="Logo" />
            </div>
            © 2025 {" "}
            earthen vessels
            <span class="text-secondary-600 dark:text-secondary-400"> ·</span>{" "}
            All rights reserved.
          </div>
          {/* Social icons for desktop */}
          <ul class="hidden md:flex md:items-center mt-4 md:mt-0 -ml-2">
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
        </div>
      </div>
    </footer>
  );
});