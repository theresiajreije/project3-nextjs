export default function HelpDreamCompany() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-6 md:px-10 lg:px-[77px] pb-16 pt-10 lg:pb-24 lg:pt-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[511px_1fr] lg:gap-20">

          <div className="flex justify-center lg:justify-start">
            <div className="h-[310px] w-full max-w-[511px] rounded-[20px] bg-[#c4c4c4]" />
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="w-full max-w-[800px] text-[30px] font-semibold leading-[36px] text-black lg:text-[36px] lg:leading-[40px]">
              We will help you to become an employee in your dream company
            </h3>

            <p className="mt-4 w-full max-w-[800px] text-[16px] font-light leading-[24px] text-black lg:text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud ad minim veniam labore et dolore.
            </p>

            <div className="pt-8 md:pt-[68px] flex justify-center lg:justify-start w-full">
              <a
                href="#"
                className="inline-flex h-[50px] w-[153px] items-center justify-center rounded-[9px] border-2 border-[#00cc99] bg-transparent text-[16px] font-bold text-[#00cc99] transition-all duration-300 hover:bg-[#00cc99] hover:text-white hover:shadow-md"
              >
                View More
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}