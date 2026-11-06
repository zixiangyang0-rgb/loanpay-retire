import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "When to Take Social Security Calculator: 62 vs. 67 vs. 70 Break-Even | LoanPay Retire",
  description:
    "Use the when-to-take Social Security calculator logic: compare 62 vs. 67 vs. 70, find your break-even age near 78-82, and adjust for health, work, taxes, and survivor benefits.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/when-to-take-social-security-calculator",
  },
};

const CHECKLIST = [
  "Enter your primary insurance amount (PIA): the monthly benefit you would get at full retirement age (FRA).",
  "FRA is 67 for anyone born 1960 or later; claiming at 62 cuts benefits up to 30% for life.",
  "Delayed retirement credits add about 8% per year past FRA until age 70; nothing accrues after 70.",
  "The lifetime break-even between claiming at 62 and waiting to 70 usually lands near age 78-82.",
  "Adjust the raw math for health, work plans, taxes, spousal benefits, and survivor protection.",
  "Use the result as longevity insurance guidance, not a market prediction: longer life favors delay.",
];

const FAQS = [
  {
    question: "What is the break-even age for 62 vs. 70?",
    answer:
      "With a full retirement age of 67, the cumulative lifetime benefits of claiming at 62 versus 70 typically cross around age 80 to 82 before discounting. Live longer and delaying wins by tens of thousands of dollars; shorter life expectancy favors the early claim. Our worked example below shows the exact arithmetic on a $2,400 PIA.",
  },
  {
    question: "Is 67 ever the best claiming age?",
    answer:
      "Yes. Full retirement age avoids both the early-claim reduction and the earnings test, keeps spousal add-ons at their full 50% of PIA baseline, and simplifies coordination with retirement and Medicare at 65. For people in average health who keep working into their mid-60s, 67 is often the low-regret middle path between the age-62 cash-flow win and the age-70 longevity win.",
  },
  {
    question: "How does working change the calculator result?",
    answer:
      "If you claim before FRA while earning above the annual exempt amount, SSA withholds $1 for every $2 over the limit and recalculates your benefit higher at FRA. The calculator should treat withheld months as a delay, not a loss. In practice, many workers do better by waiting until earnings stop or FRA rather than filing early and triggering the test.",
  },
  {
    question: "Do taxes or COLAs flip the answer?",
    answer:
      "They narrow the gap but rarely flip it. Cost-of-living adjustments apply to whatever base you locked in, so delaying compounds a larger base. Larger checks can push more of your benefit into the 50% or 85% taxable tiers and raise Medicare IRMAA two years later, which trims the age-70 advantage by a few percent but almost never erases it for a long-lived claimant.",
  },
  {
    question: "What should couples enter differently?",
    answer:
      "Run the higher earner and lower earner separately, then prioritize the higher benefit for delay: the survivor eventually keeps the larger of the two checks, including delayed credits. Often the optimal pair is lower earner at 62 to 67 for cash flow plus higher earner at 70 for survivor protection. See our main timing guide linked below for the full couples playbook.",
  },
];

export default function WhenToTakeSocialSecurityCalculatorPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Social Security &middot; 62 / 67 / 70 &middot; break-even
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          When to Take Social Security Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Compare claiming at 62, full retirement age, and 70 on one consistent math
          base: monthly checks, cumulative lifetime totals, and the break-even ages
          where delaying pulls ahead.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Calculator checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">How this break-even calculator works</h2>
          <p className="mt-3">
            Every honest claiming comparison starts from the same input: your primary
            insurance amount, or PIA. That is the monthly benefit Social Security would
            pay if you filed exactly at full retirement age, computed from your 35
            highest-earning years with wage indexing. You can find it on your my Social
            Security statement. From there the calculator applies two mechanical rules.
            File before FRA and SSA reduces benefits by 5/9 of 1% per month for the first
            36 months early plus 5/12 of 1% for any earlier months. At an FRA of 67 that
            turns age 62 into 70% of PIA for life. File after FRA and delayed retirement
            credits add 8% of PIA per year until 70, which turns waiting from 67 to 70
            into 124% of PIA. No credits accrue after 70, so filing later than 70 only
            forfeits checks you could have received.
          </p>
          <p className="mt-3">
            The second step is cumulation. The calculator multiplies each monthly check by
            months received and finds where the lifetime totals cross. Because the early
            claimer banks years of extra checks first, the late claimer needs many years of
            higher payments to catch up. That crossover is the break-even age. On a plain
            nominal-dollar basis with no discounting, 62 versus 70 crosses near 80, 62
            versus 67 crosses near 78, and 67 versus 70 crosses near 82. Add a real discount
            rate for the time value of money and each crossover moves roughly one to three
            years later, because future higher checks are worth slightly less today. Add
            expected cost-of-living adjustments and the crossovers barely move, since COLAs
            scale every path proportionally off its own base. If you want the narrative
            version of these trade-offs alongside the numbers, start with our{" "}
            <Link href="/when-to-take-social-security" className="text-amber-200 underline underline-offset-2">
              when to take Social Security guide on 62 vs. 67 vs. 70
            </Link>
            , then return here to test your own PIA.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Monthly benefit and cumulative totals on a $2,400 PIA, FRA 67, no discounting.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Claiming age</th>
                  <th className="px-4 py-3 font-semibold">Monthly check</th>
                  <th className="px-4 py-3 font-semibold">Collected by 75</th>
                  <th className="px-4 py-3 font-semibold">Collected by 85</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">62 (70% of PIA)</td><td className="px-4 py-2">$1,680</td><td className="px-4 py-2">$262,080</td><td className="px-4 py-2">$463,680</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">67 (100% of PIA)</td><td className="px-4 py-2">$2,400</td><td className="px-4 py-2">$230,400</td><td className="px-4 py-2">$518,400</td></tr>
                <tr><td className="px-4 py-2">70 (124% of PIA)</td><td className="px-4 py-2">$2,976</td><td className="px-4 py-2">$178,560</td><td className="px-4 py-2">$535,680</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: $2,400 PIA at 62 vs. 67 vs. 70</h2>
          <p className="mt-3">
            Take Maya with a $2,400 PIA at FRA 67. Claiming at 62 pays $1,680 per month.
            Claiming at 67 pays $2,400. Waiting to 70 pays $2,976. The early claimer
            collects 96 checks before age 70 worth $161,280, then trails the age-70 claim
            by $1,296 per month. Divide $161,280 by $1,296 and the catch-up takes about
            124 months, landing the lifetime crossover just past age 80. Against the FRA
            claim the math is tighter: the age-62 claim banks $1,680 times 60 months, or
            $100,800, before 67, then trails by $720 monthly, so $100,800 divided by $720
            is 140 months, crossing near age 78 to 79. The FRA-versus-70 race starts at 70
            with the FRA claim ahead by $2,400 times 36 months, or $86,400, then trails by
            $576 monthly, so $86,400 divided by $576 is 150 months, crossing near age 82
            to 83. These three crossovers are why planners quote a 78 to 83 band rather
            than one magic birthday.
          </p>
          <p className="mt-3">
            Longevity decides which side of the band matters to you. In average health with
            average family longevity, the expected lifetime gap between best and worst of
            the three ages is often smaller than people fear, roughly $20,000 to $60,000 in
            nominal dollars on this PIA. In long-lived families the gap explodes in favor
            of delay: every year past 82 pays an extra $15,552 per year over the early
            claim on this example. In poor health the reverse holds, and liquidity needs
            can dominate entirely. Taxes refine but rarely reverse the ranking: read our{" "}
            <Link href="/social-security-taxation-guide" className="text-amber-200 underline underline-offset-2">
              Social Security taxation guide
            </Link>{" "}
            to see when the 50% and 85% inclusion tiers shave the age-70 edge, and our{" "}
            <Link href="/cola-social-security-2026" className="text-amber-200 underline underline-offset-2">
              2026 COLA guide
            </Link>{" "}
            for how this year&apos;s adjustment scales each path. Figures are illustrations, never guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Adjustments the simple math misses</h2>
          <p className="mt-3">
            Four real-world frictions move the calculator answer. First, the retirement
            earnings test: claim before FRA while working above the exempt amount and SSA
            withholds $1 for every $2 over the limit, recalculating benefits higher at
            FRA. Withheld benefits are not destroyed, but the cash-flow timing surprise
            makes early filing while working full-time rarely optimal. Second, spousal and
            survivor mechanics. Spousal add-ons top out at 50% of the worker&apos;s PIA and
            never earn delayed credits, so a lower-earning spouse often gains little from
            waiting past FRA. Survivor benefits are the opposite: the surviving spouse
            keeps the larger of the two checks including delayed credits, which makes the
            higher earner&apos;s delay the cheapest longevity insurance a couple can buy.
            Third, taxes and Medicare. Larger checks can push provisional income over the
            thresholds that make up to 85% of benefits taxable and can lift modified
            adjusted gross income into IRMAA surcharge territory two years later. High
            earners should coordinate claiming with Roth conversions in the low-income gap
            years before required minimum distributions begin; our{" "}
            <Link href="/rmd-calculator" className="text-amber-200 underline underline-offset-2">
              RMD calculator
            </Link>{" "}
            helps size those future withdrawals. Fourth, discounting and COLAs. A 1% to 3%
            real discount rate pushes each break-even one to three years later, while COLAs
            leave rankings almost unchanged because they multiply every base equally.
            Enter your own numbers conservatively: assume average COLAs, a modest discount
            rate, and honest life expectancy, not wishful thinking.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <summary className="cursor-pointer font-semibold text-white">{faq.question}</summary>
                <p className="mt-1">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
            <li>
              <Link className="underline" href="/when-to-take-social-security">When to Take Social Security: 62 vs. 67 vs. 70</Link> — the flagship timing guide with benefit math and break-even ages.
            </li>
            <li>
              <Link className="underline" href="/social-security-taxation-guide">Social Security Taxation Guide</Link> — the 0% / 50% / 85% inclusion tiers and how to shrink them.
            </li>
            <li>
              <Link className="underline" href="/cola-social-security-2026">COLA &amp; Social Security 2026</Link> — this year&apos;s cost-of-living adjustment, earnings test, and wage base.
            </li>
            <li>
              <Link className="underline" href="/rmd-calculator">RMD Calculator</Link> — estimate required withdrawals so gap-year Roth conversions dodge the tax torpedo.
            </li>
          </ul>
        </nav>
        <section aria-label="Official sources" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Official sources</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
            <li>
              <a href="https://www.ssa.gov/benefits/retirement/" className="underline">Social Security Retirement Benefits (ssa.gov)</a> — official benefit estimates, COLA notices, and earnings-test limits.
            </li>
            <li>
              <a href="https://www.investor.gov/" className="underline">Investor.gov (SEC)</a> — unbiased retirement and investing education.
            </li>
          </ul>
        </section>
        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Verify your estimate with a
            my Social Security statement. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "When to Take Social Security Calculator: 62 vs. 67 vs. 70 Break-Even | LoanPay Retire", description: "Use the when-to-take Social Security calculator logic: compare 62 vs. 67 vs. 70, find your break-even age near 78-82, and adjust for health, work, taxes, and survivor benefits.", url: "https://retire.loanpaylogic.com/when-to-take-social-security-calculator" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "When to Take Social Security Calculator: 62 vs. 67 vs. 70 Break-Even | LoanPay Retire", url: "https://retire.loanpaylogic.com/when-to-take-social-security-calculator" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
