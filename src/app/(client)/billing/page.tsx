"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
Layers, LayoutDashboard, Folders, CreditCard, Settings,
Sun, Moon, Menu, HelpCircle, Star, ArrowRight, Download,
Filter, Lock, CheckCircle2, Rocket
} from "lucide-react";
import Link from "next/link";

export default function BillingPage() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setMounted(true), 0);
  return () => clearTimeout(timer);
}, []);

const invoices = [
{ id: "#INV-2026-001", date: "Oct 24, 2026", amount: "$1,799.00", status: "Paid" },
{ id: "#INV-2026-002", date: "Sep 24, 2026", amount: "$1,799.00", status: "Paid" },
{ id: "#INV-2026-003", date: "Aug 24, 2026", amount: "$1,799.00", status: "Paid" },
{ id: "#INV-2026-004", date: "Jul 24, 2026", amount: "$1,799.00", status: "Paid" },
{ id: "#INV-2026-005", date: "Jun 24, 2026", amount: "$1,799.00", status: "Paid" }
];

return (
<div className="flex bg-gray-50 dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-slate-100">
  {/* Desktop Sidebar */}
  <aside className={`w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col h-screen sticky top-0 shrink-0 hidden md:flex z-20`}>
    <div className="p-6">
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
          <Layers className="text-white w-5 h-5" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">StackCuts</h1>
      </div>
      
      <nav className="space-y-1.5">
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link href="/brand-assets" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all">
          <Folders className="w-5 h-5" />
          Brand Assets
        </Link>
        {/* Active State */}
        <Link href="/billing" className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold text-sm transition-colors bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-r-4 border-indigo-600">
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
  <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 min-h-screen relative custom-scrollbar">
    
    {/* Mobile Header */}
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

    <div className="mx-auto max-w-6xl px-6 md:px-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Billing & Invoices</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage your subscription plan and view payment history.</p>
        </div>
        <div className="flex items-center gap-3">
          {mounted ? (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title="Toggle Theme"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-sm"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          ) : (
            <div className="h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"></div>
          )}
          <button className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Support
          </button>
        </div>
      </div>

      {/* Cards Row */}
      <div className="grid gap-6 lg:grid-cols-5 mb-10">
        
        {/* Current Plan Card */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm lg:col-span-3 group hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300">
          <div className="absolute -right-6 -top-6 text-slate-100 dark:text-slate-800 opacity-50 dark:opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            <Rocket className="w-48 h-48" />
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Current Plan</h3>
                </div>
                <p className="text-2xl font-black text-slate-900 dark:text-white">Growth Engine Plan</p>
              </div>
              <span className="inline-flex items-center w-fit rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50">
                Active
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900 dark:text-white">$1,799</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/ month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Next billing date: <span className="text-slate-900 dark:text-gray-300 font-semibold">Oct 24, 2026</span></p>
            </div>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <button className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                Change Plan
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Payment Method Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 lg:col-span-2 shadow-sm hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Payment Method</h3>
            <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">Edit</button>
          </div>
          
          {/* Credit Card Visual */}
          <div className="relative mb-6 flex aspect-[1.586/1] w-full flex-col justify-between rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 shadow-inner border border-white/5 overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"></div>
            <div className="relative flex justify-between items-start text-white/90 font-bold italic tracking-wider">
              <span>VISA</span>
              <div className="w-8 h-6 border-2 border-white/20 rounded-md"></div>
            </div>
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1" aria-hidden="true">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40"></div><div className="h-1.5 w-1.5 rounded-full bg-white/40"></div><div className="h-1.5 w-1.5 rounded-full bg-white/40"></div><div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
                </div>
                <div className="flex gap-1" aria-hidden="true">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40"></div><div className="h-1.5 w-1.5 rounded-full bg-white/40"></div><div className="h-1.5 w-1.5 rounded-full bg-white/40"></div><div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
                </div>
                <div className="flex gap-1" aria-hidden="true">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40"></div><div className="h-1.5 w-1.5 rounded-full bg-white/40"></div><div className="h-1.5 w-1.5 rounded-full bg-white/40"></div><div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
                </div>
                <span className="font-mono text-sm text-white tracking-widest" aria-label="Card number ending in 1234">1234</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-white/50 font-bold tracking-wider mb-0.5">Card Holder</span>
                  <span className="text-xs font-semibold text-white/90 tracking-wide">SARAH CHEN</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] uppercase text-white/50 font-bold tracking-wider mb-0.5">Expires</span>
                  <span className="text-xs font-semibold text-white/90 tracking-wide">12/26</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50">
              <CheckCircle2 className="w-3.5 h-3.5" /> Default
            </span>
            <button className="text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Update Method
            </button>
          </div>
        </div>
      </div>

      {/* Invoice History Table */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 dark:border-gray-800 px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50/50 dark:bg-gray-900/50">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Invoice History</h3>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 dark:bg-gray-800/30 text-xs uppercase text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
              <tr>
                <th className="px-6 py-4 font-bold tracking-wider" scope="col">Invoice</th>
                <th className="px-6 py-4 font-bold tracking-wider" scope="col">Date</th>
                <th className="px-6 py-4 font-bold tracking-wider" scope="col">Amount</th>
                <th className="px-6 py-4 font-bold tracking-wider" scope="col">Status</th>
                <th className="px-6 py-4 text-right font-bold tracking-wider" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {invoices.map((invoice, idx) => (
                <tr key={idx} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{invoice.id}</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium">{invoice.date}</td>
                  <td className="px-6 py-4 font-mono font-medium text-gray-600 dark:text-gray-300">{invoice.amount}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1" title="Download Invoice">
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 px-6 py-4 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="hidden sm:block">
            <p className="text-sm text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-slate-900 dark:text-white">1</span> to <span className="font-semibold text-slate-900 dark:text-white">5</span> of <span className="font-semibold text-slate-900 dark:text-white">24</span> results</p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end gap-3">
            <button className="relative inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">Previous</button>
            <button className="relative inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">Next</button>
          </div>
        </div>
      </div>

      {/* Footer Security */}
      <div className="mt-10 flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500">
        <Lock className="w-4 h-4" />
        <p className="text-sm font-medium">Payments are securely processed by Stripe.</p>
      </div>
    </div>
  </main>
  
  <style dangerouslySetInnerHTML={{__html: `
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
  `}} />
</div>
);
}
