/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Wallet,
  Settings,
  Moon,
  Sun,
  Search,
  Plus,
  MoreHorizontal,
  Building2,
  PlusCircle,
  Clock,
  Video,
  Eye,
  CheckCircle2,
  User,
  Download,
} from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function AdminProjectsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);

    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(fetched);
    });

    return () => unsubscribe();
  }, []);

  const onboardingProjects = projects.filter(
    (p) => p.status === "onboarding" || !p.status,
  );
  const assetsProjects = projects.filter((p) => p.status === "assets_status");
  const productionProjects = projects.filter((p) => p.status === "production");
  const reviewProjects = projects.filter((p) => p.status === "review");
  const handoffProjects = projects.filter(
    (p) => p.status === "handoff" || p.status === "completed",
  );

  return (
    <div className="flex h-screen overflow-hidden font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-700 dark:selection:text-indigo-300">
      {/* Admin Sidebar (Strictly Dark Theme) */}
      <aside
        className={`w-72 bg-[#111827] flex-col border-r border-slate-800 shrink-0 h-screen sticky top-0 hidden md:flex z-20`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
          <h1 className="text-white font-bold text-xl tracking-tight">
            StackCuts{" "}
            <span className="font-normal text-slate-400 text-sm ml-1">
              ADMIN
            </span>
          </h1>
        </div>

        <nav className="px-4 mt-4 space-y-1.5 flex-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            <p className="text-sm font-medium">Command Center</p>
          </Link>
          <Link
            href="/admin/clients"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <Users className="w-5 h-5" />
            <p className="text-sm font-medium">Clients</p>
          </Link>
          <Link
            href="/admin/projects"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 transition-all"
          >
            <Briefcase className="w-5 h-5" />
            <p className="text-sm font-bold">Projects</p>
          </Link>
          <Link
            href="/admin/revenue"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <Wallet className="w-5 h-5" />
            <p className="text-sm font-medium">Revenue</p>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors mt-8"
          >
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
      <main className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-950">
        {/* Header */}
        <header className="h-20 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Projects Pipeline
            </h2>
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-bold px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700 uppercase tracking-wider mt-1">
              Q3 2026
            </span>
          </div>
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-64 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4 group-focus-within:text-indigo-600 transition-colors" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all shadow-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              {mounted ? (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors shadow-sm"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              ) : (
                <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"></div>
              )}

              {/* New Project Button */}
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md shadow-indigo-600/20 transition-all active:scale-95">
                <Plus className="w-4 h-4" />
                <span>New Project</span>
              </button>
            </div>
          </div>
        </header>
        {/* Kanban Board (Scrollable Container) */}
        <div className="flex-1 overflow-x-auto p-8 custom-scrollbar">
          <div className="flex gap-6 h-full items-start min-w-max pb-4">
            {/* Column 1: Onboarding */}
            <div className="w-80 flex flex-col h-full shrink-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2 uppercase tracking-wider text-sm">
                  Onboarding
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] px-2 py-0.5 rounded-full font-black">
                    {onboardingProjects.length}
                  </span>
                </h3>
                <button
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  title="Column Options"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {onboardingProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/admin/projects/${project.id}`}
                    className="block"
                  >
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all cursor-pointer">
                      <h4 className="font-black text-slate-900 dark:text-white mb-3 text-sm leading-tight">
                        {project.projectName}
                      </h4>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
                          <Building2 className="w-4 h-4" />{" "}
                          {project.clientEmail || project.clientId}
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 px-3 py-2 rounded-xl border border-gray-100 dark:border-gray-800">
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-black tracking-widest mb-0.5">
                            Status
                          </p>
                          <p className="text-xs text-slate-700 dark:text-slate-300 font-bold">
                            Setting up account
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Column 2: Assets Status */}
            <div className="w-80 flex flex-col h-full shrink-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2 uppercase tracking-wider text-sm">
                  Assets Status
                  <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/50 text-[10px] px-2 py-0.5 rounded-full font-black">
                    {assetsProjects.length}
                  </span>
                </h3>
                <button
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  title="Column Options"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {assetsProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/admin/projects/${project.id}`}
                    className="block"
                  >
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-red-300 dark:hover:border-red-500/50 transition-all cursor-pointer">
                      <h4 className="font-black text-slate-900 dark:text-white mb-3 text-sm leading-tight">
                        {project.projectName}
                      </h4>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
                          <Building2 className="w-4 h-4" />{" "}
                          {project.clientEmail || project.clientId}
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-xl border border-red-100 dark:border-red-900/30">
                          <p className="text-[10px] text-red-500 dark:text-red-400 uppercase font-black tracking-widest mb-0.5">
                            Status
                          </p>
                          <p className="text-xs text-red-700 dark:text-red-300 font-bold">
                            Waiting on Logos
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                {/* Add Task Action */}
                <button className="w-full border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl p-4 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all flex items-center justify-center gap-2 font-bold text-sm">
                  <PlusCircle className="w-5 h-5" /> Add Task
                </button>
              </div>
            </div>
            {/* Column 3: In Production */}
            <div className="w-80 flex flex-col h-full shrink-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2 uppercase tracking-wider text-sm">
                  In Production
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50 text-[10px] px-2 py-0.5 rounded-full font-black">
                    {productionProjects.length}
                  </span>
                </h3>
                <button
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  title="Column Options"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {productionProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/admin/projects/${project.id}`}
                    className="block"
                  >
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all cursor-pointer group flex flex-col">
                      <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <Video className="w-8 h-8 text-white/50 relative z-10" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h4 className="font-black text-slate-900 dark:text-white mb-2 text-sm leading-tight">
                          {project.projectName}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-bold tracking-wide break-all">
                          {project.clientEmail || project.clientId}
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-md font-bold uppercase tracking-wider">
                            {project.selectedFormat || "FORMAT"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4 mt-auto">
                          <div className="flex items-center gap-1.5 text-orange-500 dark:text-orange-400 font-bold text-xs">
                            <Clock className="w-4 h-4" /> 12h remaining
                          </div>
                          <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-[10px] font-bold text-indigo-700 dark:text-indigo-400 ring-2 ring-white dark:ring-gray-900">
                            JD
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Column 4: In Review */}
            <div className="w-80 flex flex-col h-full shrink-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2 uppercase tracking-wider text-sm">
                  In Review
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[10px] px-2 py-0.5 rounded-full font-black">
                    {reviewProjects.length}
                  </span>
                </h3>
                <button
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  title="Column Options"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {reviewProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/admin/projects/${project.id}`}
                    className="block"
                  >
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500/50 transition-all cursor-pointer flex flex-col group">
                      <div className="h-32 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <Eye className="w-8 h-8 text-white/50 relative z-10" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h4 className="font-black text-slate-900 dark:text-white mb-2 text-sm leading-tight">
                          {project.projectName}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-bold tracking-wide break-all">
                          {project.clientEmail || project.clientId}
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 px-3 py-2.5 rounded-xl border border-blue-100 dark:border-blue-900/30 flex items-center gap-2 mt-auto">
                          <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <p className="text-xs text-blue-700 dark:text-blue-400 font-bold">
                            Awaiting Client Approval
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Column 5: Ready for Handoff */}
            <div className="w-80 flex flex-col h-full shrink-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2 uppercase tracking-wider text-sm">
                  Ready for Handoff
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-[10px] px-2 py-0.5 rounded-full font-black">
                    {handoffProjects.length}
                  </span>
                </h3>
                <button
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  title="Column Options"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {handoffProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/admin/projects/${project.id}`}
                    className="block"
                  >
                    <div className="bg-white dark:bg-gray-900 border-2 border-emerald-100 dark:border-emerald-900/30 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden flex flex-col">
                      <div className="absolute top-0 right-0 p-3 opacity-10">
                        <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h4 className="font-black text-slate-900 dark:text-white mb-3 text-sm leading-tight relative z-10">
                        {project.projectName}
                      </h4>
                      <div className="flex flex-col gap-3 relative z-10">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 break-all">
                          <User className="w-4 h-4 shrink-0" />{" "}
                          {project.clientEmail || project.clientId}
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded-xl border border-emerald-100 dark:border-emerald-900/30 flex flex-col">
                          <p className="text-xs text-emerald-700 dark:text-emerald-400 font-black tracking-wide">
                            APPROVED
                          </p>
                          <p className="text-[10px] text-emerald-600 dark:text-emerald-500 font-bold mt-0.5">
                            Ready for download
                          </p>
                        </div>
                        <button className="mt-1 w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors shadow-sm">
                          <Download className="w-4 h-4" /> Download Assets
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* CSS to handle custom scrolling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    .custom-scrollbar::-webkit-scrollbar { height: 8px; width: 8px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
  `,
        }}
      />
    </div>
  );
}
