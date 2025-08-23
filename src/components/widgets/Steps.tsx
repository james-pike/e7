import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline"; // Adjust the import path
import { SectionWrapper } from "./SectionWrapper";
import { Image } from "@unpic/qwik";
import { twMerge } from "tailwind-merge";
import { Card } from "../ui/Card";
import IconStar from "../icons/IconStar";
import { VisibleWrapper } from "./VisibleWrapper";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

const sideImg =
  "/images/steps.webp";

  const stepsData = {
    stepsTitle: "Bringing Your Vision to Life in Just a Few Steps",
    items: [
      {
        title: "Step 1: Get in Touch",
        description:
          "Reach out with your idea, whether it’s a brand refresh or a full custom website. We’ll schedule a discovery call to understand your goals and vision.",
        icon: IconStar,
      },
      {
        title: "Step 2: Strategy & Proposal",
        description:
          "We dive into research, define your project scope, and craft a clear, customized proposal—no fluff, just a roadmap built around results.",
        icon: IconStar,
      },
      {
        title: "Step 3: Design & Development",
        description:
          "Our team handles everything from branding and UX to responsive development—building you a modern, high-performing website tailored to your audience.",
        icon: IconStar,
      },
      {
        title: "Step 4: Launch & Support",
        description:
          "After testing and final revisions, we launch your site with confidence. Need help post-launch? We’re here for ongoing support and future updates.",
        icon: IconStar,
      },
    ],
    image: {
      src: sideImg,
      alt: "Web design and development process",
    },
  };
  

  const { items, image } = stepsData;

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", isDark } = props;

  // Signal to track visibility
  const isVisible = useSignal(false);

  // Intersection Observer to trigger animation
  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.disconnect(); // Disconnect after first intersection
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const element = document.querySelector("#steps");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });

  return (
    <SectionWrapper id={id} isDark={isDark} bgClass="texture-fixed ">
      <Headline align="left" title={title} subtitle={subtitle} highlight={highlight} classes={{ container: "px-4" }} />
      <VisibleWrapper id={`${id}-steps`}>
        <Card.Root>
          <div class="row-gap-10 grid gap-6 md:grid-cols-2 bg-background rounded-base">
            <div class="mb-4 md:mb-0 px-4 pt-8 md:py-9 md:px-6 md:pr-16">
              {Array.isArray(items) &&
                items.length &&
                items.map(({ title, description, icon: Icon }, index) => (
                  <div
                    key={`item-steps-${index}`}
                    class={twMerge(
                      "flex",
                      "transition-all duration-500 ease-out",
                      isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div class="mr-4 flex flex-col items-center">
                      <div>
                        {index !== items.length - 1 ? (
                          <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 sm:border-primary md:border-primary border-teal-green-400 sm:hidden">
                            {typeof Icon !== "undefined" ? (
                              <Icon class="h-6 w-6 text-teal-green-400 dark:text-slate-200" />
                            ) : (
                              <IconStar class="h-6 w-6 text-teal-green-400 dark:text-slate-200" />
                            )}
                          </div>
                        ) : (
                          <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 sm:bg-primary-900 md:bg-primary-900 bg-teal-green-400 sm:hidden">
                            {typeof Icon !== "undefined" ? (
                              <Icon class="h-6 w-6 text-teal-green-400 dark:text-slate-200" />
                            ) : (
                              <IconStar class="h-6 w-6 text-teal-green-400 dark:text-slate-200" />
                            )}
                          </div>
                        )}
                      </div>
                      {index !== items.length - 1 && (
                        <div class="h-full w-px bg-teal-green-400 sm:bg-primary md:bg-primary sm:hidden"></div>
                      )}
                    </div>
                    <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                      {title && (
                        <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>
                      )}
                      {description && <p class="text-gray-600 dark:text-slate-400">{description}</p>}
                    </div>
                  </div>
                ))}
            </div>
            <div class="relative md:flex md:items-center md:h-full">
              {typeof image !== "undefined" && (
                <Image
                  layout="constrained"
                  src={image.src}
                  width={532}
                  height={704}
                  alt={image.alt}
                  class="w-full rounded-md bg-gray-500 hidden sm:block object-cover object-top shadow-lg dark:bg-slate-700 md:h-auto"
                  breakpoints={[320, 480, 640, 1024]}
                />
              )}
              {typeof image !== "undefined" && (
                <Image
                  layout="constrained"
                  src={image.src}
                  width={400}
                  height={400}
                  alt={image.alt}
                  class="w-full rounded-b-base bg-gray-500 block sm:hidden mx-auto object-cover object-top shadow-lg dark:bg-slate-700"
                  breakpoints={[320, 480, 640, 1024]}
                />
              )}
            </div>
          </div>
        </Card.Root>
      </VisibleWrapper>
    </SectionWrapper>
  );
});