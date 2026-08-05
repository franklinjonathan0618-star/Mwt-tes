"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

type Slide =
  | { id: number; type: "video"; src: string }
  | { id: number; type: "image"; bg: string };

const slides: Slide[] = [
  { id: 0, type: "video", src: "/images/0210_1.mp4" },
  { id: 1, type: "video", src: "/images/AMP.mp4" },
  { id: 2, type: "image", bg: "/images/grup.webp" },
];

const DURATION = 5500;

export default function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const startRef = useRef<number>(Date.now());
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (next === current) return;
      setCurrent(next);
      startRef.current = Date.now();
    },
    [current]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

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
      goNext();
    } else if (distance < -minSwipeDistance) {
      goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-advance
  useEffect(() => {
    const t = setTimeout(goNext, DURATION);
    return () => clearTimeout(t);
  }, [goNext]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* ─── Backgrounds (berganti) ─── */}
      {slides.map((s, i) =>
        s.type === "video" ? (
          <div
            key={s.id}
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              zIndex: 0,
              overflow: "hidden",
            }}
          >
            <video
              src={s.src}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ) : (
          <div
            key={s.id}
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${s.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              zIndex: 0,
            }}
          />
        )
      )}

      {/* ─── Dark overlay ─── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.82) 100%)",
          zIndex: 1,
        }}
      />

      {/* ─── Konten Tetap (tidak ikut berganti) ─── */}
      <div
        className="relative flex flex-col items-center justify-center w-full text-center px-6"
        style={{ height: "100%", zIndex: 2 }}
      >
        <div className="max-w-6xl w-full flex flex-col items-center text-center">

          {/* Judul utama — SELALU SAMA */}
          <h1
            className="font-extrabold text-white uppercase text-center w-full"
            style={{
              fontSize: "clamp(14px, 5.8vw, 76px)",
              lineHeight: 1.05,
              letterSpacing: "0px",
              textShadow: "0 2px 24px rgba(0,0,0,0.55)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
          >
            PT MODERN WIDYA TEHNICAL
          </h1>

          {/* Divider */}
          <div
            className="mx-auto my-5"
            style={{
              width: "72px",
              height: "3px",
              background: "#155DFC",
              borderRadius: "2px",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          />

          {/* Sub-judul divisi */}
          <h2
            className="font-bold uppercase text-white mb-6 text-center w-full"
            style={{
              fontSize: "clamp(16px, 2.8vw, 32px)",
              letterSpacing: "0.18em",
              textShadow: "0 1px 8px rgba(0,0,0,0.45)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
            }}
          >
            {t("subtitle")}
          </h2>

          {/* Deskripsi */}
          <p
            className="mx-auto max-w-2xl text-center"
            style={{
              fontSize: "clamp(14px, 1.6vw, 17px)",
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.8,
              marginTop: "28px",
              marginBottom: "36px",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
            }}
          >
            {t.rich("description", {
              bold: (chunks) => <span className="font-bold text-white">{chunks}</span>
            })}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex items-center justify-center gap-4 flex-wrap"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s",
            }}
          >
            <a
              href={`/${locale}/proyek`}
              id="hero-btn-primary"
              className="inline-flex items-center gap-2 font-bold no-underline transition-all duration-200"
              style={{
                background: "#155DFC",
                color: "#FFFFFF",
                padding: "14px 30px",
                borderRadius: "8px",
                height: "52px",
                fontSize: "15px",
                letterSpacing: "0.2px",
                boxShadow: "0 2px 16px rgba(21,93,252,0.40)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                (e.currentTarget as HTMLElement).style.color = "#155DFC";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#155DFC";
                (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
              }}
            >
              {t("ctaProjects")}
              <ArrowRight size={17} />
            </a>

            <a
              href={`/${locale}/kontak`}
              id="hero-btn-secondary"
              className="inline-flex items-center gap-2 font-semibold no-underline transition-all duration-200"
              style={{
                background: "transparent",
                color: "#FFFFFF",
                padding: "12px 28px",
                borderRadius: "8px",
                height: "52px",
                fontSize: "15px",
                border: "1.5px solid rgba(255,255,255,0.6)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.6)";
              }}
            >
              <Phone size={16} />
              {t("ctaContact")}
            </a>
          </div>
        </div>
      </div>

      {/* ─── Dot indicators (bottom-center) ─── */}
      <div
        className="absolute bottom-8 left-1/2 flex items-center gap-2"
        style={{ zIndex: 3, transform: "translateX(-50%)" }}
        aria-label="Slide indicators"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            id={`hero-dot-${i}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              background:
                i === current ? "#155DFC" : "rgba(255,255,255,0.40)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ─── Navigation Arrows ─── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          cursor: "pointer",
          zIndex: 10,
          transition: "all 0.2s ease",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#155DFC";
          e.currentTarget.style.borderColor = "#155DFC";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goNext}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          cursor: "pointer",
          zIndex: 10,
          transition: "all 0.2s ease",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#155DFC";
          e.currentTarget.style.borderColor = "#155DFC";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
        }}
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
