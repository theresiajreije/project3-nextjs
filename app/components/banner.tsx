import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid w-full md:min-h-[580px] md:grid-cols-[minmax(0,1fr)_36%]">
          
          {/* LEFT CONTENT */}
          <div className="bg-[var(--left)]">
            <div className="flex min-h-[520px] flex-col justify-center py-12 md:min-h-[580px] md:py-20">
              <div className="flex w-full max-w-[760px] flex-col gap-[10px] text-center md:max-w-[680px] md:pr-8 md:text-left lg:max-w-[760px]">
                
                <h1 className="text-[32px] font-extrabold leading-tight text-[var(--text)] sm:text-[38px] md:text-[36px] lg:text-[44px] xl:text-[50px]">
                  Search, Find, &amp; Apply
                </h1>

                <p className="mx-auto mt-4 max-w-[620px] text-[15px] font-semibold leading-[24px] text-black md:mx-0 md:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>

                {/* SEARCH BOX */}
                <div className="mt-8 w-full">
                  <div className="mx-auto w-full max-w-[760px] rounded-[20px] bg-white p-3 shadow-md md:mx-0 md:flex md:min-h-[76px] md:items-center md:px-4">
                    <div className="flex w-full flex-col gap-3 md:flex-row md:items-center">
                      
                      <div className="flex h-[47px] w-full items-center gap-2 rounded-[10px] bg-[#f9f9f9] px-3 md:flex-1">
                        <Image
                          src="/images/icon-search.png"
                          alt="Search"
                          width={18}
                          height={18}
                          className="shrink-0"
                        />
                        <input
                          className="w-full bg-transparent text-[14px] font-bold text-black outline-none placeholder:font-bold placeholder:text-black"
                          placeholder="Job title or Keyword"
                        />
                      </div>

                      <div className="flex h-[47px] w-full items-center gap-2 rounded-[10px] bg-[#f9f9f9] px-3 md:flex-1">
                        <Image
                          src="/images/icon-location.png"
                          alt="Location"
                          width={18}
                          height={18}
                          className="shrink-0"
                        />

                        <select
                          className="w-full cursor-pointer appearance-none bg-transparent px-2 text-[14px] font-semibold text-black outline-none"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Location
                          </option>
                          <option value="location1">Location 1</option>
                          <option value="location2">Location 2</option>
                          <option value="location3">Location 3</option>
                        </select>

                        <span className="text-xs">▾</span>
                      </div>

                      <button className="h-[47px] w-full rounded-[10px] bg-[#00cc99] text-[16px] font-bold text-white transition-all duration-200 hover:bg-[#00b386] md:w-[110px]">
                        Search
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT GREEN PART */}
          <div className="bg-[var(--brand)] md:rounded-bl-[50px]">
            <div className="relative h-[360px] overflow-hidden rounded-bl-[70px] sm:h-[430px] md:h-full md:min-h-[580px] md:rounded-bl-[90px]">
              
              <div className="absolute left-[18%] top-[12%] grid h-16 w-16 -rotate-6 place-items-center rounded-[16px] bg-white shadow-sm sm:h-20 sm:w-20 md:left-[12%]">
                <Image src="/images/tile-search.png" alt="" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>

              <div className="absolute right-[16%] top-[38%] grid h-16 w-16 rotate-6 place-items-center rounded-[16px] bg-white shadow-sm sm:h-20 sm:w-20 md:right-[12%]">
                <Image src="/images/tile-chart.png" alt="" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>

              <div className="absolute left-[14%] top-[66%] grid h-16 w-16 -rotate-6 place-items-center rounded-[16px] bg-white shadow-sm sm:h-20 sm:w-20 md:left-[6%]">
                <Image src="/images/tile-shield.png" alt="" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}