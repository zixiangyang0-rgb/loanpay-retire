import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ConsentBanner from "../lib/consent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://retire.loanpaylogic.com"),
  title: {
    default: "LoanPay Retire | Retirement Planning Guides and Estimators",
    template: "%s | LoanPay Retire",
  },
  description:
    "LoanPay Retire offers plain-English United States retirement guides: 401(k) and IRA limits, Social Security timing, RMD rules, Medicare costs, and withdrawal strategies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LoanPay Retire | Retirement Planning Guides and Estimators",
    description:
      "Plan retirement with free educational guides on accounts, Social Security, withdrawals, health costs, and estate basics.",
    url: "https://retire.loanpaylogic.com",
    siteName: "LoanPay Retire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Retire | Retirement Planning Guides and Estimators",
    description:
      "Plan retirement with free educational guides on accounts, Social Security, withdrawals, health costs, and estate basics.",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
      <Link href="/" className="text-lg font-bold tracking-tight">
        LoanPay <span className="text-gradient">Retire</span>
      </Link>
      <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 pb-10 pt-6 text-sm text-slate-400">
      <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
        <Link href="/privacy-policy" className="transition hover:text-white">
          Do Not Sell / Privacy Choices
        </Link>
      </div>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} retire.loanpaylogic.com. Educational content only, not
        financial advice.
      </p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ConsentBanner />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
