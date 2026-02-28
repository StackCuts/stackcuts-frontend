/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  LayoutDashboard, Users, Briefcase, Wallet, Settings,
  Moon, Sun, UserPlus, AlertCircle, TrendingUp, Menu
} from "lucide-react";
import Link from "next/link";

export default function AdminCommandCenter() {
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
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 transition-all">
            <LayoutDashboard className="w-5 h-5" />
            <p className="text-sm font-bold">Command Center</p>
          </Link>
          <Link href="/admin/clients" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <Users className="w-5 h-5" />
            <p className="text-sm font-medium">Clients</p>
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
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-400" title="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Header */}
        <header className="h-auto md:h-24 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between p-6 md:px-8 shrink-0 gap-4">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Command Center</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 font-medium">Overview of agency operations and revenue.</p>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            {mounted ? (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm"></div>
            )}
            <button className="h-10 px-4 sm:px-5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap">
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Invite New Client</span>
              <span className="sm:hidden">Invite</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 md:p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1">
          
          {/* KPI Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* MRR Card */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">MRR</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900 dark:text-white">$14,392</span>
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">+1,799/wk</span>
              </div>
            </div>
            
            {/* CASH MTD Card */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">CASH MTD</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900 dark:text-white">$4,240</span>
                <span className="text-gray-400 dark:text-gray-500 text-xs font-bold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">Last 30d</span>
              </div>
            </div>
            
            {/* ACTIVE PROJECTS Card */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">ACTIVE PROJECTS</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-slate-900 dark:text-white">12</span>
                <div className="flex -space-x-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-[10px] font-bold text-indigo-700 ring-2 ring-white dark:ring-gray-900">AC</div>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-[10px] font-bold text-emerald-700 ring-2 ring-white dark:ring-gray-900">TF</div>
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-[10px] font-bold text-amber-700 ring-2 ring-white dark:ring-gray-900">+10</div>
                </div>
              </div>
            </div>
            
            {/* PENDING APPROVALS Card */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">PENDING APPROVALS</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-orange-500 dark:text-orange-400">3</span>
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center">
                  <AlertCircle className="text-orange-500 dark:text-orange-400 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-8">
            
            {/* Urgent Action Required */}
            <div className="lg:col-span-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Urgent Action Required</h3>
              </div>
              <div className="p-6 space-y-4 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Acme Corp</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 font-medium">Missing Brief</p>
                  </div>
                  <button className="px-5 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-all w-full sm:w-auto">Action</button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl gap-4 border border-red-100 dark:border-red-900/30">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Summer Campaign</h4>
                    <p className="text-sm text-red-500 font-bold mt-0.5">Overdue Delivery</p>
                  </div>
                  <button className="px-5 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all w-full sm:w-auto">Action</button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">TechFlow</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 font-medium">Stuck in Review</p>
                  </div>
                  <button className="px-5 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-all w-full sm:w-auto">Action</button>
                </div>
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="lg:col-span-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-900/50">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Live Activity</h3>
                <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase rounded-md tracking-widest border border-indigo-100 dark:border-indigo-800/50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                  Live
                </span>
              </div>
              <div className="p-6 flex-1 space-y-6">
                {[
                  { client: "Acme Corp", action: "deposit confirmed", time: "2m ago", color: "bg-emerald-500" },
                  { client: "Sarah Chen", action: "uploaded assets", time: "15m ago", color: "bg-indigo-600" },
                  { client: "TechFlow", action: "draft shared", time: "1h ago", color: "bg-gray-300 dark:bg-gray-700" },
                  { client: "Growth Engine", action: "subscription renewed", time: "3h ago", color: "bg-indigo-600" }
                ].map((activity, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-default">
                    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${activity.color} group-hover:scale-150 transition-transform`}></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {activity.client} <span className="font-medium text-gray-500 dark:text-gray-400">{activity.action}</span>
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Production Pipeline */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/50 dark:bg-gray-900/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Production Pipeline Snapshot</h3>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Editing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Final</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Backlog</span>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="w-full h-5 bg-gray-100 dark:bg-gray-800 rounded-full flex overflow-hidden shadow-inner">
                <div className="h-full bg-purple-500 hover:brightness-110 transition-all cursor-pointer w-[45%]" title="45% Editing"></div>
                <div className="h-full bg-emerald-500 hover:brightness-110 transition-all cursor-pointer w-[30%]" title="30% Final Render"></div>
                <div className="h-full bg-transparent w-[25%]"></div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">Projected Completion</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">Oct 24, 2026</p>
                </div>
                <div className="flex items-center gap-4 sm:text-right">
                  <div className="flex flex-col">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">Efficiency Score</p>
                    <p className="text-3xl font-black text-purple-600 dark:text-purple-400">
                      82% <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 ml-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md align-middle">OVERALL</span>
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-800/50">
                    <TrendingUp className="text-purple-600 dark:text-purple-400 w-7 h-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Custom Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
      `}} />
    </div>
  );
}
