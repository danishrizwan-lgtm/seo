// app/sitemap.ts
import { MetadataRoute } from "next";
import { categories, posts } from "../../lib/dummyData"; // use alias if tsconfig has it

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://seo-tau-bice.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://seo-tau-bice.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...categories.map((c) => ({
      url: `https://seo-tau-bice.vercel.app/category/${c.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((p) => ({
      url: `https://seo-tau-bice.vercel.app/category/${p.category}/${p.slug}`,
      lastModified: new Date(p.updatedAt),
    })),
  ];
}
