import { MetadataRoute } from "next";
import { BASE_URL } from "../api";
import {
  getBlogDisplay,
  getCampsitesDisplay,
  getUserProductsDisplay,
  getUsers,
} from "../actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogDisplay();
  const allProds = await getUserProductsDisplay();
  const allCampsites = await getCampsitesDisplay();
  const allUsers = await getUsers();

  const blogsGe: MetadataRoute.Sitemap = blogPosts.map((blog: any) => ({
    url: `${BASE_URL}/ge/blog/${blog.id}`,
  }));

  const productsGe: MetadataRoute.Sitemap = allProds.map((prod: any) => ({
    url: `${BASE_URL}/ge/products/${prod.id}`,
  }));

  const campsitesGe: MetadataRoute.Sitemap = allCampsites.map((camp: any) => ({
    url: `${BASE_URL}/ge/campsites/${camp.id}`,
  }));

  const usersGe: MetadataRoute.Sitemap = allUsers.map((user: any) => ({
    url: `${BASE_URL}/ge/user/${user.nickname}`,
  }));

  const blogsEn: MetadataRoute.Sitemap = blogPosts.map((blog: any) => ({
    url: `${BASE_URL}/en/blog/${blog.id}`,
  }));

  const productsEn: MetadataRoute.Sitemap = allProds.map((prod: any) => ({
    url: `${BASE_URL}/en/products/${prod.id}`,
  }));

  const campsitesEn: MetadataRoute.Sitemap = allCampsites.map((camp: any) => ({
    url: `${BASE_URL}/en/campsites/${camp.id}`,
  }));

  const usersEn: MetadataRoute.Sitemap = allUsers.map((user: any) => ({
    url: `${BASE_URL}/en/user/${user.nickname}`,
  }));

  return [
    {
      url: `${BASE_URL}/ge/products`,
    },
    {
      url: `${BASE_URL}/ge/campsites`,
    },
    {
      url: `${BASE_URL}/ge/blog`,
    },
    {
      url: `${BASE_URL}/ge/contact`,
    },
    {
      url: `${BASE_URL}/ge/cart`,
    },
    {
      url: `${BASE_URL}/ge/add`,
    },
    {
      url: `${BASE_URL}/ge/add/product`,
    },
    {
      url: `${BASE_URL}/ge/add/campsite`,
    },
    {
      url: `${BASE_URL}/ge/blog/add`,
    },
    {
      url: `${BASE_URL}/ge/profile`,
    },
    {
      url: `${BASE_URL}/ge/profile/address`,
    },
    {
      url: `${BASE_URL}/ge/profile/orders`,
    },
    {
      url: `${BASE_URL}/en/products`,
    },
    {
      url: `${BASE_URL}/en/campsites`,
    },
    {
      url: `${BASE_URL}/en/blog`,
    },
    {
      url: `${BASE_URL}/en/contact`,
    },
    {
      url: `${BASE_URL}/en/cart`,
    },
    {
      url: `${BASE_URL}/en/add`,
    },
    {
      url: `${BASE_URL}/en/add/product`,
    },
    {
      url: `${BASE_URL}/en/add/campsite`,
    },
    {
      url: `${BASE_URL}/en/blog/add`,
    },
    {
      url: `${BASE_URL}/en/profile`,
    },
    {
      url: `${BASE_URL}/en/profile/address`,
    },
    {
      url: `${BASE_URL}/en/profile/orders`,
    },
    ...blogsGe,
    ...productsGe,
    ...campsitesGe,
    ...usersGe,
    ...blogsEn,
    ...productsEn,
    ...campsitesEn,
    ...usersEn,
  ];
}
