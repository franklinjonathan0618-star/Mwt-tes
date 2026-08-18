export type CategoryKey = "AMP" | "Infrastruktur" | "SDA";

export interface Project {
  id: number;
  slug: string;
  category: CategoryKey;
  categoryLabel: string;
  categoryLabelEn?: string;
  categoryColor: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  fullDesc: string;
  fullDescEn?: string;
  location: string;
  locationEn?: string;
  year: string;
  spec: string;
  specEn?: string;
  client: string;
  clientEn?: string;
  image: string;
  gallery: string[];
  video?: string;
}

export function getLocalizedProject(project: Project, locale: string): Project {
  if (locale === "en") {
    return {
      ...project,
      title: project.titleEn || project.title,
      description: project.descriptionEn || project.description,
      fullDesc: project.fullDescEn || project.fullDesc,
      location: project.locationEn || project.location,
      spec: project.specEn || project.spec,
      client: project.clientEn || project.client,
      categoryLabel: project.categoryLabelEn || project.categoryLabel,
    };
  }
  return project;
}

export const allProjects: Project[] = [
  // === CATEGORY: AMP ===
  {
    id: 1,
    slug: "cmnp",
    category: "AMP",
    categoryLabel: "AMP",
    categoryLabelEn: "AMP",
    categoryColor: "#155DFC",
    title: "CMNP",
    titleEn: "CMNP",
    description:
      "Penyediaan campuran aspal berkualitas tinggi (Asphalt Mixing Plant) untuk proyek jalan layang tol CMNP.",
    descriptionEn:
      "Supply of high-quality asphalt mixture (Asphalt Mixing Plant) for the CMNP elevated toll road project.",
    fullDesc:
      "Pengadaan dan penyediaan campuran aspal hotmix bermutu tinggi dari unit Asphalt Mixing Plant untuk pengerjaan konstruksi, pemeliharaan, serta overlay jalan tol di bawah pengelolaan PT Citra Marga Nusaphala Persada Tbk (CMNP).",
    fullDescEn:
      "Procurement and supply of high-grade hotmix asphalt mixture from the Asphalt Mixing Plant unit for construction, maintenance, and overlay works of toll roads managed by PT Citra Marga Nusaphala Persada Tbk (CMNP).",
    location: "Jakarta",
    locationEn: "Jakarta",
    year: "2022",
    spec: "Campuran Aspal Hotmix Utama",
    specEn: "Main Hotmix Asphalt Mixture",
    client: "PT Citra Marga Nusaphala Persada Tbk",
    clientEn: "PT Citra Marga Nusaphala Persada Tbk",
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
    categoryLabelEn: "AMP",
    categoryColor: "#155DFC",
    title: "Jasamarga",
    titleEn: "Jasamarga",
    description:
      "Penyediaan material aspal berkualitas tinggi untuk proyek pemeliharaan dan pembangunan jalan tol Jasamarga.",
    descriptionEn:
      "Supply of high-quality asphalt materials for Jasamarga toll road maintenance and construction projects.",
    fullDesc:
      "Pemasokan berkala berbagai tipe aspal hotmix berkualitas tinggi untuk perkerasan jalan tol, pemeliharaan rutin, serta penambalan jalan tol Jasamarga guna menjaga kenyamanan berkendara di jalan tol nasional.",
    fullDescEn:
      "Periodic supply of various types of high-quality hotmix asphalt for toll road pavement, routine maintenance, and patch repairs on Jasamarga toll roads to maintain driving comfort on national highways.",
    location: "Indonesia",
    locationEn: "Indonesia",
    year: "2023",
    spec: "Aspal Pen 60/70 & Aspal Modifikasi",
    specEn: "Asphalt Pen 60/70 & Modified Asphalt",
    client: "PT Jasa Marga (Persero) Tbk",
    clientEn: "PT Jasa Marga (Persero) Tbk",
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
    categoryLabelEn: "AMP",
    categoryColor: "#155DFC",
    title: "E-Katalog DKI",
    titleEn: "DKI Jakarta E-Catalog",
    description:
      "Penyediaan campuran aspal hotmix melalui sistem pengadaan e-Katalog Provinsi DKI Jakarta.",
    descriptionEn:
      "Supply of hotmix asphalt mixtures through the DKI Jakarta Provincial Government e-Catalog procurement system.",
    fullDesc:
      "Pemasokan material aspal hotmix untuk proyek jalan lingkungan dan protokol melalui kemitraan strategis dengan e-Katalog LKPP Pemprov DKI Jakarta guna mendukung kelancaran pemeliharaan jalan wilayah ibu kota.",
    fullDescEn:
      "Supply of hotmix asphalt materials for local and main road projects through strategic partnership with the DKI Jakarta Provincial LKPP e-Catalog to support smooth road maintenance in the capital city.",
    location: "DKI Jakarta",
    locationEn: "DKI Jakarta",
    year: "2024",
    spec: "Pengadaan E-Katalog Resmi",
    specEn: "Official E-Catalog Procurement",
    client: "Pemerintah Provinsi DKI Jakarta",
    clientEn: "DKI Jakarta Provincial Government",
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
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title: "Flyover Simpang bandara Tanjung Api-Api",
    titleEn: "Tanjung Api-Api Airport Intersection Flyover",
    description:
      "Pembangunan jembatan layang (flyover) untuk mengurai kemacetan menuju Bandara Sultan Mahmud Badaruddin II.",
    descriptionEn:
      "Construction of an elevated flyover bridge to relieve traffic congestion heading to Sultan Mahmud Badaruddin II Airport.",
    fullDesc:
      "Konstruksi flyover simpang bandara Tanjung Api-Api di Palembang untuk memperlancar arus transportasi logistik serta mengurai kepadatan lalu lintas di jalur utama menuju bandara internasional.",
    fullDescEn:
      "Construction of the Tanjung Api-Api airport intersection flyover in Palembang to streamline logistics transport flow and ease traffic congestion on the main route to the international airport.",
    location: "Palembang, Sumatera Selatan",
    locationEn: "Palembang, South Sumatra",
    year: "2018",
    spec: "Struktur Balok Girder Beton",
    specEn: "Concrete Girder Beam Structure",
    client: "Kementerian PUPR RI",
    clientEn: "Ministry of Public Works and Housing RI",
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
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title: "Jalan Layang Non Tol Antasari - Blok M",
    titleEn: "Antasari - Blok M Non-Toll Elevated Highway",
    description:
      "Pembangunan JLNT Antasari - Blok M. Stage 1 : Pasar Inpres Cipete s.d lapangan Mabak Blok M.",
    descriptionEn:
      "Construction of Antasari - Blok M Elevated Highway. Stage 1: Cipete Inpres Market to Mabak Field, Blok M.",
    fullDesc:
      "Pembangunan Jalan Layang Non Tol (JLNT) Antasari - Blok M untuk wilayah Jakarta Selatan. Kategori pekerjaan mencakup Stage 1: konstruksi layang di atas jalan raya eksisting dari Pasar Inpres Cipete s.d Lapangan Mabak Blok M guna mengurangi kemacetan koridor utama.",
    fullDescEn:
      "Construction of the Antasari - Blok M Non-Toll Elevated Highway (JLNT) in South Jakarta. Work scope includes Stage 1: elevated structure construction above existing roads from Cipete Inpres Market to Mabak Field, Blok M to reduce traffic congestion on key corridors.",
    location: "DKI Jakarta",
    locationEn: "DKI Jakarta",
    year: "2012",
    spec: "Pekerjaan Struktur Layang Elevated",
    specEn: "Elevated Overhead Structure Works",
    client: "Dinas Bina Marga DKI Jakarta",
    clientEn: "DKI Jakarta Highways Agency",
    image: "/images/proyek/Infrastruktur/Infrastruktur/blok M-antasari.png",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/blok M-antasari.png"],
  },
  {
    id: 6,
    slug: "tol-jorr-e1-seksi-3",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title:
      "Jalan Tol Lingkar Luar Jakarta Ruas E1 Seksi III Hankam Raya - Jati Asih",
    titleEn:
      "Jakarta Outer Ring Road (JORR) Section E1-III Hankam Raya - Jati Asih",
    description:
      "Konstruksi jalan tol lingkar luar Jakarta ruas Hankam Raya - Jati Asih untuk konektivitas tol JORR.",
    descriptionEn:
      "Construction of the Jakarta Outer Ring Road toll section Hankam Raya - Jati Asih for JORR toll connectivity.",
    fullDesc:
      "Pembangunan jalan tol Jakarta Outer Ring Road (JORR) Ruas E1 Seksi III yang menghubungkan Hankam Raya hingga Jati Asih. Proyek ini mempermudah mobilitas kendaraan logistik antar provinsi tanpa membebani jalan dalam kota.",
    fullDescEn:
      "Construction of the Jakarta Outer Ring Road (JORR) Section E1-III connecting Hankam Raya to Jati Asih. This project facilitates inter-provincial logistics mobility without overburdening inner-city roads.",
    location: "Jakarta Selatan",
    locationEn: "South Jakarta",
    year: "2015",
    spec: "Jalan Tol Beton Rigid Pavement",
    specEn: "Rigid Pavement Concrete Toll Road",
    client: "Kementerian PUPR / PT JLJ",
    clientEn: "Ministry of PUPR / PT JLJ",
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
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title: "Flyover Jalan Siliwangi Simpang Cipendawa - Bojong Menteng",
    titleEn: "Siliwangi Road Flyover (Cipendawa - Bojong Menteng Intersection)",
    description:
      "Konstruksi flyover simpang Cipendawa - Bojong Menteng untuk kelancaran logistik dan lalu lintas kota Bekasi.",
    descriptionEn:
      "Construction of Cipendawa - Bojong Menteng intersection flyover for smooth logistics and Bekasi city traffic flow.",
    fullDesc:
      "Konstruksi jembatan layang (flyover) di koridor Jalan Siliwangi tepat di Simpang Cipendawa - Bojong Menteng, Bekasi guna memisahkan lalu lintas kendaraan berat dan logistik dari kendaraan lokal kota.",
    fullDescEn:
      "Construction of an elevated flyover on the Siliwangi Road corridor at the Cipendawa - Bojong Menteng intersection, Bekasi, to separate heavy vehicle logistics traffic from local urban traffic.",
    location: "Bekasi, Jawa Barat",
    locationEn: "Bekasi, West Java",
    year: "2020",
    spec: "Panjang Struktur: 800m",
    specEn: "Structure Length: 800m",
    client: "Pemerintah Kota Bekasi",
    clientEn: "Bekasi City Government",
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
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title:
      "Jalan Tol Lingkar Luar Jakarta Ruas W2 (s) Seksi Pondok Pinang - Veteran",
    titleEn:
      "Jakarta Outer Ring Road (JORR) Section W2(S) Pondok Pinang - Veteran",
    description:
      "Pekerjaan konstruksi jalan tol ruas W2(S) menghubungkan area strategis Pondok Pinang ke Veteran.",
    descriptionEn:
      "Toll road construction works for Section W2(S) connecting strategic areas from Pondok Pinang to Veteran.",
    fullDesc:
      "Proyek konstruksi jalan tol lingkar luar Jakarta Selatan Ruas W2(S) Seksi Pondok Pinang sampai Veteran. Pengerjaan meliputi rigid pavement, struktur jembatan penyeberangan, drainase, dan pengaspalan akhir.",
    fullDescEn:
      "Construction of South Jakarta Outer Ring Road Section W2(S) from Pondok Pinang to Veteran. Works include rigid pavement, overpass bridge structures, drainage systems, and final asphalt paving.",
    location: "Jakarta Selatan",
    locationEn: "South Jakarta",
    year: "2014",
    spec: "Rigid Pavement & Elevated Jembatan",
    specEn: "Rigid Pavement & Elevated Bridges",
    client: "PT Hutama Karya (Persero)",
    clientEn: "PT Hutama Karya (Persero)",
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
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title:
      "Jalan Tol Solo - Kertosono Ruas Kartasura Karanganyar Seksi 2B & 2C dan Ruas Colomadu - Karanganyar",
    titleEn:
      "Solo - Kertosono Toll Road (Kartasura - Karanganyar Section 2B & 2C and Colomadu - Karanganyar)",
    description:
      "Pembangunan jalan tol strategis Trans-Jawa ruas Kartasura - Karanganyar & Colomadu - Karanganyar.",
    descriptionEn:
      "Construction of Trans-Java strategic toll road sections Kartasura - Karanganyar & Colomadu - Karanganyar.",
    fullDesc:
      "Pekerjaan konstruksi jalan tol trans-jawa Solo - Kertosono untuk Ruas Kartasura - Karanganyar Seksi 2B & 2C serta Ruas Colomadu - Karanganyar guna meningkatkan percepatan logistik Jawa Tengah dan Jawa Timur.",
    fullDescEn:
      "Construction of the Solo - Kertosono Trans-Java toll road for Kartasura - Karanganyar Section 2B & 2C and Colomadu - Karanganyar Section to accelerate regional logistics between Central Java and East Java.",
    location: "Jawa Tengah",
    locationEn: "Central Java",
    year: "2017",
    spec: "Pekerjaan Tanah, Rigid Pavement, Struktur",
    specEn: "Earthworks, Rigid Pavement, Structures",
    client: "PT Jasamarga Solo Ngawi",
    clientEn: "PT Jasamarga Solo Ngawi",
    image: "/images/proyek/Infrastruktur/Infrastruktur/tol kertasono.png",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/tol kertasono.png"],
  },
  {
    id: 10,
    slug: "underpass-angkasa-kemayoran",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title: "Underpass Rel KA Angkasa Kemayoran",
    titleEn: "Angkasa Railway Underpass Kemayoran",
    description:
      "Pembangunan terowongan jalan raya di bawah perlintasan rel kereta api Angkasa, Kemayoran.",
    descriptionEn:
      "Construction of a road tunnel beneath the Angkasa railway crossing in Kemayoran.",
    fullDesc:
      "Konstruksi underpass di Jalan Angkasa, Kemayoran untuk menghindari persimpangan sebidang dengan jalur rel kereta api utama (double-double track) guna menekan angka kecelakaan dan kemacetan.",
    fullDescEn:
      "Construction of an underpass at Angkasa Street, Kemayoran to bypass level crossings with the double-double track main railway line, reducing accidents and gridlock.",
    location: "Kemayoran, Jakarta Pusat",
    locationEn: "Kemayoran, Central Jakarta",
    year: "2018",
    spec: "Metode Secant Pile & Sheet Pile",
    specEn: "Secant Pile & Sheet Pile Method",
    client: "Dinas Bina Marga DKI Jakarta",
    clientEn: "DKI Jakarta Highways Agency",
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
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title: "Proyek Ring Road Jayapura-Papua 98,56 km",
    titleEn: "Jayapura-Papua Ring Road Project 98.56 km",
    description:
      "Pekerjaan pembangunan jalan lingkar (ring road) sepanjang 98,56 km untuk pengembangan konektivitas wilayah Jayapura.",
    descriptionEn:
      "Construction of a 98.56 km ring road to enhance regional connectivity in Jayapura.",
    fullDesc:
      "Pembangunan infrastruktur jalan lingkar lingkar luar (Ring Road) Jayapura sepanjang 98,56 km menyusuri pesisir bukit guna memecah kepadatan jalan raya perkotaan Jayapura.",
    fullDescEn:
      "Infrastructure construction of the 98.56 km Jayapura outer Ring Road along coastal hills to relieve urban traffic congestion in Jayapura city.",
    location: "Jayapura, Papua",
    locationEn: "Jayapura, Papua",
    year: "2021",
    spec: "Konstruksi Tebing & Perkerasan Aspal",
    specEn: "Cliff Slope Construction & Asphalt Pavement",
    client: "Balai Besar Pelaksanaan Jalan Nasional Papua",
    clientEn: "Papua National Road Implementation Center (BBPJN)",
    image: "/images/proyek/Infrastruktur/Infrastruktur/ring road.png",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/ring road.png"],
  },
  {
    id: 12,
    slug: "jalan-enarotali-sugapa",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title: "Jalan Enarotali - Sugapa I",
    titleEn: "Enarotali - Sugapa I Road",
    description:
      "Pembangunan infrastruktur jalan perintis di daerah pedalaman Papua menghubungkan Enarotali ke Sugapa.",
    descriptionEn:
      "Pioneer road infrastructure construction in hinterland Papua connecting Enarotali to Sugapa.",
    fullDesc:
      "Konstruksi jalan perintis jalur Enarotali ke Sugapa I di Kabupaten Paniai guna menghubungkan distrik terisolasi, membantu distribusi logistik daerah pegunungan tengah Papua.",
    fullDescEn:
      "Construction of a pioneer road connecting Enarotali to Sugapa I in Paniai Regency to connect isolated districts and assist logistics distribution in the central highlands of Papua.",
    location: "Paniai, Papua",
    locationEn: "Paniai, Papua",
    year: "2020",
    spec: "Konstruksi Jalan Pegunungan/Tebing",
    specEn: "Mountainous & Cliff Road Construction",
    client: "Kementerian PUPR RI",
    clientEn: "Ministry of Public Works and Housing RI",
    image: "/images/proyek/Infrastruktur/Infrastruktur/jalan enarotali.png",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/jalan enarotali.png"],
  },
  {
    id: 13,
    slug: "underpass-senen-extension",
    category: "Infrastruktur",
    categoryLabel: "Infrastruktur",
    categoryLabelEn: "Infrastructure",
    categoryColor: "#155DFC",
    title: "Underpass Senen Extension",
    titleEn: "Senen Underpass Extension",
    description:
      "Perpanjangan underpass simpang Senen untuk mengurai titik kemacetan krusial di wilayah Jakarta Pusat.",
    descriptionEn:
      "Extension of the Senen intersection underpass to relieve critical traffic bottlenecks in Central Jakarta.",
    fullDesc:
      "Proyek perpanjangan underpass lintas bawah persimpangan Senen, Jakarta Pusat. Memperluas jalur kendaraan dari arah Jl. Letjen Suprapto ke Jl. Senen Raya guna melancarkan arus lalu lintas padat stasiun.",
    fullDescEn:
      "Extension project of the subterranean underpass at Senen intersection, Central Jakarta. Expanding vehicle lanes from Jl. Letjen Suprapto to Jl. Senen Raya to smooth heavy traffic flows near the transit hub.",
    location: "Jakarta Pusat",
    locationEn: "Central Jakarta",
    year: "2020",
    spec: "Metode Top-down & Bore Pile",
    specEn: "Top-Down & Bored Pile Method",
    client: "Dinas Bina Marga DKI Jakarta",
    clientEn: "DKI Jakarta Highways Agency",
    image: "/images/proyek/Infrastruktur/Infrastruktur/UP Senen.jpeg",
    gallery: ["/images/proyek/Infrastruktur/Infrastruktur/UP Senen.jpeg"],
  },

  // === CATEGORY: SDA ===
  {
    id: 14,
    slug: "pltm-citadih-sukabumi",
    category: "SDA",
    categoryLabel: "SDA",
    categoryLabelEn: "Water Resources",
    categoryColor: "#0284C7",
    title: "Bangunan Air untuk PLTM Citadih Sukabumi",
    titleEn: "Water Works for Citadih Mini-Hydro Power Plant Sukabumi",
    description:
      "Pekerjaan konstruksi bangunan air, intake, dan saluran penghantar untuk mendukung PLTM Citadih.",
    descriptionEn:
      "Construction of water structures, intake, and headrace channel to support Citadih Mini-Hydro Power Plant.",
    fullDesc:
      "Konstruksi fasilitas keairan (Water works) meliputi bendung air intake, bak pengendap pasir (settling basin), saluran penghantar air (headrace), serta penstock pelindung untuk mendukung Pembangkit Listrik Tenaga Mikrohidro (PLTM) Citadih.",
    fullDescEn:
      "Construction of water intake facilities including diversion dam, settling basin, headrace channel, and protective penstock to support Citadih Mini-Hydro Power Plant (PLTM).",
    location: "Sukabumi, Jawa Barat",
    locationEn: "Sukabumi, West Java",
    year: "2019",
    spec: "Bendung intake PLTM & Saluran Air",
    specEn: "MHPP Intake Dam & Water Channels",
    client: "Pihak Swasta Mandiri Energi",
    clientEn: "Private Sector Mandiri Energi",
    image: "/images/proyek/SDA/SDA/PLTMCitadih.png",
    gallery: ["/images/proyek/SDA/SDA/PLTMCitadih.png"],
  },
  {
    id: 15,
    slug: "trestle-jetty-pltu-papua-2",
    category: "SDA",
    categoryLabel: "SDA",
    categoryLabelEn: "Water Resources",
    categoryColor: "#0284C7",
    title: "Trestle & Jetty PLTU Papua 2",
    titleEn: "Trestle & Jetty PLTU Papua 2",
    description:
      "Pembangunan trestle dan dermaga jetty untuk mendukung sandar kapal penyuplai bahan bakar pembangkit listrik PLTU Papua 2.",
    descriptionEn:
      "Construction of a trestle and jetty dock to accommodate fuel supply vessels for Papua 2 Power Plant.",
    fullDesc:
      "Konstruksi sipil kelautan meliputi tiang pancang baja lepas pantai (marine piles), struktur deck beton dermaga, trestle jembatan penghubung darat ke jetty lepas pantai sepanjang 4,2 km untuk operasional bongkar muat batu bara PLTU Papua 2.",
    fullDescEn:
      "Marine civil engineering construction including offshore steel marine piles, concrete deck dock structure, and a 4.2 km connecting trestle bridge from land to offshore jetty for coal unloading operations at Papua 2 Power Plant.",
    location: "Jayapura, Papua",
    locationEn: "Jayapura, Papua",
    year: "2023",
    spec: "Panjang Trestle: 4,2 km",
    specEn: "Trestle Length: 4.2 km",
    client: "PT PLN (Persero)",
    clientEn: "PT PLN (Persero)",
    image: "/images/proyek/SDA/SDA/Trestle & Jetty PLTU Papuas 2.png",
    gallery: ["/images/proyek/SDA/SDA/Trestle & Jetty PLTU Papuas 2.png"],
  },
  {
    id: 16,
    slug: "bendung-saluran-sel-silau",
    category: "SDA",
    categoryLabel: "SDA",
    categoryLabelEn: "Water Resources",
    categoryColor: "#0284C7",
    title: "Bendung & Saluran Supelsi di Sel Silau Tahap I",
    titleEn: "Dam & Supply Channel at Sei Silau Phase I",
    description:
      "Pembangunan bendung dan jaringan saluran pembawa suplai air tahap pertama di daerah irigasi Sei Silau.",
    descriptionEn:
      "Construction of diversion dam and first-phase water supply channels in the Sei Silau irrigation area.",
    fullDesc:
      "Pekerjaan pembangunan bendung utama, saluran pembagi, saluran supelsi, dan pintu pengatur air tahap pertama di daerah aliran sungai Sel Silau guna mendukung pengairan persawahan dan kedaulatan pangan wilayah Kabupaten Asahan.",
    fullDescEn:
      "Construction of main dam, distribution channels, water supply channels, and control gates in Phase 1 of the Sei Silau river basin to support agricultural irrigation and food security in Asahan Regency.",
    location: "Kabupaten Asahan, Sumatera Utara",
    locationEn: "Asahan Regency, North Sumatra",
    year: "2021",
    spec: "Bendung Beton & Saluran Supelsi",
    specEn: "Concrete Dam & Water Supply Channels",
    client: "Kementerian PUPR / BWS Sumatera II",
    clientEn: "Ministry of PUPR / BWS Sumatra II",
    image: "/images/proyek/SDA/SDA/Saluran Suplesi Sel Silau.png",
    gallery: ["/images/proyek/SDA/SDA/Saluran Suplesi Sel Silau.png"],
  },
  {
    id: 17,
    slug: "breasting-dolphin-jetty-balikpapan",
    category: "SDA",
    categoryLabel: "SDA",
    categoryLabelEn: "Water Resources",
    categoryColor: "#0284C7",
    title: "Breasting Dolphin BDS, Continuous Fender dan Catwalk Jetty 5c",
    titleEn: "Breasting Dolphin BDS, Continuous Fender and Catwalk Jetty 5c",
    description:
      "Konstruksi struktur kelautan meliputi Breasting Dolphin BDS, sistem continuous fender, dan jembatan catwalk di Jetty 5c.",
    descriptionEn:
      "Marine structure construction including Breasting Dolphin BDS, continuous fender system, and catwalk bridge at Jetty 5c.",
    fullDesc:
      "Pembangunan struktur penahan kapal bersandar (Breasting Dolphin BDS), instalasi sistem penahan benturan kapal continuous fender, serta jembatan penghubung catwalk di area sandar kilang Jetty 5c Balikpapan.",
    fullDescEn:
      "Construction of vessel berthing structures (Breasting Dolphin BDS), installation of continuous fender impact absorption systems, and connecting catwalk bridges at the Jetty 5c refinery berthing area in Balikpapan.",
    location: "Balikpapan, Kalimantan Timur",
    locationEn: "Balikpapan, East Kalimantan",
    year: "2022",
    spec: "Marine Works & Dermaga Struktur",
    specEn: "Marine Works & Jetty Structure",
    client: "PT Pertamina (Persero)",
    clientEn: "PT Pertamina (Persero)",
    image: "/images/proyek/SDA/SDA/DolphinBD5.png",
    gallery: ["/images/proyek/SDA/SDA/DolphinBD5.png"],
  },
];

export const categoryMeta: Record<
  string,
  { label: string; labelEn: string; color: string; description: string; descriptionEn: string; slug: string }
> = {
  amp: {
    label: "AMP",
    labelEn: "AMP",
    color: "#155DFC",
    description:
      "Penyediaan campuran aspal berkualitas tinggi (Asphalt Mixing Plant) untuk menunjang proyek jalan dan perkerasan aspal.",
    descriptionEn:
      "Provision of high-quality asphalt mixture (Asphalt Mixing Plant) to support road and asphalt paving projects.",
    slug: "amp",
  },
  infrastruktur: {
    label: "Infrastruktur",
    labelEn: "Infrastructure",
    color: "#155DFC",
    description:
      "Proyek pembangunan infrastruktur transportasi umum, jalan layang, jalan tol, dan terowongan lintas wilayah.",
    descriptionEn:
      "Public transportation infrastructure, flyovers, toll roads, and cross-regional tunnel construction projects.",
    slug: "infrastruktur",
  },
  sda: {
    label: "SDA",
    labelEn: "Water Resources",
    color: "#0284C7",
    description:
      "Pembangunan konstruksi Sumber Daya Air, bendung, irigasi kelautan, dan struktur jetty laut.",
    descriptionEn:
      "Construction of Water Resources, dams, marine irrigation, and marine jetty structures.",
    slug: "sda",
  },
};

export function getCategoryMeta(slug: string, locale: string) {
  const meta = categoryMeta[slug];
  if (!meta) return null;
  if (locale === "en") {
    return {
      ...meta,
      label: meta.labelEn || meta.label,
      description: meta.descriptionEn || meta.description,
    };
  }
  return meta;
}
