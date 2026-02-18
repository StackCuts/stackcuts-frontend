"use client";

import React, { useState } from "react";
import { 
  Film, CreditCard, ShieldCheck, 
  CheckCircle2, ArrowLeft, Lock, X
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- SERVICE AGREEMENT MODAL (Updated Content) ---
const ServiceAgreementModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-[640px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="relative px-8 pt-8 pb-6 border-b border-gray-100 dark:border-gray-800 shrink-0">
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Service Agreement</h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">Last Updated: Feb 2026</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="space-y-8">
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">1. Scope of Work</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                The specific deliverables (quantity, video length, and format) are defined by the specific package selected by the Client at checkout (e.g., "Single Ad" or "Growth Pack"). StackCuts agrees to provide video editing and production services matching that selection.
              </p>
            </section>
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">2. Payment Terms</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                StackCuts operates on a 50% deposit and 50% unlock balance structure. The initial deposit is required to begin the creative process. The final 50% balance is due upon approval of the work to unlock final unwatermarked high-resolution exports.
              </p>
            </section>
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">3. Revisions</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                To ensure project quality and efficiency, each package includes <span className="text-slate-900 dark:text-white font-medium">Two (2) rounds of revisions</span>. A revision round consists of a consolidated list of feedback. Additional rounds requested by the Client may incur additional hourly fees.
              </p>
            </section>
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">4. Copyright & Ownership</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                Client owns rights upon final payment. Until final payment is received, StackCuts retains ownership of the draft works. Upon receipt of the full project balance, all intellectual property rights for the final deliverables are transferred to the Client.
              </p>
            </section>
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">5. Delivery Timeline</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                Estimated delivery times are dependent on the package selected. StackCuts aims for a 48-72 hour turnaround for first drafts after all assets and the creative brief are received from the Client.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 pt-4 shrink-0 bg-white dark:bg-gray-900">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">Acceptance:</span> By checking the box on the checkout page and completing your deposit payment, you legally accept these terms. No digital signature is required.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 py-3 text-slate-900 dark:text-white text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Close & Return to Checkout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN PAGE ---
export default function CheckoutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          
          {/* LEFT COLUMN: Input Forms (First on Mobile) */}
          <div className="order-1 lg:col-span-7 space-y-10">
            <header>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Secure Checkout</h1>
            </header>

            {/* Step 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-bold text-slate-700 dark:text-slate-300">1</span>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Create your account</h2>
              </div>
              <div className="ml-9 space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-gray-300">Email Address</label>
                <input type="email" placeholder="alex@example.com" className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none transition-colors dark:text-white" />
              </div>
            </section>

            {/* Step 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-bold text-slate-700 dark:text-slate-300">2</span>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Payment Details</h2>
              </div>
              <div className="ml-9 space-y-6">
                <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit">
                  <button className="px-6 py-2 text-sm font-medium rounded-md bg-white dark:bg-gray-700 text-indigo-600 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-600">Card</button>
                  <button className="px-6 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">PayPal</button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">Card Information</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><CreditCard className="text-gray-400 w-5 h-5" /></div>
                      <input type="text" placeholder="1234 5678 1234 5678" className="block w-full pl-10 py-3 rounded-t-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none dark:text-white" />
                    </div>
                    <div className="flex -mt-px">
                      <div className="flex-1 min-w-0"><input type="text" placeholder="MM / YY" className="block w-full py-3 px-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none rounded-bl-lg border-t-0 border-r-0 dark:text-white" /></div>
                      <div className="flex-1 min-w-0"><input type="text" placeholder="CVC" className="block w-full py-3 px-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none rounded-br-lg border-t-0 dark:text-white" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-bold text-slate-700 dark:text-slate-300">3</span>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Billing Details</h2>
              </div>
              <div className="ml-9 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300">Name on card</label>
                    <input type="text" placeholder="John Doe" className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none dark:text-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300">ZIP Code</label>
                    <input type="text" placeholder="90210" className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none dark:text-white" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Summary + Actions (Second on Mobile) */}
          <div className="order-2 lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            
            {/* Mobile Header (Hidden on Desktop) */}
            <header className="mb-6 lg:hidden">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Secure Checkout</h1>
            </header>

            {/* Summary Card */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 space-y-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Order Summary</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div><p className="font-semibold text-slate-900 dark:text-white">Single Ad</p><p className="text-sm text-gray-500 dark:text-gray-400">Premium animation</p></div>
                  <span className="font-medium text-slate-900 dark:text-white">$1,000.00</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>Less: Balance Due</span><span className="text-green-600 dark:text-green-400">-$500.00</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex justify-between items-end">
                  <span className="text-slate-700 dark:text-gray-300 font-medium">Due Today (50%):</span>
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">$500.00</span>
                </div>
              </div>
            </div>

            {/* ACTION AREA */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="agreement" className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 bg-transparent" />
                <label className="text-xs text-gray-500 dark:text-gray-400 cursor-pointer select-none" htmlFor="agreement">
                  I agree to the <button type="button" onClick={() => setIsModalOpen(true)} className="text-indigo-600 dark:text-indigo-400 underline">Service Agreement</button>
                </label>
              </div>
              
              <Link 
                href="/success" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <Lock className="w-5 h-5" />
                Pay $500.00 Deposit
              </Link>
              
              <p className="text-center text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Payments processed securely by Stripe
              </p>
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-auto py-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-400 dark:text-gray-600 text-sm">© 2026 StackCuts Video Agency. All rights reserved.</p>
      </footer>

      <AnimatePresence>
        {isModalOpen && <ServiceAgreementModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

    </div>
  );
}