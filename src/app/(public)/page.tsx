"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Film, X, Play, Zap, Cloud, Mountain, 
  Waves, Globe, Mail, Star 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

// --- Types ---
type Project = {
  id: number;
  title: string;
  client: string;
  objective: string;
  result: string;
};

// --- Mock Data ---
const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: "SaaS Launch Explainer", 
    client: "TechStart Inc.", 
    objective: "Drive signups for new B2B feature.", 
    result: "+24% Click-Through Rate" 
  },
  { 
    id: 2, 
    title: "E-com Product Showcase", 
    client: "Lumina Home", 
    objective: "Showcase product durability.", 
    result: "3.5x ROAS on Meta Ads" 
  },
  { 
    id: 3, 
    title: "App User Onboarding", 
    client: "FinFlow", 
    objective: "Reduce user churn during signup.", 
    result: "40% Higher Retention" 
  },
];

// --- Components ---

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white dark:bg-gray-950">
      <div className="hidden lg:block absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              Direct Response Ads. <br />
              <span className="text-slate-400 dark:text-slate-500">Zero Meetings.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              StackCuts is the async video agency for modern brands. We transform your existing footage, screenshots, and ideas into polished marketing assets that convert.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
              <a
                href="/process"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold py-4 sm:py-3 px-8 rounded-lg shadow-lg shadow-indigo-500/20 transition-all text-center"
              >
                Start Project
              </a>
              <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-medium mt-2 sm:mt-0 sm:ml-4 border-l-0 sm:border-l sm:pl-4 border-gray-200 dark:border-gray-700 text-center sm:text-left">
                100% Money-Back <br className="hidden sm:block"/>Guarantee on script approval.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video bg-gray-50 dark:bg-gray-900 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden group border border-gray-100 dark:border-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-50" />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative z-10 w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
            >
              <Play className="w-8 h-8 text-indigo-600 fill-indigo-600 ml-1" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Logos = () => {
  const brands = [
    { name: "BoltShift", icon: Zap },
    { name: "SkyLark", icon: Cloud },
    { name: "TerraFirma", icon: Mountain },
    { name: "FlowState", icon: Waves },
  ];

  return (
    <section className="py-10 border-y border-gray-50 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] sm:text-sm font-semibold text-gray-400 mb-6 uppercase tracking-[0.2em]">
          Trusted by modern teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 px-10 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((Brand, i) => (
            <div key={i} className="flex items-center justify-center gap-2 font-bold text-sm sm:text-xl text-gray-800 dark:text-gray-200">
              <Brand.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>{Brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ onOpenProject }: { onOpenProject: (p: Project) => void }) => {
  return (
    <section id="work" className="py-16 sm:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Recent Work</h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-gray-500 dark:text-gray-400">High-converting ads designed to stop the scroll.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => onOpenProject(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.id * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative aspect-video bg-gray-100 dark:bg-gray-900 rounded-xl shadow-card dark:shadow-none overflow-hidden cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center object-cover opacity-90 group-hover:opacity-100 transition-opacity">
                 <span className="text-gray-400 text-sm font-medium px-4 text-center">{item.title}</span>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <div className="w-12 h-12 bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform sm:scale-90 sm:opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <Play className="w-5 h-5 text-indigo-600 dark:text-white fill-current ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] overflow-y-auto hide-scrollbar"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur z-10">
          <h2 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white truncate pr-4">
            {project.title}
          </h2>
          <button 
            /* FIX: Added aria-label */
            aria-label="Close modal"
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 pt-6">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
            <div className="text-center space-y-4 px-6">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto">
                <Film className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <p className="text-slate-900 dark:text-white font-bold text-lg">Premium Video Preview</p>
                <p className="text-slate-500 dark:text-gray-400 text-sm max-w-xs mx-auto">
                  Video playback is disabled in development mode for maximum performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Client</span>
              <p className="text-base md:text-lg font-medium text-slate-900 dark:text-gray-200">{project.client}</p>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Objective</span>
              <p className="text-base md:text-lg text-slate-700 dark:text-white leading-snug">{project.objective}</p>
            </div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
               {project.result}
            </div>
          </div>
          <div className="flex justify-start md:justify-end">
            <a href="#" className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base rounded-lg shadow-lg shadow-indigo-500/20 transition-all">
              Start Project
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
    return (
        <section className="py-16 px-5 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 px-4 leading-tight">Trusted by Founders building the future.</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-card">
                        <div className="flex gap-1 text-[#F59E0B] mb-4">
                            {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-slate-600 dark:text-gray-300 italic text-sm leading-relaxed mb-6">&quot;StackCuts transformed our ad strategy. The videos are top-notch and delivered incredibly fast, without a single meeting!&quot;</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                <span className="font-bold text-gray-400">SC</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Chen</p>
                                <p className="text-[11px] text-gray-500 uppercase tracking-wide">CEO, InnovateTech</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-card">
                        <div className="flex gap-1 text-[#F59E0B] mb-4">
                            {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-slate-600 dark:text-gray-300 italic text-sm leading-relaxed mb-6">&quot;The quality and speed of StackCuts&apos; service are unmatched. Our conversion rates have seen a significant boost.&quot;</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                <span className="font-bold text-gray-400">DL</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">David Lee</p>
                                <p className="text-[11px] text-gray-500 uppercase tracking-wide">Founder, GrowthSphere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
  return (
    <section className="py-16 px-5 bg-indigo-50/30 dark:bg-gray-950 text-center border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Ready to scale your ads?</h2>
        <p className="text-sm sm:text-lg text-cool-gray dark:text-gray-400 mb-8 px-4">
          Join 100+ brands producing high-volume creatives without the headache.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xs sm:max-w-none mx-auto">
          <a
            href="/process"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all"
          >
            Get Started Now
          </a>
          <a
            href="/pricing"
            className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-slate-700 dark:text-gray-200 font-bold py-4 px-10 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pt-12 pb-8 px-5">
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
        <div className="w-full border-t border-gray-50 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-400 dark:text-gray-600">
            © 2026 StackCuts. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              /* FIX: Added aria-label */
              aria-label="Website"
              href="#" 
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
                <Globe className="w-5 h-5" />
            </a>
            <a 
              /* FIX: Added aria-label */
              aria-label="Email"
              href="#" 
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
                <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <main className={`min-h-screen bg-white dark:bg-gray-950 ${activeProject ? 'overflow-hidden h-screen' : ''}`}>
      <Navbar />
      <Hero />
      <Logos />
      {/* Pass the handler to open the modal */}
      <Portfolio onOpenProject={setActiveProject} />
      <Testimonials />
      <CTA />
      <Footer />

      {/* Render the Modal if a project is active */}
      <AnimatePresence>
        {activeProject && (
          <VideoModal 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}