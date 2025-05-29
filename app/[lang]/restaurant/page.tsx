import { getDictionary } from "@/app/dictionaries/dictionaries";
import FoodMenu from "./components/FoodMenu";
import Intro from "../components/Intro";
import Gallery from "./components/Gallery";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/restaurant/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/restaurant/page.json");
  const menu = await getDictionary(lang, "/components/restaurant.json");
  return (
    <>
      <main className="pt-[98px] xl:pt-[166px] 2xl:pt-[170px]">
        <Intro data={data.intro} lang={lang} headingClass="max-w-xl" />
        <Gallery data={data.gallery} />
        <FoodMenu lang={lang} data={menu} />
      </main>
    </>
  );
}
