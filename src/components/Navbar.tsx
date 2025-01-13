"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>

          <Image
            src="../../public/../assets/home.svg"
            height="100"
            width="100"
            className="min-[320px]:h-5 w-full object-contain rounded-xl group-hover/card:shadow-xl invert"
            alt="thumbnail"
          />

        </Link>
        <Link href={"/experience"}>
          <MenuItem setActive={setActive} active={active} item="Experience">

          </MenuItem>
        </Link>
        <Link href={"#skills"}>
          <MenuItem setActive={setActive} active={active} item="Skills">

          </MenuItem>
        </Link>
        <Link href={"/projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">

          </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">

          </MenuItem>
        </Link>

      </Menu>
    </div>
  );
}
