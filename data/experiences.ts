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
    title: "Marketing and Communications Intern",
    company: "Radio Singosari FM Brebes",
    period: "Jan 2024",
    description: "Membuat dan mengelola konten media sosial, serta menjadi penyiar radio.",
    bulletPoints: [
      "Membuat konten media sosial & analisis pemasaran",
      "Menghasilkan infografis, pamflet, dan video",
      "Menginisiasi dan koordinasi ide konten",
      "Meningkatkan engagement TikTok & Facebook",
      "Membantu tugas administratif",
      "Penyiar sesi panorama remaja"
    ],
    hasImage: true,
    mainImage: "/experiences/singosari/1.jpg",
    gallery: ["/experiences/singosari/1.jpg"],
    iconType: "sparkles",
  },
  {
    id: 2,
    title: "Product Manager Intern",
    company: "Nodewave",
    period: "Jul - Nov 2024",
    description: "Mengelola dokumen produk, kolaborasi tim, dan sprint planning.",
    bulletPoints: [
      "Menyusun & memperbarui PRD dan roadmap produk",
      "Kolaborasi dengan tim lintas fungsi",
      "Analisis feedback klien",
      "Menyusun laporan perkembangan produk",
      "Memimpin sprint planning"
    ],
    hasImage: true,
    mainImage: "/experiences/nodewave/1.jpg",
    gallery: ["/experiences/nodewave/1.jpg"],
    iconType: "sparkles",
  },
  {
    id: 3,
    title: "Staf Divisi Sponsorship",
    company: "COMPFEST 15",
    period: "Apr - Nov 2023",
    description: "Menjalin dan menjaga kerja sama sponsor.",
    bulletPoints: [
      "Menghubungi & mengajak 150+ calon sponsor",
      "Notulis pitching sponsor",
      "Komunikasi rutin dengan sponsor"
    ],
    hasImage: true,
    mainImage: "/experiences/compfest/1.jpg",
    gallery: ["/experiences/compfest/1.jpg"],
    iconType: "sparkles",
  },
  {
    id: 4,
    title: "Project Officer Rumah Belajar Sintesa",
    company: "SINTESA UI",
    period: "Mar - Jun 2024",
    description: "Memimpin tim, menjalankan program, dan mengelola donasi.",
    bulletPoints: [
      "Memimpin 5 divisi & 30 anggota",
      "Mengeksekusi seluruh program",
      "Mengumpulkan donasi 10juta+",
      "Memenuhi target program & divisi",
      "Efisiensi anggaran hingga 25%"
    ],
    hasImage: true,
    mainImage: "/experiences/sintesa/1.jpg",
    gallery: ["/experiences/sintesa/1.jpg"],
    iconType: "sparkles",
  },
  {
    id: 5,
    title: "Scrum Master",
    company: "Project RELIC - Laboratorium Filologi UI",
    period: "Agu - Okt 2024",
    description: "Memimpin Scrum dan kolaborasi tim pengembangan sistem.",
    bulletPoints: [
      "Memimpin implementasi Scrum",
      "Menjadi penghubung tim & stakeholder",
      "Mengatasi hambatan tim",
      "Meningkatkan kolaborasi & transparansi",
      "Evaluasi performa & fasilitasi perbaikan"
    ],
    hasImage: true,
    mainImage: "/experiences/pkm/1.png",
    gallery: ["/experiences/pkm/1.png"],
    iconType: "sparkles",
    links: [
      {
        title: "Website RELIC",
        url: "https://www.relic.id/",
        type: "external",
      },
    ],
  },
  {
    id: 6,
    title: "Penanggung Jawab Infografis & Website",
    company: "Kepedulian Masyarakat Jaranan Kidal",
    period: "Sep - Nov 2023",
    description: "Membuat infografis & website, kelola dokumen & dokumentasi program.",
    bulletPoints: [
      "Merancang & membuat infografis program",
      "Membuat dan mengelola website",
      "Mengelola dokumen & arsip HKI",
      "Mendokumentasikan program"
    ],
    hasImage: true,
    mainImage: "/experiences/kepmas/1.jpg",
    gallery: ["/experiences/kepmas/1.jpg", "/experiences/kepmas/2.jpg"],
    iconType: "sparkles",
    links: [
      {
        title: "Website Program",
        url: "https://kepmas-jaranankidal.webflow.io/",
        type: "external",
      },
      {
        title: "Berita UI",
        url: "https://www.ui.ac.id/tim-kepmas-ui",
        type: "article",
      },
      {
        title: "Infografis",
        url: "https://drive.google.com/file/d/19cELITVHBvSVhPn7XdoXr0RjryaF2I8s/view?usp=drivesdk",
        type: "external",
      },
    ],
  },
  {
    id: 7,
    title: "Person in Charge Divisi Hubungan Masyarakat",
    company: "SIWAK-NG 2023",
    period: "Agu - Nov 2023",
    description: "Mengelola komunikasi publik & jadi MC acara puncak.",
    bulletPoints: [
      "Sebarkan informasi SIWAK-NG 2023",
      "Kelola informasi ke masyarakat fakultas",
      "Penghubung internal dan eksternal panitia",
      "MC acara puncak"
    ],
    hasImage: true,
    mainImage: "/experiences/siwak/1.jpg",
    gallery: ["/experiences/siwak/1.jpg", "/experiences/siwak/2.jpg"],
    iconType: "sparkles",
  },
  {
    id: 8,
    title: "Staf Divisi Marketing",
    company: "Coolyeah UI",
    period: "Jul - Okt 2022",
    description: "Membuat konten pemasaran digital kreatif & kampanye.",
    bulletPoints: [
      "Membuat konten pemasaran digital",
      "Inisiasi & eksekusi kampanye kreatif",
      "Kolaborasi lintas divisi",
      "Memonitor tren media sosial"
    ],
    hasImage: true,
    mainImage: "/experiences/coolyeah/1.jpg",
    gallery: ["/experiences/coolyeah/1.jpg"],
    iconType: "sparkles",
  },
  {
    id: 9,
    title: "Anggota Departemen Pengabdian Masyarakat",
    company: "BEM Fasilkom UI",
    period: "Apr 2023 - Jan 2024",
    description: "Penanggung jawab proker Sekolah BEM Fasilkom & sukseskan kegiatan.",
    bulletPoints: [
      "Penanggung jawab proker Sekolah BEM Fasilkom",
      "Memenuhi seluruh target & deadline",
      "Meningkatkan pendaftar 10% dari tahun sebelumnya",
      "Menyukseskan seluruh program kerja"
    ],
    hasImage: true,
    mainImage: "/experiences/bem/1.jpg",
    gallery: ["/experiences/bem/1.jpg", "/experiences/bem/2.jpg", "/experiences/bem/3.jpg"],
    iconType: "sparkles",
  },
  {
    id: 10,
    title: "Owner & Sales Operator",
    company: "Frozen Food and Mineral Water Stand at Car Free Day",
    period: "2024 - Sekarang",
    description: "Merintis bisnis frozen food & mengelola operasional harian.",
    bulletPoints: [
      "Merancang & menjalankan bisnis frozen food",
      "Kelola operasional harian & penjualan",
      "Bangun kepercayaan pelanggan",
      "Promosi & penjualan langsung di CFD",
      "Kelola stok & cash flow"
    ],
    hasImage: false,
    iconType: "sparkles",
  },
];
