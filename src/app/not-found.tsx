import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen w-full flex-col items-center bg-[#FAFAFA] px-5">
        {/* 404 Illustration */}
        <div className="relative mt-[3px] flex w-full max-w-[520px] justify-center">
          <Image
            src="/images/404.png"
            alt="Page not found"
            width={520}
            height={800}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="-mt-[5px] flex w-full max-w-[850px] flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-[30px] font-bold leading-[100%] tracking-[-0.5px] text-[#1F1F25] sm:text-[32px]">
            Opps! This page didn&apos;t make the cohort
          </h1>

          {/* Description */}
          <p className="mt-[14px] max-w-[780px] text-[14px] font-normal leading-[1.5] text-[#5D5D61] sm:text-[15px]">
            The page you&apos;re looking for might have been moved, renamed, or
            never existed. Let&apos;s get you back on track.
          </p>

          {/* Back to Homepage */}
          <Link
            href="/"
            className="mt-[26px] inline-flex h-[48px] min-w-[180px] items-center justify-center rounded-[10px] bg-[#1F1F25] px-6 text-[14px] font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#33333A] focus:outline-none focus:ring-2 focus:ring-[#1F1F25] focus:ring-offset-2"
          >
            Back to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
