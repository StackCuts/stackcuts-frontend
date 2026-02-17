"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { 
  Film, Globe, Mail, 
  Package, Check, Rocket, CloudUpload,
  FileText, Play, Download
} from "lucide-react";

const ProcessTimeline = () => {
  return (
    /* FIXED: Changed to gray-950 to match Home */
    <div id="process" className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <section className="px-4 py-16 md:py-24 pt-32">
        <div className="mx-auto max-w-[960px] text-center">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Your Journey with StackCuts
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            From selection to final polish, we&apos;ve streamlined the creative process into 5 simple steps.
          </p>
        </div>
      </section>

      <section className="relative px-4 pb-24 md:px-10">
        <div className="max-w-[1024px] mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-indigo-100 md:-ml-[1px]"></div>
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-600 via-indigo-600 to-transparent md:-ml-[1px]"></div>

          {/* Step 1 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32 group">
            <div className="absolute left-4 md:left-1/2 -ml-[9px] md:-ml-[9px] mt-6 flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-indigo-600 border-4 border-white dark:border-gray-950 shadow-lg z-10"></div>
            </div>
            <div className="pl-12 md:pl-0 md:pr-16 md:text-right flex flex-col justify-center order-2 md:order-1">
              <span className="text-indigo-600 font-bold tracking-wider text-sm mb-2 block uppercase">Step 01</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">Choose Your Pack</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">Select the package that fits your growth stage. Whether you need a single winning hook or a full-funnel creative refresh, we have transparent pricing models ready.</p>
            </div>
            <div className="pl-12 md:pl-16 order-3 md:order-2">
              <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-xl shadow-xl overflow-hidden p-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Package className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">Starter Pack</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Perfect for testing</div>
                      </div>
                    </div>
                    <div className="text-indigo-600 font-bold">$990</div>
                  </div>
                  <div className="flex justify-between items-center bg-indigo-50 dark:bg-indigo-600/10 p-3 rounded-lg border border-indigo-600/20">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">Growth Pack</div>
                    </div>
                    <div className="text-indigo-600 font-bold text-sm">$2,400</div>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-100 dark:border-white/5 pt-4 opacity-60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400">
                        <Rocket className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">Scale Pack</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Full dominance</div>
                      </div>
                    </div>
                    <div className="text-gray-400 font-bold">$4,800</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32 group">
            <div className="absolute left-4 md:left-1/2 -ml-[9px] md:-ml-[9px] mt-6 flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-indigo-600 border-4 border-white dark:border-gray-950 shadow-lg z-10"></div>
            </div>
            <div className="pl-12 md:pl-0 md:pr-16 order-3 md:order-1">
              <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-xl shadow-xl overflow-hidden p-8 hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-600/10 rounded-full flex items-center justify-center mb-6 text-indigo-600 animate-pulse">
                  <CloudUpload className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Drag & Drop Assets</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Supports .mp4, .mov, .png, .ai</p>
                <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-2 mb-2 overflow-hidden">
                  <div className="bg-indigo-600 h-2 rounded-full w-2/3"></div>
                </div>
                <div className="flex justify-between w-full text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>Uploading...</span>
                  <span>68%</span>
                </div>
              </div>
            </div>
            <div className="pl-12 md:pl-16 flex flex-col justify-center order-2 md:order-2">
              <span className="text-indigo-600 font-bold tracking-wider text-sm mb-2 block uppercase">Step 02</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">Upload & Brief</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">Seamlessly upload your raw footage, logos, and fonts. Fill out our structured brief to tell us about your target audience, value props, and winning angles.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32 group">
            <div className="absolute left-4 md:left-1/2 -ml-[9px] md:-ml-[9px] mt-6 flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-indigo-600 border-4 border-white dark:border-gray-950 shadow-lg z-10"></div>
            </div>
            <div className="pl-12 md:pl-0 md:pr-16 md:text-right flex flex-col justify-center order-2 md:order-1">
              <span className="text-indigo-600 font-bold tracking-wider text-sm mb-2 block uppercase">Step 03</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">Align on Vision</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">Review the script and storyboard before we start editing. Comment directly on the document, suggest changes, and hit approve when you&apos;re ready to roll.</p>
            </div>
            <div className="pl-12 md:pl-16 order-3 md:order-2">
              <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-xl shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/5 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-2 text-xs font-mono text-gray-500 dark:text-gray-400">script_v3_final.doc</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-white/10 rounded-md flex-shrink-0 flex items-center justify-center">
                       <FileText className="text-gray-400 w-6 h-6" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="h-2 bg-gray-200 dark:bg-white/10 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 dark:bg-white/10 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 dark:bg-white/10 rounded w-5/6"></div>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-xs text-green-800 dark:text-green-300 font-bold">Approved by Client</p>
                      <p className="text-[10px] text-green-600 dark:text-green-400">Today at 10:42 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32 group">
            <div className="absolute left-4 md:left-1/2 -ml-[9px] md:-ml-[9px] mt-6 flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-indigo-600 border-4 border-white dark:border-gray-950 shadow-lg z-10"></div>
            </div>
            <div className="pl-12 md:pl-0 md:pr-16 order-3 md:order-1">
              <div className="relative bg-[#1e1e2e] rounded-xl shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 p-1">
                <div className="bg-[#2a2a3c] rounded-lg p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-4 text-gray-400 text-xs font-mono">
                    <span>TIMELINE</span>
                    <span>00:14:22</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-1 h-8">
                      <div className="bg-blue-500/80 w-1/4 rounded-sm border-l-2 border-blue-400"></div>
                      <div className="bg-blue-600/80 w-1/2 rounded-sm border-l-2 border-blue-500"></div>
                      <div className="bg-blue-500/80 w-1/4 rounded-sm border-l-2 border-blue-400"></div>
                    </div>
                    <div className="flex gap-1 h-6">
                      <div className="bg-teal-500/60 w-1/3 rounded-sm"></div>
                      <div className="bg-teal-500/60 w-1/6 rounded-sm"></div>
                      <div className="bg-teal-500/60 w-1/2 rounded-sm"></div>
                    </div>
                    <div className="relative h-6 bg-[#363649] rounded-sm w-full overflow-hidden">
                      <div className="absolute left-1/3 w-1/4 h-full bg-purple-500/60 rounded-sm"></div>
                      <div className="absolute left-2/3 w-10 h-full bg-purple-500/60 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-red-500 z-10 flex flex-col justify-between">
                    <div className="w-2 h-2 -ml-[3.5px] bg-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-12 md:pl-16 flex flex-col justify-center order-2 md:order-2">
              <span className="text-indigo-600 font-bold tracking-wider text-sm mb-2 block uppercase">Step 04</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">We Build Your Hybrid Ads</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">Our editors get to work. We combine stock footage, motion graphics, and your raw assets to create high-performing hybrid ads designed to stop the scroll.</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 group">
            <div className="absolute left-4 md:left-1/2 -ml-[9px] md:-ml-[9px] mt-6 flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-indigo-600 border-4 border-white dark:border-gray-950 shadow-lg z-10"></div>
            </div>
            <div className="pl-12 md:pl-0 md:pr-16 md:text-right flex flex-col justify-center order-2 md:order-1">
              <span className="text-indigo-600 font-bold tracking-wider text-sm mb-2 block uppercase">Step 05</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">Review, Polish, Download</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">Access your private review link. Leave frame-accurate feedback if needed. Once perfect, download your assets in all formats ready for ad platform upload.</p>
            </div>
            <div className="pl-12 md:pl-16 order-3 md:order-2">
              <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-xl shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-video bg-gray-900 relative group/video">
                  <div className="w-full h-full bg-gray-800 opacity-80 flex items-center justify-center">
                     <span className="text-white text-xs opacity-50">Video Preview</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="h-1 bg-gray-600 rounded-full mb-2 overflow-hidden">
                      <div className="h-full bg-indigo-600 w-full"></div>
                    </div>
                    <div className="flex justify-between text-white text-[10px]">
                      <span>00:15 / 00:15</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900">
                  <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all active:scale-95">
                    <Download className="w-5 h-5" />
                    Download Final Assets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[1024px] mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden relative shadow-2xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-10">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Ready to start your first project?</h2>
              <p className="text-gray-300 text-lg">Join hundreds of brands scaling with StackCuts today.</p>
            </div>
            <div className="flex-shrink-0">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-white text-indigo-600 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors shadow-lg">
                <span className="truncate">Start Your Journey</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer = () => {
  return (
    /* FIXED: Changed to gray-950 */
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-white/5 pt-12 pb-8 px-5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-8">
          <Film className="text-indigo-600 w-6 h-6" />
          <span className="font-bold text-lg text-slate-900 dark:text-white">StackCuts</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {["FAQ", "Terms", "Privacy", "Contact"].map(item => (
            <a key={item} href="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="w-full border-t border-gray-50 dark:border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-400 dark:text-gray-600">
            © 2026 StackCuts. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Visit our website" className="text-gray-400 hover:text-indigo-600 transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" aria-label="Contact us" className="text-gray-400 hover:text-indigo-600 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <ProcessTimeline />
      <Footer />
    </main>
  );
}