import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(244,63,94,0.15),transparent_50%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Butter & Beer Restaurant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-xl text-base text-neutral-300"
          >
            A warm, family-run Indian kitchen and bar in Nova Scotia, Canada. Authentic Kerala-inspired flavors, crowd-favorite North Indian dishes, and a global comfort-food lineup—paired with a lively bar program.
          </motion.p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:opacity-95"
            >
              Book a Table
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-neutral-300">
            <Star className="h-4 w-4 text-amber-400" />
            <p>Family owned by a Malayali (Mallu) family • Dine-in • Takeaway • Bar</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-1">
            <div className="h-full w-full rounded-lg bg-[conic-gradient(at_20%_20%,#f59e0b_0deg,#f43f5e_120deg,#0ea5e9_240deg,#22c55e_360deg)] opacity-20" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="mx-auto max-w-sm text-center">
                <p className="text-5xl">🥘🍺</p>
                <p className="mt-3 text-sm text-neutral-300">Where comfort food meets craft pours</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div id="about" className="mx-auto max-w-7xl px-4 pb-6 md:px-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-300">
          <p>
            Rooted in Kerala traditions and shaped by the vibrant Nova Scotian community, we cook with butter, spice, and plenty of love. From biryanis and dosas to burgers, wings, and seafood, Butter & Beer brings everyone to the table.
          </p>
        </div>
      </div>
    </section>
  );
}
