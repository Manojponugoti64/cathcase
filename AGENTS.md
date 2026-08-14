<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cloud Agent development

- **Install:** `npm ci` (idempotent; uses `package-lock.json`)
- **Dev server:** `npm run dev` → http://localhost:3000 (also started automatically via `.cursor/environment.json` terminals)
- **Checks:** `npm run lint`, `npm run build`
- **No backend or secrets** — progress is stored in browser localStorage
- **Core E2E flow:** homepage → `/cases` → open a case → make a decision → `/atlas`
