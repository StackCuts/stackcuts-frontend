/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Lock, Check, Moon, Sun, Clapperboard, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

export default function UnlockPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [projectData, setProjectData] = useState<any>(null);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!id) return;

    const unsubscribe = onSnapshot(doc(db, "projects", id), (docSnap) => {
      if (docSnap.exists()) {
        setProjectData({ id: docSnap.id, ...docSnap.data() });
      }
    });

    return () => unsubscribe();
  }, [id]);

  const handleFinalPayment = async () => {
    if (!id) return;
    setIsPaying(true);
    try {
      // Process mock payment logic here...
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate gateway delay

      await updateDoc(doc(db, "projects", id), {
        status: "completed",
      });
      router.push(`/final/${id}`);
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment processing failed. Please try again.");
      setIsPaying(false);
    }
  };

  if (!projectData && mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center font-bold text-slate-500">
        Loading Secure Checkout...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/40">
      {/* Minimal Navigation */}
      <nav className="w-full py-6 px-4 sm:px-8 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link
            href="/review"
            title="Back to Review"
            className="text-gray-400 hover:text-indigo-600 transition-colors p-2 -ml-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/dashboard" className="flex items-center gap-2">
            <Clapperboard className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              StackCuts
            </span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 md:py-20">
        <div className="max-w-5xl w-full">
          {/* Header Area */}
          <header className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Unlock Final Files & AI Assets
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
              Pay the remaining balance to instantly access your non-watermarked
              video and AI Marketing Launchpad.
            </p>
          </header>

          {/* Checkout Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column (Payment Summary) */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6">
                Payment Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">
                    Total Project Price
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white">
                    $499.00
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">
                    Less: Deposit Paid
                  </span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    -$249.50
                  </span>
                </div>
                <hr className="border-gray-100 dark:border-gray-800" />
                <div className="flex justify-between items-center py-2">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    BALANCE DUE NOW
                  </span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    $249.50
                  </span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Payment Method
                </label>
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded flex items-center justify-center">
                      <span className="text-[10px] font-bold italic text-blue-800 dark:text-blue-400">
                        VISA
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Visa ending in 1234
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Expires 12/26
                      </p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors">
                    Edit
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleFinalPayment}
                disabled={isPaying}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 group active:scale-[0.98] disabled:opacity-50"
              >
                {isPaying ? (
                  "Processing..."
                ) : (
                  <>
                    <Lock className="w-5 h-5" />I Have Sent Final Transfer
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-5 leading-relaxed">
                Securely processed via Stripe.
                <br className="sm:hidden" /> Instant access granted upon
                successful payment.
              </p>
            </div>

            {/* Right Column (Asset Preview) */}
            <div className="space-y-8">
              {/* Visual Preview Box */}
              <div className="relative group">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl relative flex items-center justify-center">
                  {/* Placeholder for blurred video thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 opacity-80 blur-md scale-110"></div>

                  {/* Lock Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="bg-white/20 dark:bg-black/40 backdrop-blur-md p-5 rounded-full border border-white/30 dark:border-gray-700 shadow-2xl">
                      <Lock className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="px-2 sm:px-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {projectData?.projectName || "Campaign"}{" "}
                    <span className="text-gray-500 font-medium">
                      (Final Master)
                    </span>
                  </h3>
                  <span className="w-fit px-2.5 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                    LOCKED
                  </span>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Included in this Unlock
                  </h4>
                  <ul className="space-y-5">
                    {[
                      {
                        title: "High-quality master video",
                        desc: "4K resolution, No Watermarks, Pro-Res & MP4 formats.",
                      },
                      {
                        title: "Full Commercial Usage License",
                        desc: "Perpetual rights for digital advertising and social media.",
                      },
                      {
                        title: "AI Marketing Launchpad",
                        desc: "Optimized captions for FB, Instagram, and TikTok.",
                      },
                      {
                        title: "Suggested Media Buying Data",
                        desc: "Audience interest targeting and bid strategy guide.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-0.5 flex-shrink-0 w-6 h-6 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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

      {/* Footer Minimal */}
      <footer className="py-8 text-center text-gray-400 dark:text-gray-500 text-sm mt-auto border-t border-gray-200 dark:border-gray-800">
        <p>© 2026 StackCuts Video Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}
