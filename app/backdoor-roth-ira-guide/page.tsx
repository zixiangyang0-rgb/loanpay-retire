import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Backdoor Roth IRA Guide 2026 (Step by Step) | LoanPay Retire",
  description:
    "Backdoor Roth IRA for 2026: the two-step process, pro-rata rule math, Form 8606, timing mistakes, and who should skip it.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/backdoor-roth-ira-guide",
  },
};

const CHECKLIST = [
  "Confirm you earn too much for direct Roth contributions (single $153K+/joint $242K+ MAGI in 2026).",
  "Empty pre-tax traditional, SEP, and SIMPLE IRA balances first (roll into a 401(k)) to neutralize the pro-rata rule.",
  "Step 1: contribute $7,500 ($8,600 at 50+) nondeductible to a traditional IRA. Don't invest it — use settlement fund.",
  "Step 2: convert to Roth promptly (days later), then file Form 8606 reporting basis.",
  "Leave no earnings behind: convert the full balance including pennies of interest to close the loop.",
  "Repeat yearly; deadlines differ — contributions by April 15, conversions by December 31.",
];

export default function BackdoorPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          High-income Roth &middot; Form 8606
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Backdoor Roth IRA Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Earn too much for a direct Roth? The two-step backdoor — nondeductible
          contribution plus conversion — is fully legal at any income when executed
          cleanly. Here is the exact choreography.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Execution checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">The two steps, precisely</h2>
          <p className="mt-3">
            There is no income limit on nondeductible traditional IRA contributions and no
            income limit on Roth conversions — the backdoor simply chains the two. In
            January, contribute $7,500 to an empty traditional IRA and park it in the
            settlement fund so it earns minimal interest. Days later (no statutory waiting
            period, though custodians vary), convert the full balance to your Roth IRA.
            Because the contribution was after-tax basis, the conversion of basis is
            tax-free; only pennies of interim earnings are taxable. Report it on Form 8606
            (nondeductible IRAs) for the contribution year and Form 1099-R/1040 for the
            conversion year — these often straddle two tax filings when you contribute in
            January–April for the prior year. The income bands that force this route are in
            our{" "}
            <Link href="/roth-ira-income-limits-2026" className="text-amber-200 underline underline-offset-2">
              Roth IRA limits guide
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Backdoor outcomes by pre-tax IRA balance (2026, $7,500 contribution).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Pre-tax IRA balance</th>
                  <th className="px-4 py-3 font-semibold">Tax-free share</th>
                  <th className="px-4 py-3 font-semibold">Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$0</td><td className="px-4 py-2">100%</td><td className="px-4 py-2">Perfect backdoor</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$42,500</td><td className="px-4 py-2">15%</td><td className="px-4 py-2">85% taxable — fix first</td></tr>
                <tr><td className="px-4 py-2">$292,500</td><td className="px-4 py-2">2.5%</td><td className="px-4 py-2">Nearly all taxable</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the pro-rata ambush</h2>
          <p className="mt-3">
            Daniel earns $280,000 and holds a $42,500 pre-tax rollover IRA he forgot about.
            He contributes $7,500 nondeductible and converts $7,500 the next week, expecting
            zero tax. Wrong: the pro-rata rule aggregates all traditional balances on
            December 31 ($42,500 + $7,500 = $50,000) with $7,500 of basis — only 15% of the
            conversion ($1,125) is tax-free; $6,375 is taxable at 35% (~$2,231 wasted) and
            $6,375 of basis lingers in the IRA complicating every future year. The fix,
            done beforehand: roll the $42,500 pre-tax IRA into his current 401(k) (reverse
            rollover, see our{" "}
            <Link href="/ira-rollover-guide" className="text-amber-200 underline underline-offset-2">
              rollover guide
            </Link>
            ), leaving a $0 pre-tax balance and a 100% tax-free conversion. December 31 is
            the snapshot date — even a December contribution counts if pre-tax money sits
            anywhere at year-end. File Form 8606 every year you touch basis; the IRS
            presumes distributions are fully taxable without it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Mistakes, timing, and legislation risk</h2>
          <p className="mt-3">
            Classic errors: investing the contribution for months (creating taxable gains to
            convert), converting only part while leaving basis stranded, contributing
            directly to Roth while over the limit (6% excess tax yearly), and skipping Form
            8606. Timing nuance: a 2026 contribution made in February 2027 is reported on
            2026 Form 8606, but its 2027 conversion lands on the 2027 return — mismatched
            years are normal, not errors. Congress periodically threatens to close the
            backdoor (Build Back Better nearly did in 2021); the strategy is legal today but
            execute yearly rather than banking on decades of availability. For very large
            Roth capacity beyond $7,500, investigate the{" "}
            <Link href="/mega-backdoor-roth-explained" className="text-amber-200 underline underline-offset-2">
              mega backdoor
            </Link>
            , and for deduction-side mechanics see{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . Illustrations only — never guarantees.
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is the backdoor Roth legal?</summary>
              <p className="mt-1">Yes. Congress blessed it explicitly in 2010 by removing conversion income limits, and IRS guidance plus years of Form 8606 processing confirm it. The step-transaction doctrine is occasionally debated but has never prevailed against clean backdoors.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How long must I wait between contribution and conversion?</summary>
              <p className="mt-1">No law sets a waiting period — days suffice once funds settle. Some advisers suggest a statement cycle out of caution, but prompt conversion minimizes taxable interim earnings.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I do it if I have a SEP or SIMPLE IRA?</summary>
              <p className="mt-1">Those balances count in the pro-rata aggregation too. Roll SEP/SIMPLE pre-tax money into a 401(k) first, or skip the backdoor that year.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if I already have commingled basis?</summary>
              <p className="mt-1">File Form 8606 to track basis, consider isolating pre-tax money via reverse rollover (basis cannot enter a 401(k) — only pre-tax dollars move), then resume clean yearly backdoors.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax or financial advice. Confirm Form 8606
            handling in IRS Publication 590-A. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Backdoor Roth IRA Guide 2026 (Step by Step) | LoanPay Retire", description: "Backdoor Roth IRA for 2026: the two-step process, pro-rata rule math, Form 8606, timing mistakes, and who should skip it.", url: "https://retire.loanpaylogic.com/backdoor-roth-ira-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Is the backdoor Roth legal?","answer":"Yes. Congress blessed it explicitly in 2010 by removing conversion income limits, and IRS guidance plus years of Form 8606 processing confirm it. The step-transaction doctrine is occasionally debated but has never prevailed against clean backdoors."},{"question":"How long must I wait between contribution and conversion?","answer":"No law sets a waiting period — days suffice once funds settle. Some advisers suggest a statement cycle out of caution, but prompt conversion minimizes taxable interim earnings."},{"question":"Can I do it if I have a SEP or SIMPLE IRA?","answer":"Those balances count in the pro-rata aggregation too. Roll SEP/SIMPLE pre-tax money into a 401(k) first, or skip the backdoor that year."},{"question":"What if I already have commingled basis?","answer":"File Form 8606 to track basis, consider isolating pre-tax money via reverse rollover (basis cannot enter a 401(k) — only pre-tax dollars move), then resume clean yearly backdoors."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Backdoor Roth IRA Guide 2026 (Step by Step) | LoanPay Retire", url: "https://retire.loanpaylogic.com/backdoor-roth-ira-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
