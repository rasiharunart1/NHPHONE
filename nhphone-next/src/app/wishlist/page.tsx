"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { extendedProducts } from "@/lib/products";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(extendedProducts.slice(0, 3));

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16 mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-black tracking-tight text-primary-fixed mb-2">Your Wishlist</h1>
          <p className="text-on-surface-variant mb-12">{wishlist.length} device{wishlist.length !== 1 ? "s" : ""} saved</p>
        </motion.div>

        {wishlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 gap-6"
          >
            <span className="material-symbols-outlined text-on-surface-variant/30 text-[120px]">favorite_border</span>
            <p className="text-on-surface-variant text-xl text-center">Your wishlist is empty.<br />Browse the catalog and save your favorites.</p>
            <Link href="/katalog" className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold hover:scale-[1.02] transition-transform">
              Browse Catalog
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {wishlist.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard corner="xl" className="p-6 flex items-center gap-6">
                  <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-surface-container-highest/30 flex items-center justify-center">
                    <img alt={product.name} src={product.image} className="w-16 h-16 object-contain drop-shadow-lg" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-on-surface-variant text-sm">{product.color} • {product.storage}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="material-symbols-outlined text-tertiary text-sm">battery_charging_full</span>
                      <span className="text-sm">{product.health}% Health</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-tertiary font-black text-xl mb-3">${product.price}</div>
                    <div className="flex gap-2">
                      <Link
                        href={`/produk/${product.id}`}
                        className="px-4 py-2 bg-primary text-on-primary rounded-full text-xs font-bold hover:scale-[1.02] transition-transform"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => setWishlist((w) => w.filter((p) => p.id !== product.id))}
                        className="p-2 hover:bg-error/10 rounded-full text-error transition-all"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
