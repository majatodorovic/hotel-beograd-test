import { getDictionary } from "@/app/dictionaries/dictionaries";
import Gallery from "./components/Gallery";
import Intro from "../components/Intro";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/gallery/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/gallery/page.json");
  const images = await getDictionary(lang, "/components/gallery.json");
  return (
    <>
      <main className="pt-[98px] xl:pt-[166px] 2xl:pt-[170px]">
        <Intro
          lang={lang}
          data={data.intro}
          headingClass="max-w-lg"
          rightColClass="xl:pr-24 2xl:pr-36"
        />
        <Gallery data={{ ...images, loadMoreBtn: data.loadMoreBtn }} />
      </main>
    </>
  );
}
