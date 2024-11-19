"use client";

import Image from "next/image";

import { useState } from "react";
import { useCategory } from "@/context/CategoryContext";

import { data } from "@/types/dataTypes";

export function Layout({ children }: { children: React.ReactNode }) {
  const { setSelectedCategory } = useCategory();

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openAdditionalCategories, setOpenAdditionalCategories] = useState<boolean>(false);

  return (
    <section className="flex flex-col md:flex-row">
      <header className="flex md:hidden w-full text-black border-b flex-col px-5 py-2 gap-1 bg-white">
        <div className="flex items-end justify-end">
          <button onClick={() => setOpenMenu(!openMenu)}>
            <Image src={"/icons/menu-icon.svg"} width={20} height={20} alt="menu-icon" />
          </button>
        </div>
        <div className={openMenu ? "flex flex-col gap-2 py-3" : "hidden"}>
          {data.categories.slice(0, 5).map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="hover:text-white bg-black/10 px-3 transition-colors py-1 rounded-md hover:bg-blue-600 flex flex-row items-center justify-between w-full"
            >
              <p className="">{category.name}</p>
              <p className="w-[20px] h-[20px] flex flex-row pt-[1px] rounded-full items-center justify-center text-[12px] bg-white text-black">
                {data.articles.filter((article) => article.category_id === category.id).length}
              </p>
            </div>
          ))}
          <div className="pt-3">
            <button
              onClick={() => setOpenAdditionalCategories(!openAdditionalCategories)}
              className="text-black flex flex-row w-full items-center justify-between"
            >
              <p>Also can be interesting...</p>
              <Image
                className={openAdditionalCategories ? "transition-all rotate-180" : "transition-all"}
                src={"/icons/arrow-down.svg"}
                width={20}
                height={20}
                alt="arrow-down"
              />
            </button>
            <div className={openAdditionalCategories ? "flex flex-col gap-2 py-3" : "hidden"}>
              {data.categories.slice(6).map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="hover:text-white bg-black/10 px-3 transition-colors py-1 rounded-md hover:bg-blue-600 flex flex-row items-center justify-between w-full"
                >
                  <p>{category.name}</p>
                  <p className="w-[45px] h-[20px] flex flex-row pt-[1px] rounded-full items-center justify-center text-[12px] bg-white text-black">
                    <span>+</span>
                    <span>Add</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <aside className="w-full hidden flex-col md:flex md:max-w-[250px] lg:max-w-[350px] gap-10 bg-white/95 text-black p-5">
        <div className="flex flex-col items-start">
          <p className="uppercase text-[12px]">Categories</p>
          <div className="flex flex-col h-full max-h-[300px] overflow-y-auto gap-1 mt-5 w-full">
            {data.categories.slice(0, 5).map((category) => (
              <div
                onClick={() => setSelectedCategory(category.id)}
                key={category.id}
                className="text-black w-full py-2 px-4 transition-all cursor-pointer hover:bg-black/10 rounded-[20px] items-center flex flex-row gap-2"
              >
                <Image src={category.iconPath} width={20} height={20} alt={category.name} />
                <div className="flex flex-ro justify-between w-full gap-2 items-center">
                  <p>{category.name}</p>
                  <p className="w-[20px] h-[20px] flex flex-row pt-[1px] rounded-full items-center justify-center text-[12px] bg-blue-600 text-white">
                    {data.articles.filter((article) => article.category_id === category.id).length}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-black/20" />
        <div className="flex flex-col items-start">
          <p className="uppercase text-[12px]">You may also be interested in:</p>
          <div className="flex flex-col gap-1 mt-5 h-full max-h-[300px] overflow-y-auto w-full">
            {data.categories.slice(5).map((category) => (
              <div
                key={category.id}
                className="text-black w-full py-2 px-4 transition-all cursor-pointer hover:bg-black/10 rounded-[20px] flex flex-row gap-2"
              >
                <div className="flex flex-ro justify-between w-full gap-2 items-center">
                  <p>{category.name}</p>
                  <p className="py-[1px] px-[7px] flex flex-row items-center gap-1 rounded-full text-[12px] bg-blue-600 text-white">
                    <span>+</span>
                    <span>Add</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <main className="p-3 md:p-10 bg-white w-full text-black">
        <div className="flex flex-col overflow-y-auto h-screen max-h-[800px] md:max-w-[850px]">{children}</div>
      </main>
    </section>
  );
}
