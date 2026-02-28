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
  Menu,
  ArrowLeft,
  Sparkles,
  Edit2,
  FileText,
  FileArchive,
  Blocks,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";

export default function ProjectBlueprintPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const params = useParams();
  const id = params.id as string;

  const [projectData, setProjectData] = useState<any>(null);
  const [brandVaultData, setBrandVaultData] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [blueprint, setBlueprint] = useState({
    veoPrompt: "",
    voiceScript: "",
    trupeerInstructions: "",
    lyriaPrompt: "",
    editingNotes: "",
  });

  const [reviewUrlInput, setReviewUrlInput] = useState("");
  const [isSendingReview, setIsSendingReview] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  useEffect(() => {
    if (projectData?.reviewUrl) {
      setReviewUrlInput(projectData.reviewUrl);
    }
  }, [projectData?.reviewUrl]);

  useEffect(() => {
    setMounted(true);
    if (!id) return;

    const unsubscribe = onSnapshot(doc(db, "projects", id), async (docSnap) => {
      if (docSnap.exists()) {
        const pData = docSnap.data();
        setProjectData({ id: docSnap.id, ...pData });

        // Load blueprint if saved
        if (pData.blueprint) {
          setBlueprint(pData.blueprint);
        }

        // Fetch related Brand Vault
        if (pData.clientId) {
          try {
            const bvSnap = await getDoc(doc(db, "brand_vault", pData.clientId));
            if (bvSnap.exists()) {
              setBrandVaultData(bvSnap.data());
            }
          } catch (err) {
            console.error(err);
          }
        }
      }
    });

    return () => unsubscribe();
  }, [id]);

  const handleBlueprintChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: keyof typeof blueprint,
  ) => {
    setBlueprint((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSaveBlueprint = async () => {
    if (!id || !projectData) return;
    setIsSaving(true);
    try {
      await updateDoc(doc(db, "projects", id), {
        blueprint: blueprint,
        status:
          projectData.status === "onboarding" || !projectData.status
            ? "production"
            : projectData.status,
      });
      alert("Blueprint saved successfully.");
    } catch (error) {
      console.error("Error saving blueprint:", error);
      alert("Failed to save blueprint.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSendForReview = async () => {
    if (!id || !reviewUrlInput.trim()) return;
    setIsSendingReview(true);
    try {
      await updateDoc(doc(db, "projects", id), {
        reviewUrl: reviewUrlInput,
        status: "review",
      });
      setSendSuccess(true);
      setTimeout(() => setSendSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending review URL:", error);
      alert("Failed to send for review.");
    } finally {
      setIsSendingReview(false);
    }
  };

  if (!projectData) {
    return (
      <div className="flex h-screen items-center justify-center font-bold text-slate-500">
        Loading Blueprint Pipeline...
      </div>
    );
  }

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
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-950">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[#111827] text-white border-b border-slate-800 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
            <h1 className="font-bold text-lg tracking-tight">
              StackCuts Admin
            </h1>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400"
            title="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {/* Top Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 md:px-8 py-5 shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <Link
              href="/admin/projects"
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center mb-2 transition-colors w-fit"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Board
            </Link>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {projectData.projectName}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
              Generated for:{" "}
              <span className="font-bold text-slate-700 dark:text-slate-200">
                {projectData.clientEmail}
              </span>{" "}
              (ID: {projectData.clientId?.slice(0, 8)})
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors shadow-sm shrink-0"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            ) : (
              <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm shrink-0"></div>
            )}
            <button
              className="flex-1 md:flex-none px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 font-bold text-sm rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm whitespace-nowrap"
              title="Edit project brief"
            >
              Edit Brief
            </button>
            <button
              onClick={handleSaveBlueprint}
              disabled={isSaving}
              className="flex-1 md:flex-none px-4 py-2.5 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap disabled:opacity-50"
              title="Save master blueprint"
            >
              <Sparkles className="w-4 h-4" />{" "}
              {isSaving ? "Saving..." : "Save Blueprint"}
            </button>
          </div>
        </header>
        {/* Blueprint Grid */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Left Column (35%) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Client Context Card */}
              <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                  Client Context
                </h3>
                <div className="space-y-5">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                    <span className="block text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">
                      Client Brief
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                      {projectData.brandVoice ||
                        projectData.briefDetails ||
                        "No brief details provided."}
                    </p>
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Target Audience
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md border border-indigo-200 dark:border-indigo-800/50 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-[10px] font-black uppercase tracking-wider">
                        {projectData.targetAudience?.substring(0, 20) ||
                          "Audience"}
                      </span>
                      <span className="px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-black uppercase tracking-wider">
                        {projectData.selectedFormat || "Format"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-gray-100 dark:border-gray-800">
                    <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-3">
                      AI Guardrails (From Brand Vault)
                    </span>
                    {brandVaultData?.doNotSayList && (
                      <div className="mb-3 px-3 py-2 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg">
                        <p className="text-[10px] font-bold text-red-600 uppercase">
                          Do Not Say List:
                        </p>
                        <p className="text-xs text-red-700 dark:text-red-400 mt-1">
                          {brandVaultData.doNotSayList}
                        </p>
                      </div>
                    )}
                    {brandVaultData?.brandColors && (
                      <div className="mb-3">
                        <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">
                          Brand Colors:
                        </p>
                        <p className="text-xs text-slate-700 dark:text-slate-300 font-mono bg-gray-100 dark:bg-gray-800 p-1.5 rounded">
                          {brandVaultData.brandColors}
                        </p>
                      </div>
                    )}
                    <ul className="space-y-2.5 mt-3">
                      {brandVaultData?.primaryLogoUrl && (
                        <li>
                          <a
                            href={brandVaultData.primaryLogoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline flex items-center transition-colors truncate"
                          >
                            <FileArchive className="w-4 h-4 mr-2" /> Primary
                            Logo
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </section>
              {/* Project Health Card */}
              <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                  Project Health
                </h3>
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      Generation Progress
                    </span>
                    <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">
                      85%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </section>

              {/* Deliver Draft Card */}
              <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                  Deliver Draft
                </h3>

                {projectData.clientFeedback && (
                  <div className="mb-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 rounded-xl">
                    <span className="block text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-1.5">
                      Client Revision Request
                    </span>
                    <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                      &quot;{projectData.clientFeedback}&quot;
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5 block">
                      Unlisted YouTube Link
                    </label>
                    <input
                      type="url"
                      value={reviewUrlInput}
                      onChange={(e) => setReviewUrlInput(e.target.value)}
                      placeholder="Paste unlisted YouTube link..."
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium text-slate-900 dark:text-white"
                    />
                  </div>
                  <button
                    onClick={handleSendForReview}
                    disabled={isSendingReview || !reviewUrlInput.trim()}
                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm py-2.5 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors disabled:opacity-50 flex items-center justify-center h-10"
                  >
                    {isSendingReview
                      ? "Sending..."
                      : sendSuccess
                        ? "Sent!"
                        : "Send to Client for Review"}
                  </button>
                </div>
              </section>
            </div>
            {/* Right Column (65%) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-2.5 text-slate-900 dark:text-white">
                  <Blocks className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-xl font-black tracking-tight">
                    The Assembly Line
                  </h2>
                </div>
                <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black rounded-md border border-emerald-200 dark:border-emerald-800/50 tracking-widest uppercase w-fit">
                  READY FOR EXPORT
                </span>
              </div>
              {/* Card 1 - UGC Hook */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <div className="flex items-center flex-wrap gap-3">
                    <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                      1. The UGC Hook
                    </span>
                    <div className="flex space-x-1.5">
                      <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">
                        Nano
                      </span>
                      <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">
                        Veo
                      </span>
                      <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">
                        ElevenLabs
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1"
                    title="Edit hook prompt"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      Veo Visual Prompt
                    </label>
                    <textarea
                      value={blueprint.veoPrompt}
                      onChange={(e) => handleBlueprintChange(e, "veoPrompt")}
                      placeholder="Enter cinematic prompts..."
                      className="w-full p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl h-40 text-sm text-gray-700 dark:text-gray-300 overflow-y-auto leading-relaxed font-medium custom-scrollbar resize-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      ElevenLabs Voice Script
                    </label>
                    <textarea
                      value={blueprint.voiceScript}
                      onChange={(e) => handleBlueprintChange(e, "voiceScript")}
                      placeholder="Enter voice-over script here..."
                      className="w-full p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl h-40 text-sm text-gray-700 dark:text-gray-300 overflow-y-auto leading-relaxed font-medium italic custom-scrollbar border-l-4 border-l-indigo-500 resize-none transition-all"
                    />
                  </div>
                </div>
              </div>
              {/* Card 2 - The Screencast */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                      2. The Screencast
                    </span>
                    <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">
                      Trupeer
                    </span>
                  </div>
                  <button
                    className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1"
                    title="Edit screencast instructions"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      Trupeer Generation Instructions
                    </label>
                    <textarea
                      value={blueprint.trupeerInstructions}
                      onChange={(e) =>
                        handleBlueprintChange(e, "trupeerInstructions")
                      }
                      placeholder="Enter flow instructions for Trupeer..."
                      className="w-full p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl h-28 text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium resize-none transition-all"
                    />
                  </div>
                </div>
              </div>
              {/* Card 3 - The Montage */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <div className="flex items-center flex-wrap gap-3">
                    <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                      3. The Montage
                    </span>
                    <div className="flex space-x-1.5">
                      <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">
                        Pictory
                      </span>
                      <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded uppercase tracking-wide">
                        Lyria 3
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1"
                    title="Edit montage settings"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      Lyria Music Prompt
                    </label>
                    <textarea
                      value={blueprint.lyriaPrompt}
                      onChange={(e) => handleBlueprintChange(e, "lyriaPrompt")}
                      placeholder="Enter Lyria vibes, BPM, loop lengths..."
                      className="w-full p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl h-24 text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium resize-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      Editing Notes
                    </label>
                    <textarea
                      value={blueprint.editingNotes}
                      onChange={(e) => handleBlueprintChange(e, "editingNotes")}
                      placeholder="Overall cutting pace, transition details, subtitling instructions..."
                      className="w-full p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl h-28 text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium resize-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Custom Scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
  `,
        }}
      />
    </div>
  );
}
