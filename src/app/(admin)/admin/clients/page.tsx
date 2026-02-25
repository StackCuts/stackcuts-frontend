"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  LayoutDashboard, Users, Briefcase, Wallet, Settings,
  Moon, Sun, Menu, Search, ChevronDown, Plus, MoreHorizontal, Star
} from "lucide-react";
import Link from "next/link";

export default function AdminClientsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const clients = [
    {
      initials: "SC",
      name: "Sarah Chen",
      company: "TechFlow SaaS",
      plan: "Growth Engine",
      ltv: "$5,397.00",
      activeProjects: 2,
      status: "Active",
      color: "from-purple-500 to-indigo-600",
      statusColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50",
      dotColor: "bg-emerald-500"
    },
    {
      initials: "MT",
      name: "Marcus Thorne",
      company: "Luxury Auto",
      plan: "Single Ad",
      ltv: "$499.00",
      activeProjects: 1,
      status: "Active",
      color: "from-blue-500 to-cyan-500",
      statusColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50",
      dotColor: "bg-emerald-500"
    },
    {
      initials: "ER",
      name: "Elena Rodriguez",
      company: "E-Com Brands",
      plan: "Growth Engine",
      ltv: "$10,794.00",
      activeProjects: 0,
      status: "Churned",
      color: "from-pink-500 to-rose-500",
      statusColor: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800/50",
      dotColor: "bg-red-500"
    }
  ];

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
          <Link href="/admin/clients" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 transition-all">
            <Users className="w-5 h-5" />
            <p className="text-sm font-bold">Clients</p>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <Briefcase className="w-5 h-5" />
            <p className="text-sm font-medium">Projects</p>
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
        <header className="h-auto md:h-24 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between p-6 md:px-8 shrink-0 gap-4">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Client Directory</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 font-medium">Manage your clients and view their performance metrics.</p>
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
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add New Client</span>
              <span className="sm:hidden">Add Client</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 md:p-8 flex-1 overflow-y-auto custom-scrollbar flex flex-col">
          
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-start sm:items-center shrink-0">
            <div className="relative w-full max-w-md group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search clients or companies..." 
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm shadow-sm transition-shadow"
              />
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
                <span>Plan</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-between gap-2 px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
                <span>Status</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Table Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col flex-1 overflow-hidden">
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left whitespace-nowrap divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-800/50 sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-full md:w-[40%]">Client</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Plan</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Active Projects</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
                  {clients.map((client, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold shadow-sm`}>
                              {client.initials}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-slate-900 dark:text-white">{client.name}</div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{client.company}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {client.plan === "Growth Engine" ? <Star className="w-4 h-4 text-amber-500 fill-current" /> : null}
                          {client.plan}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 font-mono font-medium">
                        {client.ltv}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${client.activeProjects > 0 ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700'}`}>
                          {client.activeProjects} Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${client.statusColor}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${client.dotColor}`}></span>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1" title="More Actions">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="bg-gray-50/50 dark:bg-gray-900/50 px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between shrink-0">
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Showing <span className="font-bold text-slate-900 dark:text-white">1</span> to <span className="font-bold text-slate-900 dark:text-white">10</span> of <span className="font-bold text-slate-900 dark:text-white">42</span> clients
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none relative inline-flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-bold rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                  Previous
                </button>
                <button className="flex-1 sm:flex-none relative inline-flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-bold rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                  Next
                </button>
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
