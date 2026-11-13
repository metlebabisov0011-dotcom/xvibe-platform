"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header style={{ 
      position: "sticky", 
      top: 0, 
      zIndex: 100, 
      backgroundColor: "rgba(20, 30, 48, 0.95)", 
      backdropFilter: "blur(14px)", 
      borderBottom: "1px solid rgba(255,255,255,0.06)", 
      padding: isMobile ? "10px 14px" : "12px 24px",
      boxSizing: "border-box"
    }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", boxSizing: "border-box" }}>
        
        {/* Sol: Loqo */}
        <Link href="/" className="xvibe-logo-link" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", flexShrink: 0 }}>
          <div className="xvibe-logo-box" style={{ width: "34px", height: "34px", borderRadius: "9px", backgroundColor: "#FF725E", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontWeight: "900", fontSize: "19px", boxShadow: "0 4px 12px rgba(255,114,94,0.3)" }}>
            <span className="xvibe-logo-x">X</span>
          </div>
          <span style={{ fontSize: "20px", fontWeight: "900", color: "#FFFFFF", letterSpacing: "0.8px" }}>
            VIBE
          </span>
        </Link>

        {/* Kompyuter üçün Axtarış Qutusu (Daşmayan və səliqəli) */}
        {!isMobile && (
          <div style={{ width: "100%", maxWidth: "300px", position: "relative", boxSizing: "border-box" }}>
            <input 
              type="text" 
              placeholder="Video və ya teq axtar..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ width: "100%", padding: "8px 38px 8px 14px", borderRadius: "20px", backgroundColor: "#1B263B", border: "1px solid rgba(255,255,255,0.08)", color: "#FFFFFF", fontSize: "12px", outline: "none", boxSizing: "border-box" }}
            />
            <button style={{ position: "absolute", right: "5px", top: "50%", transform: "translateY(-50%)", width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "#FF725E", border: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", cursor: "pointer" }}>
              <Search size={12} />
            </button>
          </div>
        )}

        {/* Sağ tərəf */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          {isMobile && (
            <button 
              onClick={() => setSearchModalOpen(true)}
              style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#1B263B", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)", color: "#FF725E", cursor: "pointer", boxSizing: "border-box" }}
            >
              <Search size={16} />
            </button>
          )}

          <Link href="/profile" style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#1B263B", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)", color: "#FFFFFF", textDecoration: "none", boxSizing: "border-box" }}>
            <User size={16} />
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#1B263B", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)", color: "#FFFFFF", cursor: "pointer", boxSizing: "border-box" }}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

      </div>

      {/* 📱 Mobildə Axtarış Modal Pəncərəsi (Tam səliqəli və mərkəzləşmiş) */}
      {isMobile && searchModalOpen && (
        <div style={{ 
          position: "fixed", 
          top: 0, 
          left: 0, 
          width: "100vw", 
          height: "100vh", 
          backgroundColor: "rgba(10, 15, 25, 0.92)", 
          backdropFilter: "blur(12px)", 
          zIndex: 200, 
          display: "flex", 
          flexDirection: "column", 
          padding: "24px 16px",
          boxSizing: "border-box" 
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
            <span style={{ fontSize: "16px", fontWeight: "800", color: "#FFFFFF" }}>Video Axtar</span>
            <button 
              onClick={() => setSearchModalOpen(false)}
              style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#1B263B", border: "1px solid rgba(255,255,255,0.08)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ position: "relative", width: "100%", boxSizing: "border-box" }}>
            <input 
              type="text" 
              placeholder="Nə axtarmaq istəyirsən?..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              style={{ 
                width: "100%", 
                padding: "14px 46px 14px 16px", 
                borderRadius: "14px", 
                backgroundColor: "#1B263B", 
                border: "1px solid rgba(255,114,94,0.4)", 
                color: "#FFFFFF", 
                fontSize: "14px", 
                outline: "none",
                boxSizing: "border-box",
                boxShadow: "0 10px 25px rgba(255,114,94,0.15)"
              }}
            />
            <button style={{ position: "absolute", right: "6px", top: "50%", transform: "translateY(-50%)", width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#FF725E", border: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", cursor: "pointer" }}>
              <Search size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Mobil Açılan Menyu */}
      {isMobile && mobileMenuOpen && (
        <div style={{ marginTop: "12px", padding: "14px", backgroundColor: "#1B263B", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "8px", boxSizing: "border-box" }}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "13px", fontWeight: "600", padding: "8px 10px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.03)" }}>🏠 Ana Səhifə</Link>
          <Link href="/categories" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "13px", fontWeight: "600", padding: "8px 10px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.03)" }}>📂 Bütün Kateqoriyalar</Link>
          <Link href="/shorts" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FF725E", textDecoration: "none", fontSize: "13px", fontWeight: "700", padding: "8px 10px", borderRadius: "8px", backgroundColor: "rgba(255,114,94,0.12)" }}>▶ Shorts / Reels</Link>
          <Link href="/profile" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "13px", fontWeight: "600", padding: "8px 10px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.03)" }}>👤 Profil və Ayarlar</Link>
        </div>
      )}
    </header>
  );
}