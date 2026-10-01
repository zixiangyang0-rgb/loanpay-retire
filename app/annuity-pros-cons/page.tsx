import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Annuity Pros & Cons: SPIA, DIA, Variable | LoanPay Retire",
  description:
    "Annuities for retirement: single-premium, deferred, variable and indexed — mortality credits, fees, inflation, and when they fit.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/annuity-pros-cons",
  },
};

const CHECKLIST = [
  "Annuities trade a lump sum for guaranteed income — insurance against outliving money, not investments.",
  "SPIAs (immediate) and DIAs (deferred to 75–85) are the simplest, cheapest longevity insurance.",
  "Variable and indexed annuities layer market exposure with rider fees often totaling 2–4% yearly.",
  "QLACs let you defer up to $200,000 (indexed) of RMDs to age 85 inside retirement accounts.",
  "Commissions drive complexity: SPIAs pay ~1–3%, while indexed/variable products may pay 5–8%.",
  "Every annuity is only as strong as its insurer — check AM Best/Comdex ratings and state guaranty caps.",
];

export default function AnnuityPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Guaranteed income &middot; SPIA / DIA / QLAC
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Annuity Pros &amp; Cons
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The most loved and most oversold product in retirement: which annuities deliver
          genuine longevity insurance, which enrich salespeople, and how to tell the
          difference.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Annuity checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The four species, honestly priced</h2>
          <p className="mt-3">
            Single-premium immediate annuities convert cash to checks within a year —
            a 75-year-old&apos;s $200,000 buys roughly $1,400–$1,600 monthly for life
            because mortality credits heavily subsidize survivors. Deferred income
            annuities start at 80–85 for pennies on the dollar, backstopping extreme
            longevity so the rest of your portfolio can spend freely. Variable annuities
            invest in subaccounts with mortality, expense, and rider fees often totaling
            2–4% yearly — the market upside minus a crushing hurdle. Fixed indexed
            annuities cap gains (participation rates, spreads) while advertising
            &ldquo;market upside with no downside&rdquo; — the caps, not the pitch,
            determine returns. Complexity correlates with commission; simplicity with
            value.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Annuity types compared (illustrative payouts).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Best use</th>
                  <th className="px-4 py-3 font-semibold">Watch out</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">SPIA</td><td className="px-4 py-2">Floor essential spending now</td><td className="px-4 py-2">Irrevocable; fixed payments erode</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">DIA / QLAC</td><td className="px-4 py-2">Insure 85+ longevity cheaply</td><td className="px-4 py-2">Long wait; insurer risk</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Variable + riders</td><td className="px-4 py-2">Rarely optimal</td><td className="px-4 py-2">2–4% yearly fee drag</td></tr>
                <tr><td className="px-4 py-2">Fixed indexed</td><td className="px-4 py-2">CD alternative (low rates)</td><td className="px-4 py-2">Caps, surrender periods</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: flooring $2,000 of spending</h2>
          <p className="mt-3">
            Diane, 72, spends $6,000 monthly with $3,000 from Social Security and $1,000
            from a small pension — a $2,000 gap she must draw from a $600,000 portfolio
            through every market. Allocating $280,000 to a SPIA paying ~$1,950 monthly
            floors nearly the entire gap for life; the remaining $320,000 covers inflation,
            surprises, and legacy with far less sequence risk, since mandatory portfolio
            withdrawals nearly vanish. The cost: $280,000 of liquidity and bequest (unless
            she buys a cash-refund rider trimming payments ~5–10%). Contrast stuffing the
            same $280,000 into a variable annuity with a guaranteed-lifetime-withdrawal
            rider at ~3% all-in fees — roughly $8,400 yearly in fees for a guarantee the
            SPIA delivers structurally. Diane&apos;s Social Security timing analysis sits in
            our{" "}
            <Link href="/when-to-take-social-security" className="text-amber-200 underline underline-offset-2">
              claiming guide
            </Link>
            , and pension parallels in our{" "}
            <Link href="/pension-vs-lump-sum" className="text-amber-200 underline underline-offset-2">
              pension vs. lump sum guide
            </Link>
            . Payouts illustrate only — never guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">QLACs, taxes, and shopping rules</h2>
          <p className="mt-3">
            Qualifying longevity annuity contracts let retirement-account owners divert up
            to $200,000 (indexed) into a DIA starting by 85, excluding that sum from RMD
            calculations until payments begin — a precision tool against oversized RMDs
            (see our{" "}
            <Link href="/rmd-rules-2026" className="text-amber-200 underline underline-offset-2">
              RMD rules
            </Link>
            ). Tax-wise, nonqualified annuity gains withdraw last-in-first-out (taxed
            first) with a 10% penalty before 59½, and exchanges via 1035 keep treatment
            intact. Shopping rules: get 3–5 quotes (immediateannuities.com-style
            marketplaces plus Vanguard/Fidelity low-cost options), demand insurers rated A+
            or better, confirm your state guaranty association cap ($250,000–$500,000
            typically), ladder purchases across insurers for large sums, and never annuitize
            money you might need liquid — surrender periods run 5–10 years. The IRA
            mechanics around QLAC funding are mapped at{" "}
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
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What happens to my money if I die early?</h3>
              <p className="mt-1">A bare life-only SPIA keeps the balance — the mortality-credit bargain. Cash-refund or period-certain riders return unpaid principal to heirs for a ~5–15% payment haircut.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do annuities adjust for inflation?</h3>
              <p className="mt-1">Inflation-indexed SPIAs exist but start ~20–30% lower than fixed ones. Most buyers prefer higher fixed payments plus portfolio growth to offset inflation instead.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are free-dinner annuity seminars trustworthy?</h3>
              <p className="mt-1">Treat them as sales events: indexed and variable annuities dominate pitches because commissions run 5–8%. Take the materials home, compare with fiduciary advice, never sign same-day.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I hold an annuity inside an IRA?</h3>
              <p className="mt-1">Yes — QLACs are the purpose-built version, and ordinary DIAs/SPIAs can sit in IRAs too (no extra tax benefit, so weigh costs). Required minimum distributions still apply except QLAC-shielded amounts.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not insurance or financial advice. Verify insurer
            ratings and contract terms before purchasing. Read our full{" "}
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
