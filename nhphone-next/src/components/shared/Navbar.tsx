"use client";

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Shop", href: "/katalog" },
    { name: "Sell", href: "/sell" },
    { name: "About", href: "/about" },
    { name: "Warranty", href: "/warranty" },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/10 dark:bg-[#1b1b1d]/80 backdrop-blur-xl rounded-full mt-6 mx-auto w-[95%] max-w-7xl shadow-2xl shadow-secondary/5 font-['Inter'] antialiased tracking-tight text-sm font-medium border border-outline-variant/10"
      >
        <Link href="/" className="text-2xl font-black tracking-tighter text-[#e4e1e7]">
          NH PHONE
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith("/produk") && link.href === "/katalog");
            return (
              <Link 
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${isActive ? "text-white font-bold border-b-2 border-[#c2c1ff]" : "text-[#c8c5cb] hover:text-white"}`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined p-2 hover:bg-white/5 rounded-full transition-all duration-300 text-[#e4e1e7]">
            search
          </button>
          <Link href="/login" className="px-6 py-2 bg-primary text-on-primary rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-transform">
            Login
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Nav Anchor */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <div className="glass-panel rounded-full px-6 py-4 flex justify-around items-center border border-white/10 shadow-2xl">
          <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === '/' ? 'text-secondary' : 'text-on-surface-variant opacity-60'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === '/' ? "'FILL' 1" : undefined }}>home</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
          </Link>
          <Link href="/katalog" className={`flex flex-col items-center gap-1 ${pathname?.startsWith('/katalog') || pathname?.startsWith('/produk') ? 'text-secondary' : 'text-on-surface-variant opacity-60'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname?.startsWith('/katalog') || pathname?.startsWith('/produk') ? "'FILL' 1" : undefined }}>shopping_bag</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Shop</span>
          </Link>
          <Link href="/dashboard" className={`flex flex-col items-center gap-1 ${pathname?.startsWith('/dashboard') || pathname?.startsWith('/login') ? 'text-secondary' : 'text-on-surface-variant opacity-60'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname?.startsWith('/dashboard') || pathname?.startsWith('/login') ? "'FILL' 1" : undefined }}>person</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Account</span>
          </Link>
        </div>
      </div>
    </>
  )
}
