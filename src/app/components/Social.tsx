"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Social = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Md-Asikul-Islam",
      label: "GitHub",
      color: "text-white",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/asikul1998/",
      label: "LinkedIn",
      color: "text-[#0077B5]",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/mdasikulislam.asik.927",
      label: "Facebook",
      color: "text-[#1877F2]",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/mdasikulislam_/?hl=en",
      label: "Instagram",
      color: "text-[#E1306C]",
    },
  ];

  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              whileHover={{ scale: 1.2, rotate: 10 }}
              className={`text-xl px-2 transition inline-block ${social.color}`}
            >
              <Icon />
            </motion.span>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;