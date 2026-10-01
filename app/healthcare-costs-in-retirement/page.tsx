import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Healthcare Costs in Retirement: 2026 Planning | LoanPay Retire",
  description:
    "Budget health costs in retirement: lifetime estimates, Medicare gaps, dental/vision, long-term care odds, and HSA funding.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/healthcare-costs-in-retirement",
  },
};

const CHECKLIST = [
  "Fidelity estimates ~$300,000+ lifetime medical costs for a 65-year-old couple — excluding long-term care.",
  "Medicare covers roughly two-thirds of costs; premiums, deductibles, dental, vision, and hearing are on you.",
  "Long-term care is the tail risk: ~70% of 65-year-olds need some care; nursing homes run $100,000+/year.",
  "Bridge years before 65 are priciest — ACA marketplace or COBRA until Medicare eligibility.",
  "Budget health inflation near 5–6% yearly, roughly double general inflation.",
  "Fund an HSA while working — it is the only triple-tax-advantaged medical reserve.",
];

export default function HealthCostsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Medical budgets &middot; ~$300K+ &middot; LTC risk
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Healthcare Costs in Retirement
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The budget line retirees underestimate most: what lifetime medical spending
          looks like, what Medicare does not cover, and how to insure the long-term-care
          tail.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Budgeting checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Where the $300,000+ goes</h2>
          <p className="mt-3">
            Fidelity&apos;s annual retiree-health estimate — recently about $315,000 for a
            65-year-old couple — covers Medicare premiums, copays, deductibles, and
            prescriptions over a ~25-year retirement. Premiums alone bite: Part B runs
            $202.90 monthly per person in 2026 ($4,870 yearly per couple) plus Part D,
            Medigap or Medicare Advantage costs, and the $283 Part B deductible — details
            in our{" "}
            <Link href="/medicare-premiums-2026-guide" className="text-amber-200 underline underline-offset-2">
              Medicare premiums guide
            </Link>
            . Original Medicare excludes routine dental, vision, hearing aids, and most
            overseas care — a couple should pencil $2,000–$4,000 yearly for those.
            Prescription exposure concentrates in specialty tiers until catastrophic
            thresholds, and the $2,100 Part D out-of-pocket cap (2026) now bounds the
            worst cases.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Annual health budget sketch, 65-year-old couple (illustrative 2026).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Line item</th>
                  <th className="px-4 py-3 font-semibold">Per couple / year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Part B premiums (2 × $202.90)</td><td className="px-4 py-2">~$4,870</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Part D + Medigap/Advantage</td><td className="px-4 py-2">~$4,000–$7,000</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Dental, vision, hearing, OTC</td><td className="px-4 py-2">~$2,000–$4,000</td></tr>
                <tr><td className="px-4 py-2">Deductibles, copays, drugs</td><td className="px-4 py-2">~$2,000–$5,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $13,000–$21,000 yearly line</h2>
          <p className="mt-3">
            Bill and Ana, both 67, total $13,000–$21,000 in yearly health spending from the
            table above on a $90,000 retirement income — 14–23% of their budget, before any
            long-term care. Growing at 5.5% health inflation, today&apos;s $16,000 midpoint
            becomes ~$27,000 by age 80 and ~$35,000 by 85. Their defenses: Ana&apos;s former
            employer HSA with $90,000 invested (see our{" "}
            <Link href="/hsa-retirement-strategy" className="text-amber-200 underline underline-offset-2">
              HSA strategy
            </Link>
            ) reimburses premiums and medical costs tax-free; they chose Medigap Plan G for
            predictable hospital coverage; and they price long-term-care insurance at 60
            rather than hoping. Had they retired at 60 instead, five bridge years of ACA
            coverage at $12,000–$18,000 yearly (pre-subsidy) would add $60,000–$90,000
            before Medicare — early retirees must budget the bridge explicitly. Figures are
            illustrations, never guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Long-term care: insure, self-insure, or hybrid</h2>
          <p className="mt-3">
            Roughly 70% of 65-year-olds will need some long-term care, averaging about
            three years (women longer), with private nursing-home rooms exceeding $100,000
            yearly and home aides $30+/hour. Medicare covers only short skilled-nursing
            stays — not custodial care — and Medicaid requires spending down to
            near-poverty (with five-year lookbacks on transfers). Options: traditional
            LTC insurance (use-it-or-lose-it, but pure coverage is cheapest per dollar;
            buy in your mid-50s before underwriting hardens), hybrid life+LTC policies
            (costlier, return premiums if care is unneeded), or deliberate self-insurance
            by earmarking $250,000–$400,000 of the portfolio. Short-term-care policies
            cover the first year cheaply as a middle path. State partnership programs let
            buyers shield assets from Medicaid equal to benefits paid — check whether your
            state participates. The IRA funding mechanics behind earmarked reserves are at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            .
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does Medicare cover long-term care?</summary>
              <p className="mt-1">Only briefly — up to 100 days of skilled nursing after a 3-day hospital stay, with copays from day 21. Custodial nursing-home or home-aide care for daily living is excluded.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How do I cover health insurance before 65?</summary>
              <p className="mt-1">ACA marketplace plans (subsidies key off MAGI — Roth ladders and low-income years help), COBRA for 18 months (expensive, full premium + 2%), or a working spouse&apos;s plan.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Are HSAs really better than 401(k)s for medical costs?</summary>
              <p className="mt-1">For earmarked medical dollars, yes — deductible in, tax-free out beats any 401(k) path. Fund the 401(k) match first, then the HSA, then max the 401(k).</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should I buy Medigap or Medicare Advantage?</summary>
              <p className="mt-1">Medigap costs more monthly but offers nationwide, predictable coverage — best for travelers and the chronically ill. Advantage plans bundle extras cheaply but constrain networks. Compare during open enrollment yearly.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not insurance or financial advice. Verify premiums
            and coverage at Medicare.gov. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Healthcare Costs in Retirement: 2026 Planning | LoanPay Retire", description: "Budget health costs in retirement: lifetime estimates, Medicare gaps, dental/vision, long-term care odds, and HSA funding.", url: "https://retire.loanpaylogic.com/healthcare-costs-in-retirement" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Does Medicare cover long-term care?","answer":"Only briefly — up to 100 days of skilled nursing after a 3-day hospital stay, with copays from day 21. Custodial nursing-home or home-aide care for daily living is excluded."},{"question":"How do I cover health insurance before 65?","answer":"ACA marketplace plans (subsidies key off MAGI — Roth ladders and low-income years help), COBRA for 18 months (expensive, full premium + 2%), or a working spouse's plan."},{"question":"Are HSAs really better than 401(k)s for medical costs?","answer":"For earmarked medical dollars, yes — deductible in, tax-free out beats any 401(k) path. Fund the 401(k) match first, then the HSA, then max the 401(k)."},{"question":"Should I buy Medigap or Medicare Advantage?","answer":"Medigap costs more monthly but offers nationwide, predictable coverage — best for travelers and the chronically ill. Advantage plans bundle extras cheaply but constrain networks. Compare during open enrollment yearly."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Healthcare Costs in Retirement: 2026 Planning | LoanPay Retire", url: "https://retire.loanpaylogic.com/healthcare-costs-in-retirement" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
