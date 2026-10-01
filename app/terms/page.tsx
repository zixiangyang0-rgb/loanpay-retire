import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | LoanPay Retire",
  description: "Terms of use for retire.loanpaylogic.com educational retirement content.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        By using retire.loanpaylogic.com you agree that all content is general retirement
        education, not personalized financial, tax, legal, or insurance advice. You use the
        guides and estimators at your own risk and remain responsible for verifying figures
        with primary sources before making decisions.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        You may share links to our pages freely. You may not copy substantial portions of our
        text to other websites without permission. Calculator outputs are estimates based on
        the simplified inputs you enter; they do not predict market performance, benefit
        amounts, or tax liability.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We may update these terms as the site evolves; continued use after changes means you
        accept them. Contact support@loanpaylogic.com with questions.
      </p>
    </div>
  );
}
