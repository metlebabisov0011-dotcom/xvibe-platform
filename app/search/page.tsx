"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div style={{ backgroundColor: "#141E30", minHeight: "100vh", color: "#FFFFFF", padding: "24px 20px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#F3F5F8", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
          <ArrowLeft size={16} color="#FF725E" /> Ana səhifəyə qayıt
        </Link>
        <h1 style={{ fontSize: "22px", fontWeight: "800", margin: 0 }}>
          Axtarış nəticəsi: &quot;{query}&quot;
        </h1>
        <p style={{ color: "#F3F5F8", opacity: 0.7 }}>Axtarışınıza uyğun videolar tapıldı.</p>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ color: "#FFFFFF", padding: "40px" }}>Yüklənir...</div>}>
      <SearchContent />
    </Suspense>
  );
}