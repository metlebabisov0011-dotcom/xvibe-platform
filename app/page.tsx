<Link 
  href={`/watch?v=${TRENDING_BANNER.id}`}
  className="xvibe-card"
  style={{
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    height: isMobile ? "200px" : "250px",
    borderRadius: "16px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: isMobile ? "16px" : "24px",
    textDecoration: "none",
    color: "#FFFFFF",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
  }}
>
  <img src={TRENDING_BANNER.thumbnail} alt={TRENDING_BANNER.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(20,30,48,0.1) 0%, rgba(20,30,48,0.95) 85%)", zIndex: 1 }}></div>
  
  <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "6px", width: "100%", boxSizing: "border-box" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <span style={{ padding: "3px 8px", borderRadius: "5px", backgroundColor: "#FF725E", fontSize: "10px", fontWeight: "800" }}>GÜNÜN ÖNƏ ÇIXANI</span>
      <span style={{ fontSize: "11px", color: "#94A3B8", fontWeight: "600" }}>{TRENDING_BANNER.category}</span>
    </div>
    <h1 style={{ fontSize: isMobile ? "15px" : "22px", fontWeight: "800", margin: 0, lineHeight: "1.3", wordBreak: "break-word" }}>
      {TRENDING_BANNER.title}
    </h1>
  </div>
</Link>