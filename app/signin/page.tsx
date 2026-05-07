"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newErrors = {
      email: "",
      password: "",
    };

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log("Form submitted", { email, password });
    }
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#f3f3f3]">
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-[60%_40%]">
        {/* LEFT SIDE */}
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#f3f3f3] px-6 sm:min-h-[420px] lg:min-h-screen">
          <h1 className="max-w-[260px] text-center text-[24px] font-semibold leading-[34px] sm:max-w-[520px] sm:text-[42px] sm:leading-[56px] lg:text-[48px] lg:leading-[66px]">
            <span className="text-[#00CC99]">Welcome to </span>
            <span className="text-black">Job</span>
            <span className="text-[#00CC99]">Now</span>
          </h1>

          <div className="absolute left-[6%] top-[16%] rotate-[-6deg] rounded-[16px] bg-white p-4 shadow-sm sm:left-[8%] sm:top-[22%] sm:rounded-[20px] sm:p-5">
            <Image src="/images/tile-search.png" alt="Search icon" width={40} height={40} />
          </div>

          <div className="absolute bottom-[14%] left-[5%] rotate-[-8deg] rounded-[16px] bg-white p-4 shadow-sm sm:bottom-[24%] sm:left-[7%] sm:rounded-[20px] sm:p-5">
            <Image src="/images/tile-shield.png" alt="Shield icon" width={40} height={40} />
          </div>

          <div className="absolute right-[6%] top-[48%] rotate-[12deg] rounded-[16px] bg-white p-4 shadow-sm sm:right-[10%] sm:top-[45%] sm:rounded-[20px] sm:p-5">
            <Image src="/images/tile-chart.png" alt="Chart icon" width={40} height={40} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-h-[560px] items-center justify-center rounded-bl-[40px] bg-[#00CC99] px-6 py-12 sm:min-h-[620px] lg:min-h-screen lg:rounded-bl-[50px]">
          <div className="w-full max-w-[530px] text-center">
            <h2 className="mb-8 text-[30px] font-semibold leading-[36px] text-white sm:mb-12">
              Sign In
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-full max-w-[450px] flex-col gap-4"
            >
              <div className="text-left">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`h-[52px] w-full rounded-[8px] bg-[#f4f4f4] px-5 text-[16px] font-semibold leading-[24px] text-black outline-none placeholder:text-[#9ca3af] sm:h-[56px] ${errors.email ? "border-2 border-red-500" : ""
                    }`}
                />

                {errors.email && (
                  <p className="mt-1 text-[13px] font-medium text-red-100">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="text-left">
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className={`h-[52px] w-full rounded-[8px] bg-[#f4f4f4] px-5 pr-16 text-[16px] font-semibold leading-[24px] text-black outline-none placeholder:text-[#9ca3af] sm:h-[56px] ${
        errors.password ? "border-2 border-red-500" : ""
      }`}
    />

   <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#00CC99]"
>
  {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
</button>
  </div>

  {errors.password && (
    <p className="mt-1 text-[13px] font-medium text-red-100">
      {errors.password}
    </p>
  )}
</div>

              <button
                type="submit"
                className="mx-auto mt-6 h-[42px] w-[120px] cursor-pointer rounded-[8px] bg-[#f4f4f4] text-[16px] font-semibold text-[#00CC99] transition-all duration-300 hover:bg-[#66E0C2] hover:text-white"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-[14px] font-normal leading-[20px] text-white">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}