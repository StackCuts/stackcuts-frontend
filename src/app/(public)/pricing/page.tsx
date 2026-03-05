"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { CheckCircle2, Film } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Global Navigation */}
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Transparent Pricing.{" "}
              <span className="text-indigo-600">No Surprises.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium">
              Stop paying for hours. Start paying for high-converting assets,
              crafted with dedicated focus on one Hybrid Ad at a time.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-24 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl rounded-2xl border border-white/40 dark:border-slate-800 p-8 md:p-12 shadow-[0_20px_50px_rgba(79,70,229,0.15)] flex flex-col items-center text-center">
                <div className="bg-indigo-600/10 text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase mb-8">
                  ⚡ Founder&apos;s Launch Offer (First 5 Clients Only)
                </div>
                <h3 className="text-3xl font-black mb-4">
                  The Signature Hybrid Ad
                </h3>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-2xl text-slate-400 line-through font-bold">
                    $499
                  </span>
                  <span className="text-7xl font-black tracking-tighter text-slate-900 dark:text-white">
                    $199
                  </span>
                  <span className="text-slate-500 font-medium">
                    / per video
                  </span>
                </div>
                <ul className="space-y-5 mb-10 w-full max-w-sm mx-auto">
                  <li className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 className="text-indigo-600 w-6 h-6 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      1 High-Converting Video Ad
                    </span>
                  </li>
                  <li className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 className="text-indigo-600 w-6 h-6 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      Direct Response Scripting
                    </span>
                  </li>
                  <li className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 className="text-indigo-600 w-6 h-6 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      Scroll-Stopping UGC Hook
                    </span>
                  </li>
                  <li className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 className="text-indigo-600 w-6 h-6 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      3-5 Day Turnaround
                    </span>
                  </li>
                  <li className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 className="text-indigo-600 w-6 h-6 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      Dedicated Async Dashboard
                    </span>
                  </li>
                </ul>
                <button className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-black text-lg hover:shadow-xl hover:shadow-indigo-600/30 transition-all transform hover:-translate-y-1">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-24 bg-transparent">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Founders choose StackCuts
            </h2>
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <th className="py-4 px-6 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                      StackCuts
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Agencies
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="py-5 px-6 text-sm font-medium">
                      Delivery Speed
                    </td>
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                        ⚡ Priority Lane (3-5 Days)
                      </span>
                    </td>
                    <td className="py-5 px-6 text-sm text-slate-500 dark:text-slate-400">
                      Unpredictable (Weeks)
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                    <td className="py-5 px-6 text-sm font-medium">
                      Communication
                    </td>
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                        💬 Async Dashboard
                      </span>
                    </td>
                    <td className="py-5 px-6 text-sm text-slate-500 dark:text-slate-400">
                      Endless Zoom Calls
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 text-sm font-medium">
                      Cost Model
                    </td>
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                        ✅ Flat Fee
                      </span>
                    </td>
                    <td className="py-5 px-6 text-sm text-slate-500 dark:text-slate-400">
                      Hourly / Bloated Retainer
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                    <td className="py-5 px-6 text-sm font-medium">
                      Hook Creation
                    </td>
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                        🧠 Human Taste + Precision
                      </span>
                    </td>
                    <td className="py-5 px-6 text-sm text-slate-500 dark:text-slate-400">
                      Ship Products to Creators
                    </td>
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
                <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  StackCuts
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The modern way for high-growth DTC brands to scale their
                creative output.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">
                Product
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">
                Connect
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Support
                  </a>
                </li>
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
