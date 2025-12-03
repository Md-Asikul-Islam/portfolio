"use client";

import { motion } from "framer-motion";
import Social from "./Social";


const Footer = () => {


  return (
    <footer className=" dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-8"
        >
          {/* Logo / Name */}
          <div className="text-2xl font-bold  bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent dark:text-indigo-400">
            Md. Asikul Islam
          </div>

         <Social />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-px bg-linear-to-r from-[#fda4af] to-[#f43f5e] mb-6"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-gray-100 dark:text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Md. Asikul Islam. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
