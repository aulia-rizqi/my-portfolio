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
              Saya adalah mahasiswa Sistem Informasi Universitas Indonesia yang dikenal sebagai individu proaktif, adaptif, dan berorientasi pada eksekusi. Berpengalaman memimpin proyek teknologi maupun sosial, 
              menyusun dokumen kebutuhan produk, serta mengelola tim secara efisien untuk mencapai target tepat waktu.
            </p>
            <p className="text-lg text-blue-800 leading-relaxed mt-4">
              Saya terbiasa bekerja dalam lingkungan yang dinamis, mengoordinasikan berbagai pemangku kepentingan, dan memastikan proyek berjalan sesuai rencana. Pengalaman ini mengasah kemampuan saya dalam kepemimpinan, 
              pengambilan keputusan, serta membangun kolaborasi tim yang solid. Saya percaya pada solusi praktis, eksekusi yang terukur, dan hasil yang berkelanjutan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
