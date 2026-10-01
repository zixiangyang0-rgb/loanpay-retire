import type { MetadataRoute } from "next";

const BASE = "https://retire.loanpaylogic.com";

const ROUTES: { url: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  // Cluster A — accounts
  { url: "/401k-contribution-limits-2026", priority: 0.9, changeFrequency: "monthly" },
  { url: "/roth-ira-income-limits-2026", priority: 0.9, changeFrequency: "monthly" },
  { url: "/roth-401k-vs-roth-ira", priority: 0.8, changeFrequency: "monthly" },
  { url: "/traditional-vs-roth-401k", priority: 0.8, changeFrequency: "monthly" },
  { url: "/catch-up-contributions-after-50", priority: 0.8, changeFrequency: "monthly" },
  { url: "/ira-rollover-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/backdoor-roth-ira-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/mega-backdoor-roth-explained", priority: 0.8, changeFrequency: "monthly" },
  { url: "/hsa-retirement-strategy", priority: 0.8, changeFrequency: "monthly" },
  { url: "/target-date-funds-explained", priority: 0.8, changeFrequency: "monthly" },
  // Cluster B — Social Security
  { url: "/when-to-take-social-security", priority: 0.9, changeFrequency: "monthly" },
  { url: "/social-security-taxation-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/cola-social-security-2026", priority: 0.8, changeFrequency: "monthly" },
  // Cluster C — withdrawals
  { url: "/rmd-rules-2026", priority: 0.9, changeFrequency: "monthly" },
  { url: "/rmd-calculator", priority: 0.9, changeFrequency: "monthly" },
  { url: "/how-much-do-i-need-to-retire", priority: 0.9, changeFrequency: "monthly" },
  { url: "/4-percent-rule-explained", priority: 0.8, changeFrequency: "monthly" },
  { url: "/retirement-withdrawal-order-strategy", priority: 0.8, changeFrequency: "monthly" },
  { url: "/early-withdrawal-penalty-59-half", priority: 0.8, changeFrequency: "monthly" },
  { url: "/rule-of-55-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/pension-vs-lump-sum", priority: 0.8, changeFrequency: "monthly" },
  { url: "/annuity-pros-cons", priority: 0.8, changeFrequency: "monthly" },
  // Cluster D — health & estate
  { url: "/healthcare-costs-in-retirement", priority: 0.8, changeFrequency: "monthly" },
  { url: "/medicare-premiums-2026-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/beneficiaries-estate-basics", priority: 0.8, changeFrequency: "monthly" },
  // Legal pages
  { url: "/about", priority: 0.5, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { url: "/privacy-policy", priority: 0.4, changeFrequency: "monthly" },
  { url: "/terms", priority: 0.4, changeFrequency: "monthly" },
  { url: "/disclaimer", priority: 0.4, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01");
  return ROUTES.map((route) => ({
    url: `${BASE}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
