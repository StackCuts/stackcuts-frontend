/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
LayoutDashboard, Users, Briefcase, Wallet, Settings,
Moon, Sun, Menu, Download, TrendingUp, Search,
FileText, Mail
} from "lucide-react";
import Link from "next/link";

export default function AdminRevenuePage() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => setMounted(true), []);

// Canvas Drawing Logic wrapped in useEffect
useEffect(() => {
if (!mounted || !canvasRef.current) return;

const canvas = canvasRef.current;
const ctx = canvas.getContext('2d');
if (!ctx) return;
const drawChart = () => {
  const container = canvas.parentElement;
  if (!container) return;
  
  // Match canvas internal resolution to display size
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  const padding = 40;
  const width = canvas.width - (padding * 2);
  const height = canvas.height - (padding * 2);
  const data = [4000, 5200, 4800, 6500, 7800, 9200, 11000, 10500, 12800, 14392];
  const maxData = Math.max(...data) * 1.1;
  const points = data.length;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Colors based on theme
  const isDark = theme === 'dark';
  const gridColor = isDark ? '#374151' : '#F3F4F6';
  const labelColor = isDark ? '#9CA3AF' : '#6B7280';
  const lineColor = '#4F46E5'; // Indigo 600
  // Draw Grid Lines
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  for(let i = 0; i <= 4; i++) {
    const y = padding + (height / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(padding + width, y);
    ctx.stroke();
  }
  // Draw Gradient Fill
  const gradient = ctx.createLinearGradient(0, padding, 0, padding + height);
  gradient.addColorStop(0, isDark ? 'rgba(79, 70, 229, 0.4)' : 'rgba(79, 70, 229, 0.2)');
  gradient.addColorStop(1, 'rgba(79, 70, 229, 0)');
  ctx.beginPath();
  ctx.moveTo(padding, padding + height);
  for (let i = 0; i < points; i++) {
    const x = padding + (width / (points - 1)) * i;
    const y = padding + height - (data[i] / maxData) * height;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(padding + width, padding + height);
  ctx.fillStyle = gradient;
  ctx.fill();
  // Draw Main Line
  ctx.beginPath();
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  for (let i = 0; i < points; i++) {
    const x = padding + (width / (points - 1)) * i;
    const y = padding + height - (data[i] / maxData) * height;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  // Labels
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  ctx.fillStyle = labelColor;
  ctx.font = '11px Inter, sans-serif';
  ctx.textAlign = 'center';
  for (let i = 0; i < points; i++) {
    const x = padding + (width / (points - 1)) * i;
    ctx.fillText(months[i], x, padding + height + 20);
  }
};
drawChart();
// Redraw on window resize
window.addEventListener('resize', drawChart);
return () => window.removeEventListener('resize', drawChart);


}, [mounted, theme]); // Re-run when theme changes
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
      <Link href="/admin/revenue" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 transition-all">
        <Wallet className="w-5 h-5" />
        <p className="text-sm font-bold">Revenue</p>
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
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Revenue & Financials</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 font-medium">Track MRR, cash flow, and manage client invoices.</p>
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
        <button className="h-10 px-4 sm:px-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2 shadow-sm whitespace-nowrap" title="Export as CSV">
          <Download className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
      </div>
    </header>
    {/* Content Container */}
    <div className="p-4 md:p-8 flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-6 md:gap-8 max-w-[1400px]">
      
      {/* KPI Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 shrink-0">
        {/* Card 1: MRR */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current MRR</p>
            <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md text-[10px] font-black tracking-widest border border-indigo-100 dark:border-indigo-800/50 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span> LIVE
            </span>
          </div>
          <p className="text-3xl font-black text-slate-900 dark:text-white mt-3">$14,392</p>
          <div className="mt-3 flex items-center text-emerald-600 dark:text-emerald-400 font-bold text-sm bg-emerald-50 dark:bg-emerald-900/20 w-fit px-2 py-1 rounded-lg">
            <TrendingUp className="w-4 h-4 mr-1.5" /> +14% from last month
          </div>
        </div>
        
        {/* Card 2: Volume */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Net Volume (30d)</p>
          <p className="text-3xl font-black text-slate-900 dark:text-white mt-3">$18,540</p>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Gross processing volume</p>
        </div>
        
        {/* Card 3: Invoices */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Outstanding</p>
          <p className="text-3xl font-black text-orange-500 dark:text-orange-400 mt-3">$3,598</p>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm font-medium">2 clients pending payment</p>
        </div>
      </section>
      {/* Growth Chart Section */}
      <section className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm shrink-0">
        <div className="flex justify-between items-start md:items-center mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">MRR Growth (YTD)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">Monthly Recurring Revenue performance</p>
          </div>
                    <select className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white text-sm font-semibold rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-600 outline-none cursor-pointer" title="Select year for growth chart">
            <option>2026</option>
            <option>2025</option>
          </select>
        </div>
        <div className="relative h-[300px] w-full" id="chart-container">
          {/* React ref attached to Canvas */}
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
      </section>
      {/* Transactions Section */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col shrink-0">
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Transaction History</h3>
          <div className="relative w-full md:w-80 group">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
            </span>
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow shadow-sm"
              title="Search transactions"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-left whitespace-nowrap">
            <thead className="bg-gray-50 dark:bg-gray-800/30">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Client</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              
              {/* Row 1 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-5 text-sm font-medium text-gray-500 dark:text-gray-400">Oct 24, 2026</td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-xs flex items-center justify-center font-bold text-indigo-700 dark:text-indigo-400">SC</div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">Sarah Chen</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-gray-600 dark:text-gray-300">Growth Engine - Monthly</td>
                <td className="px-6 py-5 text-sm font-black text-slate-900 dark:text-white font-mono">$1,799.00</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-xs font-bold inline-flex items-center gap-1.5 transition-colors" title="Download receipt PDF">
                    <FileText className="w-3.5 h-3.5" /> PDF
                  </button>
                </td>
              </tr>
              
              {/* Row 2 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-5 text-sm font-medium text-gray-500 dark:text-gray-400">Oct 22, 2026</td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg text-xs flex items-center justify-center font-bold text-emerald-700 dark:text-emerald-400">MT</div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">Marcus Thorne</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-gray-600 dark:text-gray-300">Single Ad - Deposit</td>
                <td className="px-6 py-5 text-sm font-black text-slate-900 dark:text-white font-mono">$249.50</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-xs font-bold inline-flex items-center gap-1.5 transition-colors" title="Download receipt PDF">
                    <FileText className="w-3.5 h-3.5" /> PDF
                  </button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-5 text-sm font-medium text-gray-500 dark:text-gray-400">Oct 20, 2026</td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/50 rounded-lg text-xs flex items-center justify-center font-bold text-amber-700 dark:text-amber-400">AC</div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">Acme Corp</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-gray-600 dark:text-gray-300">Growth Engine - Monthly</td>
                <td className="px-6 py-5 text-sm font-black text-slate-900 dark:text-white font-mono">$1,799.00</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-xs font-bold inline-flex items-center gap-1.5 transition-colors" title="Resend invoice email">
                    <Mail className="w-3.5 h-3.5" /> Resend
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Table Footer Pagination */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-900/50">
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400">Showing 3 of 152 transactions</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs font-bold border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-sm" title="Previous page">Prev</button>
            <button className="px-3 py-1.5 text-xs font-bold border border-indigo-600 rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-600/20" title="Page 1">1</button>
            <button className="px-3 py-1.5 text-xs font-bold border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-sm" title="Page 2">2</button>
            <button className="px-3 py-1.5 text-xs font-bold border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-sm" title="Next page">Next</button>
          </div>
        </div>
      </section>
      
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
