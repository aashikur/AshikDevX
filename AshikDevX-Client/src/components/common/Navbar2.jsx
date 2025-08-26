import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiGrid, FiUser, FiMessageCircle, FiSettings } from "react-icons/fi";

/**
 * Navbar2.jsx — A modern, glassmorphic, rounded, blurry navbar
 * - Uses TailwindCSS + Framer Motion + react-icons
 * - Active item shows a blurry, rounded highlight (animated)
 * - Works as a floating bottom dock on mobile, top bar on md+
 *
 * Props:
 *  - items: Array<{ to: string; label: string; icon: React.ComponentType<any> }>
 *  - className?: string (extra classes for the wrapper)
 */
export default function Navbar2({
  items = [
    { to: "/", label: "Home", icon: FiHome },
    { to: "/projects", label: "Projects", icon: FiGrid },
    { to: "/about", label: "About", icon: FiUser },
    { to: "/contact", label: "Contact", icon: FiMessageCircle },
    { to: "/settings", label: "Settings", icon: FiSettings },
  ],
  className = "",
}) {
  return (
    <div
      className={
        `fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:top-4 md:bottom-auto md:left-1/2 md:-translate-x-1/2 ` +
        `px-3 md:px-4 py-2 md:py-3 rounded-full ` +
        `backdrop-blur-xl border border-white/20 dark:border-white/10 ` +
        `bg-white/10 dark:bg-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ` +
        `supports-[backdrop-filter]:bg-white/10 ` +
        className
      }
      style={{
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav className="flex items-center gap-1 md:gap-2">
        {items.map((item) => (
          <NavItem key={item.to} to={item.to} label={item.label} Icon={item.icon} />
        ))}
      </nav>
    </div>
  );
}

function NavItem({ to, label, Icon }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `relative group isolate select-none ` +
        `rounded-full overflow-hidden outline-none ` +
        `px-3 md:px-4 py-2 md:py-2.5 ` +
        `text-sm md:text-base font-medium ` +
        `text-zinc-800 dark:text-zinc-200 ` +
        `transition-[color,transform] duration-300 ease-out ` +
        (isActive ? `scale-[1.02]` : `hover:scale-[1.03] active:scale-95`)
      }
    >
      {({ isActive }) => (
        <>
          {/* Active blurry, rounded background */}
          {isActive && (
            <motion.span
              layoutId="active-pill"
              transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.6 }}
              className="absolute inset-0 -z-10 rounded-full bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/10 shadow-lg"
              style={{
                WebkitBackdropFilter: "blur(16px)",
                backdropFilter: "blur(16px)",
              }}
            />
          )}

          {/* Hover glow */}
          <span
            className="pointer-events-none absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden
          >
            <span className="absolute inset-0 rounded-full blur-2xl bg-white/30 dark:bg-white/10" />
          </span>

          {/* Content */}
          <span className="flex items-center gap-2">
            {Icon && <Icon className="text-lg md:text-xl" />}
            <span className="hidden sm:inline-block">{label}</span>
          </span>
        </>
      )}
    </NavLink>
  );
}

/*
Usage:

// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from "./Navbar2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
      </Routes>
      <Navbar2 />
    </BrowserRouter>
  );
}

// Tailwind notes:
// - Ensure Tailwind is configured.
// - Glassmorphism uses backdrop-blur and semi-transparent backgrounds.
*/
