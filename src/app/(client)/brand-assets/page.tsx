/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Layers,
  LayoutDashboard,
  Folders,
  CreditCard,
  Settings,
  Sun,
  Moon,
  Bell,
  Menu,
  Palette,
  BrainCircuit,
  Play,
  UploadCloud,
  Plus,
  Edit2,
  ChevronDown,
  Video,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { db, storage } from "@/lib/firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuth } from "@/lib/AuthContext";

export default function BrandAssetsPage() {
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [primaryColor, setPrimaryColor] = useState("#4F46E5");
  const [darkColor, setDarkColor] = useState("#111827");
  const [doNotSayList, setDoNotSayList] = useState("");
  const [brandVoice, setBrandVoice] = useState("Professional & Trustworthy");
  const [primaryLogoUrl, setPrimaryLogoUrl] = useState("");
  const [secondaryLogoUrl, setSecondaryLogoUrl] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState<
    "primary" | "secondary" | null
  >(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchBrandVault() {
      if (!user?.uid) return;
      try {
        const docRef = doc(db, "brand_vault", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.brandColors) {
            setPrimaryColor(data.brandColors.primary || "#4F46E5");
            setDarkColor(data.brandColors.dark || "#111827");
          }
          if (data.doNotSayList !== undefined)
            setDoNotSayList(data.doNotSayList);
          if (data.brandVoice) setBrandVoice(data.brandVoice);
          if (data.primaryLogoUrl) setPrimaryLogoUrl(data.primaryLogoUrl);
          if (data.secondaryLogoUrl) setSecondaryLogoUrl(data.secondaryLogoUrl);
        }
      } catch (error) {
        console.error("Error fetching brand vault:", error);
      }
    }
    fetchBrandVault();
  }, [user]);

  const handleSaveGuidelines = async () => {
    if (!user?.uid) return;
    setIsSaving(true);
    try {
      const docRef = doc(db, "brand_vault", user.uid);
      await setDoc(
        docRef,
        {
          brandColors: {
            primary: primaryColor,
            dark: darkColor,
          },
          doNotSayList,
          brandVoice,
          primaryLogoUrl,
          secondaryLogoUrl,
          updatedAt: new Date(),
        },
        { merge: true },
      );
    } catch (error) {
      console.error("Error saving brand vault:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "primary" | "secondary",
  ) => {
    if (!user?.uid || !e.target.files?.length) return;
    const file = e.target.files[0];
    setUploadingLogo(type);

    try {
      const storageRef = ref(storage, `brand_assets/${user.uid}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          console.error("Upload error:", error);
          setUploadingLogo(null);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          if (type === "primary") {
            setPrimaryLogoUrl(downloadURL);
          } else {
            setSecondaryLogoUrl(downloadURL);
          }

          const docRef = doc(db, "brand_vault", user.uid);
          await setDoc(
            docRef,
            {
              [type === "primary" ? "primaryLogoUrl" : "secondaryLogoUrl"]:
                downloadURL,
              updatedAt: new Date(),
            },
            { merge: true },
          );

          setUploadingLogo(null);
        },
      );
    } catch (error) {
      console.error("Error setting up upload:", error);
      setUploadingLogo(null);
    }
  };

  return (
    <div className="flex bg-gray-50 dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-slate-100">
      {/* Desktop Sidebar */}
      <aside
        className={`w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col h-screen sticky top-0 shrink-0 hidden md:flex z-20`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <Layers className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              StackCuts
            </h1>
          </div>

          <nav className="space-y-1.5">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            {/* Active State */}
            <Link
              href="/brand-assets"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold text-sm transition-colors bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-r-4 border-indigo-600"
            >
              <Folders className="w-5 h-5" />
              Brand Assets
            </Link>
            <Link
              href="/billing"
              className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all"
            >
              <CreditCard className="w-5 h-5" />
              Billing & Invoices
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg font-medium text-sm transition-all"
            >
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
              <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
                Sarah Chen
              </span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium truncate">
                Growth Engine Plan
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto h-screen relative custom-scrollbar">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 w-7 h-7 rounded-lg flex items-center justify-center">
              <Layers className="text-white w-4 h-4" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              StackCuts
            </h1>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-500"
            title="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="max-w-[1200px] w-full mx-auto p-6 md:p-8 pb-32">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Brand Assets
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl">
                Centralize your visual identity to power AI video generation.
                Consistent inputs yield consistent outputs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {mounted ? (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  title="Toggle Theme"
                  className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              ) : (
                <div className="w-[42px] h-[42px] rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"></div>
              )}
              <button
                className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 relative"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column (60%) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Card 1: The Identity Kit */}
              <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-900/50">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    The Identity Kit
                  </h3>
                  <Palette className="w-5 h-5 text-gray-400" />
                </div>
                <div className="p-6 flex flex-col gap-8">
                  {/* Logos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 relative">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Primary Logo
                      </span>
                      <label className="group relative flex aspect-video cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors bg-gray-50 dark:bg-gray-800/30 overflow-hidden">
                        {uploadingLogo === "primary" ? (
                          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                        ) : primaryLogoUrl ? (
                          <img
                            src={primaryLogoUrl}
                            alt="Primary Logo"
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-2xl opacity-80">
                            SC
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                          <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm">
                            <Edit2 className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                          </div>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, "primary")}
                        />
                      </label>
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Secondary Logo
                      </span>
                      <label className="group relative flex aspect-video cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors bg-gray-50 dark:bg-gray-800/30 overflow-hidden">
                        {uploadingLogo === "secondary" ? (
                          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                        ) : secondaryLogoUrl ? (
                          <img
                            src={secondaryLogoUrl}
                            alt="Secondary Logo"
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <>
                            <Plus className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                            <span className="text-xs text-gray-500 mt-2 font-medium">
                              Upload .SVG or .PNG
                            </span>
                          </>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                          <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm">
                            <Edit2 className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                          </div>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, "secondary")}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Brand Palette
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
                        <style>{`.bg-primary-custom { background-color: ${primaryColor}; }`}</style>
                        <div className="h-8 w-8 rounded-full border border-black/10 dark:border-white/10 shadow-sm bg-primary-custom"></div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-gray-400">
                            Primary
                          </span>
                          <input
                            type="text"
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                            title="Primary Color"
                            className="p-0 border-none bg-transparent text-sm font-mono font-medium text-slate-900 dark:text-white w-20 focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
                        <style>{`.bg-dark-custom { background-color: ${darkColor}; }`}</style>
                        <div className="h-8 w-8 rounded-full border border-black/10 dark:border-white/10 shadow-sm bg-dark-custom"></div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-gray-400">
                            Dark
                          </span>
                          <input
                            type="text"
                            value={darkColor}
                            onChange={(e) => setDarkColor(e.target.value)}
                            title="Dark Color"
                            className="p-0 border-none bg-transparent text-sm font-mono font-medium text-slate-900 dark:text-white w-20 focus:ring-0"
                          />
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group"
                        title="Add Color"
                      >
                        <div className="h-8 w-8 rounded-full border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 bg-gray-50 dark:bg-gray-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          <Plus className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-gray-500">
                            Add Color
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Primary Font
                    </span>
                    <div className="relative">
                      <select
                        title="Primary Font"
                        className="w-full appearance-none rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-3 pl-4 pr-10 text-sm font-medium text-slate-900 dark:text-white focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 shadow-sm"
                      >
                        <option>Inter</option>
                        <option>Roboto</option>
                        <option>Open Sans</option>
                        <option>Upload Custom Font...</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Card 2: Global AI Guardrails */}
              <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-900/50">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Global AI Guardrails
                  </h3>
                  <BrainCircuit className="w-5 h-5 text-gray-400" />
                </div>
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-900 dark:text-white">
                      Brand Voice
                    </label>
                    <div className="relative">
                      <select
                        title="Brand Voice"
                        value={brandVoice}
                        onChange={(e) => setBrandVoice(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-3 pl-4 pr-10 text-sm font-medium text-slate-900 dark:text-white focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 shadow-sm"
                      >
                        <option>Professional & Trustworthy</option>
                        <option>Witty & Playful</option>
                        <option>Innovative & Bold</option>
                        <option>Empathetic & Warm</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-baseline">
                      <label
                        htmlFor="negative-constraints"
                        className="text-sm font-semibold text-slate-900 dark:text-white"
                      >
                        Do Not List (Negative Constraints)
                      </label>
                      <span className="text-xs text-gray-500">
                        AI will avoid these traits
                      </span>
                    </div>
                    <textarea
                      id="negative-constraints"
                      value={doNotSayList}
                      onChange={(e) => setDoNotSayList(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 py-3 px-4 text-sm text-slate-900 dark:text-white placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 resize-none outline-none"
                      placeholder="e.g. low resolution, cartoon style, blurry, distorted text, stock photo look, overly corporate..."
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column (40%) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Card 3: Evergreen Asset Library */}
              <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm h-full flex flex-col">
                <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-900/50">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      Evergreen Asset Library
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-medium">
                      Upload approved B-roll for reuse.
                    </p>
                  </div>
                  <Video className="w-5 h-5 text-gray-400" />
                </div>
                <div className="p-6 flex flex-col gap-6 flex-1">
                  {/* Upload Zone */}
                  <div className="group relative flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 py-8 hover:border-indigo-600 hover:bg-indigo-50 dark:hover:border-indigo-500 dark:hover:bg-indigo-900/10 transition-all">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      MP4, MOV up to 50MB
                    </p>
                    <input
                      title="Upload Asset"
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>

                  {/* Asset Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { format: "MOV", color: "from-blue-500 to-indigo-500" },
                      { format: "MP4", color: "from-emerald-400 to-teal-500" },
                      { format: "MP4", color: "from-purple-500 to-pink-500" },
                      { format: "MOV", color: "from-orange-400 to-red-500" },
                    ].map((asset, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 group shadow-sm"
                      >
                        <div className="absolute top-2 right-2 z-10 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
                          {asset.format}
                        </div>
                        <div
                          className={`w-full h-full bg-gradient-to-br ${asset.color} opacity-80 group-hover:scale-105 transition-transform duration-500`}
                        ></div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <button
                            className="text-white bg-black/50 rounded-full p-2 hover:bg-indigo-600 transition-colors backdrop-blur-md"
                            title="Play Asset"
                          >
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <footer className="fixed bottom-0 right-0 w-full md:w-[calc(100%-16rem)] z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 md:px-8 py-4 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            All changes saved
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button className="px-4 sm:px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors hidden sm:block">
              Preview Assets
            </button>
            <button
              onClick={handleSaveGuidelines}
              disabled={isSaving}
              className="px-5 sm:px-6 py-2.5 rounded-lg bg-indigo-600 text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {isSaving ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </footer>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
  `,
        }}
      />
    </div>
  );
}
