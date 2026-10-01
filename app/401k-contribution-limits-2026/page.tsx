import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "401(k) Contribution Limits 2026 | LoanPay Retire",
  description:
    "2026 401(k) limits: $24,500 elective deferrals, $8,000 catch-up at 50+ ($11,250 at 60–63), $72,000 total, plus employer match and HCE rules.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/401k-contribution-limits-2026",
  },
};

const CHECKLIST = [
  "Under 50: you may defer up to $24,500 of salary across 401(k), 403(b), and most 457(b) plans in 2026.",
  "Age 50+: add the standard $8,000 catch-up for a $32,500 employee total — ages 60–63 may use the $11,250 super catch-up instead ($35,750 total).",
  "Total with employer money: $72,000 (or 100% of compensation, whichever is lower).",
  "Always contribute enough to capture the full employer match before funding anything else — it is an instant return.",
  "High earners: the 60–63 super catch-up must go to Roth under SECURE 2.0 if prior-year wages exceeded $145,000.",
  "Elective deferrals never reduce Social Security or Medicare wages — you still pay FICA on the full amount.",
];

export default function Four01kLimitsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          401(k) 2026 &middot; $24,500 / $32,500 / $35,750
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          401(k) Contribution Limits 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Every 2026 dollar limit for workplace plans — elective deferrals, the age-50
          catch-up, the new 60–63 super catch-up, employer-match math, and the highly
          compensated rules that can cap what you keep.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">2026 limits checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Every 2026 number in one table</h2>
          <p className="mt-3">
            The IRS announced 2026 cost-of-living adjustments in Notice 2025-67: elective
            deferrals rise to $24,500 (up from $23,500), the standard age-50 catch-up rises to
            $8,000, and the total defined-contribution ceiling rises to $72,000 on compensation
            up to $360,000. The SECURE 2.0 super catch-up for employees turning 60–63 stays at
            $11,250. These employee limits aggregate across 401(k), 403(b), governmental 457(b),
            and the federal Thrift Savings Plan — splitting time between two employers does not
            double the cap.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 workplace-plan limits (IRS Notice 2025-67).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Limit</th>
                  <th className="px-4 py-3 font-semibold">Under 50</th>
                  <th className="px-4 py-3 font-semibold">Age 50+</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Employee elective deferrals</td><td className="px-4 py-2">$24,500</td><td className="px-4 py-2">$32,500 ($35,750 at 60–63)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Total with employer (415(c))</td><td className="px-4 py-2">$72,000</td><td className="px-4 py-2">$80,000 ($83,250 at 60–63)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Compensation counted</td><td className="px-4 py-2">$360,000</td><td className="px-4 py-2">$360,000</td></tr>
                <tr><td className="px-4 py-2">Highly compensated threshold</td><td className="px-4 py-2">$160,000</td><td className="px-4 py-2">$160,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the match comes first</h2>
          <p className="mt-3">
            Maya earns $140,000 and her employer matches 50% of deferrals up to 6% of pay.
            Six percent of $140,000 is $8,400 of her money, which draws a $4,200 match — a 50%
            instant return no market can promise. Maya, 44, raises her deferral to 18% of pay
            ($25,200) but the $24,500 cap stops her $700 short; payroll adjusts automatically
            and her total with the match is $28,700 for the year. Had she been 52, the $8,000
            catch-up would have let the full $25,200 land, plus match, for $29,400. The lesson
            repeats every enrollment season: fund the match first, then max the deferral, then
            spill over to an IRA or{" "}
            <Link href="/hsa-retirement-strategy" className="text-amber-200 underline underline-offset-2">
              the HSA
            </Link>
            . And because the IRS uses a calendar-year cap, anyone who maxes out early should
            confirm their plan keeps matching each paycheck — some plans use a &ldquo;true-up&rdquo;
            at year-end and some do not.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Catch-ups, Roth mandates, and nondiscrimination</h2>
          <p className="mt-3">
            Catch-up eligibility keys off turning 50 any time during the calendar year — a
            December birthday counts for the whole year. The 60–63 super catch-up ($11,250 for
            2026) replaces, not stacks with, the standard $8,000, and it phases out after 63:
            at 64 you return to the standard catch-up. SECURE 2.0 also requires that catch-up
            contributions be Roth (after-tax) for employees whose prior-year FICA wages from
            that employer exceeded $145,000, indexed — check whether your plan has enabled
            Roth catch-ups before December payrolls. Separately, if you earned over $160,000
            you are likely &ldquo;highly compensated,&rdquo; and failed ADP/ACP
            nondiscrimination tests can force refunds of excess deferrals; maxing early in the
            year does not protect against a test refund. Over-contributed across two jobs?
            Withdraw the excess plus earnings by April 15 of the following year and pay tax on
            it — otherwise the excess is taxed twice. For the IRA side of the picture, see our
            companion coverage and the tax-focused breakdown at{" "}
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
              <h3 className="font-semibold text-white">Do 401(k) and 403(b) limits stack?</h3>
              <p className="mt-1">No — one $24,500 elective-deferral cap covers 401(k), 403(b), and SARSEP deferrals combined. Governmental 457(b) plans carry a separate $24,500 cap, a rare true double-dip.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should the super catch-up change my timing?</h3>
              <p className="mt-1">If you turn 60–63 in 2026, you get the $11,250 slot only this window — consider bunching bonuses or deferred comp into these years, and confirm Roth catch-up mechanics with HR.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does the match count toward $24,500?</h3>
              <p className="mt-1">No. The $24,500 counts only your elective deferrals (pre-tax plus Roth). Employer matches and profit-sharing count toward the $72,000 total ceiling instead.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What if I exceed the limit?</h3>
              <p className="mt-1">Notify the plan immediately and request a corrective distribution of the excess plus earnings by April 15. Miss the deadline and the excess is taxed in both the contribution year and the withdrawal year.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Limits follow IRS Notice 2025-67
            for 2026; plan documents may impose lower caps. Read our full{" "}
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
