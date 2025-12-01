"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "@/app/assests/asikul.jpg"; // your photo

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          About Me
        </motion.h2>

        {/* Main Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={aboutImg}
              alt="Md. Asikul Islam"
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Developer & UI Engineer
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg mb-5">
              I’m a dedicated Frontend Developer focused on building fast,
              clean and user-friendly interfaces using React, Next.js and modern UI 
              frameworks. My work blends design, performance and best practices 
              to create smooth digital experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg mb-5">
              With a passion for crafting pixel-perfect UIs, I enjoy transforming 
              ideas into elegant, responsive interfaces. My workflow is deeply 
              centered on performance optimization, reusable components, modern 
              state management and accessible design.
            </p>

            {/* Highlight Boxes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="p-4 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/10 border border-indigo-300/20 dark:border-indigo-500/20">
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  3+
                </p>
                <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                  Years Experience
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-600/10 dark:bg-blue-500/10 border border-blue-300/20 dark:border-blue-500/20">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  25+
                </p>
                <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                  Projects Completed
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
export default About