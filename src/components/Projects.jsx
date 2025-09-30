import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Cost Optimization Framework',
      description: 'Automated AWS lifecycle policies and resource management system that achieved 20% monthly cost savings. Built with AWS CDK and Python for intelligent resource scaling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['AWS CDK', 'Python', 'Lambda', 'CloudWatch', 'Auto Scaling'],
      liveUrl: '#',
    },
    {
      title: 'Kubernetes Migration Initiative',
      description: 'Migrated 15+ monolithic applications from EC2 to EKS clusters, achieving 99.9% uptime and 25% efficiency improvement with containerized architecture.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop',
      technologies: ['Kubernetes', 'EKS', 'Docker', 'Helm', 'Terraform'],
      liveUrl: '#',
    },
    {
      title: 'CI/CD Automation Pipeline',
      description: 'Built comprehensive CI/CD pipelines using GitHub Actions and Jenkins, reducing release cycles from weekly to daily with 25% higher success rate.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop',
      technologies: ['GitHub Actions', 'Jenkins', 'AWS Developer Tools', 'Docker'],
      liveUrl: '#',
    },
    {
      title: 'Monitoring Modernization',
      description: 'Implemented centralized Prometheus and Grafana dashboards for observability, improving incident response time by 30% and system reliability.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Fluent Bit', 'Kubernetes'],
      liveUrl: '#',
    },
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'Architected and automated AWS infrastructure using AWS CDK with Python and Ansible, improving deployment speed by 40% and ensuring consistency.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop',
      technologies: ['AWS CDK', 'Terraform', 'Ansible', 'CloudFormation', 'Python'],
      liveUrl: '#',
    },
    {
      title: 'Security & Compliance Framework',
      description: 'Implemented IAM security policies, HIPAA compliance measures, and VAPT assessments, reducing security risks by 40% and ensuring regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      technologies: ['AWS IAM', 'HIPAA', 'Security Auditing', 'Policy Enforcement'],
      liveUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects