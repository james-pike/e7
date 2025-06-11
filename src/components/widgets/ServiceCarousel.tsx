import { component$, PropsOf, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel, Progress } from '@qwik-ui/headless';
import { Card } from '../ui/Card'; // Adjust the import path as needed
import { DarkContext } from '~/DarkContext';

export const CarouselProgress = component$((props: PropsOf<typeof Progress.Root>) => {
  return (
    <Progress.Root {...props} class="progress" style={{ marginBottom: '2rem' }}>
      <Progress.Indicator class="progress-indicator bg-blue-50" />
    </Progress.Root>
  );
});



const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications',
       image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png'
  },
  {
    title: 'Mobile Apps',
    description: 'Creating native and cross-platform mobile solutions',
       image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces',
      image: '/images/hero1.png'
  },
  {
    title: 'Cloud Services',
    description: 'Implementing scalable cloud infrastructure',
       image: '/images/hero1.png'
  },
  {
    title: 'Cloud Services2',
    description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.png'
  },
  {
    title: 'Cloud Services3',
    description: 'Implementing scalable cloud infrastructure',
       image: '/images/hero1.png'
  }
];

interface Props {
  isDark?: boolean;
}

export default component$((props: Props) => {
  const { isDark = false } = props; 
  useContextProvider(DarkContext, isDark);// Default to false if not provided

 

  const isDraggable = useSignal(true); // Signal to manage draggable state

  // Run this task on the client when the component becomes visible
  useVisibleTask$(() => {
    const updateDraggable = () => {
      // Use Tailwind's default md breakpoint (768px) as the threshold
      if (window.innerWidth >= 768) {
        isDraggable.value = true; // Disable dragging on desktop
      } else {
        isDraggable.value = true; // Enable dragging on mobile
      }
    };

    // Initial check
    updateDraggable();

    // Listen for window resize events
    window.addEventListener('resize', updateDraggable);

    // Cleanup
    return () => window.removeEventListener('resize', updateDraggable);
  });

  return (
    
    <Carousel.Root class="carousel-root px-6" gap={20} slidesPerView={1}  draggable={isDraggable.value} rewind sensitivity={{
      touch: 2.4,
    }} >
 
      <Carousel.Scroller class="carousel-scroller py-6">
        {services.map((service) => (
          <Carousel.Slide
            style={{ flexBasis: '400px' }}
            key={service.title}
            class="carousel-slide w-full"
          >
            <Card.Root>
              <Card.Image 
                src={service.image} 
                alt={service.title}
                style={{ height: '200px' }} // Optional: adjust height as needed
              />
              <Card.Header>
                <Card.Title>{service.title}</Card.Title>
                <Card.Description>{service.description}</Card.Description>
              </Card.Header>
            </Card.Root>
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      <div class="flex justify-between items-end">
          <Carousel.Pagination class="carousel-pagination flex gap-1 justify-start ">
            {services.map((service) => (
              <Carousel.Bullet
                key={service.title}
                class="carousel-pagination-bullet w-[10px]  h-[10px] bg-[#ccc] rounded-sm transition-all duration-300 data-[active]:!bg-primary data-[active]:scale-125"
              />
            ))}
          </Carousel.Pagination>


          <div class="">
        {/* <Carousel.Previous>Prev</Carousel.Previous>
        <Carousel.Next>Next</Carousel.Next> */}
      </div>
      
        </div>
    </Carousel.Root>
  
  );
});