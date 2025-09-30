import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AWS Cloud Engineer& DevOps Engineer
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AWS Cloud Engineer with 6+ years of Cloud & DevOps experience. 
                  I specialize in AWS, Kubernetes, Docker, Terraform, and CI/CD automation with 
                  proven success in migrating workloads to cloud-native architectures.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Expert in optimizing costs (20%+), improving system uptime to 99.9%, and implementing 
                  Infrastructure as Code. Strong experience in security compliance (HIPAA), 
                  monitoring/observability, and leading cross-functional teams.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Location:</span>
                    <p className="text-gray-600">Tamil Nadu, India</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Experience:</span>
                    <p className="text-gray-600">6+ Years</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Certification:</span>
                    <p className="text-gray-600">AWS Solutions Architect</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Focus:</span>
                    <p className="text-gray-600">Cloud & DevOps</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="Dinesh_CV.docx" 
                    download="Dinesh_Karuppasamy_CV.docx"
                    className="btn-primary"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                  {/* Replace with your actual photo */}
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About