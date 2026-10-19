"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { PRICING } from "@/lib/platform-data";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";
import { openQuiz } from "./eligibility-quiz";

const TIER_ICONS = [Rocket, Sparkles, Crown];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-background py-20 sm:py-28" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Pricing · cancel anytime
          </p>
          <h2
            id="pricing-title"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            Start free. Upgrade when you're ready to file.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            Three tiers. The first month is discounted on every paid plan. No contracts,
            no setup fees, no hidden attorney surcharges.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium transition ${
                !annual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={annual}
              onCheckedChange={setAnnual}
              aria-label="Toggle annual billing"
            />
            <span
              className={`text-sm font-medium transition ${
                annual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Annual
            </span>
            <Badge className="bg-accent/15 text-accent-foreground hover:bg-accent/25">
              Save 2 months
            </Badge>
          </div>
        </motion.div>

        {/* Tiers */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING.tiers.map((tier, i) => {
            const Icon = TIER_ICONS[i];
            const monthlyDisplay = annual
              ? Math.round(tier.monthly * 0.833)
              : tier.monthly;
            const isFirstMonth = tier.firstMonth > 0 && tier.firstMonth < tier.monthly;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <Card
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition ${
                    tier.highlight
                      ? "border-primary/40 bg-card shadow-premium ring-1 ring-primary/20"
                      : "border-border/70 bg-card hover:border-primary/30"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                  )}
                  {tier.highlight && (
                    <div className="absolute right-4 top-5">
                      <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Most popular
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        tier.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {tier.name}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{tier.tagline}</p>

                  <div className="mt-6">
                    {tier.monthly === 0 ? (
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl font-bold text-foreground">
                          $0
                        </span>
                        <span className="text-sm text-muted-foreground">/ month</span>
                      </div>
                    ) : (
                      <>
                        {isFirstMonth && !annual && (
                          <div className="mb-1 flex items-baseline gap-2">
                            <span className="font-display text-sm text-muted-foreground line-through">
                              ${tier.monthly}
                            </span>
                            <span className="text-xs font-medium text-accent-foreground">
                              First month ${tier.firstMonth}
                            </span>
                          </div>
                        )}
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-4xl font-bold text-foreground">
                            ${monthlyDisplay}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            / month{annual ? ", billed yearly" : ""}
                          </span>
                        </div>
                        {annual && (
                          <p className="mt-1 text-xs text-primary">
                            You save ${tier.monthly * 12 - monthlyDisplay * 12}/year
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <Button
                    className={`mt-6 w-full ${
                      tier.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                    size="lg"
                    onClick={() => openQuiz()}
                  >
                    {tier.cta}
                  </Button>

                  <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6">
                    {tier.features.map((f) => {
                      const isHeader = f.endsWith(":");
                      return (
                        <li
                          key={f}
                          className={`flex items-start gap-2.5 text-sm ${
                            isHeader
                              ? "font-semibold text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {!isHeader && (
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          )}
                          <span className={isHeader ? "ml-0" : ""}>{f}</span>
                        </li>
                      );
                    })}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          All plans include the Visa Match quiz, Visa Compare tool, and access to the
          community. Upgrade, downgrade, or cancel from your dashboard at any time.
          Pathrise is an educational platform and does not provide legal advice; Elite
          members can be matched with licensed attorneys for case-specific guidance.
        </motion.p>
      </div>
    </section>
  );
}
