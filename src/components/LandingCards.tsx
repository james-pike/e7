import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const cards = [
    {
      title: "Land Acknowledgment",
      text: (
        <>
          We acknowledge that earthen vessels is on the traditional unceded
          territory of the Algonquin people. We are grateful to gather on this
          land held by rivers, trees, & the clay beneath our feet. Together, we
          honour the enduring presence & artistry of indigenous people who have
          long tended this land.
        </>
      ),
      image: "/images/space.jpeg",
    },
    {
      title: "Our Commitment",
      text: (
        <>
          earthen vessels and its facilitators do not discriminate on the basis
          of race, creed, colour, ethnicity, religion, sexual orientation,
          gender expression, physical or mental ability. <br />
          All are welcome.
        </>
      ),
      image: "/images/space.jpeg",
    },
  ];

  return (
    <section class="relative overflow-hidden py-12 md:py-16">
      <div class="relative max-w-7xl mx-auto px-5 md:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              class="relative h-48 md:h-56 rounded-2xl overflow-hidden border-2 shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-secondary-200"
            >
              {/* Full background image */}
              <img
                src={card.image}
                alt={card.title}
                class="absolute inset-0 w-full h-full object-cover"
              />

              {/* Global overlay (subtle wash over image) */}
              <div class="absolute inset-0 bg-white/25 dark:bg-black/40"></div>

              {/* Text content with its own darker background */}
              <div class="relative z-10 flex h-full items-center justify-center px-6">
                <div class="bg-white/70 rounded-lg px-4 py-3">
                  <p class="text-sm md:text-base leading-6  text-center">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
