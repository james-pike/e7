import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const contactInfo = [
    {
      icon: (
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      title: "Visit Our Studio",
      details: "36 Rosemount Ave, Ottawa ON, K1Y1P4",
      link: "https://www.google.com/maps/place/36+Rosemount+Ave,+Ottawa,+ON+K1Y+1P4/@45.4011697,-75.728632,17z/data=!3m1!4b1!4m6!3m5!1s0x4cce043c0a7d3ecd:0xbd2868eaa3c1b713!8m2!3d45.401166!4d-75.7260571!16s%2Fg%2F11c5knylyp?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
    },
 
    {
      icon: (
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Email Us",
      details: "hello@earthenvessels.ca",
      link: "mailto:hello@earthenvessels.ca"
    },
    {
      icon: (
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Studio Hours",
      details: "By appointment",
      link: "#"
    }
  ];

  

  return (
    <section id="contact" class="relative overflow-hidden py-12 md:py-16">
      {/* Background with pottery texture */}
      <div class="absolute inset-0 bg-pottery-texture opacity-20 !important" aria-hidden="true"></div>

      {/* Gradient background */}

      {/* Floating decorative elements */}

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h2 class="!text-4xl md:!text-5xl xdxd font-bold mb-6">
            <span class="bg-gradient-to-r from-secondary-800 via-tertiary-600 to-primary-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
        
        </div>

        <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Studio Image, Features, & Quick Contact CTA */}
          <div class="space-y-8">
            {/* Studio Image */}
            <div class="relative rounded-2xl overflow-hidden shadow-xl border-2 border-secondary-200/50">
              <Image
                src="/images/space.jpeg"
                layout="constrained"
                width={600}
                height={400}
                alt="Terra Pottery Studio"
                class="w-full h-64 object-cover"
                breakpoints={[320, 480, 640, 768, 1024]}
              />
              <div class="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <h3 class="text-xl font-bold mb-2">Visit Our Studio</h3>
              </div>
            </div>

        
          </div>

          {/* Right Side - Contact Info Cards */}
          <div class="relative">
            <div class="bg-gradient-to-br from-white/90 via-primary-50/30 to-secondary-50/30 !important dark:from-gray-800/90 dark:via-primary-900/30 dark:to-secondary-900/30 !important backdrop-blur-sm rounded-3xl shadow-xl p-4 md:p-6 border-2 border-secondary-100 dark:border-secondary-700">
              <div class="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    class="group flex items-start space-x-4 p-4 bg-gradient-to-br from-white/80 via-primary-50/20 to-secondary-50/20 !important dark:from-gray-800/80 dark:via-primary-900/20 dark:to-secondary-900/20 !important backdrop-blur-sm rounded-xl border-2 border-secondary-100 dark:border-secondary-700 hover:bg-gradient-to-br hover:from-white/90 hover:via-primary-50/40 hover:to-secondary-50/40 hover:shadow-lg transition-all duration-300 hover:border-secondary-200"
                  >
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-700 dark:to-secondary-800 rounded-xl flex items-center justify-center text-secondary-800 dark:text-secondary-300 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {info.icon}
                    </div>
                    <div class="flex-1">
                      <h3 class="text-md font-semibold text-secondary-900 dark:text-secondary-100 mb-1">
                        {info.title}
                      </h3>
                      <p class="text-sm text-primary-700 dark:text-primary-300">
                        {info.details}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});