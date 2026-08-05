"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, ArrowRight, Eye } from "lucide-react";
import { allProjects } from "@/lib/proyekData";
import { useLocale, useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

const BLUE = "#155DFC";
const BLUE_DARK = "#0D3FBA";

type CategoryKey = "Semua" | "AMP" | "Infrastruktur" | "SDA";

interface Project {
  id: number;
  slug: string;
  category: "AMP" | "Infrastruktur" | "SDA";
  categoryLabel: string;
  categoryColor: string;
  title: string;
  description: string;
  fullDesc: string;
  location: string;
  year: string;
  spec: string;
  image: string;
}

const projects = allProjects as unknown as Project[];

const CATEGORIES: CategoryKey[] = ["Semua", "AMP", "Infrastruktur", "SDA"];

export default function ProyekSection() {
  const locale = useLocale();
  const t = useTranslations("ProjectsSection");

  const getCategoryFilterLabel = (cat: CategoryKey) => {
    if (cat === "Semua") return t("filterAll");
    if (cat === "AMP") return t("filterAMP");
    if (cat === "Infrastruktur") return t("filterInfra");
    if (cat === "SDA") return t("filterSDA");
    return cat;
  };
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Semua");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>();

  const filtered = (() => {
    if (activeCategory === "Semua") {
      const ampProjs = projects.filter((p) => p.category === "AMP").slice(0, 3);
      const infraProjs = projects.filter((p) => p.category === "Infrastruktur").slice(0, 3);
      const sdaProjs = projects.filter((p) => p.category === "SDA").slice(0, 3);
      return [...ampProjs, ...infraProjs, ...sdaProjs];
    } else {
      return projects.filter((p) => p.category === activeCategory).slice(0, 3);
    }
  })();

  const totalSlides = Math.ceil(filtered.length / visibleCount);

  const safeIndex = Math.min(currentIndex, Math.max(0, totalSlides - 1));

  const goTo = useCallback((idx: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsAnimating(false);
    }, 320);
  }, [isAnimating]);

  const prev = () => {
    if (safeIndex <= 0) return;
    goTo(safeIndex - 1, "left");
  };

  const next = () => {
    if (safeIndex >= totalSlides - 1) return;
    goTo(safeIndex + 1, "right");
  };

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      if (safeIndex < totalSlides - 1) {
        next();
        resetAuto();
      }
    } else if (distance < -minSwipeDistance) {
      if (safeIndex > 0) {
        prev();
        resetAuto();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-play
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next >= totalSlides ? 0 : next;
      });
    }, 4500);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [totalSlides, activeCategory]);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next >= totalSlides ? 0 : next;
      });
    }, 4500);
  };

  const handleCategory = (cat: CategoryKey) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const visibleProjects = filtered.slice(safeIndex * visibleCount, (safeIndex + 1) * visibleCount);

  return (
    <section
      id="proyek"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "96px 0 80px",
        borderTop: "1px solid #E2E8F0",
        overflow: "hidden",
      }}
    >
      <div ref={sectionRef} style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div className={`reveal reveal-up ${isInView ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            fontSize: "clamp(34px, 5vw, 44px)",
            fontWeight: 800,
            color: BLUE,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            lineHeight: "1.2",
            marginBottom: "16px",
            display: "block",
          }}>
            {t("title")}
          </h2>
          <p style={{
            fontSize: "17px",
            fontWeight: 500,
            color: "#6B7280",
            lineHeight: "1.6",
            maxWidth: "620px",
            margin: "0 auto",
          }}>
            {t("subtitle")}
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "48px",
          flexWrap: "wrap",
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              style={{
                padding: "8px 22px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                border: activeCategory === cat ? `2px solid ${BLUE}` : "2px solid #E2E8F0",
                backgroundColor: activeCategory === cat ? BLUE : "#FFFFFF",
                color: activeCategory === cat ? "#FFFFFF" : "#6B7280",
                transition: "all 0.2s ease",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = BLUE;
                  e.currentTarget.style.color = BLUE;
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.color = "#6B7280";
                }
              }}
            >
              {getCategoryFilterLabel(cat)}
            </button>
          ))}
        </div>

        {/* Slider Wrapper */}
        <div style={{ position: "relative" }}>

          {/* Prev Button */}
          <button
            onClick={() => { prev(); resetAuto(); }}
            disabled={safeIndex <= 0}
            aria-label="Slide sebelumnya"
            style={{
              position: "absolute",
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "2px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
              color: "#374151",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: safeIndex <= 0 ? "default" : "pointer",
              opacity: safeIndex <= 0 ? 0.35 : 1,
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              if (safeIndex > 0) {
                e.currentTarget.style.backgroundColor = BLUE;
                e.currentTarget.style.borderColor = BLUE;
                e.currentTarget.style.color = "#FFFFFF";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.borderColor = "#E2E8F0";
              e.currentTarget.style.color = "#374151";
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards Grid */}
          <div
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(visibleCount, filtered.length)}, 1fr)`,
              gap: "24px",
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? `translateX(${direction === "right" ? "-16px" : "16px"})`
                : "translateX(0)",
              transition: "opacity 0.32s ease, transform 0.32s ease",
            }}
          >
            {visibleProjects.map((project, i) => (
              <ProjectCard
                key={`${project.id}-${i}`}
                project={project}
                isHovered={hoveredCard === project.id}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => { next(); resetAuto(); }}
            disabled={safeIndex >= totalSlides - 1}
            aria-label="Slide berikutnya"
            style={{
              position: "absolute",
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "2px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
              color: "#374151",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: safeIndex >= totalSlides - 1 ? "default" : "pointer",
              opacity: safeIndex >= totalSlides - 1 ? 0.35 : 1,
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              if (safeIndex < totalSlides - 1) {
                e.currentTarget.style.backgroundColor = BLUE;
                e.currentTarget.style.borderColor = BLUE;
                e.currentTarget.style.color = "#FFFFFF";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.borderColor = "#E2E8F0";
              e.currentTarget.style.color = "#374151";
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot Indicators */}
        {totalSlides > 1 && (
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "36px",
          }}>
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i, i > safeIndex ? "right" : "left"); resetAuto(); }}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === safeIndex ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  border: "none",
                  backgroundColor: i === safeIndex ? BLUE : "#CBD5E1",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  padding: 0,
                  outline: "none",
                }}
              />
            ))}
          </div>
        )}

        {/* View All Link */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href={`/${locale}/proyek`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: BLUE,
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              border: `2px solid ${BLUE}`,
              padding: "12px 28px",
              borderRadius: "8px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = BLUE;
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(21,93,252,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = BLUE;
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {t("viewAll")}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  project: Project;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const locale = useLocale();
  const t = useTranslations("ProjectsSection");

  const getCategoryFilterLabel = (cat: string) => {
    if (cat === "Semua") return t("filterAll");
    if (cat === "AMP") return t("filterAMP");
    if (cat === "Infrastruktur") return t("filterInfra");
    if (cat === "SDA") return t("filterSDA");
    return cat;
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
        boxShadow: isHovered
          ? "0 16px 48px rgba(21,93,252,0.12)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        transform: isHovered ? "translateY(-6px)" : "none",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "220px" }}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: isHovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        {/* Overlay gradient on hover */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: isHovered
            ? "linear-gradient(to top, rgba(13,63,186,0.55), transparent)"
            : "linear-gradient(to top, rgba(0,0,0,0.25), transparent)",
          transition: "background 0.3s ease",
        }} />
        {/* Category badge */}
        <span style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          backgroundColor: project.categoryColor,
          color: "#FFFFFF",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: "999px",
        }}>
          {getCategoryFilterLabel(project.category)}
        </span>
        {/* Quick view icon */}
        <div style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "scale(1)" : "scale(0.8)",
          transition: "all 0.25s ease",
        }}>
          <Eye size={15} color={BLUE} />
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontSize: "17px",
          fontWeight: 700,
          color: isHovered ? BLUE : "#111827",
          marginBottom: "10px",
          lineHeight: "1.3",
          transition: "color 0.2s",
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: "14px",
          color: "#6B7280",
          lineHeight: "1.65",
          marginBottom: "16px",
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Meta info */}
        <div style={{
          display: "flex",
          gap: "16px",
          fontSize: "12px",
          color: "#9CA3AF",
          fontWeight: 500,
          marginBottom: "18px",
          borderTop: "1px solid #F1F5F9",
          paddingTop: "14px",
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <MapPin size={12} color="#9CA3AF" />
            {project.location}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Calendar size={12} color="#9CA3AF" />
            {t("yearPrefix")} {project.year}
          </span>
        </div>

        {/* Spec tag + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{
            fontSize: "12px",
            color: "#6B7280",
            fontWeight: 500,
          }}>
            {project.spec}
          </span>
          <a
            href={`/${locale}/proyek/${project.category.toLowerCase()}/${project.slug || project.id}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#FFFFFF",
              backgroundColor: BLUE,
              padding: "8px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s",
              border: `1.5px solid ${BLUE}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = BLUE_DARK;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = BLUE;
              e.currentTarget.style.transform = "none";
            }}
          >
            {t("moreDetails")}
            <ChevronRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
