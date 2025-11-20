import { Trophy, Medal, Award } from "lucide-react"

export interface Achievement {
  id: number
  title: string
  category: string
  year: string
  description: string
  icon: any
  color: string
  certificateImage?: string
  hasCertificate?: boolean
}

export const achievements: Achievement[] = [
  {
    id: 0,
    title: "Finalis Hackathon IFEST 2025",
    category: "Kompetisi",
    year: "2025",
    description: "Berhasil meraih posisi finalis 15 besar pada kompetisi Hackathon IFEST 2025",
    icon: Medal,
    color: "from-blue-400 to-indigo-500",
    hasCertificate: true,
    certificateImage: "/certificates/ifest.jpeg?height=600&width=800&text=IFEST+Certificate",
  },
  {
    id: 1,
    title: "Juara 1 Lomba PKM-PI OIM UI 2024",
    category: "Kompetisi Akademik",
    year: "2024",
    description: "Meraih juara pertama dalam Program Kreativitas Mahasiswa bidang Penelitian Ilmiah",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    hasCertificate: true,
    certificateImage: "/certificates/pkm.jpg?height=600&width=800&text=PKM-PI+Certificate",
  },
  {
    id: 2,
    title: "Awardee Hackathon UI Incubate 2025",
    category: "Inkubasi",
    year: "2025",
    description: "Mendapat pendanaan untuk StartUp TemanMu",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    hasCertificate: true,
    certificateImage: "/certificates/ui-incubate.jpg?height=600&width=800&text=PKM-PI+Certificate",
  },
  {
    id: 3,
    title: "Finalist Business Proposal Competition TEC Festival ITB 2024",
    category: "Business Competition",
    year: "2024",
    description: "Berhasil masuk ke tahap final kompetisi proposal bisnis tingkat nasional",
    icon: Medal,
    color: "from-blue-400 to-indigo-500",
    hasCertificate: false,
  },
]
