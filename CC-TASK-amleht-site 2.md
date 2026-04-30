# Claude Code Task: Create amleht-site Repository

## Objective
Create the `amleht-site` GitHub repository for the amleht.eu holding page. This will be deployed to statichost.eu (EU-sovereign static hosting). Follow all established development standards.

## Context
- amleht.eu is an EU Sovereign Multi-Agent Infrastructure Intelligence platform for European financial institutions
- The holding page features an animated aurora borealis background with colours representing EU member state flags
- Hosting: statichost.eu (Swedish, GDPR-compliant, Hetzner EU servers)
- DNS: Domains registered at GoDaddy, five domains all point to this single site
- This is a **static site** — pure HTML/CSS, no build process required

## Repository Setup

### 1. Create the GitHub Repository
```bash
gh repo create amleht-site --private --description "amleht.eu — EU Sovereign Multi-Agent Infrastructure Intelligence — Holding Page & Website"
cd amleht-site
```

### 2. Create CLAUDE.md (Institutional Memory)
Create `CLAUDE.md` in the repo root with the following content:

```markdown
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
```

### 3. Create the Site Files

**index.html** — Copy the content from the file provided below. This is the animated aurora holding page with:
- Moving aurora background (6 independently drifting colour layers)
- Breathing brightness animation
- Logo: amleht | EU in Outfit font
- Tagline: EU Sovereign Multi-Agent Infrastructure Intelligence
- "Coming Soon" that gently pulses in and out
- Responsive design (desktop, tablet, mobile)
- Inline favicon as data URI
- Full meta tags for SEO

**statichost.yml** — One line config:
```yaml
# statichost.eu configuration for amleht.eu
# No build process needed — pure static HTML
public: .
```

**favicon.svg** — Gold "a" on EU blue:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs><style>@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap');</style></defs>
  <rect width="64" height="64" rx="14" fill="#003399"/>
  <text x="32" y="46" font-family="Outfit, sans-serif" font-weight="500" font-size="38" fill="#FFCC00" text-anchor="middle">a</text>
</svg>
```

### 4. Commit and Push
```bash
git add -A
git commit -m "feat: initial holding page with animated aurora borealis

- Animated aurora background with EU member state flag colours
- Each colour layer drifts independently (Finland, Ireland, Netherlands, France, EU)
- Breathing brightness animation overlay
- Outfit font: amleht (500) | EU (300) with gold separator
- Coming Soon pulse animation
- Responsive design for mobile/tablet/desktop
- Favicon: gold 'a' on EU blue
- statichost.eu config for auto-deployment
- CLAUDE.md institutional memory"

git push origin main
```

### 5. Provide the Repo URL
After push, provide Andrew with the repository URL:
```
https://github.com/YOUR-USERNAME/amleht-site.git
```
This URL is needed to connect the repo to statichost.eu.

## File Contents

### index.html
The complete holding page HTML is provided as a separate file alongside these instructions. It should be committed exactly as-is — it is a self-contained single-file website with all CSS inline.

### Key Technical Details
- Google Fonts Outfit loaded via @import in CSS
- Six aurora layers with unique CSS keyframe animations (18-24s cycles)
- backdrop-filter used for brightness breathing
- Favicon embedded as data URI SVG in <link rel="icon">
- All animations use will-change for GPU acceleration
- Media queries at 800px and 480px breakpoints

## Post-Creation
Once the repo is created and pushed, Andrew will:
1. Sign up at statichost.eu
2. Connect this repo via the magic link
3. Add the deploy key to GitHub
4. Configure domains in statichost dashboard
5. Update DNS records in GoDaddy

Claude Code's job is complete once the repo is created and the URL is provided.
