"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const jobs = [
  {
    title: "UI/UX Designer",
    company: "Dimension Studio",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ad minim veniam labore et dolore.",
    location: "San Fransisco, CA",
    type: "Full Time",
    logo: "/images/job-1.png",
  },
  {
    title: "Full Stack Developer",
    company: "Alpander",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ad minim veniam labore et dolore.",
    location: "San Fransisco, CA",
    type: "Full Time",
    logo: "/images/job-2.png",
  },
  {
    title: "Product Designer",
    company: "XReact Tech",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ad minim veniam labore et dolore.",
    location: "San Fransisco, CA",
    type: "Full Time",
    logo: "/images/job-3.png",
  },
];

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 22s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M12 11.5a2.2 2.2 0 100-4.4 2.2 2.2 0 000 4.4z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function BriefcaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M9 6V5a2 2 0 012-2h2a2 2 0 012 2v1"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M4 9h16v9a3 3 0 01-3 3H7a3 3 0 01-3-3V9z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path d="M4 13h16" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function JobCard({ title, company, desc, location, type, logo }: any) {
  return (
    <div
  className="
    flex h-auto min-h-[430px] w-full flex-col bg-white
    rounded-[20px] overflow-hidden
    px-6 py-8
    shadow-[0_3px_12px_rgba(2,6,23,0.05)]
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_4px_12px_rgba(2,6,23,0.06)]
    sm:px-8 sm:py-9
    lg:w-[485px] lg:px-[38px] lg:py-10
  "
>
      <div className="h-[64px] w-[64px] sm:h-[78px] sm:w-[78px]">
        <Image
          src={logo}
          alt={title}
          width={78}
          height={78}
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="mt-5 text-[18px] font-semibold leading-[26px] text-black sm:mt-6 sm:text-[20px] sm:leading-[28px]">
        {title}
      </h3>

      <p className="mt-2 text-[14px] font-semibold text-[var(--muted)]">
        {company}
      </p>

      <p className="mt-5 text-[12px] font-light leading-[16px] text-[var(--muted)]">
        {desc}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        <span className="inline-flex w-fit items-center gap-2 rounded-[12px] bg-[#f3f4f6] px-4 py-2 text-[12px] font-semibold text-[var(--text)] sm:px-5 sm:text-[13px]">
          <PinIcon className="h-[16px] w-[16px] shrink-0" />
          {location}
        </span>

        <span className="inline-flex w-fit items-center gap-2 rounded-[12px] bg-[#f3f4f6] px-4 py-2 text-[12px] font-semibold text-[var(--text)] sm:px-5 sm:text-[13px]">
          <BriefcaseIcon className="h-[16px] w-[16px] shrink-0" />
          {type}
        </span>
      </div>

      <a
  href="#"
  className="mt-auto pt-6 inline-flex items-center gap-2 font-[Inter] text-[16px] font-bold leading-[24px] text-[#00B894] sm:text-[18px] sm:leading-[27px]"
>
  Apply Now
  <span className="text-[20px]">›</span>
</a>
    </div>
  );
}

export default function AddedJobs() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1700px] px-5 py-6 sm:px-8 md:px-12 md:py-20 lg:px-[95px] lg:py-24">
        <div className="mx-auto text-center">
          <h2 className="mb-6 text-[28px] font-semibold leading-[34px] text-black sm:text-[32px] sm:leading-[38px] lg:mb-8 lg:text-[36px] lg:leading-[40px]">
            Recently Added Jobs
          </h2>

          <p className="mx-auto mt-3 w-full max-w-[1100px] text-[14px] font-light leading-[22px] text-black sm:text-[16px] sm:leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud ad minim veniam labore et dolore.
          </p>
        </div>

        <div className="mt-10 lg:mt-12">
          <Swiper
            grabCursor
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: "auto",
                spaceBetween: 40,
              },
            }}
            className="!overflow-visible"
          >
            {jobs.map((job) => (
              <SwiperSlide
                key={job.title}
                className="!h-auto xl:!w-[485px]"
              >
                <JobCard {...job} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <a
            href="#"
            className="
              inline-flex h-[52px] w-[150px] items-center justify-center
              rounded-[10px]
              border-2 border-[var(--brand)]
              bg-transparent
              text-[16px] font-bold text-[var(--brand)]
              transition-all duration-300
             hover:bg-[#00cc99] hover:text-white
            "
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}