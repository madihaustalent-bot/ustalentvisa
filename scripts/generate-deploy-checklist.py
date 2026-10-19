"""
US Talent Visa Deployment Checklist — branded PDF (3-4 pages, no cover).

Uses US Talent Visa brand palette (emerald + cream + gold) since this is a
brand asset, not freeform design.
"""

import os
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    KeepTogether,
    Flowable,
    HRFlowable,
)

# ----------------------------------------------------------------------------
# Fonts
# ----------------------------------------------------------------------------
FONT_DIR = "/usr/share/fonts"
pdfmetrics.registerFont(
    TTFont("FreeSerif", f"{FONT_DIR}/truetype/freefont/FreeSerif.ttf")
)
pdfmetrics.registerFont(
    TTFont("FreeSerif-Bold", f"{FONT_DIR}/truetype/freefont/FreeSerifBold.ttf")
)
pdfmetrics.registerFont(
    TTFont("FreeSerif-Italic", f"{FONT_DIR}/truetype/freefont/FreeSerifItalic.ttf")
)
pdfmetrics.registerFont(
    TTFont(
        "FreeSerif-BoldItalic",
        f"{FONT_DIR}/truetype/freefont/FreeSerifBoldItalic.ttf",
    )
)
pdfmetrics.registerFont(
    TTFont("DejaVuSans", f"{FONT_DIR}/truetype/dejavu/DejaVuSansMono.ttf")
)
registerFontFamily(
    "FreeSerif",
    normal="FreeSerif",
    bold="FreeSerif-Bold",
    italic="FreeSerif-Italic",
    boldItalic="FreeSerif-BoldItalic",
)

# Install font fallback for any stray non-Latin chars
sys.path.insert(0, "/home/z/my-project/skills/pdf/scripts")
try:
    from pdf import install_font_fallback

    install_font_fallback()
except Exception:
    pass

# ----------------------------------------------------------------------------
# Brand palette (US Talent Visa)
# ----------------------------------------------------------------------------
# XL tier — backgrounds
PAGE_BG = colors.HexColor("#FAF7F0")       # cream
SECTION_BG = colors.HexColor("#F4EFE5")    # warmer cream

# L tier — surfaces
CARD_BG = colors.HexColor("#FBF8F2")
TABLE_STRIPE = colors.HexColor("#F4EFE5")

# M tier — structural
HEADER_FILL = colors.HexColor("#0E2A24")   # forest dark
COVER_BLOCK = colors.HexColor("#1F6B55")   # primary emerald

# S tier — edges & icons
BORDER = colors.HexColor("#D1C8B4")
ICON = colors.HexColor("#1F6B55")

# XS tier — emphasis
ACCENT = colors.HexColor("#D4A058")        # gold
ACCENT_DARK = colors.HexColor("#A57E3E")

# Typography
TEXT_PRIMARY = colors.HexColor("#1A2B26")
TEXT_MUTED = colors.HexColor("#6A655A")
TEXT_INVERSE = colors.HexColor("#FAF7F0")

# Semantic
SEM_SUCCESS = colors.HexColor("#3D7A4F")
SEM_INFO = colors.HexColor("#1F6B55")

# ----------------------------------------------------------------------------
# Styles
# ----------------------------------------------------------------------------
TITLE_STYLE = ParagraphStyle(
    name="Title",
    fontName="FreeSerif-Bold",
    fontSize=28,
    leading=32,
    textColor=HEADER_FILL,
    spaceAfter=4,
)

KICKER_STYLE = ParagraphStyle(
    name="Kicker",
    fontName="FreeSerif-Bold",
    fontSize=9,
    leading=11,
    textColor=ACCENT_DARK,
    spaceAfter=6,
)

INTRO_STYLE = ParagraphStyle(
    name="Intro",
    fontName="FreeSerif",
    fontSize=11,
    leading=17,
    textColor=TEXT_PRIMARY,
    alignment=TA_LEFT,
    spaceAfter=8,
)

PHASE_TITLE = ParagraphStyle(
    name="PhaseTitle",
    fontName="FreeSerif-Bold",
    fontSize=16,
    leading=20,
    textColor=HEADER_FILL,
    spaceBefore=12,
    spaceAfter=6,
)

PHASE_INTRO = ParagraphStyle(
    name="PhaseIntro",
    fontName="FreeSerif-Italic",
    fontSize=10,
    leading=14,
    textColor=TEXT_MUTED,
    spaceAfter=10,
)

STEP_TITLE = ParagraphStyle(
    name="StepTitle",
    fontName="FreeSerif-Bold",
    fontSize=11,
    leading=14,
    textColor=TEXT_PRIMARY,
    spaceAfter=2,
)

STEP_BODY = ParagraphStyle(
    name="StepBody",
    fontName="FreeSerif",
    fontSize=9.5,
    leading=13.5,
    textColor=TEXT_PRIMARY,
    spaceAfter=2,
)

CODE_STYLE = ParagraphStyle(
    name="Code",
    fontName="DejaVuSans",
    fontSize=8.5,
    leading=12,
    textColor=HEADER_FILL,
    backColor=colors.HexColor("#F0EBE0"),
    borderPadding=(4, 6, 4, 6),
    leftIndent=0,
    rightIndent=0,
    spaceBefore=3,
    spaceAfter=3,
)

SUCCESS_STYLE = ParagraphStyle(
    name="Success",
    fontName="FreeSerif-Italic",
    fontSize=8.5,
    leading=11,
    textColor=SEM_SUCCESS,
    spaceAfter=2,
)

FOOTER_STYLE = ParagraphStyle(
    name="Footer",
    fontName="FreeSerif",
    fontSize=8,
    leading=10,
    textColor=TEXT_MUTED,
    alignment=TA_CENTER,
)

# ----------------------------------------------------------------------------
# Custom Flowables
# ----------------------------------------------------------------------------


class BrandHeader(Flowable):
    """Top-of-document brand header: logo chip + wordmark + tagline."""

    def __init__(self, width: float):
        super().__init__()
        self.width = width
        self.height = 56

    def draw(self):
        c = self.canv
        # Logo chip (rounded square with sparkle)
        chip_size = 40
        chip_x = 0
        chip_y = self.height - chip_size
        c.setFillColor(COVER_BLOCK)
        c.setStrokeColor(COVER_BLOCK)
        c.roundRect(chip_x, chip_y, chip_size, chip_size, 8, fill=1, stroke=0)
        # Sparkle (4-pointed star)
        cx, cy = chip_x + chip_size / 2, chip_y + chip_size / 2
        s = 11
        c.setFillColor(TEXT_INVERSE)
        p = c.beginPath()
        p.moveTo(cx, cy - s)
        p.lineTo(cx + s * 0.25, cy - s * 0.25)
        p.lineTo(cx + s, cy)
        p.lineTo(cx + s * 0.25, cy + s * 0.25)
        p.lineTo(cx, cy + s)
        p.lineTo(cx - s * 0.25, cy + s * 0.25)
        p.lineTo(cx - s, cy)
        p.lineTo(cx - s * 0.25, cy - s * 0.25)
        p.close()
        c.drawPath(p, fill=1, stroke=0)
        # Gold accent dot
        c.setFillColor(ACCENT)
        c.circle(chip_x + chip_size - 2, chip_y + chip_size - 2, 3, fill=1, stroke=0)

        # Wordmark
        c.setFont("FreeSerif-Bold", 16)
        c.setFillColor(HEADER_FILL)
        c.drawString(chip_x + chip_size + 10, chip_y + 22, "US TALENT VISA")
        c.setFont("FreeSerif", 9)
        c.setFillColor(TEXT_MUTED)
        c.drawString(
            chip_x + chip_size + 10,
            chip_y + 8,
            "TALENT VISA PLATFORM  ·  DEPLOYMENT CHECKLIST",
        )


class PhaseBanner(Flowable):
    """Full-width banner for each phase title."""

    def __init__(self, width: float, label: str, title: str, duration: str):
        super().__init__()
        self.width = width
        self.label = label
        self.title = title
        self.duration = duration
        self.height = 44

    def draw(self):
        c = self.canv
        # Background bar
        c.setFillColor(HEADER_FILL)
        c.roundRect(0, 0, self.width, self.height, 4, fill=1, stroke=0)
        # Gold accent stripe on left
        c.setFillColor(ACCENT)
        c.rect(0, 0, 4, self.height, fill=1, stroke=0)
        # Label (kicker)
        c.setFont("FreeSerif-Bold", 8)
        c.setFillColor(ACCENT)
        c.drawString(14, self.height - 14, self.label.upper())
        # Title
        c.setFont("FreeSerif-Bold", 14)
        c.setFillColor(TEXT_INVERSE)
        c.drawString(14, self.height - 30, self.title)
        # Duration on the right
        c.setFont("FreeSerif-Italic", 9)
        c.setFillColor(colors.HexColor("#C7C0B0"))
        c.drawRightString(self.width - 12, self.height - 22, self.duration)


class CheckboxRow(Flowable):
    """A checkbox + step content row."""

    def __init__(self, width: float, title: str, body: str, success: str = ""):
        super().__init__()
        self.width = width
        self.title = title
        self.body = body
        self.success = success
        self._title_p = Paragraph(title, STEP_TITLE)
        self._body_p = Paragraph(body, STEP_BODY)
        self._success_p = Paragraph(f"<b>Done when:</b> {success}", SUCCESS_STYLE) if success else None
        self._title_w, self._title_h = self._title_p.wrap(width - 28, 1000)
        body_w = width - 28
        self._body_w, self._body_h = self._body_p.wrap(body_w, 1000)
        if self._success_p:
            self._success_w, self._success_h = self._success_p.wrap(body_w, 1000)
            self.height = self._title_h + self._body_h + self._success_h + 12
        else:
            self.height = self._title_h + self._body_h + 10

    def draw(self):
        c = self.canv
        # Checkbox (rounded square, gold border)
        cb_size = 12
        cb_x = 0
        cb_y = self.height - cb_size - 2
        c.setStrokeColor(ACCENT_DARK)
        c.setFillColor(CARD_BG)
        c.setLineWidth(1.2)
        c.roundRect(cb_x, cb_y, cb_size, cb_size, 2, fill=1, stroke=1)
        # Content (title + body + success)
        content_x = 22
        content_w = self.width - 28
        y = self.height - 4
        # Title
        y -= self._title_h
        self._title_p.drawOn(c, content_x, y)
        # Body
        y -= self._body_h + 1
        self._body_p.drawOn(c, content_x, y)
        # Success indicator
        if self._success_p:
            y -= self._success_h + 1
            self._success_p.drawOn(c, content_x, y)


# ----------------------------------------------------------------------------
# Page template (header on every page + footer)
# ----------------------------------------------------------------------------
def draw_page_chrome(canvas, doc):
    """Draw the small running header on every page (except first)."""
    canvas.saveState()
    if doc.page > 1:
        # Small running header
        canvas.setFont("FreeSerif-Bold", 8)
        canvas.setFillColor(TEXT_MUTED)
        canvas.drawString(
            doc.leftMargin,
            A4[1] - doc.topMargin + 12,
            "US TALENT VISA  ·  DEPLOYMENT CHECKLIST",
        )
        canvas.setFont("FreeSerif", 8)
        canvas.setFillColor(TEXT_MUTED)
        canvas.drawRightString(
            A4[0] - doc.rightMargin,
            A4[1] - doc.topMargin + 12,
            "Page %d" % doc.page,
        )
        # Thin divider
        canvas.setStrokeColor(BORDER)
        canvas.setLineWidth(0.5)
        canvas.line(
            doc.leftMargin,
            A4[1] - doc.topMargin + 8,
            A4[0] - doc.rightMargin,
            A4[1] - doc.topMargin + 8,
        )
    # Footer on every page
    canvas.setFont("FreeSerif-Italic", 8)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawCentredString(
        A4[0] / 2,
        doc.bottomMargin - 18,
        "US Talent Visa · AI-Powered Talent Visa Platform · Generated for launch",
    )
    canvas.restoreState()


# ----------------------------------------------------------------------------
# Content
# ----------------------------------------------------------------------------
def build_story(doc_width: float):
    story = []

    # ============ PAGE 1: Title + Phase 1 ============
    story.append(BrandHeader(doc_width))
    story.append(Spacer(1, 8))
    story.append(Paragraph("DEPLOYMENT CHECKLIST", KICKER_STYLE))
    story.append(Paragraph("Launch US Talent Visa in under an hour.", TITLE_STYLE))
    story.append(Spacer(1, 4))
    story.append(
        Paragraph(
            "Follow these 18 steps in order. Each step shows what to do, where to click, "
            "and what success looks like. Total hands-on time is about 45 minutes — most of "
            "which is waiting for DNS to propagate. The website you built is already "
            "production-ready; this checklist just gets it onto a public URL.",
            INTRO_STYLE,
        )
    )
    story.append(Spacer(1, 4))
    # Quick stats row
    stats_data = [
        [
            Paragraph("<b>45 min</b>", ParagraphStyle("s1", fontName="FreeSerif-Bold", fontSize=18, textColor=COVER_BLOCK, alignment=TA_CENTER)),
            Paragraph("<b>$10-35</b>", ParagraphStyle("s2", fontName="FreeSerif-Bold", fontSize=18, textColor=COVER_BLOCK, alignment=TA_CENTER)),
            Paragraph("<b>4 tools</b>", ParagraphStyle("s3", fontName="FreeSerif-Bold", fontSize=18, textColor=COVER_BLOCK, alignment=TA_CENTER)),
            Paragraph("<b>1 commit</b>", ParagraphStyle("s4", fontName="FreeSerif-Bold", fontSize=18, textColor=COVER_BLOCK, alignment=TA_CENTER)),
        ],
        [
            Paragraph("hands-on time", ParagraphStyle("l1", fontName="FreeSerif", fontSize=8, textColor=TEXT_MUTED, alignment=TA_CENTER)),
            Paragraph("domain / year", ParagraphStyle("l2", fontName="FreeSerif", fontSize=8, textColor=TEXT_MUTED, alignment=TA_CENTER)),
            Paragraph("GitHub + Vercel + Spaceship + email", ParagraphStyle("l3", fontName="FreeSerif", fontSize=8, textColor=TEXT_MUTED, alignment=TA_CENTER)),
            Paragraph("to launch forever", ParagraphStyle("l4", fontName="FreeSerif", fontSize=8, textColor=TEXT_MUTED, alignment=TA_CENTER)),
        ],
    ]
    stats_table = Table(stats_data, colWidths=[doc_width / 4] * 4)
    stats_table.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), CARD_BG),
            ("BOX", (0, 0), (-1, -1), 0.5, BORDER),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, BORDER),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ])
    )
    story.append(stats_table)
    story.append(Spacer(1, 14))

    # ============ PHASE 1 — GitHub + Vercel ============
    story.append(
        PhaseBanner(
            doc_width,
            "Phase 1 of 3",
            "Push to GitHub + Deploy to Vercel",
            "~10 min · free",
        )
    )
    story.append(Spacer(1, 6))
    story.append(
        Paragraph(
            "Get your code onto GitHub and let Vercel auto-deploy it. By the end of this "
            "phase you'll have a live preview URL like <b>ustalentvisa-abc123.vercel.app</b>.",
            PHASE_INTRO,
        )
    )
    story.append(Spacer(1, 4))

    steps_phase_1 = [
        (
            "1. Create a GitHub repository",
            "Go to github.com/new. Name it <b>ustalentvisa</b>. Set it to Public (or Private, "
            "your call). Do NOT initialize with README — leave it empty. Click <b>Create repository</b>.",
            "GitHub shows a page with your repo URL: github.com/YOUR_USERNAME/ustalentvisa",
        ),
        (
            "2. Connect your local code to GitHub",
            "In your terminal at the project root, run the commands GitHub shows you. "
            "They will look like the snippet below — paste your own repo URL.",
            "git push returns success and your code appears on GitHub.",
        ),
    ]
    for title, body, success in steps_phase_1:
        story.append(CheckboxRow(doc_width, title, body, success))
        story.append(Spacer(1, 4))

    # Code block for git commands
    story.append(
        Paragraph(
            '<font face="DejaVuSans" size="8">'
            "git remote add origin https://github.com/YOUR_USERNAME/ustalentvisa.git<br/>"
            "git branch -M main<br/>"
            "git push -u origin main"
            "</font>",
            CODE_STYLE,
        )
    )
    story.append(Spacer(1, 6))

    steps_phase_1b = [
        (
            "3. Sign in to Vercel",
            "Go to <b>vercel.com</b> and click <b>Sign Up</b> → choose <b>Continue with GitHub</b>. "
            "Authorize Vercel to access your GitHub. The Hobby tier is free and is all you need.",
            "You land on the Vercel dashboard with a 'New Project' button.",
        ),
        (
            "4. Import the ustalentvisa repo",
            "Click <b>Add New → Project</b>. Find <b>ustalentvisa</b> in your repo list, click <b>Import</b>. "
            "Vercel auto-detects Next.js — leave everything default. Click <b>Deploy</b>.",
            "Build runs for ~90 seconds. You see 'Congratulations' with a preview URL.",
        ),
        (
            "5. Save your preview URL",
            "Copy the vercel.app URL Vercel gives you. This is your temporary public URL. "
            "Test it in an incognito window — the site should load instantly with HTTPS.",
            "Site loads at https://ustalentvisa-xxx.vercel.app with green padlock.",
        ),
    ]
    for title, body, success in steps_phase_1b:
        story.append(CheckboxRow(doc_width, title, body, success))
        story.append(Spacer(1, 4))

    # ============ PHASE 2 — Domain + DNS (flows naturally, no forced page break) ============
    story.append(Spacer(1, 8))
    story.append(KeepTogether([
        PhaseBanner(
            doc_width,
            "Phase 2 of 3",
            "Buy domain on Spaceship + wire DNS to Vercel",
            "~20 min · $10-35/yr",
        ),
        Spacer(1, 6),
        Paragraph(
            "Buy a domain on Spaceship, then add two DNS records that point it at Vercel. "
            "Spaceship's DNS panel is one of the cleanest in the industry — this should take "
            "10 minutes plus propagation wait time.",
            PHASE_INTRO,
        ),
    ]))
    story.append(Spacer(1, 4))

    steps_phase_2 = [
        (
            "6. Buy the domain on Spaceship",
            "Log in to <b>spaceship.com</b>. Search your domain (try ustalentvisa.com, ustalentvisa.io, "
            "ustalentvisa.co). Add to cart. <b>Skip every upsell</b>: website builder, professional "
            "email, SSL certificate (Vercel gives you a free auto-renewing one), premium DNS. "
            "Keep WHOIS Privacy ON. Checkout.",
            "You receive an order confirmation email and the domain appears in your Spaceship dashboard.",
        ),
        (
            "7. Open Vercel domain settings",
            "In Vercel, open your ustalentvisa project → <b>Settings → Domains</b>. Click <b>Add</b>, "
            "type your domain (e.g. yourdomain.com), press Enter. When prompted to also add "
            "www, click <b>Add www subdomain</b>.",
            "Vercel shows a screen with two DNS records to add (an A record and a CNAME).",
        ),
        (
            "8. Copy the DNS records Vercel shows you",
            "Vercel displays a table like the one below. Keep this tab open — you'll paste these "
            "exact values into Spaceship in the next step.",
            "You can see both the A record (76.76.21.21) and the CNAME (cname.vercel-dns.com).",
        ),
    ]
    for title, body, success in steps_phase_2:
        story.append(CheckboxRow(doc_width, title, body, success))
        story.append(Spacer(1, 4))

    # DNS records table
    dns_data = [
        [
            Paragraph("<b>Type</b>", ParagraphStyle("dh1", fontName="FreeSerif-Bold", fontSize=9, textColor=TEXT_INVERSE)),
            Paragraph("<b>Host / Name</b>", ParagraphStyle("dh2", fontName="FreeSerif-Bold", fontSize=9, textColor=TEXT_INVERSE)),
            Paragraph("<b>Value</b>", ParagraphStyle("dh3", fontName="FreeSerif-Bold", fontSize=9, textColor=TEXT_INVERSE)),
            Paragraph("<b>TTL</b>", ParagraphStyle("dh4", fontName="FreeSerif-Bold", fontSize=9, textColor=TEXT_INVERSE)),
        ],
        [
            Paragraph("A", ParagraphStyle("dv1", fontName="DejaVuSans", fontSize=9, textColor=TEXT_PRIMARY)),
            Paragraph("@", ParagraphStyle("dv2", fontName="DejaVuSans", fontSize=9, textColor=TEXT_PRIMARY)),
            Paragraph("76.76.21.21", ParagraphStyle("dv3", fontName="DejaVuSans", fontSize=9, textColor=TEXT_PRIMARY)),
            Paragraph("Auto / 1h", ParagraphStyle("dv4", fontName="FreeSerif", fontSize=9, textColor=TEXT_PRIMARY)),
        ],
        [
            Paragraph("CNAME", ParagraphStyle("dv5", fontName="DejaVuSans", fontSize=9, textColor=TEXT_PRIMARY)),
            Paragraph("www", ParagraphStyle("dv6", fontName="DejaVuSans", fontSize=9, textColor=TEXT_PRIMARY)),
            Paragraph("cname.vercel-dns.com", ParagraphStyle("dv7", fontName="DejaVuSans", fontSize=9, textColor=TEXT_PRIMARY)),
            Paragraph("Auto / 1h", ParagraphStyle("dv8", fontName="FreeSerif", fontSize=9, textColor=TEXT_PRIMARY)),
        ],
    ]
    dns_table = Table(dns_data, colWidths=[doc_width * 0.13, doc_width * 0.22, doc_width * 0.45, doc_width * 0.20])
    dns_table.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), HEADER_FILL),
            ("BACKGROUND", (0, 1), (-1, 1), CARD_BG),
            ("BACKGROUND", (0, 2), (-1, 2), TABLE_STRIPE),
            ("BOX", (0, 0), (-1, -1), 0.5, BORDER),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, BORDER),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("TOPPADDING", (0, 0), (-1, -1), 6),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
            ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ])
    )
    story.append(dns_table)
    story.append(Spacer(1, 8))

    steps_phase_2b = [
        (
            "9. Add the DNS records in Spaceship",
            "Back in Spaceship: click your domain → <b>DNS Settings</b>. Delete any default parking "
            "records (usually an A record pointing to a Spaceship landing page). Add the two records "
            "from the table above exactly. Save.",
            "Both records appear in the Spaceship DNS list with the values you entered.",
        ),
        (
            "10. Verify in Vercel",
            "Switch back to Vercel → Domains tab. Click <b>Verify</b> next to your domain. "
            "DNS usually propagates in 1-30 minutes (often instant with Spaceship). Once verified, "
            "Vercel auto-provisions an SSL certificate in 1-5 minutes.",
            "Both domains show a green checkmark. The padlock appears on your live site.",
        ),
        (
            "11. Set the canonical domain (SEO)",
            "In Vercel → Domains, click the three dots next to <b>www.yourdomain.com</b> → "
            "<b>Edit</b> → choose <b>Redirect to yourdomain.com</b>. This tells Google to index one URL, "
            "not two duplicates.",
            "Visiting www.yourdomain.com auto-redirects to yourdomain.com.",
        ),
        (
            "12. Visit your live site",
            "Open https://yourdomain.com in an incognito window. Confirm the homepage loads, "
            "the eligibility quiz opens, the pricing toggle works. Try it on mobile too.",
            "Site loads in under 2 seconds with green HTTPS padlock.",
        ),
    ]
    for title, body, success in steps_phase_2b:
        story.append(CheckboxRow(doc_width, title, body, success))
        story.append(Spacer(1, 4))

    # ============ PHASE 3 — Post-launch (flows naturally) ============
    story.append(Spacer(1, 8))
    story.append(KeepTogether([
        PhaseBanner(
            doc_width,
            "Phase 3 of 3",
            "Lock down + add analytics + submit to Google",
            "~15 min · free",
        ),
        Spacer(1, 6),
        Paragraph(
            "Your site is live. These final steps harden security, wire up analytics, and tell "
            "Google your site exists. None of them are urgent, but all of them pay off.",
            PHASE_INTRO,
        ),
    ]))
    story.append(Spacer(1, 4))

    steps_phase_3 = [
        (
            "13. Lock the domain in Spaceship",
            "Spaceship dashboard → your domain → enable <b>Domain Lock</b> (also called Transfer Lock). "
            "This prevents anyone from hijacking your domain via a transfer request. Free, takes 5 seconds.",
            "Lock icon shows as 'enabled' next to your domain.",
        ),
        (
            "14. Enable DNSSEC (optional but recommended)",
            "Same page in Spaceship → <b>DNSSEC</b> → enable. Adds a cryptographic signature to your "
            "DNS records, preventing DNS spoofing attacks. Free, no ongoing maintenance.",
            "DNSSEC shows as 'Active' in Spaceship.",
        ),
        (
            "15. Set up email forwarding",
            "Spaceship includes free email forwarding. Set up <b>hello@yourdomain.com</b> → forward to "
            "your personal Gmail. Zero cost, instant. Skip Google Workspace ($6/mo) until you have a team.",
            "Send a test email to hello@yourdomain.com from a different account — it arrives in your Gmail.",
        ),
        (
            "16. Enable Vercel Analytics",
            "Vercel dashboard → your project → <b>Analytics</b> tab → <b>Enable</b>. Free, privacy-friendly, "
            "no consent banner needed. Shows page views, top referrers, Core Web Vitals.",
            "After 1 hour, you see real visitor data in the Analytics tab.",
        ),
        (
            "17. Set up GA4 + Meta Pixel + LinkedIn Insight (when ready)",
            "Create accounts at analytics.google.com, business.facebook.com, linkedin.com/help/agent/8440044. "
            "Copy the IDs into Vercel → Settings → Environment Variables as "
            "NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_META_PIXEL_ID, NEXT_PUBLIC_LINKEDIN_PARTNER_ID. "
            "Redeploy (push any commit). Scripts auto-render.",
            "View PageView events appear in GA4 real-time reports within 5 minutes.",
        ),
        (
            "18. Submit your sitemap to Google Search Console",
            "Go to search.google.com/search-console. Add a property (URL prefix) → enter "
            "https://yourdomain.com. Verify via DNS record (Spaceship DNS panel — GSC will give "
            "you the exact TXT record). Then submit <b>/sitemap.xml</b> under Sitemaps.",
            "Status shows 'Success' next to your submitted sitemap within 24 hours.",
        ),
    ]
    for title, body, success in steps_phase_3:
        story.append(CheckboxRow(doc_width, title, body, success))
        story.append(Spacer(1, 4))

    story.append(Spacer(1, 10))

    # ============ Troubleshooting box ============
    trouble_data = [[Paragraph(
        "<b>Troubleshooting</b> &nbsp;&nbsp; <font color='#6A655A' size='9'>If something doesn't work, "
        "check here first.</font>",
        ParagraphStyle("th", fontName="FreeSerif-Bold", fontSize=11, textColor=HEADER_FILL),
    )]]
    trouble_table = Table(trouble_data, colWidths=[doc_width])
    trouble_table.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), SECTION_BG),
            ("BOX", (0, 0), (-1, -1), 0.5, BORDER),
            ("LEFTPADDING", (0, 0), (-1, -1), 10),
            ("RIGHTPADDING", (0, 0), (-1, -1), 10),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ])
    )
    story.append(trouble_table)
    story.append(Spacer(1, 4))

    troubles = [
        (
            "DNS won't verify in Vercel",
            "Wait 15-30 minutes. If still failing, double-check the A record value is exactly "
            "<b>76.76.21.21</b> (no trailing dot) and the CNAME value is <b>cname.vercel-dns.com</b> "
            "(with trailing dot if Spaceship requires it). Also verify you didn't add a 'www.' "
            "prefix to the A record's host field.",
        ),
        (
            "Site loads with 'Not Secure' warning",
            "SSL certificate is still being provisioned. Wait 5-10 minutes and refresh. If it persists "
            "after 30 minutes, in Vercel → Domains → click the three dots → <b>Retry SSL</b>.",
        ),
        (
            "Page shows 404 on a section link",
            "All anchor links (#pathways, #tools, etc.) require the page to fully load before jumping. "
            "If a user lands on /#pathways and gets a 404, it means the URL was typed wrong. "
            "Vercel redirects /home → / automatically (configured in vercel.json).",
        ),
        (
            "Analytics scripts not firing",
            "Env vars only load on a fresh deployment. After adding them in Vercel, push any commit "
            "(even a README typo) to trigger a redeploy. Verify by opening browser DevTools → "
            "Network tab → filter 'gtag' or 'fbevents'.",
        ),
    ]
    for issue, fix in troubles:
        story.append(
            Paragraph(
                f"<b><font color='#A57E3E'>›</font> &nbsp;{issue}</b><br/>"
                f"<font color='#1A2B26'>{fix}</font>",
                ParagraphStyle(
                    "troubleItem",
                    fontName="FreeSerif",
                    fontSize=9,
                    leading=13,
                    textColor=TEXT_PRIMARY,
                    leftIndent=10,
                    spaceBefore=4,
                    spaceAfter=4,
                ),
            )
        )

    story.append(Spacer(1, 12))

    # ============ Notes section (gives the last page a real purpose) ============
    notes_header = Table(
        [[Paragraph(
            "<b>Launch notes</b> &nbsp; <font color='#6A655A' size='9'>Jot down anything you want to remember.</font>",
            ParagraphStyle("nh", fontName="FreeSerif-Bold", fontSize=11, textColor=HEADER_FILL),
        )]],
        colWidths=[doc_width],
    )
    notes_header.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), SECTION_BG),
            ("BOX", (0, 0), (-1, -1), 0.5, BORDER),
            ("LEFTPADDING", (0, 0), (-1, -1), 10),
            ("RIGHTPADDING", (0, 0), (-1, -1), 10),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ])
    )
    story.append(notes_header)
    story.append(Spacer(1, 4))

    # Lined notes area
    line_data = [[""] for _ in range(6)]
    line_w = doc_width
    lines_table = Table(line_data, colWidths=[line_w], rowHeights=[18] * 6)
    lines_table.setStyle(
        TableStyle([
            ("LINEBELOW", (0, 0), (-1, -1), 0.4, BORDER),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ])
    )
    story.append(lines_table)
    story.append(Spacer(1, 10))

    # ============ Final box — what's next ============
    final_data = [[Paragraph(
        "<b>You're live.</b> &nbsp; <font color='#6A655A' size='10'>What to do tomorrow.</font>",
        ParagraphStyle("fh", fontName="FreeSerif-Bold", fontSize=12, textColor=TEXT_INVERSE),
    )]]
    final_table = Table(final_data, colWidths=[doc_width])
    final_table.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), COVER_BLOCK),
            ("LEFTPADDING", (0, 0), (-1, -1), 12),
            ("RIGHTPADDING", (0, 0), (-1, -1), 12),
            ("TOPPADDING", (0, 0), (-1, -1), 10),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ])
    )
    story.append(final_table)
    story.append(Spacer(1, 6))
    story.append(
        Paragraph(
            "Now that you're live, the next 30 days are about distribution, not features. "
            "Set up the four channels from the GTM strategy: LinkedIn (founder authority), "
            "Instagram (Reels for top-of-funnel reach), Facebook (diaspora groups + retargeting "
            "ads), and WhatsApp (warm community + retention). Every channel points to one CTA — "
            "the Visa Match quiz on your new domain.",
            ParagraphStyle(
                "finalBody",
                fontName="FreeSerif",
                fontSize=10,
                leading=14,
                textColor=TEXT_PRIMARY,
                spaceAfter=6,
            ),
        )
    )
    story.append(
        Paragraph(
            "Edit the site anytime by changing one file "
            "(<b>src/lib/platform-data.ts</b>), running <i>git push</i>, and letting Vercel "
            "auto-deploy. No FTP, no publish button, no SSL renewal. Just commit and push.",
            ParagraphStyle(
                "finalBody2",
                fontName="FreeSerif",
                fontSize=10,
                leading=14,
                textColor=TEXT_PRIMARY,
            ),
        )
    )

    return story


def main():
    output_path = "/home/z/my-project/download/US-Talent-Visa-Deployment-Checklist.pdf"
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=20 * mm,
        bottomMargin=22 * mm,
        title="US Talent Visa Deployment Checklist",
        author="US Talent Visa",
        subject="Step-by-step guide to deploy ustalentvisa.com on Vercel + Spaceship",
        creator="US Talent Visa Launch Toolkit",
    )
    doc_width = A4[0] - 18 * mm - 18 * mm

    story = build_story(doc_width)
    doc.build(story, onFirstPage=draw_page_chrome, onLaterPages=draw_page_chrome)

    size_kb = os.path.getsize(output_path) // 1024
    print(f"Saved: {output_path}")
    print(f"Size: {size_kb} KB")


if __name__ == "__main__":
    main()
