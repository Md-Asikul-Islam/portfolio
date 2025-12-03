"use client";

import Image from "next/image";
import heroImage from "@/app/assests/hero.webp";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Hero Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col w-full md:w-1/2"
          >
            {/* Tagline */}
            <p className="text-sm md:text-base uppercase tracking-widest text-indigo-400 font-medium">
              Crafting Digital Experiences That Feel Alive
            </p>

            {/* Name */}
            <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Md. Asikul Islam
            </h1>

            {/* Typewriter */}
            <p className="mt-2 text-lg sm:text-xl md:text-2xl text-indigo-300 font-medium min-h-10">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React & Next.js Specialist",
                  "UI/UX Focused Engineer",
                  "Pixel-Perfect Interface Builder",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </p>

            {/* Bio */}
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              I design and develop intuitive, visually refined, and performance-driven interfaces. 
              Specializing in React, Next.js, Tailwind CSS, and modern front-end engineering to 
              transform ideas into pixel-perfect, delightful web experiences.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-shadow shadow-md rounded-lg text-white font-medium text-sm text-center"
              >
                Explore My Work
              </Link>

              <Link
                href="#contacts"
                className="px-6 py-3 border border-gray-500 text-gray-200 hover:bg-gray-800 transition rounded-lg font-medium text-sm text-center"
              >
                Let’s Connect
              </Link>
            </div>
          </motion.div>

          {/* Avatar / Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[70%] flex justify-center "
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="rounded-3xl overflow-hidden shadow-2xl w-full "
            >
              <Image
                src={heroImage}
                alt="Profile photo of Md. Asikul Islam"
                priority
                className="object-fil w-full md:h-[420] "
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
