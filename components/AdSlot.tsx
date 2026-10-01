"use client";

import { useEffect, useRef } from "react";

type AdFormat = "display" | "in-article" | "multiplex" | "anchor";

interface AdSlotProps {
  format: AdFormat;
  /** AdSense ad unit ID. Owner: replace TODO-... placeholders with real IDs from AdSense UI. */
  slot: string;
  className?: string;
}

const AD_CLIENT = "ca-pub-4906207495792820";

const MIN_HEIGHT: Record<AdFormat, number> = {
  display: 280,
  "in-article": 250,
  multiplex: 280,
  anchor: 90,
};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

/**
 * Reusable AdSense slot. Renders <ins class="adsbygoogle"> and pushes to
 * window.adsbygoogle. Container keeps a min-height so CLS stays < 0.1.
 * In dev (NODE_ENV !== "production") a gray placeholder is rendered instead.
 */
export default function AdSlot({ format, slot, className = "" }: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (pushed.current) return;
    pushed.current = true;
    try {
      const declined =
        typeof window !== "undefined" &&
        window.localStorage.getItem("consent-choice") === "declined";
      if (declined) {
        (window.adsbygoogle = window.adsbygoogle || []).push({
          npa: 1,
        });
        return;
      }
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers may throw; never break the page.
    }
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        aria-hidden="true"
        className={className}
        style={{
          minHeight: MIN_HEIGHT[format],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          border: "1px dashed rgba(148,163,184,0.4)",
          background: "rgba(148,163,184,0.12)",
          color: "#94a3b8",
          fontSize: 12,
          margin: "1.5rem 0",
        }}
      >
        Ad placeholder · {format} · {slot}
      </div>
    );
  }

  if (format === "multiplex") {
    return (
      <div className={className} style={{ minHeight: MIN_HEIGHT[format], margin: "1.5rem 0" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={slot}
          data-ad-format="autorelaxed"
        />
      </div>
    );
  }

  if (format === "anchor") {
    return (
      <div className={className} style={{ minHeight: MIN_HEIGHT[format] }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={slot}
          data-ad-format="anchor"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  return (
    <div className={className} style={{ minHeight: MIN_HEIGHT[format], margin: "1.5rem 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
