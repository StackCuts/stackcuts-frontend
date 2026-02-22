"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
Clapperboard, Bell, Play, Settings,
Maximize, ZoomIn, RotateCcw, CheckCircle2,
Filter, Image as ImageIcon, AtSign, Sun, Moon
} from "lucide-react";
import Link from "next/link";

export default function ReviewPage() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => setMounted(true), []);

return (
<div className="flex flex-col h-screen bg-white dark:bg-gray-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/40">

  {/* Header - Unified with other Client pages */}
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
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 truncate max-w-[150px] sm:max-w-none">Summer SaaS Campaign</span>
          <span className="bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border border-indigo-100 dark:border-indigo-800 hidden sm:block">
            Reviewing Draft v1
          </span>
        </div>
      </div>
      
      {/* Center: Stepper (Step 3 Active) */}
      <nav className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
          <span className="text-xs font-semibold text-gray-400">Briefing</span>
        </div>
        <div className="w-4 h-px bg-gray-200 dark:bg-gray-800 mx-1"></div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
          <span className="text-xs font-semibold text-gray-400">Production</span>
        </div>
        <div className="w-4 h-px bg-gray-200 dark:bg-gray-800 mx-1"></div>
        <div className="flex items-center gap-2 border-b-2 border-indigo-600 pb-1">
          <span className="bg-indigo-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-sm">3</span>
          <span className="text-xs font-bold text-slate-900 dark:text-white">Review</span>
        </div>
        <div className="w-4 h-px bg-gray-200 dark:bg-gray-800 mx-1"></div>
        <div className="flex items-center gap-2 opacity-50">
          <span className="bg-gray-200 dark:bg-gray-800 text-gray-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">4</span>
          <span className="text-xs font-semibold text-gray-500">Final</span>
        </div>
      </nav>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button 
          title="Notifications"
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-950"></span>
        </button>
        <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold text-xs">
          SC
        </div>
      </div>
    </div>
  </header>

  {/* Main Content Area */}
  <main className="flex flex-col lg:flex-row flex-1 overflow-hidden max-w-[1440px] mx-auto w-full">
    
    {/* Left Column: Video Player (65%) */}
    <section className="w-full lg:w-[65%] flex flex-col bg-gray-50 dark:bg-black/20 p-4 md:p-8 overflow-y-auto custom-scrollbar border-r border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        
        {/* Player Container */}
        <div className="relative group aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center">
          {/* Abstract Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 opacity-80"></div>
          
          {/* Play Button */}
          <button 
            title="Play Video"
            className="z-10 w-20 h-20 bg-indigo-600/90 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
            <Play className="w-8 h-8 ml-1 fill-current" />
          </button>
          
          {/* Bottom Bar Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="flex items-center justify-between text-white text-sm">
              <span className="font-mono font-medium">0:12 / 2:45</span>
              <div className="flex gap-4">
                <Settings className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
                <Maximize className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Scrubbing Timeline */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Video Timeline</h3>
            <button 
              title="Zoom In"
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-400 transition-colors">
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
          <div className="relative h-12 flex items-center">
            {/* Progress Bar */}
            <div className="absolute w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
            <div className="absolute w-[45%] h-2 bg-indigo-600/40 rounded-full"></div>
            <div className="absolute left-[12%] w-1 h-6 bg-indigo-600 rounded-full -translate-y-2 border-2 border-white dark:border-gray-900 shadow-lg cursor-grab"></div>
            
            {/* Timeline Markers (Comments) */}
            {[
              { left: "left-[4%]", time: "0:04" },
              { left: "left-[15%]", time: "0:15" },
              { left: "left-[22%]", time: "0:22" }
            ].map((marker, i) => (
              <div 
                key={i} 
                className={`absolute group cursor-pointer ${marker.left}`}
              >
                <div className="w-3 h-3 bg-indigo-600 rounded-full border-2 border-white dark:border-gray-900 shadow-sm hover:scale-150 transition-transform"></div>
                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap font-mono font-medium">
                  {marker.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 font-semibold px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all">
            <RotateCcw className="w-4 h-4" />
            Request Revisions <span className="text-xs font-normal ml-1">(1 Round Left)</span>
          </button>
          <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 transition-transform active:scale-95">
            <CheckCircle2 className="w-5 h-5" />
            Approve & Pay $249.50
          </button>
        </div>
      </div>
    </section>

    {/* Right Column: Async Feedback (35%) */}
    <aside className="w-full lg:w-[35%] bg-gray-50 dark:bg-gray-900/30 flex flex-col h-[50vh] lg:h-full border-t lg:border-t-0 border-gray-200 dark:border-gray-800 shrink-0">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-gray-900 shrink-0">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-lg text-slate-900 dark:text-white">Comments</h2>
          <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-2.5 py-0.5 rounded-full font-bold">3</span>
        </div>
        <button 
          title="Filter Comments"
          className="text-gray-500 hover:text-indigo-600 transition-colors p-1">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      {/* Comment Input */}
      <div className="p-6 shrink-0">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-indigo-600/20 focus-within:border-indigo-600 transition-all">
          <textarea 
            className="w-full bg-transparent border-none focus:ring-0 p-4 text-sm resize-none h-24 placeholder:text-gray-400 outline-none text-slate-900 dark:text-white" 
            placeholder="Leave a note at 00:12..."
          ></textarea>
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800">
            <div className="flex gap-2">
              <button 
                title="Attach Image"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 transition-colors">
                <ImageIcon className="w-4 h-4" />
              </button>
              <button 
                title="Mention Someone"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 transition-colors">
                <AtSign className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-indigo-600 text-white text-xs font-bold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Comment Feed */}
      <div className="flex-1 overflow-y-auto px-6 space-y-6 pb-20 custom-scrollbar">
        
        {[
          { name: "Sarah Chen", time: "0:04", text: "Can we make the UI zoom slightly faster here to match the beat drop?" },
          { name: "Marcus Thorne", time: "0:15", text: "Love this transition. The AI voiceover sounds incredibly natural." },
          { name: "Sarah Chen", time: "0:22", text: "Make sure to emphasize the 14-day free trial text in this motion graphic." }
        ].map((comment, idx) => (
          <div key={idx} className="flex gap-4 group">
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 shrink-0 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs">
              {comment.name.charAt(0)}
            </div>
            <div className="space-y-1 w-full">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900 dark:text-white">{comment.name}</span>
                <span className="text-[10px] font-mono bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold px-1.5 py-0.5 rounded border border-indigo-100 dark:border-indigo-800">
                  {comment.time}
                </span>
                {idx === 0 && <span className="text-[10px] text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity">Just now</span>}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
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
