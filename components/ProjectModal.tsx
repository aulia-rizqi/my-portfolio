"use client"

import { Calendar, Users, Target, Zap, Award, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border-0 shadow-2xl">
        {project && (
          <div className="space-y-6">
            <DialogHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <DialogTitle className="text-2xl font-bold text-blue-800">{project.title}</DialogTitle>
                  <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200 rounded-full px-3 py-1">
                    {project.role}
                  </Badge>
                </div>
              </div>
            </DialogHeader>

            {project.hasImage && (
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 text-center">
                <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-blue-600 font-medium">Durasi</p>
                <p className="text-blue-800 font-semibold">{project.details.duration}</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 text-center">
                <Users className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm text-indigo-600 font-medium">Tim</p>
                <p className="text-indigo-800 font-semibold">{project.details.teamSize}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 text-center">
                <Target className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-purple-600 font-medium">Dampak</p>
                <p className="text-purple-800 font-semibold">{project.details.impact}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Teknologi & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech, index) => (
                  <Badge key={index} className="bg-blue-100 text-blue-700 border-blue-200 rounded-full">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Pencapaian
              </h3>
              <ul className="space-y-2">
                {project.details.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-blue-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue-800">Tantangan</h3>
                <div className="bg-red-50 rounded-2xl p-4">
                  <p className="text-red-700 text-sm leading-relaxed">{project.details.challenges}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue-800">Solusi</h3>
                <div className="bg-green-50 rounded-2xl p-4">
                  <p className="text-green-700 text-sm leading-relaxed">{project.details.solution}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
