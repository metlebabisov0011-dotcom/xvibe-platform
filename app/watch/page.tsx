"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Play, Eye, ThumbsUp, Bookmark, Share2, Calendar } from "lucide-react";

export default function WatchPage() {
  return (
    <div style={{ backgroundColor: "#141E30", minHeight: "100vh", color: "#FFFFFF", padding: "16px 12px 40px 12px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
        
        {/* Geri qayıt */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#94A3B8", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>
          <ArrowLeft size={16} /> Ana səhifəyə qayıt
        </Link>

        {/* Əsas Video Pleyer */}
        <div style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "#1B263B", borderRadius: "14px", overflow: "hidden", position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" alt="Video cover" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#FF725E", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(255,114,94,0.5)", cursor: "pointer" }}>
            <Play size={24} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: "3px" }} />
          </div>
        </div>

        {/* Video Başlığı və Kanal Məlumatı */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h1 style={{ fontSize: "16px", fontWeight: "800", margin: 0, lineHeight: "1.35", color: "#FFFFFF" }}>
            Süni İntellekt və Gələcəyin Texnologiyaları 2026
          </h1>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#FF725E", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "14px" }}>
                XV
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#FFFFFF" }}>XVIBE Studio</div>
                <div style={{ fontSize: "11px", color: "#94A3B8" }}>45.2K abunəçi</div>
              </div>
            </div>

            {/* Düymələr */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "7px 12px", borderRadius: "20px", backgroundColor: "#1B263B", border: "1px solid rgba(255,255,255,0.08)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                <ThumbsUp size={14} color="#FF725E" /> 1420
              </button>
              <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "7px 12px", borderRadius: "20px", backgroundColor: "#1B263B", border: "1px solid rgba(255,255,255,0.08)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                <Bookmark size={14} color="#FF725E" /> Saxla
              </button>
              <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "7px 12px", borderRadius: "20px", backgroundColor: "#1B263B", border: "1px solid rgba(255,255,255,0.08)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                <Share2 size={14} color="#FF725E" /> Paylaş
              </button>
            </div>
          </div>

          {/* Açıqlama Qutusu */}
          <div style={{ backgroundColor: "#1B263B", borderRadius: "12px", padding: "12px", border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "11px", color: "#94A3B8", fontWeight: "600" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Eye size={13} color="#FF725E" /> 124K baxış</span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={13} color="#FF725E" /> 2 gün əvvəl</span>
            </div>
            <p style={{ fontSize: "12px", color: "#CBD5E1", margin: 0, lineHeight: "1.4" }}>
              Bu videoda 2026-cı ildə süni intellekt texnologiyalarının inkişaf mərhələləri, proqramlaşdırma dünyasına təsirləri və gələcək trendlər müzakirə olunur.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}