"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose, SheetDescription } from "@/components/ui/sheet";
import { NAV_LINKS, PLATFORM } from "@/lib/platform-data";
import { Menu, Globe, Sparkles, ChevronDown } from "lucide-react";
import { openQuiz } from "./eligibility-quiz";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navCta = (e: React.MouseEvent) => {
    e.preventDefault();
    openQuiz();
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
          </div>
          <div className="leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              {PLATFORM.name}
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Talent Visa Platform
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language */}
          <div className="hidden items-center gap-1 rounded-full border border-border bg-background/60 px-2.5 py-1.5 sm:flex">
            <Globe className="h-3.5 w-3.5 text-muted-foreground" />
            {PLATFORM.languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`rounded-full px-1.5 py-0.5 text-[11px] font-medium transition ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground lg:inline-flex"
            onClick={navCta}
          >
            Sign in
          </Button>

          <Button
            size="sm"
            onClick={navCta}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Check eligibility
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm bg-background p-0">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Browse US Talent Visa sections and switch language.
              </SheetDescription>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <span className="font-display text-base font-semibold">
                      {PLATFORM.name}
                    </span>
                  </div>
                  <SheetClose aria-label="Close menu" />
                </div>
                <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition hover:bg-muted"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto border-t border-border/60 px-5 py-4">
                  <div className="flex items-center gap-2 pb-3 text-xs text-muted-foreground">
                    <Globe className="h-3.5 w-3.5" />
                    <span>Language</span>
                    <ChevronDown className="h-3 w-3" />
                  </div>
                  <div className="flex gap-1.5 pb-4">
                    {PLATFORM.languages.map((l) => (
                      <button
                        key={l}
                        type="button"
                        onClick={() => setLang(l)}
                        className={`flex-1 rounded-md border px-2 py-1.5 text-xs font-medium transition ${
                          lang === l
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={navCta}
                  >
                    Check eligibility — free
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
