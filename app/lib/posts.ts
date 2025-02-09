// lib/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

interface Post {
  slug: string;
  title: string;
  date: Date;
}

export function getSortedPostsData() {
  // Get file names under /content/posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: Post[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get the slug
    const slug = fileName.replace(/\.md$/, "");
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Parse the metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the slug
    const { title, date } = matterResult.data as {
      title: string;
      date: string;
    };
    return {
      slug,
      title,
      date: new Date(date),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like this:
  // [
  //   { params: { slug: 'ssg-ssr' } },
  //   { params: { slug: 'pre-rendering' } },
  //   // ...
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // Parse the metadata section
  const matterResult = matter(fileContents);

  // Define the expected structure of the front matter
  const { title, date, content, ...otherData } = matterResult.data;
  // Combine the data with the slug
  return {
    slug,
    content,
    title,
    date,
    ...otherData,
  };
}
