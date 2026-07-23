export type CategoryKey = "AMP" | "Infrastruktur" | "SDA";

export interface Project {
  id: number;
  slug: string;
  category: CategoryKey;
  categoryLabel: string;
  categoryColor: string;
  title: string;
  description: string;
  fullDesc: string;
  location: string;
  year: string;
  spec: string;
  client: string;
  image: string;
  gallery: string[];
  video?: string;
}

export const allProjects: Project[] = [
  // === CATEGORY: AMP ===
  {
    id: 1,
    slug: "cmnp",
    category: "AMP",
    categoryLabel: "AMP",
    categoryColor: "#155DFC",
    title: "CMNP",
    description:
      "Penyediaan campuran aspal berkualitas tinggi (Asphalt Mixing Plant) untuk proyek jalan layang tol CMNP.",
    fullDesc:
      "Pengadaan dan penyediaan campuran aspal hotmix bermutu tinggi dari unit Asphalt Mixing Plant untuk pengerjaan konstruksi, pemeliharaan, serta overlay jalan tol di bawah pengelolaan PT Citra Marga Nusaphala Persada Tbk (CMNP).",
    location: "Jakarta",
    year: "2022",
    spec: "Campuran Aspal Hotmix Utama",
    client: "PT Citra Marga Nusaphala Persada Tbk",
    image: "/images/proyek/AMP/CMNP/TRAIL COMPSTC (3).jpeg",
    gallery: [
      "/images/proyek/AMP/CMNP/TRAIL COMPSTC (2).jpeg",
      "/images/proyek/AMP/CMNP/TRAIL COMPSTC (3).jpeg",
      "/images/proyek/AMP/CMNP/TRAIL COMPSTC (4).jpeg",
      "/images/proyek/AMP/CMNP/TRAIL COMPSTC (6).jpeg",
      "/images/proyek/AMP/CMNP/TRAIL COMPSTC (9).jpeg",
    ],
  },
  {
    id: 2,
    slug: "jasamarga",
    category: "AMP",
    categoryLabel: "AMP",
    categoryColor: "#155DFC",
    title: "Jasamarga",
    description:
      "Penyediaan material aspal berkualitas tinggi untuk proyek pemeliharaan dan pembangunan jalan tol Jasamarga.",
    fullDesc:
      "Pemasokan berkala berbagai tipe aspal hotmix berkualitas tinggi untuk perkerasan jalan tol, pemeliharaan rutin, serta penambalan jalan tol Jasamarga guna menjaga kenyamanan berkendara di jalan tol nasional.",
    location: "Indonesia",
    year: "2023",
    spec: "Aspal Pen 60/70 & Aspal Modifikasi",
    client: "PT Jasa Marga (Persero) Tbk",
    image:
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0347.jpg",
    gallery: [
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0347.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0350.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0338.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0332.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0326.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0317.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0311.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0308.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0305.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0288.jpg",
      "/images/proyek/AMP/CMNP/Foto Jasamarga/DOK JMTM/IMG-20260311-WA0284.jpg",
    ],
  },
  {
    id: 3,
    slug: "e-katalog-dki",
    category: "AMP",
    categoryLabel: "AMP",
    categoryColor: "#155DFC",
    title: "E-Katalog DKI",
    description:
      "Penyediaan campuran aspal hotmix melalui sistem pengadaan e-Katalog Provinsi DKI Jakarta.",
    fullDesc:
      "Pemasokan material aspal hotmix untuk proyek jalan lingkungan dan protokol melalui kemitraan strategis dengan e-Katalog LKPP Pemprov DKI Jakarta guna mendukung kelancaran pemeliharaan jalan wilayah ibu kota.",
    location: "DKI Jakarta",
    year: "2024",
    spec: "Pengadaan E-Katalog Resmi",
    client: "Pemerintah Provinsi DKI Jakarta",
    image: "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-28 at 04.58.51_a054d83d.jpg",
    gallery: [
      "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-28 at 04.58.51_a054d83d.jpg",
      "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-28 at 02.33.37_712fdd42.jpg",
      "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-28 at 02.00.20_529ffb7c.jpg",
      "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-28 at 02.00.19_d373fdfc.jpg",
      "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-28 at 00.12.45_cc434d26.jpg",
      "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-28 at 00.12.45_92564ff4.jpg",
      "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-28 at 00.12.45_77573a45.jpg",
      "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-27 at 23.26.51_e93a4d44.jpg",
      "/images/proyek/AMP/E-katalog/WhatsApp Image 2025-06-27 at 22.17.29_e44b7274.jpg",
      "/images/proyek/AMP/E-katalog/IMG-20250628-WA0220.jpg",
      "/images/proyek/AMP/E-katalog/IMG-20250628-WA0168.jpg",
    ],
  },

  // === CATEGORY: INFRASTRUKTUR ===
  {
    id: 4,
    slug: "flyover-tanjung-api-api",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title: "Flyover Simpang bandara Tanjung Api-Api",
    description:
      "Pembangunan jembatan layang (flyover) untuk mengurai kemacetan menuju Bandara Sultan Mahmud Badaruddin II.",
    fullDesc:
      "Konstruksi flyover simpang bandara Tanjung Api-Api di Palembang untuk memperlancar arus transportasi logistik serta mengurai kepadatan lalu lintas di jalur utama menuju bandara internasional.",
    location: "Palembang, Sumatera Selatan",
    year: "2018",
    spec: "Struktur Balok Girder Beton",
    client: "Kementerian PUPR RI",
    image:
      "/images/proyek/Infrastruktur/Infrastruktur/Flyover Siman Bandang Tanjung APi-Api.png",
    gallery: [
      "/images/proyek/Infrastruktur/Infrastruktur/Flyover Siman Bandang Tanjung APi-Api.png",
    ],
  },
  {
    id: 5,
    slug: "jalan-layang-antasari",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title: "Jalan Layang Non Tol Antasari - Blok M",
    description:
      "Pembangunan JLNT Antasari - Blok M. Stage 1 : Pasar Inpres Cipete s.d lapangan Mabak Blok M.",
    fullDesc:
      "Pembangunan Jalan Layang Non Tol (JLNT) Antasari - Blok M untuk wilayah Jakarta Selatan. Kategori pekerjaan mencakup Stage 1: konstruksi layang di atas jalan raya eksisting dari Pasar Inpres Cipete s.d Lapangan Mabak Blok M guna mengurangi kemacetan koridor utama.",
    location: "DKI Jakarta",
    year: "2012",
    spec: "Pekerjaan Struktur Layang Elevated",
    client: "Dinas Bina Marga DKI Jakarta",
    image: "/images/proyek/Infrastruktur/Infrastruktur/blok M-antasari.png",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/blok M-antasari.png"],
  },
  {
    id: 6,
    slug: "tol-jorr-e1-seksi-3",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title:
      "Jalan Tol Lingkar Luar Jakarta Ruas E1 Seksi III Hankam Raya - Jati Asih",
    description:
      "Konstruksi jalan tol lingkar luar Jakarta ruas Hankam Raya - Jati Asih untuk konektivitas tol JORR.",
    fullDesc:
      "Pembangunan jalan tol Jakarta Outer Ring Road (JORR) Ruas E1 Seksi III yang menghubungkan Hankam Raya hingga Jati Asih. Proyek ini mempermudah mobilitas kendaraan logistik antar provinsi tanpa membebani jalan dalam kota.",
    location: "Jakarta Selatan",
    year: "2015",
    spec: "Jalan Tol Beton Rigid Pavement",
    client: "Kementerian PUPR / PT JLJ",
    image:
      "/images/proyek/Infrastruktur/Infrastruktur/tol lingkar luar jakarata ruasa e1.png",
    gallery: [
      "/images/proyek/Infrastruktur/Infrastruktur/tol lingkar luar jakarata ruasa e1.png",
    ],
  },
  {
    id: 7,
    slug: "flyover-siliwangi-bekasi",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title: "Flyover Jalan Siliwangi Simpang Cipendawa - Bojong Menteng",
    description:
      "Konstruksi flyover simpang Cipendawa - Bojong Menteng untuk kelancaran logistik dan lalu lintas kota Bekasi.",
    fullDesc:
      "Konstruksi jembatan layang (flyover) di koridor Jalan Siliwangi tepat di Simpang Cipendawa - Bojong Menteng, Bekasi guna memisahkan lalu lintas kendaraan berat dan logistik dari kendaraan lokal kota.",
    location: "Bekasi, Jawa Barat",
    year: "2020",
    spec: "Panjang Struktur: 800m",
    client: "Pemerintah Kota Bekasi",
    image:
      "/images/proyek/Infrastruktur/Infrastruktur/Flyover Jalan Siliwangi.png",
    gallery: [
      "/images/proyek/Infrastruktur/Infrastruktur/Flyover Jalan Siliwangi.png",
    ],
  },
  {
    id: 8,
    slug: "tol-jorr-w2s-pondok-pinang",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title:
      "Jalan Tol Lingkar Luar Jakarta Ruas W2 (s) Seksi Pondok Pinang - Veteran",
    description:
      "Pekerjaan konstruksi jalan tol ruas W2(S) menghubungkan area strategis Pondok Pinang ke Veteran.",
    fullDesc:
      "Proyek konstruksi jalan tol lingkar luar Jakarta Selatan Ruas W2(S) Seksi Pondok Pinang sampai Veteran. Pengerjaan meliputi rigid pavement, struktur jembatan penyeberangan, drainase, dan pengaspalan akhir.",
    location: "Jakarta Selatan",
    year: "2014",
    spec: "Rigid Pavement & Elevated Jembatan",
    client: "PT Hutama Karya (Persero)",
    image:
      "/images/proyek/Infrastruktur/Infrastruktur/Lingkar luar ruas w2.png",
    gallery: [
      "/images/proyek/Infrastruktur/Infrastruktur/Lingkar luar ruas w2.png",
    ],
  },
  {
    id: 9,
    slug: "tol-solo-kertosono-kartasura",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title:
      "Jalan Tol Solo - Kertosono Ruas Kartasura Karanganyar Seksi 2B & 2C dan Ruas Colomadu - Karanganyar",
    description:
      "Pembangunan jalan tol strategis Trans-Jawa ruas Kartasura - Karanganyar & Colomadu - Karanganyar.",
    fullDesc:
      "Pekerjaan konstruksi jalan tol trans-jawa Solo - Kertosono untuk Ruas Kartasura - Karanganyar Seksi 2B & 2C serta Ruas Colomadu - Karanganyar guna meningkatkan percepatan logistik Jawa Tengah dan Jawa Timur.",
    location: "Jawa Tengah",
    year: "2017",
    spec: "Pekerjaan Tanah, Rigid Pavement, Struktur",
    client: "PT Jasamarga Solo Ngawi",
    image: "/images/proyek/Infrastruktur/Infrastruktur/tol kertasono.png",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/tol kertasono.png"],
  },
  {
    id: 10,
    slug: "underpass-angkasa-kemayoran",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title: "Underpass Rel KA Angkasa Kemayoran",
    description:
      "Pembangunan terowongan jalan raya di bawah perlintasan rel kereta api Angkasa, Kemayoran.",
    fullDesc:
      "Konstruksi underpass di Jalan Angkasa, Kemayoran untuk menghindari persimpangan sebidang dengan jalur rel kereta api utama (double-double track) guna menekan angka kecelakaan dan kemacetan.",
    location: "Kemayoran, Jakarta Pusat",
    year: "2018",
    spec: "Metode Secant Pile & Sheet Pile",
    client: "Dinas Bina Marga DKI Jakarta",
    image:
      "/images/proyek/Infrastruktur/Infrastruktur/Underpass Rel KA Angkasa.png",
    gallery: [
      "/images/proyek/Infrastruktur/Infrastruktur/Underpass Rel KA Angkasa.png",
    ],
  },
  {
    id: 11,
    slug: "ring-road-jayapura",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title: "Proyek Ring Road Jayapura-Papua 98,56 km",
    description:
      "Pekerjaan pembangunan jalan lingkar (ring road) sepanjang 98,56 km untuk pengembangan konektivitas wilayah Jayapura.",
    fullDesc:
      "Pembangunan infrastruktur jalan lingkar lingkar luar (Ring Road) Jayapura sepanjang 98,56 km menyusuri pesisir bukit guna memecah kepadatan jalan raya perkotaan Jayapura.",
    location: "Jayapura, Papua",
    year: "2021",
    spec: "Konstruksi Tebing & Perkerasan Aspal",
    client: "Balai Besar Pelaksanaan Jalan Nasional Papua",
    image: "/images/proyek/Infrastruktur/Infrastruktur/ring road.png",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/ring road.png"],
  },
  {
    id: 12,
    slug: "jalan-enarotali-sugapa",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title: "Jalan Enarotali - Sugapa I",
    description:
      "Pembangunan infrastruktur jalan perintis di daerah pedalaman Papua menghubungkan Enarotali ke Sugapa.",
    fullDesc:
      "Konstruksi jalan perintis jalur Enarotali ke Sugapa I di Kabupaten Paniai guna menghubungkan distrik terisolasi, membantu distribusi logistik daerah pegunungan tengah Papua.",
    location: "Paniai, Papua",
    year: "2020",
    spec: "Konstruksi Jalan Pegunungan/Tebing",
    client: "Kementerian PUPR RI",
    image: "/images/proyek/Infrastruktur/Infrastruktur/jalan enarotali.png",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/jalan enarotali.png"],
  },
  {
    id: 13,
    slug: "underpass-senen-extension",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryColor: "#155DFC",
    title: "Underpass Senen Extension",
    description:
      "Perpanjangan underpass simpang Senen untuk mengurai titik kemacetan krusial di wilayah Jakarta Pusat.",
    fullDesc:
      "Proyek perpanjangan underpass lintas bawah persimpangan Senen, Jakarta Pusat. Memperluas jalur kendaraan dari arah Jl. Letjen Suprapto ke Jl. Senen Raya guna melancarkan arus lalu lintas padat stasiun.",
    location: "Jakarta Pusat",
    year: "2020",
    spec: "Metode Top-down & Bore Pile",
    client: "Dinas Bina Marga DKI Jakarta",
    image: "/images/proyek/Infrastruktur/Infrastruktur/UP Senen.jpeg",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/UP Senen.jpeg"],
  },

  // === CATEGORY: SDA ===
  {
    id: 14,
    slug: "pltm-citadih-sukabumi",
    category: "SDA",
    categoryLabel: "SDA",
    categoryColor: "#0284C7",
    title: "Bangunan Air untuk PLTM Citadih Sukabumi",
    description:
      "Pekerjaan konstruksi bangunan air, intake, dan saluran penghantar untuk mendukung PLTM Citadih.",
    fullDesc:
      "Konstruksi fasilitas keairan (Water works) meliputi bendung air intake, bak pengendap pasir (settling basin), saluran penghantar air (headrace), serta penstock pelindung untuk mendukung Pembangkit Listrik Tenaga Mikrohidro (PLTM) Citadih.",
    location: "Sukabumi, Jawa Barat",
    year: "2019",
    spec: "Bendung intake PLTM & Saluran Air",
    client: "Pihak Swasta Mandiri Energi",
    image: "/images/proyek/SDA/SDA/PLTMCitadih.png",
    gallery: ["/images/proyek/SDA/SDA/PLTMCitadih.png"],
  },
  {
    id: 15,
    slug: "trestle-jetty-pltu-papua-2",
    category: "SDA",
    categoryLabel: "SDA",
    categoryColor: "#0284C7",
    title: "Trestle & Jetty PLTU Papua 2",
    description:
      "Pembangunan trestle dan dermaga jetty untuk mendukung sandar kapal penyuplai bahan bakar pembangkit listrik PLTU Papua 2.",
    fullDesc:
      "Konstruksi sipil kelautan meliputi tiang pancang baja lepas pantai (marine piles), struktur deck beton dermaga, trestle jembatan penghubung darat ke jetty lepas pantai sepanjang 4,2 km untuk operasional bongkar muat batu bara PLTU Papua 2.",
    location: "Jayapura, Papua",
    year: "2023",
    spec: "Panjang Trestle: 4,2 km",
    client: "PT PLN (Persero)",
    image: "/images/proyek/SDA/SDA/Trestle & Jetty PLTU Papuas 2.png",
    gallery: ["/images/proyek/SDA/SDA/Trestle & Jetty PLTU Papuas 2.png"],
  },
  {
    id: 16,
    slug: "bendung-saluran-sel-silau",
    category: "SDA",
    categoryLabel: "SDA",
    categoryColor: "#0284C7",
    title: "Bendung & Saluran Supelsi di Sel Silau Tahap I",
    description:
      "Pembangunan bendung dan jaringan saluran pembawa suplai air tahap pertama di daerah irigasi Sei Silau.",
    fullDesc:
      "Pekerjaan pembangunan bendung utama, saluran pembagi, saluran supelsi, dan pintu pengatur air tahap pertama di daerah aliran sungai Sel Silau guna mendukung pengairan persawahan dan kedaulatan pangan wilayah Kabupaten Asahan.",
    location: "Kabupaten Asahan, Sumatera Utara",
    year: "2021",
    spec: "Bendung Beton & Saluran Supelsi",
    client: "Kementerian PUPR / BWS Sumatera II",
    image: "/images/proyek/SDA/SDA/Saluran Suplesi Sel Silau.png",
    gallery: ["/images/proyek/SDA/SDA/Saluran Suplesi Sel Silau.png"],
  },
  {
    id: 17,
    slug: "breasting-dolphin-jetty-balikpapan",
    category: "SDA",
    categoryLabel: "SDA",
    categoryColor: "#0284C7",
    title: "Breasting Dolphin BDS, Continuous Fender dan Catwalk Jetty 5c",
    description:
      "Konstruksi struktur kelautan meliputi Breasting Dolphin BDS, sistem continuous fender, dan jembatan catwalk di Jetty 5c.",
    fullDesc:
      "Pembangunan struktur penahan kapal bersandar (Breasting Dolphin BDS), instalasi sistem penahan benturan kapal continuous fender, serta jembatan penghubung catwalk di area sandar kilang Jetty 5c Balikpapan.",
    location: "Balikpapan, Kalimantan Timur",
    year: "2022",
    spec: "Marine Works & Dermaga Struktur",
    client: "PT Pertamina (Persero)",
    image: "/images/proyek/SDA/SDA/DolphinBD5.png",
    gallery: ["/images/proyek/SDA/SDA/DolphinBD5.png"],
  },
];

export const categoryMeta: Record<
  string,
  { label: string; color: string; description: string; slug: string }
> = {
  amp: {
    label: "AMP",
    color: "#155DFC",
    description:
      "Penyediaan campuran aspal berkualitas tinggi (Asphalt Mixing Plant) untuk menunjang proyek jalan dan perkerasan aspal.",
    slug: "amp",
  },
  infrastruktur: {
    label: "Infrastruktur",
    color: "#155DFC",
    description:
      "Proyek pembangunan infrastruktur transportasi umum, jalan layang, jalan tol, dan terowongan lintas wilayah.",
    slug: "infrastruktur",
  },
  sda: {
    label: "SDA",
    color: "#0284C7",
    description:
      "Pembangunan konstruksi Sumber Daya Air, bendung, irigasi kelautan, dan struktur jetty laut.",
    slug: "sda",
  },
};
