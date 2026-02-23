"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Play, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
const [isModalOpen, setIsModalOpen] = useState(false);

return (
<div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
  {/* Custom Styles for Formula Connectors */}
  <style dangerouslySetInnerHTML={{__html: `
    .text-balance { text-wrap: balance; }
    .formula-connector::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -1rem;
      width: 2rem;
      height: 2px;
      background: #E2E8F0;
      z-index: 0;
    }
    .dark .formula-connector::after {
      background: #1F2937;
    }
    @media (max-width: 1024px) {
      .formula-connector::after { display: none; }
    }
  `}} />
  {/* Global Navigation */}
  <Navbar />
  <main className="flex-grow">
    {/* Hero Section */}
    <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 text-balance">
          Direct Response Ads. Zero Meetings. <br className="hidden lg:block"/>
          <span className="text-indigo-600 dark:text-indigo-500">Zero Filming.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
          StackCuts is the async video agency for modern brands. We use AI-generated hooks and your existing assets to build high-converting hybrid ads in 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href="/start-project" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-indigo-500/20 hover:bg-indigo-700 transition-all">
            Start Project
          </Link>
          <Link href="/storyboard" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-900 text-slate-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            ✨ Try the AI Storyboard
          </Link>
        </div>
        
        {/* Hero Mockup */}
        <div className="relative max-w-5xl mx-auto perspective-[1000px]">
          <div className="rounded-xl overflow-hidden shadow-2xl dark:shadow-indigo-500/10 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-2 transform rotateX-2">
            <div className="bg-gray-50 dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 p-3 flex items-center justify-between rounded-t-lg">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500"></div>
              </div>
              <div className="bg-white dark:bg-gray-900 px-4 py-1 rounded text-[10px] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-800">
                stackcuts.com/dashboard/project-v1
              </div>
              <div className="w-10"></div>
            </div>
            <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 aspect-video md:aspect-auto">
              <aside className="hidden md:block w-48 border-r border-gray-100 dark:border-gray-800 p-4 text-left">
                <div className="h-2 w-20 bg-gray-100 dark:bg-gray-800 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-6 w-full bg-indigo-50 dark:bg-indigo-900/30 rounded text-[10px] text-indigo-600 dark:text-indigo-400 flex items-center px-2 font-medium">Script Generation</div>
                  <div className="h-6 w-full hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded text-[10px] text-gray-500 dark:text-gray-400 flex items-center px-2">The UGC Hook</div>
                  <div className="h-6 w-full hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded text-[10px] text-gray-500 dark:text-gray-400 flex items-center px-2">UI Screencast & Montage</div>
                  <div className="h-6 w-full hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded text-[10px] text-gray-500 dark:text-gray-400 flex items-center px-2">CTA</div>
                  <div className="h-6 w-full hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded text-[10px] text-gray-500 dark:text-gray-400 flex items-center px-2">Final Ad Delivery</div>
                </div>
              </aside>
              <main className="flex-1 p-6 bg-gray-50/50 dark:bg-gray-950/50 flex flex-col items-center justify-center relative">
                <div className="w-full max-w-2xl aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg relative flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-700">
                  {/* Using a solid color placeholder since original external image links were broken */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 opacity-50"></div>
                  <button 
                    aria-label="Play video"
                    className="z-10 bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform group"
                  >
                    <Play className="w-6 h-6 text-white ml-1 group-hover:fill-current" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/50 dark:bg-black/50 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 w-1/3"></div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Trusted By Section */}
    <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Trusted by modern growth teams</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale dark:opacity-30 dark:invert">
          <span className="text-xl font-bold text-slate-800">AcmeCorp</span>
          <span className="text-xl font-bold text-slate-800">GlobalTech</span>
          <span className="text-xl font-bold text-slate-800">Nexus</span>
          <span className="text-xl font-bold text-slate-800">Vanguard</span>
          <span className="text-xl font-bold text-slate-800">Pioneer</span>
        </div>
      </div>
    </section>
    {/* Recent Work Section */}
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Recent Work: High-Converting Hybrid Ads</h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "B2B SaaS Ad", metric: "Increased conversion by 42%" },
            { title: "E-commerce Hook", metric: "Scaleable social creative" },
            { title: "Web3 Explainer", metric: "Engagement focused montage" }
          ].map((item, i) => (
            <div 
              key={i}
              onClick={() => setIsModalOpen(true)}
              className="group relative bg-white dark:bg-gray-900 p-2 rounded-xl shadow-sm hover:shadow-xl dark:shadow-none dark:border dark:border-gray-800 dark:hover:border-indigo-500/50 transition-all cursor-pointer"
            >
              <div className="aspect-[4/5] relative rounded-md overflow-hidden bg-gray-200 dark:bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-slate-200 dark:from-indigo-900/40 dark:to-slate-800/40 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-black/30 dark:group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1 fill-current" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Formula Section */}
    <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Our Signature 4-Part Hybrid Formula</h2>
          <p className="text-gray-500 dark:text-gray-400">The structure behind every 7-figure creative we deliver.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          <div className="relative z-10 formula-connector group">
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors h-full">
              <div className="text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 uppercase tracking-widest">Part 1</div>
              <div className="mb-4 aspect-square bg-gray-50 dark:bg-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🙋‍♀️</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">1. AI Hook</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">A hyper-realistic person addresses the specific user pain point within 1.5 seconds.</p>
            </div>
          </div>
          <div className="relative z-10 formula-connector group">
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors h-full">
              <div className="text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 uppercase tracking-widest">Part 2</div>
              <div className="mb-4 aspect-square bg-gray-50 dark:bg-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">2. Screencast</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Smooth transition to your product dashboard in action, showing the real value.</p>
            </div>
          </div>
          <div className="relative z-10 formula-connector group">
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors h-full">
              <div className="text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 uppercase tracking-widest">Part 3</div>
              <div className="mb-4 aspect-square bg-gray-50 dark:bg-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">3. Montage</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Dynamic B-roll that maintains engagement and rhythm through fast-paced editing.</p>
            </div>
          </div>
          <div className="relative z-10 group">
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors h-full">
              <div className="text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 uppercase tracking-widest">Part 4</div>
              <div className="mb-4 aspect-square bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-2 border-dashed border-indigo-200 dark:border-indigo-800 flex flex-col items-center justify-center p-4">
                <div className="text-indigo-600 dark:text-indigo-400 font-bold text-center text-xs">LATEST DEAL:<br/>50% OFF TODAY!</div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">4. Motion CTA</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Final punchy text animation that drives the click and increases CTR.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-indigo-600 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-indigo-600/20 dark:shadow-none relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black opacity-10 rounded-full blur-3xl"></div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Ready to scale your ads?</h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
          Get your first batch of high-converting creatives delivered in under 48 hours. No subscriptions, just pure performance.
        </p>
        <Link href="/start-project" className="inline-block bg-white text-indigo-600 px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-1 relative z-10">
          Launch Your Campaign — $499
        </Link>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="bg-white dark:bg-gray-950 pt-16 pb-12 border-t border-gray-100 dark:border-gray-800 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div>
          <span className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded text-white flex items-center justify-center text-xs">S</div>
            StackCuts
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">© 2026 StackCuts Inc. All rights reserved.</p>
        </div>
        <div className="flex space-x-8">
          <a className="text-sm font-medium text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white" href="#">Privacy Policy</a>
          <a className="text-sm font-medium text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white" href="#">Terms of Service</a>
          <a className="text-sm font-medium text-gray-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white" href="#">Contact</a>
        </div>
      </div>
    </div>
  </footer>
  {/* Interactive Video Modal */}
  <AnimatePresence>
    {isModalOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
          className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-200 dark:border-gray-800"
        >
          <button 
            aria-label="Close modal"
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 md:-top-12 md:right-0 text-gray-500 hover:text-gray-800 md:text-white md:hover:text-gray-300 z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="w-full md:w-2/3 bg-black aspect-video md:aspect-auto flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900/50 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Play className="w-10 h-10 text-white fill-current ml-1" />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Strategy</h3>
            <div className="space-y-4 mb-8 flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We used an <strong className="text-slate-900 dark:text-white">AI Hook</strong> focused on time-savings, followed by a <strong className="text-slate-900 dark:text-white">UI walkthrough</strong> showing the core automation feature.
              </p>
              <div className="h-px bg-gray-100 dark:bg-gray-800 w-full my-6"></div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold mb-1">Results</p>
                <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">12% CTR Improvement</p>
              </div>
            </div>
            <Link href="/start-project" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
              I want an ad like this - $499
            </Link>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
</div>
);
}