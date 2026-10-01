import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RMD Rules 2026: Ages, Deadlines & Penalties | LoanPay Retire",
  description:
    "2026 RMD rules: age 73 vs. 75 under SECURE 2.0, April 1 deadlines, Uniform Lifetime Table math, inherited IRA 10-year rule, and the 25% penalty.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/rmd-rules-2026",
  },
};

const CHECKLIST = [
  "Born 1951–1959: RMDs start at 73. Born 1960 or later: RMDs start at 75.",
  "First RMD deadline: April 1 of the year after you reach starting age; every later RMD by December 31.",
  "RMD = prior December 31 balance ÷ IRS Uniform Lifetime Table divisor.",
  "Miss it and the excise tax is 25% of the shortfall (10% if corrected within two years).",
  "Roth IRAs: no lifetime RMDs for owners. Inherited accounts: usually the 10-year payout rule.",
  "Still working at 73+? 401(k) RMDs may wait until retirement (the still-working exception) — IRAs may not.",
];

export default function RmdRulesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          RMDs 2026 &middot; 73 / 75 &middot; 25% penalty
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          RMD Rules 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Uncle Sam&apos;s withdrawal schedule: who must take required minimum distributions
          in 2026, how the amount is computed, and how to avoid the painful excise tax.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">RMD checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who owes an RMD in 2026</h2>
          <p className="mt-3">
            SECURE 2.0 split starting ages by birth year: reach 73 in 2026 (born 1953) and
            your first RMD covers 2026, due April 1, 2027. Born 1960 or later and you wait
            until 75. The accounts in scope are traditional, SEP, and SIMPLE IRAs plus
            401(k), 403(b), and governmental 457(b) balances — each computed separately,
            though IRA amounts may be aggregated and withdrawn from one IRA. Designated Roth
            401(k) balances are exempt during your lifetime since 2024, and Roth IRAs remain
            fully exempt for owners. Inherited traditional and Roth accounts generally fall
            under the 10-year rule (emptied by December 31 of the tenth year after death),
            with annual RMDs also due in years 1–9 when the deceased was already taking
            them — see our{" "}
            <Link href="/beneficiaries-estate-basics" className="text-amber-200 underline underline-offset-2">
              beneficiaries guide
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                RMD starting age by birth year (SECURE 2.0).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Born</th>
                  <th className="px-4 py-3 font-semibold">RMDs begin at</th>
                  <th className="px-4 py-3 font-semibold">First RMD year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">1950 or earlier</td><td className="px-4 py-2">72 (old law)</td><td className="px-4 py-2">Already taking</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">1951–1959</td><td className="px-4 py-2">73</td><td className="px-4 py-2">Year you turn 73</td></tr>
                <tr><td className="px-4 py-2">1960 or later</td><td className="px-4 py-2">75</td><td className="px-4 py-2">Year you turn 75</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: $800,000 at 73</h2>
          <p className="mt-3">
            David turns 73 in 2026 with a $800,000 traditional IRA on December 31, 2025. The
            Uniform Lifetime Table divisor at 73 is 26.5, so his 2026 RMD is $800,000 ÷ 26.5
            ≈ $30,189, taxable as ordinary income. He may take it anytime in 2026, or delay
            to April 1, 2027 — but then 2027 demands two distributions (2026&apos;s plus
            2027&apos;s on the new balance), likely bunching him into a higher bracket and
            raising 2029 Medicare IRMAA. Try the math instantly in our{" "}
            <Link href="/rmd-calculator" className="text-amber-200 underline underline-offset-2">
              RMD calculator
            </Link>
            . At 75 the divisor is 24.6, at 80 it is 20.2, and by 90 it falls to 12.2 — the
            percentage withdrawn rises every year as life expectancy shrinks. Spouses more
            than 10 years younger use the Joint Life table for smaller RMDs, and QCDs after
            70½ can satisfy the whole requirement tax-free directly to charity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Penalties, aggregation, and planning</h2>
          <p className="mt-3">
            The excise tax on missed RMDs dropped from 50% to 25% under SECURE 2.0 — still
            brutal — and falls to 10% if corrected within the two-year correction window via
            Form 5329, where the IRS routinely waives reasonable-error shortfalls. Aggregation
            rules differ: IRA RMDs (including SEP/SIMPLE) may be summed and pulled from any
            one IRA, but each 401(k) must distribute its own amount. The still-working
            exception lets non-5%-owners delay 401(k) RMDs past 73 while employed, yet IRA
            RMDs march on regardless. Forward planners shrink future RMDs with Roth
            conversions in the gap years between retiring and 73, coordinate the first-RMD
            double-up decision, and remember conversions themselves never satisfy an RMD —
            take the RMD first, then convert. Conversion mechanics are covered at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>{" "}
            and sequencing in our{" "}
            <Link href="/retirement-withdrawal-order-strategy" className="text-amber-200 underline underline-offset-2">
              withdrawal-order strategy
            </Link>
            . Figures are illustrations, never guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I take more than the RMD?</h3>
              <p className="mt-1">Yes — the RMD is a floor, not a ceiling. Extra withdrawals are simply taxed as ordinary income (plus possible IRMAA and Social Security-tax effects).</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do RMDs apply to Roth 401(k)s?</h3>
              <p className="mt-1">No longer during your lifetime — SECURE 2.0 removed them from 2024 onward. Many owners stopped rolling Roth 401(k)s into Roth IRAs solely to dodge RMDs.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What if I inherit an IRA in 2026?</h3>
              <p className="mt-1">Most non-spouse beneficiaries face the 10-year rule: empty the account by end of year 10, with annual RMDs in years 1–9 if the deceased had started them. Spouses keep special rollover and life-expectancy options.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can charity satisfy my RMD?</h3>
              <p className="mt-1">Yes — qualified charitable distributions up to $108,000 (2025; indexed) per person go directly to charity, count toward the RMD, and never enter AGI. You must be 70½+.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Confirm divisors in IRS
            Publication 590-B and deadlines with your custodian. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
