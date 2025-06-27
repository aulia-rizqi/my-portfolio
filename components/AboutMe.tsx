"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Tentang Saya
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg">
            <p className="text-lg text-blue-800 leading-relaxed">
              Sebagai mahasiswa Sistem Informasi yang penuh semangat di Universitas Indonesia, saya membawa pengalaman
              kepemimpinan yang luas dan keterlibatan organisasi ke setiap proyek yang saya kerjakan. Keahlian saya
              terletak pada memimpin rapat yang efektif, menulis Product Requirements Documents (PRD) yang komprehensif,
              dan mengeksekusi proyek teknologi dan sosial yang berdampak tepat waktu. Saya berkembang dalam lingkungan
              startup yang dinamis di mana saya dapat menggabungkan pemikiran strategis dengan eksekusi langsung untuk
              mendorong hasil yang bermakna dan mendorong kolaborasi tim.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
