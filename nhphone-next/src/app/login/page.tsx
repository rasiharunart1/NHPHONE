"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Atmospheric glow orbs */}
      <div className="fixed -top-48 -left-48 w-[800px] h-[800px] rounded-full bg-secondary/8 blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed -bottom-48 -right-48 w-[800px] h-[800px] rounded-full bg-tertiary/5 blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md px-6"
      >
        {/* Brand */}
        <div className="text-center mb-12">
          <Link href="/" className="text-4xl font-black tracking-tighter text-primary-fixed block mb-2">NH PHONE</Link>
          <p className="text-on-surface-variant font-medium tracking-wide text-sm uppercase">Atmospheric Luxury</p>
        </div>

        {/* Login Card */}
        <GlassCard corner="xl" className="p-8 shadow-2xl relative overflow-hidden border border-white/5">
          {/* Top accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />

          <header className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-on-surface tracking-tight mb-2">Welcome Back</h2>
            <p className="text-on-surface-variant text-sm">Access your premium ecosystem</p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none">mail</span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/30 transition-all outline-none focus:border-secondary/30"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest">Password</label>
                <a href="#" className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:text-on-secondary-container transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none">lock</span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/30 transition-all outline-none focus:border-secondary/30"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-2xl shadow-lg shadow-primary/10 flex items-center justify-center gap-2"
              >
                Login
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </motion.button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-[0.2em]">
              <span className="bg-surface-container-low px-4 text-outline">Or continue with</span>
            </div>
          </div>

          {/* Google */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 bg-white/5 border border-white/10 text-on-surface font-medium rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
          >
            <img
              alt="Google"
              className="w-5 h-5 opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI4vP33JJClCsnUfG2WIqNwjQ17pGyzb7WF9w7cgH3ofLxMtStiwLb5c4sMrs-yWLmzUhuA5MxyGfHD0IKOh67FyvGy6I1nAqbT1HCoHOqUWRsHIFf8m564gJqdDwFxn5al_Tdu4PEuqlRVr06P0t2TcLYFTFFFQQOB5w1jGBGzELG9FM0DwAWp6zn4iQBBFGoyX84YJhe82G3eHUvoApiy_m0EMFamCgjJ-pF2jKqdQszA_hIR0fTAKOXziT-mufhWsQnnuRC2iU"
            />
            Google
          </motion.button>
        </GlassCard>

        {/* Footer links */}
        <footer className="mt-12 flex flex-col items-center gap-6">
          <p className="text-on-surface-variant text-sm font-medium">
            Don't have an account?
            <a className="text-secondary hover:underline underline-offset-4 ml-1" href="#">Create Access</a>
          </p>
          <nav className="flex gap-8">
            {["Privacy", "Terms", "Help"].map((l) => (
              <a key={l} className="text-[10px] font-bold text-outline-variant uppercase tracking-[0.2em] hover:text-on-surface-variant transition-colors" href="#">{l}</a>
            ))}
          </nav>
        </footer>
      </motion.main>
    </div>
  );
}
