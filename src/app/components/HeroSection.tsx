"use client";

import Image from "next/image";
import heroImage from "@/app/assests/hero.webp";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-5">

        {/* Hero Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-24">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col w-full md:w-1/2"
          >
            <p className="text-sm md:text-base uppercase tracking-widest text-indigo-400 font-medium">
              Crafting Modern & Responsive Experiences
            </p>

            <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight   bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Md. Asikul Islam
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              Frontend Developer specializing in clean, fast, and user-friendly
              digital products using React, Next.js, Tailwind CSS & modern UI engineering.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition shadow-md rounded-lg text-white font-medium text-sm text-center"
              >
                View Projects
              </Link>

              <Link
                href="#contacts"
                className="px-6 py-3 border border-gray-500 text-gray-200 hover:bg-gray-800 transition rounded-lg font-medium text-sm text-center"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Avatar / Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full px-2 py-3 md:w-1/2 flex justify-center md:justify-end"
          >
            <Image
              src={heroImage}
              alt="Profile photo of Md. Asikul Islam"
              priority
              className="rounded-2xl shadow-xl object-cover w-full max-w-md"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
