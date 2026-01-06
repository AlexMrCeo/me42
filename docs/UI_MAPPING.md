# my42 — UI Mapping (System Primitives → Screens)

This document maps system primitives to UI layers and screens.
It is a companion to SYSTEM_PRIMITIVES.md and defines where each concept is visible.

---

## 1. Global UI Layers

### Landing Layer (Marketing)
Purpose:
- Explain vision
- Drive signup

Shows:
- Conceptual Life Score
- Product narrative

Never shows:
- Tasks
- Real data
- Agents

---

### App Layer (System)
Purpose:
- Operate life
- Understand state
- Act daily

Uses App Header (never Landing Header).

---

## 2. Primitive → UI Mapping

### Event / Record
Visible:
- Deep dive pages only
- Insight explanations ("based on last 7 days")

Not visible:
- Life Overview
- Goals pages

---

### State
Visible:
- Life Overview (Life Score, Spheres)
- Sphere Overview (Sphere Score, metrics)

Representation:
- Rings
- Trends
- Aggregates

---

### Capacity
Visible:
- Indirectly via agent language
- Task limitation states

Not shown as:
- A standalone dashboard (v1)

---

### Goal (Goals Sphere)
Visible:
- Goals Overview
- Goal Card

Never shown as:
- Checklist
- KPI completion

---

### Task
Visible:
- Life Overview (Today Actions)
- Sphere Overview (filtered)

Representation:
- Compact checklist
- Urgent / Schedule / Optional

---

### Sprint
Visible:
- Sprints Overview
- Context banner on Life / Goals / Spheres

Properties shown:
- Timeline
- Risk
- Affected spheres

---

### Insight
Visible:
- Hover tooltips
- "Why this matters" blocks
- Agent messages

Must include:
- Trigger
- Evidence
- Interpretation
- Suggested action

---

### User Override
Visible:
- Snooze
- Ignore today
- Deprioritize

Never treated as:
- Failure

---

### Time Horizons
Visible implicitly:
- Today → Tasks
- 7 days → Trends
- Sprint → Sprint pages
- Life → Life Score

---

## 3. Screen Permissions

### Life Overview
Can show:
- Life Score
- Sphere status
- Trends
- Today Actions

Cannot:
- Edit goals
- Show raw data

---

### Sphere Overview
Can show:
- Sphere Score
- Metrics
- Contribution to Life Score
- Sphere actions

Cannot:
- Manage other spheres

---

### Goals Overview
Can show:
- Active goals
- Conflicts
- Sphere links
- Goal alignment

Cannot:
- Mark goals as done

---

### Deep Dive Pages
Can show:
- Raw data
- History
- Detailed analytics

Must include:
- Context header
- Back navigation

---

## 4. Headers

### Landing Header
- Vision
- How it works
- Pricing
- CTA

### App Header
- Life
- Goals
- Sprints
- Spheres
- Settings (placeholder)

Headers are never mixed.

---

This document defines UI boundaries.
Any screen violating this mapping is incorrect.
