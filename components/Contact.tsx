"use client"

import { motion } from "framer-motion"
import { Mail, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Mari Terhubung</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Siap berkolaborasi dalam proyek selanjutnya? Mari diskusikan bagaimana kita bisa bekerja sama.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <Link href="mailto:rizqiaulia216@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                rizqiaulia216@gmail.com
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <Link
                href="https://www.linkedin.com/in/aulia-rizqi-hidayatunnisa"
                target="_blank"
                className="text-blue-100 hover:text-white transition-colors"
              >
                aulia-rizqi-hidayatunnisa
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Lokasi</h3>
              <p className="text-blue-100">Depok, Jawa Barat, Indonesia</p>
            </motion.div>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open("mailto:rizqiaulia216@gmail.com", "_blank")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Hubungi Saya
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
