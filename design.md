# Design System — PT Modern Widya Tehnical
*Divisi Infrastruktur*

---

## 1. Visual Theme & Atmosphere

Design system PT Modern Widya Tehnical mencerminkan identitas perusahaan konstruksi nasional yang profesional, terpercaya, dan berpengalaman lebih dari 40 tahun. Bahasa visual menggabungkan biru elektrik yang kuat (`#155DFC`) sebagai warna utama brand dengan putih bersih (`#FFFFFF`) sebagai kontras — menciptakan kesan modern, tegas, dan kredibel.

Tata letak mengutamakan kejelasan informasi dengan tipografi yang bersih, spasi yang lega, dan hierarki visual yang kuat. Foto-foto proyek infrastruktur skala besar menjadi elemen visual utama yang mendukung narasi kemampuan teknis.

**Karakteristik Utama**
- Profesional dan terpercaya melalui palette biru yang kuat dan konsisten
- Tipografi tegas dengan hierarki yang jelas untuk audiens korporat
- Layout bersih dengan whitespace yang cukup untuk keterbacaan optimal
- Komponen yang tegas dan fungsional — menghindari dekorasi berlebihan
- Kontras tinggi untuk aksesibilitas dan kesan profesional

---

## 2. Color Palette & Roles

### Primary
- **Brand Blue** (`#155DFC`): Warna utama brand. Digunakan untuk heading utama, tombol CTA, elemen interaktif, dan aksen dominan. Menyampaikan kepercayaan, teknologi, dan profesionalisme.
- **White** (`#FFFFFF`): Warna kontras utama. Digunakan untuk teks di atas background biru, background kartu, dan surface konten.

### Derived from Brand Blue
- **Blue Dark** (`#0D3FBA`): Hover state tombol primary, heading level kedua, elemen CTA sekunder.
- **Blue Deeper** (`#0A2E8A`): Active state tombol, teks link aktif, aksen tertiary.
- **Blue Light** (`#EEF3FF`): Background section ringan, badge status, highlight area.
- **Blue Mid** (`#4A82FD`): Ikon dekoratif, border aksen, divider berwarna.

### Neutrals
- **Text Primary** (`#111827`): Teks body utama, label, dan konten dominan.
- **Text Secondary** (`#6B7280`): Teks sekunder, caption, metadata, dan konten de-emphasis.
- **Text Muted** (`#9CA3AF`): Placeholder, teks tidak aktif, helper text.
- **Surface White** (`#FFFFFF`): Background kartu, modal, dan konten surface.
- **Background Light** (`#F8FAFC`): Background section bergantian, container halus.
- **Background Subtle** (`#F1F5F9`): Hover state ringan, background input tidak aktif.

### Borders & Dividers
- **Border Light** (`#E2E8F0`): Pemisah halus, border kartu dan tabel.
- **Border Medium** (`#CBD5E1`): Border input form, divider yang lebih terlihat.

### Semantic
- **Success** (`#059669`): Pesan positif, status selesai, indikator sukses.
- **Warning** (`#D97706`): Peringatan, perhatian, status pending.
- **Error** (`#DC2626`): Error, validasi gagal, status kritis.
- **Info** (`#155DFC`): Menggunakan Brand Blue untuk pesan informatif.

---

## 3. Typography Rules

### Font Family
**Primary:** `Inter` dengan fallback `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`. Digunakan untuk semua teks — heading, body, UI controls. Inter dipilih karena keterbacaan tinggi di semua ukuran, cocok untuk konten teknis dan korporat.

**Monospace:** `JetBrains Mono` atau `Fira Code` untuk kode teknis, spesifikasi, atau data numerik yang membutuhkan alignment.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Penggunaan |
|------|------|--------|-------------|----------------|------------|
| Display | 72px | 800 | 80px | -1.5px | Hero headline utama |
| H1 | 48px | 700 | 56px | -1px | Judul halaman utama |
| H2 | 36px | 700 | 44px | -0.5px | Judul section |
| H3 | 28px | 600 | 36px | 0px | Judul sub-section |
| H4 | 22px | 600 | 30px | 0px | Judul kartu, panel |
| H5 | 18px | 600 | 26px | 0px | Label penting, keterangan besar |
| Body Large | 18px | 400 | 30px | 0px | Lead paragraph, deskripsi utama |
| Body | 16px | 400 | 26px | 0px | Body text standar |
| Body Small | 14px | 400 | 22px | 0px | Deskripsi sekunder, caption |
| Label | 14px | 500 | 20px | 0.1px | Label form, tag, metadata |
| Button | 15px | 600 | 22px | 0.2px | Teks tombol |
| Caption | 12px | 400 | 18px | 0.2px | Footnote, timestamp, helper text |
| Overline | 11px | 600 | 16px | 1.5px | Label section uppercase kecil |

### Prinsip Tipografi
- **Hierarki melalui ukuran dan weight:** Perubahan ukuran yang signifikan antar level untuk scanning cepat.
- **Jangan campurkan font:** Hanya Inter untuk semua teks UI; monospace hanya untuk data teknis.
- **Warna teks maksimal 3 level:** Primary (`#111827`), Secondary (`#6B7280`), Muted (`#9CA3AF`).
- **Teks putih di atas biru:** Semua teks di atas background `#155DFC` atau lebih gelap menggunakan `#FFFFFF`.

---

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `#155DFC`
- **Text Color:** `#FFFFFF`
- **Font:** Inter, 15px, weight 600
- **Padding:** `12px 24px`
- **Border Radius:** `8px`
- **Border:** none
- **Height:** `48px`
- **Box Shadow:** `0 1px 3px rgba(21, 93, 252, 0.3), 0 1px 2px rgba(21, 93, 252, 0.2)`
- **Hover State:** Background `#0D3FBA`, shadow lebih dalam
- **Active State:** Background `#0A2E8A`, shadow minimal
- **Focus State:** Outline `3px solid rgba(21, 93, 252, 0.4)`, offset `2px`
- **Disabled State:** Background `#9CA3AF`, cursor not-allowed

#### Secondary Button
- **Background:** `transparent`
- **Text Color:** `#155DFC`
- **Font:** Inter, 15px, weight 600
- **Padding:** `12px 24px`
- **Border Radius:** `8px`
- **Border:** `2px solid #155DFC`
- **Height:** `48px`
- **Box Shadow:** none
- **Hover State:** Background `#EEF3FF`
- **Active State:** Background `#DBEAFE`, border `#0D3FBA`

#### Ghost Button
- **Background:** `transparent`
- **Text Color:** `#6B7280`
- **Font:** Inter, 15px, weight 500
- **Padding:** `10px 16px`
- **Border Radius:** `8px`
- **Border:** `1px solid #E2E8F0`
- **Height:** `44px`
- **Hover State:** Background `#F8FAFC`, border `#CBD5E1`, text `#111827`
- **Active State:** Background `#F1F5F9`

#### Danger Button
- **Background:** `#DC2626`
- **Text Color:** `#FFFFFF`
- **Font:** Inter, 15px, weight 600
- **Padding:** `12px 24px`
- **Border Radius:** `8px`
- **Height:** `48px`
- **Hover State:** Background `#B91C1C`

#### CTA Hero Button (Full Width / Large)
- **Background:** `#155DFC`
- **Text Color:** `#FFFFFF`
- **Font:** Inter, 16px, weight 700
- **Padding:** `16px 32px`
- **Border Radius:** `10px`
- **Height:** `56px`
- **Letter Spacing:** `0.3px`
- **Box Shadow:** `0 4px 14px rgba(21, 93, 252, 0.4)`
- **Hover State:** Background `#0D3FBA`, shadow lebih besar

---

### Cards & Containers

#### Standard Card
- **Background:** `#FFFFFF`
- **Border:** `1px solid #E2E8F0`
- **Border Radius:** `12px`
- **Padding:** `24px`
- **Box Shadow:** `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)`
- **Hover State:** Shadow `0 8px 25px rgba(0,0,0,0.12)`, translate `-2px` vertikal
- **Title Color:** `#111827`
- **Description Color:** `#6B7280`

#### Project Card (Dengan Gambar)
- **Background:** `#FFFFFF`
- **Border:** `1px solid #E2E8F0`
- **Border Radius:** `12px`
- **Padding:** `0` (image-first, konten 20px)
- **Box Shadow:** `0 4px 16px rgba(0,0,0,0.08)`
- **Image Border Radius:** `12px 12px 0 0`
- **Category Badge:** Background `#EEF3FF`, text `#155DFC`

#### Stats Card (Angka Pencapaian)
- **Background:** `#155DFC`
- **Border Radius:** `12px`
- **Padding:** `32px 24px`
- **Number Color:** `#FFFFFF`, 48px, weight 800
- **Label Color:** `rgba(255,255,255,0.8)`, 14px
- **Border:** none
- **Box Shadow:** `0 8px 25px rgba(21, 93, 252, 0.35)`

#### Info Panel
- **Background:** `#EEF3FF`
- **Border:** `1px solid #BFDBFE`
- **Border Radius:** `10px`
- **Padding:** `16px 20px`
- **Border Left:** `4px solid #155DFC`
- **Text Color:** `#1D4ED8`

---

### Inputs & Forms

#### Text Input
- **Background:** `#FFFFFF`
- **Text Color:** `#111827`
- **Font:** Inter, 15px, weight 400
- **Padding:** `12px 16px`
- **Border Radius:** `8px`
- **Border:** `1.5px solid #E2E8F0`
- **Height:** `48px`
- **Placeholder Color:** `#9CA3AF`
- **Focus State:** Border `#155DFC`, shadow `0 0 0 3px rgba(21, 93, 252, 0.15)`
- **Error State:** Border `#DC2626`, shadow `0 0 0 3px rgba(220, 38, 38, 0.12)`
- **Disabled State:** Background `#F8FAFC`, border `#E2E8F0`, text `#9CA3AF`

#### Textarea
- Sama dengan Text Input, `min-height: 120px`, `resize: vertical`

#### Select / Dropdown
- Sama dengan Text Input
- Ikon chevron kanan: `#6B7280`
- Hover pada option: Background `#EEF3FF`

#### Form Label
- **Text Color:** `#374151`
- **Font:** Inter, 14px, weight 500
- **Margin Bottom:** `6px`
- **Required asterisk:** `#DC2626`

#### Helper Text
- **Text Color:** `#6B7280`
- **Font:** Inter, 13px, weight 400
- **Margin Top:** `4px`

#### Error Text
- **Text Color:** `#DC2626`
- **Font:** Inter, 13px, weight 400
- **Margin Top:** `4px`

---

### Navigation

#### Header / Navbar
- **Background:** `rgba(255, 255, 255, 0.97)`
- **Backdrop Filter:** `blur(12px)`
- **Height:** `72px`
- **Padding:** `0 48px`
- **Border Bottom:** `1px solid #E2E8F0`
- **Box Shadow:** `0 1px 4px rgba(0,0,0,0.06)`
- **Position:** `sticky top-0`, z-index tinggi

#### Nav Link
- **Text Color:** `#374151`
- **Font:** Inter, 15px, weight 500
- **Padding:** `8px 12px`
- **Border Radius:** `6px`
- **Hover State:** Background `#EEF3FF`, text `#155DFC`
- **Active State:** Text `#155DFC`, border-bottom `2px solid #155DFC`

#### Nav Active Button (seperti "Beranda" di screenshot)
- **Background:** `#155DFC`
- **Text Color:** `#FFFFFF`
- **Font:** Inter, 15px, weight 600
- **Padding:** `8px 16px`
- **Border Radius:** `8px`

#### Mobile Nav Drawer
- **Background:** `#FFFFFF`
- **Width:** 100% (full)
- **Padding:** `24px`
- **Border Right:** `1px solid #E2E8F0`

---

### Badges & Tags

#### Primary Badge
- **Background:** `#155DFC`
- **Text Color:** `#FFFFFF`
- **Font:** Inter, 12px, weight 600
- **Padding:** `4px 10px`
- **Border Radius:** `20px`

#### Light Badge
- **Background:** `#EEF3FF`
- **Text Color:** `#155DFC`
- **Font:** Inter, 12px, weight 600
- **Padding:** `4px 10px`
- **Border Radius:** `20px`
- **Border:** `1px solid #BFDBFE`

#### Status Badge — Aktif
- **Background:** `#D1FAE5`
- **Text Color:** `#065F46`
- **Border:** `1px solid #6EE7B7`

#### Status Badge — Proses
- **Background:** `#FEF3C7`
- **Text Color:** `#92400E`
- **Border:** `1px solid #FCD34D`

#### Status Badge — Selesai
- **Background:** `#DBEAFE`
- **Text Color:** `#1E40AF`
- **Border:** `1px solid #93C5FD`

---

### Hero Section

#### Full-Bleed Hero dengan Overlay
- **Background:** Foto proyek full-width dengan overlay `rgba(0, 0, 0, 0.55)` atau `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.65))`
- **Minimum Height:** `600px` desktop, `420px` mobile
- **Konten Position:** Center atau bottom-left
- **Title Color:** `#FFFFFF`
- **Subtitle Color:** `rgba(255,255,255,0.85)`
- **CTA Button:** Primary button dengan shadow yang lebih besar

#### Hero dengan Background Biru
- **Background:** `#155DFC` atau `linear-gradient(135deg, #155DFC, #0A2E8A)`
- **Title Color:** `#FFFFFF`
- **Subtitle Color:** `rgba(255,255,255,0.85)`

---

## 5. Layout Principles

### Spacing System

**Base Unit:** `8px`

| Token | Value | Penggunaan |
|-------|-------|------------|
| space-1 | 4px | Micro gap, icon ke teks |
| space-2 | 8px | Spasi internal kecil |
| space-3 | 12px | Padding vertikal tombol, gap elemen berdekatan |
| space-4 | 16px | Padding form input, gap kartu |
| space-6 | 24px | Padding kartu, gap section kecil |
| space-8 | 32px | Jarak antar blok konten |
| space-10 | 40px | Section spacing medium |
| space-12 | 48px | Padding horizontal desktop |
| space-16 | 64px | Jarak antar section besar |
| space-20 | 80px | Padding vertikal section |
| space-24 | 96px | Hero section padding |

### Grid & Container

- **Max Width:** `1280px` (container utama, centered)
- **Content Max Width:** `1120px` (konten dalam container)
- **Kolom:** 12 kolom desktop, 6 kolom tablet, 4 kolom mobile
- **Gutter:** `24px` antar kolom
- **Section Padding:** `0 48px` desktop, `0 24px` tablet, `0 16px` mobile

### Border Radius Scale

| Value | Penggunaan |
|-------|------------|
| `4px` | Elemen kecil, tag kecil, micro UI |
| `6px` | Tombol kecil, nav link hover |
| `8px` | Tombol standar, input form, kartu kecil |
| `10px` | CTA button besar |
| `12px` | Kartu standar, modal, panel |
| `16px` | Kartu besar, container featured |
| `24px` | Hero section element besar |
| `9999px` | Pill badge, chip |

---

## 6. Depth & Elevation

| Level | Box Shadow | Penggunaan |
|-------|-----------|------------|
| Flat | `none` | Tombol ghost, teks link, divider |
| Subtle | `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)` | Kartu standar, input resting |
| Low | `0 4px 8px rgba(0,0,0,0.08)` | Dropdown, tooltip, nav aktif |
| Medium | `0 8px 25px rgba(0,0,0,0.12)` | Kartu hover, modal kecil |
| High | `0 16px 40px rgba(0,0,0,0.16)` | Modal utama, overlay |
| Brand | `0 4px 14px rgba(21, 93, 252, 0.35)` | CTA button hero, stats card biru |

---

## 7. Iconography

- **Library:** Heroicons atau Lucide Icons (outline style)
- **Default Size:** 20px (inline), 24px (standalone), 48px (feature icon)
- **Color:** Mengikuti konteks — `#155DFC` untuk aksen, `#6B7280` untuk UI netral, `#FFFFFF` di atas background biru
- **Stroke Width:** 1.5px untuk outline, konsisten di seluruh halaman
- **Feature Icons:** Ikon besar (48px) dalam kotak `#EEF3FF` dengan border radius `12px`, padding `16px`, warna ikon `#155DFC`

---

## 8. Do's and Don'ts

### Do
- **Gunakan `#155DFC`** secara konsisten sebagai warna utama pada semua elemen interaktif dan branding utama.
- **Teks putih di atas biru** — selalu `#FFFFFF` di atas background `#155DFC` atau lebih gelap untuk kontras yang aman.
- **Jaga spasi yang cukup** minimum `24px` padding pada kartu, `48px` antara section.
- **Hierarki jelas** melalui ukuran dan weight tipografi; hindari mengandalkan warna saja.
- **Gunakan foto proyek nyata** sebagai visual utama — infrastruktur, gedung, industri.
- **Tombol primary hanya satu per section** — hindari kompetisi CTA.
- **Patuhi grid 8px** untuk semua spasi, padding, dan ukuran komponen.
- **Pastikan kontras WCAG AA** — minimum rasio 4.5:1 untuk teks body.

### Don't
- **Jangan gunakan banyak warna aksen** — palette sengaja dibatasi; hindari warna di luar sistem.
- **Jangan campur font** — hanya Inter untuk semua teks.
- **Jangan buat layout padat** — spasi adalah elemen desain, bukan pemborosan.
- **Jangan gunakan merah untuk pesan umum** — merah hanya untuk error dan peringatan kritis.
- **Jangan tumpuk CTA** — satu tombol primary per area pandang.
- **Jangan lupa touch target mobile** — minimum `48px × 48px` untuk semua elemen interaktif.
- **Jangan kurangi opasitas teks utama** — teks body harus selalu `#111827` penuh.
- **Jangan gunakan gradient dekoratif** — sistem ini mengutamakan flat design yang bersih.

---

## 9. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Perubahan Layout | Tipografi | Spacing |
|------------|-------|-----------------|-----------|---------|
| Mobile | 375px–599px | 1 kolom, nav drawer, tombol full width | Display→48px, H1→32px, H2→26px | Padding section→16px |
| Mobile L | 600px–767px | 2 kolom, layout diperluas | Display→56px, H1→36px | Padding section→24px |
| Tablet | 768px–1023px | 6 kolom, hamburger nav, 2×2 cards | Display→64px, H1→40px | Padding section→32px |
| Desktop | 1024px–1280px | 12 kolom, full layout, horizontal nav | Full scale | Padding section→48px |
| Large | 1280px+ | Max container 1280px, centered | Tidak berubah | Pertahankan max-width |

### Touch Targets
- **Minimum:** `48px × 48px` untuk semua elemen interaktif di mobile dan tablet
- **Clearance antar tombol:** Minimum `8px`
- **Input form:** Minimum height `48px`
- **Nav item:** Minimum height `44px`

### Strategi Collapse
- **Navbar:** Horizontal penuh (desktop) → Hamburger menu (tablet) → Drawer full-width (mobile)
- **Cards:** 3–4 kolom (desktop) → 2 kolom (tablet) → 1 kolom penuh (mobile)
- **Hero:** Full bleed dengan teks besar → Teks diperkecil, padding dikurangi → Single column, gambar di atas

---

## 10. Agent Prompt Guide

### Quick Color Reference

| Token | Hex | Penggunaan |
|-------|-----|------------|
| Brand Blue | `#155DFC` | CTA utama, heading, ikon aktif |
| Blue Dark | `#0D3FBA` | Hover state, heading sekunder |
| Blue Deeper | `#0A2E8A` | Active state, pressed |
| Blue Light | `#EEF3FF` | Background ringan, badge |
| White | `#FFFFFF` | Surface, teks di atas biru |
| Text Primary | `#111827` | Body text utama |
| Text Secondary | `#6B7280` | Teks de-emphasis |
| Background | `#F8FAFC` | Page background |
| Border | `#E2E8F0` | Divider, border kartu |
| Success | `#059669` | Status positif |
| Warning | `#D97706` | Status perhatian |
| Error | `#DC2626` | Error, alert kritis |

### Iteration Guide

1. **Grid 8px wajib** — semua spasi, padding, margin, dan ukuran adalah kelipatan 8px.

2. **Hierarki tipografi melalui ukuran dan weight** — gunakan Inter di semua level, bedakan hanya dengan size dan weight (400/500/600/700/800).

3. **Brand Blue (`#155DFC`) adalah satu-satunya warna aksen** — semua elemen interaktif menggunakan warna ini atau derivatifnya.

4. **Shadow hanya untuk elemen elevated atau interaktif** — kartu resting, tombol primary, dan modal. Elemen flat tidak butuh shadow.

5. **Foto proyek nyata sebagai hero** — hindari ilustrasi generik; foto infrastruktur, gedung, dan proyek industri membangun kepercayaan.

6. **Kartu selalu dengan border radius `12px`**, border `1px solid #E2E8F0`, shadow subtle, padding internal `24px`.

7. **Tombol primary** — Background `#155DFC`, teks putih, padding `12px 24px`, radius `8px`, height `48px`.

8. **Input form** — Height `48px`, border `1.5px solid #E2E8F0`, focus dengan border biru dan shadow `rgba(21, 93, 252, 0.15)`.

9. **Navbar** — `sticky`, height `72px`, background semi-transparan dengan blur, border bottom halus.

10. **Stats dan angka pencapaian** — Kartu biru (`#155DFC`) dengan teks putih, atau teks biru besar di atas background putih/light. Jangan timbun terlalu banyak angka dalam satu baris.

11. **Kontras WCAG AA wajib** — `#FFFFFF` di atas `#155DFC` memiliki rasio 4.93:1 (pass AA). `#111827` di atas `#FFFFFF` memiliki rasio 19.1:1 (pass AAA).

12. **Responsive collapse** — Desktop 3–4 kolom → Tablet 2 kolom → Mobile 1 kolom. Kurangi ukuran heading 15% di tablet, 30% di mobile.