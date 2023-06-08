"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header className="flex flex-row pt-10 pl-8 justify-between pr-24 items-center">
      <div className="">
        <Link href="/">
          <Image
            src="/assets/icons/yu.svg"
            alt="Yu"
            width={50}
            height={50}
            className="bg-zinc-800 rounded-md pt-1 pr-1 pl-1 pb-1"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <Link href="/projects">Projects</Link>
        <span className="w-24" />
        <Link href="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
