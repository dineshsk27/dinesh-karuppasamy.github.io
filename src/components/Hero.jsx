import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm{' '}
            <span className="text-primary-600">Dinesh Karuppasamy</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            AWS Cloud Engineer& DevOps Engineer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            6+ years of Cloud & DevOps experience specializing in AWS, Kubernetes, and Infrastructure as Code.
            Expert in migrating workloads to cloud-native architectures and optimizing system performance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
            <a 
              href="Dinesh_CV.docx" 
              download="Dinesh_Karuppasamy_CV.docx"
              className="btn-secondary"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/dineshsk27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/dineshsk27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dineshdd008@gmail.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="animate-bounce"
          >
            <a href="#about" className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
              <ArrowDown size={24} className="mx-auto" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero