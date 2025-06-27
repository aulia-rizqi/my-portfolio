"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Target, Star, ExternalLink, Code, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Experience } from "@/data/experiences"

interface ExperienceModalProps {
  experience: Experience | null
  onClose: () => void
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (experience && experience.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % experience.gallery.length)
    }
  }

  const prevImage = () => {
    if (experience && experience.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + experience.gallery.length) % experience.gallery.length)
    }
  }

  return (
    <Dialog open={!!experience} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border-0 shadow-2xl mx-4">
        {experience && (
          <div className="space-y-4 sm:space-y-6">
            <DialogHeader>
              <div className="space-y-2 sm:space-y-3">
                <DialogTitle className="text-xl sm:text-2xl font-bold text-blue-800 leading-tight">
                  {experience.title}
                </DialogTitle>
                <p className="text-base sm:text-lg text-indigo-600 font-medium">{experience.company}</p>
                <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200 rounded-full px-3 py-1 w-fit text-sm">
                  {experience.period}
                </Badge>
              </div>
            </DialogHeader>

            {experience.hasImage && experience.gallery && (
              <div className="relative">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={experience.gallery[currentImageIndex] || "/placeholder.svg"}
                    alt={`${experience.title} - ${currentImageIndex + 1}`}
                    className="w-full h-60 sm:h-80 object-cover"
                  />
                </div>

                {experience.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </button>
                  </>
                )}

                {experience.gallery.length > 1 && (
                  <div className="flex justify-center mt-3 sm:mt-4 gap-1 sm:gap-2">
                    {experience.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-blue-600" : "bg-blue-200"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <p className="text-blue-800 leading-relaxed text-sm sm:text-base mb-4">{experience.description}</p>

              {/* Full Bullet Points */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Key Responsibilities & Achievements
                </h3>
                <ul className="space-y-3">
                  {experience.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-blue-700 text-sm sm:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Links Section */}
            {experience.links && experience.links.length > 0 && (
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-indigo-800 flex items-center gap-2 mb-4">
                  <ExternalLink className="h-5 w-5" />
                  Related Links
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experience.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-colors group"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {link.type === "github" && <Code className="h-5 w-5 text-indigo-600" />}
                        {link.type === "external" && <ExternalLink className="h-5 w-5 text-indigo-600" />}
                        {link.type === "article" && <BookOpen className="h-5 w-5 text-indigo-600" />}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-indigo-800 group-hover:text-indigo-900">{link.title}</h4>
                        <p className="text-xs text-indigo-600 capitalize">{link.type}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
