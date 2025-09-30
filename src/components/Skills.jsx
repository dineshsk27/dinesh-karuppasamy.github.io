import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS (EC2, S3, RDS, VPC)', level: 95 },
        { name: 'Lambda & EKS', level: 90 },
        { name: 'ECS & ELB', level: 85 },
        { name: 'IAM & CloudWatch', level: 90 },
        { name: 'CloudTrail & Auto Scaling', level: 85 },
        { name: 'CloudFormation', level: 80 },
      ]
    },
    {
      title: 'DevOps & Automation',
      skills: [
        { name: 'Kubernetes (EKS)', level: 90 },
        { name: 'Docker', level: 95 },
        { name: 'Terraform', level: 90 },
        { name: 'AWS CDK', level: 85 },
        { name: 'Ansible', level: 85 },
        { name: 'Helm', level: 80 },
      ]
    },
    {
      title: 'CI/CD & Monitoring',
      skills: [
        { name: 'GitHub Actions', level: 90 },
        { name: 'Jenkins', level: 85 },
        { name: 'Prometheus & Grafana', level: 90 },
        { name: 'ELK Stack', level: 85 },
        { name: 'Python & Shell Script', level: 90 },
        { name: 'GitOps', level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 
                          }}
                          viewport={{ once: true }}
                          className="bg-primary-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills