"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const InstagramIcon = ({ size = 20, style }: { size?: number; style?: React.CSSProperties }) => (
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

export default function InstagramFeed() {
  const BLUE = "#155DFC";
  const igUsername = "mwt_infrastruktur";
  const igLink = "https://www.instagram.com/mwt_infrastruktur";

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      {/* Instagram Profile Card */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        padding: "24px 32px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
        flexWrap: "wrap",
        gap: "20px",
        transition: "all 0.2s ease"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Avatar / Icon Badge */}
          <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
            flexShrink: 0
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <InstagramIcon size={28} style={{ color: "#E1306C" }} />
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#111827", margin: "0 0 4px 0", display: "flex", alignItems: "center", gap: "6px" }}>
              @{igUsername}
            </h3>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0, fontWeight: 500 }}>
              Akun Resmi Instagram PT Modern Widya Technical
            </p>
          </div>
        </div>

        <a
          href={igLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: BLUE,
            color: "#FFFFFF",
            padding: "12px 24px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: `0 4px 14px ${BLUE}33`,
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 6px 20px ${BLUE}4d`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = `0 4px 14px ${BLUE}33`;
          }}
        >
          Ikuti Kami <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
