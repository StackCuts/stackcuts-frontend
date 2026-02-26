/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
LayoutDashboard, Users, Briefcase, Wallet, Settings,
Moon, Sun, Menu, Building2, CreditCard, UploadCloud,
UsersRound, Bell
} from "lucide-react";
import Link from "next/link";

export default function AdminSettingsPage() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Notification Toggles State
const [notifications, setNotifications] = useState({
signups: true,
overdue: true,
failedPayments: true
});

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
      <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 transition-all mt-8">
        <Settings className="w-5 h-5" />
        <p className="text-sm font-bold">Settings</p>
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
  {/* Main Content Area */}
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
      <div className="flex flex-col">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Platform Settings</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 font-medium">Manage agency preferences, billing integrations, and team access.</p>
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
        <button className="h-10 px-5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20 active:scale-95 whitespace-nowrap" title="Save all changes">
          Save Changes
        </button>
      </div>
    </header>
    {/* Scrollable Content */}
    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (60%) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Agency Profile Card */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Agency Profile
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                <div className="w-20 h-20 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 shrink-0">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-lg">S</div>
                </div>
                <div>
                  <button className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5" title="Upload new agency logo">
                    <UploadCloud className="w-4 h-4" /> Upload new logo
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">SVG, PNG or JPG (min. 400x400px)</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Agency Name</label>
                  <input type="text" defaultValue="StackCuts" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all text-sm font-medium" title="Agency Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Support Email</label>
                  <input type="email" defaultValue="support@stackcuts.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all text-sm font-medium" title="Support Email" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Default Timezone</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all text-sm font-medium" title="Default Timezone">
                    <option>Pacific Time (PT)</option>
                    <option>Eastern Time (ET)</option>
                    <option>UTC</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
          {/* Integrations Card */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <CreditCard className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Integrations & Billing
            </h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-sm shrink-0">
                  {/* Stripe SVG Logo */}
                  <svg className="w-8 h-8 text-[#635BFF]" fill="currentColor" viewBox="0 0 24 24" role="img">
                    <path d="M13.962 8.475c0-1.077-.872-1.934-1.954-1.934-.635 0-1.18.291-1.52.74l-.004.004-3.567 4.757c-.126.168-.13.402-.01.57.12.169.317.261.517.261h3.35v3.152c0 1.077.872 1.934 1.954 1.934.635 0 1.18-.291 1.52-.74l.004-.004 3.567-4.757c.126-.168.13-.402.01-.57a.49.49 0 00-.517-.261h-3.35V8.475zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"></path>
                    <title>Stripe</title>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-slate-900 dark:text-white">Stripe</p>
                    <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/50">Connected</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">Live Mode Active • Transaction fee: 2.9% + 30¢</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm whitespace-nowrap w-full sm:w-auto" title="Manage Stripe API keys">
                Manage Keys
              </button>
            </div>
          </section>
        </div>
        {/* Right Column (40%) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Admin Team Card */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <UsersRound className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Admin Team
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">Invite editors and project managers.</p>
              </div>
            </div>
            <div className="flex gap-2 mb-8">
              <input type="email" placeholder="email@address.com" className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none text-sm font-medium placeholder-gray-400" title="Team member email" />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-indigo-600/20 active:scale-95 transition-all" title="Invite team member">Invite</button>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Members</p>
              
              <div className="flex items-center justify-between group p-2 -mx-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-200 dark:border-indigo-800/50">
                    AS
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Alex Sterling</p>
                    <p className="text-xs text-gray-500 font-medium">CEO (Owner)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between group p-2 -mx-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-100 dark:border-emerald-800/50">
                    DK
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">David K.</p>
                    <p className="text-xs text-gray-500 font-medium">Lead Editor</p>
                  </div>
                </div>
                <button className="text-xs text-red-500 hover:text-red-600 dark:hover:text-red-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10" title="Remove David K. from team">Remove</button>
              </div>
            </div>
          </section>
          {/* Notifications Card */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
              <Bell className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              System Notifications
            </h3>
            <div className="space-y-6">
              
              {/* Toggle 1 */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col pr-4">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">New Client Signups</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Alert me when a new client joins.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" className="sr-only peer" checked={notifications.signups} onChange={() => setNotifications({...notifications, signups: !notifications.signups})} title="Toggle New Client Signups alerts" />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              
              {/* Toggle 2 */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col pr-4">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Projects Overdue (48h)</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Critical warning for pending deadlines.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" className="sr-only peer" checked={notifications.overdue} onChange={() => setNotifications({...notifications, overdue: !notifications.overdue})} title="Toggle Projects Overdue alerts" />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              
              {/* Toggle 3 */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col pr-4">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Failed Payments</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Immediate notice for billing issues.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" className="sr-only peer" checked={notifications.failedPayments} onChange={() => setNotifications({...notifications, failedPayments: !notifications.failedPayments})} title="Toggle Failed Payments alerts" />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
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
