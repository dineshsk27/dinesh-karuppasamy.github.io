import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Cloud Automation Engineer / DevOps Engineer',
      company: 'Trbhi',
      location: 'Coimbatore',
      period: 'Mar 2021 – Present',
      achievements: [
        'Architected & automated AWS infrastructure using AWS CDK (Python) + Ansible, improving deployment speed by 40%',
        'Migrated 15+ applications from EC2 to EKS, ensuring 99.9% uptime & cutting infrastructure costs by 25%',
        'Built & maintained CI/CD pipelines (GitHub Actions, Jenkins) to accelerate releases across environments',
        'Implemented centralized Prometheus + Grafana dashboards, improving incident response time by 30%',
        'Enforced IAM security policies & audits, ensuring HIPAA compliance & reducing risks by 40%'
      ]
    },
    {
      title: 'Cloud & Infrastructure Service Engineer',
      company: 'Larsen & Toubro Infotech Ltd',
      location: 'Coimbatore',
      period: 'Jun 2020 – Mar 2021',
      achievements: [
        'Managed staging & production deployments for high-availability AWS applications',
        'Automated operations with AWS SSM + Lambda scripts, cutting manual tasks by 35%',
        'Implemented Jenkins pipelines, reducing release cycles from weekly to daily (+25% success rate)',
        'Coordinated cross-functional teams ensuring 100% on-time launches'
      ]
    },
    {
      title: 'Cloud Engineer',
      company: 'PowerUp Cloud Technologies',
      location: 'Coimbatore',
      period: 'Nov 2018 – Jun 2020',
      achievements: [
        'Delivered AWS automation solutions (EC2, S3, RDS, VPC, Lambda, Auto Scaling, ELB)',
        'Built cost-optimized, fault-tolerant systems → reduced downtime by 20% and saved costs',
        'Designed monitoring with Sensu + Grafana, ensuring SLA compliance & quick issue resolution',
        'Conducted VAPT assessments, remediated 95% of identified security gaps'
      ]
    }
  ]

  const certifications = [
    {
      name: 'AWS Cloud Engineer– Associate',
      year: '2020',
      icon: <Award className="w-5 h-5" />
    }
  ]

  const education = {
    degree: 'Bachelor of Engineering – Electronics & Communication',
    institution: 'M.A.M College of Engineering, Trichy',
    period: '2013 – 2017'
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Professional Experience
          </h2>
          
          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary-200"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-700 leading-relaxed">
                          <span className="text-primary-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications & Education */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-600" />
                Certifications
              </h3>
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600">Certified {cert.year}</p>
                  </div>
                  <div className="text-primary-600">
                    {cert.icon}
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Education
              </h3>
              <div>
                <h4 className="font-medium text-gray-900">{education.degree}</h4>
                <p className="text-gray-600">{education.institution}</p>
                <p className="text-sm text-gray-500 mt-1">{education.period}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience