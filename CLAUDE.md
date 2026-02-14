# CLAUDE.md — amleht-site

## Project Overview
Static website for amleht.eu — EU Sovereign Multi-Agent Infrastructure Intelligence for European Financial Institutions.

## Architecture
- Pure static HTML/CSS/JS — no build process, no frameworks
- Hosted on statichost.eu (Swedish, GDPR-compliant, EU servers on Hetzner)
- Deployed via git push → statichost auto-deploys from main branch
- Five domains all resolve to this site:
  - amleht.eu (primary)
  - amleht.io
  - amleht-consulting.eu
  - amleht-consulting.io
  - amleht-consulting.com

## Design System
- **Font:** Outfit (Google Fonts) — weight 500 for "amleht", weight 300 for "EU" and tagline
- **Primary colours:**
  - EU Blue: #003399
  - EU Gold/Yellow: #FFCC00
  - White: #FFFFFF
- **Aurora colours (member state flags):**
  - Finland blue #003580 (Nebius inference location)
  - Ireland green #009A49
  - Netherlands orange #FF6C00 (home base — Amsterdam)
  - France red #CE1126
  - EU blue #003399 (sovereignty)
  - EU gold #FFCC00 (.eu TLD accent)
- **Logo format:** amleht | EU (Outfit font, gold separator bar, gold EU badge)
- **Background:** Animated aurora borealis with independently drifting colour layers

## File Structure
```
amleht-site/
├── index.html           ← holding page (animated aurora + coming soon)
├── statichost.yml       ← statichost.eu deployment config
├── favicon.svg          ← gold "a" on EU blue rounded square
├── CLAUDE.md            ← this file
└── README.md            ← project description
```

## Deployment
- Push to `main` → statichost auto-deploys within ~30 seconds
- SSL certificates auto-provisioned on first request per domain
- No CI/CD pipeline needed — statichost handles everything

## Standards
- All commits should be descriptive and conventional
- Test index.html locally in browser before pushing
- Keep the site as a single self-contained HTML file (inline CSS, Google Fonts via @import)
- No external JS dependencies
- Favicon embedded as SVG data URI in the HTML head AND as separate file
