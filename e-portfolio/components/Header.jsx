"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header className="flex flex-row pl-8 justify-between pr-24 items-center w-full h-[12%] backdrop-filter backdrop-blur-lg fixed z-10 transition ease-in-out duration-500 border-b border-white">
      <div className="">
        <Link href="/">
          <Image
            src="/assets/icons/tonghao.svg"
            alt="Yu"
            width={100}
            height={50}
            className="bg-zinc-800 rounded-md pt-1 pr-1 pl-1 pb-1"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <Link href="/">Projects</Link>
        <span className="w-24" />
        <Link href="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
