"use client";

import Link from "next/link";
import { LogIn, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto grid min-h-[80px] max-w-[1700px] grid-cols-1 lg:min-h-[95px] lg:grid-cols-[1fr_605px]">
        {/* LEFT SIDE */}
        <div className="flex items-center justify-between px-6 py-5 sm:px-10 md:px-14 lg:items-end lg:px-[90px] lg:pb-[10px] lg:pt-0">
          <div className="flex items-center gap-10 lg:items-end xl:gap-[120px] 2xl:gap-[220px]">
            {/* LOGO */}
            <Link href="/" className="cursor-pointer">
              <div className="flex items-end">
                <span className="text-[34px] font-extrabold leading-none text-black sm:text-[40px]">
                  Job
                </span>

                <span className="text-[34px] font-extrabold leading-none text-[#00CC99] sm:text-[40px]">
                  N
                </span>

                <Image
                  src="/images/search-o.png"
                  alt="o"
                  width={28}
                  height={28}
                  className="h-[24px] w-[24px] object-contain sm:h-[28px] sm:w-[28px]"
                />

                <span className="text-[34px] font-extrabold leading-none text-[#00CC99] sm:text-[40px]">
                  w
                </span>
              </div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden items-end gap-10 lg:flex">
              <Link
                href="/job"
                className="text-[16px] font-semibold leading-[24px] text-black transition hover:text-[#00CC99]"
              >
                Job
              </Link>

              <Link
                href="/about"
                className="whitespace-nowrap text-[16px] font-semibold leading-[24px] text-black transition hover:text-[#00CC99]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-[16px] font-semibold leading-[24px] text-black transition hover:text-[#00CC99]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex cursor-pointer items-center justify-center lg:hidden"
          >
            {open ? (
              <X size={30} className="text-black" />
            ) : (
              <Menu size={30} className="text-black" />
            )}
          </button>
        </div>

        {/* RIGHT GREEN AREA - DESKTOP */}
        <div className="hidden items-end justify-end gap-10 px-[70px] pb-[10px] text-white lg:flex">
          <Link
            href="/signin"
            className="text-[16px] font-normal leading-[24px] text-white transition hover:opacity-80"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="flex h-[39px] w-[185px] cursor-pointer items-center justify-center gap-3 rounded-md bg-white text-[16px] font-semibold text-black transition hover:bg-[#F4F4F4]"
          >
            <LogIn size={20} />
            Create Account
          </Link>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-[#F4F4F4] shadow-md lg:hidden">
          <Link
            onClick={() => setOpen(false)}
            className="block border-b px-6 py-4 text-[16px] font-semibold text-black"
            href="/job"
          >
            Job
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="block border-b px-6 py-4 text-[16px] font-semibold text-black"
            href="/about"
          >
            About Us
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="block border-b px-6 py-4 text-[16px] font-semibold text-black"
            href="/contact"
          >
            Contact
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="block border-b px-6 py-4 text-[16px] font-semibold text-black"
            href="/signin"
          >
            Sign In
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="mx-6 my-4 flex h-[42px] items-center justify-center gap-3 rounded-md bg-[#00CC99] text-[16px] font-semibold text-white"
            href="/signup"
          >
            <LogIn size={20} />
            Create Account
          </Link>
        </div>
      )}
    </nav>
  );
}