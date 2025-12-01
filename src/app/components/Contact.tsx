"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Contacts = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Contact Me
        </motion.h2>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Info Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <FiMail className="text-3xl text-indigo-600" />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    yourmail@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <FiPhone className="text-3xl text-indigo-600" />
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +8801XXXXXXXXX
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <FiMapPin className="text-3xl text-indigo-600" />
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <div className="flex items-center gap-2 p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
                <FiUser className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">Your Email</label>
              <div className="flex items-center gap-2 p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
                <FiMail className="text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <div className="flex items-start gap-2 p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
                <FiMessageSquare className="mt-1 text-gray-500" />
                <textarea
                  placeholder="Write your message..."
                  rows={4} // <-- number, not string
                  className="w-full bg-transparent outline-none resize-none"
                  required
                ></textarea>
              </div>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
