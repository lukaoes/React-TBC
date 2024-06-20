import { MetadataRoute } from "next";
import { BASE_URL } from "../api";
import {
  getBlogDisplay,
  getCampsitesDisplay,
  getUserProductsDisplay,
  getUsers,
} from "../actions";

async function fetchData(fetchFunction: {
  (): Promise<any>;
  (): Promise<any>;
  (): Promise<any>;
  (): Promise<any>;
  (): any;
}) {
  try {
    return await fetchFunction();
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogPosts, allProds, allCampsites, allUsers] = await Promise.all([
    fetchData(getBlogDisplay),
    fetchData(getUserProductsDisplay),
    fetchData(getCampsitesDisplay),
    fetchData(getUsers),
  ]);

  const generateUrls = (items: any[], path: string, lang: string) =>
    items.map((item) => ({
      url: `${BASE_URL}/${lang}/${path}/${
        item.nickname ? item.nickname : item.id
      }`,
    }));

  const blogsGe = generateUrls(blogPosts, "blog", "ge");
  const productsGe = generateUrls(allProds, "products", "ge");
  const campsitesGe = generateUrls(allCampsites, "campsites", "ge");
  const usersGe = generateUrls(allUsers, "user", "ge");

  const blogsEn = generateUrls(blogPosts, "blog", "en");
  const productsEn = generateUrls(allProds, "products", "en");
  const campsitesEn = generateUrls(allCampsites, "campsites", "en");
  const usersEn = generateUrls(allUsers, "user", "en");

  const staticPaths = [
    "/products",
    "/campsites",
    "/blog",
    "/contact",
    "/cart",
    "/add",
    "/add/product",
    "/add/campsite",
    "/blog/add",
    "/profile",
    "/profile/address",
    "/profile/orders",
  ];

  const staticGe = staticPaths.map((path) => ({
    url: `${BASE_URL}/ge${path}`,
  }));
  const staticEn = staticPaths.map((path) => ({
    url: `${BASE_URL}/en${path}`,
  }));

  return [
    ...staticGe,
    ...staticEn,
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
