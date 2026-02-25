"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  LayoutDashboard, Users, Briefcase, Wallet, Settings,
  Moon, Sun, Menu, Search, Plus, MoreHorizontal, Edit2,
  Clock, Sparkles, Smartphone, Monitor, Columns
} from "lucide-react";
import Link from "next/link";

export default function AdminProjectsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 overflow-hidden font-sans">
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
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <Wallet className="w-5 h-5" />
            <p className="text-sm font-medium">Revenue</p>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors mt-8">
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
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-400" title="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Header */}
        <header className="h-auto md:h-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between p-4 md:px-8 shrink-0 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Projects Pipeline</h2>
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700">Q3 2026</span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
            {/* Search */}
            <div className="relative group flex-1 md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white dark:focus:bg-gray-900 text-sm transition-all"
              />
            </div>
            {mounted ? (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            ) : (
              <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0"></div>
            )}
            
            <button className="h-9 px-4 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap shrink-0">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Project</span>
            </button>
          </div>
        </header>

        {/* Kanban Board Area */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden p-6 md:p-8 custom-scrollbar">
          <div className="flex gap-6 h-full min-w-max pb-4">
            
            {/* Column 1: Needs Brief */}
            <div className="flex flex-col w-80 h-full">
              <div className="flex items-center justify-between mb-4 px-1 shrink-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Needs Brief</h3>
                  <span className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold px-2 py-0.5 rounded-full border border-red-200 dark:border-red-800/50">2</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" title="More Column Actions">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
                
                {/* Card 1 */}
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all cursor-pointer group flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 uppercase tracking-wide">ACME CORP</span>
                    <Edit2 className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 leading-tight">Winter Conversion Ad</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">Awaiting URL</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800 mt-auto">
                    <div className="flex items-center gap-1.5 text-red-500 dark:text-red-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">Waiting 24h</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-[10px] font-bold text-indigo-700 dark:text-indigo-400 ring-2 ring-white dark:ring-gray-900">AC</div>
                  </div>
                </div>
                {/* Add Task Ghost */}
                <button className="w-full py-3 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl text-gray-500 dark:text-gray-400 text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" /> Add Task
                </button>
              </div>
            </div>

            {/* Column 2: AI Assembly */}
            <div className="flex flex-col w-80 h-full">
              <div className="flex items-center justify-between mb-4 px-1 shrink-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">AI Assembly</h3>
                  <span className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 text-xs font-bold px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-700">1</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" title="More Column Actions">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
                
                {/* Card 2 */}
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all cursor-pointer relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                  <div className="flex justify-between items-start mb-2 pt-1">
                    <span className="text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 uppercase tracking-wide">TECHFLOW</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-tight">Founder Story Hook</h4>
                  <div className="flex items-center gap-1.5 mb-5 text-purple-600 dark:text-purple-400">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span className="text-xs font-bold">Generating script...</span>
                  </div>
                  <div className="mt-auto">
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 mb-2 overflow-hidden">
                      <div className="bg-indigo-600 h-1.5 rounded-full w-[40%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">
                      <span>Processing raw assets</span>
                      <span>40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: In Production */}
            <div className="flex flex-col w-80 h-full">
              <div className="flex items-center justify-between mb-4 px-1 shrink-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">In Production</h3>
                  <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 text-xs font-bold px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800/50">2</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" title="More Column Actions">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
                
                {/* Card A */}
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all cursor-pointer flex flex-col overflow-hidden">
                  <div className="h-28 bg-gradient-to-br from-indigo-500 to-purple-600 w-full relative group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-tight">Summer SaaS Campaign</h4>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 uppercase tracking-wide">
                        <Smartphone className="w-3 h-3" /> Vertical
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800 mt-auto">
                      <div className="flex items-center gap-1.5 text-orange-500 dark:text-orange-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold">12h remaining</span>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-[10px] font-bold text-blue-700 dark:text-blue-300 ring-2 ring-white dark:ring-gray-900">JD</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card B */}
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all cursor-pointer flex flex-col overflow-hidden">
                  <div className="h-28 bg-gradient-to-br from-emerald-400 to-teal-500 w-full relative group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-tight">Retargeting Variations</h4>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 uppercase tracking-wide">
                        <Monitor className="w-3 h-3" /> Landscape
                      </span>
                      <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 uppercase tracking-wide">
                        3 Versions
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800 mt-auto">
                      <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold">36h remaining</span>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-[10px] font-bold text-indigo-700 dark:text-indigo-300 ring-2 ring-white dark:ring-gray-900">SC</div>
                        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-[10px] font-bold text-purple-700 dark:text-purple-300 ring-2 ring-white dark:ring-gray-900">+2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty State / New Column Placeholder */}
            <div className="flex flex-col w-80 h-full opacity-40 hover:opacity-100 transition-opacity group">
              <div className="flex items-center justify-between mb-4 px-1 shrink-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Review</h3>
                  <span className="bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400 text-xs font-bold px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-700">0</span>
                </div>
              </div>
              <button className="h-32 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all gap-2">
                <Columns className="w-6 h-6" />
                <span className="text-xs font-bold">Add workflow step</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* CSS to hide scrollbar but allow scrolling */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { height: 8px; width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
      `}} />
    </div>
  );
}
