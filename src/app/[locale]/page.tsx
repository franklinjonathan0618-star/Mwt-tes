import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoLoop from "@/components/LogoLoop";
import AboutSection from "@/components/AboutSection";
import VisiMisiSection from "@/components/VisiMisiSection";
import TimManajemen from "@/components/timManajemen";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProyekSection from "@/components/ProyekSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import { useTranslations } from "next-intl";

const partnerLogos = [
  { src: "/images/sertif/7.png", alt: "Sertifikat 1" },
  { src: "/images/sertif/8.png", alt: "Sertifikat 2" },
  { src: "/images/sertif/9.png", alt: "Sertifikat 3" },
  { src: "/images/sertif/10.png", alt: "Sertifikat 4" },
  { src: "/images/sertif/11.png", alt: "Sertifikat 5" },
];

export default function Home() {
  const t = useTranslations("ManagementTeam");
  const tCert = useTranslations("Certification");

  const membersData = t.raw("members") as { name: string; role: string }[];

  const managementTeam = [
    {
      image: "/images/riadi.png",
      text: `${membersData[0].name} - ${membersData[0].role}`
    },
    {
      image: "/images/nur.png",
      text: `${membersData[1].name} - ${membersData[1].role}`
    },
    {
      image: "/images/aziz.png",
      text: `${membersData[2].name} - ${membersData[2].role}`
    },
    {
      image: "/images/jj (1).png",
      text: `${membersData[3].name} - ${membersData[3].role}`
    },
    {
      image: "/images/bs.png",
      text: `${membersData[4].name} - ${membersData[4].role}`
    },
    {
      image: "/images/Untitled design (15).png",
      text: `${membersData[5].name} - ${membersData[5].role}`
    },
    {
      image: "/images/ita.png",
      text: `${membersData[6].name} - ${membersData[6].role}`
    },
    {
      image: "/images/suman.png",
      text: `${membersData[7].name} - ${membersData[7].role}`
    },
    {
      image: "/images/Untitled design (14).png",
      text: `${membersData[8].name} - ${membersData[8].role}`
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisiMisiSection />

        {/* Management Team Section */}
        <section id="tim-manajemen" style={{ backgroundColor: "#F8FAFC", width: "100%", overflow: "hidden", position: "relative", padding: "96px 0 0 0", borderBottom: "1px solid #E2E8F0" }}>
          <RevealSection variant="up">
            <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 24px" }}>
              <h2 style={{
                fontSize: "clamp(34px, 5vw, 44px)",
                fontWeight: 800,
                color: "#155DFC",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                lineHeight: "1.2",
                marginBottom: "16px",
                display: "block"
              }}>
                {t("title")}
              </h2>
              <p style={{
                fontSize: "21px",
                fontWeight: 600,
                color: "#111827",
                lineHeight: "1.4",
                letterSpacing: "-0.5px",
                maxWidth: "800px",
                margin: "0 auto"
              }}>
                {t("subtitle")}
              </p>
            </div>
          </RevealSection>

          <div style={{
            width: "100%",
            position: "relative",
            overflow: "visible",
            paddingBottom: "48px"
          }}>
            <TimManajemen items={managementTeam} bend={3.5} textColor="#155DFC" scrollSpeed={1.8} gap={4.2} font="bold 38px Figtree" />
          </div>
        </section>
        <WhyChooseUs />
        <ProyekSection />

        <CTASection />

        {/* Partner Logo Loop Section */}
        <RevealSection variant="up">
          <section style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E2E8F0", padding: "40px 0", borderBottom: "1px solid #E2E8F0" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <p style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  margin: 0
                }}>
                  {tCert("title")}
                </p>
              </div>
              <LogoLoop
                logos={partnerLogos}
                speed={40}
                gap={48}
                fadeOut={true}
                fadeOutColor="#FFFFFF"
                pauseOnHover={true}
                logoHeight={160}
              />
            </div>
          </section>
        </RevealSection>
      </main>
      <Footer />
    </>
  );
}
