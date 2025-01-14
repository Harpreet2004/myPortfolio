"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { FaBars as MenuIcon, FaTimes as CloseIcon } from "react-icons/fa";


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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <div className="flex items-center justify-between px-4">
        {/* Logo Section */}
        

        {/* Hamburger Icon */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <CloseIcon className="text-2xl invert" />
          ) : (
            <MenuIcon className="text-2xl invert" />
          )}
        </button>
      </div>

      {/* Links Section */}
      <div
        className={cn(
          " lg:flex lg:items-center lg:space-x-4 lg:static lg:visible lg:flex-row transition-all duration-300",
          isMenuOpen ? "block" : "hidden",
          "lg:block absolute inset-x-0 top-16 bg-white dark:bg-black rounded-md shadow-lg p-4 lg:p-0"
        )}
      >
        <Menu setActive={setActive} >
        <Link href={"#home"} onClick={closeMenu}>
          <Image
            src="../../public/../assets/home.svg"
            height="50"
            width="50"
            className="min-[320px]:h-5 object-contain rounded-xl group-hover/card:shadow-xl invert"
            alt="thumbnail"
          />
        </Link>
          <Link href={"#experience"} onClick={closeMenu} >
            <MenuItem setActive={setActive} active={active} item="Experience" />
          </Link>
          <Link href={"#skills"}  onClick={closeMenu}>
            <MenuItem setActive={setActive} active={active} item="Skills" />
          </Link>
          <Link href={"#projects"}  onClick={closeMenu}>
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </Link>
          <Link href={"#contact"}  onClick={closeMenu}>
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </Link>
        </Menu>
      </div>
    </div>
  );
}
