export async function fetchHighlights() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!baseUrl) throw new Error('Backend URL is not set in environment variables');
  const res = await fetch(`${baseUrl}/api/highlights?populate=*`);
  if (!res.ok) throw new Error('Failed to fetch highlights');
  const data = await res.json();
  return data;
}

export async function fetchNews() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!baseUrl) throw new Error('Backend URL is not set in environment variables');
  const res = await fetch(`${baseUrl}/api/news?populate=*`);
  if (!res.ok) throw new Error('Failed to fetch news');
  const data = await res.json();
  return data;
}



export async function fetchNewsBySlug(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!baseUrl) throw new Error('Backend URL is not set in environment variables');
  const res = await fetch(`${baseUrl}/api/news?filters[slug][$eq]=${slug}&populate=*`);
  if (!res.ok) throw new Error('Failed to fetch news by slug');
  const data = await res.json();
  return data;
} 

export async function fetchEvents() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!baseUrl) throw new Error('Backend URL is not set in environment variables');
  const res = await fetch(`${baseUrl}/api/school-events?populate=*`);
  if (!res.ok) throw new Error('Failed to fetch news');
  const data = await res.json();
  return data;
}



export async function fetchGallery() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!baseUrl) throw new Error('Backend URL is not set in environment variables');
  const res = await fetch(`${baseUrl}/api/galleries?populate=*`);
  if (!res.ok) throw new Error('Failed to fetch news');
  const data = await res.json();
  return data;
}