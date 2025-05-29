import { getDictionary } from "../dictionaries/dictionaries";

import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Accommodation from "./components/Accommodation";
import Restaurant from "./components/Restaurant";
import Art from "./components/Art";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/home/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/home/page.json");
  return (
    <>
      <Header src="/images/home/banner.jpg" lang={lang}>
        <div className="absolute bg-gradient-to-b from-black/80 from-5% via-black/10 to-transparent h-2/3 w-full left-0 top-0"></div>
      </Header>
      <main>
        <Intro data={data.intro} lang={lang} headingClass="max-w-[550px]" />
        <Accommodation data={data.accommodation} lang={lang} />
        <Benefits data={data.benefits} lang={lang} />
        <Restaurant data={data.restaurant} />
        <Art data={data.art} lang={lang} />
      </main>
    </>
  );
}
