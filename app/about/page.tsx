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
        We are not a financial adviser, broker, or insurer, and nothing here is personalized
        advice. For related tax details, see our sister site&apos;s guide at{" "}
        <a
          href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
          className="text-amber-200 underline underline-offset-2"
        >
          tax.loanpaylogic.com/roth-vs-traditional-ira-tax
        </a>
        .
      </p>
    </div>
  );
}
