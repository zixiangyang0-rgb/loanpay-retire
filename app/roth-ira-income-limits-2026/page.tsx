import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roth IRA Income Limits 2026 | LoanPay Retire",
  description:
    "2026 Roth IRA limits: $7,500 ($8,600 at 50+), phase-outs $153K–$168K single and $242K–$252K joint, plus backdoor and spousal strategies.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/roth-ira-income-limits-2026",
  },
};

const CHECKLIST = [
  "2026 contribution cap: $7,500 under 50, $8,600 at 50+ — shared across every IRA you own.",
  "Full Roth access: MAGI under $153,000 single / $242,000 joint; partial up to $168,000 / $252,000.",
  "You need earned income at least equal to your contribution — no wages, no contribution.",
  "Above the phase-out? The backdoor Roth (nondeductible traditional + conversion) remains legal at any income.",
  "Married with one earner? A spousal IRA lets the working spouse fund the nonworking spouse's Roth.",
  "Contributions for 2026 are allowed until April 15, 2027 — conversions follow calendar-year rules instead.",
];

export default function RothIraLimitsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Roth IRA 2026 &middot; $7,500 / $8,600
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Roth IRA Income Limits 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Who may contribute directly, where the phase-outs bite, how partial contributions
          are prorated, and the clean legal paths — backdoor, spousal, and Roth 401(k) — when
          income runs too high.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Eligibility checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The 2026 phase-out bands</h2>
          <p className="mt-3">
            The IRS lifted 2026 Roth bands in IR-2025-111: single filers and heads of
            household phase out from $153,000 to $168,000 of modified AGI, and joint filers
            from $242,000 to $252,000. Inside the band, your allowed contribution shrinks
            proportionally — for example, a single filer at $160,500 sits halfway through the
            $15,000 band and may contribute roughly half the $7,500 cap. Married filing
            separately faces a brutal $0–$10,000 band that effectively bars direct Roth
            contributions. Modified AGI adds back items like student-loan interest and foreign
            earned income exclusions, so run the worksheet in Publication 590-A rather than
            eyeballing your W-2.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 Roth IRA direct-contribution eligibility (IRS IR-2025-111).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Filing status</th>
                  <th className="px-4 py-3 font-semibold">Full contribution</th>
                  <th className="px-4 py-3 font-semibold">Phase-out (partial)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Single / head of household</td><td className="px-4 py-2">MAGI under $153,000</td><td className="px-4 py-2">$153,000–$168,000</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Married filing jointly</td><td className="px-4 py-2">MAGI under $242,000</td><td className="px-4 py-2">$242,000–$252,000</td></tr>
                <tr><td className="px-4 py-2">Married filing separately</td><td className="px-4 py-2">Effectively none</td><td className="px-4 py-2">$0–$10,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the straddling couple</h2>
          <p className="mt-3">
            Priya and Sam file jointly with 2026 MAGI of $247,000 — halfway through the
            $10,000 joint band. Each spouse&apos;s direct Roth cap is roughly halved: about
            $3,750 each (under 50), or $4,300 each with the 50+ catch-up. Rather than fuss with
            partial contributions on two accounts, they each contribute the full $7,500 to
            traditional IRAs as nondeductible contributions and convert promptly to Roth — the
            backdoor route detailed in our{" "}
            <Link href="/backdoor-roth-ira-guide" className="text-amber-200 underline underline-offset-2">
              backdoor Roth guide
            </Link>
            . Their MAGI, meanwhile, sits safely below the $252,000 top, so no 6% excess-contribution
            cleanup is needed. Contrast a single filer at $170,000: direct Roth is fully barred,
            so every Roth dollar must arrive via backdoor or workplace Roth 401(k) — which has
            no income cap at all.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Above the line? Your three doors still open</h2>
          <p className="mt-3">
            First, the backdoor Roth works at any income but demands attention to the pro-rata
            rule: pre-tax dollars sitting in any traditional, SEP, or SIMPLE IRA are taxed
            proportionally on conversion, so many planners roll pre-tax balances into a current
            401(k) first. Second, Roth 401(k) contributions accept the full $24,500 with zero
            income test, making them the simplest high-earner Roth channel — compare the two
            flavors in our{" "}
            <Link href="/roth-401k-vs-roth-ira" className="text-amber-200 underline underline-offset-2">
              Roth 401(k) vs. Roth IRA guide
            </Link>
            . Third, conversions of existing traditional balances have no income limit either,
            and low-income years (sabbaticals, early retirement gaps) are the cheapest windows.
            One caution: contributing directly while over the limit triggers a 6% excess tax
            each year until removed — always verify MAGI before April, not after. Our sister
            site covers the deduction side of the same limits at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does the $7,500 cap split across accounts?</h3>
              <p className="mt-1">Yes — $7,500 ($8,600 at 50+) is your combined ceiling across Roth, traditional, SEP, and SIMPLE contributions as an individual. Split it however you like, but never exceed it in total.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What counts as compensation?</h3>
              <p className="mt-1">Wages, salaries, commissions, and self-employment income count. Pensions, Social Security, rental income, interest, and dividends do not — a pure retiree generally cannot contribute.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can teens or students contribute?</h3>
              <p className="mt-1">Yes, with earned income — a teenager with $4,000 of summer wages may contribute $4,000 to a Roth, a superb multi-decade head start. Custodial Roth IRAs handle the paperwork.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What if my income lands inside the band?</h3>
              <p className="mt-1">Compute the prorated direct amount with the IRS worksheet, contribute exactly that to Roth, and route the remainder through the backdoor — never round up and risk the 6% excess tax.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Income bands follow IRS 2026
            figures; confirm modified AGI in Publication 590-A. Read our full{" "}
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
