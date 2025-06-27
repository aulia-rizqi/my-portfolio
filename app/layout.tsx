import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aulia Rizqi Hidayatunnisa - Portfolio",
  description:
    "Startup Hustler | Project Builder | Growth-Oriented Thinker - Mahasiswa Sistem Informasi Universitas Indonesia",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
