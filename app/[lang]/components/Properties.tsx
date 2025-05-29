"use client";

import { canela } from "@/app/fonts";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Properties({ data }: any) {
  return (
    <section className="flex justify-center sm:pl-6 2xl:pl-20 w-full mt-24 lg:mt-36 mb-24 md:mb-32 2xl:mb-36">
      <div className="w-full flex justify-start 2xl:pl-40 relative">
        <Image
          data-aos="fade-in"
          data-aos-easing="fadeUpCustom"
          src={"/images/home/dots.png"}
          alt="dots"
          width={424}
          height={688}
          className="hidden 2xl:block absolute w-96 h-auto top-56 left-0"
        />
        <div className="relative w-full flex flex-col items-start pt-12 md:pt-20 pl-6 md:pl-24 2xl:pl-36">
          <div
            data-aos="fade-in"
            data-aos-easing="fadeUpCustom"
            className="absolute w-full h-full left-0 top-0 pb-72"
          >
            <div className="bg-gray-200 w-full h-full"></div>
          </div>
          <div
            className="hidden lg:block w-28 absolute right-0 top-0"
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
          >
            <Image
              src={"/images/home/leafs.png"}
              alt="leafs"
              width={122}
              height={300}
              className="-translate-y-1/2 w-full h-auto -translate-x-20"
            />
          </div>
          <h3
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="font-bold text-red-800 text-lg mb-3"
          >
            {data.subheading}
          </h3>
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${canela.className} text-4xl md:text-5xl 2xl:text-[62px] leading-tight md:leading-tight 2xl:leading-tight mb-12 md:mb-16 max-w-[550px] pr-6`}
          >
            {data.heading}
          </h2>
          <Swiper
            rewind
            loopAddBlankSlides={true}
            slidesPerView={"auto"}
            wrapperClass="h-auto"
            modules={[Navigation]}
          >
            {data.links.map(
              (
                property: {
                  href: string;
                  text: string;
                  p: string;
                  img: string;
                },
                index: number
              ) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-auto mr-9 mb-24 shadow-md"
                  >
                    <div
                      data-aos="fade-up"
                      data-aos-easing="fadeUpCustom"
                      className="flex flex-col relative"
                    >
                      <Image
                        src={property.img}
                        alt={`property ${index + 1}`}
                        width={1650}
                        height={2100}
                        className="w-[calc(100vw-85px)] md:w-full sm:max-w-md 2xl:max-w-lg"
                      />
                      <div className="absolute right-0 bottom-0 md:pl-20 flex justify-end w-full">
                        <div className="w-full flex flex-col items-start relative">
                          <h3
                            className={`${canela.className} text-xl md:text-2xl 2xl:text-[29px] bg-red-800 text-white py-4 px-6 min-w-64`}
                          >
                            {property.text}
                          </h3>
                          <div className="text-sm md:text-base bg-white py-6 md:py-8 pl-6 w-full">
                            <p className="w-full max-w-72 line-clamp-4">
                              {property.p}
                            </p>
                          </div>
                          <div
                            data-aos="fade-in"
                            data-aos-easing="fadeUpCustom"
                            className="absolute top-full"
                          >
                            <a
                              href={property.href}
                              target="_blank"
                              className="text-lg md:text-xl 2xl:text-[25px] flex items-center justify-center border-2 border-black px-9 h-12 md:h-14 mt-7 hover:text-white hover:bg-red-800 box-border"
                            >
                              <span>{data.linkText}</span>
                            </a>
                            <span className="block w-full absolute -bottom-1 h-0.5 bg-red-800"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
