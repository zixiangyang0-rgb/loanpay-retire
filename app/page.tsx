import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoanPay Retire | Retirement Planning Guides and Estimators",
  description:
    "Free educational retirement guides: 401(k) and IRA limits, Social Security timing and taxes, RMD rules, Medicare costs, and withdrawal strategies for 2026.",
};

type Card = { title: string; description: string; href: string; badge: string };
type Cluster = { id: string; heading: string; blurb: string; cards: Card[] };

const clusters: Cluster[] = [
  {
    id: "accounts",
    heading: "A · Retirement accounts",
    blurb: "401(k) and IRA limits, Roth choices, catch-ups, rollovers, and the HSA side door.",
    cards: [
      {
        title: "401(k) Contribution Limits 2026",
        description: "$24,500 plus $8,000 catch-ups ($11,250 at 60–63) — who gets what.",
        href: "/401k-contribution-limits-2026",
        badge: "Guide",
      },
      {
        title: "Roth IRA Income Limits 2026",
        description: "$153K–$168K single / $242K–$252K joint phase-outs and workarounds.",
        href: "/roth-ira-income-limits-2026",
        badge: "Guide",
      },
      {
        title: "Roth 401(k) vs. Roth IRA",
        description: "No-income-cap Roth at work versus the flexible account you own.",
        href: "/roth-401k-vs-roth-ira",
        badge: "Guide",
      },
      {
        title: "Traditional vs. Roth 401(k)",
        description: "Deduction now or tax-free later — the bracket math that decides.",
        href: "/traditional-vs-roth-401k",
        badge: "Guide",
      },
      {
        title: "Catch-Up Contributions After 50",
        description: "The 50+ bonus, the 60–63 super catch-up, and IRA extras.",
        href: "/catch-up-contributions-after-50",
        badge: "Guide",
      },
      {
        title: "IRA Rollover Guide",
        description: "Direct vs. indirect rollovers, the 60-day clock, and pro-rata traps.",
        href: "/ira-rollover-guide",
        badge: "Guide",
      },
      {
        title: "Backdoor Roth IRA Guide",
        description: "The legal high-income Roth path: steps, Form 8606, pro-rata rule.",
        href: "/backdoor-roth-ira-guide",
        badge: "Guide",
      },
      {
        title: "Mega Backdoor Roth Explained",
        description: "After-tax 401(k) + in-service withdrawals for very large Roth sums.",
        href: "/mega-backdoor-roth-explained",
        badge: "Guide",
      },
      {
        title: "HSA Retirement Strategy",
        description: "Triple tax advantage, investing the balance, and the shoebox method.",
        href: "/hsa-retirement-strategy",
        badge: "Guide",
      },
      {
        title: "Target-Date Funds Explained",
        description: "Glide paths, fees, and when the default fund is (and isn't) enough.",
        href: "/target-date-funds-explained",
        badge: "Guide",
      },
    ],
  },
  {
    id: "social-security",
    heading: "B · Social Security",
    blurb: "When to claim, how benefits are taxed, and what the 2026 COLA means.",
    cards: [
      {
        title: "When to Take Social Security",
        description: "62 vs. 67 vs. 70 with break-even math and spousal angles.",
        href: "/when-to-take-social-security",
        badge: "Guide",
      },
      {
        title: "Social Security Taxation Guide",
        description: "The 0% / 50% / 85% inclusion tiers and how to shrink them.",
        href: "/social-security-taxation-guide",
        badge: "Guide",
      },
      {
        title: "COLA & Social Security 2026",
        description: "The 2.8% cost-of-living adjustment, earnings test, and wage base.",
        href: "/cola-social-security-2026",
        badge: "Guide",
      },
    ],
  },
  {
    id: "withdrawals",
    heading: "C · Withdrawals & income",
    blurb: "RMDs, safe spending, withdrawal order, early-access rules, and guaranteed income.",
    cards: [
      {
        title: "RMD Rules 2026",
        description: "Age 73 vs. 75 under SECURE 2.0, deadlines, and the 25% penalty.",
        href: "/rmd-rules-2026",
        badge: "Guide",
      },
      {
        title: "RMD Calculator",
        description: "Estimate this year's required withdrawal from any balance.",
        href: "/rmd-calculator",
        badge: "Calculator",
      },
      {
        title: "How Much Do I Need to Retire?",
        description: "Replacement ratios, the 25x shortcut, and a worked example.",
        href: "/how-much-do-i-need-to-retire",
        badge: "Guide",
      },
      {
        title: "The 4% Rule Explained",
        description: "Where 4% came from, what it misses, and flexible alternatives.",
        href: "/4-percent-rule-explained",
        badge: "Guide",
      },
      {
        title: "Retirement Withdrawal Order Strategy",
        description: "Taxable, traditional, Roth: the sequence that cuts lifetime tax.",
        href: "/retirement-withdrawal-order-strategy",
        badge: "Guide",
      },
      {
        title: "Early Withdrawal Penalty: 59½",
        description: "The 10% penalty, its many exceptions, and SEPP lifelines.",
        href: "/early-withdrawal-penalty-59-half",
        badge: "Guide",
      },
      {
        title: "Rule of 55 Guide",
        description: "Leave at 55+ and tap that employer's 401(k) penalty-free.",
        href: "/rule-of-55-guide",
        badge: "Guide",
      },
      {
        title: "Pension vs. Lump Sum",
        description: "Annuity checks for life or a lump sum you invest — compared.",
        href: "/pension-vs-lump-sum",
        badge: "Guide",
      },
      {
        title: "Annuity Pros & Cons",
        description: "SPIAs, DIAs, and variable annuities: costs vs. guarantees.",
        href: "/annuity-pros-cons",
        badge: "Guide",
      },
    ],
  },
  {
    id: "health-estate",
    heading: "D · Health & estate",
    blurb: "Medical costs, 2026 Medicare premiums, and beneficiary essentials.",
    cards: [
      {
        title: "Healthcare Costs in Retirement",
        description: "What a 65-year-old couple may spend — and how to plan for it.",
        href: "/healthcare-costs-in-retirement",
        badge: "Guide",
      },
      {
        title: "Medicare Premiums 2026 Guide",
        description: "Part B at $202.90, Part D, IRMAA tiers, and enrollment timing.",
        href: "/medicare-premiums-2026-guide",
        badge: "Guide",
      },
      {
        title: "Beneficiaries & Estate Basics",
        description: "Beneficiary forms beat wills, the 10-year rule, and TOD deeds.",
        href: "/beneficiaries-estate-basics",
        badge: "Guide",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-14 text-center sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          retire.loanpaylogic.com
        </p>
        <h1 className="hero-title mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          Retirement Planning in Plain English
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          LoanPay Retire turns confusing US retirement rules into short, friendly guides with
          real 2026 numbers. Compare accounts, time Social Security, master RMDs, budget for
          Medicare, and sequence withdrawals — no signup required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/401k-contribution-limits-2026"
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            Start with 2026 limits
          </Link>
          <Link
            href="/when-to-take-social-security"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30"
          >
            Time your Social Security
          </Link>
        </div>
      </section>

      {clusters.map((cluster) => (
        <section key={cluster.id} className="mt-12">
          <h2 className="text-2xl font-bold">{cluster.heading}</h2>
          <p className="mt-2 text-sm text-slate-400">{cluster.blurb}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cluster.cards.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="glass-card block rounded-2xl p-6 transition hover:border-amber-200/30"
              >
                <span className="inline-block rounded-full border border-amber-200/30 px-3 py-1 text-xs font-medium text-amber-200">
                  {tool.badge}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="glass-card mt-12 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Why plan withdrawals before you retire?</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Contribution limits, Social Security timing, required minimum distributions, Medicare
          premium tiers, and the order you tap taxable, traditional, and Roth accounts all
          interact in ways a single account balance cannot show. Reading the 2026 limits,
          working through a withdrawal sequence, and stress-testing spending against market
          downturns helps you bring better questions to a qualified fiduciary adviser — and
          avoid penalties like the 25% RMD excise tax or needless IRMAA surcharges. The
          guides on retire.loanpaylogic.com explain each input in plain language so the
          trade-offs are visible before you commit.
        </p>
        <p className="mt-4 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
          Disclaimer: everything on this site is general education, not financial advice.
          Retirement rules change often and vary by personal situation. Confirm important
          decisions with a licensed professional. Read our full{" "}
          <Link href="/disclaimer" className="underline underline-offset-2">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
