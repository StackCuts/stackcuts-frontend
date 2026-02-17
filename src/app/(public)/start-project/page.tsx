"use client";

import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, ChevronDown, Monitor, Smartphone, 
  ArrowRight, Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";

export default function StartProjectPage() {
  // --- State for Dynamic Pricing ---
  const [selectedPackage, setSelectedPackage] = useState<'single' | 'growth'>('single');
  const [selectedFormat, setSelectedFormat] = useState<'landscape' | 'vertical'>('landscape');
  const [isAiWriterEnabled, setIsAiWriterEnabled] = useState(false);
  
  // Pricing Logic
  const total = selectedPackage === 'single' ? 1000 : 3000;
  const deposit = total * 0.5;

  // Prevent Hydration Mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Main Content Area */}
      {/* FIX: Increased pb-40 to pb-48 to stop the card from being hidden behind the footer */}
      <main className="flex-grow container mx-auto max-w-2xl px-6 pt-16 pb-48">
        
        {/* FIX: Added text-center lg:text-left */}
        <header className="mb-10 text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Start New Project
          </h1>
          <p className="text-slate-500 dark:text-gray-400">
            Tell us about your ad so we can get started.
          </p>
        </header>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          
          {/* Project Name */}
          <section>
            {/* FIX: Added text-center lg:text-left */}
            <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 text-center lg:text-left" htmlFor="project-name">
              Give your project a name
            </label>
            <input 
              type="text" 
              id="project-name" 
              placeholder="e.g., Summer Campaign 2026" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
            />
          </section>

          {/* Package Selection */}
          <section>
            {/* FIX: Added text-center lg:text-left */}
            <h2 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-4 text-center lg:text-left">Select Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Option 1: Single Ad */}
              <div 
                onClick={() => setSelectedPackage('single')}
                className={`cursor-pointer group relative h-full p-6 border-2 rounded-xl transition-all ${
                  selectedPackage === 'single' 
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' 
                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  {selectedPackage === 'single' ? (
                    <>
                      <CheckCircle2 className="text-indigo-600 w-6 h-6" />
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Selected</span>
                    </>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                  )}
                </div>
                {/* FIX: Wrapped text in a div to handle centering on mobile */}
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">The Single Ad</h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mb-6">(One-time)</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$1,000</p>
                </div>
              </div>

              {/* Option 2: Growth Pack */}
              <div 
                onClick={() => setSelectedPackage('growth')}
                className={`cursor-pointer group relative h-full p-6 border-2 rounded-xl transition-all ${
                  selectedPackage === 'growth' 
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' 
                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  {selectedPackage === 'growth' ? (
                    <>
                      <CheckCircle2 className="text-indigo-600 w-6 h-6" />
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Selected</span>
                    </>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                  )}
                </div>
                {/* FIX: Wrapped text in a div to handle centering on mobile */}
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">The Growth Pack</h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mb-6">(4 Videos)</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$3,000</p>
                </div>
              </div>

            </div>
          </section>

          {/* Goal Select */}
          <section>
            {/* FIX: Added text-center lg:text-left */}
            <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 text-center lg:text-left" htmlFor="goal">
              What is the goal?
            </label>
            <div className="relative">
              <select 
                id="goal"
                className="appearance-none w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all dark:text-white"
              >
                <option>Conversion</option>
                <option>Brand Awareness</option>
                <option>Lead Generation</option>
                <option>Engagement</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <ChevronDown className="text-gray-400 w-5 h-5" />
              </div>
            </div>
          </section>

          {/* Format Selection */}
          <section>
            {/* FIX: Added text-center lg:text-left */}
            <h2 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3 text-center lg:text-left">Format</h2>
            <div className="flex flex-wrap gap-4">
              
              <div 
                onClick={() => setSelectedFormat('landscape')}
                className={`flex-1 min-w-[160px] cursor-pointer flex items-center justify-center lg:justify-start gap-3 p-4 border rounded-lg transition-all ${
                  selectedFormat === 'landscape'
                    ? 'border-indigo-600 ring-1 ring-indigo-600 bg-white dark:bg-gray-900'
                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
                }`}
              >
                <Monitor className={`w-5 h-5 ${selectedFormat === 'landscape' ? 'text-indigo-600' : 'text-gray-400'}`} />
                <span className="text-sm font-medium dark:text-white">16:9 Landscape</span>
              </div>

              <div 
                onClick={() => setSelectedFormat('vertical')}
                className={`flex-1 min-w-[160px] cursor-pointer flex items-center justify-center lg:justify-start gap-3 p-4 border rounded-lg transition-all ${
                  selectedFormat === 'vertical'
                    ? 'border-indigo-600 ring-1 ring-indigo-600 bg-white dark:bg-gray-900'
                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
                }`}
              >
                <Smartphone className={`w-5 h-5 ${selectedFormat === 'vertical' ? 'text-indigo-600' : 'text-gray-400'}`} />
                <span className="text-sm font-medium dark:text-white">9:16 Vertical</span>
              </div>

            </div>
          </section>

          {/* AI Writer Toggle */}
          <section className="pt-4">
            <div 
              onClick={() => setIsAiWriterEnabled(!isAiWriterEnabled)}
              className="flex items-center justify-between p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-900/50 transition-colors"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Write it for me</span>
                  <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-xs text-slate-500 dark:text-gray-400">Our AI copywriters will handle the script.</span>
              </div>
              
              {/* React Toggle Switch */}
              <div className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${isAiWriterEnabled ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'}`}>
                <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ${isAiWriterEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
              </div>
            </div>
          </section>

        </form>
      </main>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 py-6 z-50">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 w-full sm:w-auto justify-center sm:justify-start">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-1">Total Estimate</p>
              <p className="text-xl font-medium text-gray-500 dark:text-gray-400">${total.toLocaleString()}</p>
            </div>
            <div className="h-10 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-1">Due Now (50% Deposit)</p>
              {/* Dynamic Price Update */}
              <motion.p 
                key={deposit} 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-3xl font-bold text-slate-900 dark:text-white"
              >
                ${deposit.toLocaleString()}
              </motion.p>
            </div>
          </div>
          <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-indigo-600/20 active:scale-95 flex items-center justify-center gap-2">
            Save & Proceed
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
}