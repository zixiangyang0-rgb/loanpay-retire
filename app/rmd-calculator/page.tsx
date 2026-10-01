"use client";

import { useMemo, useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";

// Note: metadata export is not supported in client components; the parent
// layout supplies site-wide metadata. Title is set via the h1 and <title>
// side effect below is intentionally avoided to keep the component pure.

const DIVISORS: Record<number, number> = {
  73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1,
  80: 20.2, 81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2,
  87: 14.4, 88: 13.7, 89: 12.9, 90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1,
  94: 9.5, 95: 8.9, 96: 8.4, 97: 7.9, 98: 7.4, 99: 7.0, 100: 6.6,
};

function divisorFor(age: number): number {
  if (age <= 72) return 27.4;
  if (age >= 100) return 6.6;
  return DIVISORS[age] ?? 6.6;
}

export default function RmdCalculatorPage() {
  const [balance, setBalance] = useState("800000");
  const [age, setAge] = useState("73");

  const result = useMemo(() => {
    const bal = Number(balance.replace(/[^0-9.]/g, "")) || 0;
    const a = Math.floor(Number(age) || 0);
    if (bal <= 0 || a <= 0) return null;
    const divisor = divisorFor(a);
    const rmd = bal / divisor;
    return { divisor, rmd, pct: (rmd / bal) * 100 };
  }, [balance, age]);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Estimator &middot; Uniform Lifetime Table
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          RMD Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Estimate this year&apos;s required minimum distribution from any traditional
          balance. Enter the prior December 31 balance and your age — the math follows the
          IRS Uniform Lifetime Table.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Your estimate</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Prior Dec 31 balance ($)
              </span>
              <input
                type="text"
                inputMode="decimal"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-amber-200/50"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Your age this year
              </span>
              <input
                type="number"
                min={60}
                max={110}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-amber-200/50"
              />
            </label>
          </div>
          <div className="mt-6 rounded-xl border border-amber-200/25 bg-amber-200/5 p-5 text-center">
            {result ? (
              <>
                <p className="text-xs uppercase tracking-widest text-amber-200/80">
                  Estimated 2026 RMD
                </p>
                <p className="mt-2 text-4xl font-extrabold text-white">
                  ${result.rmd.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Divisor {result.divisor} · about {result.pct.toFixed(2)}% of the balance ·
                  taxable as ordinary income (traditional balances)
                </p>
              </>
            ) : (
              <p className="text-slate-400">Enter a balance and age to see the estimate.</p>
            )}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Simplified illustration using the Uniform Lifetime Table (spouse not more than
            10 years younger). Actual custodians apply exact IRS tables, adjustments for
            outstanding rollovers, and aggregation rules. Not financial advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How the estimator works</h2>
          <p className="mt-3">
            The IRS formula is one division problem: prior-year-end balance divided by a
            life-expectancy divisor. At 73 the divisor is 26.5 (about 3.77% of the balance);
            at 80 it is 20.2 (about 4.95%); at 90 it is 12.2 (about 8.20%). The percentage
            climbs every year because the divisor shrinks — RMDs accelerate as you age.
            Owners whose spouse is more than 10 years younger and is the sole beneficiary
            use the Joint Life table for smaller distributions. Full rules, starting ages
            (73 vs. 75), deadlines, and penalties live in our{" "}
            <Link href="/rmd-rules-2026" className="text-amber-200 underline underline-offset-2">
              RMD rules guide
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Sample Uniform Lifetime Table divisors (IRS Publication 590-B).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Age</th>
                  <th className="px-4 py-3 font-semibold">Divisor</th>
                  <th className="px-4 py-3 font-semibold">RMD on $500,000</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">73</td><td className="px-4 py-2">26.5</td><td className="px-4 py-2">$18,868</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">75</td><td className="px-4 py-2">24.6</td><td className="px-4 py-2">$20,325</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">80</td><td className="px-4 py-2">20.2</td><td className="px-4 py-2">$24,752</td></tr>
                <tr><td className="px-4 py-2">85</td><td className="px-4 py-2">16.0</td><td className="px-4 py-2">$31,250</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: verifying the tool</h2>
          <p className="mt-3">
            Carol is 78 with a $600,000 traditional IRA on December 31, 2025. The table
            divisor at 78 is 22.0, so her 2026 RMD is $600,000 ÷ 22.0 ≈ $27,273. Type 600000
            and 78 into the estimator to confirm the same figure, then note the tax ripple:
            at a 22% marginal rate the distribution itself costs about $6,000 in federal tax
            and may push more Social Security into taxable territory (see our{" "}
            <Link href="/social-security-taxation-guide" className="text-amber-200 underline underline-offset-2">
              Social Security taxation guide
            </Link>
            ). Had Carol converted $100,000 to Roth during low-income gap years at 12–22%,
            her balance — and every future RMD — would be permanently smaller. Take the RMD
            before converting in any year; conversions never satisfy the requirement. For
            the IRA conversion mechanics behind this play, see{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . Estimates only — never guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Which balance does the IRS use?</h3>
              <p className="mt-1">The account balance as of the prior December 31, adjusted for outstanding rollovers and additions. Year-end statements from your custodian show the exact figure.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I aggregate across accounts?</h3>
              <p className="mt-1">IRA RMDs (traditional, SEP, SIMPLE) may be summed and withdrawn from any one IRA. Each 401(k) or 403(b) must distribute its own computed amount separately.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What if I miss the deadline?</h3>
              <p className="mt-1">The excise tax is 25% of the shortfall (10% if corrected within two years). File Form 5329, take the missed amount promptly, and request a reasonable-error waiver.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do Roth balances count?</h3>
              <p className="mt-1">Roth IRAs never count during your lifetime. Designated Roth 401(k) balances have been exempt since 2024. Inherited Roth accounts follow beneficiary payout rules.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Confirm your divisor in IRS
            Publication 590-B. Read our full{" "}
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
