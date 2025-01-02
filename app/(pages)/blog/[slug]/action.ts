export default async function getBlog(slug: string) {
  const data = await fetch(
    `http://localhost:3000/api/blogs/?where[slug][equals]=${slug}`
  );
  const posts = await data.json();

  return posts;
}
