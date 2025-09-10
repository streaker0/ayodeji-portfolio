// components/sections/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Shield, Users, Lightbulb, Smartphone, Award } from 'lucide-react'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const currentFocus = [
    {
      icon: Brain,
      title: 'I-Assist Development',
      description: 'Building a communication intelligence platform using AI agents to streamline business email workflows'
    },
    {
      icon: Smartphone,
      title: 'Mobile Fintech Solutions',
      description: 'Developing Bulk Pay - a React Native app for Nigerian business bulk transfers with secure payment integrations'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Training & Research',
      description: 'Creating hands-on labs while staying current with threat intelligence through security newsletters and breach analysis'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Working toward next certification and practicing penetration testing skills through CTF competitions'
    }
  ]

  return (
    <section id="about" className="py-20 section-padding relative">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            Moving from backend development through cybersecurity education to launching my own startup has shaped how I approach building secure, user-focused technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Lightbulb className="mr-3 text-blue-400" size={28} />
                My Journey
              </h3>
              <div className="space-y-4 text-slate-200 leading-relaxed">
                <p>
                  I've always been drawn to the intersection of development and security. Coming out of my computer science degree, I landed at Infosys working on enterprise systems where security wasn't an afterthought - it was built into everything from authentication to cloud infrastructure.
                </p>
                <p>
                  At ESS NG, I got to work on something completely different - backend services for gaming platforms processing 50,000+ transactions daily. The combination of high availability, strict regulatory compliance, and real-time performance taught me how to build systems that actually work under pressure.
                </p>
                <p>
                  Now at Career Minds, I'm creating cybersecurity training content - building hands-on labs for SOAR automation and vulnerability assessment. The startup side came naturally when I kept seeing communication problems in every company I worked at. So I started I-Assist, a platform that uses AI agents to help businesses handle their communications more intelligently. It's been a learning curve going from employee to founder, but my technical background in secure, scalable systems gives me confidence we can build something that actually works.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Current Focus Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Current Focus</h3>
              <div className="space-y-4">
                {currentFocus.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0 mt-1">
                      <item.icon size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-200 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}