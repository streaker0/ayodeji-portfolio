// components/sections/ExperienceSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, TrendingUp, BookOpen, Code, Shield } from 'lucide-react'

interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  icon: React.ElementType
  current?: boolean
}

const experiences: Experience[] = [
  {
    title: 'Cybersecurity Content Developer',
    company: 'Career Minds',
    period: 'January 2025 - Present',
    location: 'Remote',
    description: 'Creating hands-on cybersecurity educational content and labs for 500+ learners. Building automated security workflows and developing comprehensive training materials for SOAR, Zero Trust, and vulnerability assessment.',
    achievements: [
      'Accelerated cloud security skills for 500+ learners through hands-on AWS labs',
      'Reduced manual vulnerability assessment effort by 60% with automated scanning systems',
      'Enhanced threat response time with real-time Splunk SOAR playbooks',
      'Strengthened organizational security posture with CIS and GDPR-aligned policy guides'
    ],
    technologies: ['SOAR Automation', 'AWS Security', 'Splunk', 'Vulnerability Assessment', 'Zero Trust'],
    icon: BookOpen,
    current: true
  },
  {
    title: 'Backend Developer',
    company: 'ESS NG',
    period: 'September 2023 - January 2025',
    location: 'Remote',
    description: 'Developed high-availability backend services for regulated gaming platform processing 50,000+ daily transactions. Implemented secure authentication systems and optimized microservices architecture on Kubernetes.',
    achievements: [
      'Achieved 99.95% uptime while processing 50,000+ daily transactions',
      'Secured user authentication with Azure AD B2C integration and real-time odds calculation',
      'Improved API performance by 35% through optimized microservices deployment',
      'Delivered zero critical production incidents with 82% test coverage'
    ],
    technologies: ['Kotlin', 'Kubernetes', 'Azure AD B2C', 'Microservices', 'MockK'],
    icon: Code
  },
  {
    title: 'Full Stack Developer',
    company: 'Infosys Ltd',
    period: 'June 2022 - September 2023',
    location: 'Remote',
    description: 'Enhanced enterprise security for distributed workforce by implementing MFA, OAuth2, and access management controls in AWS-hosted warehouse management system. Developed Python automation scripts for security monitoring.',
    achievements: [
      'Enhanced enterprise security with MFA, OAuth2, and access management controls',
      'Streamlined compliance reporting through Python automation scripts',
      'Minimized security vulnerabilities with orchestrated patch deployment across cloud infrastructure',
      'Improved stakeholder decision-making with clear, actionable security reports'
    ],
    technologies: ['Python', 'AWS', 'OAuth2', 'MFA', 'Security Automation'],
    icon: Shield
  },
  {
    title: 'Startup Founder',
    company: 'I-Assist',
    period: '2024 - Present',
    location: 'Remote',
    description: 'Building an AI conversation intelligence platform that uses AI agents to analyze email threads and generate contextually-aware responses. Managing full-stack development and business strategy.',
    achievements: [
      'Architected scalable backend system for conversation analysis using AI agents',
      'Designed task-based email management system for improved user workflows',
      'Built secure email processing infrastructure with enterprise-grade security',
      'Developing MVP with Node.js, PostgreSQL, and AI agent integration'
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'AI Agents', 'Next.js', 'TypeScript'],
    icon: TrendingUp
  }
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 section-padding relative">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            A journey from full-stack development through cybersecurity specialization to startup founding, combining technical expertise with educational content creation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center z-10">
                  <exp.icon size={16} className="text-white" />
                </div>

                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-16 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`glass-effect p-6 ${exp.current ? 'border-2 border-blue-500/50' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-4 text-slate-300 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-200 leading-relaxed mb-4">{exp.description}</p>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-sm text-slate-200">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-slate-700 text-slate-200 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}