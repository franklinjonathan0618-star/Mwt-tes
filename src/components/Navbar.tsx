"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { Drawer } from "@heroui/react/drawer";
import { useTranslations, useLocale } from "next-intl";

const BLUE = "#155DFC";

const getTentangItems = (locale: string) => [
  { label: locale === "en" ? "Company Profile" : "Tentang Perusahaan", href: "/#profil" },
  { label: locale === "en" ? "Vision & Mission" : "Visi Misi", href: "/#visi-misi" },
  { label: locale === "en" ? "Why Us" : "Mengapa Kami", href: "/#nilai-perusahaan" },
  { label: locale === "en" ? "Management Team" : "Tim Manajemen", href: "/#tim-manajemen" },
];

const getProyekItems = (locale: string) => [
  { label: locale === "en" ? "All Projects" : "Semua Proyek", href: "/proyek" },
  { label: "AMP", href: "/proyek/amp" },
  { label: locale === "en" ? "Infrastructure" : "Infrastruktur", href: "/proyek/infrastruktur" },
  { label: "SDA", href: "/proyek/sda" },
];

const languages = [
  { code: "id", label: "Indonesian", flag: "https://flagcdn.com/w40/id.png" },
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
];

/* ─── Anchor scroll helper ────────────────────────── */
function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ─── Desktop dropdown ─────────────────────────────── */
function Dropdown({
  items,
  visible,
  getLocalizedHref,
  onAnchorClick,
}: {
  items: { label: string; href: string }[];
  visible: boolean;
  getLocalizedHref: (href: string) => string;
  onAnchorClick: (href: string) => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        minWidth: "220px",
        padding: "8px 0",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.18s ease",
        zIndex: 100,
      }}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={getLocalizedHref(item.href)}
          onClick={(e) => {
            if (item.href.includes("#")) {
              e.preventDefault();
              onAnchorClick(item.href);
            }
          }}
          style={{
            display: "block",
            padding: "12px 20px",
            color: BLUE,
            fontWeight: 600,
            fontSize: "15px",
            textDecoration: "none",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#EEF3FF"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

/* ─── Mobile accordion section ─────────────────────── */
function MobileSection({
  title,
  items,
  onClose,
  getLocalizedHref,
  onAnchorClick,
}: {
  title: string;
  items: { label: string; href: string }[];
  onClose: () => void;
  getLocalizedHref: (href: string) => string;
  onAnchorClick: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(21,93,252,0.1)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "16px 24px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#111827",
          fontWeight: 700,
          fontSize: "16px",
        }}
      >
        {title}
        <ChevronDown
          size={18}
          style={{
            color: BLUE,
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <div style={{ paddingBottom: "8px" }}>
          {items.map((item) => (
            <a
              key={item.label}
              href={getLocalizedHref(item.href)}
              onClick={(e) => {
                if (item.href.includes("#")) {
                  e.preventDefault();
                  onAnchorClick(item.href);
                }
                onClose();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 32px",
                color: BLUE,
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#EEF3FF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <ChevronRight size={14} />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Mobile Drawer Content ─────────────────────────── */
function MobileDrawerContent({
  onClose,
  activeLang,
  onLocaleChange,
  getLocalizedHref,
  locale,
  onAnchorClick,
}: {
  onClose: () => void;
  activeLang: typeof languages[0];
  onLocaleChange: (code: string) => void;
  getLocalizedHref: (href: string) => string;
  locale: string;
  onAnchorClick: (href: string) => void;
}) {
  const tentangItems = getTentangItems(locale);
  const proyekItems = getProyekItems(locale);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div
        style={{
          background: BLUE,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          flexShrink: 0,
        }}
      >
        <img
          src="/logo/Logo-02.png"
          alt="Divisi Infrastruktur--PT Modern Widya Tehnical"
          style={{ height: "36px", width: "auto", flexShrink: 0 }}
        />
        <span style={{
          color: "#FFFFFF",
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "1.3",
          flex: 1,
          marginLeft: "8px"
        }}>
          Divisi Infrastruktur--PT Modern Widya Tehnical
        </span>
        <button
          onClick={onClose}
          style={{
            background: "rgba(255,255,255,0.18)",
            border: "none",
            borderRadius: "8px",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
          aria-label="Tutup menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Beranda */}
        <a
          href={getLocalizedHref("/")}
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(21,93,252,0.1)",
            color: "#111827",
            fontWeight: 700,
            fontSize: "16px",
            textDecoration: "none",
          }}
        >
          {locale === "en" ? "Home" : "Beranda"}
        </a>

        <MobileSection
          title={locale === "en" ? "About" : "Tentang"}
          items={tentangItems}
          onClose={onClose}
          getLocalizedHref={getLocalizedHref}
          onAnchorClick={onAnchorClick}
        />
        <MobileSection
          title={locale === "en" ? "Projects" : "Proyek"}
          items={proyekItems}
          onClose={onClose}
          getLocalizedHref={getLocalizedHref}
          onAnchorClick={onAnchorClick}
        />

        {/* Kontak */}
        <a
          href={getLocalizedHref("/kontak")}
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(21,93,252,0.1)",
            color: "#111827",
            fontWeight: 700,
            fontSize: "16px",
            textDecoration: "none",
          }}
        >
          {locale === "en" ? "Contact" : "Kontak"}
        </a>

        {/* Language */}
        <div style={{ padding: "20px 24px" }}>
          <p style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#6B7280",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}>
            {locale === "en" ? "Language" : "Bahasa"}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { onLocaleChange(lang.code); onClose(); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: lang.code === activeLang.code ? `2px solid ${BLUE}` : "2px solid #E5E7EB",
                  background: lang.code === activeLang.code ? "#EEF3FF" : "#FFF",
                  color: lang.code === activeLang.code ? BLUE : "#374151",
                  fontWeight: 600,
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                <img src={lang.flag} alt={lang.label} style={{ width: "20px", height: "14px", objectFit: "cover", borderRadius: "2px" }} />
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Navbar ───────────────────────────────────── */
export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [tentangOpen, setTentangOpen] = useState(false);
  const [proyekOpen, setProyekOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const tentangItems = getTentangItems(locale);
  const proyekItems = getProyekItems(locale);
  const activeLang = languages.find((lang) => lang.code === locale) || languages[0];

  const tentangRef = useRef<HTMLDivElement>(null);
  const proyekRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDrawerOpen(false);
    setMobileLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (tentangRef.current && !tentangRef.current.contains(e.target as Node)) setTentangOpen(false);
      if (proyekRef.current && !proyekRef.current.contains(e.target as Node)) setProyekOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)) setMobileLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    if (segments[1] === "id" || segments[1] === "en") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    let newPath = segments.join("/");
    if (newPath.endsWith("/") && newPath.length > 1) {
      newPath = newPath.slice(0, -1);
    }
    router.push(newPath);
  };

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("/#") || href === "/") {
      return `/${locale}${href === "/" ? "" : href}`;
    }
    return `/${locale}${href}`;
  };

  const handleAnchorClick = useCallback((href: string) => {
    // href contoh: "/#profil"
    const hash = href.includes("#") ? "#" + href.split("#")[1] : "";
    const isHome = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === "/";
    setTentangOpen(false);
    setProyekOpen(false);
    setDrawerOpen(false);
    if (isHome && hash) {
      // Sudah di homepage, langsung scroll
      scrollToHash(hash);
    } else {
      // Navigasi ke homepage, lalu scroll setelah render
      router.push(`/${locale}/`);
      setTimeout(() => scrollToHash(hash), 350);
    }
  }, [pathname, locale, router]);

  const pillStyle = (active: boolean): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    padding: "7px 18px",
    borderRadius: "999px",
    background: active ? "rgba(255,255,255,0.18)" : "transparent",
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: "15px",
    cursor: "pointer",
    border: "none",
    transition: "background 0.18s",
    whiteSpace: "nowrap" as const,
    textDecoration: "none",
  });

  const isHomeActive = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === "/";

  return (
    <>
      <nav
        id="main-navbar"
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "10px 24px" }}
      >
        <div
          style={{
            background: BLUE,
            borderRadius: "999px",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "fit-content",
            maxWidth: "95vw",
            margin: "0 auto",
            boxShadow: "0 4px 24px rgba(21,93,252,0.35)",
          }}
        >
          {/* Logo */}
          <a href={getLocalizedHref("/")} id="navbar-logo" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
            <img src="/logo/Logo-02.png" alt="Divisi Infrastruktur--PT Modern Widya Tehnical" style={{ height: "46px", width: "auto", display: "block", objectFit: "contain" }} />
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "12px" }}>
            <a href={getLocalizedHref("/")} id="nav-beranda" style={pillStyle(isHomeActive)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = isHomeActive ? "rgba(255,255,255,0.18)" : "transparent"; }}
            >
              {t("home")}
            </a>

            <div ref={tentangRef} style={{ position: "relative" }}>
              <button id="nav-tentang"
                onClick={() => { setTentangOpen((v) => !v); setProyekOpen(false); setLangOpen(false); }}
                style={pillStyle(tentangOpen)}
                onMouseEnter={(e) => { if (!tentangOpen) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
                onMouseLeave={(e) => { if (!tentangOpen) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {t("about")}
                <ChevronDown size={15} style={{ transition: "transform 0.2s", transform: tentangOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              <Dropdown items={tentangItems} visible={tentangOpen} getLocalizedHref={getLocalizedHref} onAnchorClick={handleAnchorClick} />
            </div>

            <div ref={proyekRef} style={{ position: "relative" }}>
              <button id="nav-proyek"
                onClick={() => { setProyekOpen((v) => !v); setTentangOpen(false); setLangOpen(false); }}
                style={pillStyle(proyekOpen)}
                onMouseEnter={(e) => { if (!proyekOpen) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
                onMouseLeave={(e) => { if (!proyekOpen) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {t("projects")}
                <ChevronDown size={15} style={{ transition: "transform 0.2s", transform: proyekOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              <Dropdown items={proyekItems} visible={proyekOpen} getLocalizedHref={getLocalizedHref} onAnchorClick={handleAnchorClick} />
            </div>

            <a href={getLocalizedHref("/kontak")} id="nav-kontak" style={pillStyle(pathname.includes("/kontak"))}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = pathname.includes("/kontak") ? "rgba(255,255,255,0.18)" : "transparent"; }}
            >
              {t("contact")}
            </a>

            {/* Language (desktop only) */}
            <div ref={langRef} style={{ position: "relative", flexShrink: 0 }}>
              <button id="nav-language"
                onClick={() => { setLangOpen((v) => !v); setTentangOpen(false); setProyekOpen(false); }}
                style={{ ...pillStyle(false), background: "rgba(255,255,255,0.15)", gap: "6px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.22)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
              >
                <img src={activeLang.flag} alt={activeLang.label} style={{ width: "20px", height: "14px", objectFit: "cover", borderRadius: "2px" }} />
                {activeLang.label}
                <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              <div style={{
                position: "absolute", top: "calc(100% + 12px)", right: 0,
                background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                minWidth: "160px", padding: "8px 0",
                opacity: langOpen ? 1 : 0, pointerEvents: langOpen ? "auto" : "none",
                transition: "opacity 0.18s ease", zIndex: 100,
              }}>
                {languages.map((lang) => (
                  <button key={lang.code}
                    onClick={() => { handleLocaleChange(lang.code); setLangOpen(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px", width: "100%",
                      padding: "10px 18px",
                      background: lang.code === activeLang.code ? "#EEF3FF" : "transparent",
                      border: "none", cursor: "pointer", color: BLUE, fontWeight: 600, fontSize: "14px", textAlign: "left",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#EEF3FF"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = lang.code === activeLang.code ? "#EEF3FF" : "transparent"; }}
                  >
                    <img src={lang.flag} alt={lang.label} style={{ width: "20px", height: "14px", objectFit: "cover", borderRadius: "2px" }} />
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Language Selector (mobile only) */}
          <div ref={mobileLangRef} style={{ position: "relative", flexShrink: 0 }} className="flex md:hidden">
            <button id="nav-language-mobile"
              onClick={() => { setMobileLangOpen((v) => !v); setTentangOpen(false); setProyekOpen(false); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.15)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                border: "none",
                transition: "background 0.18s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.22)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
            >
              <img src={activeLang.flag} alt={activeLang.label} style={{ width: "18px", height: "12px", objectFit: "cover", borderRadius: "2px" }} />
              <span>{activeLang.code.toUpperCase()}</span>
              <ChevronDown size={12} style={{ transition: "transform 0.2s", transform: mobileLangOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {mobileLangOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)",
                background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                minWidth: "140px", padding: "6px 0",
                zIndex: 100,
              }}>
                {languages.map((lang) => (
                  <button key={lang.code}
                    onClick={() => { handleLocaleChange(lang.code); setMobileLangOpen(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "8px", width: "100%",
                      padding: "8px 14px",
                      background: lang.code === activeLang.code ? "#EEF3FF" : "transparent",
                      border: "none", cursor: "pointer", color: BLUE, fontWeight: 600, fontSize: "13px", textAlign: "left",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#EEF3FF"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = lang.code === activeLang.code ? "#EEF3FF" : "transparent"; }}
                  >
                    <img src={lang.flag} alt={lang.label} style={{ width: "18px", height: "12px", objectFit: "cover", borderRadius: "2px" }} />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger (mobile only) */}
          <Drawer.Root
            isOpen={drawerOpen}
            onOpenChange={setDrawerOpen}
          >
            <Drawer.Trigger
              id="nav-hamburger"
              className="flex md:hidden items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "none",
                borderRadius: "10px",
                width: "38px",
                height: "38px",
                cursor: "pointer",
                color: "#FFFFFF",
                flexShrink: 0,
              }}
              aria-label="Buka menu"
            >
              <Menu size={20} />
            </Drawer.Trigger>
            <Drawer.Backdrop isDismissable>
              <Drawer.Content placement="left" className="w-[300px] max-w-[85vw]">
                <Drawer.Dialog>
                  <MobileDrawerContent
                    onClose={() => setDrawerOpen(false)}
                    activeLang={activeLang}
                    onLocaleChange={handleLocaleChange}
                    getLocalizedHref={getLocalizedHref}
                    locale={locale}
                    onAnchorClick={handleAnchorClick}
                  />
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer.Root>
        </div>
      </nav>
    </>
  );
}
