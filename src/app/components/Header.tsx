"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "@/app/assests/logo.png";

const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Contacts", href: "#contacts" },
  { id: 4, name: "Projects", href: "#projects" },
  {id : 5, name : "Blog" , href : "#blog"}
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-5">
          <Image
            src={logo}
            alt="logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
          <span className="text-white font-semibold text-lg">Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-white">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="hover:text-purple-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-purple-400 transition p-2"
        >
          {isOpen ? <IoClose className="size-8" /> : <FaBars className="size-6" />}
        </button>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`md:hidden overflow-hidden bg-black/90 backdrop-blur-xl text-white transition-all duration-300 ${
          isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col px-5 space-y-6 text-lg">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
