"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, MessageCircle, Share2, ArrowLeft, ChevronUp, ChevronDown, Play } from "lucide-react";

const SHORTS = [
  { id: 1, title: "Bakı gecələrində drift və sürət 🏎️🔥", author: "@xvibe_auto", likes: "14.2K", comments: "320", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=700&auto=format&fit=crop" },
  { id: 2, title: "Setup-ını 10 saniyədə necə təmizləməli? 💻✨", author: "@tech_az", likes: "8.9K", comments: "145", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=700&auto=format&fit=crop" },
  { id: 3, title: "Quba dağlarında səhər dumanı 🏔️", author: "@travel_baku", likes: "22.5K", comments: "510", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=700&auto=format&fit=crop" },
];

export default function ShortsPage() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const current = SHORTS[index];

  const nextShort = () => {
    setLiked(false);
    setIndex((prev) => (prev + 1) % SHORTS.length);
  };

  const prevShort = () => {
    setLiked(false);
    setIndex((prev) => (prev - 1 + SHORTS.length) % SHORTS.length);
  };

  return (
    <div style={{ backgroundColor: "#0F172A", minHeight: "calc(100vh - 65px)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", position: "relative" }}>
      
      {/* Ana səhifəyə qayıt */}
      <Link href="/" style={{ position: "absolute", top: "20px", left: "24px", display: "flex", alignItems: "center", gap: "8px", color: "#FFFFFF", textDecoration: "none", fontSize: "13px", fontWeight: "600", backgroundColor: "#1B263B", padding: "8px 14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
        <ArrowLeft size={16} color="#FF725E" /> Geri
      </Link>

      {/* Şaquli Reels Pleyer (9:16) */}
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        
        <div style={{ width: "340px", height: "600px", backgroundColor: "#1B263B", borderRadius: "20px", overflow: "hidden", position: "relative", boxShadow: "0 20px 50px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <img src={current.img} alt={current.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          
          {/* Mərkəzdə Play ikonu */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "rgba(255,114,94,0.85)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Play size={26} color="#FFFFFF" fill="#FFFFFF" style={{ marginLeft: "3px" }} />
          </div>

          {/* Aşağıda Başlıq və Kanal */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px", background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#FF725E", marginBottom: "4px" }}>{current.author}</div>
            <div style={{ fontSize: "14px", fontWeight: "600", lineHeight: "1.4" }}>{current.title}</div>
          </div>

          {/* Sağ tərəfdə Bəyən, Şərh, Paylaş */}
          <div style={{ position: "absolute", right: "12px", bottom: "85px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
            <button onClick={() => setLiked(!liked)} style={{ background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: "42px", height: "42px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: liked ? "#FF725E" : "#FFFFFF", cursor: "pointer" }}>
              <Heart size={20} fill={liked ? "#FF725E" : "none"} />
            </button>
            <span style={{ fontSize: "11px", fontWeight: "700", marginTop: "-12px" }}>{current.likes}</span>

            <button style={{ background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", cursor: "pointer" }}>
              <MessageCircle size={20} />
            </button>
            <span style={{ fontSize: "11px", fontWeight: "700", marginTop: "-12px" }}>{current.comments}</span>

            <button style={{ background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", cursor: "pointer" }}>
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Yuxarı / Aşağı keçid düymələri */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button onClick={prevShort} style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#1B263B", border: "1px solid rgba(255,255,255,0.1)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <ChevronUp size={22} />
          </button>
          <button onClick={nextShort} style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#1B263B", border: "1px solid rgba(255,255,255,0.1)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <ChevronDown size={22} />
          </button>
        </div>

      </div>
    </div>
  );
}