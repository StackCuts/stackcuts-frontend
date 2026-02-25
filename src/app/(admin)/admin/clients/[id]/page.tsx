/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
LayoutDashboard, Users, Briefcase, Wallet, Settings,
Moon, Sun, Menu, ArrowLeft, Plus, Image as ImageIcon,
PenTool, Mail, Clock, Lock, Filter, PlayCircle
} from "lucide-react";
import Link from "next/link";

export default function ClientDetailView() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => setMounted(true), []);

return (
<div className="flex bg-gray-50 dark:bg-black min-h-screen font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-700 dark:selection:text-indigo-300">
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
      <Link href="/admin/clients" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 transition-all">
        <Users className="w-5 h-5" />
        <p className="text-sm font-bold">Clients</p>
      </Link>
      <Link href="/admin/projects" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
        <Briefcase className="w-5 h-5" />
        <p className="text-sm font-medium">Projects</p>
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
  <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
    
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
    {/* Header */}
    <header className="h-auto md:h-24 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between p-6 md:px-8 shrink-0 gap-4">
      <div>
        <Link href="/admin/clients" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-2 inline-flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Clients
        </Link>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-baseline gap-2">
          Sarah Chen 
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-500">(TechFlow SaaS)</span>
        </h2>
        <div className="flex gap-3 mt-2">
          <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-md font-bold border border-indigo-100 dark:border-indigo-800/50">Plan: Growth Engine</span>
          <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-md font-bold border border-emerald-100 dark:border-emerald-800/50">LTV: $5,397.00</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4">
        {mounted ? (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        ) : (
          <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm"></div>
        )}
        <button className="h-10 px-4 sm:px-5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap" title="Add new project for this client">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">New Project for Client</span>
          <span className="sm:hidden">New Project</span>
        </button>
      </div>
    </header>
    {/* Dashboard Content Area */}
    <div className="p-4 md:p-8 flex-1 overflow-y-auto custom-scrollbar">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* Left Column (60%) */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          
          {/* Client Identity Kit */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/50">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Client Identity Kit</h3>
              <button className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider hover:text-indigo-700 dark:hover:text-indigo-300" title="Edit identity kit">Edit Kit</button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center gap-2 bg-gray-50/50 dark:bg-gray-800/30">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center shadow-sm">
                    <ImageIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                  </div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Primary Logo</span>
                </div>
                <div className="p-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center gap-2 bg-gray-50/50 dark:bg-gray-800/30">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center shadow-sm">
                    <PenTool className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                  </div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Secondary / Icon</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 pt-2">
                <div className="flex gap-3">
                  <div className="group relative">
                                        <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm bg-slate-900" title="Primary Color: #0F172A"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 dark:text-gray-400 font-mono font-bold">#0F172A</span>
                  </div>
                  <div className="group relative">
                                        <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm bg-blue-500" title="Secondary Color: #3B82F6"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 dark:text-gray-400 font-mono font-bold">#3B82F6</span>
                  </div>
                  <div className="group relative">
                                        <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm bg-slate-50" title="Accent Color: #F8FAFC"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 dark:text-gray-400 font-mono font-bold">#F8FAFC</span>
                  </div>
                </div>
                <div className="sm:ml-auto sm:pl-8 sm:border-l border-gray-100 dark:border-gray-800">
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">Primary Font</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">Inter</p>
                </div>
              </div>
            </div>
          </section>
          {/* Global AI Guardrails */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Global AI Guardrails</h3>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2.5">Brand Voice</label>
                <div className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-lg text-indigo-700 dark:text-indigo-400 font-bold text-sm inline-block">
                  Direct Response / Professional
                </div>
              </div>
              <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2.5">Global &apos;Do Not&apos; List</label>
                <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl text-sm font-medium text-red-800 dark:text-red-300 leading-relaxed italic">
                                    &quot;Do not use the word &apos;cheap&apos;. Avoid red backgrounds in all thumbnails. Never reference competitor X by name.&quot;
                </div>
              </div>
            </div>
          </section>
          {/* Evergreen Asset Library */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/50">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Evergreen Asset Library</h3>
              <button className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline" title="View all evergreen assets">View All</button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { color: 'from-blue-500 to-indigo-500', label: 'Asset 1' },
                  { color: 'from-emerald-400 to-teal-500', label: 'Asset 2' },
                  { color: 'from-purple-500 to-pink-500', label: 'Asset 3' },
                  { color: 'from-orange-400 to-red-500', label: 'Asset 4' },
                  { color: 'from-cyan-400 to-blue-500', label: 'Asset 5' }
                ].map((asset, idx) => (
                  <div key={idx} className="group relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer shadow-sm">
                    <div className={`w-full h-full bg-gradient-to-br ${asset.color} opacity-80 group-hover:scale-105 transition-transform duration-500`}></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="text-white text-xs font-bold px-3 py-1.5 bg-black/50 rounded-lg shadow-sm">Select</span>
                    </div>
                  </div>
                ))}
                
                {/* Upload Button */}
                <div className="group relative aspect-video bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-700 cursor-pointer flex flex-col items-center justify-center hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all" title="Upload new evergreen asset">
                  <Plus className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Upload</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Right Column (40%) */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          
          {/* Contact Details */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Contact & Details</h3>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">sarah@techflow.io</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Timezone</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Pacific Time (PT)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Role</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Founder</p>
                </div>
              </div>
              <div className="pt-2">
                <button className="w-full border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold py-2.5 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors" title="Send email to client">
                  Send Email
                </button>
              </div>
            </div>
          </section>
          {/* Private Admin Notes */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-amber-200/50 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-900/10">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                Private Admin Notes
                <span className="flex items-center gap-1 text-[10px] font-bold text-amber-700 dark:text-amber-500 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded-md uppercase tracking-widest border border-amber-200 dark:border-amber-800/50">
                  <Lock className="w-3 h-3" /> Internal
                </span>
              </h3>
            </div>
            <div className="p-6 bg-amber-50/20 dark:bg-amber-900/5">
              <textarea 
                className="w-full h-32 bg-transparent border-none focus:ring-0 text-sm font-medium text-slate-700 dark:text-slate-300 resize-none placeholder-gray-400 outline-none" 
                placeholder="Add internal notes about Sarah or TechFlow..."
                defaultValue="Sarah is highly detail-oriented. She prefers loom videos over meetings. Focus on conversion-heavy hooks for her ads."
                title="Internal Admin Notes"
              ></textarea>
              <div className="flex justify-end mt-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                <button className="text-indigo-600 dark:text-indigo-400 text-sm font-bold hover:text-indigo-700 dark:hover:text-indigo-300" title="Save internal notes">Save Note</button>
              </div>
            </div>
          </section>
          {/* Project History */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/50">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Project History</h3>
              <button className="text-xs text-gray-500 dark:text-gray-400 font-bold flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors" title="Filter project history">
                <Filter className="w-3.5 h-3.5" /> Filter
              </button>
            </div>
            <div className="p-0">
              <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                <li className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="w-8 h-8 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors" />
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Summer Conversion Ad</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mt-0.5">Completed July 12, 2026</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-md border border-emerald-200 dark:border-emerald-800/50 uppercase tracking-wider">Approved</span>
                </li>
                <li className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="w-8 h-8 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors" />
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Feature Release Walkthrough</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mt-0.5">Completed June 28, 2026</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-md border border-emerald-100 dark:border-emerald-800/50 uppercase tracking-wider">Approved</span>
                </li>
                <li className="px-6 py-4 bg-gray-50/50 dark:bg-gray-900/50 flex justify-center border-t border-gray-100 dark:border-gray-800">
                  <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors" title="Load more project history">Load More History</button>
                </li>
              </ul>
            </div>
          </section>
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
