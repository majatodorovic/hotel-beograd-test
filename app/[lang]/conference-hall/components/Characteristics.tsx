"use client";

import { canela } from "@/app/fonts";

export default function Characteristics({ data }: any) {
  return (
    <section className="bg-red-800 text-white w-full flex justify-center py-16 md:py-24 2xl:py-36 px-6 md:px-8 2xl:px-12">
      <div className="w-full max-w-3xl 2xl:max-w-[1530px]">
        <div className="w-full flex flex-col items-start md:grid grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16  xl:gap-x-24 gap-y-16 md:gap-y-32 max-w-lg md:max-w-2xl lg:max-w-7xl">
          {data.map((characteristic: any, index: number) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-easing="fadeUpCustom"
                className="flex flex-col"
                key={index}
              >
                <h2
                  className={`text-4xl md:text-5xl 2xl:text-[62px] leading-tight md:leading-tight 2xl:leading-tight mb-6 md:mb-9 ${canela.className}`}
                >
                  {characteristic.heading}
                </h2>
                <p className="text-base md:text-lg 2xl:text-xl">
                  {characteristic.p}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
