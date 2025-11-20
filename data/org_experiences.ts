export interface OrgExperienceLink {
  title: string
  url: string
  type: "github" | "external" | "article"
}

export interface OrgExperience {
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
  links?: OrgExperienceLink[]
}

export const org_experiences: OrgExperience[] = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
];

