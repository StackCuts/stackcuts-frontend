/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import { Check, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans">
      <div className="w-full max-w-[480px] text-center">
        
        {/* Animated Confetti Checkmark */}
        <div className="relative flex justify-center mb-8">
          <div className="absolute top-0 left-1/4 w-2 h-2 rounded-full bg-indigo-600 opacity-40"></div>
          <div className="absolute top-4 right-1/4 w-2 h-2 rounded-full bg-emerald-500 opacity-40"></div>
          <div className="absolute bottom-0 right-1/3 w-2 h-2 rounded-full bg-indigo-600 opacity-30"></div>
          
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative bg-emerald-500/10 p-6 rounded-full"
          >
            <div className="bg-emerald-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] ring-4 ring-white dark:ring-gray-900">
              <span className="material-symbols-outlined text-5xl font-bold">
                <Check className="w-10 h-10 stroke-[3]" />
              </span>
            </div>
          </motion.div>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Deposit Received!
        </h1>
        
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10 max-w-[340px] mx-auto">
          Your project is officially in the queue. We’re ready to build something great.
        </p>
        
        {/* Project Details Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl p-6 mb-8 text-left">
           <div className="space-y-4">
             <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Project</span>
                <span className="text-slate-900 dark:text-white font-semibold text-sm">Summer Campaign 2026</span>
             </div>
             <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Package</span>
                <span className="text-slate-900 dark:text-white font-semibold text-sm">Single Ad (Early Bird)</span>
             </div>
             <div className="pt-3 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Status</span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                  Ready for Briefing
                </span>
             </div>
           </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <Link href="/project" className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-lg font-semibold text-base transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98] text-center no-underline">
            Complete Your Project Brief
          </Link>
          <Link href="/dashboard" className="block w-full text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors">
            Go to Dashboard
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-gray-400/80 dark:text-gray-500">
          <Mail className="w-4 h-4" />
          <span>A receipt has been sent to your email.</span>
        </div>

      </div>
    </div>
  );
}