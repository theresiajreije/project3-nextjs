import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00CC99] px-6 py-12 font-[Poppins] text-white sm:px-10 md:px-14 lg:px-[90px] lg:pt-[110px] lg:pb-[70px]">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.6fr_0.7fr] lg:gap-[90px]">
        
        {/* LOGO */}
        <div>
          <h2 className="mb-6 flex items-center leading-none">
            <span className="text-[34px] font-extrabold text-black lg:text-[44px]">
              Job
            </span>

            <span className="ml-3 text-[34px] font-extrabold text-white lg:text-[44px]">
              N
            </span>

            <Image
              src="/images/icon-search.png"
              alt="Search"
              width={32}
              height={32}
              className="h-[24px] w-[24px] object-contain brightness-0 invert lg:h-[32px] lg:w-[32px]"
              priority
            />

            <span className="text-[34px] font-extrabold text-white lg:text-[44px]">
              w
            </span>
          </h2>

          <p className="max-w-[560px] text-[12px] leading-5 text-white md:text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex.
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

          <div className="flex flex-wrap items-center gap-5">
            <Image src="/images/social-google.png" alt="google" width={24} height={24} />
            <Image src="/images/social-facebook.png" alt="facebook" width={24} height={24} />
            <Image src="/images/social-twitter.png" alt="twitter" width={24} height={24} />
            <Image src="/images/social-linkedin.png" alt="linkedin" width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}