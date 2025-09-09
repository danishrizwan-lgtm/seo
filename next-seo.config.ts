import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | SEO Demo",
  defaultTitle: "SEO Demo Website",
  description: "This is a dummy project to test SEO and Open Graph tags.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seo-demo-5rxr-8nvz4clii-danishrizwan-lgtms-projects.vercel.app/",
    siteName: "SEO Demo",
    images: [
      {
        url: "https://seo-demo-5rxr-8nvz4clii-danishrizwan-lgtms-projects.vercel.app//og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Demo OG Image",
      },
    ],
  },
  twitter: {
    handle: "@demo",
    site: "@demo",
    cardType: "summary_large_image",
  },
};

export default config;
