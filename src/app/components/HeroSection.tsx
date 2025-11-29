"use client";

import Image from "next/image";
import heroImage from "@/app/assests/asikul.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-start md:items-center space-x-20 md:space-x-24 ">

          {/* Avatar */}
          <div className="w-40 h-40 md:w-52 md:h-52  relative shrink-0">
            <Image
              src={heroImage}
              alt="Profile photo of Md. Asikul Islam"
              priority
              className=" rounded-full  border-4 md:border-8 shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <p className="text-sm md:text-base  uppercase tracking-widest font-medium">
              I build modern & responsive interfaces
            </p>

            <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold  leading-snug">
              Md. Asikul Islam
            </h1>

            <p className="mt-3 text-base sm:text-lg md:text-xl  max-w-xl leading-relaxed">
              Frontend developer focused on delivering clean, fast and
              user-friendly digital experiences using React, Next.js and modern UI.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="#projects"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                View Projects
              </Link>

              <Link
                href="#contacts"
                className="px-5 py-2.5 border border-gray-400 dark:border-gray-600 text-white rounded-lg hover:bg-indigo-600 dark:hover:bg-gray-800 transition font-medium text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Contact Me
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
