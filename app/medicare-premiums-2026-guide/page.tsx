import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Medicare Premiums 2026 Guide (Part B, D & IRMAA) | LoanPay Retire",
  description:
    "2026 Medicare costs: Part B $202.90, Part D, IRMAA surcharge tiers, enrollment windows, late penalties, and Medigap vs. Advantage.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/medicare-premiums-2026-guide",
  },
};

const CHECKLIST = [
  "Part B 2026: $202.90/month standard premium, $283 annual deductible, then 20% coinsurance.",
  "Part A: premium-free for most (10 years of Medicare taxes); hospital deductible $1,736 per benefit period.",
  "IRMAA surcharges stack on Part B and D above ~$109,000 single / $218,000 joint (2026, based on 2024 MAGI).",
  "Enroll in the 7-month initial window around 65 — late Part B penalties last forever (+10% per year late).",
  "Part D out-of-pocket cap is $2,100 in 2026; compare drug plans every open enrollment.",
  "Still working with large-group coverage at 65? You may delay B and D penalty-free — get it in writing.",
];

export default function MedicarePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Medicare 2026 &middot; $202.90 &middot; IRMAA
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Medicare Premiums 2026 Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Every 2026 Medicare price tag — Parts A, B, D, IRMAA tiers — plus enrollment
          timing that avoids lifetime penalties and the Medigap vs. Advantage fork.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">2026 costs checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Parts A, B, and D in 2026 dollars</h2>
          <p className="mt-3">
            Part B — doctor visits, outpatient care, labs — costs the standard $202.90
            monthly in 2026 (about $2,435 yearly), with a $283 annual deductible and
            typically 20% coinsurance after. Part A hospital insurance is premium-free
            after 40 quarters of Medicare-taxed work; without enough quarters it costs
            $311 or $565 monthly, and each hospital benefit period carries a $1,736
            deductible. Part D drug plans vary by insurer but share a $2,100 annual
            out-of-pocket cap in 2026 — a meaningful ceiling for specialty-drug users.
            High earners pay IRMAA surcharges on Parts B and D driven by MAGI from two
            years prior: 2026 premiums key off 2024 returns, so a big 2024 Roth conversion
            echoes here (see our{" "}
            <Link href="/retirement-withdrawal-order-strategy" className="text-amber-200 underline underline-offset-2">
              withdrawal-order strategy
            </Link>
            ).
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Core 2026 Medicare costs (CMS/Medicare.gov).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Part</th>
                  <th className="px-4 py-3 font-semibold">2026 cost</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">A (hospital)</td><td className="px-4 py-2">$0 premium (most); $1,736 deductible</td><td className="px-4 py-2">Per benefit period</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">B (medical)</td><td className="px-4 py-2">$202.90/mo; $283 deductible</td><td className="px-4 py-2">+20% coinsurance</td></tr>
                <tr><td className="px-4 py-2">D (drugs)</td><td className="px-4 py-2">Varies; $2,100 OOP cap</td><td className="px-4 py-2">IRMAA adds for high earners</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $40,000 conversion that cost $3,000</h2>
          <p className="mt-3">
            George, single, converts $40,000 to Roth in 2024, lifting 2024 MAGI to $115,000
            — just over the first IRMAA threshold (~$109,000). In 2026 he pays roughly
            $80+ extra monthly on Part B plus ~$13 on Part D, about $1,100+ for the year,
            and his wife&apos;s household math doubles it on a joint return crossing
            ~$218,000. Had George converted $30,000 instead, MAGI would have stayed under
            the cliff and 2026 premiums untouched — same Roth progress, ~$1,100+ saved.
            IRMAA appeal (Form SSA-44) works for life-changing events — retirement,
            divorce, death of a spouse — but not for voluntary conversions. December
            conversions deserve a two-year lookahead: model MAGI against IRMAA bands the
            way pilots check fuel. Our{" "}
            <Link href="/social-security-taxation-guide" className="text-amber-200 underline underline-offset-2">
              Social Security taxation guide
            </Link>{" "}
            shows the parallel tier trap. Premiums are set by CMS yearly — never
            guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Enrollment windows and the Medigap fork</h2>
          <p className="mt-3">
            The initial enrollment period spans seven months (three before, the month of,
            three after your 65th birthday month); missing it without creditable employer
            coverage triggers lifetime Part B penalties (+10% per 12-month delay) and Part
            D penalties (+1% of the base premium per month late). Still employed with
            20+employee group coverage? A special enrollment period lets you delay B and D
            penalty-free — but COBRA and retiree coverage do not count, a classic trap, and
            HSA contributions must stop at Medicare enrollment (see our{" "}
            <Link href="/hsa-retirement-strategy" className="text-amber-200 underline underline-offset-2">
              HSA strategy
            </Link>
            ). Then choose your wrapper: Medigap (predictable, nationwide, higher premiums;
            Plan G is the popular comprehensive pick) or Medicare Advantage (low/zero
            premiums, bundled drugs/dental, but networks and prior authorizations). The
            IRA contribution rules around working-longer households are mapped at{" "}
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
              <summary className="cursor-pointer font-semibold text-white">Are Medicare premiums deducted from Social Security?</summary>
              <p className="mt-1">Usually yes — Part B (and D, if elected) is withheld from monthly Social Security checks automatically. The hold-harmless rule caps most enrollees&apos; Part B increases at their COLA amount.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can IRMAA be appealed?</summary>
              <p className="mt-1">Yes, for life-changing events (work stoppage, marriage, divorce, death, pension loss) via Form SSA-44 with documentation. Income drops from market losses or one-time gains generally do not qualify.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should high earners still do Roth conversions?</summary>
              <p className="mt-1">Often yes — compare one or two years of IRMAA surcharges against decades of tax-free growth and smaller RMDs. Just price the surcharge into the decision instead of discovering it later.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What doesn&apos;t Medicare cover?</summary>
              <p className="mt-1">Routine dental, vision, hearing aids, most long-term custodial care, and care outside the US (except narrow exceptions). Budget these separately — see our healthcare costs guide.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not insurance or financial advice. Confirm 2026
            figures at Medicare.gov. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Medicare Premiums 2026 Guide (Part B, D & IRMAA) | LoanPay Retire", description: "2026 Medicare costs: Part B $202.90, Part D, IRMAA surcharge tiers, enrollment windows, late penalties, and Medigap vs. Advantage.", url: "https://retire.loanpaylogic.com/medicare-premiums-2026-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Are Medicare premiums deducted from Social Security?","answer":"Usually yes — Part B (and D, if elected) is withheld from monthly Social Security checks automatically. The hold-harmless rule caps most enrollees' Part B increases at their COLA amount."},{"question":"Can IRMAA be appealed?","answer":"Yes, for life-changing events (work stoppage, marriage, divorce, death, pension loss) via Form SSA-44 with documentation. Income drops from market losses or one-time gains generally do not qualify."},{"question":"Should high earners still do Roth conversions?","answer":"Often yes — compare one or two years of IRMAA surcharges against decades of tax-free growth and smaller RMDs. Just price the surcharge into the decision instead of discovering it later."},{"question":"What doesn't Medicare cover?","answer":"Routine dental, vision, hearing aids, most long-term custodial care, and care outside the US (except narrow exceptions). Budget these separately — see our healthcare costs guide."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Medicare Premiums 2026 Guide (Part B, D & IRMAA) | LoanPay Retire", url: "https://retire.loanpaylogic.com/medicare-premiums-2026-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
