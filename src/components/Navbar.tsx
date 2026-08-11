"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[60] px-6 py-4 flex items-center justify-between backdrop-blur-md bg-background/80 border-b border-black/5 dark:border-white/5"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/40 overflow-hidden bg-card flex items-center justify-center shadow-lg shadow-primary/10">
            <Image 
              src="/icon.png" 
              alt="Logo" 
              fill 
              className="object-cover object-center" 
            />
          </div>
          <div className="hidden sm:block h-6 w-px bg-black/20 dark:bg-white/20 mx-2"></div>
          <span className="font-semibold text-lg md:text-xl tracking-wide">
            Paras <span className="text-primary hidden sm:inline">Chopkar</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors duration-300 relative group"
            >
              {link.name}
              {link.name === "About" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <a 
            href="/Paras_Chopkar_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors duration-300"
          >
            View Resume
          </a>
          <a 
            href="mailto:paraschopkar11@gmail.com"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/50 text-foreground font-medium hover:bg-primary/10 transition-colors duration-300 group bg-card"
          >
            Hire Me
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="lg:hidden p-2 rounded-full bg-card border border-black/5 dark:border-white/5 text-foreground hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[50] lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-card border-l border-black/5 dark:border-white/5 shadow-2xl z-[55] lg:hidden flex flex-col pt-24 pb-8 px-8"
            >
              <div className="flex flex-col gap-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className="text-2xl font-bold text-foreground hover:text-primary transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="flex flex-col gap-4 mt-auto pt-8 border-t border-black/10 dark:border-white/10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="/Paras_Chopkar_Resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-foreground transition-colors font-medium"
                >
                  View Resume
                </a>
                <a 
                  href="mailto:paraschopkar11@gmail.com"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  Hire Me
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
