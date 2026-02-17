"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link"; 
import { Film, Menu, X, Sun, Moon } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isOpen 
            ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-white/5" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <Film className="text-indigo-600 w-7 h-7" />
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                StackCuts
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
                Work
              </Link>
              <Link href="/process" className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
                Process
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
                Pricing
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {mounted && (
                <button 
                  aria-label="Toggle Dark Mode"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-2"></div>
              
              <Link href="/login" className="text-sm font-medium text-gray-900 dark:text-white hover:text-indigo-600 transition-colors">
                Login
              </Link>
              
              {/* FIXED: Now points to /start-project instead of /process */}
              <Link
                href="/start-project"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-5 rounded-lg shadow-sm transition-all"
              >
                Start Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              {mounted && (
                <button 
                  aria-label="Toggle Dark Mode"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <button 
                aria-label="Open Menu"
                onClick={() => setIsOpen(true)} 
                className="p-2 -mr-2 text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[70] w-[85%] sm:w-[320px] bg-white dark:bg-gray-950 shadow-2xl flex flex-col"
            >
              <div className="h-16 px-6 flex items-center justify-between border-b border-gray-50 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <Film className="text-indigo-600 w-6 h-6" />
                  <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">StackCuts</span>
                </div>
                <button 
                  aria-label="Close Menu"
                  onClick={() => setIsOpen(false)} 
                  className="p-2 -mr-2 text-slate-900 dark:text-white hover:opacity-70"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 px-6 py-10 flex flex-col">
                <nav className="flex flex-col gap-6 text-center">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-[19px] font-medium text-slate-900 dark:text-white tracking-tight py-2">Work</Link>
                  <Link href="/process" onClick={() => setIsOpen(false)} className="text-[19px] font-medium text-slate-900 dark:text-white tracking-tight py-2">Process</Link>
                  <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-[19px] font-medium text-slate-900 dark:text-white tracking-tight py-2">Pricing</Link>
                  <div className="h-px bg-gray-100 dark:bg-gray-800 my-4 mx-auto w-12"></div>
                  <Link href="/login" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-500 hover:text-indigo-600">Login</Link>
                </nav>
                <div className="mt-auto pt-10">
                  {/* FIXED: Now points to /start-project */}
                  <Link href="/start-project" onClick={() => setIsOpen(false)} className="block w-full bg-indigo-600 text-white text-center font-bold py-4 rounded-lg shadow-lg shadow-indigo-200 dark:shadow-none">
                    Start Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};