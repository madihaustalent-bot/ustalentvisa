// Central content for the Pathrise unified visa platform.
// Synthesized from analysis of USWALA, eb2niw.info, LevelUp EB1A Experts,
// Tukki.ai, eb1greencard.info, and oscarsgreencard.com.

export const PLATFORM = {
  name: "Pathrise",
  tagline: "AI-Powered Talent Visa & Green Card Platform",
  promise:
    "One platform that takes you from \u201cAm I even eligible?\u201d to a USCIS-ready petition — combining AI drafting, expert-vetted opportunities, and a 15-year attorney bench, with or without a lawyer.",
  stats: [
    { label: "Talent visa approvals", value: "1,400+", sub: "EB-1A · EB-2 NIW · O-1A" },
    { label: "Approval rate", value: "94%", sub: "Across all represented cases" },
    { label: "Active members", value: "32,000+", sub: "Founders · researchers · engineers" },
    { label: "Referral rate", value: "91%", sub: "Clients who refer another applicant" },
  ],
  languages: ["EN", "ES", "PT"],
};

export const VISA_PATHWAYS = [
  {
    code: "EB-1A",
    name: "Extraordinary Ability Green Card",
    blurb:
      "Top tier of employment-based permanent residency. Self-petition — no employer, no labor cert. Reserved for those with sustained national or international acclaim.",
    fit: "10+ years of impact, awards, press, or original contributions of major significance.",
    timeline: "8 – 14 months",
    selfPetition: true,
    difficulty: "Hard",
    popular: true,
  },
  {
    code: "EB-2 NIW",
    name: "National Interest Waiver",
    blurb:
      "Self-petitioned green card for professionals whose work has substantial merit and national importance. Bypasses the PERM labor certification process entirely.",
    fit: "Advanced degree or exceptional ability, with a project that benefits the US.",
    timeline: "10 – 18 months",
    selfPetition: true,
    difficulty: "Medium",
    popular: true,
  },
  {
    code: "O-1A",
    name: "Extraordinary Ability Visa",
    blurb:
      "Non-immigrant visa for individuals of extraordinary ability in sciences, education, business, or athletics. Renewable indefinitely; common stepping stone to EB-1A.",
    fit: "Sustained recognition, awards, publications, or judging others' work.",
    timeline: "2 – 4 months",
    selfPetition: false,
    difficulty: "Medium",
    popular: true,
  },
  {
    code: "EB-1B",
    name: "Outstanding Researcher / Professor",
    blurb:
      "Employer-sponsored permanent residency for outstanding professors and researchers with at least three years of experience and international recognition.",
    fit: "Tenure-track academics and senior research scientists with a sponsoring employer.",
    timeline: "9 – 15 months",
    selfPetition: false,
    difficulty: "Medium",
  },
  {
    code: "EB-1C",
    name: "Multinational Executive / Manager",
    blurb:
      "Green card for executives and managers transferring from a foreign qualifying organization to a US affiliate, subsidiary, or parent company.",
    fit: "1+ year of executive/managerial service abroad in the last 3 years.",
    timeline: "10 – 16 months",
    selfPetition: false,
    difficulty: "Medium",
  },
  {
    code: "EB-5",
    name: "Investor Green Card",
    blurb:
      "Permanent residency through qualified investment of $800K–$1.05M in a US commercial enterprise that creates 10+ full-time jobs.",
    fit: "High-net-worth individuals seeking a capital-led route to a green card.",
    timeline: "24 – 36 months",
    selfPetition: true,
    difficulty: "Hard",
  },
  {
    code: "L-1A",
    name: "Intracompany Transferee",
    blurb:
      "Non-immigrant visa for executives and managers transferring to a US office of the same employer. Dual-intent — can transition to EB-1C.",
    fit: "1+ year of managerial service abroad within the past 3 years.",
    timeline: "1 – 3 months",
    selfPetition: false,
    difficulty: "Easy",
  },
  {
    code: "H-1B",
    name: "Specialty Occupation Visa",
    blurb:
      "Non-immigrant visa for specialty occupations requiring a bachelor's degree or higher. Cap-subject with an annual lottery; dual-intent.",
    fit: "Degree-holders with a sponsoring US employer in a specialty field.",
    timeline: "6 – 12 months (cap)",
    selfPetition: false,
    difficulty: "Medium",
  },
  {
    code: "E-2",
    name: "Treaty Investor Visa",
    blurb:
      "Non-immigrant visa for investors from treaty countries who commit substantial capital to a US enterprise. Renewable indefinitely.",
    fit: "Entrepreneurs from treaty countries making a substantial, at-risk investment.",
    timeline: "2 – 5 months",
    selfPetition: true,
    difficulty: "Medium",
  },
] as const;

export const AI_TOOLS = [
  {
    id: "drafter",
    icon: "PenLine",
    name: "AI Petition Drafter",
    description:
      "Turn scattered achievements into a structured cover letter, recommendation letter, and exhibit index in minutes — tuned to USCIS adjudication patterns for your pathway.",
    outputs: ["Cover letter", "Recommendation letter drafts", "Exhibit index", "Field of expertise memo"],
    accent: "primary",
  },
  {
    id: "profile",
    icon: "Gauge",
    name: "Profile Strength Engine",
    description:
      "Score each EB-1A or O-1A criterion against the 10 evidence types USCIS uses. See exactly what's strong, what's borderline, and what's missing — before you file.",
    outputs: ["Criterion scorecard", "Risk heatmap", "Gap action plan", "Approval probability"],
    accent: "gold",
  },
  {
    id: "opportunities",
    icon: "Compass",
    name: "Opportunity Engine",
    description:
      "3,000+ expert-vetted awards, conferences, judging invitations, and society memberships refreshed monthly — filtered to your field and current gaps.",
    outputs: ["Personalized queue", "Application templates", "Deadline tracker", "Priority scoring"],
    accent: "primary",
  },
  {
    id: "compare",
    icon: "Columns2",
    name: "Visa Compare",
    description:
      "Side-by-side comparison of any two visa pathways on criteria, cost, timeline, portability, and dual-intent. Replace guesswork with a decision matrix.",
    outputs: ["Side-by-side matrix", "Cost calculator", "Timeline comparison", "Recommendation"],
    accent: "gold",
  },
  {
    id: "match",
    icon: "Sparkles",
    name: "Visa Match Quiz",
    description:
      "A 5-minute adaptive quiz that surfaces your three best-fit pathways based on background, goals, timing, and constraints — with a custom roadmap for each.",
    outputs: ["Top 3 pathways", "Fit score", "Custom roadmap", "Risk flags"],
    accent: "primary",
  },
  {
    id: "petition-gen",
    icon: "FileText",
    name: "Petition Generator",
    description:
      "Upload your evidence, answer structured prompts, and generate a complete I-140 petition package — cover letter, exhibit list, and RFE-response scaffolds included.",
    outputs: ["I-140 cover letter", "Exhibit list", "RFE response scaffolds", "Filing checklist"],
    accent: "gold",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Diagnose",
    body:
      "Take the 5-minute Visa Match quiz. We analyze your background, achievements, and timeline against USCIS criteria across 15+ pathways and surface your top three options with fit scores.",
    artifacts: ["Fit score", "Top-3 pathways", "Gap analysis"],
  },
  {
    n: "02",
    title: "Build",
    body:
      "Use the AI Drafter, Opportunity Engine, and Profile Strength tools to assemble a criteria-ready petition. Expert-vetted awards and judging invitations close your gaps in weeks, not years.",
    artifacts: ["Draft cover letter", "Exhibit index", "Opportunity queue"],
  },
  {
    n: "03",
    title: "File & Defend",
    body:
      "Submit with confidence. Track every artifact in your case workspace, route to a vetted attorney for review, and respond to any RFE with templated scaffolds from real approvals.",
    artifacts: ["Filing checklist", "Attorney review", "RFE response kit"],
  },
] as const;

export const TRANSFORMATION = {
  before: {
    label: "Without Pathrise",
    points: [
      "Hours spent on Reddit threads and YouTube videos",
      "Three attorney consults, three different answers",
      "Generic templates that miss your pathway's nuances",
      "$8K – $25K in legal fees before filing",
      "No visibility into case status or RFE risk",
    ],
  },
  after: {
    label: "With Pathrise",
    points: [
      "5-minute quiz narrows 15+ pathways to your top 3",
      "AI Drafter tailored to your specific field and pathway",
      "Expert-vetted opportunities fill real gaps weekly",
      "Flat fees from $49 — attorney review only when you need it",
      "Full case workspace with status, risk flags, and deadlines",
    ],
  },
};

export const PRICING = {
  tiers: [
    {
      name: "Starter",
      tagline: "Diagnose & explore — free forever",
      monthly: 0,
      firstMonth: 0,
      cta: "Start free",
      highlight: false,
      features: [
        "All 15+ visa pathways",
        "Visa Match quiz (unlimited)",
        "Visa Compare tool",
        "1 Profile Strength analysis",
        "1 Field of Expertise generation",
        "5 AI Drafter generations",
        "Browse 100 opportunities / month",
        "Community access",
      ],
    },
    {
      name: "Pro",
      tagline: "Build a criteria-ready petition",
      monthly: 249,
      firstMonth: 49,
      cta: "Start 7-day trial",
      highlight: true,
      features: [
        "Everything in Starter, plus:",
        "Field of Expertise built from USCIS data",
        "Unlimited Profile Strength analyses",
        "Personalized opportunity recommendations",
        "Full opportunity library — 3,000+ new / month",
        "AI Petition Drafter (unlimited)",
        "12-module expert video course (7+ hours)",
        "RFE response kit",
        "Petition Generator",
      ],
    },
    {
      name: "Elite",
      tagline: "White-glove + attorney connect",
      monthly: 499,
      firstMonth: 99,
      cta: "Apply for Elite",
      highlight: false,
      features: [
        "Everything in Pro, plus:",
        "Dedicated success manager",
        "Bi-weekly 1:1 expert sessions",
        "Personalized action plan",
        "Expert-vetted priority opportunities",
        "Unlimited profile reviews",
        "Vetted attorney connect (avg. $5K savings)",
        "Concierge filing support",
      ],
    },
  ],
};

export const COURSE_MODULES = [
  {
    n: 1,
    title: "The Talent Visa Landscape",
    duration: "32 min",
    summary: "EB-1A, EB-2 NIW, and O-1A compared — who wins, who waits, and why.",
  },
  {
    n: 2,
    title: "Decoding USCIS Criteria",
    duration: "45 min",
    summary: "How adjudicators actually read evidence — what they look for first.",
  },
  {
    n: 3,
    title: "Building Your Field of Expertise",
    duration: "28 min",
    summary: "The single most underestimated step in a self-petition.",
  },
  {
    n: 4,
    title: "Awards, Memberships & Press",
    duration: "41 min",
    summary: "Which accolades count, which don't, and how to manufacture the right ones.",
  },
  {
    n: 5,
    title: "Original Contributions of Major Significance",
    duration: "37 min",
    summary: "The hardest criterion to satisfy — and the most decisive.",
  },
  {
    n: 6,
    title: "Recommendation Letters That Move Adjudicators",
    duration: "33 min",
    summary: "Who to ask, what to give them, and how to structure the letter.",
  },
  {
    n: 7,
    title: "Drafting the Cover Letter",
    duration: "52 min",
    summary: "The architecture of a winning cover letter, paragraph by paragraph.",
  },
  {
    n: 8,
    title: "Exhibits, Indexing & Filing",
    duration: "29 min",
    summary: "How to package a 200-page petition so an adjudicator can actually read it.",
  },
  {
    n: 9,
    title: "RFE Response Strategy",
    duration: "48 min",
    summary: "The 4 most common RFE patterns and how to dismantle each.",
  },
  {
    n: 10,
    title: "Concurrent Filing & Adjustment of Status",
    duration: "31 min",
    summary: "When and how to file I-485 alongside I-140.",
  },
  {
    n: 11,
    title: "Premium Processing",
    duration: "22 min",
    summary: "When the $2,805 fee pays for itself, and when it's wasted.",
  },
  {
    n: 12,
    title: "Post-Approval: Maintaining Status",
    duration: "26 min",
    summary: "What changes after the green card arrives, and what doesn't.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I had been told by two attorneys that I needed an H-1B first. The Pathrise quiz flagged EB-2 NIW in 4 minutes — I filed 5 months later and was approved without an RFE.",
    name: "Dr. Aisha R.",
    title: "Computational biologist",
    route: "EB-2 NIW · approved in 7 months",
    location: "Boston, MA",
  },
  {
    quote:
      "The Profile Strength tool told me exactly which two criteria were weak. I spent six weeks closing those gaps with the Opportunity Engine and filed with confidence.",
    name: "Mateo L.",
    title: "Senior ML engineer",
    route: "EB-1A · approved, no RFE",
    location: "San Francisco, CA",
  },
  {
    quote:
      "I was quoted $18,000 by a traditional firm. I spent $49 on the first month, $249 for three more, and got an attorney review on the final package for a fraction of that.",
    name: "Priya S.",
    title: "Indie product designer",
    route: "O-1A → EB-1A · both approved",
    location: "Austin, TX",
  },
  {
    quote:
      "As a founder moving my company to the US, I needed speed and certainty. The attorney connect matched me with someone who had done 30+ L-1A → EB-1C transitions.",
    name: "Kwame O.",
    title: "Founder & CEO",
    route: "L-1A → EB-1C · both approved",
    location: "Remote → NYC",
  },
  {
    quote:
      "What sold me was the transparency. Every artifact in my case workspace had a status, a risk flag, and a deadline. I never once had to chase anyone for an update.",
    name: "Yuki T.",
    title: "Climate scientist",
    route: "EB-2 NIW · approved in 9 months",
    location: "Seattle, WA",
  },
  {
    quote:
      "The RFE response kit paid for an entire year of Pro. Two of my three criteria were challenged; the kit walked me through dismantling each one paragraph by paragraph.",
    name: "Sofía M.",
    title: "Civil engineer, PhD",
    route: "EB-1A · approved after RFE",
    location: "Chicago, IL",
  },
];

export const FAQ = [
  {
    q: "Is this legal advice?",
    a: "No. Pathrise is an educational and tooling platform. When you upgrade to Elite, you can be matched with a licensed immigration attorney for case-specific advice; the platform itself does not provide legal representation.",
  },
  {
    q: "I don't have a PhD or a Nobel Prize — can I still qualify?",
    a: "Probably yes. EB-1A, EB-2 NIW, and O-1A are about sustained impact, not titles. Our Profile Strength engine evaluates the 10 USCIS evidence types and shows you exactly which gaps to close. Many of our successful members had no patents or major awards when they started.",
  },
  {
    q: "Can I really self-petition without an employer?",
    a: "Yes — for EB-1A, EB-2 NIW, O-1A, and EB-5. These categories do not require employer sponsorship or labor certification. Pathrise is built specifically for self-petitioners; you keep full control of your case from start to finish.",
  },
  {
    q: "How is this different from hiring an immigration attorney?",
    a: "Most attorneys charge $5K – $25K for a talent visa petition and deliver a single package. Pathrise gives you the diagnostic, drafting, and opportunity tools to do most of the work yourself — and optionally route the final package to a vetted attorney for review at a fraction of the cost.",
  },
  {
    q: "What happens if I get an RFE?",
    a: "Every Pro and Elite plan includes the RFE Response Kit — a structured library of response scaffolds from real approved cases, organized by the four most common RFE patterns. Elite members also get an attorney review of the RFE response.",
  },
  {
    q: "Do you guarantee approval?",
    a: "No — no one ethically can. What we guarantee is that you will file a stronger, better-documented petition than 95% of self-petitioners. Our 94% approval rate reflects members who complete the full Build phase before filing.",
  },
  {
    q: "Which visa pathways does Pathrise support?",
    a: "15+ pathways including EB-1A, EB-1B, EB-1C, EB-2 NIW, EB-3, EB-5, O-1A, O-1B, L-1A, L-1B, H-1B, E-2, E-3, TN, J-1, and B-1/B-2. The Visa Match quiz will narrow these to your top three based on your background and goals.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All plans are month-to-month with no contracts. Cancel from your dashboard in one click; you keep access through the end of your billing period and your case workspace remains exportable.",
  },
];

export const RESOURCES = [
  {
    icon: "BookOpen",
    title: "Field Guide to EB-1A",
    type: "Free eBook · 84 pages",
    blurb:
      "The criterion-by-criterion breakdown of the EB-1A standard, with annotated excerpts from 12 approved cover letters.",
  },
  {
    icon: "Video",
    title: "EB-2 NIW Masterclass",
    type: "Free webinar · 47 min",
    blurb:
      "Why the Dhanasar framework changed everything — and how to argue national importance without an advanced degree.",
  },
  {
    icon: "FileText",
    title: "RFE Response Templates",
    type: "Pro resource · 6 templates",
    blurb:
      "Plug-and-play scaffolds for the four most common RFE patterns, with paragraph-by-paragraph commentary.",
  },
  {
    icon: "Newspaper",
    title: "Weekly USCIS Digest",
    type: "Newsletter · free",
    blurb:
      "Every Monday: policy updates, approval rate shifts, and one approved case dissected. Read in 4 minutes.",
  },
];

export const NAV_LINKS = [
  { label: "Pathways", href: "#pathways" },
  { label: "AI Tools", href: "#tools" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
];

// Visa Match quiz questions
export const QUIZ_QUESTIONS = [
  {
    id: "background",
    question: "Which best describes your professional background?",
    options: [
      { value: "stem", label: "Science, tech, or engineering (incl. PhDs)" },
      { value: "business", label: "Business, finance, or operations" },
      { value: "creative", label: "Arts, film, design, or media" },
      { value: "founder", label: "Founder or executive" },
      { value: "academic", label: "Academic or research" },
    ],
  },
  {
    id: "recognition",
    question: "Have you received external recognition for your work?",
    options: [
      { value: "major", label: "Major awards, press, or invitations to judge others" },
      { value: "some", label: "Some recognition — local or industry-specific" },
      { value: "limited", label: "Limited — I have impact but it's not widely recognized" },
      { value: "none", label: "Not yet — I'm early in my career" },
    ],
  },
  {
    id: "timeline",
    question: "How quickly do you need to be in the US?",
    options: [
      { value: "fast", label: "ASAP — under 6 months" },
      { value: "medium", label: "6 – 18 months" },
      { value: "flexible", label: "Flexible — green card eventually" },
    ],
  },
  {
    id: "sponsor",
    question: "Do you have a US employer or sponsor?",
    options: [
      { value: "self", label: "No — I want to self-petition" },
      { value: "employer", label: "Yes — I have a sponsoring employer" },
      { value: "invest", label: "I'd consider an investment-based route" },
    ],
  },
  {
    id: "field",
    question: "Does your work have national or global impact?",
    options: [
      { value: "global", label: "Yes — global industry or policy significance" },
      { value: "national", label: "Yes — significant within my country" },
      { value: "regional", label: "Mostly regional so far" },
      { value: "unclear", label: "Not sure — I'd like an assessment" },
    ],
  },
];

// Quiz scoring → recommended pathways (simplified deterministic engine)
export function scoreQuiz(answers: Record<string, string>): {
  pathway: string;
  fit: number;
  reasoning: string;
}[] {
  const recommendations: Record<string, { score: number; reasons: string[] }> = {
    "EB-1A": { score: 0, reasons: [] },
    "EB-2 NIW": { score: 0, reasons: [] },
    "O-1A": { score: 0, reasons: [] },
    "EB-5": { score: 0, reasons: [] },
    "L-1A": { score: 0, reasons: [] },
    "H-1B": { score: 0, reasons: [] },
  };

  if (answers.background === "stem") {
    recommendations["EB-1A"].score += 2;
    recommendations["EB-1A"].reasons.push("STEM backgrounds align well with EB-1A's original-contribution criterion.");
    recommendations["EB-2 NIW"].score += 3;
    recommendations["EB-2 NIW"].reasons.push("STEM work commonly satisfies the national-importance prong of EB-2 NIW.");
    recommendations["O-1A"].score += 2;
  }
  if (answers.background === "academic") {
    recommendations["EB-1A"].score += 3;
    recommendations["EB-1A"].reasons.push("Academics tend to have the publication / judging / original-contribution evidence EB-1A rewards.");
    recommendations["EB-2 NIW"].score += 3;
    recommendations["EB-2 NIW"].reasons.push("Research with national relevance is the classic EB-2 NIW fact pattern.");
    recommendations["O-1A"].score += 2;
  }
  if (answers.background === "founder") {
    recommendations["L-1A"].score += 3;
    recommendations["L-1A"].reasons.push("Founders moving a company to the US are textbook L-1A → EB-1C candidates.");
    recommendations["EB-1A"].score += 1;
    recommendations["EB-5"].score += 2;
    recommendations["EB-5"].reasons.push("If you can invest $800K+, EB-5 offers a parallel path independent of recognition.");
  }
  if (answers.background === "creative") {
    recommendations["O-1A"].score += 2;
    recommendations["EB-1A"].score += 1;
  }
  if (answers.background === "business") {
    recommendations["L-1A"].score += 2;
    recommendations["EB-1A"].score += 1;
    recommendations["EB-2 NIW"].score += 1;
  }

  if (answers.recognition === "major") {
    recommendations["EB-1A"].score += 4;
    recommendations["EB-1A"].reasons.push("Sustained major recognition is the central EB-1A requirement.");
    recommendations["O-1A"].score += 3;
    recommendations["O-1A"].reasons.push("Major recognition satisfies O-1A's sustained-acclaim standard.");
  } else if (answers.recognition === "some") {
    recommendations["EB-1A"].score += 1;
    recommendations["O-1A"].score += 2;
    recommendations["EB-2 NIW"].score += 2;
  } else if (answers.recognition === "limited") {
    recommendations["EB-2 NIW"].score += 3;
    recommendations["EB-2 NIW"].reasons.push("EB-2 NIW rewards prospective impact — limited past recognition is workable.");
    recommendations["H-1B"].score += 2;
  }

  if (answers.timeline === "fast") {
    recommendations["O-1A"].score += 3;
    recommendations["O-1A"].reasons.push("O-1A with premium processing can be approved in 2–4 months.");
    recommendations["L-1A"].score += 3;
    recommendations["L-1A"].reasons.push("L-1A with premium processing resolves in 15–45 days.");
    recommendations["EB-1A"].score += 1;
    recommendations["EB-5"].score -= 1;
  } else if (answers.timeline === "flexible") {
    recommendations["EB-1A"].score += 2;
    recommendations["EB-2 NIW"].score += 2;
    recommendations["EB-5"].score += 1;
  }

  if (answers.sponsor === "self") {
    recommendations["EB-1A"].score += 2;
    recommendations["EB-1A"].reasons.push("EB-1A is fully self-petitioned — no employer required.");
    recommendations["EB-2 NIW"].score += 2;
    recommendations["EB-2 NIW"].reasons.push("EB-2 NIW waives the employer / PERM requirement.");
    recommendations["O-1A"].score += 1;
    recommendations["H-1B"].score -= 3;
    recommendations["L-1A"].score -= 2;
  } else if (answers.sponsor === "employer") {
    recommendations["H-1B"].score += 3;
    recommendations["H-1B"].reasons.push("You have an employer — H-1B is the standard entry route.");
    recommendations["L-1A"].score += 2;
    recommendations["EB-1B"].score += 2;
  } else if (answers.sponsor === "invest") {
    recommendations["EB-5"].score += 4;
    recommendations["EB-5"].reasons.push("EB-5 is the investment-based green card — $800K+ qualified capital.");
    recommendations["E-2"].score += 3;
    recommendations["E-2"].reasons.push("E-2 is the non-immigrant treaty-investor route — faster and cheaper than EB-5.");
  }

  if (answers.field === "global") {
    recommendations["EB-1A"].score += 3;
    recommendations["EB-1A"].reasons.push("Global impact is the strongest signal for EB-1A's extraordinary-ability standard.");
    recommendations["O-1A"].score += 2;
  } else if (answers.field === "national") {
    recommendations["EB-2 NIW"].score += 3;
    recommendations["EB-2 NIW"].reasons.push("National-level impact maps directly to EB-2 NIW's Dhanasar prongs.");
    recommendations["EB-1A"].score += 1;
  } else if (answers.field === "regional") {
    recommendations["EB-2 NIW"].score += 1;
    recommendations["H-1B"].score += 1;
    recommendations["EB-1A"].score -= 2;
  }

  return Object.entries(recommendations)
    .map(([pathway, { score, reasons }]) => ({
      pathway,
      fit: Math.max(15, Math.min(97, 35 + score * 9)),
      reasoning: reasons[0] ?? "A viable pathway given your profile.",
    }))
    .sort((a, b) => b.fit - a.fit)
    .slice(0, 3);
}

export const FOOTER_LINKS = {
  Platform: ["AI Tools", "Visa Match", "Pricing", "Petition Generator", "Attorney Connect"],
  Pathways: ["EB-1A", "EB-2 NIW", "O-1A", "EB-5", "L-1A → EB-1C", "H-1B"],
  Resources: ["Free Field Guide", "Masterclass", "USCIS Digest", "Blog", "RFE Kit", "Success Stories"],
  Company: ["About", "Careers", "Press", "Contact", "Affiliates"],
  Legal: ["Terms", "Privacy", "Cookie Policy", "Disclaimer", "Accessibility"],
};
