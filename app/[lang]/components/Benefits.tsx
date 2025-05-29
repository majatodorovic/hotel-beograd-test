"use client";

import { canela } from "@/app/fonts";
import Image from "next/image";

export default function Benefits({ data }: any) {
  return (
    <section className="w-full flex justify-center text-white relative">
      <div
        data-aos="fade-in"
        data-aos-easing="fadeUpCustom"
        className="absolute left-0 -z-10 top-0 w-full h-full"
      >
        <Image
          src={"/images/home/home-banner-2.jpg"}
          alt="benefits background"
          width={1920}
          height={757}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-red-800/30"></div>
        <div className="hidden md:block absolute bottom-0 right-0 border-brown-400 border-2 rounded-tl-full bg-white w-24 2xl:w-32 h-1/2 2xl:h-2/3"></div>
      </div>
      <div className="max-w-[1410px] w-full flex flex-col items-center px-6 md:px-8 2xl:px-12 py-20">
        <h3
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className="font-bold text-lg mb-2"
        >
          {data.subheading}
        </h3>
        <h2
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className={`${canela.className} text-4xl md:text-5xl 2xl:text-[62px] leading-tight md:leading-tight 2xl:leading-tight mb-12 md:mb-20 text-center`}
        >
          {data.heading}
        </h2>
        <div className="w-full max-w-sm md:max-w-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {data.list.map(
            (
              item: { icon: string; heading: string; p: string },
              index: number
            ) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  key={index}
                  className="flex flex-col items-start pt-5 pb-7 px-8 md:px-12 bg-[#312b2b]/80 text-white rounded-md"
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={66}
                    height={58}
                    className="h-14 w-auto mb-5"
                  />
                  <h4 className={`${canela.className} text-[28px] mb-3`}>
                    {item.heading}
                  </h4>
                  <p className="text-xs max-w-60">{item.p}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
