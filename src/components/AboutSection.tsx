"use client";

import { Eye, Target, Clock, Award, Users, Layers, Zap, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const t = useTranslations("About");
  const BLUE = "#155DFC";
  const BLUE_DARK = "#0D3FBA";
  const BLUE_LIGHT = "#EEF3FF";

  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div id="tentang" style={{ backgroundColor: "#F8FAFC" }}>
      {/* Company Profile Section */}
      <section id="profil" style={{ padding: "96px 24px" }}>
        <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Profile */}
            <div className={`reveal reveal-left ${isInView ? "visible" : ""}`}>
              <h2 style={{
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 800,
                color: BLUE,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                lineHeight: "1.2",
                marginBottom: "20px",
                display: "block"
              }}>
                {t("title")}
              </h2>
              <div style={{ color: "#6B7280", fontSize: "16px", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "20px", textAlign: "justify" }}>
                <p>
                  {t("paragraph1")}
                </p>
                <p>
                  {t("paragraph2")}
                </p>
                <p>
                  {t("paragraph3")}
                </p>
              </div>
            </div>

            {/* Stats Grid - 2 Atas 2 Bawah dengan ukuran 4 kotak SAMA PERSIS */}
            <div className={`grid grid-cols-2 gap-4 lg:gap-6 reveal reveal-right reveal-delay-2 ${isInView ? "visible" : ""}`}>
              {/* Stat 1 */}
              <div
                style={{
                  background: BLUE,
                  borderRadius: "12px",
                  padding: "32px 24px",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 25px rgba(21, 93, 252, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  minHeight: "150px"
                }}
              >
                <h3 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", fontWeight: 800, margin: 0, lineHeight: 1 }}>40+</h3>
                <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "rgba(255,255,255,0.9)", margin: "12px 0 0 0", fontWeight: 500, lineHeight: 1.3 }}>{t("statExperience")}</p>
              </div>

              {/* Stat 2 */}
              <div
                style={{
                  background: BLUE,
                  borderRadius: "12px",
                  padding: "32px 24px",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 25px rgba(21, 93, 252, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  minHeight: "150px"
                }}
              >
                <h3 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", fontWeight: 800, margin: 0, lineHeight: 1 }}>50+</h3>
                <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "rgba(255,255,255,0.9)", margin: "12px 0 0 0", fontWeight: 500, lineHeight: 1.3 }}>{t("statProjects")}</p>
              </div>

              {/* Stat 3 */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  minHeight: "150px"
                }}
              >
                <h3 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", fontWeight: 800, color: BLUE, margin: 0, lineHeight: 1 }}>100%</h3>
                <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "#6B7280", margin: "12px 0 0 0", fontWeight: 500, lineHeight: 1.3 }}>{t("statSafety")}</p>
              </div>

              {/* Stat 4 */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  minHeight: "150px"
                }}
              >
                <h3 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", fontWeight: 800, color: BLUE, margin: 0, lineHeight: 1 }}>15+</h3>
                <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "#6B7280", margin: "12px 0 0 0", fontWeight: 500, lineHeight: 1.3 }}>{t("statProvinces")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

