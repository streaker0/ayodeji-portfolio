// components/sections/ExperienceSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin } from 'lucide-react'

interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
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
    technologies: ['Kotlin', 'Kubernetes', 'Azure AD B2C', 'Microservices', 'MockK']
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
    technologies: ['Python', 'AWS', 'OAuth2', 'MFA', 'Security Automation']
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
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'AI Agents', 'Next.js', 'TypeScript']
  }
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-24 px-8 relative bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light">
            A journey from full-stack development through cybersecurity specialization to startup founding, combining technical expertise with educational content creation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline Node */}
                <div className="absolute left-4 top-2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>

                {/* Experience Card */}
                <div className={`border border-gray-200 rounded-lg p-6 ${exp.current ? 'border-2 border-gray-300' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-black mb-1">{exp.title}</h3>
                      <p className="text-gray-600 font-light text-lg">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="bg-green-50 text-green-600 border border-green-200 px-3 py-1 rounded-full text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-6 text-gray-500 text-sm mb-4 font-light">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 font-light">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-black font-medium mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3 text-gray-700 font-light">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-black font-medium mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}