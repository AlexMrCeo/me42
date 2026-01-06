# My42 - The Life Operating System

Your personal AI infrastructure. 6 spheres. 6 agents. 1 system. Complete visibility of your life.

## About

My42 is a Life Operating System that uses AI agents to monitor, analyze, and optimize every aspect of your life across 5 core spheres: Health, Finance, Development, Social, and Business. Each sphere has a dedicated AI agent that provides aggressive nudges, intelligent insights, and proactive recommendations.

**Current Status:** Vision demo (v0.1) - This is a static website demonstrating the UX and concept with fictional data.

## Product Specification

For complete product details, architecture, and capabilities, see **[docs/PRODUCT_SPEC.md](docs/PRODUCT_SPEC.md)**.

## Running Locally

This is a static website with no build process required.

1. Clone the repository:
   ```bash
   git clone https://github.com/AlexMrCeo/me42.git
   cd me42
   ```

2. Open the site:
   ```bash
   open index.html
   # or just double-click index.html in your file browser
   ```

3. For a local server (optional):
   ```bash
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Project Structure

```
/
├── index.html              # Landing page
├── demo/
│   └── goals.html          # Interactive goals demo
├── css/
│   ├── styles.css          # Global styles
│   └── demo.css            # Demo-specific styles
├── assets/
│   └── img/                # Image assets
├── docs/
│   └── PRODUCT_SPEC.md     # Product specification (single source of truth)
└── [sphere pages]          # health.html, finance.html, etc.
```

## Technology

- Pure HTML + CSS + vanilla JavaScript
- No frameworks, no build tools
- Static site ready for deployment on Vercel, Netlify, GitHub Pages, etc.

## Deployment

Deploy to any static hosting platform:

- **Vercel**: Connect GitHub repo, auto-deploy on push
- **Netlify**: Drag & drop or GitHub integration
- **GitHub Pages**: Enable in repo settings

## Contributing

This is currently a vision demo. Contributions welcome for:
- UX improvements
- Visual design refinements
- Additional sphere detail pages
- Documentation

## License

© 2026 My42. All rights reserved.

---

**Don't Panic** - The answer to everything is coming soon.
