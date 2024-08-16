"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
const NavBar = () => {
  const pathname = usePathname();

  const links = [
    {
      icon: "icon2",
      href: "/about",
      label: "about",
    },
    {
      icon: "icon3",
      href: "/product",
      label: "views",
    },
    {
      icon: "icon4",
      href: "/post/1",
      label: "blog",
    },
  ];

  return (
    <div className="w-full   p-5 flex items-center justify-between">
      <Image
        src="/next.svg"
        alt="Vercel Logo"
        className=""
        width={80}
        height={24}
        priority
      />

      <ul className="flex items-center gap-5">
        {links.map((i) => {
          const LinkIcon = i.icon;
          return (
            <Link
              key={i.label}
              href={i.href}
              className={clsx("text-white ", {
                "!text-blue-600": pathname === i.href,
              })}
            >
              <p className="hidden md:block">{i.label}</p>
            </Link>
          );
        })}
      </ul>

      <button className="navBetaButton">
        <span>
          <em>Join Beta</em>
        </span>
        <span>
          <em>Join Beta</em>
        </span>
      </button>
    </div>
  );
};

export default NavBar;
