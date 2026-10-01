import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Pension vs. Lump Sum: Which to Take | LoanPay Retire",
  description:
    "Pension annuity vs. lump sum: mortality credits, breakeven math, inflation, survivor options, company risk, and rollover rules.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/pension-vs-lump-sum",
  },
};

const CHECKLIST = [
  "Get both offers in writing: monthly annuity options (single, joint 50/75/100%) and the lump-sum figure.",
  "Compare the annuity's implied return: divide annual payments by the lump sum for a rough yield.",
  "Price the same income retail: what would this annuity cost from an insurer (a SPIA quote)?",
  "Check survivor needs: joint options cut payments 10–20% but protect the spouse for life.",
  "Assess the payer: federal pensions are safest; private plans rely on PBGC guarantees with caps.",
  "Lump sums roll to an IRA tax-free (direct rollover) — cashing out triggers tax plus possible penalties.",
];

export default function PensionPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Defined benefit &middot; annuity vs. lump sum
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Pension vs. Lump Sum
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Guaranteed checks for life or a lump sum you control? The breakeven math,
          survivor trade-offs, inflation angles, and rollover mechanics behind the choice.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Decision checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">The core trade: mortality credits vs. control</h2>
          <p className="mt-3">
            A pension annuity pools longevity risk: those who die early subsidize those who
            live long (mortality credits), letting insurers and pension plans pay lifetime
            yields no bond ladder replicates. A lump sum offers control — investing,
            bequests, Roth conversions, flexibility — but you bear market and longevity risk
            alone. Neither is universally superior: health, other guaranteed income
            (Social Security already annuitizes much of your spending), and legacy goals
            decide. A retiree with $40,000 of Social Security covering $55,000 of spending
            needs little extra annuitization; one with no Social Security bridge and high
            longevity may crave the checks. Our{" "}
            <Link href="/annuity-pros-cons" className="text-amber-200 underline underline-offset-2">
              annuity guide
            </Link>{" "}
            extends the comparison to retail products.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Pension annuity vs. lump sum at a glance.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Dimension</th>
                  <th className="px-4 py-3 font-semibold">Annuity</th>
                  <th className="px-4 py-3 font-semibold">Lump sum to IRA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Longevity</td><td className="px-4 py-2">Paid for life, any age</td><td className="px-4 py-2">May run out</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Inflation</td><td className="px-4 py-2">Usually fixed (erodes)</td><td className="px-4 py-2">Growth may offset</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Legacy</td><td className="px-4 py-2">Ends (or survivor %)</td><td className="px-4 py-2">Remainder to heirs</td></tr>
                <tr><td className="px-4 py-2">Flexibility</td><td className="px-4 py-2">Irrevocable</td><td className="px-4 py-2">Roth conversions, timing</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: $3,200 monthly vs. $480,000</h2>
          <p className="mt-3">
            James, 65, is offered $3,200 monthly single-life or a $480,000 lump sum.
            Annualized, the annuity pays $38,400 ÷ $480,000 = 8.0% — far above bond yields
            because it includes return OF principal plus mortality credits. Breakeven:
            $480,000 ÷ $38,400 = 12.5 years (age 77.5) ignoring growth; crediting the lump
            sum 5% yearly pushes breakeven toward 82–84. A retail SPIA quote for $480,000 at
            65 pays roughly $2,900–$3,100 monthly — the employer annuity at $3,200 looks
            fairly priced or better. But James&apos;s pension has no COLA: at 3% inflation
            the $3,200 buys only ~$2,370 by 75. With a healthy 60-year-old wife needing
            survivor protection, the joint-100% option (~$2,700) versus the lump sum&apos;s
            bequest value becomes the real debate — our{" "}
            <Link href="/beneficiaries-estate-basics" className="text-amber-200 underline underline-offset-2">
              estate basics guide
            </Link>{" "}
            covers the legacy side. Lump-sum investing follows our{" "}
            <Link href="/retirement-withdrawal-order-strategy" className="text-amber-200 underline underline-offset-2">
              withdrawal-order strategy
            </Link>
            . Quote comparisons illustrate only — never guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Company risk, taxes, and timing</h2>
          <p className="mt-3">
            Private pensions rest on plan funding plus Pension Benefit Guaranty Corporation
            backstops — capped (roughly $85,000+ yearly at 65, adjusted) and excluding
            certain benefits — so deeply underfunded plans deserve a haircut in your math.
            Federal and most state pensions carry negligible default risk. Tax-wise, direct
            lump-sum rollovers to an IRA are tax-free (see our{" "}
            <Link href="/ira-rollover-guide" className="text-amber-200 underline underline-offset-2">
              rollover guide
            </Link>
            ); taking cash triggers ordinary tax plus the 10% penalty under 59½. Timing
            matters: lump sums computed with IRS segment rates rise when rates fall and
            shrink when rates rise — 2022–2023 rate spikes cut many lump sums 15–25%,
            while easing rates restore them. Deferring commencement a year can also raise
            annuities actuarially. The IRA rules governing any rolled lump sum are detailed
            at{" "}
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
              <summary className="cursor-pointer font-semibold text-white">Can I take part annuity, part lump sum?</summary>
              <p className="mt-1">Many plans allow bifurcation — annuitize enough to cover essential spending, take the rest as a lump sum for flexibility and legacy. Ask for a split illustration; not all plans offer it.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How do survivor options change payments?</summary>
              <p className="mt-1">Joint-and-survivor options typically reduce payments 10–20% versus single life, with higher survivor percentages costing more. Spousal consent in writing is required to waive joint coverage.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do pensions get COLAs?</summary>
              <p className="mt-1">Federal (FERS/CSRS) and Social Security do; most private pensions do not. A fixed annuity loses roughly half its purchasing power in 24 years at 3% inflation — budget accordingly.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if my employer offers a buyout window?</summary>
              <p className="mt-1">Limited-time lump-sum windows use current segment rates — compare against the annuity&apos;s implied yield, get a retail SPIA quote, and never let the deadline rush underwriting you wouldn&apos;t otherwise accept.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Pension terms vary by plan;
            verify funding status and options with your administrator. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Pension vs. Lump Sum: Which to Take | LoanPay Retire", description: "Pension annuity vs. lump sum: mortality credits, breakeven math, inflation, survivor options, company risk, and rollover rules.", url: "https://retire.loanpaylogic.com/pension-vs-lump-sum" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Can I take part annuity, part lump sum?","answer":"Many plans allow bifurcation — annuitize enough to cover essential spending, take the rest as a lump sum for flexibility and legacy. Ask for a split illustration; not all plans offer it."},{"question":"How do survivor options change payments?","answer":"Joint-and-survivor options typically reduce payments 10–20% versus single life, with higher survivor percentages costing more. Spousal consent in writing is required to waive joint coverage."},{"question":"Do pensions get COLAs?","answer":"Federal (FERS/CSRS) and Social Security do; most private pensions do not. A fixed annuity loses roughly half its purchasing power in 24 years at 3% inflation — budget accordingly."},{"question":"What if my employer offers a buyout window?","answer":"Limited-time lump-sum windows use current segment rates — compare against the annuity's implied yield, get a retail SPIA quote, and never let the deadline rush underwriting you wouldn't otherwise accept."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Pension vs. Lump Sum: Which to Take | LoanPay Retire", url: "https://retire.loanpaylogic.com/pension-vs-lump-sum" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
