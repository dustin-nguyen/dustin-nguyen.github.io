# Evidence Console Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an outcome-led Android release-health console to the hero.

**Architecture:** Keep all behavior inside `Hero.tsx`. Add a typed local evidence array and render it as a semantic list below the portrait, with a link to the existing experience section.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Motion, Lucide React, Vite.

**Spec:** `docs/superpowers/specs/2026-11-14-evidence-console-design.md`

## Global Constraints

- Use only verified metrics: 40%, 20%, and 30%.
- Keep direct email as the main CTA.
- Preserve keyboard access, visible focus, and reduced-motion support.
- Add no dependencies.

## Review Focus

- Small mobile widths: the console must not clip or hide the resume action.
- Keyboard use: the console link must show visible focus.
- Reduced motion: new transition behavior must not add continuous motion.
- Screen readers: metric labels must read as one meaningful unit.
- Existing impact anchor: the existing proof CTA must remain valid.

### Task 1: Build the release-health console

**Files:**
- Modify: `components/Hero.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: existing `#experience` and `#impact` section anchors.
- Produces: a semantic evidence list and a focused work link in the hero.

- [x] **Step 1: Verify the console contract is absent**

Run: `rg -q "Release health" components/Hero.tsx`
Expected: exit code 1.

- [x] **Step 2: Implement the release-health console in `components/Hero.tsx`**

Render the three verified outcome figures as a semantic list beneath the portrait. Add an accessible link to `#experience` and keep the existing resume action.

- [x] **Step 3: Verify the production build**

Run: `npm run build`
Expected: exit code 0.

- [x] **Step 4: Verify the console contract**

Run: `rg "Release health|40%|20%|30%" components/Hero.tsx`
Expected: each value is present.

- [x] **Step 5: Commit**

Commit all changed source and design documents with the message `feat: add hero evidence console`.
