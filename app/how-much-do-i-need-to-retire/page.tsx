import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Do I Need to Retire? 2026 Guide | LoanPay Retire",
  description:
    "Retirement savings targets: replacement ratios, the 25x rule, Social Security offsets, and a worked example for a $100K earner.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/how-much-do-i-need-to-retire",
  },
};

const CHECKLIST = [
  "Start with spending, not income: most households target 70–80% of pre-retirement income.",
  "Subtract Social Security and pensions first — savings must cover only the gap.",
  "Multiply the annual gap by 25 (the 4% rule inverse) for a first-pass portfolio target.",
  "Add buffers: health costs (~$300K+ lifetime for a 65-year-old couple), longevity, and inflation.",
  "Revisit yearly: Fidelity-style milestones (1x salary at 30, 10x at 67) are checkpoints, not verdicts.",
  "Model low returns too — targets built on 10% assumptions crack under 5–6% realities.",
];

export default function HowMuchPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Savings targets &middot; 25x &middot; replacement ratios
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          How Much Do I Need to Retire?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Forget magic million-dollar slogans. A three-step method — spending, gap,
          multiple — that sizes your number from your life, plus the famous milestones
          decoded.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Target-setting checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Step 1–3: spending, gap, multiple</h2>
          <p className="mt-3">
            Step one: estimate retirement spending. Forget income replacement for a moment
            and list actual costs — housing, food, transport, travel, insurance — minus
            expenses that vanish (mortgage payoff, commuting, retirement saving itself) plus
            new ones (travel, hobbies, higher medical bills). Most analyses land near 70–80%
            of gross pre-retirement income, but frugal renters and generous travelers diverge
            wildly. Step two: subtract reliable income — Social Security (check timing in our{" "}
            <Link href="/when-to-take-social-security" className="text-amber-200 underline underline-offset-2">
              claiming guide
            </Link>
            ), pensions, part-time work. Step three: capitalize the remaining annual gap.
            The 25x shortcut (inverse of the{" "}
            <Link href="/4-percent-rule-explained" className="text-amber-200 underline underline-offset-2">
              4% rule
            </Link>
            ) converts a $40,000 yearly gap into a $1,000,000 portfolio target — a starting
            point, not a promise.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                First-pass targets by income (illustrative, 75% replacement, 25x gap).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Pre-retirement pay</th>
                  <th className="px-4 py-3 font-semibold">75% spending</th>
                  <th className="px-4 py-3 font-semibold">Less ~$30K SS</th>
                  <th className="px-4 py-3 font-semibold">25x target</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$60,000</td><td className="px-4 py-2">$45,000</td><td className="px-4 py-2">$15,000 gap</td><td className="px-4 py-2">$375,000</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$100,000</td><td className="px-4 py-2">$75,000</td><td className="px-4 py-2">$45,000 gap</td><td className="px-4 py-2">$1,125,000</td></tr>
                <tr><td className="px-4 py-2">$150,000</td><td className="px-4 py-2">$112,500</td><td className="px-4 py-2">$82,500 gap</td><td className="px-4 py-2">$2,062,500</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $100,000 earner</h2>
          <p className="mt-3">
            Sofia earns $100,000 at 45 with $250,000 saved. She targets $75,000 of annual
            spending, expects $32,000 in Social Security at 67, leaving a $43,000 gap — a
            25x target of $1,075,000. She saves $24,500 in her 401(k) plus a $4,000 match
            ($28,500 yearly). Growing the current $250,000 and $28,500 annual additions at a
            hypothetical 6% for 22 years yields roughly $1.5M+ — above target, leaving margin
            for health costs detailed in our{" "}
            <Link href="/healthcare-costs-in-retirement" className="text-amber-200 underline underline-offset-2">
              healthcare costs guide
            </Link>
            . At 4% real returns the same inputs land near $1.15M — still on target but with
            no cushion, showing why return assumptions deserve stress-testing, not
            optimism. Early-retirement dreams or a paid-off house shift the inputs
            dramatically; rerun the three steps rather than anchoring on one number. And for
            the IRA contribution mechanics funding Sofia&apos;s spillover savings, see{" "}
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
          <h2 className="text-xl font-bold text-white">Milestones, buffers, and blind spots</h2>
          <p className="mt-3">
            Fidelity&apos;s widely cited checkpoints — 1x salary at 30, 3x at 40, 6x at 50,
            8x at 60, 10x at 67 — help late starters gauge progress but punish unusual
            careers (medical residents, founders, late immigrants) unfairly; treat them as
            thermometers, not report cards. Buffers matter more than precision: Fidelity
            estimates a 65-year-old couple needs roughly $300,000+ for lifetime medical
            costs excluding long-term care, longevity to 90+ is increasingly normal, and
            inflation at 3% halves purchasing power in 24 years. Blind spots that wreck plans
            include ignoring taxes on traditional withdrawals (bridge with our{" "}
            <Link href="/retirement-withdrawal-order-strategy" className="text-amber-200 underline underline-offset-2">
              withdrawal-order strategy
            </Link>
            ), assuming the house funds retirement without a downsizing plan, and
            underestimating the surviving spouse&apos;s single-filer brackets. Revisit the
            target annually — small course corrections at 45 beat large ones at 60. None of
            these projections are guarantees; markets and lifespans vary.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Is $1 million enough?</h3>
              <p className="mt-1">It depends entirely on the gap: $1M supports about $40,000 yearly at 4%. With $30,000 of Social Security that funds a $70,000 lifestyle — plenty in low-cost areas, tight on the coasts with a mortgage.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I include home equity?</h3>
              <p className="mt-1">Only with a concrete plan — downsizing, relocating, or a reverse mortgage strategy. Equity you intend to live in is shelter, not spending money.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What savings rate gets me there?</h3>
              <p className="mt-1">Starting at 25, roughly 15% of pay (including matches) funds a 67 retirement at 75% replacement under median assumptions. Starting at 40, expect 25–30%. Catch-ups after 50 help — see our catch-up guide.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How does retiring early change the math?</h3>
              <p className="mt-1">Each early year both removes a saving year and adds a spending year — often 33x–40x multiples instead of 25x, plus bridge health insurance before Medicare at 65.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. All projections are hypothetical
            illustrations, never guarantees. Read our full{" "}
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
