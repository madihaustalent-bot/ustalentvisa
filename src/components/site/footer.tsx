"use client";

import { PLATFORM, FOOTER_LINKS } from "@/lib/platform-data";
import { Sparkles, Mail, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Sparkles className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary" />
              </div>
              <span className="font-display text-lg font-semibold">
                {PLATFORM.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-75">
              The AI-powered talent visa platform. Eligibility in five minutes,
              AI-drafted petitions, expert-vetted opportunities, and optional attorney
              support — across 15+ visa pathways.
            </p>

            {/* Newsletter */}
            <form
              className="mt-6 flex max-w-sm gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@work.com"
                className="flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder:text-forest-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-lg bg-accent px-3 text-accent-foreground transition hover:bg-accent/90"
                aria-label="Subscribe"
              >
                <Mail className="h-4 w-4" />
              </button>
            </form>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[Twitter, Youtube, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider opacity-70">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-forest-foreground/80 transition hover:text-accent"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer + legal */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-xs leading-relaxed text-forest-foreground/60">
            <strong className="font-semibold text-forest-foreground/80">
              Disclaimer:
            </strong>{" "}
            {PLATFORM.name} is an educational and tooling platform, not a law firm.
            Content on this site is not legal advice and does not create an
            attorney–client relationship. Eligibility outcomes shown are illustrative;
            individual results depend on facts specific to each case. Communications
            with attorneys via the Elite tier attorney-connect feature may be subject
            to separate engagement letters. Visas referenced (EB-1A, EB-2 NIW, O-1A,
            EB-5, L-1A, H-1B, E-2, etc.) are categories of US immigration law; this
            site is not affiliated with USCIS or any US government agency.
          </p>

          <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-forest-foreground/60">
              © {new Date().getFullYear()} {PLATFORM.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-forest-foreground/60">
              <span>Made for global talent · EN · ES · PT</span>
              <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
              <span>SOC 2 Type II · GDPR · CCPA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
