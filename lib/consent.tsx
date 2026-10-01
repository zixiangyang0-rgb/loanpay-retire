"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "consent-choice";

/**
 * Lightweight consent banner (Accept / Decline) stored in localStorage.
 *
 * - Accept: personalized ads allowed.
 * - Decline: AdSlot renders ads as non-personalized (npa=1 push).
 *
 * OWNER NOTE: to serve personalized ads in the EU/UK under GDPR/TCF, enable
 * Google FundingChoices in AdSense > Privacy & messaging, then paste the
 * FundingChoices CMP snippet here (replacing this lightweight banner).
 * This repo intentionally has no tracking server; choice stays on-device.
 */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const choose = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Storage unavailable; just hide the banner.
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Privacy consent"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 50,
        maxWidth: 560,
        margin: "0 auto",
        borderRadius: 16,
        border: "1px solid rgba(255,248,235,0.14)",
        background: "rgba(7,17,31,0.96)",
        padding: "16px 18px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
      }}
    >
      <p style={{ fontSize: 13, lineHeight: 1.6, color: "#e2e8f0" }}>
        We use cookies for Google AdSense ads and basic analytics. Choose
        &ldquo;Accept&rdquo; for personalized ads or &ldquo;Decline&rdquo; for
        non-personalized ads. See our{" "}
        <a href="/privacy-policy" style={{ color: "#fcd34d", textDecoration: "underline" }}>
          privacy policy
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <button
          onClick={() => choose("accepted")}
          style={{
            borderRadius: 999,
            background: "#fcd34d",
            color: "#0f172a",
            fontSize: 13,
            fontWeight: 700,
            padding: "8px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Accept
        </button>
        <button
          onClick={() => choose("declined")}
          style={{
            borderRadius: 999,
            background: "transparent",
            color: "#f1f5f9",
            fontSize: 13,
            fontWeight: 600,
            padding: "8px 20px",
            border: "1px solid rgba(255,255,255,0.25)",
            cursor: "pointer",
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
