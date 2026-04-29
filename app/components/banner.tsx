import { Search, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 lg:min-h-[590px] lg:grid-cols-[1fr_605px]">
        
        {/* LEFT CONTENT */}
        <div className="px-6 pb-14 pt-14 sm:px-10 sm:pb-16 sm:pt-16 md:px-14 lg:px-[90px] lg:pb-[190px] lg:pt-[118px]">
          
          <h1 className="max-w-[650px] text-[36px] font-bold leading-[40px] text-black sm:text-[42px] sm:leading-[46px] lg:text-[48px] lg:leading-[48px]">
            Search, Find, & Apply
          </h1>

          <p className="mt-5 max-w-[650px] text-[14px] font-normal leading-[22px] text-black sm:mt-6 sm:text-[16px] sm:leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>

          {/* SEARCH BOXES */}
          <div className="mt-8 w-full max-w-[750px] sm:mt-10">
            <div className="flex w-full flex-col gap-4 rounded-[18px] bg-white p-4 sm:p-5 md:flex-row md:items-center md:gap-4 lg:h-[90px] lg:px-[25px]">

              {/* INPUT 1 */}
              <div className="flex h-[50px] w-full items-center gap-4 rounded-lg bg-[#F7F7F7] px-4 md:flex-1 lg:w-[283px] lg:flex-none lg:px-5">
                <Search size={24} className="shrink-0 text-black" />
                <span className="truncate text-[14px] font-semibold leading-[20px] text-black">
                  Job title or Keyword
                </span>
              </div>

              {/* INPUT 2 */}
              <div className="flex h-[50px] w-full items-center justify-between rounded-lg bg-[#F7F7F7] px-4 md:flex-1 lg:w-[283px] lg:flex-none lg:px-5">
                <div className="flex min-w-0 items-center gap-4">
                  <MapPin size={24} className="shrink-0 text-black" />
                  <span className="truncate text-[14px] font-semibold leading-[20px] text-black">
                    Location
                  </span>
                </div>
                <ChevronDown size={20} className="shrink-0 text-black" />
              </div>

              {/* BUTTON */}
              <button className="h-[48px] w-full rounded-[10px] bg-[#00CC99] text-[16px] font-semibold text-white transition hover:bg-[#00b889] md:w-[110px] lg:h-[43px]">
                Search
              </button>

            </div>
          </div>
        </div>

       {/* RIGHT GREEN AREA */}
<div className="relative hidden h-full min-h-[558px] w-[605px] overflow-hidden rounded-bl-[50px]  lg:block">
  <div className="absolute left-[18%] top-[16%] grid h-[90px] w-[90px] rotate-[-5deg] place-items-center rounded-[14px] bg-white shadow-sm">
    <Image src="/images/tile-search.png" alt="Search icon" width={50} height={50} />
  </div>

  <div className="absolute right-[10%] top-[43%] grid h-[90px] w-[90px] rotate-[12deg] place-items-center rounded-[14px] bg-white shadow-sm">
    <Image src="/images/tile-chart.png" alt="Chart icon" width={50} height={50} />
  </div>

  <div className="absolute left-[13%] top-[70%] grid h-[90px] w-[90px] rotate-[-10deg] place-items-center rounded-[14px] bg-white shadow-sm">
    <Image src="/images/tile-shield.png" alt="Shield icon" width={50} height={50} />
  </div>
</div>
      
      </div>
    </section>
  );
}