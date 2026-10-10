<!-- Page 1 -->
Trainbow HUB — Product Requirements
Document (v1.1, Refined)
Oct 10, 2026  ·  @Micha
Trainbow HUB is a mobile-first learning platform where Nigerian students get AI-guided
Mathematics help and book verified tutors in one account. This version tightens v1.0 so a
team can estimate, build and test it: the MVP launches with Mathematics on a platform
built to add any subject, with one booking path, every requirement has an ID and priority,
and open decisions are listed instead of buried.
1. Vision, summary and what changed
Vision. Build a reliable, accessible, AI-assisted education platform that connects students,
parents, tutors and learning resources. Tagline: Learn • Connect • Grow.
Primary objective. A learner can register, learn, get personalised help, find a tutor, pay for
and attend a lesson, and see progress from one account.
Four service areas, one system. Academy (courses and revision), AI (guided learning
assistant), Tutors (directory, booking, virtual lessons, reviews) and Music (theory and
instrument tuition). They share one account, one calendar, one payment system and one
progress record. At MVP only Academy (Mathematics), AI (Mathematics) and Tutors ship;
Music reuses the same foundations later.
Launch approach. Lean, Nigeria-first MVP: Mathematics, a curated tutor marketplace,
NGN payments. International readiness is an architecture constraint (currency, time zone,
locale fields), not an MVP feature.
Changes from v1.0
Area Change in v1.1 Why
Scope MVP defined explicitly with in/out
lists
v1.0 listed all four divisions as
modules with no clear cut line
Requirements IDs (e.g. BK-04), priority (M/S/C)
and testable wording
Enables estimates, backlog and
traceability to tests
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 1 of 28

<!-- Page 2 -->
2. Goals, scope and success metrics
The MVP succeeds if a pilot cohort completes the full journey (register, learn, book, pay,
attend) reliably and safely. Targets below are pilot hypotheses to validate, not promises.
Business goals
1. Extend the existing physical tutoring business into digital delivery.
2. Earn revenue from tutoring commission, subscriptions and courses.
3. Cut admin work through automated scheduling, reminders and reporting.
4. Build a trusted, verified tutor network.
5. Create a brand and architecture that can later serve other markets.
Area Change in v1.1 Why
Guardians Minimal guardian consent and
linking moved into MVP
Minors cannot be served safely
without it; v1.0 left the portal as
"should have"
Payouts Manual tutor payouts at MVP,
automation later
Marketplace split payouts depend
on provider support and
compliance
Booking Separate booking status from
payment status, with a defined
state table
v1.0 mixed them in one lifecycle
Metrics Each metric has a measurement
method and review owner
v1.0 targets were not measurable
as written
Privacy Anchored to the Nigeria Data
Protection Act 2023 and a named
compliance owner
v1.0 only said "review applicable
law"
Open
questions
New decision log with owner and
needed-by date
Prevents silent assumptions during
build
LMS Build a light native learning module
for MVP; Moodle only if discovery
justifies it
Avoids integration cost and a
second user system for one
subject
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 2 of 28

<!-- Page 3 -->
MVP scope
Success metrics
Each metric has a source and a reviewer. The product owner reviews them weekly during
the pilot. Baselines are set in the first two pilot weeks, since no digital data exists yet.
In scope (MVP) Out of scope (later)
Public site, course and tutor catalogue Native iOS and Android apps
Registration, roles, guardian consent for
minors
Music courses and instrument bookings
Multi-subject catalogue (admins add
subjects without code); Mathematics
launches first with lessons, quizzes,
progress tracking
AI answers for non-Mathematics subjects
until each passes evaluation
AI Mathematics assistant (text only) with
quotas
Voice or image-based AI input
Tutor profiles, vetting, availability, booking Automated split payouts to tutors
NGN payments, refunds, reconciliation,
tutor ledger
Multi-currency and international payments
Third-party video classroom link Lesson recording
Email and SMS notifications, admin and
support tools
School administration features, multilingual
UI
Metric Target How it is measured
Signup success ≥ 95% of valid attempts Funnel events: form started vs
account verified
Booking
completion
≥ 90% of started flows end
without a system error
Server error rate per booking
attempt
Booking accuracy ≥ 99% of confirmed bookings
match tutor calendar and payment
Weekly automated audit query
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 3 of 28

<!-- Page 4 -->
Assumptions and risks
Metric Target How it is measured
Payment
reconciliation
100% of confirmed payments
matched to an order
Daily reconciliation job vs
provider report
Page performance LCP ≤ 2.5 s at 75th percentile on
mobile
Real-user monitoring
Availability ≥ 99.5% monthly, excluding agreed
maintenance
External uptime monitor
AI answer quality ≥ 80% positive ratings and ≥ 95%
correct on a reviewed
Mathematics sample
User ratings plus tutor-scored
rubric sample
Learning
engagement
Weekly active learners; share
booking a second lesson within 30
days
Product analytics
Learning outcome Quiz score change over 8 weeks,
tracked separately from
satisfaction
Assessment attempt data
Safeguarding 100% of high-severity reports
triaged within 24 hours
Incident queue timestamps
Item Type Mitigation
Existing Trainbow tutors and
students seed the pilot supply and
demand
Assumption Confirm cohort size and tutor count
before build
Payment provider supports the
planned checkout, refunds and
webhooks
Assumption Confirm in discovery; sandbox test
before commitment
Users book or pay tutors off-
platform after first contact
Risk Hide direct contact details, add
value through reminders, progress
records and reviews
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 4 of 28

<!-- Page 5 -->
3. Users, roles and permissions
Seven roles exist, and every permission is enforced on the server; hiding a button is not
security. A user can hold several roles (a parent who also tutors), but each action is
checked against the role being used.
Item Type Mitigation
AI gives wrong Mathematics answers Risk Answer verification, grounded
content, rubric review, tutor
escalation
AI and video costs exceed unit
economics
Risk Per-user quotas, cost alerts, plan
limits
Unreliable mobile data and power Risk Lightweight pages, resumable
quizzes, clear retry states, SMS
reminders
Safeguarding or data-protection
failure involving minors
Risk Consent flow, tutor vetting, incident
process, legal review before launch
Role Can do Cannot do
Guest Browse courses, tutor profiles
(limited), pricing
See private data, book, use AI
Student Learn, take quizzes, use AI, book,
view own progress and payments
See other learners' records
Parent/guardian Manage linked children, consent,
pay, view reports and attendance
Access unlinked children; read raw
AI chats unless the child's settings
allow it
Tutor Manage own profile, availability,
bookings, assignments, earnings
view
Contact learners outside platform
channels; see data of non-booked
learners
Content
manager
Create and publish courses,
lessons, quizzes
See payments or private user data
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 5 of 28

<!-- Page 6 -->
Rules for minors
US-01 (M). Under-18 accounts are created by or linked to a verified guardian before
booking, payment or tutor contact is allowed.
US-02 (M). The platform records who gave consent, when, for what purpose, and
which version of the notice.
US-03 (M). Learners under 18 cannot message tutors privately; communication runs
through monitored booking channels.
US-04 (M). Guardians can review, pause and revoke a child's access, and every change
is audit-logged.
US-05 (M). The age threshold and consent method are set by counsel after review of
the Nigeria Data Protection Act 2023 and related guidance (see open questions).
4. MVP functional requirements
Priority key: M = must have for MVP, S = should have soon after, C = could have. Each row
is testable and maps to a test case.
A. Public website
Role Can do Cannot do
Support agent View tickets and the booking and
payment status needed to resolve
them
See card data, full AI
conversations or impersonate
users
Administrator Manage users, tutors, content,
refunds, settings, reports
Act without MFA; edit financial
ledger entries
ID Requirement Pri Acceptance criteria
PW-
01
Home, about, contact, FAQ, pricing,
course catalogue
M Visitor finds courses and tutors
without registering
PW-
02
Searchable tutor directory showing
only approved tutors
M Unapproved or suspended tutors
never appear
PW-
03
Price, cancellation and refund terms
shown before payment
M Terms visible on tutor page and
checkout
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 6 of 28

<!-- Page 7 -->
B. Identity and access
C. Learning (Mathematics)
ID Requirement Pri Acceptance criteria
PW-
04
Terms, privacy notice, safeguarding
and refund policies published
M Linked in footer and at signup
PW-
05
Responsive, keyboard-usable, SEO-
indexable public pages
M Passes mobile and keyboard checks;
sitemap present
PW-
06
No private learner data or tutor
contact details published
M Verified by review and automated
checks
ID Requirement Pri Acceptance criteria
ID-
01
Email or phone signup with OTP
verification
M OTP expires in 10 minutes or less;
rate-limited per user and IP
ID-
02
Login, logout, password reset,
session expiry
M Passwords hashed; reset links single-
use
ID-
03
Role-based dashboards and server-
side authorisation
M Changing a URL or API ID returns
403, not another user's data
ID-
04
Guardian linking with verification M Duplicate or conflicting links are
rejected
ID-
05
Account suspension, deletion
request, data export
M Suspended users cannot book or pay
ID-
06
MFA for admin and support accounts M Privileged login impossible without
second factor
ID-
07
Audit log for sensitive admin actions M Who, what, when, before and after
values recorded; not editable
ID Requirement Pri Acceptance criteria
LN-
01
Course, lesson and quiz delivery for
defined levels
M Student can enrol, complete and
resume a lesson
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 7 of 28

<!-- Page 8 -->
D. Trainbow HUB AI (Mathematics)
The AI is a tutor-style assistant, not a general chatbot. It uses an established model API
called from the server, never from the browser. No proprietary model is trained in the
MVP.
ID Requirement Pri Acceptance criteria
LN-
02
Quiz scoring with stored attempts and
feedback
M Score saved before confirmation is
shown
LN-
03
Progress persists across devices M Phone to laptop shows the same
state
LN-
04
Failed requests show a clear error and
retry; in-progress quiz answers are not
lost
M Simulated network drop preserves
answers
LN-
05
Revision recommendations from quiz
results
S Suggested topics match weak
areas
LN-
06
Content manager authoring and
publishing workflow
M Draft, review, publish states with
version history
ID Requirement Pri Acceptance criteria
AI-
01
Text Q&A with step-by-step
Mathematics explanations
M Response is readable, structured
and labelled as AI-generated
AI-
02
Hint-first mode, full solution on
request
M Student can choose hint level before
the answer
AI-
03
Practice questions with
independently verified answers
M Generated answers checked by a
calculator or solver step before
display
AI-
04
Grounding in approved curriculum
content where available
S Answers cite internal lesson or topic,
never invented references
AI-
05
Per-user daily quota and abuse
controls
M Over-quota requests blocked with
clear message
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 8 of 28

<!-- Page 9 -->
E. Tutor marketplace
ID Requirement Pri Acceptance criteria
AI-
06
Retry-safe requests M Duplicate submissions do not
double-count usage or create
duplicate records
AI-
07
Provider outage handling M Clear error, manual retry, no usage
deducted for failed calls
AI-
08
Input and output moderation, age-
appropriate responses
M Test set of unsafe prompts is
blocked or redirected
AI-
09
Feedback controls: helpful, not
helpful, report error
M Ratings stored against the turn
AI-
10
Escalate to a human tutor when
unresolved or low confidence
M One tap creates a support request
or booking prompt
AI-11 Conversation history with retention
and delete controls
M Deletion removes content within the
stated retention window
AI-
12
AI cannot read other students' data,
payments or unrelated chats
M Prompt context built only from the
current learner's allowed data
AI-
13
Cost, latency and error monitoring
with alerts
M Daily cost alert threshold configured
AI-
14
Pre-release accuracy evaluation
against a Mathematics rubric
M Agreed pass mark met on a reviewed
sample before public access
ID Requirement Pri Acceptance criteria
TM-
01
Tutor onboarding with identity and
credential checks
M Profile stays hidden until an admin
approves it
TM-
02
Profile: photo, qualifications,
subjects, levels, language, format,
rate, cancellation terms
M All fields validated; rate in NGN
minor units
TM-
03
Filters: subject, level, price, format,
language, availability
M Results match every selected filter
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 9 of 28

<!-- Page 10 -->
F. Booking
ID Requirement Pri Acceptance criteria
TM-
04
Reviews only from learners with a
completed paid booking
S Public submission impossible; one
review per booking
TM-
05
Tutor availability management with
recurring and one-off slots
M One calendar per tutor, used by all
services
TM-
06
Tutor conduct policy and suspension
workflow
M Suspension cancels future public
bookings with notice
ID Requirement Pri Acceptance criteria
BK-
01
Temporary slot hold during checkout
(default 10 minutes, configurable)
M Expired holds release the slot
automatically
BK-
02
Concurrency-safe confirmation M Parallel test: only one of two
simultaneous requests wins
BK-
03
Booking confirmed only after server-
verified payment
M Browser redirect alone never
confirms
BK-
04
Duplicate payment events cannot
create duplicate bookings
M Replayed webhook leaves one
booking
BK-
05
Times stored in UTC, shown in the
user's time zone (default
Africa/Lagos)
M Display correct across zones
BK-
06
Reschedule re-checks availability M Conflicts rejected
BK-
07
Cancellation and refund outcome
follows the tutor's stated policy and
is visible to both sides
M Outcome recorded and shown
BK-
08
Reminders by email, SMS or in-app,
per user preference
M Sent at configured intervals before
the session
BK-
09
Booking status and payment status
stored separately
M See state table in section 7
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 10 of 28

<!-- Page 11 -->
G. Online classroom
H. Payments and tutor earnings
ID Requirement Pri Acceptance criteria
CL-
01
Unique, time-limited session link via
an established video provider
M Only booked participants and the
guardian can join
CL-
02
Link access revoked on cancellation
or expiry
M Old link fails after status change
CL-
03
Attendance recorded against the
booking
M Join and leave times saved
CL-
04
Report-conduct control inside the
session flow
M Report reaches the safeguarding
queue
CL-
05
Fallback contact path if the video
link fails
M Support workflow documented and
tested
CL-
06
Recording off by default M Enabled only with lawful basis,
consent and retention rule
ID Requirement Pri Acceptance criteria
PY-
01
Local NGN payments through an
approved provider; no card data
stored
M Provider-hosted payment fields
PY-
02
Server verifies each transaction by
provider API and signed webhook
M Invalid signature rejected; success
page alone insufficient
PY-
03
Idempotency keys on payment and
booking operations
M Retried request returns the original
result
PY-
04
Immutable financial event ledger M Corrections made by new entries,
never edits
PY-
05
Commission calculated from
recorded events
M Rate configured per tutor or globally;
test cases pass
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 11 of 28

<!-- Page 12 -->
K. Administration and support
ID Requirement Pri Acceptance criteria
PY-
06
Refund requested, approved,
processed and reconciled as
separate steps
M A request is never shown as a
completed refund
PY-
07
Daily reconciliation against provider
settlement reports
M Unmatched items flagged for review
PY-
08
Manual tutor payouts from the ledger
at MVP
M Payout record references ledger
entries
PY-
09
Handling of failed payments, partial
refunds, chargebacks and disputes
M Each outcome defined for booking
status and tutor earnings
PY-
10
AI subscription plans with usage
limits
S Entitlement changes only after
verified payment
ID Requirement Pri Acceptance criteria
AD-
01
User, tutor and content management
by role
M Least-privilege permissions tested
AD-
02
Tutor approval queue with
documents viewed securely
M Credential files in private storage
with signed links
AD-
03
Booking, payment, refund and
dispute monitoring
M Filter by status and date
AD-
04
Safeguarding and complaint queues
with severity
M Severity timestamps and assigned
owner
AD-
05
AI usage and cost report M Daily cost per user and total
AD-
06
Operational alerts (payment failures,
booking errors, downtime)
M Alert reaches on-call contact
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 12 of 28

<!-- Page 13 -->
L. Multi-subject support
Mathematics is the first subject, not a special case. Any subject is added through
configuration and content, not new code, and the AI is switched on per subject only after
it passes evaluation.
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 13 of 28

<!-- Page 14 -->
Subject launch checklist. A subject goes live when all of these are done:
1. Curriculum and level map agreed.
2. Content published and reviewed.
3. Enough approved tutors, with the minimum number set by the business.
ID Requirement Pri Acceptance criteria
SB-
01
Subject registry with name, levels,
delivery formats and status (draft,
active, retired); admins manage it
without a deployment
M A new subject appears in the public
catalogue only when Active
SB-
02
Courses, lessons, quizzes and
resources belong to a subject and
level; content managers can be
limited to assigned subjects
M A content manager cannot edit
outside their subjects
SB-
03
Tutors are approved per subject and
level, with credential evidence for
each
M A tutor is listed and bookable only
for subjects they are approved for
SB-
04
Search, filters, dashboards, calendar
and booking work for every active
subject
M Subject filter returns only matching
courses and tutors; one calendar
shows all subjects
SB-
05
AI access is enabled per subject;
subjects without AI show courses
and tutors instead
M With the flag off there is no AI entry
point and the page explains the
alternatives
SB-
06
A subject's AI is enabled only after a
subject-specific evaluation: rubric,
approved grounding content, unsafe-
content tests and recorded sign-off
M The enable switch is blocked until
sign-off is recorded
SB-
07
Per-subject AI configuration
(prompt, guardrails, answer-
verification method), versioned
S Changes are logged and can be
rolled back
SB-
08
Per-subject reporting: enrolments,
bookings, AI usage and cost, ratings
M Admin can filter every report by
subject
SB-
09
Optional per-subject pricing and
commission overrides
S Override applies only to that subject
and is ledger-audited
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 14 of 28

<!-- Page 15 -->
4. AI evaluated and signed off, if AI is enabled for it.
5. Pricing, cancellation terms and commission set.
6. Support staff briefed on the subject.
Open decision. Which subjects and curricula follow Mathematics, and in what order? This
sets content, tutor recruitment and AI evaluation work for release 2 (owner: business
owner).
5. Post-MVP modules
Modules I and J keep their v1.0 letters. Music and the full parent portal reuse MVP
foundations, so each ships only after the MVP passes its release gates and the pilot
shows demand.
I. Trainbow HUB Music (release 2)
J. Parent and guardian portal (full version, release 1.1)
Basic guardian linking, consent and payment are in the MVP (US-01 to US-04, ID-04). The
full portal adds:
ID Requirement Pri Acceptance criteria
MU-
01
Music catalogue and tutor profiles
for instruments, voice and theory, on
the same account system
S No second login or booking system
MU-
02
Online and in-person sessions in the
shared booking calendar
S Appears beside Mathematics
lessons on one dashboard
MU-
03
Practice assignments and tutor
progress notes
S Notes visible to the learner and
guardian
MU-
04
Licensed materials only S Each resource has a licence record
MU-
05
Adding new music courses needs no
code change
S Content manager publishes a course
end to end
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 15 of 28

<!-- Page 16 -->
Later
School administration features and a multilingual interface. (Additional subjects are
not deferred: see module L.)
Progressive web app, then native mobile apps.
Automated tutor payouts, international payments and specialised AI models, only if
usage and cost justify them.
6. Non-functional requirements, architecture and data
Build one modular monolith with a single PostgreSQL database. Separate services are
added only when load or team size demands it, because every extra service adds failure
points and cost.
ID Requirement Pri Acceptance criteria
PP-
01
Child progress and assessment
summaries
S Guardian sees only linked
children
PP-
02
Attendance, upcoming classes, booking
and payment history
S Matches booking records
PP-
03
Notification preferences with no
sensitive content in previews
S Lock-screen previews show
generic text
PP-
04
Review, revoke and audit guardian
access
S Revocation takes effect
immediately
PP-
05
Students cannot grant guardian rights
without verification
S Unverified grant attempt fails
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 16 of 28

<!-- Page 17 -->
Architecture at a glance
The browser never calls an outside provider directly. Every call runs through a server
module that holds the keys and checks permissions.
Non-functional requirements
architecture · 1 backend, 4 outside providers
Area Requirement Target or test
Performance Optimised for low-end phones
and slow networks;
compressed images; no heavy
client bundles on public pages
LCP ≤ 2.5 s (p75) on mobile;
page weight budget set in
discovery
Availability Managed hosting, health
checks, alerts
99.5% monthly uptime
Security HTTPS, least privilege, rate
limits, dependency scanning,
secrets in a vault
Pre-launch penetration test; no
open critical or high findings
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 17 of 28

<!-- Page 18 -->
Recommended stack (to confirm in discovery)
Frontend and API: Next.js with TypeScript, or a separate structured API if the team
prefers.
Database: PostgreSQL with database constraints for booking overlap and unique
payment references.
Auth: managed identity provider or mature framework, with OTP support for Nigerian
phone numbers.
Files: private object storage with signed, time-limited links.
Area Requirement Target or test
Reliability Transactions, retries with
backoff, idempotency, dead-
letter handling for jobs
Failure-injection tests for
payment, AI and video
providers
Accessibility Aim for WCAG 2.2 AA Keyboard, screen-reader and
contrast audit
Privacy Collect only what is needed;
retention and deletion rules per
data type
Data inventory approved by
compliance owner
Observability Central logs, metrics, error
tracking with personal data
scrubbed
Alert on payment, booking, AI
cost and uptime
Recovery Automated daily backups,
point-in-time recovery, written
runbook
Restore test passes before
launch; RPO and RTO set in
discovery
Maintainability Version control, CI tests,
documented APIs, repeatable
deploys
Green pipeline required to
release
Internationalisation Currency, locale and time zone
stored as data, not hard-coded
NGN and Africa/Lagos defaults;
second currency can be added
by configuration
Low-bandwidth
tolerance
Quiz and form state saved
locally and synced; SMS
fallback for reminders
Works through a simulated 3G
drop
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 18 of 28

<!-- Page 19 -->
Learning content: a light native module for MVP; adopt Moodle only if discovery shows
a clear need.
AI: a major model API behind a server-side gateway that handles prompts, quotas,
moderation and logging.
Payments: a Nigerian provider with verified webhooks and refunds (for example
Paystack or Flutterwave), subject to the discovery checks in PY-02 and PY-08.
Video: an established provider with join links and attendance data.
Environments: development, staging (sandbox payments, synthetic data) and
production, each with separate credentials.
Core data model
Entity
group
Entities Key rules
Identity User, Role, Permission, StudentProfile,
GuardianLink, TutorProfile
One user, many roles; guardian link
has verification status and
revocation date
Learning Subject, Level, TutorSubject, Course,
Lesson, Enrollment, Assessment,
AssessmentAttempt
Attempts are append-only; each
Subject has a status and an AI-
enabled flag
AI AIConversation, AITurn Owner-only access; retention date
on every turn; cost and token
metadata stored
Scheduling AvailabilitySlot, SlotHold, Booking,
ClassroomSession
Exclusion constraint prevents
overlapping confirmed bookings
per tutor
Money Order, PaymentTransaction, Refund,
TutorLedgerEntry, Subscription
Amounts as integer minor units
with explicit currency; ledger
entries are immutable
Service Notification, Review, SupportTicket,
AuditEvent
Review tied to a completed
booking; audit events are append-
only
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 19 of 28

<!-- Page 20 -->
Integrity rules. Every record has a stable unique ID. Financial records reference an order,
booking or subscription. Provider transaction references are unique. Tutor earnings are
computed from ledger events, never from editable figures. All timestamps are UTC.
7. Key workflows and state rules
Booking and payment are tracked as two separate statuses. A booking is confirmed only
when its payment status is Verified, and a refund request never changes the payment to
Refunded by itself.
Booking states
A hold expires if checkout stalls, and a slot becomes Confirmed only after server-side
payment verification. Cancellations and no-shows follow the tutor's stated policy.
booking states · 8 states
Status Meaning Allowed next states
Held Slot reserved during checkout Pending payment, Expired
Pending
payment
Payment started, awaiting
verification
Confirmed, Expired, Cancelled
Confirmed Payment verified, session
scheduled
Completed, Cancelled, No-show (a
reschedule keeps it Confirmed)
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 20 of 28

<!-- Page 21 -->
Payment states
Initiated → Verified, Failed or Abandoned. Verified → Refund requested → Refund
approved → Refund processing → Refunded (full or partial). Verified → Chargeback →
Resolved. Each transition writes an immutable ledger event.
Workflow A: Student asks a Mathematics question
1. Student signs in and opens Trainbow HUB AI.
2. Server checks permissions and remaining quota.
3. Gateway sends the question with only that learner's allowed context, applying
moderation.
4. Mathematics answers are verified where possible; unverified answers are labelled as
such.
5. Response, usage and cost are stored; the student can rate it or ask for a tutor.
6. If the provider fails, the student sees a retry option and no quota is used.
Workflow B: Student books a tutor
1. Student filters tutors and opens an approved profile.
2. Student picks a slot; the server holds it with a database-level lock.
3. Checkout shows price, commission-inclusive total and cancellation terms.
4. Provider payment starts with an idempotency key.
5. Signed webhook and API verification confirm payment.
Status Meaning Allowed next states
Completed Session took place; review and
earnings open
Disputed
Cancelled Cancelled by learner, tutor or
admin; refund rules apply
none
Expired Hold or payment window lapsed;
slot released
none
No-show Learner or tutor absent; policy
outcome applied
Disputed
Disputed Under support review Completed, Cancelled
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 21 of 28

<!-- Page 22 -->
6. Booking becomes Confirmed; both parties are notified and a classroom link is issued.
7. Reminders go out; attendance is recorded; booking completes by rule (tutor marks
done and no learner dispute within the agreed window).
8. Review and earnings entries unlock.
Workflow C: Parent enrols a child
1. Parent registers and verifies phone or email.
2. Parent creates or links the child profile and records consent.
3. Parent chooses a tutor or course and pays.
4. Child receives permitted access only; the parent sees upcoming sessions and
progress.
Workflow D: Refund or dispute
1. Authorised user submits a request with a reason.
2. Support reviews the booking, attendance and policy.
3. An authorised approver approves or declines; a second approver is required above a
set amount.
4. The provider refund is initiated and its result reconciled.
5. Booking, payment and ledger update together; the customer is notified; the case is
kept for audit.
Edge cases to test
Webhook arrives before the user returns to the site, after it, twice, or never
(reconciliation job catches it).
Tutor cancels after payment: automatic full refund, tutor penalty rules apply.
Tutor suspended with future bookings: learners are offered rebooking or a refund.
Learner and tutor are in different time zones or daylight rules change.
AI conversation deleted while its feedback is under review.
8. Security, privacy, safeguarding and AI governance
These controls must be in place and tested before any real learner uses the platform.
Legal items need review by a qualified Nigerian data-protection and child-safeguarding
adviser; this PRD does not substitute for that advice.
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 22 of 28

<!-- Page 23 -->
Security baseline
Encrypt data in transit and at rest; keep API keys, payment secrets and signing keys in
a managed secret store, never in client code.
Check authorisation on the server for every protected read and write, including
object-level checks (can this user see this booking?).
Defend against injection, XSS, CSRF, broken access control and insecure file upload;
scan dependencies in CI.
Rate-limit login, OTP, booking, payment and AI endpoints.
Require MFA for admin and support; log all privileged actions.
Scrub passwords, payment data and personal data from logs and error reports.
Run an independent security test before launch and after major changes.
Privacy and data protection
Name a data protection lead and register or assess obligations under the Nigeria Data
Protection Act 2023 and Nigeria Data Protection Commission guidance, including any
data protection impact assessment and breach-notification duties.
Keep a data inventory with lawful basis, purpose, owner and retention period for each
data type.
Document consent for minors, including who may give it and how it is withdrawn.
Seek legal advice on cross-border transfers before using offshore AI, hosting or video
services with learner data, and again before international launch.
Provide access, correction, export and deletion handling within defined time limits.
Data type Proposed retention (to confirm with counsel)
AI conversations User-controlled; default 90 days, deletable any
time
Quiz attempts and progress Life of account plus a stated period
Booking and attendance records Per legal and dispute needs
Financial records Per Nigerian tax and accounting requirements
Tutor verification documents Until approval decision plus a short review period
Session recordings Not recorded by default
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 23 of 28

<!-- Page 24 -->
Child safeguarding
Tutor vetting before approval: identity check, credential check, references and a
criminal-record or equivalent screen where lawful and available; a written code of
conduct signed by each tutor.
No private chat for minors; all contact runs through platform channels that support
review.
Guardians can join or observe sessions for younger learners.
A visible report button in the app and classroom; high-severity reports triaged within
24 hours with a named safeguarding lead and written escalation path (including to
authorities where required).
Tutors can be suspended immediately pending investigation, with automatic notice to
affected learners.
AI governance
Disclosure: all AI output is labelled and users are told it can be wrong.
Grounding and verification: use approved curriculum content, and verify arithmetic
and generated answer keys programmatically.
Safety: moderate inputs and outputs, block off-topic or unsafe content, and keep
responses age-appropriate.
Privacy: send the provider the minimum data needed, no names or contact details, and
confirm the provider's data-use terms before launch.
Quality loop: review a weekly sample of conversations (with privacy controls), track
error reports and update prompts and content.
Cost control: per-user daily limits, global budget cap, automatic degrade or pause at
threshold.
9. Quality, delivery and handover
Testing
Type Must cover
Unit Pricing, commission, permissions, validation, state
transitions
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 24 of 28

<!-- Page 25 -->
Release gates
The MVP does not open to the public until all eight are met:
1. No open critical or high security issue.
2. Booking conflicts prevented under concurrency tests.
3. Payment verification and reconciliation pass all scenarios.
4. Student, guardian, tutor and admin access controls tested.
5. AI accuracy, safety and fallback evaluated and signed off.
6. Backup restoration demonstrated in staging.
7. Support, safeguarding and incident procedures documented and rehearsed.
8. Terms, privacy, refund and safeguarding policies published and legally reviewed.
Type Must cover
Integration Database, AI, payment, email/SMS and video
providers
End to end Register, enrol, book, pay, attend, review, refund
Concurrency Many simultaneous attempts on one slot; one
winner
Payment Delayed, duplicate and forged webhooks; failures;
partial refunds; reconciliation
Security Object-level access, authentication, rate limits,
OWASP-class issues
AI evaluation Accuracy against rubric, hallucination, unsafe
content, age fit, cost per session
Accessibility Keyboard, screen reader, contrast, form errors
Performance Mobile speed on throttled networks, load at
expected pilot peak plus margin
Recovery Backup restore, provider outage behaviour,
rollback
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 25 of 28

<!-- Page 26 -->
DevOps
Use separate development, staging and production environments with separate
credentials. The CI pipeline runs lint, tests and build checks; database migrations are
reviewed and reversible. Configure alerts for payment failures, booking errors, AI cost
spikes and downtime, plus a rollback procedure and a status-communication plan.
Roadmap
The 90-day figure from v1.0 is a target for a tightly scoped MVP with an experienced team;
the real schedule is set after discovery.
Open questions and decisions
roadmap · 5 phases, 3 gates
# Question Owner Needed by
1 Which payment provider, and does it
support refunds, webhooks and the
intended commission model?
Product owner + tech
lead
End of discovery
2 What is the legal age threshold and
consent method for minors?
Legal adviser Before design
freeze
3 What commission rate and
cancellation and refund policy apply
by default?
Business owner Before checkout
design
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 26 of 28

<!-- Page 27 -->
Definition of done
A feature is done only when its acceptance criteria pass; server-side permissions,
validation and error states are implemented; loading, empty, success and failure screens
exist; tests pass in CI and staging; accessibility and security are reviewed; logs and alerts
are configured; help text and documentation are updated; and a rollback path exists for
high-risk changes.
Handover
1. Source code in a repository owned by Trainbow.
2. Deployment and environment documentation.
3. Database schema and migrations.
4. API documentation and integration details.
5. Automated tests and reports.
6. Admin, support and tutor guides.
7. Backup and recovery runbook.
8. Security and privacy documentation.
9. Inventory of third-party services and recurring costs.
10. Domain, hosting, payment and AI accounts registered to the business.
11. Known limitations and a prioritised backlog.
12. Staff training for platform operations.
# Question Owner Needed by
4 Which AI provider, and can learner
data leave Nigeria under our
compliance position?
Tech lead + legal
adviser
End of discovery
5 Native learning module or Moodle? Tech lead End of discovery
6 Which tutor vetting checks are legally
available and practical?
Safeguarding lead Before tutor
onboarding
7 Pilot size, tutors available and target
launch date
Business owner Start of discovery
8 Budget ceiling for monthly AI, video
and SMS costs
Business owner End of discovery
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 27 of 28

<!-- Page 28 -->
Contracts must state ownership of code, designs, content, credentials and licences.
Vendor brief
Build Trainbow HUB, a secure, mobile-first Nigerian education platform: public catalogue,
role-based accounts with guardian consent, Mathematics learning and quizzes, a server-
side AI Mathematics assistant with quotas and tutor escalation, a vetted tutor
marketplace with concurrency-safe booking, verified NGN payments, refunds and
reconciliation, a third-party video classroom, and admin tools. Propose the simplest
maintainable architecture, using managed services where sensible.
Proposals must include:
1. Stack and architecture.
2. MVP scope and exclusions.
3. Wireframes or clickable prototype.
4. Milestone timeline and budget.
5. Itemised recurring costs.
6. Security, privacy and safeguarding plan.
7. Test and acceptance plan.
8. Maintenance and support terms.
9. IP and account-ownership terms.
10. Handover and post-launch support.
Pilot-ready means a student can register, learn, use the AI, find a tutor, book, pay, attend
and see progress, while parents, tutors and administrators can do their own tasks without
exposing anyone else's data or money records.
Trainbow HUB — Product Requirements Document (v1.1, Reﬁned)
Page 28 of 28

