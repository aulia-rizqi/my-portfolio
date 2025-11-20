export interface ProExperienceLink {
  title: string
  url: string
  type: "github" | "external" | "article"
}

export interface ProExperience {
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
  links?: ProExperienceLink[]
}

export const pro_experiences: ProExperience[] = [
  {
    id: 0,
    title: "Technical Writer Intern",
    company: "Direktorat Transformasi Digital Universitas Indonesia",
    period: "Sekarang",
    description: "Menyusun dokumen-dokumen teknis",
    bulletPoints: [
      "Menyusun dan memperbarui dokumentasi teknis sistem dan aplikasi digital yang dikembangkan oleh direktorat",
      "Berkoordinasi dengan tim pengembang, UI/UX, dan analis sistem untuk memahami kebutuhan dokumentasi",
      "Menulis laporan kemajuan proyek serta dokumentasi hasil evaluasi dan monitoring sistem digital",
      "Menyusun Business Requirement Document (BRD) untuk mendefinisikan kebutuhan bisnis dan tujuan pengembangan sistem",
      "Membuat Functional Specification Document (FSD) yang menjabarkan fungsi dan fitur sistem secara detail",
      "Menulis Technical Specification Document (TSD) yang berisi spesifikasi teknis dan arsitektur sistem",
      "Menyusun User Manual sebagai panduan penggunaan sistem untuk end-user dan administrator",
    ],
    hasImage: true,
    mainImage: "/experiences/dtd/1.webp",
    gallery: ["/experiences/dtd/1.webp"],
    iconType: "sparkles",
  },
  {
    id: 10,
    title: "Project Manager Intern",
    company: "KAP Sukardi Hasan dan Rekan",
    period: "Sekarang",
    description: "Project Manager Intern",
    bulletPoints: [
      "Mengelola perencanaan dan eksekusi proyek internal perusahaan, termasuk penetapan scope, serta koordinasi lintas tim.",
      "Berkoordinasi dengan partner, senior auditor, dan tim operasional untuk mengumpulkan kebutuhan proyek serta memastikan keselarasan tujuan.",
      "Melakukan monitoring progres proyek secara rutin.",
      "Mengatur alur komunikasi antar tim, termasuk penyusunan notulen meeting, distribusi tugas, dan tindak lanjut deliverables.",
      "Membantu penyusunan dokumen proyek seperti project charter, project plan, dan evaluasi pasca proyek.",
      "Mengoptimalkan proses kerja dengan mengusulkan perbaikan alur proyek untuk meningkatkan efisiensi dan akurasi.",
    ],
    hasImage: true,
    mainImage: "/experiences/kap/1.jpeg",
    gallery: ["/experiences/kap/1.jpeg"],
    iconType: "sparkles",
  },
  {
    id: 1,
    title: "CEO & Founder StartUp TemanMu",
    company: "TemanMu",
    period: "Juli-Sekarang",
    description: "Memimpin arah visi, strategi, dan pengembangan TemanMu",
    bulletPoints: [
      "Menetapkan visi, strategi, dan arah perusahaan",
      "Memimpin tim serta mengawasi pengembangan produk",
      "Mengelola operasional dan menjaga keberlanjutan bisnis",
      "Menjadi representasi utama startup di publik",
    ],
    hasImage: true,
    mainImage: "/experiences/ui-incubate/fotobareng.jpg",
    gallery: [
      "/experiences/ui-incubate/fotobareng.jpg",
      "/experiences/ui-incubate/fotosendiri.jpg"
    ],
    iconType: "sparkles",
  },
  {
    id: 3,
    title: "Product Manager Intern",
    company: "Nodewave",
    period: "Jul - Nov 2024",
    description: "Mengelola dokumen produk, kolaborasi tim, dan sprint planning.",
    bulletPoints: [
      "Menyusun & memperbarui PRD dan roadmap produk",
      "Kolaborasi dengan tim lintas fungsi",
      "Analisis feedback klien",
      "Menyusun laporan perkembangan produk",
      "Memimpin sprint planning",
    ],
    hasImage: true,
    mainImage: "/experiences/nodewave/1.jpg",
    gallery: ["/experiences/nodewave/1.jpg"],
    iconType: "sparkles",
  },
  {
    id: 2,
    title: "Marketing and Communications Intern",
    company: "Radio Singosari FM Brebes",
    period: "Jan 2024",
    description:
      "Membuat dan mengelola konten media sosial, serta menjadi penyiar radio.",
    bulletPoints: [
      "Membuat konten media sosial & analisis pemasaran",
      "Menghasilkan infografis, pamflet, dan video",
      "Menginisiasi dan koordinasi ide konten",
      "Meningkatkan engagement TikTok & Facebook",
      "Membantu tugas administratif",
      "Penyiar sesi panorama remaja",
    ],
    hasImage: true,
    mainImage: "/experiences/singosari/1.jpg",
    gallery: ["/experiences/singosari/1.jpg"],
    iconType: "sparkles",
  },
  {
    id: 6,
    title: "Scrum Master",
    company: "Project RELIC - Laboratorium Filologi UI",
    period: "Agu - Okt 2024",
    description: "Memimpin Scrum dan kolaborasi tim pengembangan sistem.",
    bulletPoints: [
      "Memimpin implementasi Scrum",
      "Menjadi penghubung tim & stakeholder",
      "Mengatasi hambatan tim",
      "Meningkatkan kolaborasi & transparansi",
      "Evaluasi performa & fasilitasi perbaikan",
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
];

