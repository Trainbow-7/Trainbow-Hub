# AI Privacy, Data Protection & Minors Safeguards

## 1. Zero Direct PII Transmission
Trainbow HUB strictly adheres to the **Nigeria Data Protection Act (NDPA 2023)**, **Child Rights Act**, and **GDPR/COPPA** standards.
Students using Trainbow HUB are often minors (aged 10–18).

- **No Student Identifiers**: Prompts sent to external AI providers (Google Gemini, OpenAI, Anthropic) NEVER include student full names, email addresses, phone numbers, school names, student IDs, or contact information.
- **Academic Scoping Only**: Only the academic problem statement, structured extraction (given equations/parameters), relevant syllabus context, and diagram coordinates are transmitted.
- **Log Scrubber**: All logging endpoints scrub bearer tokens, API keys, student identifiers, and authorization headers before recording.

---

## 2. Model Training & Zero Data Retention Terms
Trainbow HUB configures API integrations with strict enterprise zero-training and private retention policies:

1. **Google Gemini (Google Cloud Vertex AI & Google AI Studio Paid Tier)**:
   - *Data Use Policy*: Under paid commercial API agreements, customer prompts, image uploads, and generated outputs are **NOT** used to train Google models.
   - *Data Retention*: Transient processing; prompts are not stored permanently by default.
2. **OpenAI API**:
   - *Data Use Policy*: By default, data sent to the OpenAI API is **NOT** used to train OpenAI models (per OpenAI API Data Usage Policies).
   - *Data Retention*: 30-day encrypted retention strictly for abuse/misuse detection, after which data is purged, unless Zero Data Retention (ZDR) is negotiated.
3. **Anthropic Claude API**:
   - *Data Use Policy*: Anthropic commercial API terms guarantee customer prompts and completions are **NOT** used to train generative models.
   - *Data Retention*: Prompts are retained for up to 30 days solely for safety monitoring and trust/safety auditing, then deleted.

---

## 3. Cross-Border Data Transfer & Guardian Consent
- **Cross-Border Processing**: Calls to Google, OpenAI, and Anthropic servers may route through European Union or United States data centres.
- **Guardian Consent**: Guardians and schools agree to academic-only processing as part of Trainbow HUB's onboarding terms of service.
- **Human Escalation**: If an AI solution is flagged or questioned, only academic thread context is transferred to verified human educators within the Trainbow network.
