import { canela } from "@/app/fonts";
import Image from "next/image";

export default function Restaurant({ data }: any) {
  return (
    <section className="w-full flex justify-center relative py-20 md:py-28 2xl:py-36 px-6 md:px-8 2xl:px-12">
      <div className="w-full max-w-[1410px] flex flex-col-reverse lg:flex-row items-start gap-x-24 2xl:gap-x-36">
        <div
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className="relative w-full max-w-lg lg:max-w-none lg:w-1/2 flex items-center"
        >
          <Image
            src={"/images/home/restoran.jpg"}
            alt="home banner 3"
            width={2082}
            height={2190}
            className="w-full h-auto"
          />
          <div className="hidden lg:flex items-center h-0.5 bg-red-800 absolute left-full justify-end w-16 2xl:w-24">
            <div className="w-4 h-4 bg-red-800 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 right-0 border-brown-400 border-2 rounded-tl-full bg-white w-24 h-1/2"></div>
        </div>
        <div className="w-full lg:w-7/12 2xl:w-1/2 flex flex-col items-start relative mb-12 lg:mb-0">
          <h3
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="font-bold text-red-800 text-lg mb-2"
          >
            {data.subheading}
          </h3>
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-4xl md:text-5xl 2xl:text-[62px] leading-tight md:leading-tight 2xl:leading-tight mb-7 max-w-[550px]`}
          >
            {data.heading}
          </h2>
          <div className="flex flex-col items-start w-full">
            {data.paragraphs.map((p: string, index: number) => {
              return (
                <p
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  key={index}
                  className={`text-base md:text-lg 2xl:text-xl ${
                    index === data.paragraphs.length - 1 ? "" : "mb-7"
                  }`}
                >
                  {p}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
