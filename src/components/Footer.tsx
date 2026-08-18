"use client";

import { Mail, MapPin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const InstagramIcon = ({ size = 18, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const BLUE = "#155DFC";
  const locale = useLocale();
  const t = useTranslations("Footer");

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("/#") || href === "/") {
      return `/${locale}${href === "/" ? "" : href}`;
    }
    return `/${locale}${href}`;
  };

  return (
    <>
    <footer style={{ backgroundColor: BLUE, color: "#FFFFFF", padding: "64px 24px 32px 24px" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Top Grid */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-between",
          marginBottom: "48px"
        }}>
          {/* Company Info */}
          <div style={{ flex: "1.5 1 380px", maxWidth: "450px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <img
                src="/logo/Logo-02.png"
                alt="PT Modern Widya Tehnical Logo"
                style={{ height: "60px", width: "auto", display: "block" }}
              />
              <div>
                <h3 style={{ fontSize: "clamp(15px, 2.5vw, 18px)", fontWeight: 700, margin: 0, color: "#FFFFFF", lineHeight: "1.2", whiteSpace: "nowrap" }}>
                  PT Modern Widya Tehnical
                </h3>
                <p style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.95)", margin: "4px 0 0 0", fontWeight: 600, letterSpacing: "0.5px" }}>
                  {t("tagline")}
                </p>
              </div>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "14px", lineHeight: "1.7", margin: 0, textAlign: "justify" }}>
              {t("description")}
            </p>
          </div>

          {/* Menu + Kontak side by side */}
          <div className="footer-menu-kontak" style={{ display: "flex", flexDirection: "row", gap: "40px", flex: "1 1 auto" }}>
          {/* Quick Links / Menu */}
          <div style={{ flex: "1 1 120px", maxWidth: "160px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", color: "#FFFFFF" }}>
              {t("menu")}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: t("menuHome"), href: "/" },
                { label: t("menuAbout"), href: "/#profil" },
                { label: t("menuProjects"), href: "/proyek" },
                { label: t("menuContact"), href: "/kontak" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={getLocalizedHref(link.href)}
                    style={{
                      color: "#FFFFFF",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                      opacity: 0.95,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.95"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div style={{ flex: "1 1 200px", maxWidth: "250px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", color: "#FFFFFF" }}>
              {t("contact")}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#FFFFFF" }}>
                <div style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <InstagramIcon size={18} style={{ color: "#FFFFFF" }} />
                </div>
                <span>@mwt_infrastruktur</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#FFFFFF" }}>
                <div style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <Mail size={18} style={{ color: "#FFFFFF" }} />
                </div>
                <span>MWTInfra@gmail.com</span>
              </li>
            </ul>
          </div>
          </div>

          {/* Location Kami */}
          <div style={{ flex: "1 1 260px", maxWidth: "300px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", color: "#FFFFFF" }}>
              {t("location")}
            </h4>
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              borderRadius: "12px",
              padding: "16px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              maxWidth: "300px"
            }}>
              <MapPin size={20} style={{ color: "#FFFFFF", flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.6", color: "#FFFFFF", fontWeight: 500 }}>
                Jl. Villa Tengah Blok E No.7, RT.008/RW.002, Pekayon Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17148
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255, 255, 255, 0.2)", marginBottom: "32px" }}></div>

        {/* Bottom Area */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFFFFF",
          fontSize: "13px",
          fontWeight: 500
        }}>
          <p>© {new Date().getFullYear()} - {t("copyright")}</p>
        </div>
      </div>
    </footer>
    <style dangerouslySetInnerHTML={{
      __html: `
        @media (max-width: 768px) {
          .footer-menu-kontak {
            flex-direction: row !important;
            gap: 24px !important;
            width: 100%;
          }
          .footer-menu-kontak > div {
            flex: 1 1 0 !important;
            max-width: none !important;
          }
        }
      `
    }} />
    </>
  );
}
