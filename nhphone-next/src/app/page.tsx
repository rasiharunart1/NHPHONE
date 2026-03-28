"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { products } from "@/lib/data";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
          <div className="absolute inset-0 glow-secondary pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 text-center max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-primary-fixed leading-tight">
              Premium <br />Second iPhone
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium tracking-tight mb-12">
              Trusted, Elegant, High Quality
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/katalog"
                  className="group relative px-10 py-5 bg-primary text-on-primary rounded-full font-bold text-lg shadow-xl shadow-secondary/10 flex items-center"
                >
                  Browse Catalog
                  <div className="absolute inset-0 rounded-full bg-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass-panel text-white rounded-full font-bold text-lg border border-outline-variant/20 hover:bg-white/10 transition-all"
              >
                Sell Your iPhone
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Image Visual */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
            className="mt-20 relative w-full max-w-5xl aspect-video flex justify-center"
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120%] h-full bg-tertiary/5 blur-[120px] rounded-full" />
            <motion.img
              alt="iPhone Visual"
              className="relative z-20 w-3/4 object-contain drop-shadow-[0_35px_35px_rgba(194,193,255,0.15)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHmlwc01gBo2xioyVphIulTpPeev6RDCNC78hdpE2szN1HlOIbWIloDhYUULzALBHYgrE_RSQ2goG-IsN9Iw19A4jd8bpc6svJnMpBx2Kof2gJdk9lGEOQUHfHm5Lsrbi6swNCN2ilPtWiEFso2T8z-tcL5IrUXKkvMXdiDBkTYwgnIIkyJcvjoxvAbS1qx8QsU1m3YCiPrhpPLWxWJFB-zdtlzH-5IISxbc6tI02MFQtOhjGu9qeG8IwKPiLyVLWw_tymuHiSaKY"
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
        </section>

        {/* Featured Products Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Selected Units</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-fixed">Featured Inventory</h2>
            </div>
            <Link href="/katalog" className="text-on-surface-variant hover:text-white flex items-center gap-2 transition-colors">
              View all items <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i, type: "spring" }}
              >
                <Link href={`/produk/${product.id}`}>
                  <GlassCard corner="xl" className="p-8 group hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                    <div className="aspect-square mb-8 overflow-hidden rounded-lg flex items-center justify-center bg-surface-container-highest/20">
                      <motion.img
                        alt={product.name}
                        className="w-4/5 h-4/5 object-contain drop-shadow-2xl"
                        src={product.image}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
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
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us - Bento Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <GlassCard corner="xl" className="md:col-span-2 md:row-span-2 p-12 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute top-10 right-10 opacity-20 transform scale-[3]">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: "80px" }}>verified_user</span>
              </div>
              <h2 className="text-4xl font-black mb-4 relative z-10">100% Trusted <br />Sources.</h2>
              <p className="text-on-surface-variant text-lg max-w-md relative z-10">Every device is sourced from verified corporate partners and individual first-owners only.</p>
            </GlassCard>
            <GlassCard corner="xl" className="md:col-span-2 p-8 flex items-center gap-8">
              <div className="bg-secondary/20 p-4 rounded-2xl">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: "40px" }}>quiz</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Rigorous Testing</h3>
                <p className="text-on-surface-variant">42-point inspection by certified techs.</p>
              </div>
            </GlassCard>
            <GlassCard corner="xl" className="md:col-span-1 p-8 flex flex-col justify-center text-center gap-4">
              <span className="material-symbols-outlined text-tertiary text-4xl">verified</span>
              <h3 className="font-bold">1-Year Warranty</h3>
            </GlassCard>
            <GlassCard corner="xl" className="md:col-span-1 p-8 flex flex-col justify-center text-center gap-4">
              <span className="material-symbols-outlined text-secondary text-4xl">local_shipping</span>
              <h3 className="font-bold">Fast Delivery</h3>
            </GlassCard>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-surface-container-lowest/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight mb-16 text-center">What our collectors say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  text: "Condition was exactly as described. Battery health was actually 99% instead of the 98% listed. Exceptional service.",
                  name: "Julian M.",
                  role: "iPhone 15 Pro Buyer",
                },
                {
                  text: "Sold my old iPhone 12. The process was smooth and payment was instant. Way better than trading into the mall.",
                  name: "Sarah K.",
                  role: "Seller",
                },
                {
                  text: "NH Phone is the only place I trust for second-hand. The packaging feels like buying a brand new phone from Apple.",
                  name: "David R.",
                  role: "Repeat Customer",
                  className: "md:hidden lg:block",
                },
              ].map((t) => (
                <GlassCard key={t.name} corner="xl" className={`p-8 border-outline-variant/5 ${t.className ?? ""}`}>
                  <div className="flex gap-1 mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-lg italic text-on-surface mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high" />
                    <div>
                      <span className="block font-bold">{t.name}</span>
                      <span className="text-xs text-on-surface-variant uppercase tracking-widest">{t.role}</span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] glow-secondary pointer-events-none opacity-40" />
          <div className="max-w-4xl mx-auto glass-panel rounded-[4rem] p-16 text-center relative z-10 border border-white/10">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Ready to Upgrade?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Get personalized assistance, more photos of specific units, and exclusive deals via WhatsApp.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-[#25D366] text-white rounded-full font-bold text-xl flex items-center gap-4 mx-auto shadow-2xl shadow-green-500/20"
            >
              <span className="material-symbols-outlined text-3xl">chat</span>
              Order via WhatsApp
            </motion.button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
