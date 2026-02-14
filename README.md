# amleht.eu

EU Sovereign Multi-Agent Infrastructure Intelligence for European Financial Institutions.

## Domains
- [amleht.eu](https://amleht.eu) (primary)
- [amleht.io](https://amleht.io)
- [amleht-consulting.eu](https://amleht-consulting.eu)
- [amleht-consulting.io](https://amleht-consulting.io)
- [amleht-consulting.com](https://amleht-consulting.com)

## Hosting
Static site deployed via [statichost.eu](https://statichost.eu) — Swedish, GDPR-compliant, hosted on Hetzner EU servers.

- **Statichost subdomain:** amleht-eu.statichost.page
- **Deployment:** git push to `main` → auto-deploys within ~30 seconds
- **SSL:** auto-provisioned per domain on first request

## DNS Configuration
All five domains registered at GoDaddy, pointing to statichost:

| Record | Name | Value |
|--------|------|-------|
| A | @ | 95.217.26.94 |
| AAAA | @ | 2a01:4f9:c01f:8002:: |
| CNAME | www | amleht-eu.statichost.page |

- `amleht.eu` is the primary domain; all others redirect to it
- NS, SOA, _dmarc TXT, and _domainconnect CNAME records left as GoDaddy defaults

## Development
No build process. Edit `index.html` and push to `main`. Statichost auto-deploys within ~30 seconds.

## Setup Log — 14 February 2026

1. **Repository created** — `gh repo create amleht-site --private` on GitHub (pbvd/amleht-site)
2. **Files committed** — index.html (animated aurora holding page), favicon.svg, statichost.yml, CLAUDE.md, README.md, .gitignore
3. **Statichost connected** — repo linked via HTTPS at statichost.eu, initial deploy succeeded
4. **Repo made public** — required for statichost HTTPS cloning (no SSH deploy key support)
5. **Domains configured in statichost** — amleht.eu as primary, four others as redirects
6. **DNS updated at GoDaddy** — A, AAAA, and CNAME www records set for all five domains
7. **All domains verified live** — DNS resolving correctly, SSL certificates provisioned, holding page serving on all five domains
