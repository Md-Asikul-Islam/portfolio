"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Md-Asikul-Islam", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/asikul1998/", label: "LinkedIn" },
    { icon: FaFacebook, href: "https://www.facebook.com/mdasikulislam.asik.927", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/mdasikulislam_/?hl=en", label: "Instagram" },
  ];

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
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Md. Asikul Islam
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-gray-700 dark:text-gray-300 text-xl transition"
                  aria-label={social.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border-t border-gray-300 dark:border-gray-700 mb-6"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-gray-600 dark:text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Md. Asikul Islam. All rights reserved.
        </motion.div>

      </div>
    </footer>
  );
}
export default Footer