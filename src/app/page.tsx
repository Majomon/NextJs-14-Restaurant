import api from "@/api";

export default async function HomePage() {
  const restaurants = await api.list();

  console.log(restaurants);

  return <section>👋</section>;
}
