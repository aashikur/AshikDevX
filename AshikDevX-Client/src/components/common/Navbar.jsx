'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderGit2, Code2, Mail, Menu, X } from 'lucide-react';
import ToggleLightDark from '../../.reuse/ToggleLightDark';
import { CgMenuMotion } from "react-icons/cg";

const menuItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#home",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(37,99,235,0.05) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400"
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "#about",
    gradient: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(219,39,119,0.05) 50%, rgba(190,24,93,0) 100%)",
    iconColor: "group-hover:text-pink-500 dark:group-hover:text-pink-400"
  },
  {
    icon: <FolderGit2 className="h-5 w-5" />,
    label: "Projects",
    href: "#projects",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, rgba(22,163,74,0.05) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "group-hover:text-green-500 dark:group-hover:text-green-400"
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    label: "Skills",
    href: "#skills",
    gradient: "radial-gradient(circle, rgba(250,204,21,0.12) 0%, rgba(202,138,4,0.05) 50%, rgba(161,98,7,0) 100%)",
    iconColor: "group-hover:text-yellow-500 dark:group-hover:text-yellow-400"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contact",
    href: "#contact",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.12) 0%, rgba(220,38,38,0.05) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "group-hover:text-red-500 dark:group-hover:text-red-400"
  }
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 }
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 }
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.4, type: "spring", stiffness: 300, damping: 25 }
    }
  }
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.4
};

export default function PortfolioNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll Animation Add to manu 
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {

      if (window.scrollY > lastScrollY) {
        // Scrolling Down
        setIsScrolled(true);
      } else {
        // Scrolling Up
        setIsScrolled(false);
      }
      lastScrollY = window.scrollY;
      console.log(isScrolled, lastScrollY, window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])



  return (
    <div className={`${isScrolled ? "-translate-y-30 " : "translate-y-0"} border-gray-900 transition-all duration-500 fixed w-full top-0 left-0 z-50 bg-black/40  backdrop-blur-2xl py-3`}>
      <div className='flex justify-between max-w-[1400px] mx-auto items-center p-2'>
        <div className="absolute right-0 hidden "><ToggleLightDark /></div>

        {/* Logo */}
        <div className='px-2 flex items-center gap-2'>
          <img width={40} className='rounded-full' src="https://avatars.githubusercontent.com/u/46211523?v=4" alt="" />
          <div className='inter-main'>
            <p className='font-bold text-lg'>
              Ashikur Rahaman
            </p>
            <p className='text-xs text-gray-400 outfit-main text-[10px]'>MERN STACK DEVELOPER</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <motion.nav
          className="hidden md:block p-2 z-30 rounded-full bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-gray-200/80 dark:border-gray-800/80 shadow-lg dark:shadow-gray-900/20 overflow-hidden"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(147,51,234,0.08) 50%, rgba(239,68,68,0.08) 100%)"
            }}
            variants={navGlowVariants}
          />
          <ul className="flex items-center gap-2 relative z-10">
            {menuItems.map((item) => (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                    variants={glowVariants}
                    style={{ background: item.gradient, opacity: 0 }}
                  />
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 relative z-10 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                  >
                    <span className={`transition-colors duration-300 ${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center top", transform: "rotateX(90deg)" }}
                  >
                    <span className={`transition-colors duration-300 ${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3  bg-white/60 dark:bg-black/60 border border-gray-200/80 dark:border-gray-800/80 shadow-lg rounded-full"
        >
          {isOpen ? <X size={22} /> : <CgMenuMotion size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 shadow-lg"
        >
          <ul className="flex flex-col p-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <div className='flex items-center justify-end gap-3 px-3 py-2'>
              Light/Dark Mode:  <ToggleLightDark/>
            </div>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
