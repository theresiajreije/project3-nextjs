"use client";

import Link from "next/link";
import { LogIn, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full font-[Poppins]">
      {/* TOP BAR */}
      <div className="flex w-full items-stretch bg-[#F4F4F4]">
        {/* LOGO + LINKS */}
        <div className="flex flex-1 items-center justify-between px-6 py-6 lg:px-14">
          {/* LOGO */}
          <h1 className="flex items-center text-[32px] font-extrabold leading-none lg:text-[44px]">
            <span className="text-black">Job</span>

            <span className="flex items-center text-[#00CC99]">
              N
              <Image
                src="/images/search-o.png"
                alt="o"
                width={32}
                height={32}
                className="mx-1 h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]"
              />
              w
            </span>
          </h1>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-14 text-[16px] font-semibold text-black lg:flex">
            <Link href="/">Home</Link>
            <Link href="/job">Job</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* RIGHT GREEN AREA */}
        <div className="hidden items-center gap-10 bg-[#00CC99] px-14 text-white lg:flex">
          <Link href="/signin" className="text-[16px] font-semibold">
            Sign In
          </Link>

          <button className="flex items-center gap-3 rounded-xl bg-[#F4F4F4] px-8 py-4 text-[16px] font-semibold text-black">
            <LogIn size={20} />
            Create Account
          </button>
        </div>

        {/* MOBILE GREEN AREA + MENU */}
        <div className="flex items-center bg-[#00CC99] px-4 sm:px-6 lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center"
          >
            <Menu size={30} className="text-black" />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="border-t border-gray-200 bg-[#F4F4F4] lg:hidden">
          <Link className="block border-b px-6 py-4 text-black" href="/">
            Home
          </Link>
          <Link className="block border-b px-6 py-4 text-black" href="/job">
            Job
          </Link>
          <Link className="block border-b px-6 py-4 text-black" href="/about">
            About Us
          </Link>
          <Link className="block border-b px-6 py-4 text-black" href="/contact">
            Contact
          </Link>

          <div className="bg-[#00CC99] px-6 py-6">
            <Link
              href="/signin"
              className="mb-5 block text-[16px] font-semibold text-white"
            >
              Sign In
            </Link>

            <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#F4F4F4] px-6 py-4 font-semibold text-black">
              <LogIn size={20} />
              Create Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}