# My42 Product Specification

## A. Purpose

My42 is a Life Operating System that provides complete visibility and intelligent optimization across all areas of your life. It uses AI agents to actively monitor, analyze, and improve your performance through aggressive nudges and data-driven insights.

**Current Stage:** Vision demo with fictional data to showcase the concept and UX. This is not a functional product yet, but a demonstration of what the system will do.

**Philosophy:** Aggressive, proactive intelligence. The system doesn't wait for you to check in—it pushes you when needed. "4 days home. MOVE." "Goal stalled: 14 days." No sugarcoating.

---

## B. Core Model

### Sphere Architecture

My42 organizes life into **5 core spheres**, each with a dedicated AI agent:

1. **Health** (Agent: Vita)
2. **Finance** (Agent: Argentum)
3. **Development** (Agent: Sage)
4. **Social** (Agent: Nexus)
5. **Business** (Agent: Forge)

### Sphere Components

Each sphere contains:

- **Goals**: Long-term objectives within that sphere (e.g., "Run 100km this month")
- **Tasks**: Daily/weekly actions that ladder up to goals (e.g., "Morning run - 45min")
- **Signals**: Data inputs from integrations (WHOOP, bank API, location, etc.)
- **Sphere Score**: 0-100 numeric rating calculated from goals progress, task completion, and signal trends

**Important:** Goals & Tasks are NOT a separate sixth sphere. They are a mechanism present in every sphere. The "Goals Sphere" demo page showcases the goal/task system across all spheres.

### Life Score

The **Life Score** is the single north-star metric (0-100) that aggregates:
- Individual sphere scores (weighted average)
- Cross-sphere alignment (correlations discovered by Oracle)
- Trend momentum (improving vs declining)

Formula (conceptual):
```
Life Score = weighted_avg(sphere_scores) × alignment_factor × momentum_factor
```

**For detailed scoring model, see [LIFE_SCORE_MODEL.md](LIFE_SCORE_MODEL.md)**

### Oracle

The meta-agent that:
- Coordinates the 5 sphere agents
- Discovers cross-sphere correlations ("Gym ↑ → Business ↑")
- Calculates Life Score
- Generates system-level insights

**For agent hierarchy, behavior, and pressure model, see [AGENTS_MODEL.md](AGENTS_MODEL.md)**

---

## C. Key Capabilities

### Goal & Task Management
- Track 50+ goals across all spheres
- Auto-generate daily tasks from goals
- Voice-based task capture: "Apex, mark gym done"
- Stalled goal detection (14+ days no progress)
- Goal-task alignment scoring
- Completion velocity tracking

### Health Intelligence (Vita)
- WHOOP recovery & strain analysis
- Sleep quality & debt tracking
- Workout frequency & intensity
- Activity correlations (e.g., sleep → performance)
- Aggressive nudges: "4 days no workout. UNACCEPTABLE."

### Financial Intelligence (Argentum)
- Real-time spending analysis by category
- Income growth tracking (month-over-month)
- Budget surplus/deficit alerts
- Excess spending detection ("Coffee +€47 this week")
- Net worth trends
- Unused subscription detection

### Development Tracking (Sage)
- Learning velocity (books, courses, skills)
- Knowledge retention scoring
- Skill progression timelines
- Reading pace analysis

### Social Intelligence (Nexus)
- Location-based activity tracking
- Friend interaction frequency
- Travel score (days away from home base)
- Social balance monitoring
- Connection suggestions

### Business Performance (Forge)
- Project velocity tracking
- Revenue trends & targets
- YouTube/content analytics
- Output consistency scoring
- Business goal progress

### Cross-Sphere Features
- **Correlation Index**: Oracle discovers relationships ("Health ↑ → Business ↑")
- **Suggestions**: AI-generated recommendations based on patterns
- **Aggressive Notifications**: Push alerts when action is needed
- **Evening Review**: Daily reflection prompt + progress summary
- **Morning Planning**: AI-suggested daily task list
- **Voice Free-Form Capture**: Log anything via voice, AI categorizes it

---

## D. UX Mental Model

### Daily Loop
1. **Morning Planning** (7-9am): Review AI-suggested tasks, adjust priorities
2. **Active Nudges** (throughout day): Notifications when action needed or goals at risk
3. **Evening Review** (8-10pm): Reflect on completed tasks, log accomplishments, update goals

### Weekly Loop
1. **Weekly Review**: Sphere-by-sphere progress analysis
2. **Goal Adjustment**: Add/remove/modify goals based on performance
3. **Task Rebalancing**: Ensure daily tasks align with current goals

### Navigation Hierarchy
```
Life Overview (Life Score + 5 sphere scores)
    ↓
Sphere Overview (detailed sphere metrics + recent activity)
    ↓
Sphere Goals & Tasks (active goals, daily tasks, progress bars)
    ↓
Insights & Correlations (patterns discovered by Oracle)
```

### Mental Model
Think of My42 as:
- **Not a tracker**: An operating system
- **Not reactive**: Proactive and aggressive
- **Not fragmented**: Unified single source of truth
- **Not manual**: Automated data ingestion + AI intelligence

---

## E. Demo Scope

### What the Static Demo Shows (In Scope)
- Landing page with value proposition
- Life Score visualization with sphere breakdown
- Interactive Goals demo page (`demo/goals.html`) showing:
  - Active goals with progress bars
  - Daily tasks with completion states
  - AI agent personality (Apex)
  - Cross-sphere goal examples
- Individual sphere detail pages (Health, Finance, etc.)
- Agent personalities and capabilities
- Visual design system (cosmic theme, purple gradient)
- Navigation between pages

### Explicitly Out of Scope (Not in Demo)
- Real user authentication
- Actual data integrations (WHOOP, banks, etc.)
- Real-time data processing
- Backend infrastructure
- Database persistence
- Live correlation calculations
- Actual notifications/push system
- Voice input functionality
- Mobile apps

**Demo Purpose:** Show the vision, UX flow, and agent intelligence concept. Data is fictional but representative of real use cases.

---

## F. Data Sources (Future Implementation)

### Health Sphere
- WHOOP (recovery, strain, sleep, HRV)
- Apple Health / Apple Watch
- Workout apps (Strava, Nike Run Club, etc.)
- Cal AI (nutrition tracking)

### Finance Sphere
- Revolut API
- Traditional bank APIs (Open Banking)
- Investment platforms (if applicable)
- Cryptocurrency wallets (if applicable)

### Development Sphere
- Kindle highlights & reading data
- Course platforms (Udemy, Coursera, etc.)
- GitHub contribution activity
- Learning management systems

### Social Sphere
- Location services (iOS/Android)
- Calendar integrations (Google Calendar)
- Communication apps (if user permits)
- Travel tracking (flights, accommodations)

### Business Sphere
- YouTube Analytics API
- Project management tools (Linear, Notion, etc.)
- Revenue platforms (Stripe, payment processors)
- Time tracking tools
- Email analytics (if applicable)

### Universal
- Voice input (speech-to-text API)
- Manual user input (web interface, mobile app)
- Cross-sphere data sharing (Oracle coordination layer)

---

## Current Status

**Version:** 0.1 (Vision Demo)
**Stage:** Static website demonstration
**Next Steps:** User testing of UX flow, refine agent personalities, build backend infrastructure for real data

---

*Last Updated: 2026-01-06*
