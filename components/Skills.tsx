"use client"

import { motion } from "framer-motion"
import { Brain } from "lucide-react"
import { skillsData } from "@/data/skills"

export default function Skills() {
  return (
    <section id="skill" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Keahlian Saya
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillsData.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-br ${category.gradient} rounded-3xl p-8 shadow-lg h-full`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                      <CategoryIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, index) => {
                      const IconComponent = skill.icon
                      return (
                        <div key={index} className="flex items-start gap-4 p-3 bg-white/60 rounded-2xl">
                          <div
                            className={`w-10 h-10 ${skill.colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800">{skill.title}</h4>
                            <p className="text-sm text-blue-600 leading-relaxed">
                              {skill.description.includes("**") ? (
                                <>
                                  {skill.description.split("**")[0]}
                                  <strong>{skill.description.split("**")[1]}</strong>
                                  {skill.description.split("**")[2]}
                                </>
                              ) : (
                                skill.description
                              )}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
