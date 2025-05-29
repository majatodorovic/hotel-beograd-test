"use client";

import { canela } from "@/app/fonts";
import Image from "next/image";

export default function RoomsBathrooms({ data }: any) {
  return (
    <section className="bg-red-800 text-white flex justify-center pt-20 md:pt-24 2xl:pt-20 pb-20 md:pb-24 2xl:pb-28 px-6 md:px-8 2xl:px-12">
      <div className="flex flex-col gap-y-16 md:flex-row lg:max-w-7xl 2xl:max-w-[1612px] items-start w-full gap-x-10 md:gap-x-16 xl:gap-x-36 2xl:gap-x-56">
        <div className="flex flex-col items-start">
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-5xl md:text-6xl 2xl:text-[64px] mb-10 md:mb-16 2xl:mb-20`}
          >
            {data.roomList.heading}
          </h2>
          <ul className="flex flex-col items-start gap-y-5 md:gap-y-6 2xl:gap-y-7">
            {data.roomList.items.map((li: any, index: number) => (
              <div
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                key={index}
                className="flex items-center"
              >
                <Image
                  src={"/images/accommodation/checkmark.png"}
                  className="invert w-6 md:w-7 2xl:w-8 h-auto mr-7 md:mr-8 2xl:mr-9"
                  alt="checkmark icon"
                  width={512}
                  height={512}
                />
                <span className="text-lg md:text-xl">{li}</span>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-5xl md:text-6xl 2xl:text-[64px] mb-10 md:mb-16 2xl:mb-20`}
          >
            {data.bathroomList.heading}
          </h2>
          <ul className="flex flex-col items-start gap-y-5 md:gap-y-6 2xl:gap-y-7">
            {data.bathroomList.items.map((li: any, index: number) => (
              <div
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                key={index}
                className="flex items-center"
              >
                <Image
                  src={"/images/accommodation/checkmark.png"}
                  className="invert w-6 md:w-7 2xl:w-8 h-auto mr-7 md:mr-8 2xl:mr-9"
                  alt="checkmark icon"
                  width={512}
                  height={512}
                />
                <span className="text-lg md:text-xl">{li}</span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
