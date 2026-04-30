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
            <div className="mx-auto max-w-[1700px] px-[78px] pt-[123px] pb-16">

                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-[872px]">
                        <h2 className="text-[36px] font-semibold leading-[40px] text-black">
                            How it works
                        </h2>
                        <p className="mt-[37px] max-w-[872px] text-[16px] font-light leading-[24px] text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ad minim veniam labore et dolore.
                        </p>
                    </div>

                    <div className="hidden md:block md:pt-[68px]">
                        <a
                            href="#"
                           className="inline-flex h-[50px] w-[153px] items-center justify-center rounded-[9px] border-2 border-[#00cc99] bg-transparent text-[16px] font-bold text-[#00cc99] transition-all duration-300 hover:bg-[#00cc99] hover:text-white hover:shadow-md"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6 md:mt-14 md:grid-cols-4 md:gap-6 lg:gap-8">

                    {steps.map((s) => (
                        <div
                            key={s.title}
                            className="w-full rounded-[20px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.10)] md:px-5 md:py-5 lg:px-7 lg:py-7"
                        >

                            <div className="h-[43px] w-[43px] md:h-[34px] md:w-[34px] lg:h-[43px] lg:w-[43px]">
                                <Image src={s.icon} alt="" width={43} height={43} />
                            </div>

                            <h3 className="mt-4 text-[20px] font-semibold leading-[28px] text-black">
                                {s.title}
                            </h3>

                            <p className="mt-3 text-[9px] leading-[13px] text-black md:text-[8px] md:leading-[12px] lg:text-xs lg:leading-5">
                                {s.desc}
                            </p>

                        </div>
                    ))}

                </div>

                <div className="mt-10 flex justify-center md:hidden">
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