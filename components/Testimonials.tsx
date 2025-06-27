"use client"

import { motion } from "framer-motion"
import { Heart, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Kata Mereka
          </h2>
          <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-0 shadow-lg rounded-3xl">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-lg text-blue-700 italic mb-4 leading-relaxed">
                "Testimoni dari mentor dan rekan kerja akan ditampilkan di sini untuk menunjukkan dampak dan semangat
                kolaboratif Aulia dalam berbagai proyek dan inisiatif."
              </p>
              <p className="text-indigo-600 font-medium">Segera Hadir</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
