import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rule of 55 Guide: Penalty-Free 401(k) at 55 | LoanPay Retire",
  description:
    "Rule of 55: leave your job at 55+ and tap that employer's 401(k) penalty-free — eligibility, partial withdrawals, and IRA-rollover traps.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/rule-of-55-guide",
  },
};

const CHECKLIST = [
  "Separate from service in the calendar year you turn 55 or later (50+ for public-safety employees).",
  "Only THAT employer's 401(k)/403(b) qualifies — old 401(k)s and IRAs are excluded.",
  "Withdrawals skip the 10% penalty but still face ordinary income tax (plus withholding).",
  "Do NOT roll the balance to an IRA first — the rollover destroys Rule-of-55 eligibility.",
  "Your plan must allow partial distributions; some force lump sums or bar access until 59½.",
  "Public-safety workers (police, fire, EMS, corrections) qualify from age 50 with 25+ years extensions.",
];

export default function Rule55Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          401(k) exits &middot; age 55 &middot; no 10%
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Rule of 55 Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Retire (or get laid off) at 55 or later and your current 401(k) opens
          penalty-free — no SEPP schedules, no waiting to 59½. The fine print that decides
          whether yours qualifies.
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
          <h2 className="text-xl font-bold text-white">Exactly what the rule covers</h2>
          <p className="mt-3">
            IRS Notice 87-13 blesses penalty-free distributions when separation occurs
            during or after the year you turn 55 — a December birthday leaving in February
            still qualifies for the whole year. Coverage is surgically narrow: only the
            plan of the employer you just left, only defined-contribution plans (401(k),
            403(b), profit-sharing), never pensions, nonqualified deferred comp, or IRAs.
            Withdrawals remain fully taxable as ordinary income with 20% federal
            withholding standard. Critically, the plan document controls access: some plans
            permit flexible partial withdrawals, others allow a single lump sum or bar
            distributions until normal retirement age — read the summary plan description
            before giving notice. Public-safety employees with 25 years of service access
            expanded provisions from 50 under SECURE 2.0 refinements.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Early-access paths compared (federal rules).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Path</th>
                  <th className="px-4 py-3 font-semibold">Ages</th>
                  <th className="px-4 py-3 font-semibold">Flexibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Rule of 55</td><td className="px-4 py-2">55+ at separation</td><td className="px-4 py-2">Any amount, any timing</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">SEPP 72(t)</td><td className="px-4 py-2">Any age</td><td className="px-4 py-2">Rigid schedule to 59½</td></tr>
                <tr><td className="px-4 py-2">Wait to 59½</td><td className="px-4 py-2">59½</td><td className="px-4 py-2">Full freedom</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: $420,000 at 57</h2>
          <p className="mt-3">
            Karen is laid off at 57 with $420,000 in her current 401(k) and a $90,000 old
            401(k) from a prior job. She needs $50,000 yearly until 59½. Drawing only from
            the current plan: $50,000 taxed at 22% (~$11,000) with zero penalty — clean.
            Touching the old 401(k) instead: same $11,000 tax plus a $5,000 penalty, so she
            consolidates the old balance INTO the current plan before separating (reverse
            rollover while still employed) to bring it under the Rule-of-55 umbrella —
            allowed if the current plan accepts rollovers. What she must not do: roll
            either balance to an IRA, which permanently exits Rule-of-55 territory (IRAs
            answer only to 59½ and{" "}
            <Link href="/early-withdrawal-penalty-59-half" className="text-amber-200 underline underline-offset-2">
              penalty exceptions
            </Link>
            ). If her plan forces a lump-sum-only distribution, she takes the lump to a
            taxable account once — still penalty-free — and budgets the tax. Keep
            documentation of the separation year; custodians code the 1099-R but the IRS
            matches your return&apos;s story.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Coordination and gotchas</h2>
          <p className="mt-3">
            Three gotchas sink the unwary. First, quitting at 54 with a January birthday
            fails — the separation must occur in the 55 year or later (firing, layoff, and
            voluntary quits all count; you need not retire). Second, after-tax and Roth
            401(k) basis withdraw under their own ordering — still penalty-free via the
            rule, but track basis via plan statements. Third, Rule-of-55 withdrawals raise
            AGI, potentially inflating ACA premiums before 65 or pushing Social Security
            into taxable tiers — coordinate with our{" "}
            <Link href="/social-security-taxation-guide" className="text-amber-200 underline underline-offset-2">
              Social Security taxation guide
            </Link>{" "}
            and{" "}
            <Link href="/medicare-premiums-2026-guide" className="text-amber-200 underline underline-offset-2">
              Medicare premiums guide
            </Link>
            . Alternatives when the plan bars access: SEPP from an IRA, Roth contribution
            withdrawals, or part-time bridge work. The IRA contribution framework around
            any gap-year conversions is detailed at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . Figures illustrate only — never guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does getting fired count?</h3>
              <p className="mt-1">Yes — any separation (quit, layoff, firing, early-retirement offer) in the qualifying year works. The reason for leaving is irrelevant; the timing and the account are everything.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I use an old 401(k) from a prior job?</h3>
              <p className="mt-1">No — only the plan of the employer you separated from at 55+. Roll old balances into the current plan before separating if its rules and fees make that wise.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What about public-safety workers?</h3>
              <p className="mt-1">Federal/state/local police, firefighters, EMS, and corrections staff qualify from 50 (25 years of service extends options further) under special provisions — confirm with your plan administrator.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Is there withholding on Rule-of-55 withdrawals?</h3>
              <p className="mt-1">Yes — eligible rollover-style distributions face 20% mandatory federal withholding (adjustable via W-4R for nonperiodic payments). You still owe the full ordinary tax at filing.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Plan documents vary — confirm
            partial-withdrawal rights before separating. Read our full{" "}
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
