import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
   <footer className="relative mt-[30px] bg-[#00CC99] text-white sm:px-10 md:px-14 lg:h-[520px] lg:px-[90px] lg:pt-[180px] lg:pb-0">
      <div className="absolute left-1/2 top-0 w-full max-w-[1365px] -translate-x-1/2 -translate-y-1/2 px-6">
        <div className="mx-auto flex flex-col items-center justify-center rounded-[20px] bg-[#003a2c] px-6 py-10 text-center md:px-12 md:py-14">

          <h3 className="text-[35px] font-bold text-white md:text-[34px]">
            Register your CV now!
          </h3>

          <p className="mt-8 max-w-[730px] text-[14px] leading-[20px] text-[#AAAAAA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex h-[48px] items-center justify-center rounded-[8px] border border-white px-10 text-[14px] font-bold text-white transition duration-300 hover:bg-white/10"
          >
            Register Now
          </a>

        </div>
      </div>

      {/* ORIGINAL CONTENT (UNCHANGED) */}
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-10 pt-[88px] sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.6fr_0.7fr] lg:gap-[90px]">
        {/* LOGO */}
        <div className="lg:mt-[37px]">
          <Link href="/">
            <h2 className="mb-3 flex cursor-pointer items-center leading-none">
              <span className="text-[40px] font-extrabold text-black">Job</span>
              <span className="text-[40px] font-extrabold text-white">N</span>

              <Image
                src="/images/icon-search.png"
                alt="Search"
                width={28}
                height={28}
                className="h-[28px] w-[28px] object-contain brightness-0 invert"
                priority
              />

              <span className="text-[40px] font-extrabold text-white">w</span>
            </h2>
          </Link>

          <p className="max-w-[326px] text-[12px] font-light leading-[18px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="mb-5 text-[20px] font-semibold leading-[28px]">
            Company
          </h3>

          <div className="space-y-2 text-[12px] font-normal leading-[18px] text-white">
            <p>Address: 123 Fifth Avenue, New York – 1060, USA</p>
            <p>Call Us: *(1600) 456 7890</p>
            <p>Email: yourid@example.com</p>
            <p>Mon Sat: 9:00 AM - 19:00 PM</p>
          </div>
        </div>

        {/* PAGES */}
        <div>
          <h3 className="mb-5 text-[20px] font-semibold leading-[28px]">
            Pages
          </h3>

          <ul className="space-y-2 text-[12px] font-normal leading-[18px] text-white">
            {["Home", "Booking", "Facilities", "About Us", "Location", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="flex items-center gap-2 transition duration-300 hover:text-black"
                  >
                    <span>{">"}</span>
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-5 text-[20px] font-semibold leading-[28px]">
            Contact Us
          </h3>

          <div className="mt-5 flex gap-4">
            <Image src="/images/social-google.png" alt="" width={20} height={20} className="cursor-pointer transition duration-300 hover:scale-110 hover:opacity-80" />
            <Image src="/images/social-facebook.png" alt="" width={20} height={20} className="cursor-pointer transition duration-300 hover:scale-110 hover:opacity-80" />
            <Image src="/images/social-twitter.png" alt="" width={20} height={20} className="cursor-pointer transition duration-300 hover:scale-110 hover:opacity-80" />
            <Image src="/images/social-linkedin.png" alt="" width={20} height={20} className="cursor-pointer transition duration-300 hover:scale-110 hover:opacity-80" />
          </div>
        </div>

      </div>
    </footer>
  );
}