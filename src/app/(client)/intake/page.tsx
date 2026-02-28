/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
Clapperboard, Bell, UploadCloud,
Image as ImageIcon, Video, CheckCircle2,
Sparkles, ArrowRight, Sun, Moon
} from "lucide-react";
import Link from "next/link";

export default function ClientOnboardingPage() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [selectedFormat, setSelectedFormat] = useState("vertical");

useEffect(() => setMounted(true), []);

return (
<div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col font-sans transition-colors duration-300">
  {/* Top Navigation Bar */}
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
      {/* Center: Step Indicator */}
      <nav className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-[10px]">1</span>
          <span>Briefing</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 font-medium text-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-[10px]">2</span>
          <span>Production</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 font-medium text-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-[10px]">3</span>
          <span>Review</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 font-medium text-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-[10px]">4</span>
          <span>Final</span>
        </div>
      </nav>
      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button title="Notifications" className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-950"></span>
        </button>
        <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold text-xs">
          SC
        </div>
      </div>
    </div>
  </header>
  {/* Main Dashboard Layout */}
  <main className="flex-1 flex flex-col md:flex-row max-w-[1440px] mx-auto w-full overflow-hidden relative">
    
    {/* Left Column: Asset Library (60%) */}
    <section className="flex-1 md:w-[60%] p-6 md:p-12 bg-white dark:bg-gray-950/40 overflow-y-auto border-r border-gray-200 dark:border-gray-800 custom-scrollbar">
      <div className="max-w-2xl mx-auto space-y-10 pb-20 md:pb-0">
        <header>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Asset Library</h1>
          <p className="text-gray-500 dark:text-gray-400">Upload your core brand files. We'll handle the rest.</p>
        </header>
        
        {/* Upload Zone */}
        <div className="group relative rounded-xl border-2 border-dashed border-indigo-600/30 dark:border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-900/10 p-12 transition-all hover:border-indigo-600/60 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
            <UploadCloud className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Drop your logos, fonts, UI screenshots, or screencasts here.</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">No raw footage needed. Our AI handles the script and the UGC hook.</p>
          <button type="button" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/20 hover:brightness-110 transition-all pointer-events-none">
            Browse Files
          </button>
          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" title="Upload files" />
        </div>
        {/* File List */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Recent Uploads</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* File Card 1 */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 shrink-0 rounded bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">brand_logo.png</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2.4 MB</p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
            </div>
            {/* File Card 2 */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 shrink-0 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                  <Video className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">dashboard_screencast.mp4</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">45.8 MB</p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Right Column: Project Brief (40%) */}
    <aside className="flex-1 md:w-[40%] bg-gray-50 dark:bg-gray-900/30 relative flex flex-col h-[60vh] md:h-full border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 shrink-0">
      <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 pb-32 custom-scrollbar">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">Project Brief</h2>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider border border-indigo-600/20">
            <Sparkles className="w-3 h-3" />
            AI-Enhanced
          </span>
        </div>
        <div className="space-y-10">
          {/* Section 1: The Basics */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Basics</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="project-name" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Project Name</label>
                <input id="project-name" type="text" value="Summer SaaS Campaign" disabled className="w-full bg-gray-100 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-500 dark:text-gray-400 font-medium px-4 py-2.5 cursor-not-allowed outline-none" />
              </div>
              <div>
                <label htmlFor="landing-page-url" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Landing Page URL</label>
                <input id="landing-page-url" type="text" value="https://example.com/start" disabled className="w-full bg-gray-100 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-500 dark:text-gray-400 font-medium px-4 py-2.5 cursor-not-allowed outline-none" />
              </div>
            </div>
          </section>
          {/* Section 2: Strategic Direction */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Strategic Direction</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="target-audience" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Target Audience</label>
                <textarea id="target-audience" rows={2} placeholder="e.g. Marketing Managers in Series A Startups" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 outline-none px-4 py-2.5 resize-none dark:text-white placeholder:text-gray-400"></textarea>
              </div>
              <div>
                <label htmlFor="pain-point" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Main Pain Point</label>
                <textarea id="pain-point" rows={2} placeholder="e.g. Too much manual data entry across multiple tools" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 outline-none px-4 py-2.5 resize-none dark:text-white placeholder:text-gray-400"></textarea>
              </div>
              <div>
                <label htmlFor="cta" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">The Core Offer / CTA</label>
                <input id="cta" type="text" placeholder="e.g. Book a free 15-min workflow audit" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 outline-none px-4 py-2.5 dark:text-white placeholder:text-gray-400" />
              </div>
              <div>
                <label htmlFor="brand-voice" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Brand Voice</label>
                <select id="brand-voice" title="Select Brand Voice" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 outline-none px-4 py-2.5 dark:text-white">
                  <option>Casual & Creator-Style</option>
                  <option>Professional & Authoritative</option>
                  <option>Edgy & Disruptive</option>
                </select>
              </div>
              <div>
                <label htmlFor="do-not-list" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">The "Do Not" List</label>
                <textarea id="do-not-list" rows={2} placeholder="Words or competitors to avoid..." className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 outline-none px-4 py-2.5 resize-none dark:text-white placeholder:text-gray-400"></textarea>
              </div>
            </div>
          </section>
          {/* Section 3: Deliverable Format */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Deliverable Format</h3>
            </div>
            <div className="space-y-3">
              {[
                { id: 'vertical', label: 'Vertical (9:16 - TikTok/Reels)' },
                { id: 'landscape', label: 'Landscape (16:9)' },
                { id: 'mix', label: 'Mix of Both' }
              ].map((option) => (
                <label 
                  key={option.id}
                  onClick={() => setSelectedFormat(option.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedFormat === option.id 
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-500' 
                      : 'border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="format" 
                    checked={selectedFormat === option.id}
                    onChange={() => setSelectedFormat(option.id)}
                    className="text-indigo-600 focus:ring-indigo-600 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" 
                  />
                  <span className={`text-sm ${selectedFormat === option.id ? 'font-semibold text-slate-900 dark:text-white' : 'font-medium text-gray-600 dark:text-gray-400'}`}>
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* Sticky CTA Button */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-gray-50 via-gray-50 dark:from-gray-900/90 dark:via-gray-900/90 to-transparent">
        <Link href="/production" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold text-base shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]">
          Submit Brief & Start AI Production
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </aside>
  </main>
  {/* Floating Dark Mode Toggle */}
  {mounted && (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title="Toggle Dark Mode"
      className="fixed bottom-6 right-6 h-12 w-12 bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-900 dark:text-white hover:scale-110 transition-transform z-[60]"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )}
  {/* Scrollbar styling */}
  <style dangerouslySetInnerHTML={{__html: `
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
  `}} />
</div>
);
}
