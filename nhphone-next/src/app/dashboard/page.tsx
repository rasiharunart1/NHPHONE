"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { extendedProducts } from "@/lib/products";

const sidebarLinks = [
  { icon: "dashboard", label: "Dashboard", href: "/dashboard", active: true },
  { icon: "smartphone", label: "Products", href: "/katalog" },
  { icon: "shopping_bag", label: "Orders", href: "#" },
  { icon: "favorite", label: "Wishlist", href: "/wishlist" },
];

const stats = [
  { label: "Total Products", value: "1,482", icon: "inventory_2", color: "text-secondary", bgGlow: "bg-secondary/10", change: "+12% vs LW", changeColor: "text-secondary-fixed" },
  { label: "Sold", value: "894", icon: "sell", color: "text-tertiary", bgGlow: "bg-tertiary/10", change: "+8.4%", changeColor: "text-tertiary-fixed-dim" },
  { label: "Revenue", value: "$1.2M", icon: "payments", color: "text-primary", bgGlow: "bg-primary/10", change: "Target Hit", changeColor: "text-primary-fixed-dim" },
];

const stockStatuses: Record<string, string> = {
  "In Stock": "bg-secondary/10 text-secondary",
  "Limited": "bg-tertiary/10 text-tertiary",
  "Out of Stock": "bg-white/10 text-on-surface-variant",
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-background text-on-surface flex relative">
      {/* Glow orbs */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-tertiary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Sidebar */}
      <motion.nav
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col p-6 z-40 h-[85vh] bg-surface-container-low/90 backdrop-blur-2xl rounded-[3rem] w-64 shadow-[40px_0_80px_-20px_rgba(194,193,255,0.06)] hidden md:flex"
      >
        <div className="mb-12 px-4">
          <Link href="/" className="text-lg font-bold text-primary-fixed block">NH Admin</Link>
          <p className="text-xs text-on-surface-variant opacity-60">Premium Portal</p>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActiveTab(link.label)}
              className={`flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 ${activeTab === link.label ? "bg-white/10 text-white shadow-inner" : "text-on-surface-variant hover:bg-white/5 hover:translate-x-1"}`}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <div className="mt-auto space-y-4">
          <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-2xl hover:scale-[1.02] active:scale-95 transition-transform shadow-lg shadow-secondary/10">
            Add New Listing
          </button>
          <div className="pt-2 flex flex-col gap-1">
            {[{ icon: "settings", label: "Settings" }, { icon: "logout", label: "Logout" }].map((item) => (
              <Link key={item.label} href="#" className="flex items-center gap-4 text-on-surface-variant p-4 hover:bg-white/5 rounded-2xl transition-all hover:translate-x-1 duration-200">
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main content */}
      <main className="md:ml-72 p-6 md:p-12 max-w-6xl mx-auto min-h-screen w-full pt-8">
        {/* Mobile back link */}
        <div className="md:hidden mb-6">
          <Link href="/" className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to site
          </Link>
        </div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary-fixed mb-2">Performance Overview</h2>
            <p className="text-on-surface-variant font-medium">Real-time metrics for NH ecosystem.</p>
          </div>
          <div className="flex items-center gap-4 p-2 glass-panel rounded-full pr-6 border border-outline-variant/10">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Admin portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj67PiY4XlqkCTOEB7hsU1WpHIHCfEnNp-AqtxnfTed5zu1_j60HbLao9WTXR2hSU7dCdoKjWrJKG-GwgwtbPkFx6ekMotPhmqVJtf_zF8nKhLG1DAsa8PHxZO8uypNmv12oafL52Ll43ikPWQPtN8PFb62-EMwwn6nVMWT58STV5KhQOtJO-3XauwdkU853QqJFjZSf9LTHmvhnwRzDFdQETjcb9ZBC5hPMNJ9R7Jlwg5JpF6TXI5EgUgDcrcmNR679HITtGC8uM"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">Administrator</span>
              <span className="text-sm font-medium">Julian Thorne</span>
            </div>
          </div>
        </motion.header>

        {/* Stats Bento */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard corner="xl" className="p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <div className={`absolute -right-8 -top-8 w-32 h-32 ${stat.bgGlow} blur-3xl group-hover:opacity-200 transition-colors`} />
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-white/5 rounded-2xl">
                    <span className={`material-symbols-outlined ${stat.color}`}>{stat.icon}</span>
                  </div>
                  <span className={`text-xs font-bold ${stat.changeColor}`}>{stat.change}</span>
                </div>
                <h3 className="text-on-surface-variant text-sm font-medium uppercase tracking-widest mb-1">{stat.label}</h3>
                <p className="text-4xl md:text-5xl font-black tracking-tighter text-white">{stat.value}</p>
              </GlassCard>
            </motion.div>
          ))}
        </section>

        {/* Active Listings Table */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-2xl font-bold tracking-tight">Active Listings</h2>
            <div className="flex items-center gap-3 bg-surface-container-high px-5 py-3 rounded-full">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
              <input className="bg-transparent border-none text-sm focus:ring-0 p-0 w-40 placeholder:text-outline outline-none" placeholder="Filter inventory..." type="text" />
            </div>
          </div>

          <GlassCard corner="xl" className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-on-surface-variant text-xs uppercase tracking-widest">
                  <th className="px-6 py-5 font-bold">Product</th>
                  <th className="px-6 py-5 font-bold hidden sm:table-cell">Status</th>
                  <th className="px-6 py-5 font-bold">Price</th>
                  <th className="px-6 py-5 font-bold hidden md:table-cell">Stock</th>
                  <th className="px-6 py-5 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {extendedProducts.slice(0, 5).map((product) => {
                  const stockText = product.inStock === 0 ? "Out of Stock" : (product.inStock ?? 0) <= 5 ? "Limited" : "In Stock";
                  return (
                    <tr key={product.id} className="group hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl overflow-hidden bg-surface-container-highest flex-shrink-0 flex items-center justify-center">
                            <img className="w-10 h-10 object-contain" alt={product.name} src={product.image} />
                          </div>
                          <div>
                            <div className="font-bold text-white mb-0.5 text-sm">{product.name}</div>
                            <div className="text-xs text-on-surface-variant">{product.color} • {product.storage}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 hidden sm:table-cell">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${stockStatuses[stockText]}`}>{stockText}</span>
                      </td>
                      <td className="px-6 py-5 font-medium text-white">${product.price.toLocaleString()}</td>
                      <td className="px-6 py-5 hidden md:table-cell">
                        <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
                          <div className="h-full bg-secondary rounded-full" style={{ width: `${((product.inStock ?? 0) / 50) * 100}%` }} />
                        </div>
                        <span className="text-[10px] text-on-surface-variant">{product.inStock ?? 0} units</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 hover:bg-white/10 rounded-xl text-on-surface-variant transition-all">
                            <span className="material-symbols-outlined text-sm">edit</span>
                          </button>
                          <button className="p-2 hover:bg-error/10 rounded-xl text-error transition-all">
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </GlassCard>
        </section>
      </main>
    </div>
  );
}
