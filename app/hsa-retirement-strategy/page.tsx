import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "HSA Retirement Strategy: Triple Tax Power | LoanPay Retire",
  description:
    "Use an HSA for retirement: 2026 limits ($4,400/$8,750), investing the balance, the shoebox receipt method, and Medicare coordination.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/hsa-retirement-strategy",
  },
};

const CHECKLIST = [
  "2026 HSA limits: $4,400 self-only, $8,750 family, plus $1,000 catch-up at 55+ per spouse with own account.",
  "Triple edge: deductible contributions, tax-free growth, tax-free withdrawals for qualified medical costs.",
  "Invest the balance beyond a cash buffer — HSAs are retirement accounts wearing a medical mask.",
  "Pay today's medical bills from cash, save receipts, and reimburse yourself decades later (the shoebox method).",
  "At 65, non-medical withdrawals work like traditional IRA distributions (taxed, no penalty).",
  "Stop HSA contributions 6 months before Medicare at 65+ to avoid excess-contribution penalties.",
];

export default function HsaPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          HSA &middot; $4,400 / $8,750 &middot; triple tax
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          HSA Retirement Strategy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The only triple-tax-advantaged account in America: how healthy savers turn a
          medical account into a shadow Roth IRA for retirement.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Strategy checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Why the HSA beats both IRA flavors</h2>
          <p className="mt-3">
            No other account combines a deduction on the way in, tax-free growth, and
            tax-free withdrawals: traditional IRAs tax the exit, Roth IRAs deny the
            entrance deduction. For 2026, self-only coverage allows $4,400 and family
            coverage $8,750, with a $1,000 catch-up at 55+ (per spouse, requiring separate
            accounts for couples). Payroll contributions additionally skip FICA taxes — a
            7.65% instant bonus neither IRA can match. Eligibility demands a qualifying
            high-deductible health plan (2026 minimums roughly $1,700 self / $3,400 family
            deductible) with no disqualifying coverage like a general-purpose FSA. Funds
            roll over forever — unlike FSAs, nothing is forfeited — so the HSA doubles as a
            decades-long compounder.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                HSA vs. IRAs at a glance (2026).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">HSA</th>
                  <th className="px-4 py-3 font-semibold">Traditional / Roth IRA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Deduction</td><td className="px-4 py-2">Yes + skips FICA via payroll</td><td className="px-4 py-2">Traditional yes / Roth no</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">2026 family capacity</td><td className="px-4 py-2">$8,750 (+$1,000 × 2 at 55+)</td><td className="px-4 py-2">$7,500 (+$1,100) per person</td></tr>
                <tr><td className="px-4 py-2">Medical withdrawals</td><td className="px-4 py-2">Tax-free anytime with receipts</td><td className="px-4 py-2">No special treatment</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $300,000 shoebox</h2>
          <p className="mt-3">
            The Nguyens, both 40, hold family HDHP coverage and contribute the $8,750
            maximum yearly while paying $6,000 of annual medical costs from checking —
            scanning every receipt into a &ldquo;shoebox&rdquo; folder. Over 25 years at a
            hypothetical 6% growth, contributions alone total $218,750 and compounding
            lifts the account toward $450,000+. In retirement they reimburse themselves
            $150,000+ tax-free against decades of saved receipts (no deadline on
            reimbursement under current rules), use $100,000+ for Medicare premiums and
            future medical bills tax-free, and treat any remainder after 65 like a
            traditional IRA for general spending. Had they instead spent the HSA yearly and
            invested in taxable, the same dollars would face annual tax drag plus
            capital-gains tax on exit. Keep HDHP math honest though: a chronically ill
            family may pay more in deductibles than the tax edge saves — run your own
            numbers, and see our{" "}
            <Link href="/healthcare-costs-in-retirement" className="text-amber-200 underline underline-offset-2">
              healthcare costs guide
            </Link>{" "}
            for the retirement medical budget this strategy funds. Projections are
            hypothetical, never guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Medicare tripwires and coordination</h2>
          <p className="mt-3">
            Enrolling in Medicare (even premium-free Part A) kills HSA eligibility instantly
            — and Part A backdates six months past 65 when you claim Social Security late,
            retroactively creating excess contributions taxed 6% yearly until removed. Stop
            contributions at least six months before Medicare begins. Spouses need separate
            HSA accounts for each $1,000 catch-up; one family account cannot hold both.
            After 65, non-medical withdrawals are taxed like IRA distributions with no
            penalty — a fine backup, but medical use (including Medicare
            premiums except Medigap) stays tax-free, so spend taxable and Roth dollars for
            lifestyle and reserve HSA dollars for health. Recordkeeping is the strategy:
            IRS requires proof each reimbursement matches a qualified expense incurred
            after the HSA opened. The IRA contribution rules interacting with HSA cash flow
            are mapped at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            .
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I invest my HSA?</summary>
              <p className="mt-1">Yes — most custodians offer mutual funds and ETFs once you pass a $1,000–$2,000 cash threshold. An HSA left in cash for decades forfeits the strategy&apos;s compounding engine.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What counts as a qualified expense?</summary>
              <p className="mt-1">Deductibles, copays, dental, vision, prescriptions, and (after 65) Medicare premiums except Medigap. Cosmetic procedures, general toiletries, and most supplements do not qualify — see IRS Publication 502.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is there a reimbursement deadline?</summary>
              <p className="mt-1">None under current rules — a 2026 expense may be reimbursed tax-free in 2056 if you keep proof and the HSA existed when the expense occurred. Legislation could change this, so digitize receipts now.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What happens to my HSA at death?</summary>
              <p className="mt-1">A spouse beneficiary inherits it as their own HSA (tax-free). Non-spouse beneficiaries receive it as taxable income in one year — spend or convert strategically late in life.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. HSA figures follow IRS 2026
            announcements; confirm HDHP qualification yearly. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "HSA Retirement Strategy: Triple Tax Power | LoanPay Retire", description: "Use an HSA for retirement: 2026 limits ($4,400/$8,750), investing the balance, the shoebox receipt method, and Medicare coordination.", url: "https://retire.loanpaylogic.com/hsa-retirement-strategy" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Can I invest my HSA?","answer":"Yes — most custodians offer mutual funds and ETFs once you pass a $1,000–$2,000 cash threshold. An HSA left in cash for decades forfeits the strategy's compounding engine."},{"question":"What counts as a qualified expense?","answer":"Deductibles, copays, dental, vision, prescriptions, and (after 65) Medicare premiums except Medigap. Cosmetic procedures, general toiletries, and most supplements do not qualify — see IRS Publication 502."},{"question":"Is there a reimbursement deadline?","answer":"None under current rules — a 2026 expense may be reimbursed tax-free in 2056 if you keep proof and the HSA existed when the expense occurred. Legislation could change this, so digitize receipts now."},{"question":"What happens to my HSA at death?","answer":"A spouse beneficiary inherits it as their own HSA (tax-free). Non-spouse beneficiaries receive it as taxable income in one year — spend or convert strategically late in life."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "HSA Retirement Strategy: Triple Tax Power | LoanPay Retire", url: "https://retire.loanpaylogic.com/hsa-retirement-strategy" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
