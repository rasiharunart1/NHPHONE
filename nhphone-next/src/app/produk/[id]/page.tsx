"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { extendedProducts } from "@/lib/products";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = extendedProducts.find((p) => p.id === id);

  if (!product) return notFound();

  const related = extendedProducts.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12 mb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-12">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="material-symbols-outlined text-sm opacity-40">chevron_right</span>
          <Link href="/katalog" className="hover:text-white transition-colors">Catalog</Link>
          <span className="material-symbols-outlined text-sm opacity-40">chevron_right</span>
          <span className="text-on-surface">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <GlassCard corner="2xl" className="p-12 flex items-center justify-center aspect-square relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary/5 blur-[80px] rounded-full" />
              <motion.img
                alt={product.name}
                src={product.image}
                className="relative z-10 w-3/4 h-3/4 object-contain drop-shadow-[0_30px_40px_rgba(194,193,255,0.2)]"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.7 }}
              />
            </GlassCard>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">{product.condition}</span>
              <h1 className="text-5xl font-black tracking-tighter text-primary-fixed mt-2">{product.name}</h1>
              <p className="text-on-surface-variant mt-2">{product.color} • {product.storage}</p>
            </div>

            <div className="text-6xl font-black text-tertiary tracking-tight">${product.price}</div>

            {/* Health Badge */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-tertiary text-sm">battery_charging_full</span>
                <span className="text-sm font-bold">{product.health}% Battery Health</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                <span className="text-sm font-bold">Verified</span>
              </div>
            </div>

            {/* Description */}
            <GlassCard corner="xl" className="p-6">
              <p className="text-on-surface-variant leading-relaxed">{product.description}</p>
            </GlassCard>

            {/* Features */}
            {product.features && (
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-5 bg-[#25D366] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-green-500/20"
              >
                <span className="material-symbols-outlined">chat</span>
                Order via WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-5 glass-panel text-white rounded-full font-bold text-lg border border-outline-variant/20 hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">favorite_border</span>
                Add to Wishlist
              </motion.button>
            </div>

            {/* Stock info */}
            {product.inStock !== undefined && (
              <p className="text-xs text-on-surface-variant">
                <span className={`font-bold ${product.inStock <= 5 ? "text-error" : "text-secondary"}`}>{product.inStock} units</span>
                {" "}remaining in stock
              </p>
            )}
          </motion.div>
        </div>

        {/* Related Products */}
        <section className="mt-32">
          <h2 className="text-3xl font-black tracking-tight mb-10">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/produk/${p.id}`}>
                  <GlassCard corner="xl" className="p-6 hover:scale-[1.02] transition-all duration-500 cursor-pointer group">
                    <div className="h-40 flex items-center justify-center mb-4">
                      <img alt={p.name} src={p.image} className="h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="font-bold">{p.name}</h3>
                    <div className="flex justify-between mt-2">
                      <span className="text-on-surface-variant text-sm">{p.storage}</span>
                      <span className="text-tertiary font-bold">${p.price}</span>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
