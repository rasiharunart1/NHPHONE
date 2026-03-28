"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { extendedProducts, type ExtendedProduct } from "@/lib/products";

const badgeColors: Record<string, string> = {
  secondary: "bg-secondary text-on-secondary",
  tertiary: "bg-tertiary text-on-tertiary",
  error: "bg-error-container text-on-error-container",
  ghost: "bg-white/10 text-white backdrop-blur-md",
};

function ProductGridCard({ product, index }: { product: ExtendedProduct; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, type: "spring" }}
    >
      <Link href={`/produk/${product.id}`}>
        <div className="glass-panel rounded-2xl p-6 group transition-all duration-500 hover:scale-[1.02] relative overflow-hidden flex flex-col h-full border border-outline-variant/10 cursor-pointer">
          {product.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${badgeColors[product.badgeVariant ?? "ghost"]}`}>
                {product.badge}
              </span>
            </div>
          )}
          <div className="relative h-56 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-secondary/10" />
            <motion.img
              alt={product.name}
              className="h-full w-auto object-contain drop-shadow-2xl z-20"
              src={product.image}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="space-y-2 mt-auto">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-white tracking-tight">{product.name}</h2>
              <span className="text-secondary font-black text-lg">${product.price}</span>
            </div>
            <p className="text-sm text-on-surface-variant">{product.color} • {product.storage}</p>
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-tertiary">battery_charging_full</span>
                <span className="text-xs font-medium">{product.health}% Health</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">verified</span>
                <span className="text-xs font-medium">{product.condition}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function KatalogPage() {
  const [sort, setSort] = useState("newest");
  const [storage, setStorage] = useState<string | null>(null);

  const filtered = [...extendedProducts]
    .filter((p) => (storage ? p.storage === storage : true))
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "battery") return b.health - a.health;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 mt-12 mb-24 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filter */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <GlassCard corner="xl" className="p-8 sticky top-32 space-y-10">
            <div>
              <h3 className="text-primary-fixed font-bold text-lg mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">tune</span>
                Filters
              </h3>

              {/* Storage */}
              <div className="space-y-4 mb-8">
                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Storage Capacity</label>
                <div className="flex flex-wrap gap-2">
                  {["128GB", "256GB", "512GB", "64GB"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStorage(storage === s ? null : s)}
                      className={`px-4 py-2 rounded-full text-xs transition-colors font-bold ${storage === s ? "bg-white/10 text-white border border-secondary/30" : "bg-surface-container-high hover:bg-secondary/20"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Condition</label>
                <div className="space-y-3 text-sm text-on-surface-variant">
                  {["Like New", "Excellent", "Good", "Refurbished"].map((c) => (
                    <label key={c} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-outline-variant flex items-center justify-center group-hover:border-secondary transition-colors">
                        <div className="w-2.5 h-2.5 bg-secondary rounded-sm opacity-0 group-hover:opacity-60" />
                      </div>
                      <span className="group-hover:text-white transition-colors">{c}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => { setStorage(null); setSort("newest"); }}
              className="w-full py-4 rounded-2xl bg-secondary-container text-white font-bold hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">refresh</span>
              Reset All
            </button>
          </GlassCard>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-grow">
          {/* Grid Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h1 className="text-4xl font-black text-primary-fixed tracking-tight">Product Catalog</h1>
              <p className="text-on-surface-variant mt-2">Showing {filtered.length} premium refurbished devices</p>
            </div>
            <div className="flex items-center gap-3 glass-panel px-4 py-2 rounded-full border border-outline-variant/10">
              <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border-none text-sm text-white focus:ring-0 cursor-pointer outline-none"
              >
                <option className="bg-surface" value="newest">Newest First</option>
                <option className="bg-surface" value="price-asc">Price: Low to High</option>
                <option className="bg-surface" value="price-desc">Price: High to Low</option>
                <option className="bg-surface" value="battery">Battery Health</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => <ProductGridCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
