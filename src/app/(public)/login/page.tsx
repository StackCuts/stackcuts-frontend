"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";
import {
  Layers,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sun,
  Moon,
  ArrowLeft,
  Loader2,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user exists in Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      let role = "client";

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          id: user.uid,
          email: user.email,
          role: "client",
          stripeCustomerId: "pending",
          createdAt: serverTimestamp(),
        });

        // Create empty brand_vault document
        await setDoc(doc(db, "brand_vault", user.uid), {
          id: user.uid,
          primaryLogoUrl: "",
          secondaryLogoUrl: "",
          brandColors: [],
          doNotSayList: "",
          brandGuidelinesUrl: "",
          updatedAt: serverTimestamp(),
        });
      } else {
        role = userSnap.data().role;
      }

      if (role === "admin") {
        router.push("/admin");
      } else {
        router.push("/project");
      }
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
      // Try to sign in first
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        const userSnap = await getDoc(
          doc(db, "users", userCredential.user.uid),
        );
        const role = userSnap.exists() ? userSnap.data().role : "client";

        if (role === "admin") {
          router.push("/admin");
        } else {
          router.push("/project");
        }
      } catch (signInErr: any) {
        // If user not found, try to sign up
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

          router.push("/project");
        } else {
          throw signInErr; // Re-throw if it's a different error
        }
      }
    } catch (err: any) {
      console.error("Email auth error:", err);
      setError(err.message || "Failed to authenticate.");
    } finally {
      setLoading(false);
    }
  };

  // Prevent hydration mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* LEFT COLUMN - Decorative (Hidden on Mobile) */}
      <div className="relative hidden w-0 flex-1 lg:block bg-indigo-600 overflow-hidden">
        {/* FIX: Replaced inline 'style' with Tailwind arbitrary values to fix the terminal warning */}
        <div className="absolute inset-0 opacity-20 bg-[image:radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[size:24px_24px]"></div>

        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"></div>

        {/* Testimonial Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-16 xl:px-24">
          <blockquote className="relative z-10">
            <p className="text-3xl xl:text-4xl font-bold tracking-tight text-white leading-tight">
              “StackCuts changed how we do ads forever.”
            </p>
            <footer className="mt-8">
              <p className="text-lg font-medium text-white/80">
                — Sarah J., SaaS Founder
              </p>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* RIGHT COLUMN - Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-gray-950 relative">
        {/* Back Button (Mobile convenience) */}
        <Link
          href="/"
          className="absolute top-8 left-8 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors lg:hidden"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>

        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* HEADER SECTION - Centered on Mobile, Left on Desktop */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
                <Layers className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                StackCuts
              </span>
            </Link>
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Welcome back.
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Please enter your details to sign in.
            </p>
          </div>

          <div className="mt-10">
            {/* Google Sign In */}
            <div>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            </div>

            {error && (
              <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-500 text-sm">
                {error}
              </div>
            )}

            <div className="relative mt-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white dark:bg-gray-950 px-4 text-gray-500">
                  or continue with email
                </span>
              </div>
            </div>

            <div className="mt-10">
              <form onSubmit={handleEmailAuth} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-slate-900 dark:text-white"
                  >
                    Email Address
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-2.5 pl-10 text-slate-900 dark:text-white bg-transparent ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-slate-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-md border-0 py-2.5 pl-10 pr-10 text-slate-900 dark:text-white bg-transparent ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <Eye className="h-5 w-5" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remember Me / Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 dark:border-gray-700 text-indigo-600 focus:ring-indigo-600 bg-transparent"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm leading-6 text-gray-600 dark:text-gray-400"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm leading-6">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full justify-center items-center gap-2 rounded-lg bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Log In / Sign Up
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
              New here?{" "}
              <a
                href="/process"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Start a Project
              </a>
            </p>
          </div>

          <div className="mt-12 text-center text-xs text-gray-400 dark:text-gray-600">
            © 2026 StackCuts. All rights reserved.
          </div>
        </div>
      </div>

      {/* Floating Theme Toggle (Bottom Right) */}
      {mounted && (
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 text-slate-900 dark:text-white shadow-lg hover:scale-110 transition-all z-50 border border-gray-200 dark:border-gray-700"
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
