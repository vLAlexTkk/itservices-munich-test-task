import Link from "next/link";
import Image from "next/image";

import { Authors } from "@/components/Authors";
import Breadcrump from "@/components/Breadcrump";

import data from "@/data/articlesData.json";

export default function ArticleDetails({ params }: { params: { id: string } }) {
  const numericId = parseInt(params.id, 10);
  const articleDetailedInfo = data.articles.find((article) => article.id === numericId);

  if (!articleDetailedInfo) {
    return <h2>{articleDetailedInfo} not found</h2>;
  }

  return (
    <div className="bg-white items-baseline flex flex-row flex-wrap xl:justify-evenly text-black">
      <div className="flex-col hidden lg:flex gap-5">
        <div className="flex flex-col md:flex md:max-w-[200px] p-5 gap-2">
          <p className="border-b border-black/10 pb-5 text-[12px] uppercase">Articles you might also like</p>
          <div className="flex flex-col gap-2">
            {data.articles.slice(0, 5).map((article) => (
              <Link href={`/articles/${article.id}`} key={article.id} legacyBehavior>
                <a className="text-[12px] border-b hover:text-black/50 transition-colors rounded-md p-2">
                  {article.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden flex-col p-5 w-full md:flex xl:hidden md:max-w-[200px] gap-2">
          <p className="border-b border-black/10 pb-5 text-[12px] uppercase">Popular profiles</p>
          <div className="flex flex-col gap-2">
            {data.articles.slice(0, 5).map((article) => (
              <div key={article.id}>
                <Link href={`/author/${article.id}`} passHref legacyBehavior>
                  <Authors
                    author={article.author}
                    views={article.views}
                    id={article.id}
                    imagePath={article.imagePath as string}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:max-w-[800px] md:h-screen px-5 py-5 gap-5">
        <div className="flex flex-row items-center py-5 gap-2">
          <Breadcrump currentLocation={articleDetailedInfo.title} />
        </div>
        <div className="flex flex-row items-center flex-wrap justify-between gap-2">
          <h2 className="text-[25px]">{articleDetailedInfo.title}</h2>
          <p>{articleDetailedInfo.author}</p>
        </div>
        <div className="flex flex-col gap-5">
          <p>{articleDetailedInfo.content}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis in laborum. Consectetur corporis
            deserunt dolores iure, in eum cupiditate dolor nemo, reprehenderit doloribus tenetur illo porro omnis quo?
            Molestias illum facere fuga. Beatae accusamus magni, mollitia laudantium delectus dolorum! Unde debitis
            delectus eius dolorum, maiores nesciunt modi voluptatibus velit itaque impedit, dicta, fugit soluta dolore
            eaque cupiditate! <br />
            <br /> Neque sint a natus, aut iste repudiandae minus ab sit, porro, recusandae pariatur earum voluptatem
            quo. Minus vitae error eius non alias rem consectetur consequuntur accusantium iure laborum quo magnam iusto
            earum ducimus placeat culpa ipsum, repellendus ullam. Iste fugit sequi deserunt. Cupiditate eos labore
            quibusdam suscipit harum dolorem assumenda, aut ut nisi et quos tempora magni sapiente deleniti molestias,
            architecto ducimus illum consectetur ab officiis.
          </p>
        </div>
        <div className="flex justify-end items-center gap-1">
          <Image src={"/icons/views-icon.svg"} width={15} height={15} alt={articleDetailedInfo.title} />
          <p>{articleDetailedInfo.views} views</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full lg:max-w-[200px]">
        <div className="flex flex-col p-5 w-full lg:hidden xl:flex lg:max-w-[200px] gap-2">
          <p className="border-b border-black/10 pb-5 text-[12px] uppercase">Popular profiles</p>
          <div className="flex flex-col gap-2">
            {data.articles.slice(0, 5).map((article) => (
              <div key={article.id}>
                <Link href={`/author/${article.id}`} passHref legacyBehavior>
                  <Authors
                    author={article.author}
                    views={article.views}
                    id={article.id}
                    imagePath={article.imagePath as string}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:hidden xl:hidden w-full lg:max-w-[200px] p-5 gap-2">
          <p className="border-b border-black/10 pb-5 text-[12px] uppercase">Articles you might also like</p>
          <div className="flex flex-col gap-2">
            {data.articles.slice(0, 5).map((article) => (
              <Link href={`/articles/${article.id}`} key={article.id} legacyBehavior>
                <a className="text-[12px] border-b hover:text-black/50 transition-colors rounded-md p-2">
                  {article.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
