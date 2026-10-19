"""
Generate the Pathrise Open Graph image (1200x630 PNG).

Saves to: src/app/opengraph-image.png
Next.js App Router auto-detects this file and serves it at /opengraph-image
for OG/Twitter card previews.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path
import math

# --- Brand colors (match globals.css) ---
FOREST_DARK = (14, 42, 36)        # #0E2A24
FOREST = (31, 107, 85)            # #1F6B55
GOLD = (212, 160, 88)             # #D4A058
GOLD_LIGHT = (230, 188, 124)      # light gold for accents
CREAM = (250, 247, 240)           # #FAF7F0
CREAM_MUTED = (210, 206, 196)     # muted cream for subtext

# --- Dimensions ---
W, H = 1200, 630

# --- Fonts ---
FONT_DISPLAY = "/usr/share/fonts/truetype/english/Tinos-Bold.ttf"
FONT_SANS = "/usr/share/fonts/truetype/english/Carlito-Regular.ttf"
FONT_SANS_BOLD = "/usr/share/fonts/truetype/english/Carlito-Bold.ttf"


def load_font(path: str, size: int) -> ImageFont.FreeTypeFont:
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.load_default()


def draw_gradient(img: Image.Image, c1: tuple, c2: tuple, angle_deg: float = 135) -> None:
    """Draw a diagonal linear gradient on the image."""
    draw = ImageDraw.Draw(img)
    angle = math.radians(angle_deg)
    dx, dy = math.cos(angle), math.sin(angle)
    diag = math.sqrt(W * W + H * H)
    for i in range(int(diag)):
        t = i / diag
        r = int(c1[0] * (1 - t) + c2[0] * t)
        g = int(c1[1] * (1 - t) + c2[1] * t)
        b = int(c1[2] * (1 - t) + c2[2] * t)
        cx = W / 2 - dx * diag / 2 + dx * i
        cy = H / 2 - dy * diag / 2 + dy * i
        perp_x, perp_y = -dy, dx
        x1, y1 = cx - perp_x * diag, cy - perp_y * diag
        x2, y2 = cx + perp_x * diag, cy + perp_y * diag
        draw.line([(x1, y1), (x2, y2)], fill=(r, g, b), width=2)


def draw_radial_glow(
    img: Image.Image,
    center: tuple,
    radius: int,
    color: tuple,
    intensity: float = 0.4,
) -> None:
    """Draw a soft radial glow."""
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    steps = 40
    for i in range(steps, 0, -1):
        r = int(radius * (i / steps))
        alpha = int(255 * intensity * (1 - i / steps) ** 2)
        draw.ellipse(
            [center[0] - r, center[1] - r, center[0] + r, center[1] + r],
            fill=(color[0], color[1], color[2], alpha),
        )
    overlay = overlay.filter(ImageFilter.GaussianBlur(radius=20))
    img.paste(Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB"))


def draw_sparkle(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float, fill: tuple) -> None:
    """Draw a 4-pointed sparkle/star centered at (cx, cy)."""
    s = size
    points = [
        (cx, cy - s),
        (cx + s * 0.25, cy - s * 0.25),
        (cx + s, cy),
        (cx + s * 0.25, cy + s * 0.25),
        (cx, cy + s),
        (cx - s * 0.25, cy + s * 0.25),
        (cx - s, cy),
        (cx - s * 0.25, cy - s * 0.25),
    ]
    draw.polygon(points, fill=fill)


def draw_small_sparkle(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float, fill: tuple) -> None:
    s = size
    points = [
        (cx, cy - s),
        (cx + s * 0.3, cy),
        (cx, cy + s),
        (cx - s * 0.3, cy),
    ]
    draw.polygon(points, fill=fill)


def main() -> None:
    img = Image.new("RGB", (W, H), FOREST_DARK)

    # Layer 1: diagonal gradient (forest dark → emerald)
    draw_gradient(img, FOREST_DARK, FOREST, angle_deg=120)

    # Layer 2: ambient glows
    draw_radial_glow(img, (950, 120), 320, GOLD, intensity=0.25)
    draw_radial_glow(img, (180, 540), 360, FOREST, intensity=0.4)

    draw = ImageDraw.Draw(img)

    # Subtle vertical lines for texture
    for x in range(0, W, 40):
        draw.line([(x, 0), (x, H)], fill=FOREST_DARK, width=1)

    # --- Top-left brand chip ---
    chip_x, chip_y = 80, 80
    chip_size = 72
    draw.rounded_rectangle(
        [chip_x, chip_y, chip_x + chip_size, chip_y + chip_size],
        radius=18,
        fill=FOREST,
    )
    draw_sparkle(draw, chip_x + chip_size / 2, chip_y + chip_size / 2, 22, CREAM)
    # Gold dot
    draw.ellipse(
        [
            chip_x + chip_size - 12,
            chip_y - 4,
            chip_x + chip_size + 8,
            chip_y + 16,
        ],
        fill=GOLD,
    )

    # Brand wordmark
    font_brand = load_font(FONT_SANS_BOLD, 28)
    draw.text((chip_x + chip_size + 20, chip_y + 18), "US TALENT VISA", font=font_brand, fill=CREAM)

    font_tagline = load_font(FONT_SANS, 13)
    draw.text(
        (chip_x + chip_size + 20, chip_y + 50),
        "TALENT VISA PLATFORM",
        font=font_tagline,
        fill=CREAM_MUTED,
    )

    # --- Headline ---
    font_headline = load_font(FONT_DISPLAY, 92)
    headline_y = 220
    draw.text((80, headline_y), "Get your U.S.", font=font_headline, fill=CREAM)
    draw.text((80, headline_y + 100), "talent visa,", font=font_headline, fill=GOLD_LIGHT)
    draw.text((80, headline_y + 200), "without the guesswork.", font=font_headline, fill=CREAM)

    # --- Subtitle ---
    font_sub = load_font(FONT_SANS, 22)
    sub_y = headline_y + 320
    draw.text(
        (80, sub_y),
        "AI-powered eligibility, drafting & petitions across",
        font=font_sub,
        fill=CREAM_MUTED,
    )
    draw.text(
        (80, sub_y + 32),
        "15+ pathways - EB-1A, EB-2 NIW, O-1A, EB-5, L-1A & more.",
        font=font_sub,
        fill=CREAM_MUTED,
    )

    # --- Stats bar at bottom ---
    stats_y = 540
    stats = [
        ("1,400+", "approved"),
        ("94%", "approval rate"),
        ("32,000+", "members"),
        ("15+", "visa pathways"),
    ]
    stat_x = 80
    stat_font_num = load_font(FONT_DISPLAY, 36)
    stat_font_lbl = load_font(FONT_SANS, 13)
    for value, label in stats:
        draw.text((stat_x, stats_y), value, font=stat_font_num, fill=GOLD_LIGHT)
        draw.text((stat_x, stats_y + 44), label.upper(), font=stat_font_lbl, fill=CREAM_MUTED)
        stat_x += 270

    # --- Right-side decorative sparkles ---
    draw_small_sparkle(draw, 1050, 220, 18, GOLD_LIGHT)
    draw_small_sparkle(draw, 1100, 290, 10, CREAM_MUTED)
    draw_small_sparkle(draw, 1020, 360, 14, GOLD_LIGHT)
    draw_small_sparkle(draw, 1080, 410, 8, CREAM_MUTED)

    # --- Right-side big sparkle watermark ---
    draw_sparkle(draw, 980, 280, 80, (FOREST[0] + 8, FOREST[1] + 12, FOREST[2] + 8))
    draw_sparkle(draw, 980, 280, 50, GOLD)
    draw_small_sparkle(draw, 980, 280, 22, CREAM)

    # --- CTA pill at top-right ---
    pill_text = "Check eligibility ->"
    font_pill = load_font(FONT_SANS_BOLD, 16)
    pill_padding_x, pill_padding_y = 24, 14
    try:
        bbox = draw.textbbox((0, 0), pill_text, font=font_pill)
        text_w = bbox[2] - bbox[0]
        text_h = bbox[3] - bbox[1]
    except AttributeError:
        text_w, text_h = 200, 22
    pill_w = text_w + pill_padding_x * 2
    pill_h = text_h + pill_padding_y * 2
    pill_x = W - pill_w - 80
    pill_y = 80
    draw.rounded_rectangle(
        [pill_x, pill_y, pill_x + pill_w, pill_y + pill_h],
        radius=pill_h // 2,
        fill=GOLD,
    )
    draw.text(
        (pill_x + pill_padding_x, pill_y + pill_padding_y - 2),
        pill_text,
        font=font_pill,
        fill=FOREST_DARK,
    )

    # --- Save ---
    out_path = Path(__file__).resolve().parent.parent / "src" / "app" / "opengraph-image.png"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG", optimize=True)
    print(f"Saved OG image: {out_path}")
    print(f"Size: {out_path.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
