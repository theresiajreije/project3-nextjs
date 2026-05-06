import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#f3f3f3]">
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-[60%_40%]">

        {/* LEFT SIDE */}
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#f3f3f3] px-6 sm:min-h-[420px] lg:min-h-screen">
          <h1 className="max-w-[260px] text-center text-[24px] font-semibold leading-[34px] text-[#00CC99] sm:max-w-[520px] sm:text-[42px] sm:leading-[56px] lg:text-[48px] lg:leading-[66px]">
            Opportunity is everywhere
          </h1>

          {/* TOP LEFT */}
          <div className="absolute left-[6%] top-[16%] rotate-[-6deg] rounded-[16px] bg-white p-4 shadow-sm sm:left-[8%] sm:top-[22%] sm:rounded-[20px] sm:p-5">
            <Image src="/images/tile-search.png" alt="Search icon" width={40} height={40} />
          </div>

          {/* BOTTOM LEFT */}
          <div className="absolute bottom-[14%] left-[5%] rotate-[-8deg] rounded-[16px] bg-white p-4 shadow-sm sm:bottom-[24%] sm:left-[7%] sm:rounded-[20px] sm:p-5">
            <Image src="/images/tile-shield.png" alt="Shield icon" width={40} height={40} />
          </div>

          {/* RIGHT */}
          <div className="absolute right-[6%] top-[48%] rotate-[12deg] rounded-[16px] bg-white p-4 shadow-sm sm:right-[10%] sm:top-[45%] sm:rounded-[20px] sm:p-5">
            <Image src="/images/tile-chart.png" alt="Chart icon" width={40} height={40} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-h-[560px] items-center justify-center rounded-bl-[40px] bg-[#00CC99] px-6 py-12 sm:min-h-[620px] lg:min-h-screen lg:rounded-bl-[50px]">
          <div className="w-full max-w-[530px] text-center">
            <h2 className="mb-8 text-[30px] font-semibold leading-[36px] text-white sm:mb-12">
              Sign Up
            </h2>

            <form className="mx-auto flex w-full max-w-[450px] flex-col gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="h-[52px] rounded-[8px] bg-[#f4f4f4] px-5 text-[16px] font-semibold leading-[24px] text-black outline-none placeholder:text-[#9ca3af] sm:h-[56px]"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="h-[52px] rounded-[8px] bg-[#f4f4f4] px-5 text-[16px] font-semibold leading-[24px] text-black outline-none placeholder:text-[#9ca3af] sm:h-[56px]"
              />

              <input
                type="email"
                placeholder="Email"
                className="h-[52px] rounded-[8px] bg-[#f4f4f4] px-5 text-[16px] font-semibold leading-[24px] text-black outline-none placeholder:text-[#9ca3af] sm:h-[56px]"
              />

              <input
                type="password"
                placeholder="Password"
                className="h-[52px] rounded-[8px] bg-[#f4f4f4] px-5 text-[16px] font-semibold leading-[24px] text-black outline-none placeholder:text-[#9ca3af] sm:h-[56px]"
              />

              <button
                type="submit"
                className="mx-auto mt-6 h-[42px] w-[120px] rounded-[8px] bg-[#f4f4f4] text-[16px] font-semibold text-[#00CC99]"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-6 text-[14px] font-normal leading-[20px] text-white">
              Have an account?{" "}
              <Link href="/signin" className="underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}