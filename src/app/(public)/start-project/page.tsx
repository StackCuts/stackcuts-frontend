/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Monitor,
  Smartphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; // Required for navigation

export default function StartProjectPage() {
  const [selectedFormat, setSelectedFormat] = useState<
    "landscape" | "vertical"
  >("landscape");
  const [scriptingStrategy, setScriptingStrategy] = useState<"draft" | "own">(
    "draft",
  );

  const total = 199;
  const deposit = total * 0.5;

  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300">
      <main className="flex-grow container mx-auto max-w-2xl px-6 pt-16 pb-48">
        <header className="mb-10 text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Start New Project
          </h1>
          <p className="text-slate-500 dark:text-gray-400">
            Tell us about your ad so we can get started.
          </p>
        </header>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <section>
            <label
              className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 text-center lg:text-left"
              htmlFor="project-name"
            >
              Give your project a name
            </label>
            <input
              type="text"
              id="project-name"
              placeholder="e.g., Summer Campaign 2026"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
            />
          </section>

          <section>
            <h2 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-4 text-center lg:text-left">
              Selected Package
            </h2>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-2 border-indigo-600 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/20 transition-all gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    The Signature Hybrid Ad
                  </h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      Launch offer applied
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-gray-400 text-left">
                  Premium boutique production (One-at-a-time focus)
                </p>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                $199
              </p>
            </div>
          </section>

          <section>
            <label
              className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 text-center lg:text-left"
              htmlFor="goal"
            >
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

          <section>
            <h2 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3 text-center lg:text-left">
              Format
            </h2>
            <div className="flex flex-wrap gap-4">
              <div
                onClick={() => setSelectedFormat("landscape")}
                className={`flex-1 min-w-[160px] cursor-pointer flex items-center justify-center lg:justify-start gap-3 p-4 border rounded-lg transition-all ${
                  selectedFormat === "landscape"
                    ? "border-indigo-600 ring-1 ring-indigo-600 bg-white dark:bg-gray-900"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                }`}
              >
                <Monitor
                  className={`w-5 h-5 ${selectedFormat === "landscape" ? "text-indigo-600" : "text-gray-400"}`}
                />
                <span className="text-sm font-medium dark:text-white">
                  16:9 Landscape
                </span>
              </div>

              <div
                onClick={() => setSelectedFormat("vertical")}
                className={`flex-1 min-w-[160px] cursor-pointer flex items-center justify-center lg:justify-start gap-3 p-4 border rounded-lg transition-all ${
                  selectedFormat === "vertical"
                    ? "border-indigo-600 ring-1 ring-indigo-600 bg-white dark:bg-gray-900"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                }`}
              >
                <Smartphone
                  className={`w-5 h-5 ${selectedFormat === "vertical" ? "text-indigo-600" : "text-gray-400"}`}
                />
                <span className="text-sm font-medium dark:text-white">
                  9:16 Vertical
                </span>
              </div>
            </div>
          </section>

          <section className="pt-4">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-4 text-center lg:text-left">
              Scripting Strategy
            </h2>
            <div className="flex flex-col gap-4">
              <div
                onClick={() => setScriptingStrategy("draft")}
                className={`cursor-pointer group flex items-start gap-4 p-5 border rounded-xl transition-all ${
                  scriptingStrategy === "draft"
                    ? "border-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      scriptingStrategy === "draft"
                        ? "border-indigo-600 bg-indigo-600"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {scriptingStrategy === "draft" && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                    Draft a Direct Response Script for me (Included in package)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400">
                    Our expert copywriters will craft your conversion-focused
                    script.
                  </p>
                </div>
              </div>

              <div
                onClick={() => setScriptingStrategy("own")}
                className={`cursor-pointer group flex items-start gap-4 p-5 border rounded-xl transition-all ${
                  scriptingStrategy === "own"
                    ? "border-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      scriptingStrategy === "own"
                        ? "border-indigo-600 bg-indigo-600"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {scriptingStrategy === "own" && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                    I have my own script (Upload on the next step)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400">
                    Provide your own materials for our team to produce.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </form>
      </main>

      <footer className="fixed bottom-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 py-6 z-50">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 w-full sm:w-auto justify-center sm:justify-start">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Total Estimate
              </p>
              <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
                ${total.toLocaleString()}
              </p>
            </div>
            <div className="h-10 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Due Now (50% Deposit)
              </p>
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

          {/* LINK TO CHECKOUT - This ensures the button works */}
          <Link
            href="/checkout"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-indigo-600/20 active:scale-95 flex items-center justify-center gap-2"
          >
            Save & Proceed
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
