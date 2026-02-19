"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { 
  BookOpen, Lightbulb, Sparkles, 
  ArrowUp, Layers, X, Check,
  Download, Video, Smartphone, 
  Monitor, Film, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AiStoryboardPage() {
  const [activeTab, setActiveTab] = useState<'brainstorm' | 'storyboard'>('brainstorm');
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (!prompt.trim()) {
      setPrompt("I sell a B2B SaaS tool for agency owners...");
    }
    setIsSubmitted(true);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-slate-100 transition-all duration-300 ease-in-out flex flex-col ${isGuidelinesOpen ? 'lg:pr-[400px]' : ''}`}>
      <Navbar />

      {!isSubmitted ? (
        // ==========================================
        // STATE 1: INITIAL INPUT VIEW
        // ==========================================
        <>
          <main className="flex-grow w-full flex flex-col items-center pt-32 px-6 pb-20 max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.15] mb-6">
                Validate Your Idea & Generate a Winning Ad Concept.
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                Enter your product URL or idea below. Our AI will brainstorm the perfect angle and build a high-converting 4-part storyboard.
              </p>
            </div>

            <div className="w-full max-w-3xl">
              <div className="flex justify-end mb-3">
                <button 
                  onClick={() => setIsGuidelinesOpen(!isGuidelinesOpen)}
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  {isGuidelinesOpen ? "Hide Prompt Guidelines" : "View Prompt Guidelines"}
                </button>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none overflow-hidden focus-within:ring-2 focus-within:ring-indigo-600/20 focus-within:border-indigo-600 transition-all">
                <div className="p-2">
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full min-h-[160px] bg-transparent border-0 focus:ring-0 text-lg p-4 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-slate-900 dark:text-white resize-none outline-none" 
                    placeholder="e.g., I sell a SaaS tool that automates SEO..."
                  />
                </div>
                
                <div className="flex items-center justify-between px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex bg-gray-200/50 dark:bg-gray-900/50 p-1 rounded-lg">
                    <button 
                      onClick={() => setActiveTab('brainstorm')}
                      className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm transition-all ${
                        activeTab === 'brainstorm' 
                          ? 'font-semibold bg-indigo-600/10 text-indigo-600 dark:bg-indigo-600/20 shadow-sm' 
                          : 'font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                      }`}
                    >
                      <Lightbulb className="w-4 h-4" /> Brainstorm
                    </button>
                    <button 
                      onClick={() => setActiveTab('storyboard')}
                      className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm transition-all ${
                        activeTab === 'storyboard' 
                          ? 'font-semibold bg-indigo-600/10 text-indigo-600 dark:bg-indigo-600/20 shadow-sm' 
                          : 'font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                      }`}
                    >
                      <Sparkles className="w-4 h-4" /> Storyboard
                    </button>
                  </div>

                  <button 
                    onClick={handleSubmit}
                    aria-label="Generate Ad Concept"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/30"
                  >
                    <ArrowUp className="w-5 h-5 text-white font-bold transition-transform group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        // ==========================================
        // STATE 2: AI RESULT VIEW (Brainstorm OR Storyboard)
        // ==========================================
        <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8 flex flex-col min-h-[calc(100vh-80px)] mt-20">
          
          <div className="flex justify-between items-center mb-6 shrink-0">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {activeTab === 'brainstorm' ? 'Brainstorming Result' : 'Generated Storyboard'}
            </h2>
            <button 
              onClick={() => setIsGuidelinesOpen(!isGuidelinesOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors group"
            >
              <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {isGuidelinesOpen ? "Hide Prompt Guidelines" : "View Prompt Guidelines"}
            </button>
          </div>

          {/* Chat/Result Window */}
          <div className="flex-grow bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-200 dark:border-gray-800 p-4 md:p-8 flex flex-col relative overflow-hidden shadow-sm">
            
            <div className="flex-grow flex flex-col justify-start max-w-4xl mx-auto w-full space-y-8 overflow-y-auto pb-28 pt-4">
              
              {/* --- DYNAMIC CONTENT: BRAINSTORM vs STORYBOARD --- */}
              {activeTab === 'brainstorm' ? (
                // TAB: BRAINSTORM
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Strategy Analysis</h3>
                  </div>

                  <div className="space-y-6 mb-10 pl-2">
                    <div className="flex items-start gap-4">
                      <span className="text-xl mt-0.5 select-none">🎯</span>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block mb-1">The Hook Angle</span>
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">Call out the specific hours wasted on client reporting every week.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-xl mt-0.5 select-none">⚠️</span>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block mb-1">The Pain Point</span>
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">Agitate the fear of client churn due to sloppy, manual spreadsheet reports that take forever to update.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-xl mt-0.5 select-none">✅</span>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block mb-1">The Solution</span>
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">Position your 1-click dashboard as the ultimate time-saver that makes agencies look professional instantly.</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 hover:text-indigo-600 font-medium text-sm transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                      <Download className="w-5 h-5" /> Download Strategy (PDF)
                    </button>
                    <Link href="/start-project" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0">
                      <Video className="w-5 h-5" /> Turn this into a video - $499
                    </Link>
                  </div>
                </motion.div>
              ) : (
                // TAB: STORYBOARD
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 mb-8">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-900 dark:text-white">1. The Hook (UGC)</h3>
                        <div className="flex size-8 items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          <Smartphone className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="h-px w-full bg-gray-100 dark:bg-gray-800"></div>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        Creator looking at camera: "If you struggle with manual data entry, stop scrolling right now..."
                      </p>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-900 dark:text-white">2. The Problem (Screencast)</h3>
                        <div className="flex size-8 items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          <Monitor className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="h-px w-full bg-gray-100 dark:bg-gray-800"></div>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        Screen recording showing a messy spreadsheet and the frustrating old way of doing things.
                      </p>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-900 dark:text-white">3. The Solution (Montage)</h3>
                        <div className="flex size-8 items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          <Film className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="h-px w-full bg-gray-100 dark:bg-gray-800"></div>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        Fast-paced, high-energy B-roll showing the dashboard populating instantly with 1 click.
                      </p>
                    </div>
                    {/* Card 4 */}
                    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-900 dark:text-white">4. The CTA (Motion Graphics)</h3>
                        <div className="flex size-8 items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          <Zap className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="h-px w-full bg-gray-100 dark:bg-gray-800"></div>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        Bold text animations on screen: "Automate your workflow. Click the link to start your free trial."
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-800 pt-6">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 hover:text-indigo-600 font-medium text-sm transition-colors px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm">
                      <Download className="w-5 h-5" /> Download Visual Storyboard
                    </button>
                    <Link href="/start-project" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0">
                      <Video className="w-5 h-5" /> Turn this into a video - $499
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Input Bar */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none p-2 pl-6 flex items-center gap-4">
                <div className="flex-grow">
                  <input 
                    type="text" 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your product idea..."
                    aria-label="Enter your product idea"
                    className="bg-transparent border-0 focus:ring-0 text-gray-700 dark:text-gray-300 text-base truncate block w-full outline-none" 
                  />
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="hidden sm:flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full items-center">
                    <button 
                      onClick={() => setActiveTab('brainstorm')}
                      className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs transition-all ${
                        activeTab === 'brainstorm' 
                          ? 'font-semibold bg-indigo-600 text-white shadow-sm' 
                          : 'font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5" /> Brainstorm
                    </button>
                    <button 
                      onClick={() => setActiveTab('storyboard')}
                      className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs transition-all ${
                        activeTab === 'storyboard' 
                          ? 'font-semibold bg-indigo-600 text-white shadow-sm' 
                          : 'font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Storyboard
                    </button>
                  </div>
                  <button 
                    aria-label="Generate Ad Concept"
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-indigo-600/30 mr-1"
                  >
                    <ArrowUp className="w-5 h-5 text-white font-bold transition-transform group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>
      )}

      {/* Footer Branding Context */}
      <footer className="w-full py-8 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center mt-auto">
        <div className="opacity-40 flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-400 dark:bg-gray-600 rounded flex items-center justify-center text-white">
            <Layers className="w-3 h-3" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">StackCuts Lab</span>
        </div>
      </footer>

      {/* --- PROMPT GUIDELINES SLIDE-OUT PANEL --- */}
      <AnimatePresence>
        {isGuidelinesOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGuidelinesOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[90%] max-w-[400px] bg-white dark:bg-gray-900 shadow-2xl z-[70] flex flex-col border-l border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shrink-0">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" /> 
                  Prompt Guidelines
                </h2>
                <button 
                  aria-label="Close Guidelines"
                  onClick={() => setIsGuidelinesOpen(false)} 
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-10">
                <section>
                  <h3 className="text-indigo-600 font-semibold text-lg mb-3">The StackCuts Formula</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    For the best results, tell our AI these 4 things:
                  </p>
                  <ul className="space-y-4">
                    {[
                      { title: 'Target Audience', desc: '(Who is this for?)' },
                      { title: 'The Pain Point', desc: '(What frustrates them?)' },
                      { title: 'The Solution', desc: '(How do you fix it?)' },
                      { title: 'The Offer', desc: '(What is the CTA?)' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400 stroke-[3]" />
                        </div>
                        <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                          {item.title} 
                          <span className="text-gray-400 dark:text-gray-500 font-normal block text-xs mt-0.5">
                            {item.desc}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Example Prompt</h3>
                  <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-xl p-5 italic text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    "I sell a B2B SaaS tool for agency owners. They waste hours on client reporting. My tool automates reports in 1-click. The offer is a 14-day free trial."
                  </div>
                </section>
              </div>

              <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shrink-0">
                <button 
                  onClick={() => setIsGuidelinesOpen(false)} 
                  className="w-full py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm text-sm"
                >
                  Got it, close panel
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}