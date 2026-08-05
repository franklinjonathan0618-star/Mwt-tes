"use client";

import React, { useEffect, useState, useRef } from "react";
import { Layers, Film, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp?: string;
}

interface InstagramProfile {
  id: string;
  username: string;
  media_count: number;
}

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN || "";

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

const fallbackPosts: InstagramPost[] = [
  {
    id: "fb1",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    caption: "Pembangunan struktur beton modern dengan presisi tinggi dan standar keamanan terbaik.",
    media_type: "IMAGE"
  },
  {
    id: "fb2",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    caption: "Alat berat bekerja di lokasi proyek jalan tol nasional. Dedikasi untuk konektivitas bangsa.",
    media_type: "IMAGE"
  },
  {
    id: "fb3",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    caption: "Tim engineer melakukan inspeksi berkala di dermaga PLTU untuk memastikan kekuatan struktur.",
    media_type: "IMAGE"
  },
  {
    id: "fb4",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    caption: "Sinergi, profesionalisme, dan integritas dalam mewujudkan infrastruktur masa depan Indonesia.",
    media_type: "IMAGE"
  },
  {
    id: "fb5",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?w=600&q=80",
    caption: "Mengutamakan keselamatan kerja (K3) di setiap jengkel pengerjaan proyek kami.",
    media_type: "IMAGE"
  },
  {
    id: "fb6",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&q=80",
    caption: "Gedung perkantoran modern berkonsep smart & green building garapan PT Modern Widya Tehnical.",
    media_type: "IMAGE"
  },
  {
    id: "fb7",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&q=80",
    caption: "Proyek bendungan berskala nasional untuk ketahanan pangan dan pengairan Indonesia.",
    media_type: "IMAGE"
  },
  {
    id: "fb8",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1517089539026-2475136411e9?w=600&q=80",
    caption: "Kualitas aspal premium dari Asphalt Mixing Plant (AMP) milik sendiri untuk hasil jalan terbaik.",
    media_type: "IMAGE"
  },
  {
    id: "fb9",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1513828583845-9ab68853667c?w=600&q=80",
    caption: "Fasilitas industri dan pengolahan berskala besar dengan integrasi teknologi tinggi.",
    media_type: "IMAGE"
  },
  {
    id: "fb10",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1503387762-592dedbd82d2?w=600&q=80",
    caption: "Perancangan arsitektur dan kalkulasi struktur mendalam untuk menjamin kekuatan jangka panjang.",
    media_type: "IMAGE"
  },
  {
    id: "fb11",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80",
    caption: "Konstruksi jembatan layang dan jalan tol perkotaan guna mengurai kepadatan lalu lintas.",
    media_type: "IMAGE"
  },
  {
    id: "fb12",
    permalink: "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    media_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    caption: "Gedung pencakar langit komersial yang berpadu dengan tata kota modern Indonesia.",
    media_type: "IMAGE"
  }
];

function FeedItem({ post, blueColor }: { post: InstagramPost; blueColor: string }) {
  const [hovered, setHovered] = useState(false);
  const isVideo = post.media_type === "VIDEO";
  const imageUrl = isVideo ? (post.thumbnail_url || post.media_url) : post.media_url;

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #E2E8F0",
        backgroundColor: "#000",
        display: "block",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
        textDecoration: "none"
      }}
    >
      <img
        src={imageUrl}
        alt={post.caption || "Instagram post"}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.4s ease, opacity 0.3s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          opacity: hovered ? "0.4" : "1"
        }}
      />

      {/* Badges */}
      <div style={{
        position: "absolute",
        top: "12px",
        right: "12px",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        width: "28px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        pointerEvents: "none",
        zIndex: 2
      }}>
        {isVideo ? <Film size={14} /> : post.media_type === "CAROUSEL_ALBUM" ? <Layers size={14} /> : <InstagramIcon size={14} />}
      </div>

      {/* Caption Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: `${blueColor}dd`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "16px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          color: "#FFFFFF",
          zIndex: 1
        }}
      >
        <p style={{
          fontSize: "13px",
          lineHeight: "1.5",
          fontWeight: 500,
          margin: "0 0 10px 0",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}>
          {post.caption || "Kunjungi instagram kami untuk melihat info lengkap dan dokumentasi proyek terbaru lainnya."}
        </p>
        <span style={{
          fontSize: "12px",
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          textTransform: "uppercase",
          letterSpacing: "0.5px"
        }}>
          Lihat di Instagram <ArrowUpRight size={13} />
        </span>
      </div>
    </a>
  );
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [profile, setProfile] = useState<InstagramProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    async function loadInstagramData() {
      try {
        // Fetch profile
        const profileRes = await fetch(
          `https://graph.instagram.com/me?fields=id,username,media_count&access_token=${ACCESS_TOKEN}`
        );
        if (!profileRes.ok) throw new Error("Profile API failed");
        const profileJson = await profileRes.json();

        // Fetch media (up to 100 posts for double row slider)
        const mediaRes = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${ACCESS_TOKEN}&limit=100`
        );
        if (!mediaRes.ok) throw new Error("Media API failed");
        const mediaJson = await mediaRes.json();

        if (active) {
          if (profileJson && profileJson.username) {
            setProfile(profileJson);
          }
          if (mediaJson && mediaJson.data && mediaJson.data.length > 0) {
            setPosts(mediaJson.data);
            setIsFallback(false);
          } else {
            throw new Error("No media returned");
          }
        }
      } catch (err) {
        console.warn("Instagram Basic Display API failed, using fallback data:", err);
        if (active) {
          setProfile({
            id: "mock_mwt",
            username: "modernwidyatehnical",
            media_count: 12
          });
          setPosts(fallbackPosts);
          setIsFallback(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadInstagramData();

    return () => {
      active = false;
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
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
      handleScroll("right");
    } else if (distance < -minSwipeDistance) {
      handleScroll("left");
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const BLUE = "#155DFC";

  if (loading) {
    return (
      <div style={{ padding: "40px 0", textAlign: "center" }}>
        <div style={{
          display: "inline-block",
          width: "48px",
          height: "48px",
          border: `4px solid ${BLUE}22`,
          borderTop: `4px solid ${BLUE}`,
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: "16px"
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `
        }} />
        <p style={{ color: "#6B7280", fontSize: "14px", fontWeight: 500 }}>Memuat Feed Instagram...</p>
      </div>
    );
  }

  const igUsername = profile?.username || "modernwidyatehnical";
  const igFallbackLink = "https://www.instagram.com/mwt_infrastruktur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const igLink = isFallback ? igFallbackLink : `https://www.instagram.com/${igUsername}`;

  return (
    <div style={{ width: "100%" }}>
      {/* Instagram Profile Card */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        padding: "24px 32px",
        marginBottom: "32px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Mock Avatar */}
          <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px"
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
            <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#111827", margin: "0 0 4px 0", display: "flex", alignItems: "center", gap: "6px" }}>
              @{igUsername}
            </h3>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0, fontWeight: 500 }}>
              {profile?.media_count || 0} Postingan {isFallback && <span style={{ fontSize: "11px", backgroundColor: "#EEF2F6", padding: "2px 6px", borderRadius: "4px", marginLeft: "4px", color: "#9CA3AF" }}>Galeri</span>}
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
            padding: "10px 22px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: `0 4px 14px ${BLUE}33`,
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = `0 6px 20px ${BLUE}4d`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = `0 4px 14px ${BLUE}33`;
          }}
        >
          Ikuti Kami <ArrowUpRight size={15} />
        </a>
      </div>

      {/* Carousel Track with Arrows */}
      <div style={{ position: "relative", width: "100%", padding: "0 4px" }}>

        {/* Left navigation arrow */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Previous posts"
          style={{
            position: "absolute",
            left: "-16px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: BLUE,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
            zIndex: 10,
            transition: "all 0.2s ease",
            outline: "none"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = BLUE;
            e.currentTarget.style.color = "#FFFFFF";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FFFFFF";
            e.currentTarget.style.color = BLUE;
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Horizontal track container - 4 columns, 2 rows (4 top, 4 bottom) */}
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="instagram-slider-track hide-scrollbar"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                width: "100%",
                height: "100%",
                scrollSnapAlign: "start"
              }}
            >
              <FeedItem post={post} blueColor={BLUE} />
            </div>
          ))}
        </div>

        {/* Right navigation arrow */}
        <button
          onClick={() => handleScroll("right")}
          aria-label="Next posts"
          style={{
            position: "absolute",
            right: "-16px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: BLUE,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
            zIndex: 10,
            transition: "all 0.2s ease",
            outline: "none"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = BLUE;
            e.currentTarget.style.color = "#FFFFFF";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FFFFFF";
            e.currentTarget.style.color = BLUE;
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <ChevronRight size={24} />
        </button>

        {/* Style injection to hide standard scrollbars & layout grid tracks */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .instagram-slider-track {
              display: grid;
              grid-template-rows: repeat(2, 275px);
              grid-auto-flow: column;
              grid-auto-columns: calc((100% - 60px) / 4);
              gap: 20px;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              scrollbar-width: none;
              -ms-overflow-style: none;
              padding: 8px 0;
              width: 100%;
              scroll-behavior: smooth;
            }
            @media (max-width: 1024px) {
              .instagram-slider-track {
                grid-template-rows: repeat(2, 240px);
                grid-auto-columns: calc((100% - 40px) / 3);
              }
            }
            @media (max-width: 768px) {
              .instagram-slider-track {
                grid-template-rows: repeat(2, 170px);
                grid-auto-columns: calc((100% - 20px) / 2);
                gap: 10px;
              }
            }
            @media (max-width: 480px) {
              .instagram-slider-track {
                grid-template-rows: repeat(2, 290px);
                grid-auto-columns: 100%;
              }
            }
          `
        }} />
      </div>
    </div>
  );
}
