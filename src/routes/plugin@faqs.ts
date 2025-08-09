// src/routes/plugin@faq.ts

import { routeLoader$ } from '@builder.io/qwik-city';
import { tursoClient } from '../components/utils/turso';

export const useFaqsLoader = routeLoader$(async (event) => {
  const client = tursoClient(event);
  const result = await client.execute('SELECT * FROM faqs ORDER BY id ASC');
  return result.rows.map(row => ({
    id: typeof row.id === 'bigint'
      ? Number(row.id)
      : row.id instanceof ArrayBuffer
        ? Number(new DataView(row.id).getBigInt64(0, true))
        : Number(row.id),
    question: String(row.question),
    answer: String(row.answer),
  }));
});