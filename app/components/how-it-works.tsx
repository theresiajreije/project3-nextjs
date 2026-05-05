import Image from "next/image";

const steps = [
  {
    title: "Register",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "/images/how-register.png",
  },
  {
    title: "Create a Resume",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "/images/how-resume.png",
  },
  {
    title: "Find Job",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "/images/how-find.png",
  },
  {
    title: "Apply Job",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "/images/how-apply.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1700px] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-[78px] lg:pt-[123px] lg:pb-16">

        {/* TOP TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-[28px] font-semibold leading-[34px] text-black sm:text-[32px] sm:leading-[38px] md:text-[36px] md:leading-[40px]">
            How it works
          </h2>

          <p className="mx-auto mt-5 max-w-[872px] text-[14px] font-light leading-[22px] text-black sm:text-[15px] sm:leading-[23px] md:mx-0 md:mt-[37px] md:text-[16px] md:leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <div
              key={s.title}
              className="w-full rounded-[20px] bg-white px-5 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.10)] sm:text-left lg:px-7 lg:py-7"
            >
              <div className="mx-auto h-[43px] w-[43px] sm:mx-0">
                <Image src={s.icon} alt="" width={43} height={43} />
              </div>

              <h3 className="mt-4 text-[18px] font-semibold leading-[26px] text-black sm:text-[20px] sm:leading-[28px]">
                {s.title}
              </h3>

              <p className="mt-3 text-[12px] leading-5 text-black">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center md:mt-14">
          <a
            href="#"
            className="inline-flex h-[50px] w-[153px] items-center justify-center rounded-[9px] border-2 border-[#00cc99] bg-transparent text-[16px] font-bold text-[#00cc99] transition-all duration-300 hover:bg-[#00cc99] hover:text-white hover:shadow-md"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}