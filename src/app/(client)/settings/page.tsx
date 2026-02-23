"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
Layers, LayoutDashboard, Folders, CreditCard, Settings as SettingsIcon,
Sun, Moon, Menu, MoreVertical, Camera, Mail, UserPlus, User
} from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// UI state for the notification toggles
const [toggles, setToggles] = useState({
production: true,
comments: true,
final: false
});

useEffect(() => {
  const timer = setTimeout(() => setMounted(true), 0);
  return () => clearTimeout(timer);
}, []);

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
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all text-decoration-none">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link href="/brand-assets" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all text-decoration-none">
          <Folders className="w-5 h-5" />
          Brand Assets
        </Link>
        <Link href="/billing" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all text-decoration-none">
          <CreditCard className="w-5 h-5" />
          Billing & Invoices
        </Link>
        {/* Active State */}
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold text-sm transition-colors bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-r-4 border-indigo-600 text-decoration-none">
          <SettingsIcon className="w-5 h-5" />
          Settings
        </Link>
      </nav>
    </div>
    
    <div className="mt-auto p-4 border-t border-gray-100 dark:border-gray-800">
      <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors text-left group" title="Account Settings">
        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold shrink-0">
          SC
        </div>
        <div className="flex flex-col flex-1 min-w-0 font-sans">
          <span className="text-sm font-bold text-slate-900 dark:text-white truncate">Sarah Chen</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 truncate">sarah@stackcuts.com</span>
        </div>
        <MoreVertical className="w-4 h-4 text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white" />
      </button>
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

    <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
      
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Settings</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">Manage your account, team members, and security preferences.</p>
        </div>
        
        {/* Header Theme Toggle - Matched to Dashboard */}
        <div className="flex items-center gap-3">
          {mounted ? (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-sm"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          ) : (
            <div className="h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"></div>
          )}
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (Profile & Security) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Card 1: Profile Information */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Profile Information</h2>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 uppercase tracking-wider">Admin</span>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="shrink-0 relative group cursor-pointer" title="Edit Avatar">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-3xl transition-all group-hover:border-indigo-500">
                    SC
                  </div>
                  <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-sans">Full Name</label>
                    <input id="full-name" type="text" defaultValue="Sarah Chen" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white text-sm font-medium rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none block p-3 transition-colors font-sans" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-sans">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input id="email" type="email" defaultValue="sarah@stackcuts.com" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white text-sm font-medium rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none block pl-10 p-3 transition-colors font-sans" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-sans">Role</label>
                  <input id="role" type="text" value="Founder" readOnly className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-sm font-medium rounded-xl focus:ring-0 block p-3 cursor-not-allowed outline-none font-sans" />
                </div>
                <div>
                  <label htmlFor="timezone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-sans">Timezone</label>
                  <select id="timezone" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white text-sm font-medium rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none block p-3 transition-colors font-sans">
                    <option>(GMT-08:00) Pacific Time</option>
                    <option>(GMT-05:00) Eastern Time</option>
                    <option>(GMT+00:00) London</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end pt-2">
                <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-all shadow-md shadow-indigo-600/20 active:scale-[0.98]">
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          {/* Card 2: Security */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Security & Passwords</h2>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label htmlFor="current-pw" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-sans">Current Password</label>
                <input id="current-pw" type="password" defaultValue="password123" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none block p-3 font-sans" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="new-pw" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-sans">New Password</label>
                  <input id="new-pw" type="password" placeholder="Min 8 characters" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none block p-3 placeholder-gray-400 font-sans" />
                </div>
                <div>
                  <label htmlFor="confirm-pw" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-sans">Confirm Password</label>
                  <input id="confirm-pw" type="password" placeholder="Min 8 characters" className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none block p-3 placeholder-gray-400 font-sans" />
                </div>
              </div>
              <div className="pt-4 flex justify-end">
                <button className="px-6 py-2.5 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white text-sm font-bold rounded-lg transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Team & Notifications) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Card 3: Team Workspace */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm h-fit">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/50">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Team Workspace</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">Manage access for your team.</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 p-1 transition-colors" title="Invite User">
                <UserPlus className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              
              {/* Invite Form */}
              <div className="mb-8">
                <label htmlFor="invite-email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 font-sans">Invite New Member</label>
                <div className="flex gap-2">
                  <input id="invite-email" type="email" placeholder="colleague@email.com" className="flex-1 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none block p-2.5 placeholder-gray-400 font-sans" title="Invite Email" />
                  <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-all shadow-md shadow-indigo-600/20 whitespace-nowrap active:scale-95">
                    Send Invite
                  </button>
                </div>
              </div>
              
              {/* Member List */}
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 font-sans">Active Members</label>
                
                {/* Member 1 */}
                <div className="flex items-center justify-between group p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl -mx-2 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-200 dark:border-indigo-800/50">
                      SC
                    </div>
                    <div className="font-sans">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Chen</p>
                      <p className="text-xs text-gray-500 font-medium">Admin</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full font-sans">Owner</span>
                </div>
                
                {/* Member 2 */}
                <div className="flex items-center justify-between group p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl -mx-2 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-100 dark:border-emerald-800/50">
                      MT
                    </div>
                    <div className="font-sans">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Marcus Thorne</p>
                      <p className="text-xs text-gray-500 font-medium">Media Buyer</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 font-sans" title="Remove Member">
                    Remove
                  </button>
                </div>
                
                {/* Member 3 (Pending) */}
                <div className="flex items-center justify-between group p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl -mx-2 transition-colors opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 border border-gray-200 dark:border-gray-700">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="font-sans">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">alex@stackcuts.com</p>
                      <p className="text-xs text-gray-500 font-medium">Pending Invite...</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors font-sans" title="Resend Invite">
                    Resend
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Card 4: Notifications */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm h-fit">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Email Notifications</h2>
            </div>
            <div className="p-6 space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5 pr-4 font-sans">
                  <label htmlFor="toggle-production" className="text-sm font-bold text-slate-900 dark:text-white cursor-pointer">Project moves to Production</label>
                  <p className="text-xs text-gray-500 font-medium">Get notified when a brief is approved.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input id="toggle-production" type="checkbox" title="Toggle Production Alerts" className="sr-only peer" checked={toggles.production} onChange={() => setToggles({...toggles, production: !toggles.production})} />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5 pr-4 font-sans">
                  <label htmlFor="toggle-comments" className="text-sm font-bold text-slate-900 dark:text-white cursor-pointer">New comments on drafts</label>
                  <p className="text-xs text-gray-500 font-medium">Daily summary of client feedback.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input id="toggle-comments" type="checkbox" title="Toggle Comment Alerts" className="sr-only peer" checked={toggles.comments} onChange={() => setToggles({...toggles, comments: !toggles.comments})} />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5 pr-4 font-sans">
                  <label htmlFor="toggle-final" className="text-sm font-bold text-slate-900 dark:text-white cursor-pointer">Final high-res files are ready</label>
                  <p className="text-xs text-gray-500 font-medium">Instant notification for downloads.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input id="toggle-final" type="checkbox" title="Toggle Download Alerts" className="sr-only peer" checked={toggles.final} onChange={() => setToggles({...toggles, final: !toggles.final})} />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </section>
        </div>
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
