"use client";
import React from "react";
import Link from "next/link";
import { User, Bookmark, History, ArrowLeft, Settings } from "lucide-react";

export default function ProfilePage() {
  return (
    <div style={{ backgroundColor: "#141E30", minHeight: "100vh", color: "#FFFFFF", padding: "24px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#F3F5F8", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
          <ArrowLeft size={16} color="#FF725E" /> Ana səhifəyə qayıt
        </Link>
        <div style={{ backgroundColor: "#1B263B", borderRadius: "20px", padding: "32px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "24px" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "#FF725E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", fontWeight: "800" }}>
            M
          </div>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: "800", margin: "0 0 6px 0" }}>Mətin Abışov</h1>
            <p style={{ fontSize: "14px", color: "#F3F5F8", opacity: 0.7, margin: 0 }}>matin_abishov • İştirakçı</p>
          </div>
        </div>
      </div>
    </div>
  );
}