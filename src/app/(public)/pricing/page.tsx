"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { CheckCircle2, Film } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingPage() {
return (
<div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
  {/* Global Navigation */}
  <Navbar />
  <main className="flex-grow pt-32 pb-24">
    {/* Header Section */}
    <section className="px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-slate-900 dark:text-white"
        >
          Transparent Pricing. <span className="text-indigo-600 dark:text-indigo-500">No Surprises.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium"
        >
          Stop paying for hours. Start paying for assets.
        </motion.p>
      </div>
    </section>
    {/* Pricing Cards */}
    <section className="pt-16 pb-24 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Card: The Hybrid Ad */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 flex flex-col transition-all hover:shadow-xl dark:shadow-none"
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">The Hybrid Ad</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white">$499</span>
              <span className="text-gray-500 dark:text-gray-400 font-medium">/ video</span>
            </div>
          </div>
          <Link 
            href="/checkout" 
            className="w-full py-3 px-4 mb-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
          >
            Start Project
          </Link>
          <ul className="space-y-4 flex-grow">
            {[
              "1 High-Converting Video Ad",
              "AI Scriptwriting",
              "AI-Generated UGC Hook",
              "48-Hour Delivery",
              "AI Marketing Launchpad"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-indigo-600 dark:text-indigo-500 w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Right Card: The Growth Engine */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-indigo-600 p-8 flex flex-col shadow-2xl shadow-indigo-600/10 dark:shadow-none md:scale-105 z-10"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
            Most Popular
          </div>
          <div className="mb-8 pt-2">
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">The Growth Engine</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white">$1,799</span>
              <span className="text-gray-500 dark:text-gray-400 font-medium">/ month</span>
            </div>
          </div>
          <button className="w-full py-3.5 px-4 mb-8 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]">
            Start Growth Plan
          </button>
          <ul className="space-y-4 flex-grow">
            {[
              "4 Hybrid Ads per month",
              "Unlimited AI Hook Variations",
              "Priority Queue",
              "Dedicated Dashboard",
              "Vertical + Landscape formats"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-indigo-600 dark:text-indigo-400 w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 dark:text-gray-200 font-semibold">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
    {/* Comparison Table Section */}
    <section className="py-24 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Why Founders choose StackCuts</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/3">Feature</th>
                <th className="py-4 px-6 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider w-1/3">StackCuts</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/3">Agencies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr>
                <td className="py-5 px-6 text-sm font-medium text-slate-900 dark:text-gray-200">Delivery Speed</td>
                <td className="py-5 px-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-800/50">
                    ⚡ 48 Hours
                  </span>
                </td>
                <td className="py-5 px-6 text-sm text-gray-500 dark:text-gray-400">Unpredictable (Weeks)</td>
              </tr>
              <tr className="bg-gray-50/50 dark:bg-gray-800/20">
                <td className="py-5 px-6 text-sm font-medium text-slate-900 dark:text-gray-200">Communication</td>
                <td className="py-5 px-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-800/50">
                    💬 Async Dashboard
                  </span>
                </td>
                <td className="py-5 px-6 text-sm text-gray-500 dark:text-gray-400">Endless Zoom Calls</td>
              </tr>
              <tr>
                <td className="py-5 px-6 text-sm font-medium text-slate-900 dark:text-gray-200">Cost Model</td>
                <td className="py-5 px-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-800/50">
                    ✅ Flat Fee
                  </span>
                </td>
                <td className="py-5 px-6 text-sm text-gray-500 dark:text-gray-400">Hourly / Bloated Retainer</td>
              </tr>
              <tr className="bg-gray-50/50 dark:bg-gray-800/20">
                <td className="py-5 px-6 text-sm font-medium text-slate-900 dark:text-gray-200">Hook Creation</td>
                <td className="py-5 px-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-800/50">
                    🤖 AI-Generated Instantly
                  </span>
                </td>
                <td className="py-5 px-6 text-sm text-gray-500 dark:text-gray-400">Ship Products to Creators</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-16 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6 text-indigo-600">
            <Film className="w-6 h-6" />
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">StackCuts</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The modern way for high-growth DTC brands to scale their creative output.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Product</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">How it works</a></li>
            <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Templates</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Blog</a></li>
            <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Twitter</a></li>
            <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 StackCuts AI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</div>
);
}