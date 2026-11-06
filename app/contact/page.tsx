import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | LoanPay Retire",
  description: "Contact LoanPay Retire with corrections, questions, or topic requests.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Have a question about a guide on retire.loanpaylogic.com, found a limit or premium that
        looks outdated, or want to suggest a new retirement topic? We read every message and
        prioritize factual corrections.
      </p>
      <div className="glass-card mt-8 rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Email</h2>
        <p className="mt-2 text-sm text-slate-300">
          Reach us at{" "}
          <a href="mailto:support@loanpaylogic.com" className="font-semibold text-amber-200 underline underline-offset-2">
            support@loanpaylogic.com
          </a>
          . Please include the page URL you are writing about and a short description of the
          issue, including the exact sentence that looks wrong.
        </p>
        <h2 className="mt-6 text-lg font-semibold">What to expect</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          We usually reply within two business days. For corrections, tell us the figure you
          question and, if you have one, a link to an authoritative source such as the IRS, the
          Social Security Administration, or Medicare.gov. Verified corrections are published
          promptly. For new topic ideas, tell us which decision you are trying to make — for
          example Roth versus traditional, Social Security timing, or withdrawal order — so we
          can shape a future guide around it.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          We read every message but cannot answer personal retirement questions or provide
          individualized financial, tax, or legal advice. Please do not send account numbers,
          Social Security numbers, or plan statements. For account-specific issues, contact
          your plan administrator, the Social Security Administration at 1-800-772-1213, or
          Medicare at 1-800-MEDICARE (1-800-633-4227).
        </p>
      </div>
      <section
        aria-label="Editorial byline and sources"
        className="glass-card mt-6 rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-white">
          Who Reads Your Message and How We Keep Guides Accurate
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Messages to this page are read by our three-person editorial team: Sarah Mitchell,
          Senior Personal Finance Writer, who drafts and maintains our retirement guides; David
          Chen, CPA, our independent fact-checking reviewer, who verifies limits, formulas,
          phase-outs, and worked examples; and Emily Roberts, Managing Editor, who gives the
          final sign-off before anything is published.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Our editorial process starts with primary public sources, including IRS publications,
          Social Security Administration benefit formulas and COLA notices, and Medicare.gov
          premium and IRMAA tables. We cross-check every figure against at least two
          independent sources, rewrite findings in original plain-English language, and never
          let advertising partners influence our conclusions. Corrections sent here go directly
          to the editors.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was last reviewed and updated on November 6, 2026. We re-check our contact
          workflow and every linked guide regularly, and we publish corrections promptly whenever
          a reader flags an error. Please include the page URL and a short description of what
          looks outdated, and our team will verify the facts and update the guide quickly.
        </p>
      </section>
    </div>
  );
}
