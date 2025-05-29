"use client";

import { canela } from "@/app/fonts";

export default function MoreQuestions({ data }: any) {
  return (
    <section className="flex text-white justify-center py-20 md:py-28 2xl:py-36 px-0 md:px-8 2xl:px-12">
      <div
        data-aos="fade-up"
        data-aos-easing="fadeUpCustom"
        className="flex bg-red-800 px-6 w-full py-16 md:py-20 2xl:py-24 justify-center lg:max-w-7xl 2xl:max-w-[1612px]"
      >
        <div className="flex flex-col items-center max-w-xl">
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-center max-w-2xl text-4xl md:text-5xl 2xl:text-6xl mb-8 md:mb-[72px]`}
          >
            {data.heading}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="leading-7 text-base md:leading-8 md:text-lg xl:leading-9 xl:text-xl mb-12 md:mb-16 2xl:mb-24 text-center"
          >
            {data.p}
          </p>
          <a
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            href="#contact"
            className="text-xl inline-block md:text-2xl underline-after"
          >
            {data.contactLink}
          </a>
        </div>
      </div>
    </section>
  );
}
