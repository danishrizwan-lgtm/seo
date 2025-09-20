import { NextSeo } from "next-seo";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const title = `Post about ${params.slug}`;
  const description = `This is a demo blog post about ${params.slug}.`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: `https://seo-tau-bice.vercel.app/blog/${params.slug}`,
          images: [
            {
              url: "https://seo-tau-bice.vercel.app/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "SEO Demo Post Image",
            },
          ],
        }}
      />
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
    </>
  );
}
