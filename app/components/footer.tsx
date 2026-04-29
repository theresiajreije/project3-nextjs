import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00CC99] px-6 py-12 text-white sm:px-10 md:px-14 lg:h-[411px] lg:px-[90px] lg:pt-[180px] lg:pb-0">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.6fr_0.7fr] lg:gap-[90px]">

        {/* LOGO */}
        <div>
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
                  <Link href="#" className="flex items-center gap-2 hover:text-black">
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

          <div className="flex flex-wrap items-center gap-5 lg:gap-6">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/social-google.png"
                alt="google"
                width={24}
                height={24}
                className="h-7 w-7 lg:h-5 lg:w-5"
              />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/social-facebook.png"
                alt="google"
                width={24}
                height={24}
                className="h-7 w-7 lg:h-5 lg:w-5"
              />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/social-twitter.png"
                alt="google"
                width={24}
                height={24}
                className="h-7 w-7 lg:h-5 lg:w-5"
              />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/social-linkedin.png"
                alt="google"
                width={24}
                height={24}
                className="h-7 w-7 lg:h-5 lg:w-5"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}