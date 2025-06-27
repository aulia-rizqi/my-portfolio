"use client"

import { motion } from "framer-motion"
import { Trophy, Eye, X } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { achievements } from "@/data/achievements"
import { fadeInUp, staggerContainer } from "@/utils/animations"

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  // Function to determine grid layout based on number of items
  const getGridLayout = (itemCount: number) => {
    if (itemCount === 1) return "grid-cols-1 max-w-md mx-auto"
    if (itemCount === 2) return "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
    if (itemCount % 3 === 1 && itemCount > 3) {
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    }
    if (itemCount % 3 === 2 && itemCount > 3) {
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    }
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }

  const gridLayout = getGridLayout(achievements.length)
  const shouldCenterLastItems = achievements.length % 3 !== 0 && achievements.length > 3

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Trophy className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Prestasi & Penghargaan
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`grid ${gridLayout} gap-8`}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon

            // Determine if this item should be centered
            const isLastRow = shouldCenterLastItems && index >= achievements.length - (achievements.length % 3)
            const centerClass = isLastRow ? "lg:col-start-2" : ""

            // For 2 items remainder, center both items
            const isTwoItemsRemainder = achievements.length % 3 === 2 && index >= achievements.length - 2
            const twoItemsCenterClass = isTwoItemsRemainder && index === achievements.length - 2 ? "lg:col-start-2" : ""

            return (
              <motion.div key={achievement.id} variants={fadeInUp} className={`${centerClass} ${twoItemsCenterClass}`}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-3xl overflow-hidden bg-gradient-to-br from-white to-yellow-50 relative group">
                  {/* Certificate Preview Badge */}
                  {achievement.hasCertificate && (
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedCertificate(achievement.certificateImage || null)
                        }}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group-hover:opacity-100 opacity-70"
                        title="Lihat Sertifikat"
                      >
                        <Eye className="h-5 w-5 text-blue-600" />
                      </button>
                    </div>
                  )}

                  {/* Certificate Preview Image */}
                  {achievement.hasCertificate && achievement.certificateImage && (
                    <div className="relative overflow-hidden h-32 bg-gradient-to-br from-blue-50 to-indigo-100">
                      <img
                        src={achievement.certificateImage || "/placeholder.svg"}
                        alt={`Certificate for ${achievement.title}`}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                      <div className="absolute bottom-2 left-4 right-4">
                        <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
                          <Eye className="h-3 w-3" />
                          <span>Sertifikat Tersedia</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 rounded-full px-3 py-1">
                        {achievement.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-blue-800 text-lg leading-tight pr-12">{achievement.title}</CardTitle>
                    <CardDescription className="text-indigo-600 font-medium">{achievement.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-600 text-sm leading-relaxed">{achievement.description}</p>

                    {achievement.hasCertificate && (
                      <div className="mt-4 pt-4 border-t border-yellow-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedCertificate(achievement.certificateImage || null)
                          }}
                          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                        >
                          <Eye className="h-4 w-4" />
                          Lihat Sertifikat
                        </button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden rounded-2xl border-0 shadow-2xl bg-black/95">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Certificate Image */}
            {selectedCertificate && (
              <div className="flex items-center justify-center min-h-[60vh] p-8">
                <img
                  src={selectedCertificate || "/placeholder.svg"}
                  alt="Certificate"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            )}

            {/* Download/Action Buttons */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex gap-3">
                <button
                  onClick={() => window.open(selectedCertificate || "", "_blank")}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  Buka di Tab Baru
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
