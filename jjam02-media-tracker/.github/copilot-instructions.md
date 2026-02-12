# Copilot Instructions for jjam02-media-tracker

## Quick Summary
Small React + TypeScript app scaffolded with Vite. Uses Tailwind for styling. UI is component-driven; data is plain TypeScript objects living in-memory (no backend).

## Architecture & Key Patterns
- Components live in `src/components` (each file is a single component). Important components: `Header.tsx`, `MediaFormModal.tsx`, `MediaForm.tsx`, `MediaGrid.tsx`, `MediaCard.tsx`, `EditMediaForm.tsx`.
- Types are in `src/types/media.ts` — use these types for props and state to stay consistent.
- State & data flow: local state only. Parent components pass data and callbacks via props (e.g., `MediaGrid` receives an array of media and maps to `MediaCard`). Editing/adding flows use modals that pass `onClose` and callback props.
- Modals: `MediaFormModal` and `EditMediaFormModal` use `createPortal` to mount outside the main DOM node — follow their pattern for new overlays.

## Developer Workflows (commands)
- Start dev server: `npm run dev` (Vite with HMR).
- Build production: `npm run build`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint`.

Check `package.json` for exact script names before automation.

## Conventions & Style
- Use TypeScript types from `src/types/media.ts` for media items and component props.
- Keep components single-responsibility and file-scoped (one component per file).
- Styling: prefer Tailwind utility classes directly in JSX; small overrides may live in companion CSS files (e.g., `MediaCard.css`).
- Avoid introducing global state or new heavy dependencies — this project is intentionally minimal and local only.

## Integration Points
- No external API or database: media items are managed in-memory (check `App.tsx` for the main state). If you add persistence, note it's a cross-cutting change.
- Major dependencies: `react`, `react-dom`, `vite`, Tailwind-related setup. Modify `vite.config.ts` only if changing build behavior.

## Common Tasks & Examples
- Add a new component: create file in `src/components`, export default, add props typed with `src/types` where appropriate.
- New form/modal: mirror `MediaFormModal.tsx` + `MediaForm.tsx` pattern — modal wrapper handles portal + backdrop; form manages inputs and calls `onSubmit`.
- Editing flow: `MediaCard` triggers edit by lifting selected item to parent, then opens `EditMediaFormModal` with `initialValues` prop.

## What to watch for
- There are no unit tests in the repo — be conservative with refactors and validate with the dev server.
- Keep changes small and focused; update `src/types/media.ts` if you change the media shape and adjust all usages.

## Files to inspect when troubleshooting
- [src/components/MediaFormModal.tsx](src/components/MediaFormModal.tsx) — modal + portal pattern.
- [src/components/MediaForm.tsx](src/components/MediaForm.tsx) — form fields and submit handlers.
- [src/components/MediaGrid.tsx](src/components/MediaGrid.tsx) and [src/components/MediaCard.tsx](src/components/MediaCard.tsx) — rendering and event wiring.
- [src/types/media.ts](src/types/media.ts) — canonical media shape.
- [vite.config.ts](vite.config.ts) — build config.

## Final notes
Be explicit in PRs about any changes to the media shape or global CSS; those are the highest-impact changes here.

---
If anything is missing or you'd like the instructions to include testing, CI, or a contributor checklist, tell me which area to expand.