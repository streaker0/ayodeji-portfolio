// components/sections/SkillsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Shield, Smartphone } from 'lucide-react'

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  icon: React.ElementType
  title: string
  skills: Skill[]
  color: string
}

interface Certification {
  name: string
  issuer: string
  year: string
  image: string
  verificationLink: string
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js/Python', level: 90 },
      { name: 'React/Next.js', level: 85 },
      { name: 'PostgreSQL/Database Design', level: 85 },
      { name: 'API Development & Integration', level: 88 }
    ]
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Network Security', level: 95 },
      { name: 'Penetration Testing', level: 90 },
      { name: 'SOAR Automation', level: 85 },
      { name: 'Vulnerability Assessment', level: 88 }
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile & Cloud Development',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Payment API Integration', level: 85 },
      { name: 'AWS/Cloud Infrastructure', level: 75 },
      { name: 'Microservices Architecture', level: 80 }
    ]
  }
]

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
    <section id="skills" className="py-20 section-padding relative">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Certifications
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            A comprehensive skill set spanning full-stack development, cybersecurity, and mobile applications with industry-recognized certifications.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="glass-effect p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open(cert.verificationLink, '_blank')}
                className="glass-effect p-6 text-center cursor-pointer hover:border-blue-500/50 hover:border transition-all duration-300 group"
              >
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-lg bg-white p-3 flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={`${cert.name} certification badge`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm leading-tight">{cert.name}</h4>
                <p className="text-slate-300 text-xs mb-1">{cert.issuer}</p>
                <p className="text-blue-400 text-xs font-medium mb-2">{cert.year}</p>
                <div className="text-xs text-slate-400 group-hover:text-blue-400 transition-colors">
                  Click to verify
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}