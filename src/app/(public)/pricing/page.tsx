"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { 
  Check, Bolt, MessageCircle, Video, 
  DollarSign, FileText, Star
} from "lucide-react";

export default function PricingPage() {
  return (
    /* FIXED: Changed to bg-white and dark:bg-gray-950 */
    <main className="min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Transparent Pricing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">No Surprises.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Stop paying for hours. Start paying for assets.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Card 1: Single Ad */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 transition-transform hover:-translate-y-1 duration-300 relative group">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The Single Ad</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">$1,000</span>
                <span className="ml-2 text-base font-medium text-gray-500 dark:text-gray-400">/ video</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "1 High-Converting Video Ad (15-30s)",
                "Scriptwriting & Storyboard Included",
                "Professional Voiceover (AI or Human)",
                "2 Rounds of Revisions",
                "Delivered in 16:9 OR 9:16 Vertical"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-gray-400 dark:text-gray-500 mr-3 w-5 h-5" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-transparent text-slate-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Start Project
            </button>
          </div>

          {/* Card 2: Growth Stack (Popular) */}
          <div className="relative bg-white dark:bg-gray-900 border-2 border-indigo-500 dark:border-indigo-500 rounded-xl p-8 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 transform md:-translate-y-4">
            <div className="absolute -top-4 right-6 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Most Popular
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The Growth Stack</h3>
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-1 rounded">Save 25%</span>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">$3,000</span>
                <span className="ml-2 text-base font-medium text-gray-500 dark:text-gray-400">/ month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "4 Videos (15-30s each) Ads/mo",
                "3 Rounds of Revisions/ Ad",
                "Priority Production Queue",
                "A/B Testing Variations (Different Hooks)",
                "Source Files Included (Pr / Ae)",
                "Mix & Match Formats (Vertical + Landscape)"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-indigo-500 mr-3 w-5 h-5" />
                  <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-all shadow-lg hover:shadow-indigo-500/50">
              Start Growth Project
            </button>
          </div>

        </div>

        {/* Comparison Table */}
        <div className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Why Founders choose StackCuts
          </h2>
          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider">Feature</div>
              <div className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                StackCuts
              </div>
              <div className="font-medium text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider">Traditional Agencies</div>
            </div>
            
            {/* Row 1 */}
            <div className="grid grid-cols-3 p-6 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
              <div className="flex items-center text-sm font-medium text-slate-900 dark:text-white">Delivery Speed</div>
              <div className="flex items-center text-sm font-bold text-green-600 dark:text-green-400">
                <Bolt className="w-4 h-4 mr-2" />
                3-5 Days
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Star className="w-4 h-4 mr-2" />
                Unpredictable
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 p-6 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
              <div className="flex items-center text-sm font-medium text-slate-900 dark:text-white">Communication</div>
              <div className="flex items-center text-sm font-bold text-green-600 dark:text-green-400">
                <MessageCircle className="w-4 h-4 mr-2" />
                Dedicated Chat
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Video className="w-4 h-4 mr-2" />
                Zoom Calls
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 p-6 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
              <div className="flex items-center text-sm font-medium text-slate-900 dark:text-white">Cost Model</div>
              <div className="flex items-center text-sm font-bold text-green-600 dark:text-green-400">
                <DollarSign className="w-4 h-4 mr-2" />
                Flat Fee
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FileText className="w-4 h-4 mr-2" />
                Hourly / Retainer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Consistent Style */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            
            {/* Col 1: Logo & Socials */}
            <div className="col-span-1 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded border border-gray-900 dark:border-white flex items-center justify-center transform rotate-45">
                  <div className="w-3 h-3 bg-gray-900 dark:bg-white transform -rotate-45"></div>
                </div>
                <span className="font-bold text-lg text-slate-900 dark:text-white">StackCuts</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Streamlining ad creation from project studio management to final delivery.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
                </a>
              </div>
            </div>

            {/* Col 2: Company */}
            <div className="flex flex-col items-center">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">About Us</a></li>
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">Services</a></li>
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="flex flex-col items-center">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">Video Ads</a></li>
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">Graphic Design</a></li>
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">Strategy</a></li>
              </ul>
            </div>

            {/* Col 4: Resources */}
            <div className="flex flex-col items-center">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">Support</a></li>
                <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">FAQ</a></li>
              </ul>
            </div>

          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
            <p className="text-center text-xs text-gray-400 dark:text-gray-500">
              © 2026 StackCuts. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}