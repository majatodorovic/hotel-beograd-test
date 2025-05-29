import { canela } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Intro({
  data,
  lang,
  subheadingClass,
  headingClass,
  rightColClass,
}: any) {
  return (
    <section className="flex justify-center w-full items-start px-6 md:px-8 2xl:px-12">
      <div className="w-full max-w-[1410px] flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-x-28 2xl:gap-x-36 py-20 md:py-28 2xl:py-36">
        <div className="md:pb-28 pl-0 md:pl-16 md:-translate-x-8 lg:translate-x-0 relative w-full lg:w-5/12 max-w-xl lg:max-w-none">
          <div
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="w-28 absolute right-full top-0 "
          >
            <Image
              src={"/images/home/leafs.png"}
              alt="leafs"
              width={122}
              height={300}
              className="w-full h-auto -translate-x-4 -translate-y-14 -scale-x-100"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className="relative"
          >
            <div className="hidden md:block absolute left-0 top-0 w-full h-full border-brown-400 border-2 -translate-x-16 translate-y-28"></div>
            <Image
              src={data.img}
              alt="intro image"
              width={1515}
              height={1839}
              className="relative w-full h-auto"
            />
            <div className="absolute bottom-0 right-0 border-brown-400 border-2 rounded-tl-full bg-white w-14 h-1/3"></div>
            <div className="bg-red-800/70 flex items-center justify-center absolute right-0 top-0 md:translate-x-1/2 w-20 md:w-24 h-20 md:h-24">
              {data.videoLink && (
                <a
                  className="flex items-center justify-center w-full h-full"
                  href={data.videoLink}
                  target="_blank"
                >
                  <Image
                    src={"/images/home/playIcon.png"}
                    alt="play icon"
                    width={17}
                    height={26}
                    className="h-1/4 w-auto"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
        <div
          className={`w-full lg:w-7/12 2xl:w-1/2 ${
            rightColClass ? rightColClass : ""
          } flex flex-col items-start relative mb-12 sm:mb-20 lg:mb-0`}
        >
          <Image
            data-aos="fade-in"
            data-aos-easing="fadeUpCustom"
            src={"/images/home/hotel.png"}
            alt="hotel sketch"
            width={1024}
            height={1024}
            className="absolute top-0 lg:top-40 right-0 lg:-right-52 w-96 h-auto -z-10 opacity-15"
          />
          <h3
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`font-bold text-red-800 text-lg mb-3 uppercase ${
              subheadingClass ? subheadingClass : ""
            }`}
          >
            {data.subheading}
          </h3>
          <h2
            data-aos="fade-up"
            data-aos-easing="fadeUpCustom"
            className={`${
              canela.className
            } text-4xl md:text-5xl 2xl:text-[62px] leading-tight md:leading-tight 2xl:leading-tight mb-7 ${
              headingClass ? headingClass : ""
            }`}
          >
            {data.heading}
          </h2>
          <div className={`flex flex-col items-start w-full`}>
            {data.paragraphs.map((p: string, index: number) => {
              return (
                <p
                  data-aos="fade-up"
                  data-aos-easing="fadeUpCustom"
                  key={index}
                  className={`text-base md:text-lg 2xl:text-xl ${
                    index === data.paragraphs.length - 1 ? "" : "mb-7"
                  }`}
                  dangerouslySetInnerHTML={{ __html: p }}
                ></p>
              );
            })}
          </div>
          {data.benefits && (
            <div
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className="flex items-center flex-wrap gap-y-8 gap-x-11 mt-16 pb-3 w-full lg:w-[calc(150%+20rem)] border-b-2 border-brown-400/25"
            >
              {data.benefits.map(
                (benefit: { icon: string; text: string }, index: number) => (
                  <div key={index} className="flex items-center gap-x-4">
                    <Image
                      src={benefit.icon}
                      alt="benefit icon"
                      width={32}
                      height={32}
                    />
                    <span
                      className={`${canela.className} text-red-800 text-lg 2xl:text-xl`}
                    >
                      {benefit.text}
                    </span>
                  </div>
                )
              )}
            </div>
          )}
          {data.btn && (
            <div
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              className="relative group"
            >
              <Link
                prefetch={false}
                href={
                  data.btn.booking ? data.btn.href : `/${lang}${data.btn.href}`
                }
                target={data.btn.booking ? "_blank" : "_self"}
                className="text-lg md:text-xl 2xl:text-[25px] flex items-center justify-center border-2 border-black relative px-6 sm:px-9 h-12 md:h-14 mt-11 hover:text-white hover:bg-red-800 box-border"
              >
                <span>{data.btn.text}</span>
                {data.btn.booking && (
                  <Image
                    src={"/images/accommodation/booking-com.svg"}
                    alt="booking"
                    width={100}
                    height={25}
                    className="ml-3 h-5 md:h-6 2xl:h-7 w-auto group-hover:invert"
                  />
                )}
              </Link>
              <span className="block w-full absolute -bottom-1 h-0.5 bg-red-800"></span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
