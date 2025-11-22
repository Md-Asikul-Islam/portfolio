"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/app/assests/logo.png";
import Image from "next/image";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen
          ? "bg-[#171717]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } `}
    >
      <div className="max-w-7xl container mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </Link>
        <nav className="space-x-6">
            <Link href="/"> Home</Link>
            <Link href="/about"> About</Link>
            <Link href="/conatact"> Contact</Link>
            <Link href="/project"> Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
