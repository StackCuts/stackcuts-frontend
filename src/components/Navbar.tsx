"use client";
import React from "react";
import Link from "next/link";
import { Layers } from "lucide-react";

export function Navbar() {
return (
<nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <div className="flex items-center justify-between h-20">
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
      
      {/* Call to Action & Login */}
      <div className="flex items-center gap-6">
        <Link href="/login" className="text-sm font-medium text-gray-900 dark:text-white hidden sm:block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Log in</Link>
        <Link href="/start-project" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all shadow-sm active:scale-[0.98]">
          Start Project
        </Link>
      </div>
    </div>
  </div>
</nav>
);
}