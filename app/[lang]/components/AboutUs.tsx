"use client";

import Image from "next/image";
import { canela } from "@/app/fonts";
import Link from "next/link";

export default function AboutUs({ data, lang }: any) {
  return (
    <section className="flex justify-center px-4 sm:px-7 py-20 md:py-32 2xl:py-36">
      <div className="flex flex-col-reverse max-w-3xl xl:grid xl:grid-cols-5 2xl:grid-cols-2 w-full xl:max-w-[1612px]">
        <div
          data-aos="fade-up"
          data-aos-easing="fadeUpCustom"
          className="grid col-span-2 2xl:col-span-1 grid-cols-3 grid-rows-2 w-full gap-3 sm:gap-5"
        >
          <Image
            src={"/images/home/about-us-one.jpg"}
            width={1635}
            height={1101}
            alt="o nama"
            className="col-span-2 w-full h-full object-cover"
          />
          <Image
            src={"/images/home/about-us-three.jpg"}
            width={711}
            height={2274}
            alt="o nama"
            className="row-span-2 w-full"
          />
          <Image
            src={"/images/home/about-us-two.jpg"}
            width={1635}
            height={1101}
            alt="o nama"
            className="col-span-2 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col mb-12 col-span-3 2xl:col-span-1 xl:lg-0 items-start w-full xl:pl-24 self-center px-4 2xl:pl-32 2xl:pr-4">
          <h3
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="font-bold text-xl md:text-2xl mb-8 md:mb-11"
          >
            {data.subheading}
          </h3>
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-4xl md:text-5xl 2xl:text-6xl mb-8 md:mb-11 max-w-80 sm:max-w-md`}
          >
            {data.heading}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="text-base md:text-xl"
          >
            {data.p}
          </p>
          <Link
            prefetch={false}
            href={`/${lang}/${data.href}`}
            className="text-xl md:text-2xl underline-after mt-8 md:mt-12"
          >
            <span
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className="inline-block"
            >
              {data.linkText}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
