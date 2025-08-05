import { component$} from "@builder.io/qwik";

export default component$(() => {

  return (
    <div class="bg-white">
      <main class="isolate">
        {/* Hero Section: Our Space */}
        <div class="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true"></div>
          <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 class="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
                Our Space
              </h1>
              <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p class="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Earthen Vessels Studio is a grounding space where working with clay becomes a pathway to a deeper connection - with ourselves, the Earth, and each other - through reflections, mindful creativity, we play and we listen to the voice within.
                </p>
                <p class="mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  In this nurturing space creativity and exploration thrive, welcoming all even those without clay experience. With our facilitators' gentle guidance each participant can meet the clay and put away fears or anxieties about "not being able to do it right" - It's very freeing!
                </p>
              </div>
              <img 
                src="https://via.placeholder.com/1280x720.png?text=Earthen+Vessels+Studio" 
                alt="Earthen Vessels Studio" 
                class="mt-10 aspect-16/9 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
        </div>

        {/* Offerings Section */}
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Our Offerings
            </h2>
            <p class="mt-6 text-base/7 text-gray-600">
              Our offerings are unique and evolving. We currently offer themed workshops from our 'Touch The Earth' series: Open Like a Bowl - ready to be filled, Lanterns for the Journey, and Like the Turtle - practising patience and resilience. Labyrinth and Clay. Upcoming 4 and 6 week courses will be posted soon.
            </p>
            <p class="mt-4 text-base/7 text-gray-600">
              We also create customized workshops for private groups. Stay tuned for more.
            </p>
            <img 
              src="https://via.placeholder.com/1280x720.png?text=Workshops" 
              alt="Workshops" 
              class="mt-10 aspect-16/9 w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* What To Expect Section */}
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              What To Expect
            </h2>
            <p class="mt-6 text-base/7 text-gray-600">
              Our clay and personal transformation workshops and courses begin with guided meditations and reflections, leading a small group into a deeper awareness of self, followed by a hands-on, mindful experience with clay.
            </p>
            <p class="mt-4 text-base/7 text-gray-600">
              In the camaraderie of the Earthen Vessels clay studio, clay experience is not necessary. Our facilitators gently guide the unfolding process so that each participant can meet the clay without concerns about "being able to do it right."
            </p>
            <p class="mt-4 text-base/7 text-gray-600">
              Whether you are experienced or just starting out, working with clay can be a valuable and enriching experience for both your body, mind and heart. At Earthen Vessels, our classes are mindfully designed to encourage focusing on the process of working with the clay in a way that the clay also teaches us something about ourselves.
            </p>
            <img 
              src="https://via.placeholder.com/1280x720.png?text=Clay+Experience" 
              alt="Clay Experience" 
              class="mt-10 aspect-16/9 w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div class="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
          <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Discover The Calming Benefits of Clay In Your Hands
            </h2>
            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <p class="mt-6 text-lg/8 font-semibold tracking-tight text-white">Reduce Stress and Anxiety</p>
                <p class="mt-2 text-base/7 text-gray-300">
                  Engaging with clay requires focus and mindfulness. It naturally moves our attention from stressors into a place of relaxation.
                </p>
              </div>
              <div>
                <p class="mt-6 text-lg/8 font-semibold tracking-tight text-white">Promote Mindfulness and Presence</p>
                <p class="mt-2 text-base/7 text-gray-300">
                  The slow, deliberate nature of clay encourages presence, focus and listening to ourselves. These wonderful aww moments are everlasting.
                </p>
              </div>
              <div>
                <p class="mt-6 text-lg/8 font-semibold tracking-tight text-white">Foster Patience and Resilience</p>
                <p class="mt-2 text-base/7 text-gray-300">
                  Moving away from perfection, we are better able to listen to the clay. This experience teaches us about patience and resilience, so we can embrace the joy of our wholeness.
                </p>
              </div>
              <div>
                <p class="mt-6 text-lg/8 font-semibold tracking-tight text-white">Promote Self-Expression</p>
                <p class="mt-2 text-base/7 text-gray-300">
                  Clay provides a medium for expressing emotions and experiences helping us to find the words to express ourselves.
                </p>
              </div>
              <div>
                <p class="mt-6 text-lg/8 font-semibold tracking-tight text-white">Reduce Isolation & Loneliness</p>
                <p class="mt-2 text-base/7 text-gray-300">
                  Coming together around the creative table creates social connections and encourages community.
                </p>
              </div>
              <div>
                <p class="mt-6 text-lg/8 font-semibold tracking-tight text-white">Find Your Flow State</p>
                <p class="mt-2 text-base/7 text-gray-300">
                  The flow of working with clay promotes mental well-being and can lead to improved mood and satisfaction.
                </p>
              </div>
            </div>
            <div class="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div class="aspect-1404/767 w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" style={{ clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" }}></div>
            </div>
          </div>
        </div>

        {/* Removed sections not relevant to the provided content: Timeline, Our People, Metrics, and Job Openings */}

        {/* Footer */}
        <footer class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div class="border-t border-gray-900/10 pt-20 pb-8 sm:pt-24">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
              <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 class="text-sm/6 font-semibold text-gray-900">Workshops</h3>
                    <ul role="list" class="mt-6 space-y-4">
                      <li>
                        <a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Touch The Earth Series</a>
                      </li>
                      <li>
                        <a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Custom Workshops</a>
                      </li>
                      <li>
                        <a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Upcoming Courses</a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-10 md:mt-0">
                    <h3 class="text-sm/6 font-semibold text-gray-900">Support</h3>
                    <ul role="list" class="mt-6 space-y-4">
                      <li>
                        <a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Contact Us</a>
                      </li>
                      <li>
                        <a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">FAQs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 class="text-sm/6 font-semibold text-gray-900">Company</h3>
                    <ul role="list" class="mt-6 space-y-4">
                      <li>
                        <a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">About</a>
                      </li>
                      <li>
                        <a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-10 md:mt-0">
                    <h3 class="text-sm/6 font-semibold text-gray-900">Legal</h3>
                    <ul role="list" class="mt-6 space-y-4">
                      <li>
                        <a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Terms of Service</a>
                      </li>
                      <li>
                        <a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="mt-10 xl:mt-0">
                <h3 class="text-sm/6 font-semibold text-gray-900">Subscribe to our newsletter</h3>
                <p class="mt-2 text-sm/6 text-gray-600">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form class="mt-6 sm:flex sm:max-w-md">
                  <label for="email-address" class="sr-only">Email address</label>
                  <input 
                    type="email" 
                    name="email-address" 
                    id="email-address" 
                    autocomplete="email" 
                    required 
                    class="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:w-64 sm:text-sm/6 xl:w-full" 
                    placeholder="Enter your email"
                  />
                  <div class="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                    <button 
                      type="submit" 
                      class="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
              <div class="flex gap-x-6 md:order-2">
                <a href="#" class="text-gray-600 hover:text-gray-800">
                  <span class="sr-only">Facebook</span>
                  <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="text-gray-600 hover:text-gray-800">
                  <span class="sr-only">Instagram</span>
                  <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
              <p class="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">&copy; 2024 Earthen Vessels Studio. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
});