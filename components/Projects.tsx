"use client"

import { motion } from "framer-motion"
import { Star, Users, Target, ExternalLink, Sparkles } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects, type Project } from "@/data/projects"
import { fadeInUp, staggerContainer } from "@/utils/animations"
import ProjectModal from "./ProjectModal"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
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
              <Star className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Proyek Unggulan
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card
                className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50"
                onClick={() => setSelectedProject(project)}
              >
                {project.hasImage && (
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                      {index === 0 && <Users className="h-4 w-4 text-white" />}
                      {index === 1 && <Target className="h-4 w-4 text-white" />}
                      {index === 2 && <ExternalLink className="h-4 w-4 text-white" />}
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200 rounded-full px-3 py-1">
                      {project.role}
                    </Badge>
                  </div>
                  <CardTitle className="text-blue-800 text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-indigo-600">
                    <Sparkles className="h-4 w-4" />
                    <span>Klik untuk detail lengkap</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
