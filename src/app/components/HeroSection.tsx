"use client";

import Image from "next/image";
import heroImage from "@/app/assests/asikul.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-5">

        {/* Layout Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-40 h-40 md:w-56 md:h-56 relative shrink-0"
          >
            <Image
              src={heroImage}
              alt="Profile photo of Md. Asikul Islam"
              priority
              className="rounded-full border-4 md:border-8 border-indigo-500/40 shadow-xl object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col w-full"
          >
            <p className="text-sm md:text-base uppercase tracking-widest text-indigo-400 font-medium">
              Crafting Modern & Responsive Experiences
            </p>

            <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
              Md. Asikul Islam
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              Frontend Developer specializing in clean, fast and user-friendly
              digital products using React, Next.js, Tailwind CSS & modern UI engineering.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex gap-4">
              <Link
                href="#projects"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition shadow-md rounded-lg text-white font-medium text-sm"
              >
                View Projects
              </Link>

              <Link
                href="#contacts"
                className="px-5 py-2.5 border border-gray-500 text-gray-200 hover:bg-gray-800 transition rounded-lg font-medium text-sm"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
