import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Early Withdrawal Penalty: 59½ Rules & Exceptions | LoanPay Retire",
  description:
    "The 10% early-withdrawal penalty before 59½: how it works, the 15+ exceptions (SEPP, medical, first home, education), and ordering rules.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/early-withdrawal-penalty-59-half",
  },
};

const CHECKLIST = [
  "Withdrawals from traditional 401(k)s/IRAs before 59½ face ordinary tax PLUS a 10% penalty — two separate bites.",
  "Roth IRA contributions come out anytime tax- and penalty-free; converted principal needs five years per conversion.",
  "The penalty has 15+ exceptions — SEPP, medical, disability, first home, higher education, birth/adoption, and more.",
  "401(k) plans add exclusive exits: Rule of 55, public-safety at 50, and QDRO splits.",
  "Loans and hardships differ: loans must be repaid; hardships are still taxed (penalty may still apply).",
  "Roth conversions before 59½ don't dodge the clock — converted dollars carry their own five-year penalty window.",
];

export default function PenaltyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          10% penalty &middot; 59½ &middot; exceptions
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Early Withdrawal Penalty: 59½
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Touch retirement money early and the IRS adds 10% on top of income tax. Every
          major exception, the ordering rules that decide what is penalized, and the SEPP
          lifeline for early retirees.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Penalty checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">How the 10% stacks on your tax</h2>
          <p className="mt-3">
            A $20,000 traditional IRA withdrawal at 45 in the 22% bracket costs $4,400
            income tax plus a $2,000 penalty — $6,400 total, nearly a third vaporized.
            The penalty is computed on Form 5329 and applies per distribution, with
            exceptions claimed by code on Form 1099-R. Roth ordering softens the blow:
            contributions first (always free), then conversions oldest-first (penalty if
            under five years and under 59½), then earnings last (tax plus penalty absent an
            exception). 401(k) withdrawals follow harsher pro-rata rules — each dollar is
            part pre-tax, part earnings — which is why rolling to an IRA first sometimes
            improves exception access. State penalties occasionally add more.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Key penalty exceptions (federal; conditions apply).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Exception</th>
                  <th className="px-4 py-3 font-semibold">Cap / note</th>
                  <th className="px-4 py-3 font-semibold">IRA / 401(k)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">SEPP (72(t)) payments</td><td className="px-4 py-2">Life-expectancy schedule</td><td className="px-4 py-2">Both</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Medical expenses (AGI floor)</td><td className="px-4 py-2">Above 7.5% of AGI</td><td className="px-4 py-2">Both</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">First-time home purchase</td><td className="px-4 py-2">$10,000 lifetime</td><td className="px-4 py-2">IRA only</td></tr>
                <tr><td className="px-4 py-2">Higher education</td><td className="px-4 py-2">Qualified costs</td><td className="px-4 py-2">IRA only</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: SEPP rescues a 52-year-old</h2>
          <p className="mt-3">
            Marcus retires at 52 with $900,000 in a traditional IRA and needs $40,000
            yearly. Raiding it outright costs ~$4,000 penalty yearly. Instead he starts
            substantially equal periodic payments under rule 72(t): using the IRS
            single-life table at 52 (factor ~32.3), fixed amortization near 5% allows
            roughly $40,000+ yearly penalty-free (income tax still applies). The
            handcuffs: payments must continue unmodified for five years or until 59½,
            whichever is LATER — until 59½ for Marcus — and any bust-up modification
            retroactively triggers all waived penalties plus interest. One-time escape
            hatches (birth/adoption up to $5,000, terminal illness, disaster relief,
            emergency expenses up to $1,000 yearly under SECURE 2.0) help small needs, but
            SEPP is the only durable early-retirement pipeline — alongside the{" "}
            <Link href="/rule-of-55-guide" className="text-amber-200 underline underline-offset-2">
              Rule of 55
            </Link>{" "}
            for 401(k) holders. Roth conversion ladders (convert, wait five years per
            tranche, withdraw principal free) complement SEPP for patient planners.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Loans, hardships, and 401(k)-only exits</h2>
          <p className="mt-3">
            A 401(k) loan (usually up to $50,000 or 50% vested) is not a distribution if
            repaid on schedule — but separation typically forces repayment within months or
            the balance becomes a penalized distribution, a trap for job-changers. Hardship
            withdrawals skip the loan but not the tax, and only some hardships skip the
            penalty. Exclusive 401(k) exits include separation at 55+ (our Rule-of-55
            guide), public-safety employees at 50+, QDRO divorce splits, and plan
            termination distributions. Disability must meet the IRS&apos;s strict
            definition; IRS levies, military reservist calls, and annuity-style
            distributions each carry bespoke codes. Document everything: custodians code
            1099-Rs by what you tell them, and the IRS matches. Contribution mechanics for
            rebuilding after a raid are covered at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . Examples illustrate; outcomes are never guaranteed.
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does the penalty apply to Roth contributions?</summary>
              <p className="mt-1">Never — your own Roth IRA contributions withdraw tax- and penalty-free at any age. Only conversions under five years old and earnings face penalties before 59½.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if I need $1,000 for an emergency?</summary>
              <p className="mt-1">SECURE 2.0 allows one $1,000 emergency withdrawal yearly penalty-free (income tax still due), self-certified, with a three-year repayment window before reusing it.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I undo an early withdrawal?</summary>
              <p className="mt-1">Indirect rollover rules give you 60 days to redeposit an eligible distribution — effectively a short-term reversal. After 60 days (absent a waiver), it is permanent.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do states add their own penalties?</summary>
              <p className="mt-1">California famously adds 2.5% atop the federal 10%. Most states just tax the distribution as income, but verify yours before withdrawing.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax or financial advice. Confirm exception codes
            in IRS Publication 590-B and with your custodian. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Early Withdrawal Penalty: 59½ Rules & Exceptions | LoanPay Retire", description: "The 10% early-withdrawal penalty before 59½: how it works, the 15+ exceptions (SEPP, medical, first home, education), and ordering rules.", url: "https://retire.loanpaylogic.com/early-withdrawal-penalty-59-half" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Does the penalty apply to Roth contributions?","answer":"Never — your own Roth IRA contributions withdraw tax- and penalty-free at any age. Only conversions under five years old and earnings face penalties before 59½."},{"question":"What if I need $1,000 for an emergency?","answer":"SECURE 2.0 allows one $1,000 emergency withdrawal yearly penalty-free (income tax still due), self-certified, with a three-year repayment window before reusing it."},{"question":"Can I undo an early withdrawal?","answer":"Indirect rollover rules give you 60 days to redeposit an eligible distribution — effectively a short-term reversal. After 60 days (absent a waiver), it is permanent."},{"question":"Do states add their own penalties?","answer":"California famously adds 2.5% atop the federal 10%. Most states just tax the distribution as income, but verify yours before withdrawing."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Early Withdrawal Penalty: 59½ Rules & Exceptions | LoanPay Retire", url: "https://retire.loanpaylogic.com/early-withdrawal-penalty-59-half" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
