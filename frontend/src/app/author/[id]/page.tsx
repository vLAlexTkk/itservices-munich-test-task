import Image from "next/image";
import Link from "next/link";

import { data } from "@/types/dataTypes";
import Breadcrump from "@/components/Breadcrump";

export default function AuthorPage({ params }: { params: { id: string } }) {
  const numericId = parseInt(params.id, 10);
  const authorDetailedInfo = data.articles.find((article) => article.id === numericId);

  if (!authorDetailedInfo) {
    return <h2>{authorDetailedInfo} not found</h2>;
  }

  const filteredArticles = authorDetailedInfo.author
    ? data.articles.filter((article) => article.author === authorDetailedInfo.author)
    : data.articles;

  return (
    <div className="bg-white md:h-screen gap-5 text-black">
      <div className="flex flex-col items-start mx-auto md:max-w-[800px] w-full justify-center">
        <div className="p-5">
          <Breadcrump currentLocation={authorDetailedInfo.author} />
        </div>
        <div className="flex flex-row flex-wrap items-center p-5 border-b w-full justify-between gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-[20px] md:text-[25px]">{authorDetailedInfo.author}</p>
            <span>{authorDetailedInfo.views} subscribers</span>
          </div>
          <Image
            src={authorDetailedInfo.imagePath as string}
            width={100}
            height={100}
            alt={authorDetailedInfo.author}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col w-full items-start border-b p-5 gap-5">
          <h2 className="text-[25px]">Popular categoties</h2>
          <div className="flex flex-row flex-wrap gap-3 rounded-md">
            {data.categories.slice(6, 10).map((feature) => (
              <div
                key={feature.id}
                className="flex py-2 px-4 bg-black/10 text-black rounded-[20px] flex-row items-center gap-2"
              >
                <p>{feature.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full items-start border-b p-5 gap-5">
          <div className="flex flex-row items-center gap-5">
            <h2 className="text-[25px]">Recent posts</h2>
            <p className="py-[1px] px-[7px] rounded-full items-center text-[12px] bg-blue-600 text-white">
              {filteredArticles.length}
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-3 w-full rounded-md">
            {filteredArticles.map((article) => (
              <Link href={`/articles/${article.id}`} key={article.id} passHref legacyBehavior>
                <a className="cursor-pointer hover:text-blue-600 border-b p-2 transition-colors">{article.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
