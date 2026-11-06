import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Retirement Budget Checklist 55–65: The Pre-Retirement Audit | LoanPay Retire",
  description:
    "Retirement budget checklist for ages 55–65: the 10-line spending audit, health-cost bridge to Medicare, Social Security timing, and the 2-year cash buffer.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/retirement-budget-checklist-55-65",
  },
};

const CHECKLIST = [
  "Track 12 months of real spending first — a budget built on guesses fails by March.",
  "Split spending into non-negotiable (housing, food, insurance, taxes) vs. negotiable (travel, gifts, hobbies).",
  "Price the health-cost bridge: COBRA or ACA premiums from retirement day to Medicare at 65.",
  "Model Social Security at 62, 67, and 70 — the 8%-a-year delayed credits are the highest guaranteed return available.",
  "Hold a 2-year cash buffer outside the portfolio so a bear market never forces stock sales.",
  "Test the budget against a 20% market drop and a $15,000 surprise medical bill before resigning.",
];

export default function RetirementBudgetChecklistPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Ages 55–65 &middot; pre-retirement audit &middot; 10-line budget
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Retirement Budget Checklist 55–65
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The decade before retirement is when the budget gets real: audit actual spending, price
          the health-care bridge to Medicare, time Social Security, and stress-test the plan before
          the paycheck stops.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: November 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated November 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 10-line spending audit</h2>
          <p className="mt-3">
            Every retirement budget starts with one unglamorous job: twelve months of actual spending,
            categorized honestly. Pull bank and card statements — not estimates — and sort every dollar
            into ten lines: housing, food at home, dining out, transport, insurance premiums, health
            out-of-pocket, utilities and phones, debt payments, travel and gifts, and everything else.
            Most 55-to-65 households discover two surprises: dining and subscriptions cost double the
            guess, and the mortgage line distorts everything. If the house will be paid off before or
            shortly after retirement, run the budget twice — with and without the payment — because a
            $1,800 mortgage disappearing is a bigger raise than any portfolio tweak. The audit&apos;s output
            is a single monthly number for non-negotiable spending; that number, multiplied by twelve
            and divided by a safe withdrawal rate, is the real size of the target you are aiming at.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The health-cost bridge to 65</h2>
          <p className="mt-3">
            Health coverage is the budget line that ambushes early retirees. Retiring at 60 means five
            years of COBRA at $700 to $1,200 a month for a couple, or ACA marketplace premiums that swing
            with income — keep MAGI under the subsidy cliff and a Silver plan can cost a few hundred;
            drift over it and the same plan quadruples. Price both paths explicitly, year by year, and
            add dental, vision, and hearing, which Medicare itself barely covers. A realistic bridge
            budget for a 60-year-old couple runs $12,000 to $24,000 a year before out-of-pocket costs,
            and underestimating it is the most common reason otherwise-solid plans wobble. Our{" "}
            <Link href="/healthcare-costs-in-retirement" className="text-amber-200 underline underline-offset-2">
              health-care costs guide
            </Link>{" "}
            walks through the full timeline to Medicare and beyond.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Social Security timing is a budget decision</h2>
          <p className="mt-3">
            Claiming at 62 versus 70 changes the monthly check by roughly 75 percent — for a $2,000
            full-retirement-age benefit, that is about $1,400 early versus $2,480 late, every month for
            life, inflation-adjusted. The budget question is not life expectancy trivia but cash-flow
            engineering: every year you delay is a year the portfolio must cover alone, and every year
            you claim early is a permanently smaller inflation-protected annuity. Couples get extra
            leverage — often the higher earner delays to 70 to maximize the survivor benefit while the
            other claims earlier to protect the portfolio. Model all three ages in our{" "}
            <Link href="/when-to-take-social-security-calculator" className="text-amber-200 underline underline-offset-2">
              Social Security timing calculator
            </Link>{" "}
            before locking the budget&apos;s income side.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 2-year cash buffer and the stress test</h2>
          <p className="mt-3">
            Sequence risk — a bear market in the first years of withdrawals — does more damage than
            any single bad year later, which is why the checklist ends with a buffer: two years of
            non-negotiable spending in cash or short Treasuries, untouched by market swings. Replenish
            it in up years, spend from it in down years, and the portfolio never sells low. Then run
            the stress test: cut the portfolio 20 percent, add a $15,000 medical bill, and push
            inflation one point above plan. If the budget still funds 30 years in{" "}
            <Link href="/how-much-do-i-need-to-retire" className="text-amber-200 underline underline-offset-2">
              the retirement-needs calculator
            </Link>
            , the plan is robust; if it breaks, the fix is working one more year or trimming the
            negotiable third — both far cheaper discovered now than at 72. Withdrawal sequencing
            matters too: spend taxable accounts first, then traditional, then Roth, per our{" "}
            <Link href="/retirement-withdrawal-order-strategy" className="text-amber-200 underline underline-offset-2">
              withdrawal-order strategy
            </Link>
            .
          </p>
        </section>

        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Worked example: the Hendersons at 61</h2>
          <p className="mt-3">
            Mark (61) and Lisa (59) Henderson earn $170,000 combined and want out at 63 and 61.
            Their audit shows $7,200 a month of non-negotiable spending — $86,400 a year — plus a
            $2,400 mortgage payment ending when Mark turns 66. Dropping the mortgage leaves about
            $57,600 of permanent spending, which at a 4 percent withdrawal rate needs roughly $1.44
            million; their $1.55 million portfolio clears it with margin. The bridge is the binding
            constraint, not the portfolio: five years of ACA coverage priced at $1,100 a month plus
            $6,000 annual out-of-pocket means $96,000 of health spending before Medicare, funded from
            the cash buffer and Mark&apos;s part-time consulting. They claim Lisa&apos;s smaller benefit
            at 67 for cash flow while Mark delays to 70, lifting the survivor check Lisa would live on
            for decades. Stress test: a 20 percent portfolio drop to $1.24 million still covers the
            $57,600 at 4.6 percent — tight but survivable with one fewer trip a year. Verdict: green
            light at 63, conditional on the buffer staying full and the consulting income materializing
            for two years.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The housing decision dwarfs everything else</h2>
          <p className="mt-3">
            No portfolio maneuver matters as much as the roof decision. Staying in a $500,000 home with
            a paid-off mortgage costs perhaps $12,000 a year in tax, insurance, and upkeep; downsizing
            to a $350,000 condo can free $150,000 of equity while cutting those carrying costs nearly in
            half. Relocating states adds a second lever — trading a high-property-tax suburb for a
            no-income-tax state can shift $5,000 to $10,000 a year from taxes to travel. But moving has
            its own invoice: 8 to 10 percent transaction friction, new-community rebuilding, and distance
            from grandkids that no spreadsheet prices. Run the budget for stay, downsize-local, and
            relocate scenarios side by side, assign honest dollar values to proximity and familiarity,
            and only then let the math vote. Whatever you choose, decide by 62 — serial deliberation is
            itself a cost, paid in the most precious pre-retirement asset of all: healthy years.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Pre-retirement checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="mt-6">
            <AdSlot slot="TODO-retire-budget-inarticle" format="in-article" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How much do we need to retire at 60?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Multiply non-negotiable annual spending by 25 to 30, then add the health-cost bridge to 65 and the 2-year cash buffer on top. A couple spending $60,000 a year needs roughly $1.5–$1.8 million plus bridge costs.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should we pay off the mortgage before retiring?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Usually yes if the rate exceeds 5% or the balance is small — eliminating the payment cuts required withdrawals and sequence risk. Keep the mortgage only if the rate is far below expected returns and cash flow is comfortable.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if one spouse is much younger?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Plan to the younger spouse&apos;s horizon — add 5 to 10 years of funding — and lean on the higher earner&apos;s delayed Social Security to maximize the survivor benefit.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">When should we do Roth conversions?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">The low-income window between retirement and RMD age (73/75) is prime: fill the 12% and 22% brackets with conversions to shrink future RMDs and IRMAA exposure. Even $40,000 a year of conversions through your sixties can move six figures out of the tax-deferred bucket before required distributions begin.</p>
            </details>
          </div>
        </section>

        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
            <li>
              <Link className="underline" href="/when-to-take-social-security-calculator">Social Security Timing Calculator</Link> — model 62 vs 67 vs 70 for your household.
            </li>
            <li>
              <Link className="underline" href="/how-much-do-i-need-to-retire">How Much Do I Need to Retire</Link> — turn the audited budget into a target number.
            </li>
            <li>
              <Link className="underline" href="/retirement-withdrawal-order-strategy">Withdrawal Order Strategy</Link> — taxable, traditional, Roth: the tax-smart sequence.
            </li>
            <li>
              <Link className="underline" href="/healthcare-costs-in-retirement">Health-Care Costs in Retirement</Link> — bridge-to-Medicare pricing and beyond.
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
            This is general education, not financial advice. Confirm Social Security rules with SSA.gov
            and health-plan prices with your state marketplace. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Retirement Budget Checklist 55–65: The Pre-Retirement Audit | LoanPay Retire", description: "The 10-line spending audit, health-cost bridge to Medicare, Social Security timing, and the 2-year cash buffer.", url: "https://retire.loanpaylogic.com/retirement-budget-checklist-55-65" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"How much do we need to retire at 60?","answer":"Multiply non-negotiable annual spending by 25 to 30, add the health-cost bridge to 65 and a 2-year cash buffer."},{"question":"Should we pay off the mortgage before retiring?","answer":"Usually yes above 5% or with a small balance; otherwise keep it only if cash flow is comfortable."},{"question":"What if one spouse is much younger?","answer":"Plan to the younger horizon and maximize the survivor benefit via the higher earner delaying to 70."},{"question":"When should we do Roth conversions?","answer":"The window between retirement and RMD age: fill the 12% and 22% brackets to shrink future RMDs."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Retirement Budget Checklist 55–65", url: "https://retire.loanpaylogic.com/retirement-budget-checklist-55-65" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated November 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
