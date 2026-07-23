"use client";

import React, { use, useState, useEffect } from "react";
import { ArrowLeft, MapPin, Calendar, User, ChevronRight, Play } from "lucide-react";
import { allProjects } from "@/lib/proyekData";
import { useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export default function DetailProyekPage({
    params,
}: {
    params: Promise<{ kategori: string; slug: string }>;
}) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const locale = useLocale();
    const { kategori, slug } = use(params);

    const project = allProjects.find(
        (p) => p.category.toLowerCase() === kategori.toLowerCase() && p.slug === slug
    );

    if (!project) return notFound();

    // Build media list: video first (if any), then gallery images
    type MediaItem =
        | { type: "video"; src: string }
        | { type: "image"; src: string };

    const mediaList: MediaItem[] = [
        ...(project.video ? [{ type: "video" as const, src: project.video }] : []),
        ...project.gallery.map((src) => ({ type: "image" as const, src })),
    ];

    return (
        <>
            <Navbar />
            <main style={{ backgroundColor: "#F8FAFC", minHeight: "100vh", paddingTop: "90px" }}>

                {/* Main content */}
                <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 24px 96px" }}>

                    {/* Title */}
                    <div style={{
                        marginBottom: "28px",
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(15px)",
                        transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <h1 style={{
                                fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800,
                                color: "#111827", lineHeight: "1.2",
                            }}>
                                {project.title}
                            </h1>
                            <span style={{
                                backgroundColor: project.categoryColor, color: "#FFFFFF",
                                fontSize: "11px", fontWeight: 700, letterSpacing: "1px",
                                textTransform: "uppercase", padding: "4px 10px", borderRadius: "999px",
                                flexShrink: 0,
                            }}>
                                {project.categoryLabel}
                            </span>
                        </div>
                    </div>

                    {/* Two-column layout */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                        gap: "28px",
                        alignItems: "start",
                    }}>
                        {/* ── LEFT: Media Viewer ── */}
                        <div style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateX(0)" : "translateX(-30px)",
                            transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
                        }}>
                            <MediaViewer mediaList={mediaList} accentColor={project.categoryColor} />
                        </div>

                        {/* ── RIGHT: Info Card ── */}
                        <div style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "16px",
                            border: "1px solid #E2E8F0",
                            padding: "28px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                            position: "sticky",
                            top: "100px",
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateX(0)" : "translateX(30px)",
                            transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                        }}>
                            <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
                                Detail Proyek
                            </h2>

                            <p style={{
                                fontSize: "14px", color: "#374151", lineHeight: "1.7",
                                marginBottom: "24px",
                            }}>
                                {project.fullDesc}
                            </p>

                            <div style={{
                                backgroundColor: "#F8FAFC", borderRadius: "10px",
                                padding: "16px", fontSize: "13px", color: "#6B7280",
                                lineHeight: "1.8", marginBottom: "20px",
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                                    <MapPin size={13} color={project.categoryColor} />
                                    <span>Lokasi: <strong style={{ color: "#111827" }}>{project.location}</strong></span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                                    <Calendar size={13} color={project.categoryColor} />
                                    <span>Tahun: <strong style={{ color: "#111827" }}>{project.year}</strong></span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                                    <User size={13} color={project.categoryColor} />
                                    <span>Klien: <strong style={{ color: "#111827" }}>{project.client}</strong></span>
                                </div>
                                <div style={{
                                    marginTop: "12px", paddingTop: "12px",
                                    borderTop: "1px solid #E2E8F0",
                                    fontSize: "13px", color: "#6B7280",
                                }}>
                                    {project.spec}
                                </div>
                            </div>

                            <a
                                href={`/${locale}/kontak`}
                                style={{
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                                    backgroundColor: project.categoryColor, color: "#FFFFFF",
                                    fontSize: "14px", fontWeight: 700, textDecoration: "none",
                                    padding: "13px 24px", borderRadius: "10px",
                                    transition: "opacity 0.2s",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                            >
                                Konsultasikan Proyek Ini
                            </a>
                        </div>
                    </div>

                    {/* Back Button at the Bottom */}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
                        <a
                            href={`/${locale}/proyek/${kategori}`}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                backgroundColor: project.categoryColor,
                                color: "#FFFFFF",
                                border: `1px solid ${project.categoryColor}`,
                                padding: "12px 28px",
                                borderRadius: "10px",
                                fontSize: "15px",
                                fontWeight: 600,
                                textDecoration: "none",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#FFFFFF";
                                e.currentTarget.style.color = project.categoryColor;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = project.categoryColor;
                                e.currentTarget.style.color = "#FFFFFF";
                            }}
                        >
                            <ArrowLeft size={16} /> Kembali ke {project.categoryLabel}
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

// ── Media Viewer ──────────────────────────────────────────────────────────────
type MediaItem = { type: "video"; src: string } | { type: "image"; src: string };

function MediaViewer({ mediaList, accentColor }: { mediaList: MediaItem[]; accentColor: string }) {
    const [activeIdx, setActiveIdx] = useState(0);
    const active = mediaList[activeIdx];

    return (
        <div>
            {/* Main display */}
            <div style={{
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#000",
                aspectRatio: "16/9",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                marginBottom: "16px",
                position: "relative",
            }}>
                {active.type === "video" ? (
                    <video
                        key={active.src}
                        src={active.src}
                        controls
                        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                    />
                ) : (
                    <>
                        {/* Blurred background layer for portrait & custom aspect ratio photos */}
                        <img
                            src={active.src}
                            alt=""
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                filter: "blur(24px) brightness(0.65)",
                                transform: "scale(1.15)",
                            }}
                        />
                        {/* Foreground clear image (100% visible, non-cropped) */}
                        <img
                            key={active.src}
                            src={active.src}
                            alt="Foto proyek"
                            style={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                display: "block",
                                zIndex: 1,
                            }}
                        />
                    </>
                )}
            </div>

            {/* Thumbnail strip */}
            {mediaList.length > 1 && (
                <div style={{
                    display: "flex",
                    gap: "10px",
                    overflowX: "auto",
                    paddingBottom: "4px",
                }}>
                    {mediaList.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIdx(i)}
                            style={{
                                flexShrink: 0,
                                width: "110px",
                                height: "72px",
                                borderRadius: "10px",
                                overflow: "hidden",
                                border: i === activeIdx
                                    ? `3px solid ${accentColor}`
                                    : "3px solid transparent",
                                cursor: "pointer",
                                padding: 0,
                                backgroundColor: "#000",
                                position: "relative",
                                transition: "border-color 0.2s, opacity 0.2s",
                                opacity: i === activeIdx ? 1 : 0.65,
                            }}
                        >
                            {item.type === "video" ? (
                                <>
                                    {/* Video thumbnail — show first frame via poster or black bg */}
                                    <video
                                        src={item.src}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        muted
                                        preload="metadata"
                                    />
                                    {/* Play icon overlay */}
                                    <div style={{
                                        position: "absolute", inset: 0,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        backgroundColor: "rgba(0,0,0,0.35)",
                                    }}>
                                        <Play size={20} fill="#FFFFFF" color="#FFFFFF" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <img
                                        src={item.src}
                                        alt=""
                                        aria-hidden="true"
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            filter: "blur(12px) brightness(0.7)",
                                            transform: "scale(1.1)",
                                        }}
                                    />
                                    <img
                                        src={item.src}
                                        alt={`Thumbnail ${i + 1}`}
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            zIndex: 1,
                                        }}
                                        loading="lazy"
                                    />
                                </>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
