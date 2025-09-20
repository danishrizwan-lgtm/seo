// src/app/category/[slug]/page.tsx
import { categories, posts } from "../../../../lib/dummyData";
interface CategoryPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} News | MySite`,
    description: `Latest updates and articles from ${category.name}.`,
    openGraph: {
      title: `${category.name} News`,
      description: `Stay updated with the latest in ${category.name}.`,
      url: `https://seo-tau-bice.vercel.app/category/${params.slug}`,
      images: [category.image],
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryPosts = posts.filter((p) => p.category === params.slug);

  if (!categoryPosts.length) {
    return <h1>No posts found in {params.slug}</h1>;
  }

  return (
    <div>
      <h1>{params.slug} News</h1>
      <ul>
        {categoryPosts.map((post) => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
