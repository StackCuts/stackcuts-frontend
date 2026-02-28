/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Download,
  Sparkles,
  CheckCircle,
  Copy,
  Clapperboard,
  ArrowLeft,
  Bell,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function FinalDeliveryPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [projectData, setProjectData] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!id) return;

    const unsubscribe = onSnapshot(doc(db, "projects", id), (docSnap) => {
      if (docSnap.exists()) {
        const pData = docSnap.data();
        if (pData.status !== "completed") {
          // Security Check: Kick them back to dashboard if not completed
          router.push("/dashboard");
        } else {
          setProjectData({ id: docSnap.id, ...pData });
        }
      } else {
        router.push("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [id, router]);

  const handleCopyCaption = () => {
    const caption = `🔥 Launching something huge today. Big thanks to the team for helping us bring this vision to life! #SaaS #Growth #Tech`;
    navigator.clipboard.writeText(caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!projectData && mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center font-bold text-slate-500">
        Loading Final Assets...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/40">
      {/* Header - Unified with other Client pages */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shrink-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
                <Clapperboard className="w-5 h-5" />
              </div>
              <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white hidden sm:block">
                StackCuts
              </span>
            </Link>
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 truncate max-w-[150px] sm:max-w-none">
                {projectData?.projectName || "Campaign"}
              </span>
              <span className="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800 hidden sm:block">
                Completed
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              title="Notifications"
              className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative transition-colors"
            >
              <Bell className="w-5 h-5" />
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold text-xs">
              SC
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-12 space-y-12">
        {/* Triumphant Header */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mb-2">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Campaign Unlocked! <span className="text-3xl">🎉</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Your final master files and AI marketing assets are ready for
            download. Time to launch.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Video Download Card */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 mix-blend-overlay"></div>
              <Clapperboard className="w-16 h-16 text-indigo-600/50" />
            </div>
            <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {projectData?.projectName || "Master Video"} (Final Cut)
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  4K Resolution • H.264 MP4 • No Watermark
                </p>
              </div>
              <button
                onClick={() => alert("Downloading High-Res MP4...")}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-3 transition-transform active:scale-95"
              >
                <Download className="w-5 h-5" />
                Download High-Res MP4
              </button>
            </div>
          </section>

          {/* AI Marketing Launchpad Card */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sm:p-8 space-y-8">
            <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                AI Marketing Launchpad
              </h2>
            </div>

            {/* Suggested Targeting */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Suggested Targeting (From Brief)
              </h3>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {projectData?.targetAudience ||
                    "Tech founders, SaaS enthusiasts, B2B executives aged 25-45."}
                </p>
              </div>
            </div>

            {/* Social Caption */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Optimized Social Caption
                </h3>
                <button
                  onClick={handleCopyCaption}
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1.5 text-xs font-bold transition-colors"
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 italic border-l-4 border-l-indigo-500">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  "🔥 Launching something huge today. Big thanks to the team for
                  helping us bring this vision to life! #SaaS #Growth #Tech"
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-400 text-center font-medium">
                Use these assets to maximize your ROAS across Meta and TikTok.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Theme Toggle */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          title="Toggle Theme"
          className="fixed bottom-6 right-6 h-12 w-12 bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-900 dark:text-white hover:scale-110 transition-transform z-[60]"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
}
