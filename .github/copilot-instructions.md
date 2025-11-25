# Copilot / AI Agent Instructions

Quick reference for working with this learning-focused JavaScript repository.

1) Big-picture architecture
- Structure: the repo is a collection of small static projects (learning sessions). Each session folder (for example `js-01-data_types/` and `js-02-functions/`) is a self-contained static site.
- Source layout (per-session):
  - `index.html` — session entry HTML.
  - `public/` — static assets (images, fonts, JSON data).
  - `src/` — source code: `css/`, `js/`, `modules/`, `pages/`.
  - `src/modules/` — reusable UI modules (e.g., `header/header.js`, `footer/footer.js`).
  - `src/pages/` — individual pages with their own HTML/CSS/JS.

2) Data & control flow patterns
- Pages are static files: content + per-page JS/CSS. Global behavior should live in `src/js/main.js` or `src/js/utils.js` to avoid duplication.
- Reusable DOM/behavior belongs in `src/modules/*` (header/footer). Edit those modules to affect every page.

3) Development workflow (how to run & test changes)
- There is no build system or package manifest in the root — these are static HTML/CSS/JS projects.
- Quick local preview options (pick one):
  - Use VS Code Live Server (recommended for iterative editing).
  - From PowerShell: run `cd <session-folder>; python -m http.server 8000` and open `http://localhost:8000`.
  - Or: install `http-server` globally and run `npx http-server -p 8000` (only if adding Node tooling).

4) Conventions & patterns to follow
- Keep per-page concerns inside `src/pages/<page>/` (each page has its own `.html`, `.css`, `.js`).
- Put shared utilities in `src/js/utils.js` and global initialisation in `src/js/main.js`.
- Modules are small: `src/modules/header/header.js` and `src/modules/footer/footer.js` should only handle DOM concerns for their region.
- Assets should be read from `public/` (images, fonts). Use relative paths from HTML/CSS to keep things portable.

5) Integration points & external dependencies
- There are currently no external build or dependency managers configured (no `package.json`). If you add Node-based tooling, update the root `README.md` to document the new commands.

6) When editing or adding pages/components — concrete examples
- To add a new page: create `src/pages/<name>/<name>.html`, add styles in the same folder, and a small `<script>` that uses functions from `src/js/utils.js` if needed.
- To change the site header across pages, edit `src/modules/header/header.js` (or its corresponding template include in `index.html`).

7) Commit & PR guidance for AI agents
- Keep changes focused and minimal per PR (one page or one module change). If adding tooling (Node, linters, etc.), include a short `README` update documenting how to run the new commands.

8) Files to consult first (fast start)
- `README.md` (root) — project purpose and list of sessions.
- `js-01-data_types/README.md` — session-level explanation and directory expectations.
- Example files: `js-01-data_types/index.html`, `js-01-data_types/src/modules/header/header.js`, `js-01-data_types/src/js/main.js`, `js-01-data_types/src/js/utils.js`.

If anything here is unclear or you want more detail on a particular session (for example, deeper docs for `pages/` routing or an example of how `index.html` wires modules together), tell me which session or file and I will expand the instructions.
