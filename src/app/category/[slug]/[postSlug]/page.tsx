// src/app/category/[slug]/[postSlug]/page.tsx
import { categories, posts } from "../../../../../lib/dummyData";
interface PostPageProps {
  params: { slug: string; postSlug: string };
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = posts.find((p) => p.slug === params.postSlug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://seo-tau-bice.vercel.app/category/${params.slug}/${params.postSlug}`,
      images: [post.postimage],
    },
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.slug === params.postSlug);

  if (!post) return <h1>Post Not Found</h1>;

  return (
    <article>
      <h1>{post.title}</h1>
      <img src={post.postimage} alt={post.title} />
      <p>{post.content}</p>
    </article>
  );
}
