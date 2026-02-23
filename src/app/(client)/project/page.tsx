"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
Bell, UploadCloud, Image as ImageIcon, Video,
CheckCircle2, Sparkles, ArrowRight, Play, Settings, Maximize,
ZoomIn, RotateCcw, Filter, AtSign, Check, Clock, Rocket,
Eye, Zap, Search, Copy, Star, Sun, Moon, Download, Layers
} from "lucide-react";
import Link from "next/link";

// ==========================================
// SUB-COMPONENTS & VIEW FUNCTIONS
// ==========================================

const Header = ({ activeStep, setActiveStep, steps }: { activeStep: number, setActiveStep: (n: number) => void, steps: string[] }) => (
  <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shrink-0">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      
      {/* Left: Logo & Project Context */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white hidden sm:block">StackCuts</span>
          </Link>
          <div className="h-4 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 truncate max-w-[150px] md:max-w-none">Summer SaaS Campaign</span>
            {activeStep === 4 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 hidden lg:block">Completed</span>
            )}
          </div>
        </div>

      {/* Interactive Stepper */}
      <nav className="hidden lg:flex items-center gap-4 flex-1 justify-center max-w-lg mx-8">
        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isCompleted = stepNum < activeStep;
          const isActive = stepNum === activeStep;
          
          return (
            <React.Fragment key={step}>
              <div 
                onClick={() => setActiveStep(stepNum)}
                className={`flex items-center gap-2 cursor-pointer transition-all hover:opacity-80 ${isActive ? 'border-b-2 border-indigo-600 pb-1 translate-y-[2px]' : (isCompleted ? '' : 'opacity-50')}`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <span className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold ${isActive ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-200 dark:bg-gray-800 text-gray-500'}`}>
                    {stepNum}
                  </span>
                )}
                <span className={`text-xs font-bold ${isActive ? 'text-slate-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                  {step}
                </span>
              </div>
              {idx < steps.length - 1 && <div className={`h-px flex-1 mx-2 ${isCompleted ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-gray-200 dark:bg-gray-800'}`}></div>}
            </React.Fragment>
          );
        })}
      </nav>

      {/* Right: Search & Profile */}
      <div className="flex items-center gap-4">
        {activeStep === 4 && (
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="pl-9 pr-4 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-indigo-600 outline-none w-48 transition-all dark:text-white" 
            />
          </div>
        )}
        <button 
          title="Notifications"
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-950"></span>
        </button>
        <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold text-xs">
          SC
        </div>
      </div>
    </div>
  </header>
);

const BriefingView = ({ onNext, selectedFormat, setSelectedFormat }: { onNext: () => void, selectedFormat: string, setSelectedFormat: (s: string) => void }) => (
  <main className="flex-1 flex flex-col md:flex-row max-w-[1440px] mx-auto w-full overflow-hidden relative">
    <section className="flex-1 md:w-[60%] p-6 md:p-12 bg-white dark:bg-gray-950/40 overflow-y-auto border-r border-gray-200 dark:border-gray-800 custom-scrollbar">
      <div className="max-w-2xl mx-auto space-y-10 pb-20 md:pb-0">
        <header>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Asset Library</h1>
          <p className="text-gray-500 dark:text-gray-400">Upload your core brand files. We&apos;ll handle the rest.</p>
        </header>
        <div className="group relative rounded-xl border-2 border-dashed border-indigo-600/30 dark:border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-900/10 p-12 transition-all hover:border-indigo-600/60 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
            <UploadCloud className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Drop your logos, fonts, UI screenshots, or screencasts here.</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">No raw footage needed. Our AI handles the script and the UGC hook.</p>
          <button title="Browse Files" type="button" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/20 hover:brightness-110 transition-all pointer-events-none">
            Browse Files
          </button>
          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" title="Upload files" />
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Recent Uploads</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 shrink-0 rounded bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">brand_logo.png</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2.4 MB</p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 shrink-0 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                  <Video className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">dashboard_screencast.mp4</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">45.8 MB</p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <aside className="flex-1 md:w-[40%] bg-gray-50 dark:bg-gray-900/30 relative flex flex-col h-[60vh] md:h-full border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 shrink-0">
      <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 pb-32 custom-scrollbar">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">Project Brief</h2>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider border border-indigo-600/20">
            <Sparkles className="w-3 h-3" /> AI-Enhanced
          </span>
        </div>
        <div className="space-y-10">
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Basics</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="project-name" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Project Name</label>
                <input id="project-name" type="text" value="Summer SaaS Campaign" disabled className="w-full bg-gray-100 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-500 dark:text-gray-400 font-medium px-4 py-2.5 outline-none" />
              </div>
              <div>
                <label htmlFor="landing-page" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Landing Page URL</label>
                <input id="landing-page" type="text" value="https://example.com/start" disabled className="w-full bg-gray-100 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-500 dark:text-gray-400 font-medium px-4 py-2.5 outline-none" />
              </div>
            </div>
          </section>
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Strategic Direction</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="target-audience" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Target Audience</label>
                <textarea id="target-audience" rows={2} placeholder="Marketing Managers in Series A Startups" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 outline-none px-4 py-2.5 resize-none dark:text-white"></textarea>
              </div>
              <div>
                <label htmlFor="brand-voice" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Brand Voice</label>
                <select id="brand-voice" title="Brand Voice" className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 outline-none px-4 py-2.5 dark:text-white">
                  <option>Casual &amp; Creator-Style</option>
                  <option>Professional &amp; Authoritative</option>
                  <option>Edgy &amp; Disruptive</option>
                </select>
              </div>
            </div>
          </section>
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Deliverable Format</h3>
            </div>
            <div className="space-y-3">
              {[{ id: 'vertical', label: 'Vertical (9:16 - TikTok/Reels)' }, { id: 'landscape', label: 'Landscape (16:9)' }].map((option) => (
                <label key={option.id} onClick={() => setSelectedFormat(option.id)} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${selectedFormat === option.id ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-500' : 'border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900'}`}>
                  <input type="radio" name="format" checked={selectedFormat === option.id} readOnly className="text-indigo-600 focus:ring-indigo-600" />
                  <span className={`text-sm ${selectedFormat === option.id ? 'font-semibold text-slate-900 dark:text-white' : 'font-medium text-gray-600'}`}>{option.label}</span>
                </label>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-gray-50 via-gray-50 dark:from-gray-900/90 dark:via-gray-900/90 to-transparent">
        <button onClick={onNext} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold text-base shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group">
          Submit Brief & Start AI Production <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </aside>
  </main>
);

const ProductionView = ({ onNext }: { onNext: () => void }) => (
  <main className="flex-grow max-w-7xl mx-auto w-full p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-2 overflow-y-auto custom-scrollbar">
    <style dangerouslySetInnerHTML={{__html: `
      .waveform { display: flex; align-items: center; gap: 4px; height: 48px; }
      .bar { width: 6px; background-color: #4f46e5; border-radius: 99px; animation: pulse-glow 1.5s ease-in-out infinite; }
      .bar:nth-child(1) { height: 40%; animation-delay: 0s; }
      .bar:nth-child(2) { height: 70%; animation-delay: 0.1s; }
      .bar:nth-child(3) { height: 100%; animation-delay: 0.2s; }
      .bar:nth-child(4) { height: 70%; animation-delay: 0.3s; }
      .bar:nth-child(5) { height: 40%; animation-delay: 0.4s; }
      @keyframes pulse-glow { 0%, 100% { transform: scaleY(1); opacity: 0.5; } 50% { transform: scaleY(1.15); opacity: 1; } }
      .spinner { border: 2px solid rgba(79, 70, 229, 0.1); border-top: 2px solid #4f46e5; border-radius: 50%; width: 20px; height: 20px; animation: spin 1s linear infinite; }
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    `}} />
    <section className="lg:col-span-7 flex flex-col gap-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-10 flex flex-col items-center text-center relative">
        <div className="waveform mb-8">
          <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight text-slate-900 dark:text-white">Assembling your hybrid ad.</h2>
        <div className="w-full max-w-sm text-left space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white"><Check className="w-3.5 h-3.5" /></div>
            <span className="text-gray-500 text-sm font-medium">1. Strategic Brief Analyzed</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="spinner"></div>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">2. AI Hook Generation & Scripting</span>
          </div>
          <div className="flex items-center gap-4 opacity-40">
            <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
            <span className="text-gray-600 text-sm font-medium">3. Screencast & Montage Assembly</span>
          </div>
          <div className="flex items-center gap-4 opacity-40">
            <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
            <span className="text-gray-600 text-sm font-medium">4. Motion Graphics & Final Polish</span>
          </div>
        </div>
        <div className="mt-12 w-full pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center gap-3">
          <Clock className="text-gray-400 w-5 h-5" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Estimated Delivery: <span className="text-slate-900 dark:text-white font-bold ml-1">48 Hours</span></span>
        </div>
        <button onClick={onNext} className="mt-8 text-xs text-gray-400 hover:text-indigo-600 underline"> (Simulate Production Complete) </button>
      </div>
    </section>
    <aside className="lg:col-span-5 bg-gray-50/50 dark:bg-gray-900/30 rounded-xl p-6 flex flex-col gap-6 border border-gray-100 dark:border-gray-800">
      <h3 className="font-bold text-slate-900 dark:text-white text-lg">Campaign Status</h3>
      <div className="space-y-4">
        {[ { icon: Rocket, title: "Fast Turnaround", text: "Your first draft will be ready within 48 hours." }, { icon: Eye, title: "The Review Process", text: "You'll leave frame-accurate feedback in the next step." } ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-400"><item.icon className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  </main>
);

const ReviewView = ({ onNext }: { onNext: () => void }) => (
  <main className="flex flex-col lg:flex-row flex-1 overflow-hidden max-w-[1440px] mx-auto w-full">
    <section className="w-full lg:w-[65%] flex flex-col bg-gray-50 dark:bg-black/20 p-4 md:p-8 overflow-y-auto custom-scrollbar border-r border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        <div className="relative group aspect-video bg-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 opacity-80"></div>
          <button title="Play Video" className="z-10 w-20 h-20 bg-indigo-600/90 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Play className="w-8 h-8 ml-1 fill-current" /></button>
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90">
            <div className="flex items-center justify-between text-white text-sm">
              <span className="font-mono">0:12 / 2:45</span>
              <div className="flex gap-4">
                <Settings className="w-5 h-5 cursor-pointer" /> <Maximize className="w-5 h-5 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Video Timeline</h3>
            <button title="Zoom In" className="p-1 hover:bg-gray-100 rounded text-gray-400"><ZoomIn className="w-4 h-4" /></button>
          </div>
          <div className="relative h-12 flex items-center">
            <div className="absolute w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
            <div className="absolute w-[45%] h-2 bg-indigo-600/40 rounded-full"></div>
            <div className="absolute left-[12%] w-1 h-6 bg-indigo-600 rounded-full -translate-y-2 border-2 border-white dark:border-gray-950"></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 font-semibold px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-white transition-all">
            <RotateCcw className="w-4 h-4" /> Request Revisions
          </button>
          <button onClick={onNext} className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Approve & Pay $249.50
          </button>
        </div>
      </div>
    </section>
    <aside className="w-full lg:w-[35%] bg-gray-50 dark:bg-gray-900/30 flex flex-col h-[50vh] lg:h-full border-t lg:border-t-0 border-gray-200 dark:border-gray-800">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-gray-900">
        <h2 className="font-bold text-lg text-slate-900 dark:text-white">Comments</h2>
        <button title="Filter" className="text-gray-500"><Filter className="w-5 h-5" /></button>
      </div>
      <div className="p-6">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <textarea className="w-full p-4 text-sm resize-none h-24 bg-transparent dark:text-white" placeholder="Leave a note at 0:12..."></textarea>
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex gap-2">
              <button title="Attach Image" className="text-gray-400 hover:text-indigo-600"><ImageIcon className="w-4 h-4" /></button>
              <button title="Mention" className="text-gray-400 hover:text-indigo-600"><AtSign className="w-4 h-4" /></button>
            </div>
            <button className="bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg">Post</button>
          </div>
        </div>
      </div>
    </aside>
  </main>
);

const FinalView = () => (
  <main className="flex-grow max-w-[1440px] mx-auto w-full p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-2 overflow-y-auto custom-scrollbar">
    <section className="lg:col-span-8 space-y-8">
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="aspect-video relative group bg-black flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
            <button title="Play Final Video" className="z-10 w-24 h-24 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/20">
                <Play className="w-10 h-10 ml-1 fill-current text-white" />
            </button>
            <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">FINAL MASTER</span>
                <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10">4K PRO-RES</span>
            </div>
        </div>
        <div className="p-6 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
            <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">Summer SaaS Campaign</h2>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest font-bold text-[10px]">Ready for distribution</p>
            </div>
            <div className="flex gap-3">
                <button title="Download All" className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-slate-900 dark:text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all border border-gray-200 dark:border-gray-700">
                    <Download className="w-4 h-4" /> Download All
                </button>
                <button title="Send to Platforms" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/20">
                    <Rocket className="w-4 h-4" /> Send to Platforms
                </button>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 p-6 rounded-2xl flex items-center gap-5">
              <div className="h-14 w-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20"><Check className="w-8 h-8 stroke-[3]" /></div>
              <div><h3 className="font-bold text-emerald-900 dark:text-emerald-400">Files Unlocked</h3><p className="text-sm text-emerald-700 dark:text-emerald-500/80">Watermark removed automatically.</p></div>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl flex items-center gap-5 shadow-sm">
                <div className="h-14 w-14 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center"><Zap className="w-8 h-8" /></div>
                <div><h3 className="font-bold text-slate-900 dark:text-white">A/B Ready</h3><p className="text-sm text-gray-500">Includes 3 scroll-stopping hooks.</p></div>
          </div>
      </div>
    </section>
    <aside className="lg:col-span-4 space-y-6">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-indigo-50/50 to-white dark:from-indigo-900/20 dark:to-gray-900">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">🚀 AI Marketing Launchpad</h2>
          <p className="text-sm text-gray-500 mt-1">Your plug-and-play assets for ad platforms.</p>
        </div>
        <div className="p-5 space-y-5">
          {[
            { title: "📘 Facebook & IG Captions", text: "Stop wasting hours on manual reports. Automate your agency reporting in 1-click. Try it free today 👇" },
            { title: "🎵 TikTok & Reels Captions", text: "POV: You finally found the tool that does your job for you 🤯 #agencylife" },
            { title: "🎯 Suggested Targeting", text: "Interests: 'Digital Marketing', 'Shopify', 'SaaS Founders'. Age: 25-45. Placement: Mobile Feed.", isMono: true }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">{item.title}</span>
              <div className="relative group">
                <div className={`bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm text-gray-600 dark:text-gray-300 pr-10 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors ${item.isMono ? 'font-mono text-xs leading-relaxed' : ''}`}>
                  {item.text}
                </div>
                <button title="Copy Text" className="absolute top-2 right-2 p-1.5 rounded-md text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"> <Copy className="w-4 h-4" /> </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">How did we do?</h3>
        <div className="flex gap-2 mb-6">
          {[1,2,3,4,5].map(star => <Star key={star} className="w-8 h-8 text-gray-200 dark:text-gray-700 hover:text-amber-400 hover:fill-current cursor-pointer transition-colors" />)}
        </div>
        <textarea className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm min-h-[100px] outline-none mb-4 transition-focus focus:ring-2 focus:ring-indigo-600" placeholder="Tell us what you liked about your ad..."></textarea>
        <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl text-sm font-bold hover:opacity-90 active:scale-95 transition-all">Submit Review</button>
      </div>
    </aside>
  </main>
);

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ProjectWorkspaceSPA() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [activeStep, setActiveStep] = useState(1);
const [selectedFormat, setSelectedFormat] = useState("vertical");

useEffect(() => {
  const timer = setTimeout(() => setMounted(true), 0);
  return () => clearTimeout(timer);
}, []);

const steps = ["Briefing", "Production", "Review", "Final"];

return (
<div className={`flex flex-col h-screen bg-gray-50 dark:bg-gray-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/40 transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
  <Header activeStep={activeStep} setActiveStep={setActiveStep} steps={steps} />

  {activeStep === 1 && <BriefingView onNext={() => setActiveStep(2)} selectedFormat={selectedFormat} setSelectedFormat={setSelectedFormat} />}
  {activeStep === 2 && <ProductionView onNext={() => setActiveStep(3)} />}
  {activeStep === 3 && <ReviewView onNext={() => setActiveStep(4)} />}
  {activeStep === 4 && <FinalView />}

  {/* Global Floating Dark Mode Toggle */}
      {mounted ? (
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          title="Toggle Theme"
          className="fixed bottom-6 right-6 h-12 w-12 bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-900 dark:text-white hover:scale-110 transition-transform z-[100]"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      ) : (
        /* Empty placeholder for server render to fix the hydration error */
        <div className="fixed bottom-6 right-6 h-12 w-12 bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 z-[100]"></div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
        .transition-focus { transition: box-shadow 0.2s, border-color 0.2s; }
      `}} />
    </div>
  );
}