import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Hero from "~/components/widgets/Hero";
import FAQAccordion from "~/components/widgets/FAQAccordion";
// import FAQAccordion from "~/components/widgets/FAQAccordion";

// Define the Workshop interface to match the updated database schema
// interface Workshop {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   duration: string;
//   price: string;
//   image: string;
//   instructor: string;
//   spots: number;
// }

// export const useReviewsLoader = routeLoader$(async (event) => {
//   const client = tursoClient(event);
//   const result = await client.execute('SELECT * FROM reviews ORDER BY id ASC');
//   return result.rows.map(row => ({
//     id: typeof row.id === 'bigint'
//       ? Number(row.id)
//       : row.id instanceof ArrayBuffer
//         ? Number(new DataView(row.id).getBigInt64(0, true))
//         : Number(row.id),
//     name: String(row.name),
//     review: String(row.review),
//     rating: typeof row.rating === 'bigint'
//       ? Number(row.rating)
//       : row.rating instanceof ArrayBuffer
//         ? Number(new DataView(row.rating).getBigInt64(0, true))
//         : Number(row.rating),
//     date: String(row.date),
//     role: row.role ? String(row.role) : '',
//   }));
// });

// export const useWorkshopsLoader = routeLoader$(async (event) => {
//   const client = tursoClient(event);
//   const result = await client.execute('SELECT * FROM classes ORDER BY date ASC');
//   return result.rows.map((row: any) => ({
//     id: typeof row.id === 'bigint'
//       ? Number(row.id)
//       : row.id instanceof ArrayBuffer
//         ? Number(new DataView(row.id).getBigInt64(0, true))
//         : Number(row.id),
//     title: String(row.name),
//     description: row.description || `Join our pottery class with ${row.instructor || 'our instructor'}. Learn the fundamentals of pottery in a hands-on workshop.`,
//     date: String(row.date),
//     duration: row.duration ? String(row.duration) : '3 hours',
//     price: row.price ? String(row.price) : '$85',
//     image: row.image ? String(row.image) : 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     instructor: row.instructor ? String(row.instructor) : 'our instructor',
//     spots: typeof row.spots === 'bigint'
//       ? Number(row.spots)
//       : row.spots instanceof ArrayBuffer
//         ? Number(new DataView(row.spots).getBigInt64(0, true))
//         : Number(row.spots),
//   })) as Workshop[];
// });

export default component$(() => {
  return (
    <>
      <Hero />
      {/* <WorkshopsCarousel workshops={workshops.value} isHomePage={true} /> */}
      
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