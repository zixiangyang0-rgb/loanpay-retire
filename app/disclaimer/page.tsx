import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | LoanPay Retire",
  description:
    "Disclaimer for retire.loanpaylogic.com: retirement education only, not financial, tax, or legal advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Everything published on retire.loanpaylogic.com is for general retirement education and
        illustration only. It is not financial advice, tax advice, legal advice, or insurance
        advice, and it does not create a professional-client relationship.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Retirement rules change frequently and depend on your age, income, employment, health,
        marital status, account types, and state of residence. Our simplified guides and
        estimators cannot reflect every exception, phase-out, or plan-specific rule. Before
        acting — including changing contributions, claiming Social Security, taking withdrawals,
        or buying insurance products — verify current rules with the IRS, the Social Security
        Administration, Medicare.gov, or a licensed fiduciary adviser.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Projections and worked examples are hypothetical illustrations, never guarantees of
        future returns or benefits. We work to keep guides accurate, but we make no warranty of
        completeness or timeliness. If you spot an error, please tell us at
        support@loanpaylogic.com so we can correct it.
      </p>
    </div>
  );
}
