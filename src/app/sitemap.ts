import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://seo-demo-5rxr-8nvz4clii-danishrizwan-lgtms-projects.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://seo-demo-5rxr-8nvz4clii-danishrizwan-lgtms-projects.vercel.app//about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
