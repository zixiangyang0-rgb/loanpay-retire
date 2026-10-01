import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "COLA & Social Security 2026: 2.8% Raise Guide | LoanPay Retire",
  description:
    "2026 Social Security COLA is 2.8%: new average checks, earnings-test limits, $184,500 wage base, Medicare interplay, and tax effects.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/cola-social-security-2026",
  },
};

const CHECKLIST = [
  "2026 COLA: 2.8% — the average retired-worker check rises roughly $60/month (about $2,070 to $2,130).",
  "Maximum family and disability figures rise proportionally; SSI federal base also up 2.8%.",
  "Taxable wage base: $184,500 — earnings above it escape Social Security tax (Medicare tax has no cap).",
  "Earnings test (under FRA, working while claiming): roughly $23,400–$24,000 exempt; SSA confirms yearly.",
  "Medicare Part B ($202.90) absorbs part of the raise — net checks grow less than 2.8% for most.",
  "COLAs compound: 2.8% on a COLA-lifted base permanently raises every future check.",
];

export default function ColaPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          COLA 2026 &middot; +2.8% &middot; wage base $184,500
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          COLA &amp; Social Security 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The 2.8% cost-of-living adjustment, what it does to checks, the earnings test
          for working claimants, and why the raise can still leave you behind on taxes
          and Medicare.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">2026 COLA checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">How the 2.8% is built</h2>
          <p className="mt-3">
            The COLA keys off the CPI-W (urban wage-earner inflation) for July–September
            versus the prior year — the 2026 figure of 2.8% reflects 2025&apos;s cooling
            inflation after the 8.7% spike of 2023 and 3.2% of 2024–2025. Applied in
            January 2026, it lifts the average retired-worker benefit from roughly $2,070
            to about $2,130 monthly (~$720 yearly), with spousal, survivor, disability,
            and SSI payments rising proportionally. Because COLAs compound on prior COLAs,
            the 2023–2026 sequence permanently raised benefit bases ~18% above 2022 —
            meaningful inflation defense, though seniors&apos; actual costs (healthcare,
            housing) often outrun CPI-W&apos;s basket. Claiming-age strategy around these
            checks is covered in our{" "}
            <Link href="/when-to-take-social-security" className="text-amber-200 underline underline-offset-2">
              claiming guide
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Recent COLAs and the wage base (SSA).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Year</th>
                  <th className="px-4 py-3 font-semibold">COLA</th>
                  <th className="px-4 py-3 font-semibold">Taxable wage base</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">2024</td><td className="px-4 py-2">3.2%</td><td className="px-4 py-2">$168,600</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">2025</td><td className="px-4 py-2">2.5%</td><td className="px-4 py-2">$176,100</td></tr>
                <tr><td className="px-4 py-2">2026</td><td className="px-4 py-2">2.8%</td><td className="px-4 py-2">$184,500</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the raise that shrinks</h2>
          <p className="mt-3">
            Margaret&apos;s 2025 check is $2,000; the 2.8% COLA adds $56 ($2,056). But her
            Part B premium rises to $202.90 (up ~$17 from 2025&apos;s ~$185.90), netting
            ~$39. Then the extra $672 yearly lifts provisional income, pushing a bigger
            slice of her benefit into the 85% taxable tier — at 22% that claws back ~$148
            more in tax (see our{" "}
            <Link href="/social-security-taxation-guide" className="text-amber-200 underline underline-offset-2">
              taxation guide
            </Link>
            ). Net spendable gain: roughly $25 monthly, less than half the headline $56.
            Workers face the mirror effect: the wage base jump to $184,500 means a $190,000
            earner pays 6.2% Social Security tax on $8,400 more of pay (~$521 extra). And
            hold-harmless protects most existing claimants from Part B increases exceeding
            their COLA dollars — new enrollees and high earners lack that shield (see our{" "}
            <Link href="/medicare-premiums-2026-guide" className="text-amber-200 underline underline-offset-2">
              Medicare premiums guide
            </Link>
            ). Illustrations only — individual results vary; nothing here is guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Earnings test, wage base, and planning</h2>
          <p className="mt-3">
            Claiming before full retirement age while working triggers the earnings test:
            SSA withholds $1 per $2 earned above the annual exempt amount (recently about
            $23,400, rising yearly; ~$62,000+ in the year you reach FRA with $1-per-$3
            treatment). Withheld benefits are credited back at FRA — a timing shift, not a
            loss — but the cash-flow gap surprises many. The $184,500 wage base matters
            for workers: 6.2% employee plus 6.2% employer tax applies up to it (self-employed
            pay both halves to the same cap), while the 1.45% Medicare tax plus 0.9%
            additional tax above $200,000/$250,000 has no ceiling. High earners near the
            base should verify payroll stops withholding Social Security tax on schedule —
            over-withholding across two employers is refundable via Form 1040 Schedule 3.
            The IRA contribution rules pairing with late-career earnings are mapped at{" "}
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
              <summary className="cursor-pointer font-semibold text-white">When does the 2026 COLA hit my check?</summary>
              <p className="mt-1">January 2026 for Social Security (paid in January); SSI payments reflect it in late December 2025. Notices arrive by mail and in my Social Security accounts in December.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does the COLA apply if I delay to 70?</summary>
              <p className="mt-1">Yes — COLAs accrue on your benefit formula even before you claim, so delaying to 70 stacks delayed credits on top of every intervening COLA. Waiting never forfeits inflation adjustments.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Will the earnings test reduce my lifetime benefit?</summary>
              <p className="mt-1">No — withheld amounts are recalculated into higher monthly benefits at FRA. The test shifts timing; only earned income above the exempt amount in pre-FRA years triggers withholding.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does everyone get the same COLA dollars?</summary>
              <p className="mt-1">Same percentage, different dollars — 2.8% of a $3,000 check is $84; of a $1,200 check, $33.60. Lower earners feel inflation most while gaining the fewest COLA dollars.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Confirm COLA and earnings-test
            figures with SSA announcements. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "COLA & Social Security 2026: 2.8% Raise Guide | LoanPay Retire", description: "2026 Social Security COLA is 2.8%: new average checks, earnings-test limits, $184,500 wage base, Medicare interplay, and tax effects.", url: "https://retire.loanpaylogic.com/cola-social-security-2026" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"When does the 2026 COLA hit my check?","answer":"January 2026 for Social Security (paid in January); SSI payments reflect it in late December 2025. Notices arrive by mail and in my Social Security accounts in December."},{"question":"Does the COLA apply if I delay to 70?","answer":"Yes — COLAs accrue on your benefit formula even before you claim, so delaying to 70 stacks delayed credits on top of every intervening COLA. Waiting never forfeits inflation adjustments."},{"question":"Will the earnings test reduce my lifetime benefit?","answer":"No — withheld amounts are recalculated into higher monthly benefits at FRA. The test shifts timing; only earned income above the exempt amount in pre-FRA years triggers withholding."},{"question":"Does everyone get the same COLA dollars?","answer":"Same percentage, different dollars — 2.8% of a $3,000 check is $84; of a $1,200 check, $33.60. Lower earners feel inflation most while gaining the fewest COLA dollars."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "COLA & Social Security 2026: 2.8% Raise Guide | LoanPay Retire", url: "https://retire.loanpaylogic.com/cola-social-security-2026" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
