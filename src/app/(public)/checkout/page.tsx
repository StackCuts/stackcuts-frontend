"use client";

import React from "react";
import { 
  Film, CreditCard, ShieldCheck, 
  CheckCircle2, ArrowLeft, Lock
} from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans">
      
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-4 px-6 md:px-12 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-indigo-600">
              <Film className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">StackCuts</span>
          </Link>
          <Link href="/start-project" className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 space-y-10">
            <header>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Secure Checkout</h1>
            </header>

            {/* Step 1: Account */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-bold text-slate-700 dark:text-slate-300">1</span>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Create your account</h2>
              </div>
              <div className="ml-9 space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-gray-300" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="alex@example.com" 
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none transition-colors dark:text-white placeholder:text-gray-400" 
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">We'll send your receipt and project login here.</p>
              </div>
            </section>

            {/* Step 2: Payment Method */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-bold text-slate-700 dark:text-slate-300">2</span>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Payment Details</h2>
              </div>
              <div className="ml-9 space-y-6">
                <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit">
                  <button className="px-6 py-2 text-sm font-medium rounded-md bg-white dark:bg-gray-700 text-indigo-600 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-600 transition-all">Card</button>
                  <button className="px-6 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">PayPal</button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">Card Information</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CreditCard className="text-gray-400 w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="1234 5678 1234 5678" 
                        className="block w-full pl-10 py-3 rounded-t-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none dark:text-white placeholder:text-gray-400" 
                      />
                    </div>
                    <div className="flex -mt-px">
                      <div className="flex-1 min-w-0">
                        <input 
                          type="text" 
                          placeholder="MM / YY" 
                          className="block w-full py-3 px-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none rounded-bl-lg border-t-0 border-r-0 dark:text-white placeholder:text-gray-400" 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <input 
                          type="text" 
                          placeholder="CVC" 
                          className="block w-full py-3 px-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none rounded-br-lg border-t-0 dark:text-white placeholder:text-gray-400" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3: Billing */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-bold text-slate-700 dark:text-slate-300">3</span>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Billing Details</h2>
              </div>
              <div className="ml-9 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300" htmlFor="billing-name">Name on card</label>
                    <input 
                      type="text" 
                      id="billing-name" 
                      placeholder="John Doe" 
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none transition-colors dark:text-white placeholder:text-gray-400" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300" htmlFor="zip">ZIP Code</label>
                    <input 
                      type="text" 
                      id="zip" 
                      placeholder="90210" 
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none transition-colors dark:text-white placeholder:text-gray-400" 
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* --- DESKTOP BUTTON LOCATION (Hidden on Mobile) --- */}
            <div className="ml-9 pt-4 hidden lg:block">
              <PaymentActions />
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Order Summary Card */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 space-y-8 lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Order Summary</h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Single Ad</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Premium animation with 4k delivery</p>
                  </div>
                  <span className="font-medium text-slate-900 dark:text-white">$1,000.00</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>Less: Balance Due on Delivery</span>
                  <span className="text-green-600 dark:text-green-400">-$500.00</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex justify-between items-end">
                  <span className="text-slate-700 dark:text-gray-300 font-medium">Due Today (50% Deposit):</span>
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">$500.00</span>
                </div>
              </div>

              <div className="pt-4 flex items-start gap-3 bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-slate-900 dark:text-white">100% Money Back Guarantee</span> on Script Approval. We're confident you'll love it.
                </p>
              </div>
            </div>

            {/* --- MOBILE BUTTON LOCATION (Hidden on Desktop) --- */}
            {/* This ensures flow is: Info -> Summary -> Button on mobile */}
            <div className="block lg:hidden">
               <PaymentActions />
            </div>

          </div>

        </div>
      </main>

      <footer className="mt-auto py-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-400 dark:text-gray-600 text-sm">© 2026 StackCuts Video Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Helper Component for the Buttons (to avoid code duplication)
function PaymentActions() {
  return (
    <>
      <div className="mb-4 flex items-center gap-2">
        <input 
          type="checkbox" 
          id="agreement" 
          className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 bg-transparent" 
        />
        <label className="text-xs text-gray-500 dark:text-gray-400 cursor-pointer select-none" htmlFor="agreement">I agree to the Service Agreement</label>
      </div>
      
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
        <Lock className="w-5 h-5" />
        Pay $500.00 Deposit
      </button>
      
      <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
        <ShieldCheck className="w-4 h-4" />
        Payments processed securely by Stripe
      </p>
    </>
  );
}