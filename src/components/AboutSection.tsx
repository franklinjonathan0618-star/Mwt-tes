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

            {/* Stats Grid - Always 2 Atas 2 Bawah */}
            <div className={`grid grid-cols-2 gap-4 sm:gap-6 reveal reveal-right reveal-delay-2 ${isInView ? "visible" : ""}`}>
              {/* Stat 1 */}
              <div
                className="p-5 sm:p-7 rounded-xl text-white shadow-lg"
                style={{
                  background: BLUE,
                  boxShadow: "0 8px 25px rgba(21, 93, 252, 0.25)"
                }}
              >
                <h3 className="text-3xl sm:text-5xl font-extrabold m-0 leading-none">40+</h3>
                <p className="text-xs sm:text-sm md:text-base font-medium mt-2 mb-0 opacity-90">{t("statExperience")}</p>
              </div>

              {/* Stat 2 */}
              <div
                className="p-5 sm:p-7 rounded-xl text-white shadow-lg"
                style={{
                  background: BLUE,
                  boxShadow: "0 8px 25px rgba(21, 93, 252, 0.25)"
                }}
              >
                <h3 className="text-3xl sm:text-5xl font-extrabold m-0 leading-none">50+</h3>
                <p className="text-xs sm:text-sm md:text-base font-medium mt-2 mb-0 opacity-90">{t("statProjects")}</p>
              </div>

              {/* Stat 3 */}
              <div
                className="p-5 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <h3 className="text-3xl sm:text-5xl font-extrabold m-0 leading-none" style={{ color: BLUE }}>100%</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium mt-2 mb-0">{t("statSafety")}</p>
              </div>

              {/* Stat 4 */}
              <div
                className="p-5 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <h3 className="text-3xl sm:text-5xl font-extrabold m-0 leading-none" style={{ color: BLUE }}>15+</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium mt-2 mb-0">{t("statProvinces")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

