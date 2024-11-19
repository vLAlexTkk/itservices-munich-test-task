import Image from "next/image";

interface AuthorProps {
  id: number;
  author: string;
  views: string;
  imagePath: string;
}

export function Authors({ author, views, imagePath }: AuthorProps) {
  return (
    <div className="flex flex-row bg-black/5 hover:bg-blue-600 hover:text-white cursor-pointer items-center transition-colors p-2 rounded-md gap-2">
      <Image src={imagePath} width={30} className="rounded-full" height={30} alt={author} />
      <div className="flex flex-col">
        <a className="text-[14px]">{author}</a>
        <p className="text-[12px] capitalize">{views} subscribers</p>
      </div>
    </div>
  );
}
