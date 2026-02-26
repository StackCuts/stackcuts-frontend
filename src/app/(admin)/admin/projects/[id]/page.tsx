/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
LayoutDashboard, Users, Briefcase, Wallet, Settings,
Moon, Sun, Menu, ArrowLeft, Sparkles, Edit2, FileText,
FileArchive, Blocks
} from "lucide-react";
import Link from "next/link";

export default function ProjectBlueprintPage() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

return (
<div className="flex h-screen overflow-hidden font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-700 dark:selection:text-indigo-300">

      {/* Admin Sidebar (Strictly Dark Theme) */}
      <aside className={`w-72 bg-[#111827] flex-col border-r border-slate-800 shrink-0 h-screen sticky top-0 hidden md:flex z-20`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
          <h1 className="text-white font-bold text-xl tracking-tight">StackCuts <span className="font-normal text-slate-400 text-sm ml-1">ADMIN</span></h1>
        </div>
        
        <nav className="px-4 mt-4 space-y-1.5 flex-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <p className="text-sm font-medium">Command Center</p>
          </Link>
          <Link href="/admin/clients" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <Users className="w-5 h-5" />
            <p className="text-sm font-medium">Clients</p>
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 transition-all">
            <Briefcase className="w-5 h-5" />
            <p className="text-sm font-bold">Projects</p>
          </Link>
          <Link href="/admin/revenue" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <Wallet className="w-5 h-5" />
            <p className="text-sm font-medium">Revenue</p>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors mt-8">
            <Settings className="w-5 h-5" />
            <p className="text-sm font-medium">Settings</p>
          </Link>
        </nav>
        
        <div className="p-6 mt-auto border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden ring-2 ring-slate-800 flex items-center justify-center font-bold text-white text-sm shrink-0">
              AS
            </div>
            <div className="flex flex-col">
              <h3 className="text-white text-sm font-bold">Alex Sterling</h3>
              <p className="text-slate-400 text-xs">Admin / CEO</p>
            </div>
          </div>
        </div>
      </aside>
  {/* Main Content */}
  <main className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-950">
    
    {/* Mobile Header */}
    <div className="md:hidden flex items-center justify-between p-4 bg-[#111827] text-white border-b border-slate-800 sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
        <h1 className="font-bold text-lg tracking-tight">StackCuts Admin</h1>
      </div>
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-400" title="Toggle mobile menu">
        <Menu className="w-6 h-6" />
      </button>
    </div>
    {/* Top Header */}
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 md:px-8 py-5 shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <Link href="/admin/projects" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center mb-2 transition-colors w-fit">
          <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Board
        </Link>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">AI Master Blueprint</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">Generated for: <span className="font-bold text-slate-700 dark:text-slate-200">Summer Campaign 2026</span> (Client: Sarah Chen)</p>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
        {mounted ? (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors shadow-sm shrink-0"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        ) : (
          <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm shrink-0"></div>
        )}
        <button className="flex-1 md:flex-none px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 font-bold text-sm rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm whitespace-nowrap" title="Edit project brief">
          Edit Brief
        </button>
        <button className="flex-1 md:flex-none px-4 py-2.5 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap" title="Regenerate master blueprint">
          <Sparkles className="w-4 h-4" /> Regenerate
        </button>
      </div>
    </header>
    {/* Blueprint Grid */}
    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* Left Column (35%) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Client Context Card */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Client Context</h3>
            <div className="space-y-5">
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                <span className="block text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">Client Brief</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Launching a performance-focused SaaS tool for high-growth tech founders. Goal is to reduce churn by 15% through educational video funnels.
                </p>
              </div>
              
              <div>
                <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Target Audience</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md border border-indigo-200 dark:border-indigo-800/50 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-[10px] font-black uppercase tracking-wider">B2B Founders</span>
                  <span className="px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-black uppercase tracking-wider">Age 30-50</span>
                </div>
              </div>
              
              <div className="pt-5 border-t border-gray-100 dark:border-gray-800">
                <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-3">Uploaded Assets</span>
                <ul className="space-y-2.5">
                  <li>
                    <a href="#" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline flex items-center transition-colors">
                      <FileText className="w-4 h-4 mr-2" /> Brand_Guidelines_2026.pdf
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline flex items-center transition-colors">
                      <FileArchive className="w-4 h-4 mr-2" /> Logo_Kit_White.zip
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Project Health Card */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Project Health</h3>
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Generation Progress</span>
                <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">85%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
          </section>
        </div>
        {/* Right Column (65%) */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2.5 text-slate-900 dark:text-white">
              <Blocks className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl font-black tracking-tight">The Assembly Line</h2>
            </div>
            <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black rounded-md border border-emerald-200 dark:border-emerald-800/50 tracking-widest uppercase w-fit">
              READY FOR EXPORT
            </span>
          </div>
          {/* Card 1 - UGC Hook */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <div className="flex items-center flex-wrap gap-3">
                <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">1. The UGC Hook</span>
                <div className="flex space-x-1.5">
                  <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">Nano</span>
                  <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">Veo</span>
                  <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">ElevenLabs</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1" title="Edit hook prompt">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Veo Visual Prompt</label>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl h-32 text-sm text-gray-700 dark:text-gray-300 overflow-y-auto leading-relaxed font-medium custom-scrollbar">
                  Hyper-realistic portrait of a tech founder in a minimalist office, cinematic lighting, 8k resolution, slight dolly zoom effect. Focus on eyes.
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">ElevenLabs Voice Script</label>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl h-32 text-sm text-gray-700 dark:text-gray-300 overflow-y-auto leading-relaxed font-medium italic custom-scrollbar border-l-4 border-l-indigo-500">
                  &quot;Most founders fail not because of their product, but because they can&apos;t see the leaks in their funnel. Today, we change that.&quot;
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 - The Screencast */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">2. The Screencast</span>
                <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">Trupeer</span>
              </div>
              <button className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1" title="Edit screencast instructions">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Trupeer Generation Instructions</label>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  Record 15-second flow highlighting the &apos;Churn Analytics&apos; dashboard. Highlight the &apos;Retention Rate&apos; widget with a glowing pulse. Smooth cursor movements, 60fps.
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 - The Montage */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <div className="flex items-center flex-wrap gap-3">
                <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">3. The Montage</span>
                <div className="flex space-x-1.5">
                  <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">Pictory</span>
                  <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">Lyria 3</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1" title="Edit montage settings">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Lyria Music Prompt</label>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  Driving synthwave background, low-frequency bass, corporate-uplifting energy, 128 BPM, seamless loop.
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Editing Notes</label>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  Fast cuts every 1.5 seconds during the hook. Transition to screen recording with a &apos;Digital Glitch&apos; effect. Apply brand font #6366f1 for all dynamic subtitles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* Custom Scrollbar */}
  <style dangerouslySetInnerHTML={{__html: `
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
  `}} />
</div>
);
}
