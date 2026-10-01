import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Beneficiaries & Estate Basics for Retirees | LoanPay Retire",
  description:
    "Beneficiary designations beat wills: per stirpes vs. per capita, the 10-year inherited IRA rule, TOD deeds, trusts, and review triggers.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/beneficiaries-estate-basics",
  },
};

const CHECKLIST = [
  "Beneficiary forms override wills on IRAs, 401(k)s, life insurance, and TOD accounts — review them first.",
  "Name primary AND contingent beneficiaries everywhere; never leave the line blank or write 'my estate.'",
  "Most non-spouse heirs face the 10-year inherited-IRA payout rule (emptied by year 10).",
  "Use per stirpes (branch) vs. per capita (heads) deliberately when naming children and grandchildren.",
  "Minor children need a trust or custodian — never name them outright on large accounts.",
  "Revisit after marriage, divorce, births, deaths, and every move — stale forms are the #1 estate failure.",
];

export default function EstatePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Legacy &middot; beneficiaries &middot; 10-year rule
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Beneficiaries &amp; Estate Basics
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Wills matter less than you think and beneficiary forms matter more. The
          designations, payout rules, and documents that actually move money to the right
          people.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Legacy checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-retire-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Forms beat wills: the hierarchy</h2>
          <p className="mt-3">
            Contract designations — IRA and 401(k) beneficiary forms, life-insurance
            beneficiaries, payable-on-death bank titles, transfer-on-death brokerage and
            (in many states) home deeds — pass outside probate directly to the named
            person, overriding whatever your will says. A will controls only leftover
            individually owned assets, names guardians for minors, and nominates an
            executor. That priority inversion causes the classic disaster: a will leaving
            &ldquo;everything to my wife&rdquo; while a 1990s 401(k) form still names an
            ex-spouse — the ex-spouse wins. Gather every designation yearly into one
            folder, align them with the will and any trust, and remember divorce decrees
            do not auto-revoke most designations (a few states revoke ex-spouse
            designations by statute; ERISA plans generally do not follow state law).
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                How major assets transfer at death.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Asset</th>
                  <th className="px-4 py-3 font-semibold">Controls transfer</th>
                  <th className="px-4 py-3 font-semibold">Probate?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">IRAs, 401(k)s, life insurance</td><td className="px-4 py-2">Beneficiary form</td><td className="px-4 py-2">No</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Joint/titled accounts, TOD</td><td className="px-4 py-2">Title / TOD form</td><td className="px-4 py-2">No</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Trust property</td><td className="px-4 py-2">Trust terms</td><td className="px-4 py-2">No</td></tr>
                <tr><td className="px-4 py-2">Sole-owned leftovers</td><td className="px-4 py-2">Will</td><td className="px-4 py-2">Yes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $500,000 IRA with three kids</h2>
          <p className="mt-3">
            Rosa names her three adult children equal beneficiaries of a $500,000
            traditional IRA and dies in 2026. Each inherits ~$166,700 under the 10-year
            rule: emptied by December 31, 2036, with annual RMDs also due in 2027–2035
            because Rosa had already begun hers (see our{" "}
            <Link href="/rmd-rules-2026" className="text-amber-200 underline underline-offset-2">
              RMD rules
            </Link>
            ). A child in peak earnings withdrawing $16,670+ yearly pays 24–32% on it —
            the &ldquo;stretch IRA&rdquo; Congress repealed in 2019 would have spread this
            over decades. Had Rosa converted chunks to Roth in her low-income gap years
            (see our{" "}
            <Link href="/retirement-withdrawal-order-strategy" className="text-amber-200 underline underline-offset-2">
              withdrawal-order strategy
            </Link>
            ), the heirs would still empty in 10 years but owe zero tax. Per-stirpes
            wording would have passed a predeceased child&apos;s share to grandchildren;
            per-capita would have split it among survivors — one checkbox, opposite
            families enriched. And had any heir been a minor, the custodian would need
            court-supervised UTMA handling or, better, a trust Rosa set up in advance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Trusts, documents, and incapacity</h2>
          <p className="mt-3">
            Revocable living trusts avoid probate, keep affairs private, and manage assets
            through incapacity — but only for property actually retitled into them, and
            they do not save estate tax. Federal estate tax in 2026 exempts roughly $13M+
            per person (the TCJA sunset debate makes this a moving target; most families
            owe nothing), while a dozen-plus states impose their own estate or inheritance
            taxes at far lower thresholds — check yours. Beyond money: a durable
            financial power of attorney, healthcare proxy, living will, and HIPAA release
            matter more urgently than the will for most retirees, deciding who pays bills
            and makes medical calls during incapacity. Name successor trustees and agents,
            store originals accessibly (not only a safe-deposit box), and tell two people
            where everything lives. The IRA contribution framework behind Roth-legacy
            planning is detailed at{" "}
            <a
              href="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com/roth-vs-traditional-ira-tax
            </a>
            . Examples illustrate only — estate law varies by state, so confirm with
            local counsel; nothing here is legal advice or a guarantee.
          </p>
        </section>

                <AdSlot format="display" slot="TODO-retire-display-1" />
        <AdSlot format="multiplex" slot="TODO-retire-multiplex-1" />
<section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do spouses get special inherited-IRA rules?</summary>
              <p className="mt-1">Yes — spouses may roll inherited IRAs into their own, treat them as their own, or take life-expectancy distributions, preserving spousal Roth conversions and delay strategies no other heir enjoys.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is per stirpes vs. per capita?</summary>
              <p className="mt-1">Per stirpes passes a deceased beneficiary&apos;s share down their branch (to their kids). Per capita splits everything among surviving named individuals. Default rules vary by custodian — write your choice explicitly.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should I name a trust as IRA beneficiary?</summary>
              <p className="mt-1">Sometimes — for minors, spendthrifts, or special-needs heirs — but trusts must be drafted as see-through conduits or accumulation trusts with careful tax analysis. Bad trust drafting accelerates taxes; get specialist counsel.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How often should I review everything?</summary>
              <p className="mt-1">Every 2–3 years plus after marriage, divorce, births, deaths, job changes, moves, and large balance shifts. Calendar it with your RMD review each December.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal, tax, or financial advice. Estate rules
            vary by state; confirm documents with local counsel. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Beneficiaries & Estate Basics for Retirees | LoanPay Retire", description: "Beneficiary designations beat wills: per stirpes vs. per capita, the 10-year inherited IRA rule, TOD deeds, trusts, and review triggers.", url: "https://retire.loanpaylogic.com/beneficiaries-estate-basics" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Do spouses get special inherited-IRA rules?","answer":"Yes — spouses may roll inherited IRAs into their own, treat them as their own, or take life-expectancy distributions, preserving spousal Roth conversions and delay strategies no other heir enjoys."},{"question":"What is per stirpes vs. per capita?","answer":"Per stirpes passes a deceased beneficiary's share down their branch (to their kids). Per capita splits everything among surviving named individuals. Default rules vary by custodian — write your choice explicitly."},{"question":"Should I name a trust as IRA beneficiary?","answer":"Sometimes — for minors, spendthrifts, or special-needs heirs — but trusts must be drafted as see-through conduits or accumulation trusts with careful tax analysis. Bad trust drafting accelerates taxes; get specialist counsel."},{"question":"How often should I review everything?","answer":"Every 2–3 years plus after marriage, divorce, births, deaths, job changes, moves, and large balance shifts. Calendar it with your RMD review each December."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://retire.loanpaylogic.com" }, { name: "Beneficiaries & Estate Basics for Retirees | LoanPay Retire", url: "https://retire.loanpaylogic.com/beneficiaries-estate-basics" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not financial advice</a>
      </p>
    </div>
  );
}
