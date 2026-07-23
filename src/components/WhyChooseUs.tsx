"use client";

import React from "react";
import { Clock, Award, Users, Layers, Zap, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");
  const BLUE = "#155DFC";
  const BLUE_DARK = "#0D3FBA";
  const BLUE_LIGHT = "#EEF3FF";

  const { ref, isInView } = useInView<HTMLDivElement>();

  const itemsData = t.raw("items") as { title: string; desc: string }[];

  const cardsData = [
    {
      icon: <Clock size={24} />,
      iconBg: "#EEF3FF",
      iconColor: "#155DFC",
      glowColor: "rgba(21, 93, 252, 0.15)",
      title: itemsData[0].title,
      desc: itemsData[0].desc
    },
    {
      icon: <Award size={24} />,
      iconBg: "#E8F5E9",
      iconColor: "#2E7D32",
      glowColor: "rgba(46, 125, 50, 0.15)",
      title: itemsData[1].title,
      desc: itemsData[1].desc
    },
    {
      icon: <Users size={24} />,
      iconBg: "#F3E8FF",
      iconColor: "#9333EA",
      glowColor: "rgba(147, 51, 234, 0.15)",
      title: itemsData[2].title,
      desc: itemsData[2].desc
    },
    {
      icon: <Layers size={24} />,
      iconBg: "#FFEDD5",
      iconColor: "#EA580C",
      glowColor: "rgba(234, 88, 12, 0.15)",
      title: itemsData[3].title,
      desc: itemsData[3].desc
    },
    {
      icon: <Zap size={24} />,
      iconBg: "#FEE2E2",
      iconColor: "#DC2626",
      glowColor: "rgba(220, 38, 38, 0.15)",
      title: itemsData[4].title,
      desc: itemsData[4].desc
    },
    {
      icon: <Sparkles size={24} />,
      iconBg: "#E0F2FE",
      iconColor: "#0284C7",
      glowColor: "rgba(2, 132, 199, 0.15)",
      title: itemsData[5].title,
      desc: itemsData[5].desc
    }
  ];

  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      {/* Why Choose Us Section */}
      <section id="nilai-perusahaan" style={{ padding: "96px 24px" }}>
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
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              {t.rich("subtitle", {
                blue: (chunks) => <span style={{ color: BLUE }}>{chunks}</span>,
                green: (chunks) => <span style={{ color: "#2E7D32" }}>{chunks}</span>
              })}
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "24px"
          }}>
            {cardsData.map((value, i) => {
              const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              };

              return (
                <div
                  key={i}
                  className={`reveal reveal-up reveal-delay-${Math.min(i + 1, 6)} ${isInView ? "visible" : ""}`}
                  onMouseMove={handleMouseMove}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    padding: "40px 32px",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    backgroundImage: `radial-gradient(circle 300px at var(--mouse-x, -500px) var(--mouse-y, -500px), ${value.glowColor}, transparent 80%)`,
                    backgroundRepeat: "no-repeat"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = value.iconColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.setProperty("--mouse-x", "-500px");
                    e.currentTarget.style.setProperty("--mouse-y", "-500px");
                  }}
                >
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    backgroundColor: value.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    color: value.iconColor
                  }}>
                    {value.icon}
                  </div>
                  <h3 style={{ fontSize: "21px", fontWeight: 700, color: BLUE, marginBottom: "14px" }}>{value.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
