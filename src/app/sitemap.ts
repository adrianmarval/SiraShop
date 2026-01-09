import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export const revalidate = 604800; // 7 days

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await prisma.product.findMany({
    select: {
      slug: true,
      // updatedAt: true, // Field does not exist
    },
  });

  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/gender/men`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gender/women`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gender/kid`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...productUrls];
}
