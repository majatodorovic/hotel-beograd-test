import { getDictionary } from "@/app/dictionaries/dictionaries";
import RoomsBathrooms from "./components/RoomsBathrooms";
import RoomTypes from "./components/RoomTypes";
import Intro from "../components/Intro";

export async function generateMetadata({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/accommodation/meta.json");

  return data;
}

export default async function Home({ params }: any) {
  const { lang } = await params;
  const data = await getDictionary(lang, "/accommodation/page.json");
  return (
    <>
      <main className="pt-[98px] xl:pt-[166px] 2xl:pt-[170px]">
        <Intro lang={lang} data={data.intro} />
        <RoomsBathrooms data={data.roomsBathrooms} />
        <br />
        <br />
        <RoomTypes data={data.roomTypes} />
      </main>
    </>
  );
}
