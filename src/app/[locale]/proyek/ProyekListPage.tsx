"use client";

import React, { useState } from "react";
import { ArrowRight, Building2, Waves, Construction } from "lucide-react";
import { allProjects } from "@/lib/proyekData";
import { useLocale, useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BLUE = "#155DFC";

interface CategoryItem {
  slug: string;
  color: string;
  bgGradient: string;
  icon: React.ReactNode;
  image: string;
  label: string;
  fullLabel: string;
  description: string;
}

const categoriesData = [
  {
    slug: "amp",
    color: "#155DFC",
    bgGradient: "linear-gradient(135deg, #155DFC 0%, #0D3FBA 100%)",
    icon: <Construction size={32} color="#FFFFFF" />,
    image: "/images/proyek/AMP/CMNP/TRAIL COMPSTC (3).jpeg",
  },
  {
    slug: "infrastruktur",
    color: "#155DFC",
    bgGradient: "linear-gradient(135deg, #155DFC 0%, #0D3FBA 100%)",
    icon: <Building2 size={32} color="#FFFFFF" />,
    image: "/images/proyek/Infrastruktur/Infrastruktur/blok M-antasari.png",
  },
  {
    slug: "sda",
    color: "#155DFC",
    bgGradient: "linear-gradient(135deg, #155DFC 0%, #0D3FBA 100%)",
    icon: <Waves size={32} color="#FFFFFF" />,
    image: "/images/proyek/SDA/SDA/PLTMCitadih.png",
  },
];

export default function ProyekPage() {
  const locale = useLocale();
  const t = useTranslations("ProjectsPage");
  const tSec = useTranslations("ProjectsSection");

  const getCategoryLabel = (slug: string) => {
    if (slug === "amp") return tSec("filterAMP");
    if (slug === "infrastruktur") return tSec("filterInfra");
    if (slug === "sda") return tSec("filterSDA");
    return slug.toUpperCase();
  };

  const translatedCategories: CategoryItem[] = categoriesData.map((cat) => ({
    ...cat,
    label: getCategoryLabel(cat.slug),
    fullLabel: t(`categories.${cat.slug}.fullLabel`),
    description: t(`categories.${cat.slug}.description`),
  }));

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>

        {/* Hero Banner */}
        <section style={{
          background: `linear-gradient(135deg, ${BLUE} 0%, #0D3FBA 100%)`,
          padding: "90px 24px 64px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

          <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>


            <h1 style={{
              fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#FFFFFF",
              textTransform: "uppercase", letterSpacing: "2px", lineHeight: "1.1", marginBottom: "20px",
            }}>
              {t("title")}
            </h1>
            <p style={{
              fontSize: "18px", color: "rgba(255,255,255,0.85)", maxWidth: "620px",
              lineHeight: "1.65", fontWeight: 400, margin: "0 auto",
            }}>
              {t("subtitle")}
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: "48px", marginTop: "48px", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { val: t("statProjectsVal"), label: t("statProjectsLabel") },
                { val: t("statExperienceVal"), label: t("statExperienceLabel") },
                { val: t("statProvincesVal"), label: t("statProvincesLabel") },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "32px", fontWeight: 800, color: "#FFFFFF" }}>{s.val}</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: 500, marginTop: "4px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "12px 24px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "8px", fontSize: "13px", color: "#9CA3AF", fontWeight: 500 }}>
            <a href={`/${locale}`} style={{ color: "#9CA3AF", textDecoration: "none" }}>{t("breadcrumbHome")}</a>
            <span>/</span>
            <span style={{ color: BLUE, fontWeight: 700 }}>{t("breadcrumbProjects")}</span>
          </div>
        </div>

        {/* Category Cards */}
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "64px 24px 96px" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#111827", marginBottom: "12px" }}>
              {t("selectCategoryTitle")}
            </h2>
            <p style={{ fontSize: "16px", color: "#6B7280", maxWidth: "500px", margin: "0 auto", lineHeight: "1.6" }}>
              {t("selectCategorySubtitle")}
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "24px",
          }}>
            {translatedCategories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} projectCount={allProjects.filter(p => p.category.toLowerCase() === cat.slug).length} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CategoryCard({
  category,
  projectCount,
}: {
  category: CategoryItem;
  projectCount: number;
}) {
  const [hovered, setHovered] = useState(false);
  const locale = useLocale();
  const t = useTranslations("ProjectsPage");

  return (
    <a
      href={`/${locale}/proyek/${category.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        height: "420px",
        boxShadow: hovered
          ? `0 24px 64px ${category.color}30`
          : "0 4px 16px rgba(0,0,0,0.08)",
        transform: hovered ? "translateY(-8px)" : "none",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        cursor: "pointer",
      }}
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.label}
        loading="lazy"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%", objectFit: "cover",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
      />

      {/* Gradient Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered
          ? `linear-gradient(to top, ${category.color}f0 0%, ${category.color}88 50%, transparent 100%)`
          : `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)`,
        transition: "background 0.4s ease",
      }} />

      {/* Top badge */}
      <div style={{
        position: "absolute", top: "20px", left: "20px",
        display: "flex", alignItems: "center", gap: "10px",
      }}>
        <div style={{
          width: "44px", height: "44px", borderRadius: "12px",
          background: hovered ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(8px)",
          transition: "background 0.3s",
        }}>
          {category.icon}
        </div>
        <span style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(8px)",
          color: "#FFFFFF", fontSize: "11px", fontWeight: 700,
          letterSpacing: "1.5px", textTransform: "uppercase",
          padding: "5px 12px", borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.3)",
        }}>
          {projectCount} {t("projectsCountLabel")}
        </span>
      </div>

      {/* Bottom content */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "28px 24px",
      }}>
        <div style={{
          fontSize: "11px", fontWeight: 700, letterSpacing: "2px",
          color: "rgba(255,255,255,0.75)", textTransform: "uppercase",
          marginBottom: "8px",
        }}>
          {category.fullLabel}
        </div>
        <h3 style={{
          fontSize: "28px", fontWeight: 800, color: "#FFFFFF",
          letterSpacing: "1px", marginBottom: "10px",
          textTransform: "uppercase",
        }}>
          {category.label}
        </h3>
        <p style={{
          fontSize: "14px", color: "rgba(255,255,255,0.85)",
          lineHeight: "1.55", marginBottom: "20px",
          maxWidth: "320px",
        }}>
          {category.description}
        </p>

        {/* CTA */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          backgroundColor: "#FFFFFF", color: category.color,
          fontSize: "13px", fontWeight: 700,
          padding: "10px 20px", borderRadius: "8px",
          transform: hovered ? "translateX(4px)" : "none",
          transition: "transform 0.25s ease",
        }}>
          {t("viewProjects")}
          <ArrowRight size={14} />
        </div>
      </div>
    </a>
  );
}
