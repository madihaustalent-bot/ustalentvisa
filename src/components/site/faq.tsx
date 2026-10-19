"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/platform-data";
import { openQuiz } from "./eligibility-quiz";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";

export function FAQ_Section() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <HelpCircle className="h-6 w-6" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Frequently asked
          </p>
          <h2
            id="faq-title"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            Everything you wanted to ask before signing up
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border/70 bg-card px-5 transition hover:border-primary/30 data-[state=open]:border-primary/40 data-[state=open]:shadow-premium"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline">
                  <span className="pr-3">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-border/70 bg-muted/40 p-6 text-center sm:p-8"
        >
          <p className="font-display text-lg font-semibold text-foreground">
            Still have a question?
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Take the Visa Match quiz — even your specific edge case is covered.
          </p>
          <Button
            onClick={() => openQuiz()}
            className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Start the quiz
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
