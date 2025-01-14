"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

export default function Head() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkColor = (linkPath: string) => {
    if (pathname === linkPath) {
      return "text-vp";
    }
    return "text-black";
  };
  const contactButton = () => {
    if (pathname === "/contact") {
      return "bg-vp text-white"
    }
    return "bg-white text-vp"
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  function handleLinkClick() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  return (
    <section className="h-20 w-full bg-white flex justify-evenly xl:justify-center xl:gap-44 items-center text-xl shadow-lg fixed top-0">
      <FiMenu
        size={64}
        onClick={toggleMenu}
        className='p-0 sm:p-2 w-8 sm:w-12 md:w-20 lg:hidden hover:cursor-pointer' />
      <Link
        href="/"
        onClick={pathname === "/" ? (e) => { e.preventDefault(); scrollToTop(); } : undefined}
      >
        <Image src="/logo.png" alt="Vision Palace Logo" width={275} height={0}
          className='w-auto h-12 md:h-16'
        />
      </Link>
      <div className={`${menuOpen ? 'translate-x-full' : '-translate-x-0'} transition-transform transform duration-300 top-20 right-full justify-center items-center bg-white border-y lg:border-0 h-40 lg:h-full w-full lg:w-auto flex flex-col lg:flex-row fixed lg:static`}>
        <Link
          href="/"
          onClick={handleLinkClick}
          className={`px-4 h-full flex justify-center items-center hover:text-2xl hover:text-vp ease-in-out duration-200 ${linkColor("/")}`}>
          Home
        </Link>
        <Link
          href="/about"
          onClick={handleLinkClick}
          className={`px-4 h-full flex justify-center items-center hover:text-2xl hover:text-vp ease-in-out duration-200 ${linkColor("/about")}`}>
          About Us
        </Link>
        <Link href="/insurance"
          onClick={handleLinkClick}
          className={`px-4 h-full flex justify-center items-center hover:text-2xl hover:text-vp ease-in-out duration-200 ${linkColor("/insurance")}`}>
          Insurance
        </Link>
      </div>
      <Link href="/contact">
        <button className={`rounded-lg p-1 px-2 sm:px-4 md:p-2 md:px-6 border-vp border-2 ${contactButton()} text-base sm:text-lg md:text-xl font-semibold hover:text-white hover:bg-vp active:bg-darkvp active:border-darkvp ease-in-out duration-200 shadow-lg active:shadow-none`}>
          Contact Us
        </button>
      </Link>
    </section>
  );
}