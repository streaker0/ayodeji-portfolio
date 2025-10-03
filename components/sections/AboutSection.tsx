// components/sections/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const aboutText = `Hello! I\'m Ayodeji Akinbile, a startup founder with a background in cybersecurity and backend development. My experience spans enterprise systems, gaming platforms, and financial technologies, where I\'ve learned that security is fundamental to building reliable solutions. I specialize in backend architecture and creating secure systems that solve real-world communication and business problems using technologies like Node.js, cloud infrastructure, and AI integration. Currently, I\'m developing I-Assist, a platform that helps businesses handle their communications more intelligently, while continuing to expand my expertise in penetration testing and system security.`

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="container-max max-w-4xl px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-lg md:text-xl leading-relaxed text-gray-800 font-normal max-w-3xl mx-auto">
            {aboutText}
          </div>
        </motion.div>
      </div>
    </section>
  )
}