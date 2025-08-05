import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Pricing from "~/components/widgets/Pricing";


import { SITE } from "~/config.mjs";
import { qwikSerialized } from "~/utils/qwikSerialized";
const IconArrowDownRight = qwikSerialized(() => import("~/components/icons/IconArrowDownRight"));


export default component$(() => {
  return (
    <>
    <Pricing
    
      title="Flexible Pricing Options"
      subtitle="Choose an initial upfront project cost or a monthly plan."
      highlight="Pricing"
      items={[
        {
          icon:IconArrowDownRight,
          title: "Do you offer emergency locksmith services?",
          description:
            "Yes! We provide 24/7 emergency lockout assistance for homes, businesses, and vehicles.",
        },
        {
          icon:IconArrowDownRight,
          title: "Can you replace lost or broken keys?",
          description:
            "Absolutely! We offer key duplication, cutting, and replacement services for all types of locks.",
        },
        {
          icon:IconArrowDownRight,
          title: "Do you install smart locks and security systems?",
          description:
            "Yes, we specialize in smart lock installation and advanced security systems for added protection.",
        },
        {
          icon:IconArrowDownRight,
          title: "Can you repair or replace damaged locks?",
          description:
            "Of course! We repair, rekey, and replace locks to enhance security and restore functionality.",
        },
        {
          icon:IconArrowDownRight,
          title: "Do you provide car key programming and replacement?",
          description:
            "Yes! We offer car key programming, key fob replacement, and ignition repair for most vehicle models.",
        },
        {
          icon:IconArrowDownRight,
          title: "Can you open safes and vaults?",
          description:
            "Yes, we offer professional safe opening and installation services while ensuring your valuables remain secure.",
        },
      ]}
    />


    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};