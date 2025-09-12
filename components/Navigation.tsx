// components/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Download } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a')
    link.href = '/resume/ayodeji-akinbile-resume.pdf' // Update this path to your actual resume file
    link.download = 'Ayodeji-Akinbile-Resume.pdf'
    link.click()
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Initials */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-lg">AA</span>
            </div>
          </motion.div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/ayodeji-akinbile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/streaker0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>

            {/* Resume Download */}
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}