"use client"

import { motion } from "framer-motion"
import { Mail, Zap, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-200">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Aulia Rizqi Hidayatunnisa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Aulia Rizqi Hidayatunnisa
            </h1>
            <p className="text-xl sm:text-2xl text-blue-700 mb-8 max-w-3xl mx-auto font-medium">
              Startup Hustler | Project Builder | Growth-Oriented Thinker
            </p>
            <p className="text-lg text-blue-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Mahasiswa Sistem Informasi Universitas Indonesia dengan minat mendalam dan pengalaman praktis dalam
              manajemen proyek, pengembangan produk startup, dan eksekusi strategis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hubungi Saya
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300 bg-transparent"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Zap className="mr-2 h-5 w-5" />
              Lihat Proyek Saya
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
