---
tags:
  - private
  - campaign
---

# Codex Workflow

## Startup Order

1. Always begin by reading [[private/campaign/AGENT]].
2. Then read [[Chronicles/Campaign Prep/AGENT]].
3. Then read [[Chronicles/Campaign Prep/Campaign Summary]].
4. Treat [[Chronicles/Campaign Prep/Campaign Summary]] as the primary compressed
   context.
5. Use [[private/campaign/_summary]] only as a reminder that the private summary
   is no longer canonical.
6. Read additional files only when required by the task.

## Working Rules

1. Preserve Obsidian markdown conventions, including wikilinks, headings, and frontmatter.
2. Prefer targeted edits over broad rewrites.
3. Reuse existing notes, folders, and conventions when reasonable.
4. Refactor only when it improves clarity, consistency, or future maintainability.
5. If existing notes conflict, reconcile them carefully and preserve useful material.
6. Preserve Quartz publishing compatibility and avoid unnecessary changes to site config, content organization, slugs, and published paths.
7. Keep private coordination notes in `content/private/` unless they are intentionally meant to publish.
8. Actively align ideas with established themes and motifs.
9. When proposing new elements, briefly indicate which themes they reinforce.
10. Prefer expanding or sharpening existing themes before introducing new ones.
11. If a new theme seems necessary, propose it explicitly and justify how it is distinct from existing themes before adding it.

## Summary Maintenance

1. Update [[Chronicles/Campaign Prep/Campaign Summary]] whenever canon, world state, factions, NPC relationships, active arcs, or other future-relevant facts change.
2. Keep [[Chronicles/Campaign Prep/Campaign Summary]] concise and high-signal.
3. Do not duplicate full notes into the summary; link out to the source notes instead.
4. Add only enough navigation context to help future sessions find the next relevant file quickly.

## File Reading Strategy

1. Start with the summary and identify the minimum additional files needed.
2. Prefer reading index notes or the most canonical note for a topic before opening many leaf notes.
3. Avoid scanning the whole vault unless the task genuinely requires it.
4. When adding new notes, link them from an existing public index note if that improves discoverability.

## Current Structure

- Public campaign material lives in:
  - `content/index.md`
  - `content/Atlas/`
  - `content/Actors/`
  - `content/Lore/`
  - `content/Chronicles/`
- Private operational notes for Codex live in:
  - `content/private/campaign/`
- Quartz config and publishing live in:
  - `quartz.config.ts`
  - `.github/workflows/deploy.yml`

## Publishing Guardrails

1. `content/private/` is the safe place for non-published agent notes because Quartz already ignores `private`.
2. Do not move or rename published notes casually; that can affect routes, backlinks, and existing links.
3. Be cautious with frontmatter, aliases, ids, and folder names in `content/`.
4. Preserve the current GitHub Pages workflow unless a task explicitly requires deployment changes.

## Write / Commit Preference

1. Do not write files immediately after each small interaction.
2. First gather the proposed set of file changes and summarize them.
3. Ask for approval once before applying repo changes.
4. When possible, batch related file edits into a single commit.
5. Prefer fewer, grouped commits over many small commits unless explicitly requested otherwise.
6. Default to planning mode first and write mode second.
7. Do not create exploratory files without explicit approval.
