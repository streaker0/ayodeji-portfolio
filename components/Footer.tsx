// components/Footer.tsx
'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    'Quick Links': [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' }
    ],
    'Current Focus': [
      { name: 'I-Assist Development', href: '#projects' },
      { name: 'Cybersecurity Training', href: '#experience' },
      { name: 'Speaking Engagements', href: '#contact' },
      { name: 'Open Source', href: 'https://github.com/streaker0' }
    ]
  }

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/streaker0',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ayodeji-akinbile',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:aakin006@outlook.com',
      label: 'Email'
    }
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="bg-slate-900/50 border-t border-white/10 py-12 section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AA</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Ayodeji Akinbile</h3>
                  <p className="text-blue-400 text-sm">Startup Founder</p>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed max-w-md">
                Building innovative solutions through full-stack development, cybersecurity expertise, and entrepreneurial vision.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-slate-300 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      {!link.href.startsWith('#') && <ExternalLink size={12} />}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-slate-400 text-sm">
            <p>© {currentYear} Ayodeji Akinbile. All rights reserved.</p>
            <div className="flex space-x-6">
              <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
              <button className="hover:text-blue-400 transition-colors">Cookies</button>
            </div>
          </div>
          
          <div className="text-slate-400 text-sm text-center md:text-right">
            <p>Built with Next.js, TypeScript, and Framer Motion</p>
            <p className="text-xs mt-1">Designed for modern web experiences</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}