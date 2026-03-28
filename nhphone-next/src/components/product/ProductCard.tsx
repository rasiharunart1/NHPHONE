"use client";

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import type { Product } from "@/lib/data"

export function ProductCard({ product, index = 0 }: { product: Product, index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
    >
      <Link href={`/produk/${product.id}`} className="block h-full">
        <GlassCard corner="xl" className="p-8 h-full group hover:bg-white/10 transition-colors duration-500 overflow-hidden relative">
          
          <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors duration-500 z-0"></div>

          <div className="aspect-square mb-8 overflow-hidden rounded-lg relative z-10 w-full flex items-center justify-center bg-surface-container-highest/30">
            <motion.img 
              alt={product.name} 
              className="w-[80%] h-[80%] object-contain drop-shadow-2xl" 
              src={product.image}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.7 }}
            />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-fixed transition-colors">{product.name}</h3>
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">battery_very_low</span>
                <span className="text-sm font-medium">{product.health}% Health</span>
              </div>
              <span className="text-tertiary font-black text-xl">${product.price}</span>
            </div>
            
            <button className="w-full py-4 bg-surface-container-high rounded-full font-bold group-hover:bg-secondary group-hover:text-on-secondary transition-all">
              Details
            </button>
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  )
}
