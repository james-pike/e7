import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Hero from "~/components/widgets/Hero";
import WorkshopsCarousel from "~/components/widgets/WorkshopsCarousel";
import { tursoClient } from '~/components/utils/turso';
import ReviewsCarousel from "~/components/widgets/ReviewsCarousel";
// import FAQAccordion from "~/components/widgets/FAQAccordion";

export const useReviewsLoader = routeLoader$(async (event) => {
  const client = tursoClient(event);
  const result = await client.execute('SELECT * FROM reviews ORDER BY id ASC');
  return result.rows.map(row => ({
    id: typeof row.id === 'bigint'
      ? Number(row.id)
      : row.id instanceof ArrayBuffer
        ? Number(new DataView(row.id).getBigInt64(0, true))
        : Number(row.id),
    name: String(row.name),
    review: String(row.review),
    rating: typeof row.rating === 'bigint'
      ? Number(row.rating)
      : row.rating instanceof ArrayBuffer
        ? Number(new DataView(row.rating).getBigInt64(0, true))
        : Number(row.rating),
    date: String(row.date),
    role: row.role ? String(row.role) : '',
  }));
}); 

export const useWorkshopsLoader = routeLoader$(async (event) => {
  const client = tursoClient(event);
  const result = await client.execute('SELECT * FROM classes ORDER BY date ASC');
  return result.rows.map((row: any) => ({
    id: (row as any).id,
    title: (row as any).name,
    description: (row as any).description || `Join our ${(row as any).level.toLowerCase()} pottery class with ${(row as any).instructor}. Learn the fundamentals of pottery in a hands-on workshop.`,
    date: (row as any).date,
    duration: (row as any).duration || '3 hours',
    price: (row as any).price || '$85',
    image: (row as any).image || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: (row as any).instructor,
    spots: (row as any).spots,
    level: (row as any).level as 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels',
  })) as Array<{ 
    id: number; 
    title: string; 
    description: string; 
    date: string; 
    duration: string; 
    price: string; 
    image: string; 
    instructor: string; 
    spots: number; 
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'; 
  }>;
});
//
export default component$(() => {
    const workshops = useWorkshopsLoader();
  return (
    <>
  
      <Hero />
                          <WorkshopsCarousel workshops={workshops.value} />

          <ReviewsCarousel />

{/* <FAQAccordions /> */}

      
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
