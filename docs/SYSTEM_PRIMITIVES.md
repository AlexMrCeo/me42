# my42 — System Primitives (Source of Truth)

This document defines the core primitives of the my42 system.
These primitives exist regardless of UI, backend, or integrations.

No feature, agent, score, or screen may violate these definitions.

---

## 1. Event / Record

**Event** is a factual occurrence in life.
It is the only source of truth.

Examples:
- transaction
- workout
- sleep
- lab_result
- interaction
- content_published
- task_completed
- note / decision

Rules:
- Events are immutable.
- No interpretation exists without events.
- All scores, insights, and agent actions must reference events.

---

## 2. State

**State** is the current condition of a life domain,
derived from events, without intentions.

Examples:
- financial_state
- health_state
- social_state
- business_state

Rules:
- State describes reality, not desire.
- State can be bad even if no goals exist.
- Life Score is primarily based on State.

---

## 3. Capacity

**Capacity** represents available resources.

Dimensions:
- physical
- mental
- time
- financial

Rules:
- Capacity limits goals, tasks, and sprints.
- Agents must respect capacity.
- Pressure without capacity awareness is invalid.

---

## 4. Goal

**Goal** is an intention and belongs to the Goals Sphere.

Properties:
- horizon (short / mid / long)
- related_spheres (1..N)
- conflicts (optional)
- goals_score (alignment, not result)

Rules:
- Goals describe how the user wants to live.
- Goals do not represent reality.
- Goals completion does NOT equal Life Score.

---

## 5. Task

**Task** is an executable action.

Types:
- routine
- agent_intervention

Rules:
- Tasks may exist without goals.
- Tasks may exist without sprints.
- Completing a task creates an event.

---

## 6. Sprint

**Sprint** is a temporary campaign.

Properties:
- multiple sprints can exist in parallel
- can span multiple spheres
- has time boundaries
- may end without success

Rules:
- Sprints influence Life Score but never define it.
- Sprints organize focus, not life value.

---

## 7. Insight

**Insight** explains system behavior.

Each Insight must contain:
- trigger
- evidence (events)
- interpretation
- suggested_action

Rules:
- No insight without evidence.
- No pressure without explanation.

---

## 8. User Override (Agency)

User agency is a first-class primitive.

Users can:
- snooze
- override priority
- mark irrelevant
- ignore for today

Rules:
- Agents must respect overrides.
- Ignoring is not failure.

---

## 9. Time Horizons

All primitives exist across time horizons:
- today
- week
- sprint
- quarter
- life

Rules:
- Evaluation depends on horizon.
- Short-term failure may be long-term progress.

---

## 10. Life Score

**Life Score** is the north star.

Definition:
Life Score = overall alignment of life systems over time.

Rules:
- Life Score is not a goal.
- Life Score is not task completion.
- Life Score reflects balance, sustainability, and trajectory.

---

This document is final for v1.
Any UI or logic must align with it.
