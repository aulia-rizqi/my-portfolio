import {
  Lightbulb,
  Brain,
  MessageCircle,
  BarChart3,
  Zap,
  Users2,
  Target,
  Database,
  PenTool,
  Sparkles,
  Heart,
  Code,
  ClipboardList,
  Wallet,
  FileText,
  TrendingUp,
} from "lucide-react"

export interface Skill {
  title: string
  description: string
  icon: any
  colorClass: string
}

export interface SkillCategory {
  title: string
  icon: any
  gradient: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    title: "Soft Skills",
    icon: Heart,
    gradient: "from-blue-50 to-indigo-50",
    skills: [
      {
        title: "Problem Solving",
        description: "Menganalisis dan menyelesaikan masalah kompleks",
        icon: Lightbulb,
        colorClass: "bg-blue-100 text-blue-600",
      },
      {
        title: "Critical Thinking",
        description: "Berpikir analitis dan objektif dalam pengambilan keputusan",
        icon: Brain,
        colorClass: "bg-indigo-100 text-indigo-600",
      },
      {
        title: "Public Speaking",
        description: "Presentasi dan komunikasi di depan audiens",
        icon: MessageCircle,
        colorClass: "bg-purple-100 text-purple-600",
      },
      {
        title: "Growth-Driven",
        description: "Fokus pada pertumbuhan dan perbaikan berkelanjutan",
        icon: BarChart3,
        colorClass: "bg-green-100 text-green-600",
      },
      {
        title: "Proaktif",
        description: "Mengambil inisiatif dan bertindak cepat",
        icon: Zap,
        colorClass: "bg-orange-100 text-orange-600",
      },
      {
        title: "Komunikatif & Persuasif",
        description: "Menyampaikan ide dengan jelas dan meyakinkan",
        icon: MessageCircle,
        colorClass: "bg-pink-100 text-pink-600",
      },
      {
        title: "Leadership",
        description: "Memimpin dan menginspirasi tim untuk mencapai tujuan",
        icon: Users2,
        colorClass: "bg-rose-100 text-rose-600",
      },
      {
        title: "Berorientasi pada Hasil",
        description: "Fokus pada pencapaian target dan deliverables",
        icon: Target,
        colorClass: "bg-teal-100 text-teal-600",
      },
      {
        title: "Project Management",
        description: "Menyusun prioritas dan roadmap bisnis secara sistematis",
        icon: ClipboardList,
        colorClass: "bg-yellow-100 text-yellow-600",
      },
      {
        title: "Financial Literacy",
        description: "Dasar keuangan bisnis seperti arus kas, margin, dan proyeksi sederhana",
        icon: Wallet,
        colorClass: "bg-lime-100 text-lime-600",
      },
    ],
  },
  {
    title: "Technical Skills",
    icon: Code,
    gradient: "from-indigo-50 to-purple-50",
    skills: [
      {
        title: "Project Management Tools",
        description: "**Trello & Notion** untuk manajemen proyek dan pengumpulan insight",
        icon: Database,
        colorClass: "bg-indigo-100 text-indigo-600",
      },
      {
        title: "Market Research & Validation",
        description: "**Google Forms** untuk survei dan validasi pasar",
        icon: BarChart3,
        colorClass: "bg-purple-100 text-purple-600",
      },
      {
        title: "UX Design & Wireframing",
        description: "**Figma & draw.io** untuk desain alur pengguna (user flow & wireframe dasar)",
        icon: PenTool,
        colorClass: "bg-blue-100 text-blue-600",
      },
      {
        title: "Visual Communication",
        description: "**Canva** untuk visual komunikasi (pitch deck, feed IG, infografis)",
        icon: Sparkles,
        colorClass: "bg-pink-100 text-pink-600",
      },
      {
        title: "Google Workspace",
        description: "**Docs, Sheets, Slides** untuk dokumentasi, presentasi, dan kolaborasi manajemen proyek",
        icon: FileText,
        colorClass: "bg-yellow-100 text-yellow-600",
      },
      {
        title: "Market Interest Analysis",
        description: "**Google Trends** untuk memvalidasi minat pasar terhadap ide produk",
        icon: TrendingUp,
        colorClass: "bg-red-100 text-red-600",
      },
    ],
  },
]
