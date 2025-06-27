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
} from "lucide-react"

export interface Skill {
  title: string
  description: string
  icon: any
  color: string
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
    icon: "heart",
    gradient: "from-blue-50 to-indigo-50",
    skills: [
      {
        title: "Problem Solving",
        description: "Menganalisis dan menyelesaikan masalah kompleks",
        icon: Lightbulb,
        color: "blue",
      },
      {
        title: "Critical Thinking",
        description: "Berpikir analitis dan objektif dalam pengambilan keputusan",
        icon: Brain,
        color: "indigo",
      },
      {
        title: "Public Speaking",
        description: "Presentasi dan komunikasi di depan audiens",
        icon: MessageCircle,
        color: "purple",
      },
      {
        title: "Growth-Driven",
        description: "Fokus pada pertumbuhan dan perbaikan berkelanjutan",
        icon: BarChart3,
        color: "green",
      },
      {
        title: "Proaktif",
        description: "Mengambil inisiatif dan bertindak cepat",
        icon: Zap,
        color: "orange",
      },
      {
        title: "Komunikatif & Persuasif",
        description: "Menyampaikan ide dengan jelas dan meyakinkan",
        icon: MessageCircle,
        color: "pink",
      },
      {
        title: "Leadership",
        description: "Memimpin dan menginspirasi tim untuk mencapai tujuan",
        icon: Users2,
        color: "rose",
      },
      {
        title: "Berorientasi pada Hasil",
        description: "Fokus pada pencapaian target dan deliverables",
        icon: Target,
        color: "teal",
      },
    ],
  },
  {
    title: "Technical Skills",
    icon: "code",
    gradient: "from-indigo-50 to-purple-50",
    skills: [
      {
        title: "Project Management Tools",
        description: "Trello & Notion untuk manajemen proyek dan pengumpulan insight",
        icon: Database,
        color: "indigo",
      },
      {
        title: "Market Research & Validation",
        description: "Google Forms untuk survei dan validasi pasar",
        icon: BarChart3,
        color: "purple",
      },
      {
        title: "UX Design & Wireframing",
        description: "Figma & draw.io untuk desain alur pengguna (user flow & wireframe dasar)",
        icon: PenTool,
        color: "blue",
      },
      {
        title: "Visual Communication",
        description: "Canva untuk visual komunikasi (pitch deck, feed IG, infografis)",
        icon: Sparkles,
        color: "pink",
      },
    ],
  },
]
