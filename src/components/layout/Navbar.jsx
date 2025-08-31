import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiFolder, FiTag, FiMail } from "react-icons/fi";

export default function Navbar2({
  items = [
    { href: "home", label: "Home", icon: FiHome },            // 🏠 Home
    { href: "aboutMeSection", label: "About", icon: FiUser }, // 👤 About
    { href: "servicesSection", label: "Services", icon: FiBriefcase }, // 💼 Services
    { href: "projectsSection", label: "Projects", icon: FiFolder },    // 📂 Projects
    { href: "pricingSection", label: "Pricing", icon: FiTag },         // 🏷 Pricing
    { href: "contactSection", label: "Contact", icon: FiMail },        // ✉ Contact
  ],
  className = "",
}) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% visible = active
    );

    // observe each section
    items.forEach((item) => {
      const el = document.getElementById(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      className={
        `fixed min-w-11/12 sm:min-w-2xl flex justify-center bottom-0 left-1/2 z-50 -translate-x-1/2 md:top-4 md:bottom-auto md:left-1/2 md:-translate-x-1/2 ` +
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
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            Icon={item.icon}
            isActive={activeSection === item.href}
          />
        ))}
      </nav>
    </div>
  );
}

function NavItem({ href, label, Icon, isActive }) {
  return (
    <a
      href={`#${href}`}
      className={
        `relative group isolate select-none ` +
        `rounded-full overflow-hidden outline-none ` +
        `px-3 md:px-4 py-2 md:py-2.5 ` +
        `text-sm md:text-base font-medium ` +
        `text-zinc-800 dark:text-zinc-200 ` +
        `transition-[color,transform] duration-300 ease-out ` +
        (isActive ? `scale-[1.02]` : `hover:scale-[1.03] active:scale-95`)
      }
    >
      {/* Active blurry pill */}
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

      {/* Icon + Label */}
      <span className="flex items-center gap-2">
        {Icon && <Icon className="text-xl md:text-xl" />}
        <span className="hidden sm:inline-block">{label}</span>
      </span>
    </a>
  );
}
