"use client"

import { motion } from "framer-motion"
import { Award, Sparkles } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences, type ExperienceData } from "@/data/experiences"
import { getIcon } from "@/utils/icons"
import { fadeInUp, staggerContainer } from "@/utils/animations"
import ExperienceModal from "./ExperienceModal"

export default function ExperienceComponent() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null)

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Pengalaman & Proyek
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div key={experience.id} variants={fadeInUp} className="flex">
              <Card
                className="w-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-1 flex flex-col"
                onClick={() => setSelectedExperience(experience)}
              >
                {experience.hasImage && (
                  <div className="relative overflow-hidden">
                    <img
                      src={experience.mainImage || "/placeholder.svg"}
                      alt={experience.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      {getIcon(experience.iconType)}
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm">
                      {experience.period}
                    </Badge>
                  </div>
                  <CardTitle className="text-blue-800 text-lg sm:text-xl leading-tight">{experience.title}</CardTitle>
                  <CardDescription className="text-base sm:text-lg font-medium text-indigo-600">
                    {experience.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-blue-700 text-sm sm:text-base leading-relaxed mb-4">{experience.description}</p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-4">
                      {experience.bulletPoints.slice(0, 3).map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                      {experience.bulletPoints.length > 3 && (
                        <li className="text-xs text-indigo-500 italic">
                          +{experience.bulletPoints.length - 3} poin lainnya...
                        </li>
                      )}
                    </ul>

                    {/* Links Preview */}
                    {experience.links && experience.links.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {experience.links.slice(0, 2).map((link, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs bg-indigo-50 text-indigo-600 border-indigo-200"
                          >
                            {link.type === "github" && "🔗"}
                            {link.type === "external" && "🌐"}
                            {link.type === "article" && "📄"} {link.title}
                          </Badge>
                        ))}
                        {experience.links.length > 2 && (
                          <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                            +{experience.links.length - 2} link
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-indigo-600 mt-4 pt-2 border-t border-blue-100">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>
                      {experience.hasImage ? "Klik untuk detail dan galeri foto" : "Klik untuk detail lengkap"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ExperienceModal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
    </section>
  )
}
