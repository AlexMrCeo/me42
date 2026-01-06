# my42 — Prompt Queue (Deterministic Build Order)

This document defines the exact order of prompts to execute
once coding limits are lifted.

Each step assumes SYSTEM_PRIMITIVES.md and UI_MAPPING.md
are already read and enforced.

---

## Phase 0 — Ground Rules (always prepend)

Every prompt must start with:

"""
Read docs/SYSTEM_PRIMITIVES.md and docs/UI_MAPPING.md.
Do not violate system primitives or UI boundaries.
This is a static demo.
"""

---

## Phase 1 — Structural Separation

### 1. App Header
Goal:
- Separate App from Landing

Prompt intent:
- Create App Header component
- Apply it to all demo/* pages
- Remove landing CTAs from demo pages

---

## Phase 2 — Core Navigation

### 2. Life Overview Alignment
Goal:
- Align demo/life.html to primitives

Checklist:
- Life Score (state)
- Spheres (state)
- Trends (derived)
- Today Actions (tasks)

---

### 3. Goals Sphere
Goal:
- Introduce Goals as first-class sphere

Files:
- demo/goals.html
- demo/goal.html

Checklist:
- Goals Score
- Active goals
- Conflicts
- Sphere links
- Sprint links

---

### 4. Sprints
Goal:
- Add parallel sprint model

Files:
- demo/sprints.html
- demo/sprint.html

Checklist:
- Multiple active sprints
- Timeline
- Risk
- Affected spheres
- Related goals

---

## Phase 3 — Spheres Expansion (in order)

### 5. Finance
Files:
- demo/finance.html
- demo/finance-networth.html
- demo/finance-transactions.html

Focus:
- Net Worth
- Cashflow
- Actions
- Explainability

---

### 6. Social
Files:
- demo/social.html
- demo/social-people.html
- demo/social-person.html

Focus:
- Manual CRM
- 1-touch actions
- Relationship health

---

### 7. Health
Files:
- demo/health.html
- demo/health-checkups.html
- demo/health-labs.html

Focus:
- Performance vs Medical
- Preventive actions
- Capacity signals

---

### 8. Business
Files:
- demo/business.html
- demo/business-unit.html

Focus:
- Portfolio view
- Multiple businesses
- Projects vs units

---

### 9. Development
Files:
- demo/development.html

Focus:
- Consistency
- Learning → Output

---

## Phase 4 — Polishing

### 10. Insights & Overrides
Goal:
- Improve trust

Checklist:
- Explainable insights everywhere
- Snooze / Ignore actions visible

---

## Phase 5 — Final Review

### 11. System Coherence Check
Checklist:
- No goal treated as KPI
- No task treated as life success
- No sprint treated as life meaning
- No score without explanation

---

This queue is final for v1.
Follow sequentially.
