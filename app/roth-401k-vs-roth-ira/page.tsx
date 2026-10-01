import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roth 401(k) vs. Roth IRA: Key Differences 2026 | LoanPay Retire",
  description:
    "Roth 401(k) vs. Roth IRA in 2026: contribution caps, income rules, RMDs, loans, fees, and how to use both accounts together.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/roth-401k-vs-roth-ira",
  },
};

const CHECKLIST = [
  "Roth 401(k): up to $24,500 in 2026 ($32,500/$35,750 with catch-ups), no income limit, employer match possible.",
  "Roth IRA: up to $7,500 ($8,600 at 50+), income phase-outs apply — $153K–$168K single, $242K–$252K joint.",
  "Neither original-owner account forces lifetime RMDs; both pass to heirs under the 10-year rule.",
  "Roth 401(k) allows plan loans; Roth IRAs offer contribution withdrawals anytime and a $10,000 first-home exception for earnings.",
  "IRAs offer thousands of fund choices; 401(k)s offer a curated menu but institutional share classes.",
  "Using both is normal: max the workplace Roth to the match, fund the IRA, then return to the 401(k).",
];

export default function Roth401kVsRothIraPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Roth showdown &middot; workplace vs. personal
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Roth 401(k) vs. Roth IRA
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Two doors to tax-free retirement income with very different caps, income tests, and
          flexibility. Here is how to pick — or combine — them in 2026.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Quick comparison checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Side-by-side for 2026</h2>
          <p className="mt-3">
            Both accounts grow tax-free and distribute tax-free once qualified (account open
            five years plus age 59½, disability, or the first-home exception). The practical
            differences are capacity and control. The Roth 401(k) swallows $24,500 a year with
            no income test and adds an employer match, but lives inside your employer&apos;s
            fund menu and creditor framework. The Roth IRA caps at $7,500 ($8,600 at 50+) with
            income phase-outs, yet offers the entire fund universe, easier withdrawals, and no
            plan-administrator friction. High earners locked out of direct Roth IRA
            contributions can still fill a Roth 401(k) to the brim — or use the{" "}
            <Link href="/backdoor-roth-ira-guide" className="text-amber-200 underline underline-offset-2">
              backdoor Roth
            </Link>{" "}
            for the IRA side.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Roth 401(k) vs. Roth IRA, 2026 rules.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Roth 401(k)</th>
                  <th className="px-4 py-3 font-semibold">Roth IRA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">2026 limit</td><td className="px-4 py-2">$24,500 (+ catch-ups)</td><td className="px-4 py-2">$7,500 / $8,600</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Income test</td><td className="px-4 py-2">No income test</td><td className="px-4 py-2">Phase-outs apply</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Employer match</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2">No</td></tr>
                <tr><td className="px-4 py-2">Early flexibility</td><td className="px-4 py-2">Loans; harder withdrawals</td><td className="px-4 py-2">Contributions out anytime</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: stacking both at $120,000</h2>
          <p className="mt-3">
            Elena, 38, earns $120,000 — comfortably under the Roth IRA phase-out, so both
            doors stand open. Her employer matches 100% up to 5% of pay ($6,000). She directs
            5% ($6,000) to Roth 401(k) to seize the match, then fills her Roth IRA ($7,500),
            then returns a further $10,000 to the Roth 401(k) — $16,000 workplace Roth plus
            $7,500 personal Roth, $23,500 total, plus the $6,000 match (pre-tax). At a 22%
            marginal rate she pays about $5,170 more tax this year than going all-traditional,
            buying roughly $23,500 of basis that compounds tax-free for 25+ years. Had Elena
            earned $260,000 jointly instead, the direct Roth IRA would be barred and the same
            $7,500 would travel the backdoor route while the 401(k) leg stayed unchanged.
            Either way the five-year clock deserves attention: each Roth IRA conversion starts
            its own five-year qualified-distribution clock, so opening and funding early
            matters. For the pre-tax vs. Roth decision itself, see our{" "}
            <Link href="/traditional-vs-roth-401k" className="text-amber-200 underline underline-offset-2">
              traditional vs. Roth 401(k) guide
            </Link>{" "}
            and the tax tables at{" "}
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
          <h2 className="text-xl font-bold text-white">Which first? A sequencing rule of thumb</h2>
          <p className="mt-3">
            The classic order still holds: contribute to the Roth 401(k) up to the full match,
            then max the Roth IRA for its flexibility and fund choice, then return to max the
            401(k) if cash flow allows. Exceptions exist — a terrible 401(k) menu with 1%+
            fees argues for prioritizing the IRA, while the mega backdoor (after-tax 401(k)
            contributions converted in-plan) argues for stuffing the workplace plan far beyond
            $24,500 where offered. Job-changers should know rollovers flow either direction:
            Roth 401(k) balances roll cleanly into Roth IRAs at separation, consolidating the
            five-year clocks and escaping plan fees — our{" "}
            <Link href="/ira-rollover-guide" className="text-amber-200 underline underline-offset-2">
              rollover guide
            </Link>{" "}
            walks through it. And remember required minimum distributions no longer stalk
            either account during your lifetime, a SECURE 2.0 improvement that makes Roth
            401(k)s far more attractive than their pre-2024 versions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I max both in the same year?</h3>
              <p className="mt-1">Yes — the caps are independent. In 2026 you may put $24,500 in a Roth 401(k) and $7,500 in a Roth IRA ($32,000 total, plus catch-ups and matches) if income and cash flow allow.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do Roth 401(k)s have RMDs?</h3>
              <p className="mt-1">No longer for the original owner — SECURE 2.0 ended lifetime Roth 401(k) RMDs starting in 2024. Beneficiaries who inherit either account still face payout rules.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Which has better creditor protection?</h3>
              <p className="mt-1">401(k)s carry strong federal ERISA anti-alienation protection; IRAs rely on state law plus up to about $1.5M+ in federal bankruptcy exemption (indexed). Neither shields fraud or federal tax liens.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I borrow from either?</h3>
              <p className="mt-1">Many 401(k)s allow loans up to $50,000 or 50% vested (repaid with interest to yourself, but double-taxed interest and separation risk apply). IRAs never allow loans — any &ldquo;borrowing&rdquo; is a distribution.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Plan menus, matches, and loan
            provisions vary by employer. Read our full{" "}
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
