"""Generate right-sized variants for Sunshine International School images.

Re-run me once the VM EPERM storm clears (2026-11-18: every PIL write
failed 19/19, twice — see src/lib/images.ts header). Reads static/images,
writes *-400/-800/-1200/-1600 variants (WebP stays WebP q82, JPEG stays
JPEG q80 progressive). Prints OK/BAD per file with dimensions + bytes;
verify with `wc -c static/images/*-400.* static/images/*-800.* ...`
afterwards — every file must be > 0 bytes and match its target size.

After the variants exist, wire `imgSrcset(...)` from src/lib/images.ts
into the <img> tags (the srcset strings are already defined there).
"""
import os
from PIL import Image

SRC = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "static", "images")

# (source file, [(target width, suffix)])
JOBS = [
    ("hero-students.webp", [(400, "-400"), (800, "-800"), (1200, "-1200")]),
    ("main-gate.webp", [(400, "-400"), (800, "-800"), (1200, "-1200"), (1600, "-1600")]),
    ("clubs.jpg", [(800, "-800")]),
    ("community-service.jpg", [(800, "-800")]),
    ("performing-arts.jpg", [(800, "-800")]),
    ("primary-classroom.webp", [(400, "-400"), (800, "-800")]),
    ("senior-secondary.jpg", [(800, "-800")]),
    ("sports-students.webp", [(400, "-400"), (800, "-800")]),
    ("campus-life.jpg", [(400, "-400")]),
    ("high-school.jpg", [(400, "-400")]),
    ("library.jpg", [(400, "-400"), (600, "-600"), (800, "-800")]),
    ("life-skills.jpg", [(400, "-400")]),
    ("middle-school.jpg", [(400, "-400")]),
    ("pre-primary.jpg", [(400, "-400")]),
    ("science-lab.jpg", [(400, "-400"), (800, "-800")]),
    ("visual-arts.jpg", [(400, "-400")]),
]

failed = []
for src_name, variants in JOBS:
    src_path = os.path.join(SRC, src_name)
    try:
        im = Image.open(src_path)
    except Exception as e:
        print(f"FAIL open {src_name}: {e}")
        failed.append(src_name)
        continue
    w, h = im.size
    fmt = im.format
    base, ext = os.path.splitext(src_name)
    for target_w, suffix in variants:
        if target_w >= w:
            print(f"SKIP {src_name} {target_w}w (orig only {w}w)")
            continue
        target_h = round(h * target_w / w)
        out_name = f"{base}{suffix}{ext}"
        out_path = os.path.join(SRC, out_name)
        try:
            resized = im.resize((target_w, target_h), Image.LANCZOS)
            if fmt == "WEBP":
                resized.save(out_path, format="WEBP", quality=82, method=6)
            else:
                resized.save(out_path, format="JPEG", quality=80,
                             optimize=True, progressive=True)
            got = Image.open(out_path)
            got.load()
            size = os.path.getsize(out_path)
            status = "OK " if size > 0 and got.size == (target_w, target_h) else "BAD"
            print(f"{status} {out_name}: {got.size[0]}x{got.size[1]} {size} bytes")
            if status == "BAD":
                failed.append(out_name)
        except Exception as e:
            print(f"FAIL write {out_name}: {e}")
            failed.append(out_name)

print("FAILED:", failed if failed else "none")
