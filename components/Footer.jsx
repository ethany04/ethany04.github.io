"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full pt-[2%] items-center bottom-0 overflow-hidden">
      <div className="flex flex-row w-full justify-around items-center pb-[2%] ">
        <div className="w-64">
          <span>
            <button disabled={true} />
          </span>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/12n9RdN0c7ZQ2MYAksyEB7YpIK0yA8IMA/view?usp=sharing"
                >
                  <Image
                    src="/assets/icons/form_blank.svg"
                    alt="Form logo"
                    className="transition-opacity duration-300 transform hover:opacity-0 hover:scale-125"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/icons/form.svg"
                    alt="Form logo"
                    className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ethan-yu-415841228/"
                >
                  <Image
                    src="/assets/icons/linkedin_blank.svg"
                    alt="LinkedIn logo"
                    className="transition-opacity duration-300 transform hover:opacity-0 hover:scale-125"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="LinkedIn logo"
                    className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a target="_blank" href="https://www.instagram.com/ethan.yu7/">
                  <Image
                    src="/assets/icons/instagram_blank.svg"
                    alt="Instagram logo"
                    className="transition-opacity duration-300 transform hover:opacity-0 hover:scale-125"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="Instagram logo"
                    className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a target="_blank" href="https://twitter.com/ethany116">
                  <Image
                    src="/assets/icons/twitter_blank.svg"
                    alt="Twitter logo"
                    className="transition-opacity duration-300 transform hover:opacity-0 hover:scale-125"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/icons/twitter.svg"
                    alt="Twitter logo"
                    className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-64">
          <h1>Have an idea? Pass it my way!</h1>
          <Link
            href="mailto:ethanyu2009@gmail.com"
            className="underline-hover-effect"
          >
            ethanyu2009@gmail.com
          </Link>
        </div>
      </div>
      <div className="relative col-start-1 col-end-13 pb-2 text-clip overflow-hidden">
        <h1 className="text-clip text-zinc-600 hover:text-amber-700 whitespace-nowrap">
          Created with Next.js by Vercel // Created with Next.js by Vercel //
          Created with Next.js by Vercel // Created with Next.js by Vercel //
          Created with Next.js by Vercel // Created with Next.js by Vercel //
          Created with Next.js by Vercel //
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
