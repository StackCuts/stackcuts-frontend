"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function ProcessPage() {
  // Animation variants for the timeline items
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Custom Styles for Timeline Line */}
      <style dangerouslySetInnerHTML={{__html: `
        .timeline-line {
          background: linear-gradient(to bottom, #4F46E5 0%, #4F46E5 90%, transparent 100%);
        }
        .dark .timeline-line {
          background: linear-gradient(to bottom, #4F46E5 0%, #4F46E5 90%, transparent 100%);
        }
      `}} />
      {/* Global Navigation */}
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative px-6 pt-32 pb-16 sm:pt-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
            >
              How StackCuts Works
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400"
            >
              From your URL to a ready-to-launch hybrid ad campaign in 48 hours. <br className="hidden sm:block"/> Zero meetings required.
            </motion.p>
          </div>
        </section>
        {/* Timeline Section */}
        <section className="relative pt-10 pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            
            {/* Vertical Line - Shifted down to align with badges */}
            <div aria-hidden="true" className="absolute left-1/2 top-6 bottom-0 w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-800 hidden md:block">
              <div className="h-full w-full timeline-line opacity-50 dark:opacity-40"></div>
            </div>
            <div className="space-y-24 md:space-y-32">
              
              {/* Step 01 */}
              <motion.div 
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row items-center gap-12 lg:gap-24"
              >
                {/* FIX: Position adjusted to top-6 without negative Y translation to prevent clipping */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-950 border-4 border-indigo-600 z-10">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">01</span>
                </div>
                <div className="flex-1 text-center md:text-left md:pr-12 lg:pr-24">
                  <span className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/20 mb-4">Step One</span>
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Submit Your Brief</h3>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Start by providing your product URL and answering a few targeted questions. Our 2-minute intake form captures everything we need to understand your value prop.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <Check className="h-5 w-5 text-indigo-600 dark:text-indigo-500" />
                      $499 Flat rate, no hidden fees
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <Check className="h-5 w-5 text-indigo-600 dark:text-indigo-500" />
                      Zero sales calls required
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full max-w-lg md:max-w-none">
                  <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-4 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl dark:shadow-none">
                    <div className="w-full aspect-[4/3] rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 flex flex-col p-6 shadow-sm overflow-hidden">
                       <div className="w-1/3 h-4 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
                       <div className="space-y-4">
                          <div className="w-full h-10 bg-gray-100 dark:bg-gray-900 rounded"></div>
                          <div className="w-full h-24 bg-gray-100 dark:bg-gray-900 rounded"></div>
                          <div className="w-1/2 h-10 bg-indigo-600 rounded"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Step 02 */}
              <motion.div 
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24"
              >
                <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-950 border-4 border-indigo-600 z-10">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">02</span>
                </div>
                <div className="flex-1 text-center md:text-left md:pl-12 lg:pl-24">
                  <span className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/20 mb-4">Step Two</span>
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Strategy & Storyboarding</h3>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Our AI analyzes your landing page to extract the most compelling hooks and pain points. We then craft a 4-part hybrid script designed to convert across LinkedIn and Meta.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                    <div className="p-4 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase">Analysis</p>
                      <p className="text-sm font-medium mt-1">Competitor Hook Mapping</p>
                    </div>
                    <div className="p-4 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase">Output</p>
                      <p className="text-sm font-medium mt-1">4-Part Hybrid Script</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full max-w-lg md:max-w-none">
                  <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-4 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl dark:shadow-none">
                    <div className="w-full aspect-[4/3] rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 flex p-4 gap-4 shadow-sm">
                       <div className="w-1/2 flex flex-col gap-2">
                         <div className="w-full h-1/2 bg-gray-100 dark:bg-gray-900 rounded border-2 border-dashed border-gray-200 dark:border-gray-800"></div>
                         <div className="w-full h-1/2 bg-gray-100 dark:bg-gray-900 rounded border-2 border-dashed border-gray-200 dark:border-gray-800"></div>
                       </div>
                       <div className="w-1/2 flex flex-col gap-2">
                         <div className="w-full h-1/2 bg-gray-100 dark:bg-gray-900 rounded border-2 border-dashed border-gray-200 dark:border-gray-800"></div>
                         <div className="w-full h-1/2 bg-gray-100 dark:bg-gray-900 rounded border-2 border-dashed border-gray-200 dark:border-gray-800"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Step 03 */}
              <motion.div 
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row items-center gap-12 lg:gap-24"
              >
                <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-950 border-4 border-indigo-600 z-10">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">03</span>
                </div>
                <div className="flex-1 text-center md:text-left md:pr-12 lg:pr-24">
                  <span className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/20 mb-4">Step Three</span>
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">We Build Your Hybrid Ad</h3>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    We combine AI-generated human presenters with high-quality screencasts of your product and fast-paced B-roll montages. This &quot;hybrid&quot; approach builds trust and demonstrates value simultaneously.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 w-3/4"></div>
                    </div>
                    <p className="text-sm text-gray-500 text-left italic">Production in progress: 75% complete</p>
                  </div>
                </div>
                <div className="flex-1 w-full max-w-lg md:max-w-none">
                  <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-4 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl dark:shadow-none">
                     <div className="w-full aspect-[4/3] rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-200 dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute bottom-4 left-4 right-4 h-12 bg-white dark:bg-gray-950 rounded border border-gray-100 dark:border-gray-800 flex p-1 gap-1">
                          <div className="h-full w-1/4 bg-blue-200 dark:bg-blue-900/50 rounded-sm"></div>
                          <div className="h-full w-2/4 bg-indigo-300 dark:bg-indigo-900/50 rounded-sm"></div>
                          <div className="h-full w-1/4 bg-purple-200 dark:bg-purple-900/50 rounded-sm"></div>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
              {/* Step 04 */}
              <motion.div 
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24"
              >
                <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-950 border-4 border-indigo-600 z-10">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">04</span>
                </div>
                <div className="flex-1 text-center md:text-left md:pl-12 lg:pl-24">
                  <span className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/20 mb-4">Step Four</span>
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Download & Launch</h3>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Receive your final 4K video through a private dashboard. We also provide &quot;AI Launchpad&quot; captions—optimized copy for your ad campaigns so you can go live immediately.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <span className="text-sm font-semibold">4K Export Ready</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <span className="text-sm font-semibold">Ad Copy Included</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full max-w-lg md:max-w-none">
                  <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-4 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl dark:shadow-none">
                    <div className="w-full aspect-[4/3] rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 flex flex-col p-4 shadow-sm">
                       <div className="w-full flex justify-between items-center mb-4">
                         <div className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                           <div className="w-20 h-3 bg-gray-200 dark:bg-gray-800 rounded"></div>
                         </div>
                         <div className="w-16 h-6 bg-indigo-100 dark:bg-indigo-900/30 rounded text-[10px] flex items-center justify-center text-indigo-600 font-bold">Download</div>
                       </div>
                       <div className="flex-1 bg-gray-100 dark:bg-gray-900 rounded flex items-center justify-center relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                         <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-950 flex items-center justify-center z-10 shadow-sm">
                           <div className="w-3 h-3 bg-indigo-600 rounded-sm"></div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Final CTA */}
        <section className="bg-indigo-600 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to launch your campaign?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-indigo-100">
              Get your high-converting hybrid ad in 48 hours for a single flat fee.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                href="/start-project" 
                className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-indigo-600 shadow-sm hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95"
              >
                Start Project - $499
              </Link>
            </div>
            <p className="mt-6 text-sm text-indigo-200">
              No credit card required to start your brief.
            </p>
          </div>
        </section>
      </main>
      {/* Simple Footer */}
      <footer className="bg-white dark:bg-gray-950 py-12 border-t border-gray-100 dark:border-gray-800 mt-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-bold text-slate-900 dark:text-white">StackCuts</span>
            </div>
            <div className="flex gap-x-8 text-sm text-gray-500 dark:text-gray-400">
              <a className="hover:text-indigo-600 transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-indigo-600 transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-indigo-600 transition-colors" href="#">Contact</a>
            </div>
            <div className="text-sm text-gray-400 dark:text-gray-500">
              © 2026 StackCuts. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}