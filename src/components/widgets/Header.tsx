import {  component$, useStore } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";
import IconChevronDown from "../icons/IconChevronDown";
import MenuModal from "./MenuModal";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { menu } = useContent();
  const location = useLocation();

  return (
    <header
      id="header"
      class={`sticky top-0 z-40 bg-transparent flex-none mx-auto w-full border-primary-200 transition-[opacity] ease-in-out ${
        store.isScrolling
          ? "md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white/95 dark:bg-slate-900"
          : ""
      }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="absolute inset-0" aria-hidden="true"></div>
      <div class="relative text-default py-2 md:p-1 px-2 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          <a class="flex items-center ml-2" href="/">
            <div style="width: 100px; height: 40px;">
              <img src="/images/logo2.svg" alt="Logo" />
            </div>
          </a>
          <div class="flex items-center md:hidden gap-1">
            <MenuModal />
          </div>
        </div>
        <nav
          class="items-center w-full md:w-auto hidden md:flex dark:text-white overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5 group"
          aria-label="Main navigation"
        >
          {menu && menu.items ? (
            <ul class="flex flex-col md:flex-row text-primary-600 xdxd md:self-center w-full md:w-auto text-xl md:text-2xl tracking-[0.01rem] font-medium">
              {menu.items.map(({ text, href, items }, key) => {
                const isActive = location.url.pathname === href;
                return (
                  <li key={key} class={items?.length ? "dropdown" : ""}>
                    {items?.length ? (
                      <>
                        <button
                          class={`
                            hover:text-secondary-800
                            px-4 py-3
                            flex items-center
                            transition-all duration-200
                            relative
                            rounded-base
                            after:content-['']
                            after:absolute
                            after:bottom-[6px]
                            after:left-1/2
                            after:h-[2px]
                            after:bg-secondary-800
                            after:transition-all
                            after:duration-200
                            ${
                              isActive
                                ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                                : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                            }
                          `}
                          onClick$={() => {
                            if (location.url.pathname !== "/") {
                              window.location.href = "/#services";
                            } else {
                              const servicesSection = document.getElementById("services");
                              if (servicesSection) {
                                servicesSection.scrollIntoView({ behavior: "smooth" });
                              }
                            }
                          }}
                        >
                          {text}
                          <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                        </button>
                        <ul
                          class={`
                            dropdown-menu
                            md:backdrop-blur-md
                            dark:md:bg-muted
                            rounded-lg
                            md:absolute
                            pl-4 md:pl-0
                            md:hidden
                            font-medium
                            md:bg-white/80
                            md:min-w-[200px]
                            drop-shadow-xl
                            py-2
                          `}
                        >
                          {items.map(({ text: text2, href: href2 }, key2) => {
                            const isDropdownActive = location.url.pathname === href2;
                            const isFirst = key2 === 0;
                            const isLast = key2 === items.length - 1;
                            return (
                              <li key={key2}>
                                <a
                                  class={`
                                    hover:bg-muted
                                    hover:text-secondary-800
                                    py-2 px-5
                                    block
                                    whitespace-no-wrap
                                    transition-all duration-200
                                    relative
                                    after:content-['']
                                    after:absolute
                                    after:bottom-[4px]
                                    after:left-1/2
                                    after:h-[2px]
                                    after:bg-secondary-800
                                    after:transition-all
                                    after:duration-200
                                    ${
                                      isDropdownActive
                                        ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                                        : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                                    }
                                    ${isFirst ? "hover:rounded-t-base" : ""}
                                    ${isLast ? "hover:rounded-b-base" : ""}
                                    ${!isFirst && !isLast ? "hover:rounded-none" : ""}
                                  `}
                                  href={href2}
                                >
                                  {text2}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <a
                        class={`
                          hover:bg-muted
                          hover:text-secondary-800
                          px-4 py-3
                          flex items-center
                          relative
                          transition-all duration-200
                          after:content-['']
                          after:absolute
                          after:bottom-[6px]
                          after:left-1/2
                          after:h-[2px]
                          after:bg-secondary-800
                          after:transition-all
                          after:duration-200
                          rounded-base
                          ${
                            isActive
                              ? "text-secondary-800 after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                              : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                          }
                        `}
                        href={href}
                      >
                        {text}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </nav>
        <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
          <div class="items-center flex justify-between w-full md:w-auto">
            <a
              href="https://www-1562q.bookeo.com/bookeo/b_earthenvessels_start.html?ctlsrc2=0YjXAZVEzFFiBwNg%2BkaZkhbBjCBr4M%2B3Y%2BDUqCz9SnQ%3D&src=02b&type=41562UHUKUC196793426E6https://www-1562q.bookeo.com/bookeo/b_earthenvessels_start.html?ctlsrc2=oW%2F6hZJecTudb%2Fv%2Frme6nFm8gbDa3UvfJkr1evB2Xsc%3D&src=03v&type=41562UHUKUC196793426E6"
              class="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 text-xl font-semibold font-serif text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden focus:outline-none focus:ring-2 focus:ring-secondary-600-200"
              role="button"
              aria-label="Book a workshop"
            >
              <span class="relative z-10 xdxd flex items-center gap-2">
                Book Class
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-300 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});