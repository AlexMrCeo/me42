# Life Score Model

## Overview

The Life Score is the single north-star metric (0-100) that provides complete truth about where you stand in life. Every score in the system is explainable, actionable, and designed to drive improvement.

**Core Principle:** Every score must answer two questions:
1. **Why is this the score?** (transparency)
2. **What's the one best action?** (actionability)

---

## Life Score Calculation

### Components

Life Score aggregates 5 sphere scores with system-level factors:

```
Life Score = Weighted Average(Sphere Scores) × Alignment Factor × Momentum Factor
```

**Conceptual Breakdown:**
- **Base Score**: Average of all sphere scores, weighted by user priority
- **Alignment Factor**: Cross-sphere synergies detected by Oracle (0.8-1.2)
- **Momentum Factor**: Overall trend direction across all spheres (0.9-1.1)

### Default Sphere Weights

- Health: 25% (foundation)
- Finance: 20% (stability)
- Business: 25% (impact)
- Development: 15% (growth)
- Social: 15% (connection)

Users can adjust weights based on life stage/priorities.

### Alignment Factor

Oracle discovers correlations between spheres and applies bonuses/penalties:

- **Positive alignment** (+): "Gym ↑ → Business ↑" (coefficient 1.05-1.2)
- **Negative alignment** (−): "Sleep ↓ → Health ↓ → Business ↓" (coefficient 0.8-0.95)
- **Neutral**: No strong correlations detected (coefficient 1.0)

### Momentum Factor

Tracks whether you're improving or declining:

- **Strong upward trend**: 3+ spheres improving (coefficient 1.05-1.1)
- **Flat/mixed**: Some up, some down (coefficient 0.95-1.05)
- **Downward trend**: 3+ spheres declining (coefficient 0.9-0.95)

---

## Sphere Score Calculation

Each sphere (Health, Finance, Development, Social, Business) scores 0-100 based on four dimensions:

### 1. Alignment (35% weight)
**"Are your goals and tasks working together?"**

- Goals ↔ Tasks correlation strength
- Tasks ladder up to active goals
- No orphaned tasks (tasks without goals)
- No stalled goals (goals without recent tasks)

**Example:**
- Goal: "Run 100km this month"
- Tasks: "Morning run 5km" (3x/week) ✓
- Alignment: High (tasks directly support goal)

### 2. Momentum (25% weight)
**"Are you trending up or down?"**

- 7-day trend vs 30-day average
- Completion velocity (are you accelerating?)
- Recent activity vs historical baseline
- Consistency streaks

**Example:**
- Last 7 days: 5 workouts
- Previous 30 days avg: 3 workouts/week
- Momentum: Positive (upward trend)

### 3. Coverage (25% weight)
**"Are you tracking the right things?"**

- Signal quality (data freshness, completeness)
- Goal diversity (multiple goal types active)
- Task distribution (balanced across goal types)
- No blind spots in sphere tracking

**Example:**
- Health signals: WHOOP ✓, Sleep ✓, Workouts ✓, Nutrition ✗
- Coverage: 75% (missing nutrition data)

### 4. Stability (15% weight)
**"Is this sustainable?"**

- Variance in performance (consistency)
- Burnout risk detection
- Goal churn rate (constantly changing goals = unstable)
- Task completion reliability

**Example:**
- Workout completion: 85% consistent
- Sleep quality: Highly variable
- Stability: Medium (sleep instability detected)

---

## Goals Score (Per Sphere)

The Goals Score measures how well your goal/task system is functioning within each sphere.

### Components

**Goals Score = (Task Completion Rate × 0.4) + (Goal Progress Rate × 0.3) + (Goal-Task Alignment × 0.3)**

### What It Measures

1. **Task Completion Rate**
   - Daily/weekly task completion percentage
   - Target: >80% completion
   - Below 60%: Goals are unrealistic or tasks poorly defined

2. **Goal Progress Rate**
   - Are goals moving toward completion?
   - Measured by milestone/progress updates
   - Stalled goal detection: 14+ days no progress

3. **Goal-Task Alignment**
   - Do tasks ladder up to goals?
   - Are all goals supported by tasks?
   - Are all tasks linked to active goals?

### Example Calculation

**Business Sphere Goals Score:**
- Task completion: 87% → 34.8 points
- Goal progress: 75% → 22.5 points
- Alignment: 92% → 27.6 points
- **Total: 85/100**

### Why This Matters

Goals Score answers: "Is your execution system working?" Independent of whether you're hitting targets, it shows if your process is sound.

---

## Score States & Triggers

Every score (Life Score, Sphere Score, Goals Score) has three states with clear triggers.

### Green State (70-100)

**Meaning:** Healthy, on track, sustainable

**Triggers:**
- Majority of dimensions above 70
- Positive or stable momentum
- No critical gaps in coverage
- Stable variance

**Agent Behavior:**
- Positive reinforcement
- Suggest stretch goals
- Highlight correlations
- Example: "12-day streak. Excellent consistency."

### Yellow State (50-69)

**Meaning:** Needs attention, trending toward problems

**Triggers:**
- 1-2 dimensions below 60
- Flat or slightly negative momentum
- Coverage gaps detected
- Increasing variance

**Agent Behavior:**
- Gentle nudges
- Identify specific weakness
- Suggest one corrective action
- Example: "Task completion at 62%. Focus: finish 3 pending tasks today."

### Red State (0-49)

**Meaning:** Critical, requires immediate action

**Triggers:**
- 2+ dimensions below 50
- Strong negative momentum
- Major coverage gaps (missing key signals)
- High instability

**Agent Behavior:**
- Aggressive alerts
- Demand action
- Simplify recommendations to one thing
- Example: "Health score critical. ONE ACTION: Schedule workout NOW."

---

## Explainability Rules

### Every Score Must Show

1. **Current Value**
   - The number (0-100)
   - Trend arrow (▲ up, — flat, ▼ down)

2. **Why This Score**
   - Top 2 contributing factors (positive or negative)
   - Specific data points that drove the score
   - Example: "Score: 87. Why: 12-day workout streak (+15), Sleep quality excellent (+8)"

3. **One Best Action**
   - Single, specific, actionable recommendation
   - Should address the biggest weakness
   - Example: "Best action: Add 2 strength training sessions this week"

### Transparency Principles

- **No Black Boxes**: User can always drill down to raw data
- **Factor Attribution**: Show which dimension contributed what
- **Historical Context**: Compare to personal baseline, not generic targets
- **Agent Voice**: Explanation matches agent personality (Vita = direct, Argentum = analytical)

---

## Example: Health Sphere Score Breakdown

**Score: 87/100** ▲

### Why This Score

**Positive Factors:**
- Alignment: 92 (tasks perfectly support goals)
- Momentum: 88 (12-day workout streak, accelerating)

**Negative Factors:**
- Coverage: 75 (missing nutrition tracking)
- Stability: 82 (sleep quality variable)

### Dimension Details

| Dimension | Score | Status | Key Driver |
|-----------|-------|--------|------------|
| Alignment | 92 | Green | All workout tasks → running goal |
| Momentum | 88 | Green | 12-day streak, improving |
| Coverage | 75 | Yellow | Nutrition data missing |
| Stability | 82 | Green | Workouts consistent, sleep variable |

### One Best Action

**"Add nutrition tracking via Cal AI to reach 90+ health score."**

Why: Coverage is the only yellow dimension. Adding nutrition data will complete the health picture and improve overall score by ~5 points.

### Agent Voice (Vita)

"87. Strong. 12-day workout streak is exceptional momentum. Sleep quality varies but acceptable. Add nutrition tracking to complete the picture. You're 3 points from 90."

---

## Special Cases

### New User (Insufficient Data)

- Show "Insufficient Data" instead of score
- Minimum data requirements per sphere
- Guide user through initial setup
- Example: "Health Score: Pending. Connect WHOOP and log 3 workouts to calculate."

### Stalled Sphere (No Activity)

- Score decays over time (1-2 points per day)
- After 14 days: automatic yellow state
- After 30 days: automatic red state
- Agent escalates notifications

### Recovery from Red State

- Requires 7+ consecutive days of improvement
- Score increases faster during recovery (bonus momentum)
- Agent provides positive reinforcement
- Example: "3-day recovery streak. Health score: 52 (+8). Keep going."

---

## Oracle Meta-Intelligence

Oracle operates above individual spheres to provide system-level insights.

### Correlation Discovery

- Monitors all spheres for patterns
- Detects positive/negative relationships
- Confidence threshold: 75%+ to show user
- Example: "Gym sessions ↑ → Business productivity ↑ (89% confidence, 30-day correlation)"

### Life Score Optimization

- Identifies highest-leverage action across all spheres
- Considers ROI (effort vs score impact)
- Example: "Fixing Social sphere (+10 possible) easier than optimizing Business (+3 possible)"

### Early Warning System

- Predicts score degradation 3-7 days ahead
- Example: "Warning: Current trajectory → Health score 72 in 5 days. Act now."

---

## Design Philosophy

1. **Scores Drive Behavior**: Every score should motivate action, not just inform
2. **One Action Only**: Never overwhelm with 10 suggestions
3. **Aggressive When Needed**: Red states demand urgent response
4. **Celebrate Wins**: Green states get positive reinforcement
5. **No Excuses**: System doesn't accept "I'm busy" — priorities are explicit in weights

---

## Version

**v0.1** - Conceptual model for demo phase

Future iterations will refine weights, thresholds, and agent logic based on user data.

---

*Last Updated: 2026-01-06*
