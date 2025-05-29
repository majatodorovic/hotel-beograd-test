"use client";

import { canela } from "@/app/fonts";

export default function FoodMenu({ data }: any) {
  return (
    <section
      className="w-full flex flex-col items-center px-4 md:px-8"
      id="foodMenu"
    >
      <h2
        data-aos="fade-up"
        data-aos-easing="fadeUpCustom"
        className={`${canela.className} text-center text-5xl md:text-6xl 2xl:text-[64px] mb-10 md:mb-16 2xl:mb-24`}
      >
        {data.heading}
      </h2>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-9 gap-y-8 lg:gap-y-16 max-w-lg lg:max-w-5xl 2xl:max-w-[1612px] w-full">
        {data.items.map((item: any, key: number) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-easing="fadeUpCustom"
              key={key}
              className="flex flex-col h-full px-6 md:px-10 2xl:px-14 even:py-6 odd:py-10 lg:even:py-10 2xl:py-14 items-start w-full odd:bg-gray-200"
            >
              <h3>{item.category}</h3>
              {item.categories.map((category: any, categoryId: number) => {
                return (
                  <div
                    key={`${key}-${categoryId}`}
                    className="flex flex-col items-start w-full mb-8 md:mb-10 2xl:mb-12"
                  >
                    <h3
                      className={`${canela.className} text-[40px] mb-6 md:mb-10 2xl:mb-12`}
                    >
                      {category.category}
                    </h3>
                    {category.items.map(
                      (categoryItem: any, categoryItemIndex: number) => {
                        return (
                          <div
                            className="flex flex-col items-start w-full mb-2"
                            key={`${key}-${categoryId}-${categoryItemIndex}`}
                          >
                            {categoryItem.name && (
                              <h4
                                className={`text-xl font-bold ${
                                  categoryItem.description ? "mb-1" : "mb-2"
                                }`}
                              >
                                {categoryItem.name}
                              </h4>
                            )}
                            {categoryItem.description &&
                              categoryItem.description
                                .split("\n")
                                .map((line: string, index: number) => (
                                  <p
                                    key={index}
                                    className="text-base md:text-lg xl:text-xl 2xl:text-xl"
                                  >
                                    {line}
                                    {index !==
                                      categoryItem.description.split("\n")
                                        .length -
                                        1 && (
                                      <>
                                        <br />
                                        <br />
                                      </>
                                    )}
                                  </p>
                                ))}
                          </div>
                        );
                      }
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
