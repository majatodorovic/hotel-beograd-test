import { getDictionary } from "@/app/dictionaries/dictionaries";
import Mission from "./components/Mission";
import Intro from "../components/Intro";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/about-us/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/about-us/page.json");
  return (
    <>
      <main className="pt-[98px] xl:pt-[166px] 2xl:pt-[170px]">
        <Intro lang={lang} data={data.intro} headingClass="max-w-xl" />
        <Mission data={data} />
      </main>
    </>
  );
}
