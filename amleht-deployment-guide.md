# amleht.eu — Deployment Guide
## From Zero to Live in 30 Minutes

This guide walks you through getting the amleht.eu holding page live on all five domains using GitHub and statichost.eu. Every step is covered.

---

## What You'll Have When Done

- The animated aurora holding page live at amleht.eu
- All five domains pointing to the same page
- Free automatic SSL (https://) on every domain
- **Fully automatic deployment: `git push` → webhook fires → live in ~12 seconds**
- No manual dashboard visits required — ever
- 100% EU-sovereign hosting pipeline

> **Status (15 Feb 2026):** Pipeline fully operational and verified. GitHub webhook triggers statichost auto-deploy on every push to `main`. All five domains serving the latest code automatically.

---

## Part 1: Create the GitHub Repository

### Step 1 — Go to GitHub
Open https://github.com and sign in to your account.

### Step 2 — Create New Repository
Click the **+** icon (top-right) → **New repository**

Fill in:
- **Repository name:** `amleht-site`
- **Description:** `amleht.eu — EU Sovereign Multi-Agent Infrastructure Intelligence`
- **Visibility:** Private (recommended — your site is public via statichost, but the source stays private)
- **Initialize:** Check "Add a README file"

Click **Create repository**.

### Step 3 — Upload the Site Files
In the repository page, click **Add file** → **Upload files**

Drag and drop these three files (provided in the download pack):
1. `index.html` — the holding page with animated aurora
2. `statichost.yml` — the statichost config (one line: `public: .`)
3. `favicon.svg` — the amleht "a" favicon

Click **Commit changes** with message: `Initial holding page`

**Your repo should now contain:**
```
amleht-site/
├── index.html        ← the animated aurora holding page
├── statichost.yml    ← tells statichost where to find the site
├── favicon.svg       ← browser tab icon
└── README.md         ← auto-generated
```

---

## Part 2: Connect to statichost.eu

### Step 4 — Sign Up
Go to https://www.statichost.eu/ and click **Get Started** or **Sign Up**.

Sign in with your email — they use magic link authentication (no password needed, they'll email you a login link).

### Step 5 — Create a New Site
Once logged in, click **Add site** (or similar).

Enter your GitHub repository URL:
```
https://github.com/YOUR-USERNAME/amleht-site.git
```

Since this is a **private** repository, statichost will give you a **deploy key** (an SSH public key). You'll need to add this to GitHub:

1. Copy the deploy key from statichost
2. Go to your GitHub repo → **Settings** → **Deploy keys**
3. Click **Add deploy key**
4. Paste the key, give it a title like "statichost.eu", tick "Allow read access"
5. Click **Add key**

Go back to statichost and trigger a build. It should succeed — you'll see your site live at:
```
amleht-site.statichost.page
```

Visit that URL to confirm the aurora is breathing.

### Step 6 — Add Your Domains
In the statichost dashboard, go to your site → **Settings** → **Domains**

Add each domain:
- `amleht.eu`
- `www.amleht.eu`
- `amleht.io`
- `www.amleht.io`
- `amleht-consulting.eu`
- `www.amleht-consulting.eu`
- `amleht-consulting.io`
- `www.amleht-consulting.io`
- `amleht-consulting.com`
- `www.amleht-consulting.com`

---

## Part 3: Configure DNS in GoDaddy

### Step 7 — Log Into GoDaddy
Go to https://dcc.godaddy.com/ → **My Products** → find your domain → **DNS**

### Step 8 — Configure Each Domain

For **each** of the five domains, you need to add/modify two DNS records:

**Record 1 — Root domain (e.g. amleht.eu)**
```
Type:   A
Name:   @
Value:  Check statichost dashboard for current IP
        (or use ALIAS/ANAME to amleht-site.statichost.page if GoDaddy supports it)
TTL:    600
```

**Important note on root domains:** GoDaddy does not support ALIAS/ANAME records natively. The recommended approach is:
- If GoDaddy offers "Forwarding": Set up domain forwarding from the root (amleht.eu) to www.amleht.eu with a 301 redirect
- Then the www version handles everything via CNAME

**Record 2 — www subdomain**
```
Type:   CNAME
Name:   www
Value:  amleht-site.statichost.page
TTL:    600
```

### DNS Records Summary — All Five Domains

**amleht.eu**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | amleht-site.statichost.page |
| Forward | @ | https://www.amleht.eu (301) |

**amleht.io**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | amleht-site.statichost.page |
| Forward | @ | https://www.amleht.io (301) |

**amleht-consulting.eu**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | amleht-site.statichost.page |
| Forward | @ | https://www.amleht-consulting.eu (301) |

**amleht-consulting.io**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | amleht-site.statichost.page |
| Forward | @ | https://www.amleht-consulting.io (301) |

**amleht-consulting.com**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | amleht-site.statichost.page |
| Forward | @ | https://www.amleht-consulting.com (301) |

### Step 9 — Wait for DNS Propagation
DNS changes can take 10 minutes to 48 hours to propagate globally, but usually resolve within 30 minutes.

Check progress at: https://www.whatsmydns.net/
Enter each domain and look for the CNAME pointing to statichost.page.

### Step 10 — SSL Certificates
statichost automatically provisions SSL certificates on the first request to each custom domain. The very first visit may take a second or two — after that, it's instant.

---

## Part 4: Verify Everything

Visit each domain and confirm the aurora is breathing:
- [ ] https://www.amleht.eu
- [ ] https://amleht.eu (should redirect to www)
- [ ] https://www.amleht.io
- [ ] https://amleht.io
- [ ] https://www.amleht-consulting.eu
- [ ] https://amleht-consulting.eu
- [ ] https://www.amleht-consulting.io
- [ ] https://amleht-consulting.io
- [ ] https://www.amleht-consulting.com
- [ ] https://amleht-consulting.com

---

## Part 5: Set Up the GitHub Webhook (Auto-Deploy)

Without a webhook, statichost won't know when you push new code. You'd have to manually trigger builds in the dashboard every time. The webhook makes it automatic.

### Step 11 — Add Webhook on GitHub

1. Go to **github.com/pbvd/amleht-site**
2. Click **Settings** (top tab bar)
3. Click **Webhooks** (left sidebar)
4. Click **Add webhook**
5. Fill in:
   - **Payload URL:** `https://builder.statichost.eu/amleht-eu`
   - **Content type:** `application/json`
   - **Secret:** leave blank
   - **Which events?** Select **Just the push event**
   - **SSL verification:** leave enabled (ticked)
6. Click **Add webhook**

You'll see a green tick next to the webhook once GitHub successfully pings statichost.

> **Verified 15 Feb 2026:** Webhook is active and confirmed working. A test push (`7ee176f`) triggered an automatic build and deploy in 12 seconds with no manual intervention. Green tick showing on GitHub, "Currently published" showing on statichost.

### How to Verify It Works
1. Make any small change to a file
2. `git add . && git commit -m "test" && git push origin main`
3. Check the statichost dashboard — a new build should appear within seconds
4. No manual trigger needed

> **Note:** The webhook URL format is `https://builder.statichost.eu/{site-name}` where `{site-name}` is your statichost site identifier (visible in your dashboard URL).

### Current Webhook Configuration (for reference)
| Setting | Value |
|---------|-------|
| Payload URL | `https://builder.statichost.eu/amleht-eu` |
| Content type | `application/json` |
| Secret | (none) |
| SSL verification | Enabled |
| Events | Push only |
| Status | Active, green tick |

---

## Day-to-Day Workflow (Going Forward)

### Making Changes
1. Edit files locally (or have Claude Code generate updated HTML)
2. Test locally in the browser (`open index.html` or Cmd+Shift+R to hard refresh)
3. Commit and push to GitHub:
   ```
   git add index.html
   git commit -m "feat: description of change"
   git push origin main
   ```
4. Webhook fires automatically — statichost builds and deploys in ~12 seconds
5. Hard refresh the live site (Cmd+Shift+R) to bypass browser cache
6. All five domains update simultaneously — no dashboard visit needed

### Quick Reference — The Full Cycle
```
Edit code → Test locally → git add → git commit → git push
    ↓
GitHub receives push → webhook fires to statichost
    ↓
statichost clones repo → deploys to all domains (~12 seconds)
    ↓
Hard refresh browser (Cmd+Shift+R) → see changes live
```

### If the Site Doesn't Update After a Push
1. **Check the statichost dashboard** — is there a new build? Did it succeed?
2. **No new build appeared?** The webhook may not be configured. Either:
   - Set up the webhook (see Part 5 above), or
   - Manually trigger a build in the statichost dashboard
3. **Build succeeded but site looks old?** Hard refresh your browser (Cmd+Shift+R) — it's likely a cache issue
4. **Build failed?** Check the build log for errors

### When the Full Site is Ready
Same workflow, bigger `index.html` (or multiple pages). The pipeline doesn't change:
```
Local development → git push → statichost deploys → live on all domains
```

### Adding Pages Later
```
amleht-site/
├── index.html           ← homepage
├── about.html           ← about page
├── platform.html        ← platform overview
├── consulting.html      ← consulting services
├── contact.html         ← contact page
├── css/
│   └── styles.css       ← shared styles
├── img/
│   └── logo.png         ← logo assets
├── statichost.yml
├── favicon.svg
└── README.md
```

---

## Troubleshooting

**Site not loading after DNS change?**
DNS propagation takes time. Check https://www.whatsmydns.net/ — green ticks mean it's propagated in that region.

**SSL error on first visit?**
Normal — statichost provisions the certificate on first request. Refresh after 5 seconds.

**Build failed in statichost?**
Check the build log in the dashboard. For a pure HTML site with `public: .`, there's nothing to build — it should just work. Make sure `statichost.yml` is in the root of the repo.

**GoDaddy won't let me add ALIAS record?**
Use the forwarding approach described above. Root domain forwards to www, www uses CNAME to statichost.

---

## Architecture Summary

```
[You / Claude]
      │
      │  git push
      ▼
  [GitHub]  (private repo, EU accessible)
      │
      │  webhook auto-deploy
      ▼
  [statichost.eu]  (Swedish host, Hetzner EU servers)
      │
      │  serves via HTTPS
      ▼
  [Your domains via GoDaddy DNS]
      │
      ├── amleht.eu
      ├── amleht.io
      ├── amleht-consulting.eu
      ├── amleht-consulting.io
      └── amleht-consulting.com
```

---

*Guide prepared for amleht.eu — February 2026*
