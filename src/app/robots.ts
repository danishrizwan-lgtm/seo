import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap:
      "https://seo-demo-5rxr-8nvz4clii-danishrizwan-lgtms-projects.vercel.app//sitemap.xml",
  };
}
