#!/usr/bin/env python3
"""Generate the six demo PDFs served by /downloads — pure-stdlib minimal PDF writer."""
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "static", "downloads")
os.makedirs(OUT, exist_ok=True)


def pdf_bytes(title, lines):
    # Escape PDF string chars
    def esc(s):
        return s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")

    content = []
    y = 760
    content.append("BT /F1 20 Tf 56 %d Td (%s) Tj ET" % (y, esc(title)))
    y -= 14
    content.append("BT /F1 10 Tf 56 %d Td (%s) Tj ET" % (y, esc("Sunshine International School, New Delhi  |  Demo form — mock content")))
    y -= 30
    for line in lines:
        if line == "":
            y -= 12
            continue
        if line.startswith("#"):
            y -= 8
            content.append("BT /F1 13 Tf 56 %d Td (%s) Tj ET" % (y, esc(line[1:])))
            y -= 20
        else:
            content.append("BT /F1 11 Tf 56 %d Td (%s) Tj ET" % (y, esc(line)))
            y -= 18
    stream = "\n".join(content).encode("latin-1", "replace")
    objs = []
    objs.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    objs.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    objs.append(
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
        b"/Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>"
    )
    objs.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    objs.append(b"<< /Length %d >>\nstream\n" % len(stream) + stream + b"\nendstream")
    out = bytearray(b"%PDF-1.4\n")
    offsets = []
    for i, o in enumerate(objs, start=1):
        offsets.append(len(out))
        out += b"%d 0 obj\n" % i + o + b"\nendobj\n"
    xref = len(out)
    out += b"xref\n0 %d\n" % (len(objs) + 1)
    out += b"0000000000 65535 f \n"
    for off in offsets:
        out += b"%010d 00000 n \n" % off
    out += b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (
        len(objs) + 1,
        xref,
    )
    return bytes(out)


FORMS = {
    "admission-form.pdf": (
        "Admission Application Form 2026-27",
        [
            "#Student details",
            "Full name: ________________________________________",
            "Date of birth: __________________    Gender: __________",
            "Class applying for: ______________    Previous school: ______________________",
            "",
            "#Parent / guardian details",
            "Father's name: _____________________________________",
            "Mother's name: _____________________________________",
            "Mobile: ______________________    Email: ______________________________",
            "Residential address: _________________________________________________",
            "",
            "#Declaration",
            "I confirm the information above is correct. (Demo form)",
            "Signature of parent / guardian: ____________________    Date: ____________",
        ],
    ),
    "tc-application.pdf": (
        "Transfer Certificate Application",
        [
            "#Student details",
            "Full name: ________________________________________",
            "Class & section: ______________    Admission no.: ______________________",
            "Reason for leaving: __________________________________________________",
            "",
            "#Declaration",
            "I request a Transfer Certificate. Last fee receipt is attached. (Demo form)",
            "Signature of parent / guardian: ____________________    Date: ____________",
        ],
    ),
    "fee-challan.pdf": (
        "Fee Challan - Term 1",
        [
            "Student name: ________________________________________",
            "Class & section: ______________    Admission no.: ______________________",
            "",
            "#Fee details (demo amounts)",
            "Tuition fee (Term 1): Rs. __________________",
            "Transport (optional): Rs. __________________",
            "Total payable: Rs. __________________",
            "",
            "Payable at the school office or by bank transfer. (Demo form)",
        ],
    ),
    "transport-form.pdf": (
        "Transport Request Form",
        [
            "Student name: ________________________________________",
            "Class & section: ______________    Admission no.: ______________________",
            "",
            "Requested route: ______________    Pickup point: ______________________",
            "Change of route / stop:  Yes [ ]    No [ ]",
            "",
            "Submit before the 10th of the month. (Demo form)",
            "Signature of parent / guardian: ____________________    Date: ____________",
        ],
    ),
    "leave-application.pdf": (
        "Leave Application Form",
        [
            "Student name: ________________________________________",
            "Class & section: ______________    Admission no.: ______________________",
            "",
            "Leave from: __________________    To: __________________",
            "Reason: ____________________________________________________________",
            "",
            "Parent signature is mandatory for leave over 2 days. (Demo form)",
            "Signature of parent / guardian: ____________________    Date: ____________",
        ],
    ),
    "bonafide-certificate.pdf": (
        "Bonafide Certificate Request",
        [
            "Student name: ________________________________________",
            "Class & section: ______________    Admission no.: ______________________",
            "",
            "Purpose (passport / bank / other): ___________________________________",
            "",
            "Certificates are issued within 3 working days. (Demo form)",
            "Signature of parent / guardian: ____________________    Date: ____________",
        ],
    ),
}

for name, (title, lines) in FORMS.items():
    data = pdf_bytes(title, lines)
    with open(os.path.join(OUT, name), "wb") as f:
        f.write(data)
    print(name, len(data), "bytes")
