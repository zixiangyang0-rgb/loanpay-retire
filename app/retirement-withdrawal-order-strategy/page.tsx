import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retirement Withdrawal Order Strategy | LoanPay Retire",
  description:
    "Tax-smart withdrawal sequencing: taxable, traditional, Roth — proportional vs. sequential methods, Social Security and IRMAA coordination.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/retirement-withdrawal-order-strategy",
  },
};

const CHECKLIST = [
  "Conventional order: taxable accounts first, then traditional, then Roth — but personalize it.",
  "Fill low brackets yearly: realize income to the top of the 12% (or 22%) band before touching Roth.",
  "Mind the torpedo: traditional withdrawals can drag Social Security into the 85% taxable tier.",
  "Watch IRMAA cliffs: MAGI from two years prior sets Medicare premiums — December Roth conversions bite in 2028.",
  "Bridge years (retire 60, claim 70, RMDs at 73/75) are prime Roth-conversion windows.",
  "Keep 1–2 years of spending in cash so market crashes never force stock sales.",
];

export default function WithdrawalOrderPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Decumulation &middot; taxable / traditional / Roth
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Retirement Withdrawal Order Strategy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Which account you tap each year can swing lifetime taxes by six figures. The
          conventional sequence, when to break it, and how Social Security, RMDs, and
          Medicare premiums reshape the order.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Sequencing checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The conventional order and its logic</h2>
          <p className="mt-3">
            Spend taxable brokerage dollars first: cost basis comes out tax-free and gains
            enjoy preferential capital-gains rates, while traditional and Roth balances
            keep compounding in their shelters. Next, traditional IRA/401(k) withdrawals —
            each dollar taxed as ordinary income — ideally metered to fill lower brackets
            without wasting them. Roth last: untouched Roth dollars compound longest and
            serve as the emergency pool (no RMDs, no provisional-income impact, no IRMAA
            impact). This textbook order minimizes lifetime tax for many households, but
            blind adherence wastes the 0%, 10%, and 12% brackets whenever taxable spending
            alone leaves them unfilled — dollars taxed at 0–12% via strategic traditional
            withdrawals or Roth conversions beat dollars withdrawn at 22–24% later.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Where each dollar comes from, and what it costs.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">Tax character</th>
                  <th className="px-4 py-3 font-semibold">Side effects</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Taxable brokerage</td><td className="px-4 py-2">Basis free; gains 0/15/20%</td><td className="px-4 py-2">Raises MAGI modestly</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Traditional</td><td className="px-4 py-2">Ordinary income rates</td><td className="px-4 py-2">Lifts SS tax, IRMAA, RMDs</td></tr>
                <tr><td className="px-4 py-2">Roth / HSA medical</td><td className="px-4 py-2">Tax-free qualified</td><td className="px-4 py-2">None — the clean dollar</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the 62-to-73 bridge</h2>
          <p className="mt-3">
            Tom retires at 62 with $400,000 taxable, $700,000 traditional, $200,000 Roth,
            delaying Social Security to 70. Years 62–72 he spends $70,000 yearly: $30,000
            from taxable (basis plus 0%-bracket gains) and converts $40,000 of traditional
            to Roth annually, filling the 12% bracket at roughly $4,800 tax. Eleven years
            of conversions shift ~$440,000 (plus growth avoided) out of the RMD base at
            12% instead of the 22–24% those dollars would have faced as RMDs stacked atop
            Social Security — lifetime savings near $50,000, with smaller RMDs easing the{" "}
            <Link href="/social-security-taxation-guide" className="text-amber-200 underline underline-offset-2">
              Social Security tax torpedo
            </Link>{" "}
            and IRMAA exposure (see our{" "}
            <Link href="/medicare-premiums-2026-guide" className="text-amber-200 underline underline-offset-2">
              Medicare premiums guide
            </Link>
            ). At 70 Social Security starts, at 73–75 RMDs begin on a shrunken balance, and
            Roth covers lumpy costs (roof, car) without bracket spikes. Estimate the RMD
            side anytime with our{" "}
            <Link href="/rmd-calculator" className="text-amber-200 underline underline-offset-2">
              RMD calculator
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Proportional methods and guardrails</h2>
          <p className="mt-3">
            Research (notably Kitces and Cook) finds proportional withdrawals — taking each
            year&apos;s spending pro-rata across account types to hold a steady marginal
            rate — often beats rigid sequential order by smoothing brackets over decades.
            Dynamic guardrails layer on top: in down years fund spending from cash and Roth
            (no tax, no selling low); in up years harvest gains and convert aggressively.
            QCDs after 70½ route RMDs to charity outside AGI entirely — the highest-leverage
            charitable move in the code. Beware December surprises: mutual-fund capital-gain
            distributions, unexpected RMD aggregation errors, and Roth conversions all land
            in one tax year and echo into IRMAA two years later. The conversion mechanics
            behind bracket-filling are detailed at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            , and spending-rate guardrails pair with our{" "}
            <Link href="/4-percent-rule-explained" className="text-amber-200 underline underline-offset-2">
              4% rule guide
            </Link>
            . All illustrations are hypothetical — never guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should Roth really go last?</h3>
              <p className="mt-1">Usually — but not for bracket management. Spending some Roth early to avoid the 22%+ brackets, IRMAA cliffs, or Social Security taxation often beats hoarding it while paying high rates on traditional dollars.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do RMDs fit the sequence?</h3>
              <p className="mt-1">RMDs are mandatory traditional withdrawals that override any plan — take them first each year (they cannot be converted), then layer voluntary withdrawals and conversions around them.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What about HSA dollars?</h3>
              <p className="mt-1">Spend HSA dollars on medical costs (including Medicare premiums) tax-free alongside Roth for lifestyle costs — see our HSA strategy guide. Non-medical HSA withdrawals after 65 work like traditional dollars.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does the surviving spouse change the order?</h3>
              <p className="mt-1">Yes — single-filer brackets are half as wide, so the survivor often faces higher rates on the same RMDs. Accelerating traditional withdrawals and conversions while both spouses are alive is classic survivor-aware planning.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Optimal sequencing depends on
            balances, ages, and future law. Read our full{" "}
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
