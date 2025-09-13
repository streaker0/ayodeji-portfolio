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
    statusColor: 'bg-orange-50 text-orange-600 border border-orange-200',
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
    statusColor: 'bg-blue-50 text-blue-600 border border-blue-200',
    icon: Smartphone,
    demoLink: '#'
  },
  {
    title: 'Temple of Fortune',
    subtitle: 'Strategic Card Game Web App',
    description: 'Strategic card game where players get closer to 20 than the dealer. Features face-up/face-down betting mechanics with different payout structures and animated gameplay.',
    keyFeatures: [
      'Custom Game Logic',
      'Animated Card Dealing',
      'Responsive Design',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
    status: 'Live',
    statusColor: 'bg-green-50 text-green-600 border border-green-200',
    icon: Globe,
    demoLink: 'https://temple-of-fortune.vercel.app/',
    githubLink: 'https://github.com/streaker0/temple-of-fortune'
  }
]

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-24 px-8 relative bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`border border-gray-200 rounded-lg p-8 ${project.isHero ? 'border-2 border-gray-300' : ''}`}
            >
              <div className={project.isHero ? 'space-y-8' : 'grid lg:grid-cols-3 gap-8 items-start'}>
                {/* Project Details */}
                <div className={project.isHero ? 'space-y-8' : 'lg:col-span-2 space-y-6'}>
                  <div className={project.icon ? 'flex items-start space-x-4' : ''}>
                    {project.icon && (
                      <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
                        <project.icon size={24} className="text-gray-700" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className={`font-normal ${project.isHero ? 'text-3xl text-black' : 'text-2xl text-black'}`}>
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 font-light mb-4 text-lg">{project.subtitle}</p>
                      <p className="text-gray-700 leading-relaxed font-light">{project.description}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-medium text-black mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-700 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-medium text-black mb-4">Technical Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {(project.demoLink || project.githubLink) && (
                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.demoLink && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-300 text-sm font-light underline underline-offset-4"
                        >
                          <ExternalLink size={16} />
                          <span>{project.status === 'Live' ? 'View Live Demo' : 'Coming Soon'}</span>
                        </motion.a>
                      )}
                      {project.githubLink && !project.isHero && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.githubLink}
                          className="inline-flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-300 text-sm font-light underline underline-offset-4"
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
                    <div className="border border-gray-200 rounded-lg p-6 text-center bg-gray-50">
                      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        {project.icon && <project.icon size={64} className="text-gray-400" />}
                      </div>
                      <p className="text-gray-500 text-sm font-light">
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