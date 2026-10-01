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
        Questions, corrections, or topic requests? Email us at support@loanpaylogic.com and
        mention the page URL so we can find the passage quickly.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We read every message but cannot answer personal retirement questions or provide
        individualized financial, tax, or legal advice. For account-specific issues, contact
        your plan administrator, the Social Security Administration at 1-800-772-1213, or
        Medicare at 1-800-MEDICARE (1-800-633-4227).
      </p>
    </div>
  );
}
