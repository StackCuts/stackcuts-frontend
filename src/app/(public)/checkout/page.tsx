"use client";

import React, { useState } from "react";
import {
  Film,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Lock,
  X,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";
import { motion, AnimatePresence } from "framer-motion";
import { sendHoldTightEmail } from "@/actions/send-checkout-email";

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
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Service Agreement
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
              Last Updated: Feb 2026
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="space-y-8">
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">
                1. Scope of Work
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                The specific deliverables (quantity, video length, and format)
                are defined by the specific package selected by the Client at
                checkout (e.g., "Single Ad" or "Growth Pack"). StackCuts agrees
                to provide video editing and production services matching that
                selection.
              </p>
            </section>
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">
                2. Payment Terms
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                StackCuts operates on a 50% deposit and 50% unlock balance
                structure. The initial deposit is required to begin the creative
                process. The final 50% balance is due upon approval of the work
                to unlock final unwatermarked high-resolution exports.
              </p>
            </section>
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">
                3. Revisions
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                To ensure project quality and efficiency, each package includes{" "}
                <span className="text-slate-900 dark:text-white font-medium">
                  Two (2) rounds of revisions
                </span>
                . A revision round consists of a consolidated list of feedback.
                Additional rounds requested by the Client may incur additional
                hourly fees.
              </p>
            </section>
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">
                4. Copyright & Ownership
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                Client owns rights upon final payment. Until final payment is
                received, StackCuts retains ownership of the draft works. Upon
                receipt of the full project balance, all intellectual property
                rights for the final deliverables are transferred to the Client.
              </p>
            </section>
            <section>
              <h2 className="text-slate-900 dark:text-white font-bold text-base mb-2">
                5. Delivery Timeline
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                Estimated delivery times are dependent on the package selected.
                StackCuts aims for a 48-72 hour turnaround for first drafts
                after all assets and the creative brief are received from the
                Client.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 pt-4 shrink-0 bg-white dark:bg-gray-900">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">
                Acceptance:
              </span>{" "}
              By checking the box on the checkout page and completing your
              deposit payment, you legally accept these terms. No digital
              signature is required.
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
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auth state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transferError, setTransferError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTransfer = async () => {
    if (!currentUser) {
      setTransferError("Please sign in to your account first.");
      return;
    }

    const agreementCheckbox = document.getElementById(
      "agreement",
    ) as HTMLInputElement;
    if (agreementCheckbox && !agreementCheckbox.checked) {
      setTransferError(
        "Please agree to the Service Agreement before continuing.",
      );
      return;
    }

    try {
      setIsSubmitting(true);
      setTransferError(null);

      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, {
        stripeCustomerId: "transfer_pending",
      });

      await sendHoldTightEmail(currentUser.email);

      setIsSuccess(true);
    } catch (err: any) {
      console.error("Transfer error:", err);
      setTransferError(
        err.message || "Failed to process transfer. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          id: user.uid,
          email: user.email,
          role: "client",
          stripeCustomerId: "pending",
          createdAt: serverTimestamp(),
        });

        await setDoc(doc(db, "brand_vault", user.uid), {
          id: user.uid,
          primaryLogoUrl: "",
          secondaryLogoUrl: "",
          brandColors: [],
          doNotSayList: "",
          brandGuidelinesUrl: "",
          updatedAt: serverTimestamp(),
        });
      }

      setCurrentUser(user);
    } catch (err: any) {
      console.error("Google sign in error:", err);
      setError(err.message || "Failed to sign in with Google.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please put in both email and password.");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        setCurrentUser(result.user);
      } catch (signInErr: any) {
        if (
          signInErr.code === "auth/invalid-credential" ||
          signInErr.code === "auth/user-not-found"
        ) {
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );
          const user = result.user;

          const userRef = doc(db, "users", user.uid);
          await setDoc(userRef, {
            id: user.uid,
            email: user.email,
            role: "client",
            stripeCustomerId: "pending",
            createdAt: serverTimestamp(),
          });

          await setDoc(doc(db, "brand_vault", user.uid), {
            id: user.uid,
            primaryLogoUrl: "",
            secondaryLogoUrl: "",
            brandColors: [],
            doNotSayList: "",
            brandGuidelinesUrl: "",
            updatedAt: serverTimestamp(),
          });

          setCurrentUser(user);
        } else {
          throw signInErr;
        }
      }
    } catch (err: any) {
      console.error("Email auth error:", err);
      setError(err.message || "Failed to authenticate.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-4 px-6 md:px-12 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-indigo-600">
              <Film className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              StackCuts
            </span>
          </Link>
          <Link
            href="/start-project"
            className="text-sm font-medium text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-12 w-full">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="flex flex-col items-center justify-center text-center py-24 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              🎉 Spot Secured.
            </h1>
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to StackCuts. We are preparing your project file right
              now. Please check your email in the next 5-10 minutes for your
              secure 50% deposit link to officially kick off production.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN: Input Forms (First on Mobile) */}
            <div className="order-1 lg:col-span-7 space-y-10">
              <header>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Secure Checkout
                </h1>
              </header>

              {/* Step 1 */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-bold text-slate-700 dark:text-slate-300">
                    1
                  </span>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Account Details
                  </h2>
                </div>

                <div className="ml-9">
                  {currentUser ? (
                    <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-800 dark:text-green-300">
                          Signed in securely
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          {currentUser.email}
                        </p>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-3 rounded-lg bg-white dark:bg-gray-800 px-3 py-3 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          ></path>
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          ></path>
                        </svg>
                        <span className="text-sm font-medium leading-6">
                          Sign in with Google
                        </span>
                      </button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                        </div>
                        <div className="relative flex justify-center text-sm font-medium leading-6">
                          <span className="bg-white dark:bg-gray-950 px-4 text-gray-500">
                            or use email
                          </span>
                        </div>
                      </div>

                      {error && (
                        <div className="p-3 rounded-lg bg-red-50 text-red-500 text-sm">
                          {error}
                        </div>
                      )}

                      <form onSubmit={handleEmailAuth} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-gray-300">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="alex@example.com"
                            className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none transition-colors dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-gray-300">
                            Password
                          </label>
                          <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none transition-colors dark:text-white"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="flex w-full justify-center items-center gap-2 rounded-lg bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading && (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          )}
                          Continue
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </section>

              {/* Step 2 */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-bold text-slate-700 dark:text-slate-300">
                    2
                  </span>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Payment Details
                  </h2>
                </div>
                <div className="ml-9">
                  <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                    <p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">
                      Payments are securely processed via Payoneer. You can pay
                      your 50% deposit via Credit Card or ACH Direct Deposit on
                      the next screen.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: Summary + Actions (Second on Mobile) */}
            <div className="order-2 lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              {/* Mobile Header (Hidden on Desktop) */}
              <header className="mb-6 lg:hidden">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Secure Checkout
                </h1>
              </header>

              {/* Summary Card */}
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 space-y-8">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Order Summary
                </h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        The Signature Hybrid Ad
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Premium animation
                      </p>
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">
                      $199.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>Less: Final Balance Due</span>
                    <span className="text-green-600 dark:text-green-400">
                      -$99.50
                    </span>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-700 dark:text-gray-300 font-medium">
                      Due Today (50%):
                    </span>
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      $99.50
                    </span>
                  </div>
                </div>
              </div>

              {/* ACTION AREA */}
              <div className="space-y-4">
                {transferError && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-500 text-sm">
                    {transferError}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="agreement"
                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 bg-transparent"
                  />
                  <label
                    className="text-xs text-gray-500 dark:text-gray-400 cursor-pointer select-none"
                    htmlFor="agreement"
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="text-indigo-600 dark:text-indigo-400 underline"
                    >
                      Service Agreement
                    </button>
                  </label>
                </div>

                <button
                  onClick={handleTransfer}
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Lock className="w-5 h-5" />
                  )}
                  {isSubmitting
                    ? "Processing..."
                    : "Secure My Spot & Request Invoice ➔"}
                </button>

                <p className="text-center text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Secured via Payoneer B2B
                  Transfers
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-auto py-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-400 dark:text-gray-600 text-sm">
          © 2026 StackCuts Video Agency. All rights reserved.
        </p>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
          <ServiceAgreementModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
