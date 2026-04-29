"use client";

import Link from "next/link";
import { LogIn, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full font-[Poppins]">
      <div className="flex w-full items-stretch bg-[#F4F4F4]">
        {/* LEFT SIDE: LOGO + LINKS */}
        <div className="flex flex-1 items-center px-6 py-6 lg:px-14">
          <Link href="/">
            <div className="flex h-[41px] w-[162px] items-center cursor-pointer">
              <span className="text-[40px] font-extrabold leading-none text-black">
                Job
              </span>

              <span className="text-[40px] font-extrabold leading-none text-[#00CC99]">
                N
              </span>

              <Image
                src="/images/search-o.png"
                alt="o"
                width={28}
                height={28}
                className="h-[28px] w-[28px] object-contain"
              />

              <span className="text-[40px] font-extrabold leading-none text-[#00CC99]">
                w
              </span>
            </div>
          </Link>

          <div className="ml-[320px] hidden items-center gap-8 text-[16px] font-semibold text-black lg:flex">
            <Link
              href="/job"
              className="transition duration-300 hover:text-[#00CC99]"
            >
              Job
            </Link>

            <Link
              href="/about"
              className="transition duration-300 hover:text-[#00CC99]"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="transition duration-300 hover:text-[#00CC99]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* RIGHT GREEN AREA */}
        <div className="hidden w-[605px] items-center justify-end gap-10 bg-[#00CC99] px-14 text-white lg:flex">
          <Link
            href="/signin"
            className="text-[16px] font-normal leading-[24px] text-white transition duration-300 hover:opacity-80"
          >
            Sign In
          </Link>

          <button className="flex h-[39px] w-[185px] items-center justify-center gap-3 rounded-md bg-white text-[16px] font-semibold text-black transition hover:bg-[#F4F4F4]">
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
          <Link
            className="block border-b px-6 py-4 text-black transition hover:text-[#00CC99]"
            href="/job"
          >
            Job
          </Link>

          <Link
            className="block border-b px-6 py-4 text-black transition hover:text-[#00CC99]"
            href="/about"
          >
            About Us
          </Link>

          <Link
            className="block border-b px-6 py-4 text-black transition hover:text-[#00CC99]"
            href="/contact"
          >
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