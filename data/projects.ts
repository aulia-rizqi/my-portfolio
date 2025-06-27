export interface ProjectDetails {
  duration: string
  teamSize: string
  impact: string
  technologies: string[]
  achievements: string[]
  challenges: string
  solution: string
}

export interface Project {
  id: number
  title: string
  role: string
  description: string
  image?: string
  hasImage: boolean
  details: ProjectDetails
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Rumah Belajar Sintesa UI",
    role: "Project Officer",
    description: "Mengkoordinasi 30+ anggota untuk menjalankan program pendidikan gratis yang komprehensif",
    image: "/placeholder.svg?height=200&width=300",
    hasImage: true,
    details: {
      duration: "6 bulan",
      teamSize: "30+ anggota",
      impact: "200+ siswa terdampak",
      technologies: ["Project Management", "Team Coordination", "Educational Planning"],
      achievements: [
        "Berhasil mengkoordinasi tim besar dengan efektif",
        "Program berjalan lancar tanpa kendala berarti",
        "Mendapat apresiasi dari universitas",
        "Meningkatkan kemampuan leadership dan manajemen",
      ],
      challenges:
        "Mengelola tim yang besar dengan latar belakang yang beragam dan memastikan semua anggota tetap termotivasi sepanjang program.",
      solution:
        "Membuat sistem komunikasi yang jelas, pembagian tugas yang merata, dan mengadakan sesi motivasi rutin untuk menjaga semangat tim.",
    },
  },
  {
    id: 2,
    title: "Bookify App",
    role: "Coordinator & UI/UX Designer",
    description:
      "Memimpin pengembangan aplikasi dalam proyek mata kuliah dengan fokus pada koordinasi tim dan desain UI/UX",
    hasImage: false,
    details: {
      duration: "4 bulan",
      teamSize: "5 anggota",
      impact: "Aplikasi prototype yang user-friendly",
      technologies: ["Figma", "UI/UX Design", "Project Management", "User Research"],
      achievements: [
        "Desain UI/UX yang intuitif dan menarik",
        "Koordinasi tim yang efektif sepanjang proyek",
        "Mendapat nilai A untuk proyek mata kuliah",
        "Prototype aplikasi yang fungsional",
      ],
      challenges: "Menyeimbangkan peran sebagai koordinator dan designer sambil memastikan timeline proyek terpenuhi.",
      solution:
        "Membuat jadwal kerja yang fleksibel, menggunakan design thinking methodology, dan melakukan iterasi desain berdasarkan feedback tim.",
    },
  },
  {
    id: 3,
    title: "Website Jaranan Kidal - Kepmas UI",
    role: "Web Developer",
    description: "Membangun website dan infografis untuk mempromosikan tradisi budaya lokal",
    image: "/placeholder.svg?height=200&width=300",
    hasImage: true,
    details: {
      duration: "3 bulan",
      teamSize: "4 anggota",
      impact: "Peningkatan awareness budaya lokal",
      technologies: ["HTML", "CSS", "JavaScript", "Graphic Design", "Content Management"],
      achievements: [
        "Website yang responsif dan menarik",
        "Infografis yang informatif dan eye-catching",
        "Meningkatkan awareness tentang budaya Jaranan Kidal",
        "Kolaborasi yang baik dengan komunitas lokal",
      ],
      challenges: "Menyajikan konten budaya tradisional dengan cara yang menarik untuk generasi muda.",
      solution:
        "Menggunakan desain modern dengan elemen tradisional, menambahkan konten multimedia, dan melakukan riset mendalam tentang budaya Jaranan Kidal.",
    },
  },
]
