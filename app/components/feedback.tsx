export default function Feedback() {
  return (
    <section className="w-full bg-white px-6 pb-[220px] pt-12 sm:px-10 sm:pb-[240px] md:px-14 md:pb-[230px] xl:px-[90px] xl:pt-[95px] xl:pb-[260px]">
      <div className="mx-auto grid max-w-[1700px] items-center gap-12 xl:grid-cols-[1fr_563px] xl:gap-[80px]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
          <h2 className="w-full max-w-[648px] text-[30px] font-bold leading-[42px] text-black sm:text-[36px] sm:leading-[60px]">
            People&apos;s Feedback about JobNow!
          </h2>

          <p className="mt-5 w-full max-w-[700px] text-[14px] font-light leading-[20px] text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p className="mt-8 w-full max-w-[615px] text-[16px] font-semibold leading-[24px] text-black">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ad minim veniam labore et dolore.&quot;
          </p>

          <h3 className="mt-14 text-[20px] font-semibold leading-[28px] text-black">
            Brown Garcia
          </h3>

          <p className="mt-3 text-[12px] font-light leading-[16px] text-black">
            Full Stack Developer in XReact Tech
          </p>

          <div className="mt-6 flex items-center justify-center gap-5 xl:justify-start">
            <button className="grid h-[43px] w-[43px] cursor-pointer place-items-center rounded-full bg-[#D9D9D9] text-white transition duration-300 hover:scale-110 hover:bg-[#00CC99]">
              <span className="text-[20px] leading-none">←</span>
            </button>

            <button className="grid h-[43px] w-[43px] cursor-pointer place-items-center rounded-full bg-[#D9D9D9] text-white transition duration-300 hover:scale-110 hover:bg-[#00CC99]">
              <span className="text-[20px] leading-none">→</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE BOX */}
        <div className="mx-auto h-[220px] w-full max-w-[563px] rounded-[28px] bg-[#00CC99] sm:h-[300px] xl:mx-0 xl:h-[330px]" />
      </div>
    </section>
  );
}