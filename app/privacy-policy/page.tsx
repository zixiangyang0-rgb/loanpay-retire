import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Retire",
  description: "Privacy policy for retire.loanpaylogic.com: what we collect and how we use it.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Retire does not require accounts and does not ask for your name, Social
        Security number, or financial credentials. Any estimator on this site runs in your
        browser; the numbers you type never leave your device to our servers.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Like most publishers, we use basic, privacy-respecting analytics and Google AdSense to
        keep the guides free. AdSense and our hosting provider may set cookies or collect
        standard log data (pages viewed, device type, approximate location) to serve and
        measure ads. You can control cookies in your browser settings and opt out of
        personalized advertising through Google&apos;s ad settings.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        If you email us, we keep your message only long enough to respond and fix reported
        issues. We never sell personal information. Questions about this policy:
        support@loanpaylogic.com.
      </p>
    </div>
  );
}
