import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Retire",
  description:
    "Privacy policy for retire.loanpaylogic.com: what we collect, cookies and AdSense, CCPA rights, opt-out choices, and contact.",
  alternates: {
    canonical: "https://retire.loanpaylogic.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Privacy Policy
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Plain-English summary of what LoanPay Retire collects, how advertising
          cookies work, and the choices you have. Updated October 2026.
        </p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">What we collect</h2>
          <p className="mt-3">
            LoanPay Retire does not require accounts and does not ask for your
            name, Social Security number, or financial credentials. Estimators
            on this site run in your browser; the numbers you type never leave
            your device to our servers. Like most websites, our hosting
            provider records standard log data (pages viewed, device type,
            approximate location, referrer) to operate the site and measure
            reliability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Cookies &amp; AdSense</h2>
          <p className="mt-3">
            We use Google AdSense to keep the guides free. Google and its
            partners may set cookies or use device identifiers to serve and
            measure ads, including personalized advertising where you consent.
            Google&apos;s use of advertising cookies enables it and its
            partners to serve ads based on your visits to this and other
            sites. A lightweight on-site consent banner stores your
            Accept/Decline choice on-device (localStorage
            &ldquo;consent-choice&rdquo;); declining serves non-personalized
            ads. Site owners: personalized ads in the EU/UK additionally
            require enabling Google FundingChoices under AdSense &gt; Privacy
            &amp; messaging for TCF consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">
            CCPA: Your Rights &amp; Do Not Sell
          </h2>
          <p className="mt-3">
            Under the California Consumer Privacy Act (CCPA/CPRA), California
            residents have the right to know what personal information is
            collected, request deletion, correct inaccurate data, and opt out
            of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal
            information for cross-context behavioral advertising. We do not
            sell personal information for money, but AdSense cookies may
            constitute sharing under California law. To exercise your rights,
            including Do Not Sell / Privacy Choices requests, email{" "}
            <a
              href="mailto:support@loanpaylogic.com"
              className="text-amber-200 underline underline-offset-2"
            >
              support@loanpaylogic.com
            </a>{" "}
            or use the footer &ldquo;Do Not Sell / Privacy Choices&rdquo; link
            (this page). We respond within 45 days and never discriminate for
            exercising your rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Opt-out choices</h2>
          <p className="mt-3">
            You can control ad personalization at any time:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Google ad settings:{" "}
              <a
                href="https://adssettings.google.com"
                className="text-amber-200 underline underline-offset-2"
              >
                https://adssettings.google.com
              </a>{" "}
              — turn off Ad Personalization.
            </li>
            <li>
              Network Advertising Initiative opt-out:{" "}
              <a
                href="https://optout.networkadvertising.org"
                className="text-amber-200 underline underline-offset-2"
              >
                optout.networkadvertising.org
              </a>
              .
            </li>
            <li>
              Digital Advertising Alliance WebChoices:{" "}
              <a
                href="https://optout.aboutads.info"
                className="text-amber-200 underline underline-offset-2"
              >
                optout.aboutads.info
              </a>
              .
            </li>
            <li>
              Your browser settings — block or clear cookies; declining our
              consent banner serves non-personalized ads.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Contact</h2>
          <p className="mt-3">
            Questions about this policy or a privacy request: email{" "}
            <a
              href="mailto:support@loanpaylogic.com"
              className="text-amber-200 underline underline-offset-2"
            >
              support@loanpaylogic.com
            </a>
            . See also our{" "}
            <Link href="/disclaimer" className="text-amber-200 underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
