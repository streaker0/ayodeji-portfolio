// components/sections/SkillsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Certification {
  name: string
  issuer: string
  year: string
  image: string
  verificationLink: string
}

const certifications: Certification[] = [
  {
    name: 'CompTIA PenTest+',
    issuer: 'CompTIA',
    year: '2025',
    image: '/certifications/pentest+.png',
    verificationLink: 'https://www.credly.com/badges/254a3d7f-0aca-4f6f-85f9-289e8e1c8aa4/public_url'
  },
  {
    name: 'CompTIA CySA+',
    issuer: 'CompTIA',
    year: '2025',
    image: '/certifications/cysa+.png',
    verificationLink: 'https://www.credly.com/badges/3f4466c5-baeb-4bf8-88a9-b8de72c2a1c7/public_url'
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    year: '2024',
    image: '/certifications/security+.png',
    verificationLink: 'https://www.credly.com/badges/4484bfaa-4064-4b17-8ef6-1e5539119215/public_url'
  },
  {
    name: 'Google Cybersecurity Professional',
    issuer: 'Google',
    year: '2024',
    image: '/certifications/Google-G_360x360.png',
    verificationLink: 'https://coursera.org/share/2f3950f61c313b4fe1f8e7169a1b948a'
  }
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-24 px-8 relative bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Certifications
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light">
            Industry-recognized cybersecurity certifications validating expertise in penetration testing, security analysis, and risk assessment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => window.open(cert.verificationLink, '_blank')}
              className="border border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:border-gray-300 hover:shadow-sm transition-all duration-300 bg-white"
            >
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg bg-gray-50 p-3 flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={`${cert.name} certification badge`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="font-medium text-black mb-2 text-sm leading-tight">{cert.name}</h4>
              <p className="text-gray-600 text-xs mb-1 font-light">{cert.issuer}</p>
              <p className="text-gray-500 text-xs font-light mb-3">{cert.year}</p>
              <div className="text-xs text-gray-400 hover:text-gray-600 transition-colors font-light underline underline-offset-2">
                Verify
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}