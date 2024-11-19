import Link from "next/link";

interface BreadcrumpProps {
  currentLocation: string;
}

export default function Breadcrump({ currentLocation }: BreadcrumpProps) {
  return (
    <div className="flex flex-row flex-wrap text-[10px] md:text-[16px] items-center py-5 gap-2">
      <Link href={"/"} passHref legacyBehavior>
        <a className="bg-black/5 hover:bg-blue-600 transition-all py-1 px-5 rounded-[20px] text-black hover:text-white">
          Home
        </a>
      </Link>
      <p>-</p>
      <p className="bg-black py-1 px-5 rounded-[20px] text-white">{currentLocation}`s Profile</p>
    </div>
  );
}
