import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Target-Date Funds Explained: Glide Paths & Fees | LoanPay Retire",
  description:
    "Target-date funds: how glide paths work, to-vs-through designs, fees that matter, and when the default 401(k) fund isn't enough.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/target-date-funds-explained",
  },
};

const CHECKLIST = [
  "A target-date fund (TDF) auto-shifts from stocks to bonds as the year in its name approaches.",
  "To-retirement funds land conservative at the date; through-retirement funds keep gliding 10–30 years past it.",
  "The 2008 lesson: 2010 funds lost ~25% on average — 'target date' never meant 'safe at the date.'",
  "Fees decide: 0.08% index TDFs vs. 0.60%+ active ones — a 0.50% gap compounds to six figures.",
  "One TDF held alone is diversified; mixing two vintages or adding side funds breaks the glide math.",
  "Check what's inside: some TDFs hold only index funds, others layer expensive active funds.",
];

export default function TdfPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Default funds &middot; glide paths &middot; fees
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Target-Date Funds Explained
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The autopilot holding most 401(k) defaults: what glides, what it costs, when it
          fits — and the three situations where you should override the default.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Essentials checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">How the glide path flies</h2>
          <p className="mt-3">
            Pick the fund whose year approximates your retirement (a 35-year-old retiring
            near 2060 buys a 2060 fund) and it handles the rest: roughly 90% stocks in
            youth, sliding toward 40–50% stocks at the date, then toward 25–35% deep in
            retirement. &ldquo;To&rdquo; funds reach their final allocation at the target
            year; &ldquo;through&rdquo; funds keep de-risking for decades after — a
            crucial distinction two same-dated funds can hide. Inside, the fund holds a
            fund-of-funds: US stocks, international stocks, bonds, sometimes TIPS and
            real estate. Rebalancing is automatic, which rescues savers from the two
            classic errors — never rebalancing, and panic-selling. Our{" "}
            <Link href="/401k-contribution-limits-2026" className="text-amber-200 underline underline-offset-2">
              401(k) limits guide
            </Link>{" "}
            covers how much to feed the autopilot each year.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Typical glide path, 2060-fund investor (illustrative).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Investor age</th>
                  <th className="px-4 py-3 font-semibold">Stocks approx.</th>
                  <th className="px-4 py-3 font-semibold">Bonds approx.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">30s</td><td className="px-4 py-2">~90%</td><td className="px-4 py-2">~10%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">50s</td><td className="px-4 py-2">~70–75%</td><td className="px-4 py-2">~25–30%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">65 (target)</td><td className="px-4 py-2">~40–55%</td><td className="px-4 py-2">~45–60%</td></tr>
                <tr><td className="px-4 py-2">75+</td><td className="px-4 py-2">~25–35%</td><td className="px-4 py-2">~65–75%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the 0.52% fee gap</h2>
          <p className="mt-3">
            Two 30-year-olds each invest $10,000 yearly for 35 years at a hypothetical 7%
            gross return. Ana&apos;s index TDF charges 0.08% (net ~6.92%); Ben&apos;s
            active TDF charges 0.60% (net ~6.40%). Ana ends near $1.47M, Ben near $1.31M —
            roughly $160,000 surrendered to fees for management that index data suggests
            rarely wins net of costs. The gap widens with larger balances and longer
            horizons. Check your plan&apos;s 404a-5 fee disclosure: same-date TDFs from
            different managers routinely differ 5x in cost with near-identical glide
            shapes. Where only pricey TDFs exist, building a three-fund replica from the
            plan&apos;s cheapest index funds can mimic the glide at index cost — advanced,
            but documented in every plan&apos;s fund lineup. For the IRA-side fund menu
            where choices are unlimited, the tax comparison sits at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . Returns shown are hypothetical, never guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">When to override the default</h2>
          <p className="mt-3">
            Override case one: you hold large assets elsewhere — a big taxable account, a
            pension covering all spending, or a rental portfolio changes your true risk
            capacity, and a one-size glide misfires. Override case two: you retire far from
            the average — at 50 you need growth longer (pick a later vintage), at 75 still
            working you may want conservatism sooner. Override case three: taxes — TDFs in
            taxable accounts distribute annual capital gains (2021&apos;s surprise
            distributions stung many holders), so keep TDFs inside 401(k)s/IRAs and hold
            tax-efficient index funds outside. Never hold two vintages plus side bets and
            call it diversification: 60% in a 2060 fund plus 40% in a stock fund is just an
            undisclosed 2065-ish allocation. One TDF, alone, or a deliberate custom mix —
            never an accidental cocktail.
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Which target year should I pick?</summary>
              <p className="mt-1">Roughly the year you turn 65 — a 1990 birth retiring ~2055 fits a 2055 or 2060 fund. Adjust later/earlier if you plan to retire notably early or late, not by market views.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Are target-date funds safe near retirement?</summary>
              <p className="mt-1">Safer, not safe: 2010 funds fell ~25% in 2008, and 2020 funds fell ~10–14% in early 2020. They cushion crashes relative to all-stock portfolios; they do not prevent losses.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Index or active target-date funds?</summary>
              <p className="mt-1">Index TDFs (0.05–0.15%) dominate on cost and match or beat most active peers net of fees. Active TDFs must overcome ~0.50%+ annual drag every single year — a persistent headwind.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should I hold a TDF in a taxable account?</summary>
              <p className="mt-1">Preferably not — bond income and rebalancing distributions are taxed yearly. Shelter TDFs in 401(k)s and IRAs; use total-market index ETFs in taxable accounts.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Glide paths and fees vary by
            fund family; read each prospectus. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Target-Date Funds Explained: Glide Paths & Fees | LoanPay Retire", description: "Target-date funds: how glide paths work, to-vs-through designs, fees that matter, and when the default 401(k) fund isn't enough.", url: "https://retire.loanpaylogic.com/target-date-funds-explained" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Which target year should I pick?","answer":"Roughly the year you turn 65 — a 1990 birth retiring ~2055 fits a 2055 or 2060 fund. Adjust later/earlier if you plan to retire notably early or late, not by market views."},{"question":"Are target-date funds safe near retirement?","answer":"Safer, not safe: 2010 funds fell ~25% in 2008, and 2020 funds fell ~10–14% in early 2020. They cushion crashes relative to all-stock portfolios; they do not prevent losses."},{"question":"Index or active target-date funds?","answer":"Index TDFs (0.05–0.15%) dominate on cost and match or beat most active peers net of fees. Active TDFs must overcome ~0.50%+ annual drag every single year — a persistent headwind."},{"question":"Should I hold a TDF in a taxable account?","answer":"Preferably not — bond income and rebalancing distributions are taxed yearly. Shelter TDFs in 401(k)s and IRAs; use total-market index ETFs in taxable accounts."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Target-Date Funds Explained: Glide Paths & Fees | LoanPay Retire", url: "https://retire.loanpaylogic.com/target-date-funds-explained" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
