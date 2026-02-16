import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────
   amleht | EU × Duna — Unified Trust Bundle
   Concept visual — plants the seed for meeting two
   ───────────────────────────────────────────────────────── */

const EU_BLUE = "#003399";
const EU_GOLD = "#D4A817";
const NAVY = "#0a0e1a";
const GREEN = "#22c55e";
const IRELAND = "#009A49";
const DUNA_GREEN = "#00C853";
const AMBER = "#f59e0b";
const BORDER = "rgba(255,255,255,0.06)";
const FONT = "'Inter', 'Segoe UI', system-ui, sans-serif";
const MONO = "'SF Mono', 'Fira Code', 'Consolas', monospace";

function ChainDot({ color, size = 10, glow = false, pulse = false }) {
  return (
    <div style={{
      width: `${size}px`, height: `${size}px`, borderRadius: "50%",
      background: color, flexShrink: 0,
      boxShadow: glow ? `0 0 12px ${color}60` : "none",
      animation: pulse ? "pulse 2s ease-in-out infinite" : "none",
    }} />
  );
}

function HashBlock({ hash, label, color = "rgba(255,255,255,0.3)" }) {
  return (
    <span style={{ fontFamily: MONO, fontSize: "9px", color }}>
      {label && <span style={{ color: "rgba(255,255,255,0.2)", marginRight: "4px" }}>{label}</span>}
      {hash}
    </span>
  );
}

export default function UnifiedTrustBundle() {
  const [phase, setPhase] = useState(0); // 0=separate, 1=converging, 2=unified
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    if (!auto) return;
    const timers = [
      setTimeout(() => setPhase(1), 2000),
      setTimeout(() => setPhase(2), 4500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [auto]);

  const startAnimation = () => { setPhase(0); setAuto(true); };

  return (
    <div style={{ minHeight: "100vh", background: NAVY, color: "#e2e8f0", fontFamily: FONT }}>
      {/* Header */}
      <div style={{ padding: "16px 24px", borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontWeight: 700, fontSize: "18px" }}>
            <span style={{ color: "#fff" }}>amleht</span>
            <span style={{ color: EU_BLUE, margin: "0 6px" }}>|</span>
            <span style={{ color: EU_GOLD }}>EU</span>
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "18px" }}>×</span>
          <span style={{ fontWeight: 700, fontSize: "18px", color: DUNA_GREEN }}>Duna</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", letterSpacing: "0.1em", marginLeft: "8px" }}>UNIFIED TRUST BUNDLE</span>
        </div>
        <button onClick={startAnimation} style={{
          padding: "6px 16px", borderRadius: "6px", border: `1px solid ${EU_GOLD}40`,
          background: `${EU_GOLD}10`, color: EU_GOLD, fontSize: "12px", fontWeight: 500,
          cursor: "pointer", fontFamily: FONT,
        }}>
          ▶ Show Convergence
        </button>
      </div>

      <div style={{ padding: "32px 40px", maxWidth: "1100px", margin: "0 auto" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#fff", margin: "0 0 8px 0", letterSpacing: "-0.02em" }}>
            One Business. One Chain. Complete Compliance.
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", margin: 0, maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Duna verifies who the business is. amleht verifies their infrastructure is sovereign and compliant. Both anchored to a single blockchain. A compliance passport no one else can offer.
          </p>
        </div>

        {/* The Bank */}
        <div style={{
          textAlign: "center", padding: "14px 24px", borderRadius: "8px", marginBottom: "32px",
          background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`,
        }}>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>Requesting Institution</div>
          <div style={{ fontSize: "18px", fontWeight: 600, color: "#fff" }}>Fictief NV</div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>Dutch Banking Institution · Amsterdam</div>
        </div>

        {/* Two chains side by side */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "32px", transition: "all 0.8s ease" }}>

          {/* DUNA chain */}
          <div style={{
            flex: 1, padding: "20px", borderRadius: "10px",
            background: `${DUNA_GREEN}06`, border: `1px solid ${DUNA_GREEN}20`,
            opacity: phase >= 1 ? 0.85 : 1, transition: "all 0.8s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <ChainDot color={DUNA_GREEN} size={8} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: DUNA_GREEN }}>Duna — Identity Chain</span>
              <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>QUESTION 1: WHO IS THIS BUSINESS?</span>
            </div>

            {[
              { id: "D-001", title: "KYB Verification Complete", desc: "Company registry, UBO structure, PEP screening", hash: "0xd1a2b3c4...f5e6", score: "VERIFIED", color: DUNA_GREEN },
              { id: "D-002", title: "AML Screening Passed", desc: "Sanctions lists, adverse media, transaction patterns", hash: "0xd7e8f9a0...b1c2", score: "CLEAR", color: DUNA_GREEN },
              { id: "D-003", title: "PSD2 Licence Confirmed", desc: "Regulatory licence validation, supervisory history", hash: "0xd3d4e5f6...a7b8", score: "VALID", color: DUNA_GREEN },
              { id: "D-004", title: "Digital Identity Passport", desc: "Composite identity verification certificate", hash: "0xd9c0a1b2...e3f4", score: "ISSUED", color: EU_GOLD },
            ].map((entry, i) => (
              <div key={entry.id} style={{ display: "flex", gap: "12px", marginBottom: "8px", position: "relative" }}>
                {i < 3 && <div style={{ position: "absolute", left: "5px", top: "14px", bottom: "-8px", width: "1px", background: `${DUNA_GREEN}30` }} />}
                <ChainDot color={i === 3 ? EU_GOLD : DUNA_GREEN} size={i === 3 ? 12 : 8} glow={i === 3} />
                <div style={{ flex: 1, padding: "8px 12px", borderRadius: "6px", background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#e2e8f0" }}>{entry.title}</span>
                    <span style={{ fontSize: "10px", fontWeight: 600, color: entry.color, fontFamily: MONO }}>{entry.score}</span>
                  </div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>{entry.desc}</div>
                  <HashBlock hash={entry.hash} color={`${DUNA_GREEN}80`} />
                </div>
              </div>
            ))}
          </div>

          {/* AMLEHT chain */}
          <div style={{
            flex: 1, padding: "20px", borderRadius: "10px",
            background: `${EU_BLUE}08`, border: `1px solid ${EU_BLUE}25`,
            opacity: phase >= 1 ? 0.85 : 1, transition: "all 0.8s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <ChainDot color={EU_BLUE} size={8} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: EU_BLUE }}>amleht — Infrastructure Chain</span>
              <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>QUESTION 2: IS IT COMPLIANT?</span>
            </div>

            {[
              { id: "A-001", title: "Onboarding Certificate", desc: "Landing zone deployed, sovereignty verified", hash: "0xa3f7c8d1...4f6a", score: "CERTIFIED", color: GREEN },
              { id: "A-002", title: "Sovereignty Assessment", desc: "CLOUD Act exposure: HIGH. Remediation path mapped", hash: "0x7b2e4f91...8d1e", score: "8/10 RISK", color: "#ef4444" },
              { id: "A-003", title: "DORA Compliance", desc: "Art. 11 incident mgmt, Art. 9 security, Art. 28 TPR", hash: "0x1d8f3a6c...b2c9", score: "52%", color: AMBER },
              { id: "A-004", title: "Infrastructure Passport", desc: "Composite sovereignty & compliance certificate", hash: "0xe5c2d7f8...63f0", score: "ISSUED", color: EU_GOLD },
            ].map((entry, i) => (
              <div key={entry.id} style={{ display: "flex", gap: "12px", marginBottom: "8px", position: "relative" }}>
                {i < 3 && <div style={{ position: "absolute", left: "5px", top: "14px", bottom: "-8px", width: "1px", background: `${EU_BLUE}30` }} />}
                <ChainDot color={i === 3 ? EU_GOLD : EU_BLUE} size={i === 3 ? 12 : 8} glow={i === 3} />
                <div style={{ flex: 1, padding: "8px 12px", borderRadius: "6px", background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#e2e8f0" }}>{entry.title}</span>
                    <span style={{ fontSize: "10px", fontWeight: 600, color: entry.color, fontFamily: MONO }}>{entry.score}</span>
                  </div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>{entry.desc}</div>
                  <HashBlock hash={entry.hash} color={`${EU_BLUE}80`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Convergence zone */}
        <div style={{
          padding: "24px", borderRadius: "12px", textAlign: "center",
          background: phase >= 1 ? `${EU_GOLD}08` : "rgba(255,255,255,0.01)",
          border: `1px solid ${phase >= 2 ? `${EU_GOLD}40` : phase >= 1 ? `${EU_GOLD}20` : BORDER}`,
          transition: "all 1s ease",
          boxShadow: phase >= 2 ? `0 0 40px ${EU_GOLD}10` : "none",
        }}>
          {phase < 1 && (
            <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>
              ↑ Two separate chains. Two separate compliance stories. ↑
              <div style={{ marginTop: "8px", fontSize: "11px" }}>Click "Show Convergence" to see the unified trust bundle</div>
            </div>
          )}

          {phase >= 1 && phase < 2 && (
            <div style={{ animation: "fadeIn 0.8s ease-out" }}>
              <div style={{ fontSize: "11px", color: EU_GOLD, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>Converging...</div>
              <div style={{ display: "flex", justifyContent: "center", gap: "8px", alignItems: "center" }}>
                <ChainDot color={DUNA_GREEN} size={8} pulse />
                <div style={{ width: "60px", height: "1px", background: `linear-gradient(90deg, ${DUNA_GREEN}, ${EU_GOLD})` }} />
                <ChainDot color={EU_GOLD} size={12} pulse glow />
                <div style={{ width: "60px", height: "1px", background: `linear-gradient(90deg, ${EU_GOLD}, ${EU_BLUE})` }} />
                <ChainDot color={EU_BLUE} size={8} pulse />
              </div>
            </div>
          )}

          {phase >= 2 && (
            <div style={{ animation: "fadeIn 0.8s ease-out" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <ChainDot color={EU_GOLD} size={20} glow />
              </div>
              <div style={{ fontSize: "10px", color: EU_GOLD, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>Unified Trust Bundle — Anchored</div>

              <div style={{
                display: "inline-block", padding: "16px 28px", borderRadius: "10px",
                background: `linear-gradient(135deg, ${DUNA_GREEN}10, ${EU_GOLD}10, ${EU_BLUE}10)`,
                border: `1px solid ${EU_GOLD}30`,
              }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Fictief NV — Compliance Passport</div>
                <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "10px" }}>
                  <div>
                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Identity</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: DUNA_GREEN }}>✓ Verified by Duna</div>
                  </div>
                  <div style={{ width: "1px", background: `${EU_GOLD}30` }} />
                  <div>
                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Infrastructure</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: GREEN }}>✓ Certified by amleht</div>
                  </div>
                </div>
                <div style={{ fontFamily: MONO, fontSize: "10px", color: EU_GOLD }}>
                  unified-hash: 0xUNI-f8a3b7c1d2e9...4f6a
                </div>
                <div style={{ fontFamily: MONO, fontSize: "9px", color: "rgba(255,255,255,0.2)", marginTop: "4px" }}>
                  Polygon PoS · Block #19849001 · Continuous · EU Sovereign
                </div>
              </div>

              <div style={{ marginTop: "16px", fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "520px", margin: "16px auto 0" }}>
                One verification. Business identity confirmed, infrastructure sovereign and compliant. Both provable, both continuous, both blockchain-anchored. A compliance passport no one else on earth can offer.
              </div>
            </div>
          )}
        </div>

        {/* Bottom context */}
        <div style={{ marginTop: "24px", display: "flex", justifyContent: "center", gap: "32px", fontSize: "10px", color: "rgba(255,255,255,0.2)" }}>
          <span>Chain: Polygon PoS</span>
          <span>Jurisdiction: EU/EEA</span>
          <span>Retention: Continuous</span>
          <span>amleht.eu · Amsterdam</span>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}
