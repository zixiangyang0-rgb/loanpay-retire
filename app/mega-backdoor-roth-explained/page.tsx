import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mega Backdoor Roth Explained 2026 | LoanPay Retire",
  description:
    "Mega backdoor Roth: after-tax 401(k) contributions up to the $72,000 ceiling, in-service withdrawals, plan requirements, and pro-rata pitfalls.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/mega-backdoor-roth-explained",
  },
};

const CHECKLIST = [
  "Your 401(k) must allow BOTH after-tax (non-Roth) contributions AND in-service withdrawals or in-plan Roth conversions.",
  "2026 ceiling math: $72,000 total minus $24,500 deferrals minus employer match = your after-tax headroom.",
  "At 50+: ceiling rises to $80,000 ($83,250 at 60–63), expanding the mega window further.",
  "Convert after-tax dollars to Roth immediately (in-plan or to Roth IRA) to stop earnings accruing pre-tax.",
  "Highly compensated test failures can refund after-tax contributions — confirm your plan passes.",
  "No income limit, no $7,500 IRA cap involved — this is purely a workplace-plan maneuver.",
];

export default function MegaBackdoorPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Advanced Roth &middot; after-tax 401(k)
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Mega Backdoor Roth Explained
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The regular backdoor moves $7,500 a year. The mega backdoor can move $40,000+.
          How after-tax 401(k) contributions plus rapid Roth conversions build enormous
          tax-free balances — and the plan features yours needs.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Requirements checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The ceiling math for 2026</h2>
          <p className="mt-3">
            Section 415(c) caps total 401(k) inflows at $72,000 for 2026 ($80,000 at 50+,
            $83,250 at 60–63). After subtracting your $24,500 elective deferrals and the
            employer match, the remainder is fillable with after-tax (non-Roth)
            contributions — a third contribution type most employees never notice. Those
            after-tax dollars themselves grow tax-deferred, but converting them swiftly to
            Roth (in-plan Roth conversion or in-service withdrawal to a Roth IRA) shifts all
            future growth to tax-free. Plans without automatic conversion features force
            manual conversions each paycheck — tedious but lucrative.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 mega backdoor headroom examples (under 50).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Scenario</th>
                  <th className="px-4 py-3 font-semibold">Math</th>
                  <th className="px-4 py-3 font-semibold">After-tax room</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$150K pay, $6K match</td><td className="px-4 py-2">$72,000 − $24,500 − $6,000</td><td className="px-4 py-2">$41,500</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$300K pay, $12K match</td><td className="px-4 py-2">$72,000 − $24,500 − $12,000</td><td className="px-4 py-2">$35,500</td></tr>
                <tr><td className="px-4 py-2">Age 61, $10K match</td><td className="px-4 py-2">$83,250 − $35,750 − $10,000</td><td className="px-4 py-2">$37,500</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: $41,500 yearly to Roth</h2>
          <p className="mt-3">
            Nina earns $150,000, maxes $24,500 pre-tax, and receives a $6,000 match —
            leaving $41,500 of after-tax headroom. Her plan offers automatic in-plan Roth
            conversion each paycheck, so every after-tax dollar converts to Roth within
            days with near-zero taxable earnings. Over five years that is $207,500 of Roth
            basis (plus growth), dwarfing the $37,500 five regular backdoors would allow.
            Contrast a coworker whose plan bars in-service withdrawals: after-tax dollars
            sit growing tax-deferred until separation, when a split rollover sends basis to
            Roth IRA and earnings to traditional IRA — workable but clumsier, and interim
            earnings convert taxably. Before starting, Nina confirms ACP nondiscrimination
            testing history (failed tests refund after-tax money to highly compensated
            staff) and verifies her plan&apos;s conversion automation with the
            administrator in writing. Compare the vanilla version in our{" "}
            <Link href="/backdoor-roth-ira-guide" className="text-amber-200 underline underline-offset-2">
              backdoor Roth guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Risks, alternatives, and fit</h2>
          <p className="mt-3">
            The mega backdoor concentrates heavily in one employer&apos;s plan — job loss
            mid-year strands the strategy, and plan amendments can close the window without
            notice. After-tax contributions that cannot be converted promptly are mediocre:
            earnings grow merely tax-deferred (like nondeductible IRA money) without the
            Roth payoff, so confirm conversion mechanics before contributing a dollar.
            Alternatives for the same cash include taxable brokerage investing (flexible,
            capital-gains rates, step-up at death), extra mortgage principal, or{" "}
            <Link href="/hsa-retirement-strategy" className="text-amber-200 underline underline-offset-2">
              HSA funding
            </Link>{" "}
            with its triple tax edge. The mega backdoor suits high savers who already max
            every other tax-advantaged account and hold ample emergency reserves — it is a
            finishing move, not a first step. Definitions of contribution types are further
            clarified at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . All figures illustrate capacity, never guaranteed outcomes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">After-tax vs. Roth — aren't they the same?</h3>
              <p className="mt-1">No. Roth contributions ($24,500 cap) grow tax-free. After-tax non-Roth contributions (up to the $72,000 total) grow tax-deferred — only conversion makes their future growth tax-free.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does my plan support this?</h3>
              <p className="mt-1">Ask two questions: (1) does it accept after-tax non-Roth contributions, and (2) does it allow in-service withdrawals or in-plan Roth conversions of those dollars? Both answers must be yes.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are conversions of after-tax money taxable?</h3>
              <p className="mt-1">Only the earnings portion. Convert quickly and the taxable sliver is pennies. Let $40,000 sit for a year earning $3,000 and that $3,000 is taxable on conversion — automate it.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can highly compensated employees use it?</h3>
              <p className="mt-1">Often yes, but ACP testing limits after-tax contributions at some companies, with excess refunded (plus earnings) early the next year. Check with benefits before committing cash flow.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Plan provisions vary widely;
            get conversion mechanics confirmed in writing. Read our full{" "}
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
