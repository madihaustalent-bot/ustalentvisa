"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VISA_PATHWAYS } from "@/lib/platform-data";
import { Check, X, Minus, GitCompareArrows } from "lucide-react";

type VisaCode = (typeof VISA_PATHWAYS)[number]["code"];

// Compact spec table — extend as needed
const SPECS: Record<
  string,
  {
    selfPetition: boolean;
    employerRequired: boolean;
    premiumProcessing: boolean;
    dualIntent: boolean;
    permanent: boolean;
    typicalCost: string;
    timeline: string;
    difficulty: string;
  }
> = {
  "EB-1A": {
    selfPetition: true,
    employerRequired: false,
    premiumProcessing: true,
    dualIntent: true,
    permanent: true,
    typicalCost: "$3K – $15K",
    timeline: "8 – 14 mo",
    difficulty: "Hard",
  },
  "EB-2 NIW": {
    selfPetition: true,
    employerRequired: false,
    premiumProcessing: true,
    dualIntent: true,
    permanent: true,
    typicalCost: "$2K – $10K",
    timeline: "10 – 18 mo",
    difficulty: "Medium",
  },
  "O-1A": {
    selfPetition: false,
    employerRequired: true,
    premiumProcessing: true,
    dualIntent: false,
    permanent: false,
    typicalCost: "$2K – $8K",
    timeline: "2 – 4 mo",
    difficulty: "Medium",
  },
  "EB-1B": {
    selfPetition: false,
    employerRequired: true,
    premiumProcessing: true,
    dualIntent: true,
    permanent: true,
    typicalCost: "$4K – $15K",
    timeline: "9 – 15 mo",
    difficulty: "Medium",
  },
  "EB-1C": {
    selfPetition: false,
    employerRequired: true,
    premiumProcessing: true,
    dualIntent: true,
    permanent: true,
    typicalCost: "$5K – $20K",
    timeline: "10 – 16 mo",
    difficulty: "Medium",
  },
  "EB-5": {
    selfPetition: true,
    employerRequired: false,
    premiumProcessing: false,
    dualIntent: true,
    permanent: true,
    typicalCost: "$800K+ capital",
    timeline: "24 – 36 mo",
    difficulty: "Hard",
  },
  "L-1A": {
    selfPetition: false,
    employerRequired: true,
    premiumProcessing: true,
    dualIntent: true,
    permanent: false,
    typicalCost: "$3K – $8K",
    timeline: "1 – 3 mo",
    difficulty: "Easy",
  },
  "H-1B": {
    selfPetition: false,
    employerRequired: true,
    premiumProcessing: false,
    dualIntent: true,
    permanent: false,
    typicalCost: "$2K – $6K",
    timeline: "6 – 12 mo",
    difficulty: "Medium",
  },
  "E-2": {
    selfPetition: true,
    employerRequired: false,
    premiumProcessing: false,
    dualIntent: false,
    permanent: false,
    typicalCost: "$100K+ investment",
    timeline: "2 – 5 mo",
    difficulty: "Medium",
  },
};

const ROWS: {
  label: string;
  key: keyof (typeof SPECS)[string];
  type: "bool" | "text";
  hint?: string;
}[] = [
  { label: "Self-petition", key: "selfPetition", type: "bool", hint: "No employer or sponsor required" },
  { label: "Employer required", key: "employerRequired", type: "bool" },
  { label: "Premium processing", key: "premiumProcessing", type: "bool", hint: "15-day adjudication for a fee" },
  { label: "Dual intent", key: "dualIntent", type: "bool", hint: "Can pursue green card while on this visa" },
  { label: "Permanent", key: "permanent", type: "bool", hint: "Green card vs non-immigrant visa" },
  { label: "Typical cost", key: "typicalCost", type: "text" },
  { label: "Timeline", key: "timeline", type: "text" },
  { label: "Difficulty", key: "difficulty", type: "text" },
];

export function VisaCompare() {
  const [left, setLeft] = useState<VisaCode>("EB-1A");
  const [right, setRight] = useState<VisaCode>("EB-2 NIW");

  const leftSpec = SPECS[left];
  const rightSpec = SPECS[right];

  return (
    <section className="bg-cream py-20 sm:py-28" aria-labelledby="compare-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Free tool · no signup
          </p>
          <h2
            id="compare-title"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            Visa Compare
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            Pick any two pathways and see them side-by-side on every dimension that
            matters: cost, timeline, sponsorship, premium processing, dual intent, and
            whether it leads to a green card.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12"
        >
          <Card className="overflow-hidden rounded-2xl border-border/70 bg-card shadow-premium">
            {/* Selectors */}
            <div className="grid grid-cols-1 gap-3 border-b border-border/60 bg-muted/30 p-5 sm:grid-cols-2 sm:gap-4 sm:p-6">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Pathway A
                </label>
                <Select value={left} onValueChange={(v) => setLeft(v as VisaCode)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {VISA_PATHWAYS.map((p) => (
                      <SelectItem key={p.code} value={p.code}>
                        {p.code} · {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Pathway B
                </label>
                <Select value={right} onValueChange={(v) => setRight(v as VisaCode)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {VISA_PATHWAYS.map((p) => (
                      <SelectItem key={p.code} value={p.code}>
                        {p.code} · {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Header row */}
            <div className="grid grid-cols-12 gap-2 border-b border-border/60 px-5 py-4 sm:px-6">
              <div className="col-span-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <GitCompareArrows className="h-4 w-4 text-primary" />
                Dimension
              </div>
              <div className="col-span-4">
                <div className="font-display text-lg font-bold text-primary">{left}</div>
                <div className="text-[11px] text-muted-foreground">
                  {VISA_PATHWAYS.find((p) => p.code === left)?.name}
                </div>
              </div>
              <div className="col-span-4">
                <div className="font-display text-lg font-bold text-accent-foreground">
                  {right}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {VISA_PATHWAYS.find((p) => p.code === right)?.name}
                </div>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-border/40">
              {ROWS.map((row) => (
                <div
                  key={row.key}
                  className="grid grid-cols-12 gap-2 px-5 py-3.5 text-sm sm:px-6"
                >
                  <div className="col-span-4 flex flex-col">
                    <span className="font-medium text-foreground">{row.label}</span>
                    {row.hint && (
                      <span className="text-[11px] text-muted-foreground">
                        {row.hint}
                      </span>
                    )}
                  </div>
                  <div className="col-span-4 flex items-center">
                    <SpecCell
                      value={leftSpec?.[row.key]}
                      type={row.type}
                      tone="primary"
                    />
                  </div>
                  <div className="col-span-4 flex items-center">
                    <SpecCell
                      value={rightSpec?.[row.key]}
                      type={row.type}
                      tone="accent"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Verdict */}
            <div className="border-t border-border/60 bg-forest px-5 py-4 text-forest-foreground sm:px-6">
              <div className="flex items-start gap-3">
                <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Verdict
                </Badge>
                <p className="text-sm leading-relaxed">
                  {left === right
                    ? `Pick two different pathways to compare.`
                    : leftSpec?.permanent && rightSpec?.permanent
                      ? `Both ${left} and ${right} lead to a green card. ${leftSpec.selfPetition && !rightSpec.selfPetition ? `${left} lets you self-petition — no employer needed. ` : ""}${leftSpec.premiumProcessing && !rightSpec.premiumProcessing ? `${left} also supports premium processing for a 15-day adjudication. ` : ""}Use the Visa Match quiz to see which fits your background.`
                      : leftSpec?.permanent && !rightSpec?.permanent
                        ? `${left} is a green card; ${right} is a non-immigrant visa. Many members use ${right} first, then transition to ${left}.`
                        : !leftSpec?.permanent && rightSpec?.permanent
                          ? `${right} is a green card; ${left} is a non-immigrant visa. Many members use ${left} first, then transition to ${right}.`
                          : `Both are non-immigrant visas. ${leftSpec.dualIntent && !rightSpec.dualIntent ? `${left} allows dual intent — safer if you plan to pursue a green card. ` : ""}${rightSpec.dualIntent && !leftSpec.dualIntent ? `${right} allows dual intent — safer if you plan to pursue a green card. ` : ""}Run the Visa Match quiz for a fit score.`}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function SpecCell({
  value,
  type,
  tone,
}: {
  value: string | boolean | undefined;
  type: "bool" | "text";
  tone: "primary" | "accent";
}) {
  if (type === "text") {
    return (
      <span className="font-medium text-foreground">
        {value ?? "—"}
      </span>
    );
  }
  const v = value as boolean;
  const toneClasses =
    tone === "primary"
      ? v
        ? "text-primary"
        : "text-muted-foreground"
      : v
        ? "text-accent-foreground"
        : "text-muted-foreground";
  return (
    <span className={`flex items-center gap-1.5 text-sm font-medium ${toneClasses}`}>
      {v ? (
        <Check className="h-4 w-4" />
      ) : (
        <X className="h-4 w-4 opacity-60" />
      )}
      {v ? "Yes" : "No"}
    </span>
  );
}
