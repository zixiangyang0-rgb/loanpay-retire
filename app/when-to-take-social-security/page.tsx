import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "When to Take Social Security: 62 vs. 67 vs. 70 | LoanPay Retire",
  description:
    "Claim at 62, full retirement age, or 70? Benefit math, break-even ages, spousal and survivor angles, and working-while-claiming rules.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/when-to-take-social-security",
  },
};

const CHECKLIST = [
  "Full retirement age (FRA) is 67 for anyone born 1960 or later; 66 plus months for 1943–1959 births.",
  "Claiming at 62 cuts benefits up to 30% for life; waiting to 70 grows them about 8% per year past FRA.",
  "The lifetime break-even between 62 and 70 usually lands near age 78–82 — health and longevity dominate.",
  "Survivor benefits max out at the deceased's FRA amount; delaying protects the surviving spouse most.",
  "Claiming before FRA while working triggers the earnings test ($23,400 in 2025; SSA updates yearly).",
  "Coordinate with taxes: low-income years before RMDs are prime Roth-conversion windows.",
];

export default function WhenToTakeSSPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Social Security &middot; 62 / 67 / 70
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          When to Take Social Security
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The most consequential retirement decision for most households: how claiming age,
          health, work plans, and spousal benefits combine into a claiming strategy.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Claiming-age checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">How the benefit formula moves with age</h2>
          <p className="mt-3">
            Your primary insurance amount (PIA) — the benefit at full retirement age — derives
            from your 35 highest-earning years, indexed for wage growth. Claim early and SSA
            applies a reduction of 5/9 of 1% per month for the first 36 months before FRA plus
            5/12 of 1% for earlier months: at FRA 67, claiming at 62 means a 30% haircut that
            lasts for life (with cost-of-living adjustments applied to the reduced base).
            Delay past FRA and delayed retirement credits add 8% per year until 70 — a
            guaranteed, inflation-adjusted increase no portfolio can promise. Nothing accrues
            after 70, so later-than-70 filing only forfeits checks.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Monthly benefit as share of PIA, FRA 67 (SSA rules).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Claiming age</th>
                  <th className="px-4 py-3 font-semibold">Share of PIA</th>
                  <th className="px-4 py-3 font-semibold">On a $2,400 PIA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">62 (earliest)</td><td className="px-4 py-2">70%</td><td className="px-4 py-2">$1,680</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">67 (FRA)</td><td className="px-4 py-2">100%</td><td className="px-4 py-2">$2,400</td></tr>
                <tr><td className="px-4 py-2">70 (latest credit)</td><td className="px-4 py-2">124%</td><td className="px-4 py-2">$2,976</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: break-even near 80</h2>
          <p className="mt-3">
            Take Jordan with a $2,400 PIA at FRA 67. Claiming at 62 pays $1,680 monthly;
            waiting to 70 pays $2,976 — a $1,296 monthly gap. The early claimer collects 96
            extra checks ($1,680 × 96 = $161,280) before age 70, then falls behind $1,296
            monthly; $161,280 ÷ $1,296 ≈ 124 months, so cumulative benefits cross around age
            80. Live past 80 and delaying wins big (plus survivor benefits rise); die earlier
            and early claiming wins. Health, family longevity, and the need for cash now
            therefore outweigh spreadsheet precision. Couples get a fancier playbook: the
            higher earner delaying to 70 maximizes the survivor benefit that one spouse will
            eventually live on alone, while the lower earner may claim earlier for cash flow —
            and taxation of those checks follows our{" "}
            <Link href="/social-security-taxation-guide" className="text-amber-200 underline underline-offset-2">
              Social Security taxation guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Work, spouses, and coordination</h2>
          <p className="mt-3">
            Claiming before FRA while still earning triggers the retirement earnings test:
            SSA withholds $1 for every $2 earned above the annual exempt amount (about
            $23,400 recently; SSA indexes it yearly), with a gentler rule in the year you
            reach FRA. Benefits withheld are not lost — SSA recalculates higher payments at
            FRA — but the cash-flow surprise stings. Spousal benefits pay up to 50% of the
            worker&apos;s PIA (reduced if claimed early, never boosted past FRA), and
            survivor benefits can reach 100% including delayed credits — the strongest
            argument for the higher earner to wait. File-and-suspend and restricted
            applications are largely gone for those born after 1953, so do not plan around
            them. And remember the tax dimension: larger checks can push more of your benefit
            into taxable territory and raise Medicare IRMAA two years later — our{" "}
            <Link href="/cola-social-security-2026" className="text-amber-200 underline underline-offset-2">
              2026 COLA guide
            </Link>{" "}
            covers this year&apos;s adjustment, and the IRA mechanics behind gap-year Roth
            conversions sit at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . Benefit illustrations are estimates, never guarantees.
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does waiting to 70 always win?</summary>
              <p className="mt-1">Only with longevity. Single, in poor health, or needing the income now? Early claiming is often rational. Married with a much younger spouse or long-lived family? Delaying the higher benefit is powerful longevity insurance.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I change my mind after filing?</summary>
              <p className="mt-1">Within 12 months you may withdraw your application and repay everything received — a once-per-lifetime reset. After FRA you may also suspend benefits to earn delayed credits until 70.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do ex-spouses affect my benefit?</summary>
              <p className="mt-1">A divorced spouse married 10+ years may claim on your record without reducing your check, and your remarriage rules differ from theirs. Survivor options for ex-spouses largely mirror current-spouse rules.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Will Social Security run out?</summary>
              <p className="mt-1">Trustees project the combined trust funds can pay full benefits into the mid-2030s, then about 75–80% from payroll taxes absent legislation. Plan conservatively, but not as if checks drop to zero.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Verify your estimate with a
            my Social Security statement. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "When to Take Social Security: 62 vs. 67 vs. 70 | LoanPay Retire", description: "Claim at 62, full retirement age, or 70? Benefit math, break-even ages, spousal and survivor angles, and working-while-claiming rules.", url: "https://retire.loanpaylogic.com/when-to-take-social-security" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Does waiting to 70 always win?","answer":"Only with longevity. Single, in poor health, or needing the income now? Early claiming is often rational. Married with a much younger spouse or long-lived family? Delaying the higher benefit is powerful longevity insurance."},{"question":"Can I change my mind after filing?","answer":"Within 12 months you may withdraw your application and repay everything received — a once-per-lifetime reset. After FRA you may also suspend benefits to earn delayed credits until 70."},{"question":"Do ex-spouses affect my benefit?","answer":"A divorced spouse married 10+ years may claim on your record without reducing your check, and your remarriage rules differ from theirs. Survivor options for ex-spouses largely mirror current-spouse rules."},{"question":"Will Social Security run out?","answer":"Trustees project the combined trust funds can pay full benefits into the mid-2030s, then about 75–80% from payroll taxes absent legislation. Plan conservatively, but not as if checks drop to zero."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "When to Take Social Security: 62 vs. 67 vs. 70 | LoanPay Retire", url: "https://retire.loanpaylogic.com/when-to-take-social-security" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
