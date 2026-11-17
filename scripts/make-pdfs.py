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
    "fee-structure.pdf": (
        "Fee Structure 2026-27 (Demo)",
        [
            "#Annual tuition fee",
            "Pre-Primary (Nursery - KG): Rs. 48,000 / year",
            "Primary (Classes I - V): Rs. 62,000 / year",
            "Middle School (Classes VI - VIII): Rs. 72,000 / year",
            "High School (Classes IX - X): Rs. 84,000 / year",
            "Senior Secondary (Classes XI - XII): Rs. 96,000 / year",
            "",
            "#One-time charges",
            "Admission fee: Rs. 15,000 (one-time)   Registration fee: Rs. 500",
            "Transport (optional): Rs. 1,500 / month",
            "",
            "#Instalments",
            "Term 1: 40% - due 10 April 2026",
            "Term 2: 30% - due 10 August 2026",
            "Term 3: 30% - due 10 December 2026",
            "",
            "#Concessions (demo)",
            "Sibling: 10% off tuition for the 2nd child",
            "Alumni wards: 10% off one-time admission fee",
            "Demo fees for presentation only.",
        ],
    ),
    "prospectus.pdf": (
        "Sunshine International School - Prospectus 2026-27 (Demo)",
        [
            "#About the school",
            "Sunshine International School, New Delhi - founded 2004.",
            "2,500+ students, 150+ teachers, 10-acre campus, CBSE affiliated.",
            "",
            "#Admissions 2026-27",
            "Nursery to Class XII. Registration fee Rs. 500.",
            "Age criteria, documents and process are on the Admissions pages.",
            "",
            "#Fees (demo)",
            "Rs. 48,000 - Rs. 96,000 per year by stage, in 3 instalments.",
            "",
            "#Contact",
            "123 Education Street, New Delhi - 110001",
            "Phone: +91 98765 43210   Email: info@sunshineschool.edu.in",
            "Demo prospectus for client presentation.",
        ],
    ),
    "scholarship-form.pdf": (
        "Scholarship Application Form (Demo)",
        [
            "#Student details",
            "Full name: ________________________________________",
            "Class & section: ______________    Admission no.: ______________________",
            "",
            "#Scholarship applied for",
            "Merit [ ]    Need-based [ ]    Sports / Arts [ ]    Sibling [ ]",
            "",
            "#Supporting documents",
            "Attach: report card, income proof / certificates as applicable.",
            "",
            "Last date to apply: 31 March. (Demo form)",
            "Signature of parent / guardian: ____________________    Date: ____________",
        ],
    ),
    "circular-admissions-2026-27.pdf": (
        "Circular: Admissions Open 2026-27 (Demo)",
        [
            "Admissions are open for Nursery to Class XII for 2026-27.",
            "Forms are available at the school office and online.",
            "Registration fee: Rs. 500. Last date: 31 January 2027 (demo).",
            "For help call +91 98765 43210 (Mon - Sat, 8 AM - 4 PM).",
        ],
    ),
    "circular-half-yearly-datesheet.pdf": (
        "Circular: Half-Yearly Date Sheet (Demo)",
        [
            "Half-Yearly Examinations: 12 - 21 October 2026 (Classes VI - XII).",
            "Students must reach school by 8:00 AM. No re-test without a medical certificate.",
            "Date sheets are displayed on the notice board and the Examination page.",
        ],
    ),
    "circular-fee-due-date.pdf": (
        "Circular: Term 1 Fee Due Date (Demo)",
        [
            "Term 1 fee is due on 10 November 2026.",
            "Pay online via the parent portal or at the school accounts office.",
            "A late fee of Rs. 100 per week applies after the due date (demo).",
        ],
    ),
    "circular-winter-uniform.pdf": (
        "Circular: Winter Uniform (Demo)",
        [
            "Winter uniform is compulsory from 01 December 2026.",
            "Maroon blazer, grey trousers / skirt, white shirt and school tie.",
            "Uniforms are available at the school store (Mon - Sat, 9 AM - 1 PM).",
        ],
    ),
    "circular-diwali-break.pdf": (
        "Circular: Diwali Break (Demo)",
        [
            "School is closed for Diwali break from 24 October to 02 November 2026.",
            "School reopens on 03 November 2026. Happy Diwali!",
        ],
    ),
    "circular-sports-day-trials.pdf": (
        "Circular: Annual Sports Day Trials (Demo)",
        [
            "House trials for the Annual Sports Day begin on 18 November 2026.",
            "Students should report in sports uniform with their house captain.",
            "Annual Sports Day: 05 December 2026.",
        ],
    ),
}

for name, (title, lines) in FORMS.items():
    data = pdf_bytes(title, lines)
    with open(os.path.join(OUT, name), "wb") as f:
        f.write(data)
    print(name, len(data), "bytes")
