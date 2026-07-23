"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      tempErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Format email tidak valid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subjek wajib diisi";
    if (!formData.message.trim()) tempErrors.message = "Pesan wajib diisi";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const BLUE = "#155DFC";

  if (submitted) {
    return (
      <div style={{
        backgroundColor: "#F0FDF4",
        border: "1px solid #BBF7D0",
        borderRadius: "16px",
        padding: "40px 24px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(242, 253, 244, 0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#DCFCE7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#16A34A",
          marginBottom: "16px"
        }}>
          <CheckCircle2 size={32} />
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#166534", marginBottom: "8px" }}>
          Pesan Berhasil Dikirim!
        </h3>
        <p style={{ fontSize: "14px", color: "#15803D", lineHeight: "1.6", maxWidth: "400px", margin: "0 auto 24px" }}>
          Terima kasih telah menghubungi kami. Tim kami akan segera menanggapi pesan Anda secepat mungkin.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          style={{
            backgroundColor: "#16A34A",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 24px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(22, 163, 74, 0.2)",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          Kirim Pesan Baru
        </button>
      </div>
    );
  }

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 700,
    color: "#374151",
    marginBottom: "6px"
  };

  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: hasError ? "1.5px solid #EF4444" : "1.5px solid #E2E8F0",
    backgroundColor: "#F8FAFC",
    color: "#1F2937",
    fontSize: "14px",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s, box-shadow 0.2s"
  });

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <label htmlFor="contact-name" style={labelStyle}>Nama Lengkap</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukkan nama Anda"
          style={inputStyle(!!errors.name)}
          onFocus={(e) => { if (!errors.name) e.target.style.borderColor = BLUE; }}
          onBlur={(e) => { if (!errors.name) e.target.style.borderColor = "#E2E8F0"; }}
        />
        {errors.name && <p style={{ color: "#EF4444", fontSize: "12px", marginTop: "4px", marginBottom: 0 }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" style={labelStyle}>Alamat Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nama@perusahaan.com"
          style={inputStyle(!!errors.email)}
          onFocus={(e) => { if (!errors.email) e.target.style.borderColor = BLUE; }}
          onBlur={(e) => { if (!errors.email) e.target.style.borderColor = "#E2E8F0"; }}
        />
        {errors.email && <p style={{ color: "#EF4444", fontSize: "12px", marginTop: "4px", marginBottom: 0 }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" style={labelStyle}>Subjek</label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Topik atau perihal pesan"
          style={inputStyle(!!errors.subject)}
          onFocus={(e) => { if (!errors.subject) e.target.style.borderColor = BLUE; }}
          onBlur={(e) => { if (!errors.subject) e.target.style.borderColor = "#E2E8F0"; }}
        />
        {errors.subject && <p style={{ color: "#EF4444", fontSize: "12px", marginTop: "4px", marginBottom: 0 }}>{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Pesan Anda</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tuliskan pesan atau detail penawaran kerja sama..."
          style={{
            ...inputStyle(!!errors.message),
            resize: "vertical",
            minHeight: "100px"
          }}
          onFocus={(e) => { if (!errors.message) e.target.style.borderColor = BLUE; }}
          onBlur={(e) => { if (!errors.message) e.target.style.borderColor = "#E2E8F0"; }}
        />
        {errors.message && <p style={{ color: "#EF4444", fontSize: "12px", marginTop: "4px", marginBottom: 0 }}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor: BLUE,
          color: "#FFFFFF",
          border: "none",
          borderRadius: "10px",
          padding: "14px 28px",
          fontSize: "14px",
          fontWeight: 700,
          cursor: loading ? "not-allowed" : "pointer",
          boxShadow: `0 4px 14px ${BLUE}33`,
          transition: "all 0.2s ease",
          opacity: loading ? 0.8 : 1,
          marginTop: "8px"
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = `0 6px 20px ${BLUE}4d`;
          }
        }}
        onMouseLeave={(e) => {
          if (!loading) {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = `0 4px 14px ${BLUE}33`;
          }
        }}
      >
        {loading ? (
          <>
            <div style={{
              width: "18px",
              height: "18px",
              border: "2px solid rgba(255,255,255,0.2)",
              borderTop: "2px solid #FFFFFF",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }} />
            Mengirim...
          </>
        ) : (
          <>
            Kirim Pesan <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}
