"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Layers, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Standardized Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">StackCuts</span>
          </Link>
          
          {/* Main Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">Work</Link>
            <Link href="/process" className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">Process</Link>
            <Link href="/storyboard" className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">AI Storyboard</Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">Pricing</Link>
          </div>
          
          {/* Call to Action, Login & Theme Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Circular Theme Toggle */}
            {mounted ? (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-105"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            ) : (
              <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"></div>
            )}
            
            {/* Vertical Divider */}
            <div className="hidden sm:block h-6 w-px bg-gray-200 dark:bg-gray-800"></div>
            
            <Link href="/login" className="text-sm font-medium text-gray-900 dark:text-white hidden sm:block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Log in</Link>
            <Link href="/start-project" className="bg-indigo-600 text-white px-5 sm:px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all shadow-sm active:scale-[0.98] whitespace-nowrap">
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}