import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | LoanPay Retire",
  description:
    "About LoanPay Retire: plain-English retirement education on accounts, Social Security, withdrawals, and health costs.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">About LoanPay Retire</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Retire (retire.loanpaylogic.com) is an educational corner of the LoanPayLogic
        network. We translate dense United States retirement rules — 401(k) limits, IRA
        phase-outs, Social Security timing, required minimum distributions, Medicare premiums,
        and withdrawal order — into short, plain-English guides with worked numbers.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Our readers are typically employees, freelancers, and near-retirees who want to
        understand the moving parts before talking to a professional. Every guide states its
        figures&apos; year, shows the math step by step, and links to primary sources such as
        the IRS, the Social Security Administration, and Medicare.gov.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We cover the full arc of retirement planning in the United States: 401(k) and IRA
        contribution limits, catch-up contributions after age 50, traditional versus Roth
        choices, rollovers, and backdoor Roth mechanics; Social Security timing at 62 versus
        67 versus 70 with break-even math and spousal angles; required minimum distributions
        under SECURE 2.0, the 25 percent penalty, and qualified charitable distributions;
        Medicare premiums, IRMAA brackets, and health savings account strategy; plus withdrawal
        order, the 4 percent rule and guardrails, pensions versus lump sums, annuities, target
        date funds, and budgeting for health care from age 55 through 65 and beyond.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Our method is deliberately boring in the best way. We start from primary public sources
        — IRS publications, Social Security Administration benefit formulas and COLA notices,
        and Medicare.gov premium tables — cross-check every figure against at least two
        independent sources, and rewrite findings in original plain-English language with
        tables, calculators, and frequently asked questions. Figures are stamped to their year,
        for example 2026 limits and thresholds, so readers always know which tax year a number
        belongs to. Display advertising keeps the guides free to read and never influences our
        conclusions.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We are not a financial adviser, broker, or insurer, and nothing here is personalized
        advice. For related tax details, see our sister site&apos;s guide at{" "}
        <a
          href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
          className="text-amber-200 underline underline-offset-2"
        >
          tax.loanpaylogic.com/roth-vs-traditional-ira-tax
        </a>
        . Retirement choices depend on your age, income, employment, health, marital status,
        and account mix, so verify current rules with the IRS, the Social Security
        Administration, Medicare.gov, or a licensed fiduciary before acting.
      </p>
      <section
        aria-label="Editorial byline and sources"
        className="glass-card mt-6 rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-white">
          Who Wrote This Page and How We Check Our Facts
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was written by Sarah Mitchell, Senior Personal Finance Writer; reviewed for
          accuracy by David Chen, CPA, our independent fact-checking reviewer; and edited by
          Emily Roberts, Managing Editor. Together, this three-person team brings over 25 years
          of combined experience in financial education, certified public accounting, and digital
          publishing to every retirement guide on this site, and each member signs off before it
          goes live for readers like you.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was last reviewed and updated on November 6, 2026. Retirement thresholds,
          premiums, and benefit formulas change every year, so we re-check each guide regularly
          and fix errors promptly when readers write to support@loanpaylogic.com with the page
          URL.
        </p>
      </section>
    </div>
  );
}
