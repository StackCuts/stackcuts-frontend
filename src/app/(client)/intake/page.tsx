"use client";

import React, { useState } from "react";
import { 
  Film, Bell, UploadCloud, FileText, 
  Image as ImageIcon, CheckCircle2, 
  MoreVertical, ArrowRight 
} from "lucide-react";
import Link from "next/link";

export default function ProjectIntakePage() {
  // State for interactive Mood selection
  const [selectedMoods, setSelectedMoods] = useState<string[]>(['Professional']);

  const toggleMood = (mood: string) => {
    if (selectedMoods.includes(mood)) {
      setSelectedMoods(selectedMoods.filter(m => m !== mood));
    } else {
      setSelectedMoods([...selectedMoods, mood]);
    }
  };

  const moods = ["Professional", "High Energy", "Playful", "Serious", "Inspirational", "Edgy"];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-slate-900 dark:text-slate-100 h-screen flex flex-col font-sans overflow-hidden transition-colors duration-300">
      
      {/* Top Navigation Bar */}
      <header className="h-16 shrink-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 sm:px-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 lg:gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Film className="w-6 h-6 text-indigo-600" />
            <span className="text-indigo-600 font-bold text-xl tracking-tight hidden sm:block">StackCuts</span>
          </Link>
          <span className="text-gray-300 dark:text-gray-600 hidden sm:block">|</span>
          <h1 className="font-medium text-slate-700 dark:text-slate-200 text-sm sm:text-base truncate max-w-[200px] sm:max-w-none">
            Project: SaaS Explainer Video v1
          </h1>
        </div>

        {/* Progress Stepper (Hidden on small screens) */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 text-indigo-600 font-semibold">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-600/10 text-xs">1</span>
            <span className="text-sm">Briefing</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-xs">2</span>
            <span className="text-sm font-medium">Production</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-xs">3</span>
            <span className="text-sm font-medium">Review</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-xs">4</span>
            <span className="text-sm font-medium">Final</span>
          </div>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button aria-label="Notifications" className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0">
            SC
          </div>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* LEFT COLUMN: Asset Library */}
        <div className="flex-1 p-4 sm:p-8 overflow-y-auto custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-8 pb-10 lg:pb-0">
            <div>
              <h2 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white">Asset Library</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Upload all project-related files to get started.</p>
            </div>

            {/* Upload Dropzone */}
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-10 sm:p-16 bg-white dark:bg-gray-900/50 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-all">
              <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200">
                Drop your logo, script, and raw video files here.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-sm">
                Maximum file size: 2GB. Supports MP4, MOV, PDF, PNG, AI.
              </p>
              <button className="mt-6 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Browse Files
              </button>
            </div>

            {/* Uploaded Files List */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 pl-1">Uploaded Files</h3>
              
              {/* File Item 1 */}
              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">script_v1.pdf</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">1.2 MB • Uploaded 5m ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <button aria-label="File options" className="p-1 text-gray-400 hover:text-slate-600 dark:hover:text-gray-300 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* File Item 2 */}
              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 flex items-center justify-center shrink-0">
                    <ImageIcon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">logo.png</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">450 KB • Uploaded 5m ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <button aria-label="File options" className="p-1 text-gray-400 hover:text-slate-600 dark:hover:text-gray-300 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Project Brief Sidebar */}
        <aside className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col h-[60vh] lg:h-full shadow-2xl lg:shadow-none shrink-0 z-10">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800 shrink-0">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Project Brief</h2>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1 uppercase tracking-widest font-bold">Smart Intake</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            
            {/* Section 1: Basics */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">The Basics</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Project Name</label>
                  <input type="text" placeholder="My SaaS Explainer Video" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all px-3 py-2.5 dark:text-white placeholder:text-gray-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Landing Page URL</label>
                  <input type="url" placeholder="https://example.com/landing" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all px-3 py-2.5 dark:text-white placeholder:text-gray-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Target Audience</label>
                  <textarea rows={2} placeholder="Busy startup founders, small business owners" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all px-3 py-2.5 resize-none dark:text-white placeholder:text-gray-400"></textarea>
                </div>
              </div>
            </section>

            {/* Section 2: Direction */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Creative Direction</h3>
              <div className="space-y-5">
                <div>
                  <label htmlFor="goal-select" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Primary Goal</label>
                  <select id="goal-select" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all px-3 py-2.5 dark:text-white">
                    <option>Select a goal</option>
                    <option>Explain a specific feature</option>
                    <option>Drive direct sales / conversions</option>
                    <option>Brand Awareness</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5">Desired Mood (Select multiple)</label>
                  <div className="flex flex-wrap gap-2">
                    {moods.map((mood) => (
                      <button
                        key={mood}
                        onClick={() => toggleMood(mood)}
                        className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                          selectedMoods.includes(mood)
                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Style References</label>
                  <input type="text" placeholder="e.g., youtube.com/watch?v=123" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all px-3 py-2.5 dark:text-white placeholder:text-gray-400" />
                </div>
              </div>
            </section>

            {/* Section 3: Constraints */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Constraints & Formats</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Main Hook / Pain Point to Hit</label>
                  <input type="text" placeholder="Highlight customer frustration with spreadsheets" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all px-3 py-2.5 dark:text-white placeholder:text-gray-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">The &quot;Do Not&quot; List</label>
                  <textarea rows={2} placeholder="Avoid generic stock footage, cheesy corporate music" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all px-3 py-2.5 resize-none dark:text-white placeholder:text-gray-400"></textarea>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Deliverable Format</label>
                  <div className="space-y-3 p-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="format" defaultChecked className="w-4 h-4 text-indigo-600 focus:ring-indigo-600 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Landscape (16:9)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="format" className="w-4 h-4 text-indigo-600 focus:ring-indigo-600 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Vertical (9:16)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="format" className="w-4 h-4 text-indigo-600 focus:ring-indigo-600 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Mix of Both</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Submit Button Sticky Area */}
          <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shrink-0">
            <button className="w-full bg-indigo-600 text-white py-3.5 px-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98] flex items-center justify-center gap-2 group">
              <span>Submit Brief & Start Production</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </aside>

      </main>

      {/* Very Bottom Footer */}
      <footer className="h-8 shrink-0 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 flex items-center justify-between text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold z-30">
        <div className="flex items-center gap-4">
          <span>© 2026 StackCuts</span>
          <span className="text-gray-200 dark:text-gray-800">|</span>
          <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>System Operational</span>
        </div>
      </footer>

    </div>
  );
}
