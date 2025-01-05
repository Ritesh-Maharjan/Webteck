export default async function getBlog(slug: string) {
  const PAYLOAD_URL = process.env.PAYLOAD_URL;
  const data = await fetch(`${PAYLOAD_URL}/api/blogs?where[slug][equals]=${slug}`);
  const posts = await data.json();

  return posts;
}
