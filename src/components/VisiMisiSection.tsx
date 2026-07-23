"use client";

import React from "react";
import { Eye, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

export default function VisiMisiSection() {
  const t = useTranslations("VisiMisi");
  const BLUE = "#155DFC";
  const BLUE_LIGHT = "#EEF3FF";

  const { ref, isInView } = useInView<HTMLDivElement>();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    e.currentTarget.style.borderColor = BLUE;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.04)";
    e.currentTarget.style.borderColor = "#E2E8F0";
    e.currentTarget.style.setProperty("--mouse-x", "-500px");
    e.currentTarget.style.setProperty("--mouse-y", "-500px");
  };

  // Retrieve the list of missions dynamically as an array of strings
  const missions = t.raw("missions") as string[];

  return (
    <section id="visi-misi" style={{ backgroundColor: "#EEF3FF", padding: "96px 24px" }}>
      <div ref={ref} style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className={`reveal reveal-up ${isInView ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={{
            fontSize: "clamp(34px, 5vw, 44px)",
            fontWeight: 800,
            color: BLUE,
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
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            {t("subtitle")}
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "24px"
        }}>
          {/* Vision Card */}
          <div
            className={`reveal reveal-left reveal-delay-1 ${isInView ? "visible" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "48px 40px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              backgroundImage: `radial-gradient(circle 300px at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(21, 93, 252, 0.12), transparent 80%)`,
              backgroundRepeat: "no-repeat"
            }}
          >
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "12px",
              backgroundColor: BLUE_LIGHT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "28px",
              color: BLUE
            }}>
              <Eye size={30} />
            </div>
            <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", marginBottom: "18px" }}>{t("visionTitle")}</h3>
            <p style={{ color: "#6B7280", fontSize: "19px", lineHeight: "1.9", margin: 0, textAlign: "justify" }}>
              {t("visionText")}
            </p>
          </div>

          {/* Mission Card */}
          <div
            className={`reveal reveal-right reveal-delay-2 ${isInView ? "visible" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "48px 40px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              backgroundImage: `radial-gradient(circle 300px at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(21, 93, 252, 0.12), transparent 80%)`,
              backgroundRepeat: "no-repeat"
            }}
          >
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "12px",
              backgroundColor: BLUE_LIGHT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "28px",
              color: BLUE
            }}>
              <Target size={30} />
            </div>
            <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", marginBottom: "18px" }}>{t("missionTitle")}</h3>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              color: "#6B7280",
              fontSize: "16px",
              lineHeight: "1.6"
            }}>
              {missions.map((misi, index) => (
                <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "12px", textAlign: "justify" }}>
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: BLUE,
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: "2px"
                  }}>{index + 1}</span>
                  <span>{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
