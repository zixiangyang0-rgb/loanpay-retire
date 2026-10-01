import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IRA Rollover Guide: Direct vs. Indirect | LoanPay Retire",
  description:
    "Roll over a 401(k) to an IRA without taxes or penalties: direct vs. indirect rules, the 60-day clock, withholding, pro-rata and NUA traps.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/ira-rollover-guide",
  },
};

const CHECKLIST = [
  "Prefer direct (trustee-to-trustee) rollovers — no withholding, no 60-day clock, no drama.",
  "Indirect rollovers: you receive the check, 20% is withheld, and you must redeposit the FULL amount within 60 days.",
  "One indirect IRA-to-IRA rollover per 12 months — direct transfers are unlimited.",
  "Never roll Roth 401(k) money into a traditional IRA (or vice versa); match like to like.",
  "Check net unrealized appreciation (NUA) before rolling low-basis company stock.",
  "Roll pre-tax IRA balances into a 401(k) before attempting a backdoor Roth to dodge the pro-rata rule.",
];

export default function RolloverPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Job changes &middot; 60-day clock &middot; NUA
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          IRA Rollover Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Moving 401(k) money to an IRA at a job change or retirement: the two methods,
          the deadlines that trigger taxes, and the three traps (withholding, pro-rata,
          company stock) to sidestep.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Rollover checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Direct vs. indirect: one clear winner</h2>
          <p className="mt-3">
            A direct rollover moves money custodian-to-custodian — often an electronic
            transfer you initiate with two phone calls — with zero withholding and no
            deadline pressure. An indirect rollover puts the check in your hands: the plan
            must withhold 20% for taxes, and you have 60 calendar days to redeposit the
            entire original amount (including the withheld 20% from other savings) into an
            IRA. Miss by a dollar or a day and the shortfall becomes a taxable distribution,
            plus the 10% early-withdrawal penalty if you are under 59½. The IRS grants
            waivers for bank errors and hardships (automatic extensions exist for
            financial-institution mistakes), but prevention beats cure: choose direct.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Rollover methods compared.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Direct rollover</th>
                  <th className="px-4 py-3 font-semibold">Indirect (60-day)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Withholding</td><td className="px-4 py-2">Zero</td><td className="px-4 py-2">20% mandatory</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Deadline</td><td className="px-4 py-2">No deadline</td><td className="px-4 py-2">60 calendar days</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Frequency limit</td><td className="px-4 py-2">Unlimited</td><td className="px-4 py-2">One IRA-to-IRA per 12 months</td></tr>
                <tr><td className="px-4 py-2">Risk rating</td><td className="px-4 py-2">Minimal</td><td className="px-4 py-2">High if under 59½</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $180,000 job change</h2>
          <p className="mt-3">
            Alex leaves a job with $180,000 in a traditional 401(k). Path A (direct): the
            $180,000 lands in a traditional IRA untouched — zero tax, zero withholding,
            invested the next week. Path B (indirect): Alex receives $144,000 with $36,000
            withheld, spends $10,000 of it on moving costs, and redeposits $134,000 within
            60 days. Result: $46,000 becomes a taxable distribution ($36,000 never replaced
            + $10,000 spent), taxed at 24% plus a 10% penalty at age 45 — roughly $15,640
            torched on a &ldquo;convenient&rdquo; detour. Even the clean indirect version
            requires fronting the $36,000 from savings to complete the rollover. If Alex
            instead wants Roth treatment, the correct move is a direct Roth conversion
            (paying tax deliberately, see{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            ), not an accidental indirect fumble. Compare the Roth account choice itself in
            our{" "}
            <Link href="/roth-401k-vs-roth-ira" className="text-amber-200 underline underline-offset-2">
              Roth 401(k) vs. Roth IRA guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Three traps: NUA, pro-rata, and plan quality</h2>
          <p className="mt-3">
            First, net unrealized appreciation: employer stock bought inside the 401(k) for
            $20,000 and now worth $120,000 can be distributed in-kind and taxed at
            long-term capital-gains rates on the $100,000 gain — rolling it into an IRA
            forfeits this forever and converts the gain to ordinary income. Second, the
            pro-rata rule: rolling pre-tax 401(k) money into a traditional IRA contaminates
            future{" "}
            <Link href="/backdoor-roth-ira-guide" className="text-amber-200 underline underline-offset-2">
              backdoor Roths
            </Link>
            , so high earners often do the reverse (IRA into 401(k)) instead. Third, leaving
            money put is sometimes best: 401(k)s carry federal creditor protection, allow
            loans, and unlock the{" "}
            <Link href="/rule-of-55-guide" className="text-amber-200 underline underline-offset-2">
              Rule of 55
            </Link>{" "}
            at separation — IRAs offer none of these. Weigh fund fees, match mechanics, and
            your age before moving a dollar. Outcomes shown are illustrations, never
            guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I roll over or leave my old 401(k)?</h3>
              <p className="mt-1">Leave it if fees are low, you want Rule-of-55 access, or you need pro-rata cleanliness for backdoors. Roll it for consolidation, better funds, or an IRA-based Roth conversion ladder.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are Roth conversions during rollover taxed?</h3>
              <p className="mt-1">Rolling traditional 401(k) to traditional IRA is tax-free; converting either to Roth triggers ordinary income tax on the pre-tax amount. Split the steps — roll first, convert deliberately later.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is the once-per-year rule?</h3>
              <p className="mt-1">You may complete only one indirect IRA-to-IRA 60-day rollover per 12-month period across all IRAs. Direct trustee transfers and 401(k)-to-IRA rollovers are exempt — another reason to go direct.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do RMDs affect rollovers?</h3>
              <p className="mt-1">Yes — any RMD due for the year must be distributed first and cannot be rolled over. Only amounts above the RMD are rollover-eligible.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Rollover eligibility depends on
            plan documents and IRS rules; confirm with both custodians in writing. Read our
            full{" "}
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
