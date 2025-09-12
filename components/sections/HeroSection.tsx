// components/sections/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          {/* Main Name */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-light tracking-tight text-black mb-8"
          >
            Ayodeji Akinble
          </motion.h1>

          {/* Title/Role */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 font-light tracking-wide"
          >
            Startup Founder & Full Stack Developer
          </motion.p>

        </div>
      </div>
    </section>
  )
}