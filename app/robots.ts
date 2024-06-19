import { MetadataRoute } from "next";
import { BASE_URL } from "../api";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
