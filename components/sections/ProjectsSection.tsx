// components/sections/ProjectsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react'

interface Project {
  title: string
  subtitle: string
  description: string
  keyFeatures: string[]
  techStack: string[]
  status: string
  statusColor: string
  icon?: React.ElementType
  demoLink?: string
  githubLink?: string
  isHero?: boolean
}

const projects: Project[] = [
  {
    title: 'I-Assist',
    subtitle: 'AI Conversation Intelligence Platform',
    description: 'AI conversation intelligence platform that analyzes email threads and generates contextually-aware responses using AI agents. This system processes complete conversation patterns, learns communication styles, and maintains cross-conversation awareness through task-based email management.',
    keyFeatures: [
      'Thread Analysis Engine',
      'Pattern Learning System',
      'Cross-Conversation Awareness',
      'Task-Based Response Management'
    ],
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'AI Agents', 'Next.js', 'TypeScript'],
    status: 'MVP Q4 2025',
    statusColor: 'bg-yellow-500/20 text-yellow-400',
    isHero: true
  },
  {
    title: 'Bulk Pay',
    subtitle: 'Nigerian Fintech Mobile App',
    description: 'Third-party mobile application enabling Nigerian businesses to outsource bulk transfer processing efficiently. Built with security-first approach and seamless Monnify API integration for reliable payment processing.',
    keyFeatures: [
      'Bulk Transfer Processing',
      'Business Account Integration',
      'Monnify API Integration',
      'Security Protocols'
    ],
    techStack: ['React Native', 'Python', 'Monnify API', 'Supabase'],
    status: 'App Store Soon',
    statusColor: 'bg-blue-500/20 text-blue-400',
    icon: Smartphone,
    demoLink: '#'
  },
  {
    title: 'Fortune of Temple',
    subtitle: 'Custom Card Game Web App',
    description: 'Custom card game combining Mississippi Stud and Blackjack mechanics. Features responsive design, real-time gameplay, and engaging user interface.',
    keyFeatures: [
      'Custom Game Logic',
      'Real-time Gameplay',
      'Responsive Design',
      'User Experience'
    ],
    techStack: ['React', 'Node.js', 'WebSocket', 'CSS3'],
    status: 'Live',
    statusColor: 'bg-green-500/20 text-green-400',
    icon: Globe,
    demoLink: 'https://main.d1imyoe5gm4hjx.amplifyapp.com/signup',
    githubLink: '#'
  }
]

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 section-padding relative">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            A showcase of innovative projects spanning AI conversation intelligence, fintech solutions, and interactive web applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`glass-effect p-8 ${project.isHero ? 'border-2 border-blue-500/50' : ''}`}
            >
              <div className={project.isHero ? 'space-y-6' : 'grid lg:grid-cols-3 gap-8 items-start'}>
                {/* Project Details */}
                <div className={project.isHero ? 'space-y-6' : 'lg:col-span-2 space-y-6'}>
                  <div className={project.icon ? 'flex items-start space-x-4' : ''}>
                    {project.icon && (
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg flex-shrink-0">
                        <project.icon size={24} className="text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`text-2xl font-bold ${project.isHero ? 'gradient-text text-4xl' : 'text-white'}`}>
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-blue-400 font-medium mb-4">{project.subtitle}</p>
                      <p className="text-slate-200 leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-slate-200 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technical Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {(project.demoLink || project.githubLink) && (
                    <div className="flex flex-wrap gap-4">
                      {project.demoLink && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center space-x-2"
                        >
                          <ExternalLink size={16} />
                          <span>{project.status === 'Live' ? 'View Live Demo' : 'Coming Soon'}</span>
                        </motion.a>
                      )}
                      {project.githubLink && !project.isHero && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubLink}
                          className="btn-secondary inline-flex items-center space-x-2"
                        >
                          <Github size={16} />
                          <span>View Code</span>
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Visual - Only for non-hero projects */}
                {!project.isHero && (
                  <div className="lg:col-span-1">
                    <div className="glass-effect p-6 text-center">
                      <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4">
                        {project.icon && <project.icon size={64} className="text-blue-400" />}
                      </div>
                      <p className="text-slate-300 text-sm">
                        {project.title === 'Bulk Pay' ? 'Mobile App Interface - Payment Dashboard' :
                         'Web Game Interface - Card Game Dashboard'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}