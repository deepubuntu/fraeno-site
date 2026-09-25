# Fraeno website

This repository contains the public website for [fraeno.com](https://fraeno.com),
its browser and content checks, and the contact Worker used by the access form.

Fraeno's proprietary validation engine and hosted control plane are maintained
in separate private repositories. No engine source, runner source, release
automation, or customer validation logic belongs in this repository.

## Local checks

```bash
python3 -m pip install -r requirements-dev.txt
python3 -m pytest tests/test_site.py
npm ci
npx playwright install chromium webkit
npm run test:e2e
node --test contact-worker/test/index.test.mjs
```

The production workflow deploys the exact tested `site/` directory to the
existing Cloudflare Pages project named `fraeno`, then verifies both
`fraeno.com` and `www.fraeno.com` against the deployment commit.
