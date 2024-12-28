import HomePage from "@/template/HomePage";

export default async function Home({ searchParams }) {
  const queries = await searchParams;
  return <HomePage queries={queries} />;
}
