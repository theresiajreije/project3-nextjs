"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass =
    "text-[var(--text)] transition-colors duration-200 hover:text-[var(--brand)]";

  const navLinkWhiteClass =
    "text-white/90 transition-colors duration-200 hover:text-white";

  const primaryBtnClass =
    "rounded-xl bg-white px-5 py-2 text-base font-bold text-[var(--text)] shadow transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md active:translate-y-0";

  const mobileMenuLinkClass =
    "w-fit text-[var(--text)] transition-colors duration-200 hover:text-[var(--brand)]";

  const mobileBtnClass =
    "grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)] text-white shadow-md transition-all duration-200 hover:brightness-95 hover:shadow-lg active:scale-[0.98]";

  return (
    <header className="relative w-full overflow-visible">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
       <div className="hidden items-center md:grid md:grid-cols-[minmax(0,1fr)_36%]">
          <div className="flex min-w-0 items-center bg-[var(--left)] py-5">
            <div className="shrink-0 flex items-center leading-none">
              <span className="text-[40px] font-extrabold text-black">Job</span>
              <span className="text-[40px] font-extrabold text-[var(--brand)]">N</span>

              <Image
                src="/images/search-o.png"
                alt="Search icon"
                width={25}
                height={25}
                className="h-[25px] w-[25px] object-contain"
                priority
              />

              <span className="text-[40px] font-extrabold text-[var(--brand)]">w</span>
            </div>

            <nav className="ml-[228px] flex items-center gap-10 whitespace-nowrap font-bold text-[17px]">
              <a href="#" className={navLinkClass}>Home</a>
              <a href="#" className={navLinkClass}>Job</a>
              <a href="#" className={navLinkClass}>About Us</a>
              <a href="#" className={navLinkClass}>Contact</a>
            </nav>
          </div>

          {/* RIGHT PART */}
          <div className="flex min-w-0 items-center justify-end gap-3 bg-[var(--brand)]  md:gap-4 lg:gap-6  xl:gap-8 py-5 ">
            <a
              href="#"
              className={`shrink-0 font-bold whitespace-nowrap md:text-[12px] lg:text-[15px] xl:text-base ${navLinkWhiteClass}`}
            >
              Sign In
            </a>

            <a
              href="#"
              className={`${primaryBtnClass} shrink-0 whitespace-nowrap md:px-3 md:py-[10px] md:text-[12px] lg:px-4 lg:text-[14px] xl:px-5 xl:text-base`}
            >
              <span className="flex items-center gap-2 whitespace-nowrap">
                <Image
                  src="/images/create-account-icon.png"
                  alt="Create account icon"
                  width={16}
                  height={16}
                />
                Create Account
              </span>
            </a>
          </div>
        </div>
        <div className="relative h-[70px] md:hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-2xl font-extrabold tracking-tight text-[var(--text)]">
              Job
              <span className="inline-flex items-baseline text-[var(--brand)]">
                N
                <span className="mx-[3px] inline-flex items-center justify-center">
                  <Image
                    src="/images/search-o.png"
                    alt="Search icon"
                    width={18}
                    height={18}
                    className="relative top-[1px]"
                    priority
                  />
                </span>
                w
              </span>
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setOpen((v) => !v)}
              className={mobileBtnClass}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

     {open && (
  <div className="absolute left-0 top-0 z-[9999] w-full bg-[var(--left)] px-6 pb-8 pt-5 shadow-lg md:hidden">
    <div className="flex items-center justify-between">
      <div className="text-2xl font-extrabold tracking-tight text-[var(--text)]">
        Job
        <span className="inline-flex items-baseline text-[var(--brand)]">
          N
          <span className="mx-[3px] inline-flex items-center justify-center">
            <Image
              src="/images/search-o.png"
              alt="Search icon"
              width={18}
              height={18}
              className="relative top-[1px]"
              priority
            />
          </span>
          w
        </span>
      </div>

      <button
        onClick={() => setOpen(false)}
        className="text-xl font-bold text-[var(--brand)]"
      >
        ✕
      </button>
    </div>

    <nav className="mt-10 flex flex-col items-center gap-5 text-[12px] font-bold">
      <a href="#" className={mobileMenuLinkClass}>Home</a>
      <a href="#" className={mobileMenuLinkClass}>Job</a>
      <a href="#" className={mobileMenuLinkClass}>About Us</a>
      <a href="#" className={mobileMenuLinkClass}>Contact</a>
    </nav>
  </div>
)}
    </header>
  );
}