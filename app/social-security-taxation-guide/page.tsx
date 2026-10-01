import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Social Security Taxation Guide: 0%, 50%, 85% | LoanPay Retire",
  description:
    "How Social Security is taxed: provisional-income tiers, the 0/50/85% inclusion rules, state treatment, and strategies to pay less.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/social-security-taxation-guide",
  },
};

const CHECKLIST = [
  "Provisional income = AGI + tax-exempt interest + half your Social Security benefit.",
  "Single: under $25,000 → 0% taxable; $25,000–$34,000 → up to 50%; above $34,000 → up to 85%.",
  "Joint: under $32,000 → 0%; $32,000–$44,000 → up to 50%; above $44,000 → up to 85%.",
  "At most 85% of benefits are ever taxable — never 100% — and thresholds are NOT inflation-indexed.",
  "Roth withdrawals and HSA qualified distributions don't raise provisional income; traditional withdrawals and RMDs do.",
  "Most states exempt Social Security entirely; about 10 still tax it with their own formulas.",
];

export default function SSTaxPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Taxes &middot; provisional income tiers
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Social Security Taxation Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Up to 85% of your benefit can land on your tax return — or none of it. How the
          tiers work, why they creep every year, and the withdrawal sequencing that keeps
          you in the 0% zone.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Taxation checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Provisional income: the only formula that matters</h2>
          <p className="mt-3">
            The IRS taxes Social Security through &ldquo;provisional income&rdquo;: adjusted
            gross income plus tax-exempt interest plus one-half of your Social Security
            benefit. Compare it to fixed thresholds Congress set in 1983 and 1993 and has
            never indexed: $25,000/$32,000 (single/joint) for the 50% tier and
            $34,000/$44,000 for the 85% tier. Below the first line, benefits escape federal
            tax entirely; between the lines, up to 50% becomes taxable; above the second,
            up to 85% joins taxable income (taxed at your ordinary marginal rate, not at 85%
            as a rate). Because the lines never move while COLAs lift benefits yearly — the
            2026 COLA is 2.8% — retirees drift into taxation automatically; see our{" "}
            <Link href="/cola-social-security-2026" className="text-amber-200 underline underline-offset-2">
              COLA guide
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                How much of your benefit becomes taxable (federal).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Provisional income</th>
                  <th className="px-4 py-3 font-semibold">Single</th>
                  <th className="px-4 py-3 font-semibold">Joint</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Base tier</td><td className="px-4 py-2">Under $25,000 → 0%</td><td className="px-4 py-2">Under $32,000 → 0%</td></tr>
                <tr className="border-b border-white/5"><td className = "px-4 py-2">Middle tier</td><td className="px-4 py-2">$25,000–$34,000 → up to 50%</td><td className="px-4 py-2">$32,000–$44,000 → up to 50%</td></tr>
                <tr><td className="px-4 py-2">Top tier</td><td className="px-4 py-2">Over $34,000 → up to 85%</td><td className="px-4 py-2">Over $44,000 → up to 85%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $8,000 RMD that costs $1,760</h2>
          <p className="mt-3">
            Helen, single, receives $24,000 in Social Security and $18,000 from a small
            pension: provisional income is $18,000 + $12,000 = $30,000 — middle tier, so a
            modest slice of benefits is taxable. Then her first RMD of $8,000 lands (see our{" "}
            <Link href="/rmd-rules-2026" className="text-amber-200 underline underline-offset-2">
              RMD rules
            </Link>
            ): provisional income jumps to $38,000, vaulting her into the 85% tier. That
            $8,000 withdrawal is itself taxed at 22% ($1,760) and simultaneously drags roughly
            $6,800 more of her Social Security into taxable income — a second ~$1,500 tax
            ghost. Total damage near $3,260 from an $8,000 distribution: a 40%+ shadow rate.
            Had Helen drawn the $8,000 from Roth instead, provisional income would not have
            budged. This torpedo effect is why our{" "}
            <Link href="/retirement-withdrawal-order-strategy" className="text-amber-200 underline underline-offset-2">
              withdrawal-order strategy
            </Link>{" "}
            front-loads Roth conversions in the low-income years before Social Security and
            RMDs begin.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Levers that actually lower the tax</h2>
          <p className="mt-3">
            Qualified charitable distributions (QCDs) after 70½ satisfy RMDs without touching
            AGI — the single most elegant lever for charitably inclined retirees. Roth
            conversions before claiming reshape future RMDs downward. Delaying Social
            Security while living on Roth or taxable-account dollars compresses the years of
            overlap. Municipal-bond interest, often assumed helpful, actually counts in
            provisional income — a classic trap. State treatment varies: most states exempt
            benefits fully, while a handful (including Colorado, Connecticut, Kansas,
            Minnesota, Missouri, Montana, Nebraska, New Mexico, Rhode Island, Utah, Vermont,
            and West Virginia with differing phase-outs) tax some portion — verify yours
            yearly as legislatures keep trimming these lists. Withholding is voluntary via
            Form W-4V (7%, 10%, 12%, or 22%), and quarterly estimates avoid underpayment
            penalties when benefits surprise you. The IRA mechanics behind conversions are
            detailed at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . All illustrations are hypothetical, never guarantees.
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is the 85% a tax rate?</summary>
              <p className="mt-1">No — it is the share of benefits added to taxable income. That slice is then taxed at your ordinary marginal rate (10–37%), so the effective bite on benefits is always well under 85%.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do Roth conversions raise benefit taxes?</summary>
              <p className="mt-1">In the conversion year, yes — converted dollars lift AGI and provisional income. The payoff is smaller RMDs later, which can permanently drop you a tier. Model multi-year, not single-year.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Are lump-sum back payments taxed punitively?</summary>
              <p className="mt-1">You may elect to attribute a lump sum to the earlier years it covers (the Social Security lump-sum election), often cutting the tax versus recognizing it all at once. The SSA notice explains the worksheet.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does working in retirement change benefit taxation?</summary>
              <p className="mt-1">Wages raise provisional income directly, so part-time work can tip benefits into taxable tiers — coordinate earnings with the earnings test and your claiming age.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax or financial advice. Confirm thresholds in IRS
            Publication 915 and SSA guidance. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Social Security Taxation Guide: 0%, 50%, 85% | LoanPay Retire", description: "How Social Security is taxed: provisional-income tiers, the 0/50/85% inclusion rules, state treatment, and strategies to pay less.", url: "https://retire.loanpaylogic.com/social-security-taxation-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Is the 85% a tax rate?","answer":"No — it is the share of benefits added to taxable income. That slice is then taxed at your ordinary marginal rate (10–37%), so the effective bite on benefits is always well under 85%."},{"question":"Do Roth conversions raise benefit taxes?","answer":"In the conversion year, yes — converted dollars lift AGI and provisional income. The payoff is smaller RMDs later, which can permanently drop you a tier. Model multi-year, not single-year."},{"question":"Are lump-sum back payments taxed punitively?","answer":"You may elect to attribute a lump sum to the earlier years it covers (the Social Security lump-sum election), often cutting the tax versus recognizing it all at once. The SSA notice explains the worksheet."},{"question":"Does working in retirement change benefit taxation?","answer":"Wages raise provisional income directly, so part-time work can tip benefits into taxable tiers — coordinate earnings with the earnings test and your claiming age."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Social Security Taxation Guide: 0%, 50%, 85% | LoanPay Retire", url: "https://retire.loanpaylogic.com/social-security-taxation-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
