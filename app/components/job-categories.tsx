"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const categories = [
  { title: "Design and Development", jobs: "350 Job Vacancy", icon: "/images/cat-design.png" },
  { title: "Accounting and Finance", jobs: "350 Job Vacancy", icon: "/images/cat-accounting.png" },
  { title: "Bank Institution", jobs: "350 Job Vacancy", icon: "/images/cat-bank.png" },
  { title: "Product Management", jobs: "350 Job Vacancy", icon: "/images/cat-product.png" },
  { title: "Customer Support", jobs: "350 Job Vacancy", icon: "/images/cat-support.png" },
];

const ICON_WHITE = "brightness-0 invert";

function CategoryCard({
  title,
  jobs,
  icon,
  active,
  onActivate,
}: {
  title: string;
  jobs: string;
  icon: string;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      className={[
        "flex h-[223px] w-full flex-col rounded-[20px] p-7",
        "transition-all duration-300",
        "shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
        "hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]",
        active ? "bg-[#00cc99] text-white" : "bg-white text-[var(--text)]",
      ].join(" ")}
    >
      <div className="h-[49px] w-[49px]">
        <Image
          src={icon}
          alt=""
          width={49}
          height={49}
          className={[
            "transition-all duration-300",
            active ? ICON_WHITE : "",
          ].join(" ")}
        />
      </div>

      <h3
        className={[
          "mt-6 font-semibold",
          "text-[18px] leading-[26px] sm:text-[20px] sm:leading-[28px]",
          "break-words",
          active ? "text-white" : "text-[var(--text)]",
        ].join(" ")}
      >
        {title}
      </h3>

      <p
        className={[
          "mt-auto whitespace-nowrap font-medium text-[12px]",
          active ? "text-white" : "text-[var(--muted)]",
        ].join(" ")}
      >
        {jobs}
      </p>
    </div>
  );
}

export default function JobCategories() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full overflow-hidden bg-[#00cc99]/[0.051]">
      <div className="mx-auto max-w-[1700px] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-[99px] lg:py-20">
        <div className="mx-auto text-center">
          <h2 className="mb-5 text-[28px] font-bold leading-[34px] text-black sm:text-[32px] sm:leading-[38px] md:mb-8 md:text-[36px] md:leading-[40px]">
            Popular Job Categories
          </h2>

          <p className="mx-auto max-w-[1100px] text-center text-[14px] font-light leading-[22px] text-black sm:text-[15px] sm:leading-[23px] md:text-[16px] md:leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ad minim veniam labore et dolore.
          </p>
        </div>

        <div className="mt-9 md:mt-14">
          <div onMouseLeave={() => setActiveIndex(null)}>
            <Swiper
              grabCursor
              centeredSlides={false}
              slidesPerView={1.1}
              spaceBetween={18}
              className="!overflow-visible"
              breakpoints={{
                480: {
                  slidesPerView: 1.4,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2.4,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 32,
                },
                1280: {
                  slidesPerView: 4.2,
                  spaceBetween: 40,
                },
              }}
            >
              {categories.map((c, i) => (
                <SwiperSlide key={c.title} className="!overflow-visible">
                  <CategoryCard
                    title={c.title}
                    jobs={c.jobs}
                    icon={c.icon}
                    active={i === activeIndex}
                    onActivate={() => setActiveIndex(i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mt-[40px] flex justify-center md:mt-[53px]">
          <a
            href="#"
            className="
              inline-flex h-[40px] w-[140px] items-center justify-center
              rounded-[10px] border-2 border-[var(--brand)]
              bg-transparent text-[13px] font-bold text-[var(--brand)]
              transition-all duration-300
              hover:bg-[var(--brand)] hover:text-white hover:shadow-md
              md:h-[50px] md:w-[170px] md:text-[15px]
            "
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}