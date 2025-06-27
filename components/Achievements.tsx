"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { achievements } from "@/data/achievements"
import { fadeInUp, staggerContainer } from "@/utils/animations"

export default function Achievements() {
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div key={achievement.id} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-3xl overflow-hidden bg-gradient-to-br from-white to-yellow-50">
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
                    <CardTitle className="text-blue-800 text-lg leading-tight">{achievement.title}</CardTitle>
                    <CardDescription className="text-indigo-600 font-medium">{achievement.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-600 text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
