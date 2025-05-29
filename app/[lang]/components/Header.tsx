"use client";

import Image from "next/image";

import { Locale } from "@/app/dictionaries/dictionaries";

export default function Header({
  src,
  children,
}: {
  lang: Locale;
  src: string;
  heading?: string;
  children?: React.ReactNode;
}) {
  return (
    <header
      data-aos="fade-in"
      data-aos-easing="fadeUpCustom"
      className="w-full relative flex justify-center"
    >
      <Image
        src={src}
        alt="banner"
        width={1920}
        height={770}
        className={`w-full duration-300 min-h-[300px] h-[25.6vw] sm:h-[52vw] 2xl:max-h-screen md:min-h-[500px]  object-bottom object-cover`}
      />
      {children}
    </header>
  );
}
