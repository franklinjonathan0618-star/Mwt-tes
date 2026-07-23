"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

const BLUE = "#155DFC";
const BLUE_DARK = "#0D3FBA";
const BLUE_LIGHT = "#EEF3FF";

export default function CTASection() {
  const locale = useLocale();
  const t = useTranslations("CTA");
  const { ref, isInView } = useInView<HTMLDivElement>();
  return (
    <section style={{ backgroundColor: "#F8FAFC", padding: "0 24px 80px 24px" }}>
      <div ref={ref} className={`reveal reveal-scale ${isInView ? "visible" : ""}`} style={{
        maxWidth: "1400px",
        margin: "0 auto",
        background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`,
        borderRadius: "16px",
        padding: "64px 48px",
        color: "#FFFFFF",
        textAlign: "center",
        boxShadow: "0 10px 35px rgba(21, 93, 252, 0.35)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 32px)",
            fontWeight: 700,
            lineHeight: "1.2",
            marginBottom: "16px",
          }}>
            {t("title")}
          </h2>
          <p style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.9)",
            maxWidth: "600px",
            margin: "0 auto 32px auto",
            lineHeight: "1.6",
          }}>
            {t("subtitle")}
          </p>
          <a
            href={`/${locale}/kontak`}
            style={{
              display: "inline-block",
              backgroundColor: "#FFFFFF",
              color: BLUE,
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              padding: "14px 32px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = BLUE_LIGHT;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.transform = "none";
            }}
          >
            {t("button")}
          </a>
        </div>

        {/* Decorative circles */}
        <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", zIndex: 1 }} />
        <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", zIndex: 1 }} />
      </div>
    </section>
  );
}
