"use client";
import React from "react";
import Link from "next/link";
import { LogIn, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div style={{ backgroundColor: "#141E30", minHeight: "100vh", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div style={{ width: "100%", maxWidth: "420px", backgroundColor: "#1B263B", padding: "32px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#F3F5F8", fontSize: "13px", textDecoration: "none" }}>
          <ArrowLeft size={14} color="#FF725E" /> Geri qayıt
        </Link>
        <h1 style={{ fontSize: "22px", fontWeight: "800", margin: 0, textAlign: "center" }}>XVIBE Giriş</h1>
        <input type="email" placeholder="E-poçt ünvanı" style={{ width: "100%", padding: "12px", borderRadius: "10px", backgroundColor: "#141E30", border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF", outline: "none" }} />
        <input type="password" placeholder="Şifrə" style={{ width: "100%", padding: "12px", borderRadius: "10px", backgroundColor: "#141E30", border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF", outline: "none" }} />
        <button style={{ width: "100%", padding: "12px", borderRadius: "10px", backgroundColor: "#FF725E", color: "#FFFFFF", fontWeight: "700", border: "none", cursor: "pointer" }}>Daxil ol</button>
      </div>
    </div>
  );
}