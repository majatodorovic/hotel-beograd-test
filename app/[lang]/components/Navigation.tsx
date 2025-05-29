"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import SideNav from "./SideNav";
import { canela } from "@/app/fonts";

export default function Navigation({
  lang,
  data,
}: {
  lang: string;
  data: any;
}) {
  const pathname = usePathname();
  console.log(pathname);
  const router = useRouter();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<null | boolean>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToNewDynamicRoute = (lang: string) => {
    // Extract the current path without the existing `lang` parameter
    const currentPath = pathname.replace(/^\/[^\/]+/, `/${lang}`);

    // Push the updated URL with the new `lang` parameter
    router.push(currentPath);
  };

  return (
    <>
      <nav
        className={`w-full animate-[fadeIn_0.8s_ease] fixed top-0 left-0 flex items-center justify-between duration-300 z-10 ${
          isScrolled || pathname !== `/${lang}` ? "shadow-md" : ""
        } ${
          pathname !== `/${lang}` && !isScrolled
            ? "bg-red-800 xl:bg-white"
            : isScrolled
            ? "bg-red-800"
            : "bg-red-800 xl:bg-transparent"
        } `}
      >
        <Link
          href={`/${lang}`}
          className={`hidden xl:flex items-center justify-center ${
            isScrolled
              ? "h-full pl-12 3xl:pl-16 pr-10 3xl:pr-12"
              : pathname !== `/${lang}`
              ? "self-stretch py-6 px-8"
              : "self-stretch w-64 3xl:w-80 px-10 3xl:px-12 py-9"
          } bg-red-800`}
        >
          <Image
            src={`/images/navigation/${isScrolled ? "textLogo" : "logo"}.png`}
            alt="logo"
            width={1000}
            height={800}
            className={`${
              isScrolled
                ? "w-48 3xl:w-52"
                : pathname !== `/${lang}`
                ? "w-36"
                : "w-full"
            } h-auto`}
          />
        </Link>
        <Link
          href={`/${lang}`}
          className={`flex xl:hidden items-center justify-center py-8 px-8 bg-red-800`}
        >
          <Image
            src={`/images/navigation/textLogo.png`}
            alt="logo"
            width={1000}
            height={800}
            className={"w-48 3xl:w-52"}
          />
        </Link>
        <button className="xl:hidden mr-6" onClick={() => setSideNavOpen(true)}>
          <Image
            src={"/images/navigation/hamburgerWhite.png"}
            alt="hamburger button"
            width={50}
            height={50}
            className={`${
              pathname !== `/${lang}` && !isScrolled ? "xl:invert" : ""
            }`}
          />
        </button>
        <div
          className={`w-full justify-center hidden xl:flex duration-300 xl:px-6 2xl:px-10 3xl:px-12 grow ${
            isScrolled
              ? "bg-red-800 shadow-md"
              : `${pathname !== `/${lang}` ? "bg-white" : "bg-transparent"}`
          }`}
        >
          <div
            className={`flex flex-col items-start w-full xl:max-w-[1080px] 2xl:max-w-7xl 3xl:max-w-[1410px] ${
              pathname !== `/${lang}` && !isScrolled
                ? " text-black"
                : " text-white"
            } ${isScrolled ? "" : "divide-y-2"} ${
              pathname !== `/${lang}` && !isScrolled ? "divide-red-800" : ""
            }`}
          >
            <div
              className={`hidden xl:flex w-full justify-between items-center ${
                isScrolled ? "xl:hidden" : ""
              } ${pathname !== `/${lang}` ? "py-5" : "pt-16 pb-6"}`}
            >
              <div className={`flex text-base divide-x-2`}>
                <div className="pl-0 2xl:pl-10 px-6 2xl:px-10 3xl:px-12">
                  <a
                    href={`tel: ${data.contact.tel}`}
                    className="underline-after-expandable"
                  >
                    {data.contact.tel}
                  </a>
                </div>
                <div className="px-6 2xl:px-10 3xl:px-12">
                  <a
                    href={`mailto: ${data.contact.mail}`}
                    className="underline-after-expandable"
                  >
                    {data.contact.mail}
                  </a>
                </div>
                <div className="px-6 2xl:px-10 3xl:px-12">
                  <span>{data.contact.address}</span>
                </div>
                <div className="px-6 2xl:px-10 3xl:px-12">
                  <a
                    href={`${data.contact.addressLink}`}
                    target="_blank"
                    className="underline-after"
                  >
                    {data.contact.addressBtn}
                  </a>
                </div>
              </div>
              <button
                className="w-40 py-2 bg-red-800 text-white hover:bg-black"
                onClick={() => {
                  goToNewDynamicRoute(data.languagesBtn.code);
                }}
              >
                <span>{data.languagesBtn.text}</span>
              </button>
            </div>
            <div className="w-full justify-between hidden xl:flex items-center">
              <div
                className={`w-full ${canela.className} flex flex-wrap items-center justify-start xl:text-xl 2xl:text-2xl 3xl:text-[25px] xl:gap-10 2xl:gap-x-14 3xl:gap-x-[74px]`}
              >
                {data.links.map((link: any, index: number) => {
                  return (
                    <div className="relative" key={index}>
                      <Link
                        prefetch={false}
                        href={`/${lang}${link.href}`}
                        className={`w-full relative inline-block after:block after:absolute after:w-full after:duration-300 after:h-1.5 ${
                          isScrolled ? "hover:after:bg-white" : ""
                        } after:left-0 after:top-0 py-7 ${
                          pathname === `/${lang}${link.href}` &&
                          pathname === `/${lang}` &&
                          !isScrolled
                            ? "after:bg-white"
                            : pathname === `/${lang}${link.href}` && !isScrolled
                            ? "after:bg-red-800"
                            : pathname === `/${lang}${link.href}` && isScrolled
                            ? "after:bg-white"
                            : ""
                        } ${
                          pathname === `/${lang}` && !isScrolled
                            ? "hover:after:bg-white"
                            : pathname !== `/${lang}` && !isScrolled
                            ? "hover:after:bg-red-800"
                            : ""
                        }`}
                      >
                        {link.text}
                      </Link>
                    </div>
                  );
                })}
              </div>
              {isScrolled && (
                <button
                  className="w-40 py-2 bg-white text-black shrink-0 border-transparent hover:text-white hover:border-white hover:border-2 hover:bg-red-800"
                  onClick={() => {
                    goToNewDynamicRoute(data.languagesBtn.code);
                  }}
                >
                  <span>{data.languagesBtn.text}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {
          <SideNav
            open={sideNavOpen}
            lang={lang}
            setOpen={setSideNavOpen}
            data={data}
          />
        }
      </nav>
    </>
  );
}
