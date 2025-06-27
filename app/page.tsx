"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}
