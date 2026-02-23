"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
Layers, LayoutDashboard, Folders, CreditCard, Settings,
Sun, Moon, Plus, Rocket, CheckCircle2, Award, ChevronRight,
AlertCircle, Clapperboard, Beaker, Sparkles, Wand2, Menu
} from "lucide-react";
import Link from "next/link";

export default function ClientDashboardPage() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, [setMounted]);

return (
<div className="flex bg-gray-50 dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-slate-100">
  {/* Desktop Sidebar */}
  <aside className={`w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col h-screen sticky top-0 shrink-0 hidden md:flex`}>
    <div className="p-6">
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
          <Layers className="text-white w-5 h-5" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">StackCuts</h1>
      </div>
      
      <nav className="space-y-1.5">
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold text-sm transition-colors bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-r-4 border-indigo-600">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link href="/brand-assets" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all">
          <Folders className="w-5 h-5" />
          Brand Assets
        </Link>
        <Link href="/billing" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all">
          <CreditCard className="w-5 h-5" />
          Billing & Invoices
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all">
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </nav>
    </div>
    
    <div className="mt-auto p-4 border-t border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold shrink-0">
          SC
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-sm font-bold text-slate-900 dark:text-white truncate">Sarah Chen</span>
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium truncate">Growth Engine Plan</span>
        </div>
      </div>
    </div>
  </aside>

  {/* Main Content Area */}
  <main className="flex-1 flex flex-col min-w-0 overflow-y-auto h-screen">
    
    {/* Mobile Header (Visible only on small screens) */}
    <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 w-7 h-7 rounded-lg flex items-center justify-center">
          <Layers className="text-white w-4 h-4" />
        </div>
        <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">StackCuts</h1>
      </div>
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-500" title="Open Menu">
        <Menu className="w-6 h-6" />
      </button>
    </div>

    {/* Dashboard Header */}
    <header className="flex flex-col sm:flex-row sm:items-center justify-between px-6 md:px-8 py-6 md:py-8 gap-4 shrink-0">
      <div>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Welcome back, Sarah 👋</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1 font-medium">Here is the status of your ad campaigns.</p>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        {mounted ? (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle Theme"
            className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        ) : (
          <div className="w-[42px] h-[42px] rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"></div>
        )}
        <Link href="/project" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 md:px-5 rounded-lg flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98] whitespace-nowrap text-sm md:text-base">
          <Plus className="w-5 h-5" />
          Start New Project
        </Link>
      </div>
    </header>

    <div className="px-6 md:px-8 pb-10 space-y-8 flex-1">
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Active Projects</span>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2.5 rounded-lg">
              <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-slate-900 dark:text-white">2</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">+1 from last month</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Completed Ads</span>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2.5 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-slate-900 dark:text-white">14</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">+4 this week</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current Plan</span>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2.5 rounded-lg">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">Growth Engine</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">$1,799/mo</span>
              <Link href="#" className="text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:underline flex items-center gap-1">
                Manage <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-900/50">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Projects</h3>
          <button className="text-gray-500 dark:text-gray-400 text-sm font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project Name</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Format</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              
              {/* Project 1 - Needs Brief */}
              <tr className="bg-orange-50/30 hover:bg-orange-50/60 dark:bg-orange-900/10 dark:hover:bg-orange-900/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-500" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Winter Conversion Ad</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400 dark:text-gray-500 italic font-medium">TBD</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Needs Brief
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="/project" className="inline-block bg-indigo-600 text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all shadow-sm">Submit Brief</Link>
                </td>
              </tr>

              {/* Project 2 - In Production */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center border border-amber-100 dark:border-amber-900/30">
                      <Clapperboard className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Summer SaaS Campaign</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-medium">Vertical (9:16)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    In Production
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="/project" className="inline-block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">View Tracker</Link>
                </td>
              </tr>

              {/* Project 3 - Review */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
                      <Beaker className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Retargeting Hook Test</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-medium">Landscape (16:9)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Review Required
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="/project" className="inline-block border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm">Review Draft</Link>
                </td>
              </tr>

              {/* Project 4 - Completed */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center border border-emerald-100 dark:border-emerald-900/30">
                      <Sparkles className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Luxury Brand Ad</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-medium">Mix</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="/project" className="inline-block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">Download Assets</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Upsell Banner */}
      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Need more variations?</h4>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl text-sm md:text-base leading-relaxed">
              Drop a new link and our AI will generate fresh hooks and variations tailored for your brand voice in under 48 hours.
            </p>
          </div>
          <Link href="/project" className="whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 w-full md:w-auto active:scale-[0.98]">
            <Wand2 className="w-5 h-5" />
            Start Campaign
          </Link>
        </div>
        
        {/* Decorative Background Element */}
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 pointer-events-none hidden md:block">
          <svg className="h-full w-full text-indigo-600 fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.8,-44.7C86.4,-31.3,92.5,-15.7,92.5,0C92.5,15.7,86.4,31.3,77.8,44.7C69.2,58.1,58.1,69.2,44.7,77.8C31.3,86.4,15.7,92.5,0,92.5C-15.7,92.5,-31.3,86.4,-44.7,77.8C-58.1,69.2,-69.2,58.1,-77.8,44.7C-86.4,31.3,-92.5,15.7,-92.5,0C-92.5,-15.7,-86.4,-31.3,-77.8,-44.7C-69.2,-58.1,-58.1,-69.2,-44.7,-76.4C-31.3,-83.6,-15.7,-89.7,0,-89.7C15.7,-89.7,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)"></path>
          </svg>
        </div>
      </div>
    </div>
  </main>
</div>
);
}
