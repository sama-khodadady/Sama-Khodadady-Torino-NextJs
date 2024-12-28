import { getTours } from "@/services/httpReq";

export default async function sitemap() {
  const staticRoutes = ["", "services", "about-us", "contact-us"];
  const { data } = await getTours();

  const routes = staticRoutes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date().toString(),
  }));

  const tours = data.map((tour) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tours/${tour.id}`,
    lastModified: new Date().toString(),
  }));

  return [...routes, ...tours];
}
