export interface ExperienceLink {
  title: string
  url: string
  type: "github" | "external" | "article"
}

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  bulletPoints: string[]
  hasImage: boolean
  mainImage?: string
  gallery?: string[]
  iconType: string
  links?: ExperienceLink[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Scrum Master",
    company: "Project RELIC",
    period: "Agu - Okt 2024",
    description:
      "Memimpin tim dalam pengembangan aplikasi mobile untuk pelestarian budaya lokal dengan metodologi Agile.",
    bulletPoints: [
      "Memimpin rapat harian dan mingguan untuk memastikan keselarasan tim",
      "Memantau kemajuan proyek dan mengidentifikasi risiko potensial",
      "Menyelesaikan hambatan dan memastikan tim tetap pada jalur yang tepat",
      "Meningkatkan produktivitas tim sebesar 40% melalui optimasi proses",
    ],
    hasImage: true,
    mainImage: "/placeholder.svg?height=200&width=300",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    iconType: "briefcase",
    links: [
      {
        title: "Project Repository",
        url: "https://github.com/project-relic",
        type: "github",
      },
      {
        title: "Live Demo",
        url: "https://relic-demo.com",
        type: "external",
      },
    ],
  },
  {
    id: 2,
    title: "Product Manager Intern",
    company: "Nodewave",
    period: "Jul - Nov 2024",
    description:
      "Mengelola pengembangan produk digital dan berkolaborasi dengan tim lintas fungsi untuk mencapai target bisnis.",
    bulletPoints: [
      "Menginisiasi rapat produk dan menulis PRD yang komprehensif",
      "Melakukan riset pengguna dan pasar untuk wawasan produk",
      "Membuat roadmap produk dan berkolaborasi lintas tim",
      "Meningkatkan user engagement sebesar 25% melalui fitur baru",
    ],
    hasImage: true,
    mainImage: "/placeholder.svg?height=200&width=300",
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    iconType: "sparkles",
    links: [
      {
        title: "Company Website",
        url: "https://nodewave.com",
        type: "external",
      },
      {
        title: "Product Case Study",
        url: "https://medium.com/@aulia/nodewave-case-study",
        type: "article",
      },
    ],
  },
  {
    id: 3,
    title: "Research Assistant",
    company: "Fakultas Ilmu Komputer UI",
    period: "Mar - Jun 2024",
    description: "Membantu dalam penelitian akademik terkait sistem informasi dan teknologi digital.",
    bulletPoints: [
      "Melakukan analisis data menggunakan Python dan R",
      "Menyusun laporan penelitian dan dokumentasi",
      "Berkontribusi dalam publikasi ilmiah",
      "Mengembangkan kemampuan riset dan analisis mendalam",
    ],
    hasImage: false,
    iconType: "book",
    links: [
      {
        title: "Research Paper",
        url: "https://journal.ui.ac.id/research-paper",
        type: "article",
      },
    ],
  },
]
