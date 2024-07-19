"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    {
      icon: "icon1",
      href: "/",
      label: "首页",
    },
    {
      icon: "icon2",
      href: "/about",
      label: "关于我们",
    },
    {
      icon: "icon3",
      href: "/product",
      label: "产品",
    },
    {
      icon: "icon4",
      href: "/post/1",
      label: "博客",
    },
  ];

  return (
    <div className="w-full  backdrop-blur-lg bg-white  p-5">
      <ul className="flex items-center gap-4">
        {links.map((i) => {
          const LinkIcon = i.icon;
          return (
            <Link
              key={i.label}
              href={i.href}
              className={clsx("text-neutral-800", {
                "!text-blue-600": pathname === i.href,
              })}
            >
              <p className="hidden md:block">{i.label}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
