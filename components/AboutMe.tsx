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
              Saya adalah mahasiswa Sistem Informasi di Universitas Indonesia yang dikenal sebagai pribadi proaktif, adaptif, dan berorientasi pada eksekusi. Saya memiliki pengalaman memimpin proyek teknologi dan sosial, menyusun dokumen kebutuhan produk, dan mengelola tim dengan efisien untuk mencapai target secara tepat waktu.
              Dengan semangat hustler, saya juga terjun langsung dalam aktivitas penjualan dan pemasaran.
            </p>
            <p className="text-lg text-blue-800 leading-relaxed mt-4">
              Saya pernah menjual produk sebagai owner dan sales operator, serta membantu promosi produk dalam event besar seperti COMPFEST UI. Pengalaman ini membentuk kemampuan saya dalam memahami pasar, berinteraksi dengan pelanggan, dan menjalankan strategi secara langsung.
              Saya tumbuh di lingkungan yang dinamis, di mana saya terbiasa menggabungkan pemikiran strategis dengan tindakan nyata. Saya percaya pada kolaborasi tim yang kuat, solusi yang praktis, dan hasil yang terukur.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
