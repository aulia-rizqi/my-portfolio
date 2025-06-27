"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    closeMenu()
  }

  const menuItems = [
    { id: "about", label: "Tentang" },
    { id: "experience", label: "Pengalaman" },
    { id: "achievements", label: "Prestasi" },
    { id: "projects", label: "Proyek" },
    { id: "contact", label: "Kontak" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Aulia Rizqi
              </h1>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-blue-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xl z-50 md:hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-4 py-3 text-blue-700 hover:text-indigo-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium flex items-center gap-3 group"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-indigo-500 transition-colors" />
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="mt-6 pt-6 border-t border-blue-100"
                >
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="h-4 w-4" />
                    Mari Terhubung
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
