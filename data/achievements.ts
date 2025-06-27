import { Trophy, Medal, Award } from "lucide-react"

export interface Achievement {
  id: number
  title: string
  category: string
  year: string
  description: string
  icon: any
  color: string
  certificateImage?: string // New field for certificate image
  hasCertificate?: boolean // Flag to indicate if certificate exists
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Finalist Business Proposal Competition TEC Festival ITB 2024",
    category: "Business Competition",
    year: "2024",
    description: "Berhasil masuk ke tahap final kompetisi proposal bisnis tingkat nasional",
    icon: Medal,
    color: "from-blue-400 to-indigo-500",
    hasCertificate: false,
  },
  {
    id: 2,
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
    id: 3,
    title: "Finalist Business Proposal Competition Digix Univ. Padjajaran 2024",
    category: "Business Competition",
    year: "2024",
    description: "Mencapai tahap final dalam kompetisi proposal bisnis digital",
    icon: Award,
    color: "from-purple-400 to-pink-500",
    hasCertificate: false,
  },
]
