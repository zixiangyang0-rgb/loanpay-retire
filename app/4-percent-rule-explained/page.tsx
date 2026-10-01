import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "The 4% Rule Explained (and Its Limits) | LoanPay Retire",
  description:
    "The 4% rule: Bengen's research, inflation adjustments, sequence risk, fees, longevity, and flexible alternatives like guardrails.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/4-percent-rule-explained",
  },
};

const CHECKLIST = [
  "The 4% rule: withdraw 4% in year one, then adjust that dollar amount for inflation yearly — designed to last 30 years.",
  "Comes from Bill Bengen's 1994 study of 50/50 US portfolios across historical retirements, including the Great Depression.",
  "4% is the worst-case survivor, not the average — most historical retirees could have spent 5–7%.",
  "Cracks: long retirements (40+ years), high fees, low bond yields, taxes, and retiring into overvalued markets.",
  "Sequence-of-returns risk matters more than average returns — early crashes hurt most.",
  "Flexible methods (guardrails, Kitces ratcheting, RMD-based) let spending breathe with markets.",
];

export default function FourPercentPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Spending rules &middot; Bengen &middot; guardrails
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          The 4% Rule Explained
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The most quoted spending rule in retirement — what it actually says, where the
          research bends, and the flexible systems modern planners prefer.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Core ideas checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">What Bengen actually found</h2>
          <p className="mt-3">
            In 1994, adviser Bill Bengen tested withdrawal rates against every US retirement
            cohort from 1926 onward using intermediate Treasuries and large-cap stocks. A
            4.15% initial withdrawal (rounded to 4%), inflation-adjusted yearly, survived
            every 30-year window — including 1929 and 1966 retirees. Later Trinity-study
            work confirmed near-perfect 30-year success around 4% for 50/50 portfolios.
            Crucially, 4% was the floor that survived the worst history offered, not the
            average affordable rate: median retirees died with multiples of their starting
            balance. Bengen later nudged his own figure toward 4.5–4.7% with small-cap and
            international diversification — a reminder the &ldquo;rule&rdquo; is a research
            finding with assumptions, not legislation.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Year-one spending on a $1M portfolio under common rules (illustrative).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Method</th>
                  <th className="px-4 py-3 font-semibold">Year-one spend</th>
                  <th className="px-4 py-3 font-semibold">Character</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Classic 4%</td><td className="px-4 py-2">$40,000 + inflation</td><td className="px-4 py-2">Rigid, worst-case safe</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Bengen 4.5%</td><td className="px-4 py-2">$45,000 + inflation</td><td className="px-4 py-2">Diversified portfolios</td></tr>
                <tr><td className="px-4 py-2">Guardrails (~5%)</td><td className="px-4 py-2">~$50,000 flexible</td><td className="px-4 py-2">Adjusts with markets</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: 1966 vs. 1982 retirees</h2>
          <p className="mt-3">
            Two neighbors each retire with $1,000,000 and withdraw $40,000 inflation-adjusted
            yearly. The 1966 retiree faces stagflation and flat stocks — by the early 1980s
            the portfolio is badly wounded, barely crawling to year 30. The 1982 retiree
            rides the great bull market and ends with several million despite identical
            spending. Same rule, opposite fortunes: sequence of returns dominates. This is
            why rigid inflation adjustments feel punishing in crashes — no sane household
            keeps raising spending while its portfolio falls 30%. Flexible systems formalize
            common sense: Guyton-Klinger guardrails trim spending ~10% when withdrawal rates
            breach upper bands and raise it when markets run hot, while Kitces&apos;
            ratcheting lets retirees grant themselves raises after strong early years. Pair
            any method with our{" "}
            <Link href="/retirement-withdrawal-order-strategy" className="text-amber-200 underline underline-offset-2">
              withdrawal-order strategy
            </Link>{" "}
            so the dollars you do spend come from the lowest-tax source — the 4% rule
            ignores taxes entirely, and traditional withdrawals can make a $40,000
            &ldquo;spend&rdquo; cost $48,000+ pre-tax.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Where 4% bends and what to use instead</h2>
          <p className="mt-3">
            Forty-year retirements (early retirees), 1% advisory-plus-fund fees, and today's
            equity valuations all argue for caution — researchers like Morningstar have
            floated 3.3–3.7% for fee-laden 30-year plans in low-yield eras, while others
            counter that flexible spending restores 5%+. Longevity cuts both ways: a 65-year
            couple has roughly coin-flip odds one spouse reaches 90, so 30-year horizons
            understate joint lives. Practical upgrades: hold 1–2 years of spending in cash
            to avoid selling in crashes, delay Social Security to 70 as a backstop annuity
            (see our{" "}
            <Link href="/when-to-take-social-security" className="text-amber-200 underline underline-offset-2">
              claiming guide
            </Link>
            ), and revisit the rate every few years rather than autopiloting from day one.
            For the account mechanics funding any spending plan, the IRA landscape is mapped
            at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . Historical success rates describe the past and never guarantee future results.
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does 4% include fees and taxes?</summary>
              <p className="mt-1">No — Bengen&apos;s 4% is gross portfolio withdrawal. A 1% advisory fee plus taxes means only ~2.5–3% reaches your checking account. Budget fees and taxes inside the 4%, not on top.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What asset mix does 4% assume?</summary>
              <p className="mt-1">Roughly 50–75% stocks. Very conservative portfolios (mostly bonds/cash) historically failed 4% more often — growth assets fund multi-decade inflation adjustments.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should early retirees use 4%?</summary>
              <p className="mt-1">Cautiously — 40–50 year horizons historically needed ~3.25–3.5% rigid, or 4%+ with guardrail flexibility and part-time income. Healthcare before Medicare at 65 is a separate budget line.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How often should I revisit my rate?</summary>
              <p className="mt-1">Annually or after ±20% portfolio moves. Ratchet up after strong years, trim after poor ones, and recheck taxes, RMDs, and IRMAA each December.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Spending rules are historical
            research, not guarantees of future performance. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "The 4% Rule Explained (and Its Limits) | LoanPay Retire", description: "The 4% rule: Bengen's research, inflation adjustments, sequence risk, fees, longevity, and flexible alternatives like guardrails.", url: "https://retire.loanpaylogic.com/4-percent-rule-explained" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Does 4% include fees and taxes?","answer":"No — Bengen's 4% is gross portfolio withdrawal. A 1% advisory fee plus taxes means only ~2.5–3% reaches your checking account. Budget fees and taxes inside the 4%, not on top."},{"question":"What asset mix does 4% assume?","answer":"Roughly 50–75% stocks. Very conservative portfolios (mostly bonds/cash) historically failed 4% more often — growth assets fund multi-decade inflation adjustments."},{"question":"Should early retirees use 4%?","answer":"Cautiously — 40–50 year horizons historically needed ~3.25–3.5% rigid, or 4%+ with guardrail flexibility and part-time income. Healthcare before Medicare at 65 is a separate budget line."},{"question":"How often should I revisit my rate?","answer":"Annually or after ±20% portfolio moves. Ratchet up after strong years, trim after poor ones, and recheck taxes, RMDs, and IRMAA each December."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "The 4% Rule Explained (and Its Limits) | LoanPay Retire", url: "https://retire.loanpaylogic.com/4-percent-rule-explained" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
