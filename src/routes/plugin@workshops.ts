import { routeLoader$ } from '@builder.io/qwik-city';
import { tursoClient } from '../components/utils/turso';

export const useWorkshopsLoader = routeLoader$(async (event) => {
  const client = tursoClient(event);
  const result = await client.execute('SELECT * FROM classes ORDER BY date ASC');
  return result.rows.map((row: any) => ({
    id: (row as any).id,
    title: (row as any).name,
    description: (row as any).description || `Join our pottery class with ${(row as any).instructor}. Learn the fundamentals of pottery in a hands-on workshop.`,
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