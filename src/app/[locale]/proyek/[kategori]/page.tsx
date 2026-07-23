"use client";

import React, { use, useState, useRef, useEffect } from "react";
import { MapPin, Calendar, ChevronRight, ArrowLeft, Layers, Play, Volume2, VolumeX } from "lucide-react";
import { allProjects, categoryMeta } from "@/lib/proyekData";
import { useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import { notFound } from "next/navigation";

const BLUE = "#155DFC";

export default function KategoriPage({ params }: { params: Promise<{ kategori: string }> }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const locale = useLocale();
  const { kategori } = use(params);
  const slug = kategori.toLowerCase();
  const meta = categoryMeta[slug];

  if (!meta) return notFound();

  const filteredProjects = allProjects.filter(
    (p) => p.category.toLowerCase() === slug
  );

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const projects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const isAMP = slug === "amp";

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>

        {/* Hero Banner */}
        <section style={{
          background: `linear-gradient(135deg, ${meta.color} 0%, ${meta.color}cc 100%)`,
          padding: "90px 24px 64px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

          <div style={{
            maxWidth: "1400px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: isAMP ? "1fr 1fr" : "1fr",
            gap: "48px",
            alignItems: "center",
          }}>
            {/* ── Left: text content ── */}
            <div style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}>
              <a href={`/${locale}/proyek`} style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                color: "rgba(255,255,255,0.75)", fontSize: "14px", fontWeight: 500,
                textDecoration: "none", marginBottom: "24px",
              }}>
                <ArrowLeft size={14} /> Semua Proyek
              </a>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Layers size={20} color="#FFFFFF" />
                </div>
                <span style={{
                  backgroundColor: "rgba(255,255,255,0.2)", color: "#FFFFFF",
                  fontSize: "11px", fontWeight: 700, letterSpacing: "2px",
                  textTransform: "uppercase", padding: "5px 14px", borderRadius: "999px",
                }}>
                  Kategori
                </span>
              </div>

              <h1 style={{
                fontSize: isAMP ? "clamp(28px, 3.5vw, 46px)" : "clamp(32px, 4.5vw, 52px)",
                fontWeight: 800, color: "#FFFFFF",
                letterSpacing: "0.5px", lineHeight: "1.1", marginBottom: "16px",
              }}>
                {isAMP ? "Asphalt Mixing Plant" : meta.label.toUpperCase()}
              </h1>

              <p style={{
                fontSize: "16px", color: "rgba(255,255,255,0.85)", maxWidth: "520px",
                lineHeight: "1.65", fontWeight: 400, marginBottom: "28px",
              }}>
                {meta.description}
              </p>

              <span style={{
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.18)", color: "#FFFFFF",
                fontSize: "14px", fontWeight: 700, padding: "8px 18px", borderRadius: "999px",
              }}>
                {projects.length} Proyek
              </span>
            </div>

            {/* ── Right: video (AMP only) ── */}
            {isAMP && (
              <div style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "scale(1)" : "scale(0.95)",
                transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
              }}>
                <AMPVideo color={meta.color} />
              </div>
            )}
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "12px 24px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "8px", fontSize: "13px", color: "#9CA3AF", fontWeight: 500 }}>
            <a href={`/${locale}`} style={{ color: "#9CA3AF", textDecoration: "none" }}>Beranda</a>
            <span>/</span>
            <a href={`/${locale}/proyek`} style={{ color: "#9CA3AF", textDecoration: "none" }}>Proyek</a>
            <span>/</span>
            <span style={{ color: meta.color, fontWeight: 700 }}>{isAMP ? "AMP" : meta.label}</span>
          </div>
        </div>

        {/* Project Grid */}
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "56px 24px 96px" }}>
          {filteredProjects.length > 0 && (
            <RevealSection variant="up">
              <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#111827", marginBottom: "6px" }}>
                  Proyek {isAMP ? "AMP" : meta.label}
                </h2>
                <p style={{ fontSize: "14px", color: "#6B7280", fontWeight: 500 }}>
                  Menampilkan {startIndex + 1} – {Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)} dari {filteredProjects.length} proyek
                </p>
              </div>
            </RevealSection>
          )}

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "24px",
          }}>
            {projects.map((project, idx) => (
              <RevealSection key={project.id} variant="up" delay={idx + 1} style={{ display: "flex", flexDirection: "column" }}>
                <ProjectCard project={project} accentColor={meta.color} />
              </RevealSection>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              marginTop: "56px"
            }}>
              {/* Prev Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  color: currentPage === 1 ? "#9CA3AF" : "#374151",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: currentPage === 1 ? "default" : "pointer",
                  transition: "all 0.2s",
                  opacity: currentPage === 1 ? 0.5 : 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.borderColor = meta.color;
                    e.currentTarget.style.color = meta.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.color = "#374151";
                  }
                }}
              >
                Sebelumnya
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      border: isCurrent ? `2px solid ${meta.color}` : "1px solid #E2E8F0",
                      backgroundColor: isCurrent ? meta.color : "#FFFFFF",
                      color: isCurrent ? "#FFFFFF" : "#374151",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isCurrent) {
                        e.currentTarget.style.borderColor = meta.color;
                        e.currentTarget.style.color = meta.color;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isCurrent) {
                        e.currentTarget.style.borderColor = "#E2E8F0";
                        e.currentTarget.style.color = "#374151";
                      }
                    }}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  color: currentPage === totalPages ? "#9CA3AF" : "#374151",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: currentPage === totalPages ? "default" : "pointer",
                  transition: "all 0.2s",
                  opacity: currentPage === totalPages ? 0.5 : 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.borderColor = meta.color;
                    e.currentTarget.style.color = meta.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.color = "#374151";
                  }
                }}
              >
                Berikutnya
              </button>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 24px", color: "#9CA3AF" }}>
              <p style={{ fontSize: "18px", fontWeight: 600 }}>Belum ada proyek di kategori ini.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

// ── Inline video component ────────────────────────────────────────────────────
function AMPVideo({ color }: { color: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div style={{
      position: "relative",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
      border: "2px solid rgba(255,255,255,0.2)",
      backgroundColor: "#000",
      aspectRatio: "16/9",
    }}>
      <video
        ref={videoRef}
        src="/images/AMP.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* Bottom gradient */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "70px",
        background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
        pointerEvents: "none",
      }} />

      {/* Top-left badge */}
      <div style={{
        position: "absolute", top: "12px", left: "12px",
        backgroundColor: color, color: "#FFFFFF",
        fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px",
        textTransform: "uppercase", padding: "4px 10px", borderRadius: "999px",
      }}>
        AMP · Periodik 2025
      </div>

      {/* Controls bottom-right */}
      <div style={{ position: "absolute", bottom: "12px", right: "12px", display: "flex", gap: "6px" }}>
        <button
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          style={{
            width: "34px", height: "34px", borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#FFFFFF",
          }}
        >
          {playing
            ? <span style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "1px" }}>II</span>
            : <Play size={12} fill="#FFFFFF" />
          }
        </button>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          style={{
            width: "34px", height: "34px", borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#FFFFFF",
          }}
        >
          {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
        </button>
      </div>
    </div>
  );
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, accentColor }: { project: typeof allProjects[0]; accentColor: string }) {
  const [hovered, setHovered] = useState(false);
  const locale = useLocale();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#FFFFFF", borderRadius: "16px",
        border: `1px solid ${hovered ? accentColor + "44" : "#E2E8F0"}`,
        overflow: "hidden",
        boxShadow: hovered ? `0 16px 48px ${accentColor}1a` : "0 2px 8px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-5px)" : "none",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", height: "210px", overflow: "hidden" }}>
        <img
          src={project.image} alt={project.title} loading="lazy"
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: hovered
            ? `linear-gradient(to top, ${accentColor}88, transparent)`
            : "linear-gradient(to top, rgba(0,0,0,0.22), transparent)",
          transition: "background 0.3s",
        }} />
      </div>

      <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontSize: "16px", fontWeight: 700, lineHeight: "1.3",
          color: hovered ? accentColor : "#111827", marginBottom: "10px",
          transition: "color 0.2s",
        }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.65", flex: 1, marginBottom: "16px" }}>
          {project.description}
        </p>

        <div style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 500, marginBottom: "12px" }}>
          Klien: <span style={{ color: "#374151", fontWeight: 600 }}>{project.client}</span>
        </div>

        <div style={{
          display: "flex", gap: "16px", fontSize: "12px", color: "#9CA3AF",
          fontWeight: 500, borderTop: "1px solid #F1F5F9", paddingTop: "14px", marginBottom: "16px",
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <MapPin size={12} /> {project.location}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Calendar size={12} /> {project.year}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>{project.spec}</span>
          <a
            href={`/${locale}/proyek/${project.category.toLowerCase()}/${project.slug}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              fontSize: "13px", fontWeight: 700, color: "#FFFFFF",
              backgroundColor: accentColor, padding: "8px 16px",
              borderRadius: "8px", textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            Selengkapnya <ChevronRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
