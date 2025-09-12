"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-indigo-700 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <p className="text-blue-100">
            © {new Date().getFullYear()} Aulia Rizqi Hidayatunnisa.
          </p>
        </div>
      </div>
    </footer>
  )
}
