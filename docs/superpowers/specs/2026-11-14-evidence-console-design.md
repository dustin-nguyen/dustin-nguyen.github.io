# Evidence Console Design

## Intent

Help hiring managers assess Duc Nguyen in the first viewport and contact him or inspect his work without scanning the full portfolio.

## Goals

- Make verified Android reliability outcomes visible beside the hero content.
- Keep the direct email action as the primary conversion path.
- Add a clear, keyboard-accessible route to the detailed work section.
- Preserve the current dark visual system, factual copy, and resume link.

## Non-goals

- Do not add unverified claims, third-party integrations, forms, or new dependencies.
- Do not replace the existing site visual system.

## Approaches

1. Expand the existing impact strip. This keeps the hero unchanged, but delays the proof until after the fold.
2. Add a dense metrics card. This adds proof but risks looking like a generic dashboard.
3. Add a release-health console within the hero. This connects evidence to the portrait and creates a first-view path from outcome to supporting work.

The selected approach is 3. It gives the portfolio an Android-engineering-specific artifact without changing product truth.

## Design

The hero uses three layers: the hiring statement and contact action, the portrait, and a slim release-health console below the portrait. The console presents the three verified outcome figures as engineering signals, labels their scope, and links to the work section. It uses the existing graphite, citron, ivory, and sage palette; Space Grotesk display type; thin rules; and squared data cells. Motion remains limited to the existing entrance animation and respects reduced-motion settings.

## Constraints

- Use React, TypeScript, Tailwind, Motion, and Lucide already in the repository.
- Maintain visible focus styles, semantic links, and reduced-motion support.
- Test mobile and desktop rendered views before deployment.
