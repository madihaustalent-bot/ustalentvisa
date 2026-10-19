"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  PLATFORM,
  VISA_PATHWAYS,
  AI_TOOLS,
  STEPS,
  TRANSFORMATION,
  COURSE_MODULES,
  TESTIMONIALS,
  RESOURCES,
} from "@/lib/platform-data";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  User,
  Sparkles,
  Compass,
  Gauge,
  Columns2,
  PenLine,
  FileText,
  BookOpen,
  Video,
  Newspaper,
  Quote,
  Star,
  Trophy,
  Users,
  Globe2,
  TrendingUp,
} from "lucide-react";
import { openQuiz } from "./eligibility-quiz";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  PenLine,
  Gauge,
  Compass,
  Columns2,
  Sparkles,
  FileText,
  BookOpen,
  Video,
  Newspaper,
};

// ============ TRUST BAR ============
export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4">
          {PLATFORM.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="text-center lg:text-left"
            >
              <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium opacity-90">{s.label}</div>
              <div className="mt-0.5 text-xs opacity-60">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ VISA PATHWAYS ============
export function Pathways() {
  return (
    <section id="pathways" className="bg-background py-20 sm:py-28" aria-labelledby="pathways-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="15+ visa pathways · one workspace"
          title="Find the route that fits your story"
          description="Every talent pathway from self-petitions to employer-sponsored and investor routes — each with its own evidence blueprint, timeline estimate, and AI Drafter tuned to USCIS adjudication patterns."
          id="pathways-title"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VISA_PATHWAYS.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/70 bg-card p-6 transition hover:border-primary/40 hover:shadow-premium">
                {p.popular && (
                  <span className="absolute right-4 top-4">
                    <Badge className="bg-accent/20 text-accent-foreground hover:bg-accent/30">
                      Popular
                    </Badge>
                  </span>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold tracking-tight text-primary">
                    {p.code}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>

                <div className="mt-4 space-y-2 border-t border-border/60 pt-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="flex items-center gap-1 font-medium text-foreground">
                      <Clock className="h-3 w-3 text-primary" />
                      {p.timeline}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Self-petition</span>
                    <span
                      className={`flex items-center gap-1 font-medium ${
                        p.selfPetition ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {p.selfPetition ? (
                        <>
                          <CheckCircle2 className="h-3 w-3" />
                          Yes
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3 w-3 opacity-50" />
                          No
                        </>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="font-medium text-foreground">{p.difficulty}</span>
                  </div>
                </div>

                <p className="mt-4 rounded-lg bg-muted/60 p-3 text-xs italic text-muted-foreground">
                  <span className="font-semibold not-italic text-foreground">Best fit:</span>{" "}
                  {p.fit}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            onClick={() => openQuiz()}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Take the Visa Match quiz
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            5 minutes · free · no signup
          </span>
        </div>
      </div>
    </section>
  );
}

// ============ AI TOOLS ============
export function AITools() {
  return (
    <section
      id="tools"
      className="relative overflow-hidden bg-cream py-20 sm:py-28"
      aria-labelledby="tools-title"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The AI workbench"
          title="Six tools that do the boring 80% of your petition"
          description="Diagnostics, drafting, opportunity discovery, and petition generation — purpose-built for talent visa applicants and tuned on 1,400+ approved cases. You bring the achievements; we structure them into something an adjudicator can actually read."
          id="tools-title"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AI_TOOLS.map((tool, i) => {
            const Icon = ICONS[tool.icon] ?? Sparkles;
            const isGold = tool.accent === "gold";
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06 }}
                className="group relative"
              >
                <Card className="flex h-full flex-col overflow-hidden border-border/70 bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-premium">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        isGold
                          ? "bg-accent/15 text-accent-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {tool.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>

                  <div className="mt-5 border-t border-border/60 pt-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Outputs
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {tool.outputs.map((o) => (
                        <span
                          key={o}
                          className={`rounded-md px-2 py-1 text-xs font-medium ${
                            isGold
                              ? "bg-accent/10 text-accent-foreground"
                              : "bg-primary/8 text-primary"
                          }`}
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============ HOW IT WORKS ============
export function HowItWorks() {
  return (
    <section id="how" className="bg-background py-20 sm:py-28" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Three steps · one workspace"
          title="From 'Am I even eligible?' to filed petition"
          description="No spreadsheets, no email chains, no attorneys guessing. Pathrise walks you through a diagnostic, a build phase, and a filing phase — each with concrete artifacts and full visibility."
          id="how-title"
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-premium">
                    <span className="font-display text-lg font-bold">{step.n}</span>
                  </div>
                  <div className="hidden h-px flex-1 bg-border lg:block" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {step.artifacts.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-border/80 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ TRANSFORMATION ============
export function Transformation() {
  return (
    <section className="bg-forest py-20 text-forest-foreground sm:py-28" aria-labelledby="transform-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            The transformation
          </p>
          <h2
            id="transform-title"
            className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            What changes when you stop DIYing in the dark
          </h2>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            Most self-petitioners burn out before they file — they piece together
            advice from Reddit, get three different answers from three attorneys, and
            spend months second-guessing their evidence. Pathrise replaces that with a
            structured, observable pipeline.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <div className="flex items-center gap-2 text-sm font-medium opacity-70">
              <XCircle className="h-4 w-4" />
              {TRANSFORMATION.before.label}
            </div>
            <ul className="mt-5 space-y-3">
              {TRANSFORMATION.before.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 opacity-50" />
                  <span className="opacity-80">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-2xl border border-accent/30 bg-accent/10 p-7"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <CheckCircle2 className="h-4 w-4" />
              {TRANSFORMATION.after.label}
            </div>
            <ul className="mt-5 space-y-3">
              {TRANSFORMATION.after.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ COURSE PREVIEW ============
export function CoursePreview() {
  return (
    <section className="bg-background py-20 sm:py-28" aria-labelledby="course-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              The expert course
            </p>
            <h2
              id="course-title"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              12 modules · 7+ hours
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The full talent visa curriculum — written and delivered by attorneys and
              successful self-petitioners. Each module is hands-on: watch the lesson,
              apply it to your case workspace, mark it done.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                32,000+ enrolled
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Trophy className="h-4 w-4 text-accent" />
                94% approval rate
              </div>
            </div>
            <Button
              className="mt-7 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => openQuiz()}
            >
              Start the first module free
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-premium">
              <div className="grid grid-cols-12 gap-2 border-b border-border/60 bg-muted/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <div className="col-span-1">#</div>
                <div className="col-span-7">Module</div>
                <div className="col-span-3 sm:col-span-2">Duration</div>
                <div className="hidden sm:col-span-2 sm:block">Status</div>
              </div>
              <div className="max-h-[28rem] overflow-y-auto">
                {COURSE_MODULES.map((m, i) => (
                  <motion.div
                    key={m.n}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="grid grid-cols-12 items-center gap-2 border-b border-border/40 px-5 py-3.5 transition last:border-0 hover:bg-muted/40"
                  >
                    <div className="col-span-1 font-display text-sm font-bold text-muted-foreground">
                      {String(m.n).padStart(2, "0")}
                    </div>
                    <div className="col-span-7">
                      <div className="text-sm font-semibold text-foreground">
                        {m.title}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {m.summary}
                      </div>
                    </div>
                    <div className="col-span-3 flex items-center gap-1 text-xs text-muted-foreground sm:col-span-2">
                      <Clock className="h-3 w-3" />
                      {m.duration}
                    </div>
                    <div className="hidden sm:col-span-2 sm:block">
                      <Badge
                        variant="outline"
                        className="border-primary/30 bg-primary/5 text-primary"
                      >
                        {m.n <= 2 ? "Free preview" : "Pro"}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
export function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Real petitions · real approvals"
          title="The receipts"
          description="Pathrise members have filed across 15+ pathways from 60+ countries. Here are six of them — every quote attached to a real approved case."
          id="testimonials-title"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="flex h-full flex-col"
            >
              <Card className="flex h-full flex-col rounded-2xl border-border/70 bg-card p-6">
                <Quote className="h-7 w-7 text-accent" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                  {t.quote}
                </p>
                <div className="mt-5 border-t border-border/60 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                      {t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{t.title}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 font-medium text-primary">
                      <Trophy className="h-3 w-3" />
                      {t.route}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe2 className="h-3 w-3" />
                      {t.location}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ RESOURCES ============
export function Resources() {
  return (
    <section id="resources" className="bg-background py-20 sm:py-28" aria-labelledby="resources-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Free resources"
          title="Start before you sign up"
          description="Four lead magnets we keep free on purpose. They're a real preview of how we think about talent visas — not a thinly disguised sales pitch."
          id="resources-title"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((r, i) => {
            const Icon = ICONS[r.icon] ?? BookOpen;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border-border/70 bg-card transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-premium">
                  <div className="flex items-center justify-between p-5 pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <div className="px-5 pb-5">
                    <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {r.type}
                    </div>
                    <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {r.blurb}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-forest to-primary p-8 text-forest-foreground sm:p-12"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-accent">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  The USCIS digest
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                Every Monday, one approved case dissected.
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80">
                Policy updates, approval-rate shifts, and a single approved case
                broken down to its moving parts. Read in 4 minutes — written by
                people who actually file these.
              </p>
            </div>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@work.com"
                className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-forest-foreground placeholder:text-forest-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Email address"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
export function FinalCTA() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-10 text-center shadow-premium sm:p-16"
        >
          <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-60" aria-hidden="true" />
          <div className="relative">
            <div className="mb-5 flex justify-center">
              <Badge className="gap-1.5 border-accent/30 bg-accent/10 text-accent-foreground">
                <Sparkles className="h-3 w-3" />
                94% approval rate · 1,400+ filed
              </Badge>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
              Five minutes from now, you'll know your three best pathways.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Take the Visa Match quiz, see your fit scores, and decide whether to
              keep going. No credit card, no attorney call required to start.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => openQuiz()}
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Check my eligibility
                <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border bg-background/60 backdrop-blur-sm"
              >
                <a href="#pricing">See pricing</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-accent text-accent" />
                4.9 from 12,000+ members
              </span>
              <span>·</span>
              <span>Cancel anytime</span>
              <span>·</span>
              <span>EN · ES · PT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ SHARED ============
function SectionHeader({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  id?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
