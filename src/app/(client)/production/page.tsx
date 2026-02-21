"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
Check, Clock, Rocket,
Eye, Zap, Sun, Moon,
Bell, Clapperboard
} from "lucide-react";
import Link from "next/link";

export default function ProductionActivePage() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => setMounted(true), []);

return (
<div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/40">
  {/* Inline Styles for Custom Animations */}
  <style dangerouslySetInnerHTML={{__html: `
    .waveform-container { display: flex; align-items: center; justify-content: center; gap: 4px; height: 48px; }
    .bar { width: 6px; background-color: #4f46e5; border-radius: 99px; animation: pulse-glow 1.5s ease-in-out infinite; }
    .bar:nth-child(1) { height: 40%; animation-delay: 0s; opacity: 0.5; }
    .bar:nth-child(2) { height: 70%; animation-delay: 0.1s; opacity: 0.7; }
    .bar:nth-child(3) { height: 100%; animation-delay: 0.2s; box-shadow: 0 0 12px rgba(79, 70, 229, 0.6); }
    .bar:nth-child(4) { height: 70%; animation-delay: 0.3s; opacity: 0.7; }
    .bar:nth-child(5) { height: 40%; animation-delay: 0.4s; opacity: 0.5; }
    @keyframes pulse-glow {
      0%, 100% { transform: scaleY(1); opacity: 0.5; }
      50% { transform: scaleY(1.15); opacity: 1; }
    }
    .spinner {
      border: 2px solid rgba(79, 70, 229, 0.1);
      border-top: 2px solid #4f46e5;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}} />
  {/* Header - NOW UNIFIED WITH INTAKE PAGE */}
  <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shrink-0">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      
      {/* Left: Logo & Project Context */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
            <Clapperboard className="w-5 h-5" />
          </div>
          <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white hidden sm:block">StackCuts</span>
        </Link>
        <div className="h-4 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate max-w-[200px] sm:max-w-none">
          Project: Summer Ad Campaign
        </span>
      </div>
      
      {/* Center: Stepper */}
      <nav className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-2 opacity-50">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 text-[10px] font-medium">1</span>
          <span className="text-gray-500 text-sm font-medium whitespace-nowrap">Briefing</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-medium shadow-md shadow-indigo-600/20">2</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm whitespace-nowrap">Production</span>
        </div>
        <div className="flex items-center gap-2 opacity-40">
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 text-[10px] font-medium">3</span>
          <span className="text-gray-500 text-sm font-medium whitespace-nowrap">Review</span>
        </div>
        <div className="flex items-center gap-2 opacity-40">
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 text-[10px] font-medium">4</span>
          <span className="text-gray-500 text-sm font-medium whitespace-nowrap">Final</span>
        </div>
      </nav>
      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button 
          title="Notifications"
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-950"></span>
        </button>
        <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold text-xs">
          SC
        </div>
      </div>
    </div>
  </header>
  {/* Main Workspace */}
  <main className="flex-grow max-w-7xl mx-auto w-full p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-2">
    
    {/* Left Column: AI Assembly Line */}
    <section className="lg:col-span-7 flex flex-col gap-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden p-6 sm:p-10 flex flex-col items-center text-center h-full relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-600 to-transparent opacity-50"></div>
        
        <span className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-8">The AI Assembly Line</span>
        
        <div className="waveform-container mb-8">
          <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
        </div>
        
        <h2 className="text-3xl font-bold mb-10 tracking-tight text-slate-900 dark:text-white">Assembling your hybrid ad.</h2>
        
        <div className="w-full max-w-md text-left space-y-8 relative pl-4 sm:pl-0">
          <div className="absolute left-[27px] sm:left-[11px] top-3 bottom-8 w-0.5 bg-gray-100 dark:bg-gray-800 -z-10"></div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white ring-4 ring-white dark:ring-gray-900 z-0 shadow-sm">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div className="pt-0.5">
              <span className="text-gray-500 dark:text-gray-400 font-medium block text-sm">1. Strategic Brief Analyzed</span>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-white dark:bg-gray-900 ring-4 ring-white dark:ring-gray-900 z-0">
              <div className="spinner"></div>
            </div>
            <div className="pt-0.5">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold block text-sm tracking-wide">2. AI Hook Generation & Scripting</span>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Generating 3 hook variations based on competitor analysis...</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 opacity-40">
            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 ring-4 ring-white dark:ring-gray-900 z-0"></div>
            <div className="pt-0.5">
              <span className="text-gray-600 dark:text-gray-300 font-medium block text-sm">3. Screencast & Montage Assembly</span>
            </div>
          </div>
          
          <div className="flex items-start gap-4 opacity-40">
            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 ring-4 ring-white dark:ring-gray-900 z-0"></div>
            <div className="pt-0.5">
              <span className="text-gray-600 dark:text-gray-300 font-medium block text-sm">4. Motion Graphics & Final Polish</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 w-full pt-8 border-t border-gray-100 dark:border-gray-800/50">
          <div className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 p-4 rounded-lg flex items-center justify-center gap-3">
            <Clock className="text-gray-400 dark:text-gray-500 w-5 h-5" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Estimated Delivery: <span className="text-slate-900 dark:text-white font-semibold ml-1">48 Hours</span>
            </span>
          </div>
        </div>
      </div>
    </section>
    {/* Right Column: Info Cards */}
    <section className="lg:col-span-5 bg-gray-50/50 dark:bg-gray-900/30 rounded-xl p-6 lg:p-8 flex flex-col gap-6 border border-gray-100 dark:border-transparent">
      <h3 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">Campaign Status</h3>
      
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2.5 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 transition-colors shrink-0">
              <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Fast Turnaround</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Your first draft will be ready for review within 48 hours. We’ll email you the moment it drops.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2.5 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 transition-colors shrink-0">
              <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">The Review Process</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                You’ll be able to leave frame-accurate feedback directly on the video during the next step.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2.5 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 transition-colors shrink-0">
              <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">AI Launchpad Prep</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                While your video renders, our AI is also writing your Facebook and TikTok ad copy to match the visual hooks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Floating Dark Mode Toggle */}
  {mounted && (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title="Toggle Theme"
      className="fixed bottom-6 right-6 h-12 w-12 bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-900 dark:text-white hover:scale-110 transition-transform z-[60]"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )}
</div>
);
}
