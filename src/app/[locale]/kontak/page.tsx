import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import { Mail, MapPin, Clock, Info } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: t.raw("metaKeywords") as string[],
  };
}

export default function KontakPage() {
  const BLUE = "#155DFC";
  const t = useTranslations("ContactPage");

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F8FAFC", minHeight: "100vh", paddingTop: 0 }}>
        
        {/* Hero Section */}
        <section style={{
          background: `linear-gradient(135deg, ${BLUE} 0%, #0D3FBA 100%)`,
          color: "#FFFFFF",
          padding: "100px 24px 32px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
           <div style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none"
          }} />

          <RevealSection variant="up">
            <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>

              <h1 style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                lineHeight: "1.2",
                marginBottom: "16px"
              }}>
                {t("title")}
              </h1>
              <p style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.6",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                {t("subtitle")}
              </p>
            </div>
          </RevealSection>
        </section>

        {/* Contact Information Section */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px" }}>
          
          {/* Grid of Contact Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: "24px",
            marginBottom: "24px"
          }}>
            
            {/* Card 1: Kantor Pusat */}
            <RevealSection variant="up" delay={1} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                padding: "28px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                height: "100%"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: `${BLUE}11`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: BLUE
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#6B7280", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t("hqLabel")}</h3>
                  <p style={{ fontSize: "15px", color: "#111827", fontWeight: 600, margin: 0, lineHeight: "1.5" }}>
                    {t("hqVal")}
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Card 2: Instagram */}
            <RevealSection variant="up" delay={2} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                padding: "28px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                height: "100%"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: `${BLUE}11`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: BLUE
                }}>
                  <InstagramIcon size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#6B7280", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t("igLabel")}</h3>
                  <p style={{ fontSize: "16px", color: "#111827", fontWeight: 600, margin: 0 }}>
                    @mwt_infrastruktur
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Card 3: Email */}
            <RevealSection variant="up" delay={3} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                padding: "28px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                height: "100%"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: `${BLUE}11`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: BLUE
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#6B7280", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t("emailLabel")}</h3>
                  <p style={{ fontSize: "16px", color: "#111827", fontWeight: 600, margin: 0, wordBreak: "break-all" }}>
                    info@modernwidyatehnical.co.id
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Card 4: Jam Kerja */}
            <RevealSection variant="up" delay={4} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                padding: "28px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                height: "100%"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: `${BLUE}11`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: BLUE
                }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#6B7280", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t("hoursLabel")}</h3>
                  <p style={{ fontSize: "16px", color: "#111827", fontWeight: 600, margin: 0 }}>
                    {t("hoursVal")}
                  </p>
                </div>
              </div>
            </RevealSection>

          </div>

          {/* Info Alert Box */}
          <RevealSection variant="up" delay={5}>
            <div style={{
              backgroundColor: "#EFF6FF",
              border: `1px solid #BFDBFE`,
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              marginBottom: "64px"
            }}>
              <Info size={20} style={{ color: BLUE, flexShrink: 0, marginTop: "2px" }} />
              <p style={{ fontSize: "13px", color: "#1E40AF", margin: 0, lineHeight: "1.6" }}>
                {t("infoText")}
              </p>
            </div>
          </RevealSection>

          {/* Instagram Section */}
          <RevealSection variant="up">
            <div style={{
              marginTop: "64px",
              borderTop: "1px solid #E2E8F0",
              paddingTop: "64px"
            }}>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <span style={{
                  color: BLUE,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px"
                }}>
                  {t("igBadge")}
                </span>
                <h2 style={{
                  fontSize: "30px",
                  fontWeight: 800,
                  color: "#111827",
                  letterSpacing: "-0.5px"
                }}>
                  {t("igTitle")}
                </h2>
                <p style={{
                  fontSize: "15px",
                  color: "#6B7280",
                  maxWidth: "600px",
                  margin: "8px auto 0",
                  lineHeight: "1.6"
                }}>
                  {t("igSubtitle")}
                </p>
              </div>

              <InstagramFeed />
            </div>
          </RevealSection>

        </section>

      </main>
      <Footer />
    </>
  );
}
