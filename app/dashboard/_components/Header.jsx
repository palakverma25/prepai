"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Import Link for navigation

const Header = () => {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.png"} width={150} height={10} alt="logo" />
      <ul className="hidden md:flex gap-6">
        <li>
          <Link
            href="/dashboard"
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard" ? "text-primary font-bold" : ""
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/about"
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/about" ? "text-primary font-bold" : ""
            }`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/how"
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/how" ? "text-primary font-bold" : ""
            }`}
          >
            How it works?
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/contact"
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/contact" ? "text-primary font-bold" : ""
            }`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
