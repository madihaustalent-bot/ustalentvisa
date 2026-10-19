"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PLATFORM } from "@/lib/platform-data";
import { openQuiz } from "./eligibility-quiz";
import { ArrowRight, PlayCircle, ShieldCheck, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background"
      aria-labelledby="hero-title"
    >
      {/* Background mesh */}
      <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-5 gap-1.5 border-accent/30 bg-accent/10 text-accent-foreground hover:bg-accent/15">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Live · 1,400+ approved · 94% approval rate
              </Badge>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
            >
              The talent visa platform that does the{" "}
              <span className="relative whitespace-nowrap">
                <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                  thinking
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full text-accent"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5 C 50 1, 150 1, 198 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              for you.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
            >
              {PLATFORM.promise}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                onClick={() => openQuiz()}
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <span>Check eligibility — 5 min</span>
                <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-background/60 backdrop-blur-sm"
                asChild
              >
                <a href="#how">
                  <PlayCircle className="mr-1.5 h-4 w-4 text-primary" />
                  See how it works
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                No credit card to start
              </span>
              <span className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                4.9 from 12,000+ members
              </span>
              <span className="flex items-center gap-1.5">
                <span className="hidden h-px w-6 bg-border sm:block" />
                EN · ES · PT
              </span>
            </motion.div>
          </div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      {/* Floating accent cards */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -left-3 top-6 z-10 hidden rounded-2xl border border-border/80 bg-background/95 p-3 shadow-premium backdrop-blur sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-sm font-semibold text-foreground">
              Profile strength
            </div>
            <div className="text-[11px] text-muted-foreground">
              7 of 10 criteria met
            </div>
          </div>
          <div className="ml-2 font-display text-lg font-bold text-primary">
            82%
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="absolute -bottom-4 -right-3 z-10 hidden rounded-2xl border border-border/80 bg-background/95 p-3 shadow-premium backdrop-blur sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground">
            <Star className="h-5 w-5 fill-current" />
          </div>
          <div>
            <div className="font-display text-sm font-semibold text-foreground">
              New opportunity
            </div>
            <div className="text-[11px] text-muted-foreground">
              IEEE Senior Member — due in 12d
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main card — case workspace mock */}
      <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-background to-muted/40 p-5 shadow-premium sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Your case workspace
            </div>
            <div className="mt-0.5 font-display text-lg font-semibold text-foreground">
              EB-1A · I-140 petition
            </div>
          </div>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/15">
            On track
          </Badge>
        </div>

        {/* Progress steps */}
        <div className="mt-6 space-y-3">
          {[
            { label: "Visa Match complete", state: "done" },
            { label: "Field of expertise generated", state: "done" },
            { label: "Cover letter — AI draft", state: "done" },
            { label: "Recommendation letters (3/4)", state: "active" },
            { label: "Exhibits indexed", state: "pending" },
            { label: "Attorney review", state: "pending" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/80 px-3 py-2.5"
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                  item.state === "done"
                    ? "bg-primary text-primary-foreground"
                    : item.state === "active"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {item.state === "done" ? "✓" : i + 1}
              </span>
              <span className="flex-1 text-sm font-medium text-foreground">
                {item.label}
              </span>
              {item.state === "active" && (
                <span className="text-[10px] uppercase tracking-wider text-accent-foreground">
                  In progress
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-forest px-4 py-3 text-forest-foreground">
          <div>
            <div className="text-[11px] uppercase tracking-wider opacity-80">
              Projected filing date
            </div>
            <div className="font-display text-base font-semibold">
              Mar 12, 2026 · 18 weeks ahead of plan
            </div>
          </div>
          <ArrowRight className="h-5 w-5 opacity-80" />
        </div>
      </div>
    </div>
  );
}
