import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Catch-Up Contributions After 50 (2026 Rules) | LoanPay Retire",
  description:
    "2026 catch-up rules: $8,000 at 50+, $11,250 super catch-up at 60–63, $1,100 IRA catch-up, Roth mandates, and how to use them.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/catch-up-contributions-after-50",
  },
};

const CHECKLIST = [
  "Age 50+ in 2026: add $8,000 to 401(k)/403(b)/457 for a $32,500 employee total.",
  "Ages 60–63 in 2026: the super catch-up is $11,250 ($35,750 total) — it replaces the $8,000, not stacks.",
  "IRA catch-up at 50+: $1,100 for 2026 ($8,600 combined IRA total) — now indexed to inflation.",
  "High earners ($145,000+ prior-year wages): catch-ups must be Roth under SECURE 2.0.",
  "SIMPLE plans: $4,000 standard catch-up ($5,250 at 60–63); certain plans use $3,850/$18,100 variants.",
  "Eligibility keys off turning the age any time in the calendar year — December birthdays count.",
];

export default function CatchUpPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          50+ savers &middot; $8,000 / $11,250 / $1,100
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Catch-Up Contributions After 50
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Congress lets savers 50 and older stash extra thousands each year — and 60–63 gets
          an even bigger slot. Here are the 2026 amounts, the Roth strings attached, and how
          to actually use them.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">2026 catch-up checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Every catch-up amount for 2026</h2>
          <p className="mt-3">
            The standard 401(k)-family catch-up rose to $8,000 for 2026, so a 55-year-old may
            defer $24,500 + $8,000 = $32,500 as an employee, plus employer money up to the
            $80,000 combined ceiling. The headline innovation is SECURE 2.0&apos;s ages-60–63
            tier at $11,250 — $35,750 employee total, $83,250 combined. IRAs finally joined
            inflation indexing: the 50+ IRA catch-up is $1,100 for 2026 ($8,600 total),
            ending decades frozen at $1,000. SIMPLE IRA participants get $4,000 ($21,000
            total), or $5,250 at 60–63.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 catch-up contributions by plan (IRS Notice 2025-67).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Plan</th>
                  <th className="px-4 py-3 font-semibold">Base limit</th>
                  <th className="px-4 py-3 font-semibold">50+ total</th>
                  <th className="px-4 py-3 font-semibold">60–63 total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">401(k) / 403(b) / gov 457</td><td className="px-4 py-2">$24,500</td><td className="px-4 py-2">$32,500</td><td className="px-4 py-2">$35,750</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Traditional + Roth IRA</td><td className="px-4 py-2">$7,500</td><td className="px-4 py-2">$8,600</td><td className="px-4 py-2">$8,600</td></tr>
                <tr><td className="px-4 py-2">SIMPLE IRA</td><td className="px-4 py-2">$17,000</td><td className="px-4 py-2">$21,000</td><td className="px-4 py-2">$22,250</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: four years at $35,750</h2>
          <p className="mt-3">
            Robert turns 60 in March 2026, earning $200,000. Over 2026–2029 (ages 60–63) he
            defers the full $35,750 each year: $143,000 of employee contributions in four
            years, versus $98,000 had only the $24,500 base existed — a $45,000 head start
            before any growth or match. Because his prior-year wages exceed $145,000, his
            catch-up dollars must be Roth, so he pays tax now at 32% but banks tax-free growth
            with no future RMDs on that slice. At 64 the window closes and he reverts to the
            $8,000 tier. Contrast his wife Linda, 57: she uses the standard $32,500 tier, and
            with wages under $145,000 she may keep her catch-up pre-tax. The couple&apos;s
            combined 2026 employee capacity is $68,250 — coordination beats either spouse
            optimizing alone. Full plan limits live in our{" "}
            <Link href="/401k-contribution-limits-2026" className="text-amber-200 underline underline-offset-2">
              401(k) limits guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Roth mandates and practical pitfalls</h2>
          <p className="mt-3">
            The Roth catch-up mandate surprises high earners: if your prior-year FICA wages
            from the current employer topped $145,000 (indexed), 2026 catch-ups must be
            designated Roth — no Roth option in the plan means no catch-up at all, so lobby HR
            early. A second pitfall is payroll pacing: spreading contributions across all 26
            pay periods protects per-paycheck matches, while front-loading risks missing match
            dollars unless the plan true-ups. Third, two-job savers must track the single
            $24,500 deferral cap across employers themselves — payroll systems do not talk to
            each other. And remember catch-ups never excuse the IRA phase-outs: a $300,000
            earner&apos;s $8,600 IRA contribution must still be nondeductible or backdoor —
            see the income bands at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>{" "}
            and our{" "}
            <Link href="/backdoor-roth-ira-guide" className="text-amber-200 underline underline-offset-2">
              backdoor Roth walkthrough
            </Link>
            . None of these illustrations guarantee outcomes; they show capacity, not results.
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">I turn 50 in December 2026 — do I qualify?</summary>
              <p className="mt-1">Yes. Eligibility keys off attaining the age any time during the calendar year, so December birthdays get the full $8,000 (or $1,100 IRA) slot for all of 2026.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does the $11,250 stack with the $8,000?</summary>
              <p className="mt-1">No — at 60–63 you get the higher $11,250 instead of the $8,000. Your 2026 employee ceiling is $35,750, not $43,750.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can my employer match catch-ups?</summary>
              <p className="mt-1">Matching formulas generally apply to all deferrals including catch-ups, subject to the $72,000–$83,250 total ceilings and the plan&apos;s own match cap. Check your summary plan description.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What about HSA catch-ups?</summary>
              <p className="mt-1">HSAs keep a separate $1,000 catch-up at 55+ (not 50+), per account holder — a 60-year-old couple with family coverage can add $2,000 total. See our HSA strategy guide.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Catch-up figures follow IRS 2026
            announcements; confirm Roth-catch-up administration with your plan. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Catch-Up Contributions After 50 (2026 Rules) | LoanPay Retire", description: "2026 catch-up rules: $8,000 at 50+, $11,250 super catch-up at 60–63, $1,100 IRA catch-up, Roth mandates, and how to use them.", url: "https://retire.loanpaylogic.com/catch-up-contributions-after-50" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"I turn 50 in December 2026 — do I qualify?","answer":"Yes. Eligibility keys off attaining the age any time during the calendar year, so December birthdays get the full $8,000 (or $1,100 IRA) slot for all of 2026."},{"question":"Does the $11,250 stack with the $8,000?","answer":"No — at 60–63 you get the higher $11,250 instead of the $8,000. Your 2026 employee ceiling is $35,750, not $43,750."},{"question":"Can my employer match catch-ups?","answer":"Matching formulas generally apply to all deferrals including catch-ups, subject to the $72,000–$83,250 total ceilings and the plan's own match cap. Check your summary plan description."},{"question":"What about HSA catch-ups?","answer":"HSAs keep a separate $1,000 catch-up at 55+ (not 50+), per account holder — a 60-year-old couple with family coverage can add $2,000 total. See our HSA strategy guide."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Catch-Up Contributions After 50 (2026 Rules) | LoanPay Retire", url: "https://retire.loanpaylogic.com/catch-up-contributions-after-50" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
