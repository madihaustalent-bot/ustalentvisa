"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QUIZ_QUESTIONS, scoreQuiz } from "@/lib/platform-data";
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Trophy,
} from "lucide-react";

// Lightweight global trigger — any component can call openQuiz()
const QUIZ_EVENT = "ustalentvisa:open-quiz";

export function openQuiz() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(QUIZ_EVENT));
  }
}

const PATHWAY_CODE: Record<string, string> = {
  "EB-1A": "EB-1A",
  "EB-2 NIW": "EB-2 NIW",
  "O-1A": "O-1A",
  "EB-5": "EB-5",
  "L-1A": "L-1A",
  "H-1B": "H-1B",
};

type Result = ReturnType<typeof scoreQuiz>[number] & {
  pathwayCode?: string;
};

export function EligibilityQuiz() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Result[] | null>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(QUIZ_EVENT, handler);
    return () => window.removeEventListener(QUIZ_EVENT, handler);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const reset = useCallback(() => {
    setStep(0);
    setAnswers({});
    setResults(null);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(reset, 250);
  }, [reset]);

  const choose = (qid: string, value: string) => {
    const next = { ...answers, [qid]: value };
    setAnswers(next);
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep((s) => s + 1);
    } else {
      const scored = scoreQuiz(next).map((r) => ({
        ...r,
        pathwayCode: PATHWAY_CODE[r.pathway],
      }));
      setResults(scored);
    }
  };

  const back = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const total = QUIZ_QUESTIONS.length;
  const progress = results
    ? 100
    : ((step + (answers[QUIZ_QUESTIONS[step]?.id] ? 1 : 0)) / total) * 100;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quiz-title"
        >
          <div
            className="absolute inset-0 bg-forest/80 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />
          <motion.div
            initial={{ scale: 0.96, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 16, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="relative w-full max-w-2xl"
          >
            <Card className="overflow-hidden border-0 bg-background shadow-premium">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/60 bg-gradient-to-r from-primary/5 to-accent/10 px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {results ? "Your results" : `Question ${step + 1} of ${total}`}
                    </p>
                    <h3 id="quiz-title" className="font-display text-lg font-semibold text-foreground">
                      {results ? "Top 3 visa pathways for you" : "Visa Match Quiz"}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  aria-label="Close quiz"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Progress */}
              {!results && (
                <div className="px-6 pt-4">
                  <Progress value={progress} className="h-1.5" />
                </div>
              )}

              {/* Body */}
              <div className="max-h-[60vh] overflow-y-auto px-6 py-6">
                {!results ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="font-display text-2xl font-semibold leading-snug text-foreground text-balance">
                        {QUIZ_QUESTIONS[step].question}
                      </h4>
                      <div className="mt-5 space-y-2.5">
                        {QUIZ_QUESTIONS[step].options.map((opt) => {
                          const selected = answers[QUIZ_QUESTIONS[step].id] === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => choose(QUIZ_QUESTIONS[step].id, opt.value)}
                              className={`group flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition ${
                                selected
                                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                                  : "border-border bg-card hover:border-primary/40 hover:bg-muted/50"
                              }`}
                            >
                              <span className="text-sm font-medium text-foreground">
                                {opt.label}
                              </span>
                              <ArrowRight
                                className={`h-4 w-4 shrink-0 transition ${
                                  selected
                                    ? "text-primary"
                                    : "text-muted-foreground group-hover:text-primary"
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <p className="text-sm text-muted-foreground">
                      Based on your answers, here are the three pathways with the strongest fit.
                      Schedule a free call for a deeper analysis.
                    </p>
                    {results.map((r, i) => (
                      <motion.div
                        key={r.pathway}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden border p-4 ${
                            i === 0 ? "border-accent/50 bg-accent/5" : "bg-card"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                {i === 0 && (
                                  <Trophy className="h-4 w-4 text-accent" />
                                )}
                                <h5 className="font-display text-lg font-semibold text-foreground">
                                  {r.pathway}
                                </h5>
                                {i === 0 && (
                                  <Badge className="bg-accent/20 text-accent-foreground hover:bg-accent/30">
                                    Best fit
                                  </Badge>
                                )}
                              </div>
                              <p className="mt-1.5 text-sm text-muted-foreground">
                                {r.reasoning}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="font-display text-3xl font-bold text-primary">
                                {r.fit}%
                              </div>
                              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                Fit score
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                    <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                      <Button
                        size="lg"
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => {
                          close();
                          const el = document.getElementById("pricing");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Start free — see all tools
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                      <Button size="lg" variant="outline" onClick={reset}>
                        <RotateCcw className="mr-1 h-4 w-4" />
                        Retake
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              {!results && (
                <div className="flex items-center justify-between border-t border-border/60 px-6 py-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={back}
                    disabled={step === 0}
                    className="text-muted-foreground"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back
                  </Button>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    Free · 5 minutes · no signup required
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
